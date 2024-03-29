import React, { useReducer, useEffect } from 'react';
import AuthContext from './AuthContext';
import authReducer from './AuthReducer';
import authAPI from '../../API/auth';
import { setAuthToken } from '../../utils';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../types';
const AuthState = props => {
  const initialState = {
    user: {},
    token: localStorage.getItem('authToken'),
    loading: true,
    isAuthenticated: false,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    if (localStorage.getItem('authToken')) loadUser();
  }, []);
  const loadUser = async () => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) setAuthToken(authToken);
    try {
      const result = await authAPI.loadUser();
      dispatch({ type: USER_LOADED, payload: result.data });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: AUTH_ERROR });
    }
  };
  const registerUser = async formData => {
    try {
      const result = await authAPI.registerUser(formData);

      dispatch({ type: REGISTER_SUCCESS, payload: result.data });
      loadUser();
    } catch (error) {
      console.error(error.message);
      dispatch({ type: REGISTER_FAIL, payload: error.response });
    }
  };

  const loginUser = async formData => {
    try {
      const result = await authAPI.loginUser(formData);

      dispatch({ type: LOGIN_SUCCESS, payload: result.data });
      loadUser();
    } catch (error) {
      console.error(error.message);
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    }
  };

  const logOut = () => dispatch({ type: LOGOUT });
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        registerUser,
        loginUser,
        logOut
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
