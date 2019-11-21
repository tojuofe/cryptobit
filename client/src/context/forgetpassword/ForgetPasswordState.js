import React, { useReducer } from 'react';
import axios from 'axios';
import ForgetPasswordContext from './ForgetPasswordContext';
import ForgetPasswordReducer from './ForgetPasswordReducer';
import {
  FORGOTPASSWORD_SUCCESS,
  FORGOTPASSWORD_FAIL,
  CHANGE_PASSWORD,
  PASSWORD_ERROR,
  CLEAR_ERRORS
} from '../types';

const ForgetPasswordState = props => {
  const initialState = {
    pass: null,
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(ForgetPasswordReducer, initialState);

  // Check Email
  const checkEmail = async email => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const res = await axios.post('/api/forgotpassword', email, config);

      dispatch({ type: FORGOTPASSWORD_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: FORGOTPASSWORD_FAIL, payload: err.response.msg });
    }
  };

  // Change Password
  const changePassword = async ({ password, token }) => {
    try {
      const res = await axios.put(`/api/forgotpassword/${token}`, { password });
      dispatch({ type: CHANGE_PASSWORD, payload: res.data });
    } catch (err) {
      dispatch({ type: PASSWORD_ERROR, payload: err.response.data.msg });
    }
  };
  // Clear Error
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <ForgetPasswordContext.Provider
      value={{
        pass: state.pass,
        error: state.error,
        checkEmail,
        changePassword,
        clearErrors
      }}
    >
      {props.children}
    </ForgetPasswordContext.Provider>
  );
};

export default ForgetPasswordState;
