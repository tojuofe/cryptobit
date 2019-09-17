import { GET_USER_WALLET, WALLET_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_USER_WALLET:
      return {
        ...state,
        wallet: action.payload,
        loading: false
      };
    case WALLET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
