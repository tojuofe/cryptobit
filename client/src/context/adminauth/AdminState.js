import React, { useReducer } from 'react';
import axios from 'axios';
import AdminContext from './AdminContext';
import AdminReducer from './AdminReducer';
import setAuthToken from '../../utils/SetAuthToken';
import {
  ADMIN_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AdminState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    admin: null,
    error: null
  };

  const [state, dispatch] = useReducer(AdminReducer, initialState);

  // Load admin
  const loadAdmin = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get('/api/authadmin');

      dispatch({
        type: ADMIN_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  // Get User Wallet
  //   const getUserWallet = async () => {
  //     try {
  //       const res = await axios.get('/api/walletno/getuserwallet');

  //       dispatch({
  //         type: WALLET_LOADED,
  //         payload: res.data
  //       });
  //     } catch (err) {
  //       dispatch({
  //         type: WALLET_ERROR
  //       });
  //     }
  //   };

  // Login Admin
  const login = async formData => {
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/authadmin', formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      loadAdmin();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Logout User
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Error
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AdminContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        admin: state.admin,
        error: state.error,
        loadAdmin,
        //  getUserWallet,
        clearErrors,
        login,
        logout
      }}
    >
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminState;
