import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import authReducer from './AuthReducer';

import authAPI from '../../API/auth';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT
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
  const registerUser = async formData => {
    try {
      const result = await authAPI.registerUser(formData);

      dispatch({ type: REGISTER_SUCCESS, payload: result.data });
    } catch (error) {
      console.error(error.message);
      dispatch({ type: REGISTER_FAIL, payload: error.response });
    }
  };

  const loginUser = async formData => {
    try {
      const result = await authAPI.loginUser(formData);

      dispatch({ type: LOGIN_SUCCESS, payload: result.data });
    } catch (error) {
      console.error(error.message);
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        loading: state.loading,
        isAuthenticated: state.isAuthenticated,
        error: state.error,
        registerUser,
        loginUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthState;
