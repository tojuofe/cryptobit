import { REGISTER_DEPOSIT, DEPOSIT_LOADED, DEPOSIT_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case DEPOSIT_LOADED:
      return {
        ...state,
        deposits: action.payload,
        loading: false
      };
    case REGISTER_DEPOSIT:
      return {
        ...state,
        deposits: [action.payload, ...state.deposits],
        loading: false
      };
    case DEPOSIT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
