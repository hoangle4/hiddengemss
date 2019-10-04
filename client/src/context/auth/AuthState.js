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
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, initialState);
  const registerUser = async formData => {
    const result = await authAPI.registerUser(formData);
    console.log(result);
  };
  return (
    <AuthContext.Provider value={{}}>{props.children}</AuthContext.Provider>
  );
};
export default AuthState;
