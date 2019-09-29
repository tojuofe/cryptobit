import {
  REGISTER_DEPOSIT,
  DEPOSIT_LOADED,
  DEPOSIT_ERROR,
  REGISTER_WITHDRAW,
  WITHDRAW_LOADED,
  WITHDRAW_ERROR,
  REGISTER_TICKET,
  TICKET_ERROR,
  CLEAR_TRANS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case DEPOSIT_LOADED:
      return {
        ...state,
        deposits: action.payload,
        loading: false
      };
    case WITHDRAW_LOADED:
      return {
        ...state,
        withdraws: action.payload,
        loading: false
      };
    case REGISTER_DEPOSIT:
      return {
        ...state,
        deposits: [action.payload, ...state.deposits],
        loading: false
      };
    case REGISTER_WITHDRAW:
      return {
        ...state,
        withdraws: [action.payload, ...state.withdraws],
        loading: false
      };
    case REGISTER_TICKET:
      return {
        ...state,
        tickets: [action.payload, ...state.tickets],
        loading: false
      };
    case DEPOSIT_ERROR:
    case WITHDRAW_ERROR:
    case TICKET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case CLEAR_TRANS:
      return {
        ...state,
        deposits: [],
        withdraws: [],
        clearsErrors: null
      };
    default:
      return state;
  }
};
