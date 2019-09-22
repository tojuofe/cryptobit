import React, { useReducer } from 'react';
import axios from 'axios';
import DashboardContext from './DashboardContext';
import DashboardReducer from './DashboardReducer';
import {
  REGISTER_DEPOSIT,
  DEPOSIT_LOADED,
  DEPOSIT_ERROR,
  REGISTER_WITHDRAW,
  WITHDRAW_LOADED,
  WITHDRAW_ERROR,
  CLEAR_TRANS
} from '../types';

const DashboardState = props => {
  const initialState = {
    deposits: [],
    withdraws: [],
    isAuthenticated: null,
    loading: true,
    clearsErrors: null
  };

  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  // Register Deposit
  const addDeposit = async proof => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('api/deposit', proof, config);

      dispatch({ type: REGISTER_DEPOSIT, payload: res.data });
    } catch (err) {
      dispatch({ type: DEPOSIT_ERROR, payload: err.response.msg });
    }
  };

  // Get User Deposit
  const getUserDeposit = async () => {
    try {
      const res = await axios.get('/api/deposit');

      dispatch({
        type: DEPOSIT_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: DEPOSIT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Register Withdraw
  const addWithdraw = async amount => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('api/withdraw', amount, config);

      dispatch({ type: REGISTER_WITHDRAW, payload: res.data });
    } catch (err) {
      dispatch({ type: WITHDRAW_ERROR, payload: err.response.msg });
    }
  };

  // Get User Withdraw
  const getUserWithdraw = async () => {
    try {
      const res = await axios.get('/api/withdraw');

      dispatch({
        type: WITHDRAW_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: WITHDRAW_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Transaction
  const clearTrans = () => {
    dispatch({ type: CLEAR_TRANS });
  };

  return (
    <DashboardContext.Provider
      value={{
        deposits: state.deposits,
        withdraws: state.withdraws,
        clearErrors: state.clearErrors,
        getUserDeposit,
        addDeposit,
        addWithdraw,
        getUserWithdraw,
        clearTrans
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
