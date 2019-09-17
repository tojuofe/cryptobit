import React, { useReducer } from 'react';
import axios from 'axios';
import DashboardContext from './DashboardContext';
import DashboardReducer from './DashboardReducer';
import { GET_USER_WALLET, WALLET_ERROR } from '../types';

const DashboardState = props => {
  const initialState = {
    wallet: null,
    clearErrors: null
  };

  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  // Get User Wallet
  const getUserWallet = async () => {
    try {
      const res = await axios.get('/api/walletno/getuserwallet');

      dispatch({
        type: GET_USER_WALLET,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: WALLET_ERROR,
        payload: err.response.msg
      });
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        wallet: state.wallet,
        clearErrors: state.clearErrors,
        getUserWallet
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
