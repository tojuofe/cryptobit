import React, { useReducer } from 'react';
import axios from 'axios';
import DashboardContext from './DashboardContext';
import DashboardReducer from './DashboardReducer';
import { REGISTER_DEPOSIT, DEPOSIT_LOADED, DEPOSIT_ERROR } from '../types';

const DashboardState = props => {
  const initialState = {
    deposits: [],
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

  return (
    <DashboardContext.Provider
      value={{
        deposits: state.deposits,
        clearErrors: state.clearErrors,
        getUserDeposit,
        addDeposit
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
