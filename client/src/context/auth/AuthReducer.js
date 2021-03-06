import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  WALLET_LOADED,
  WALLET_ERROR,
  CHANGE_PASSWORD,
  PASSWORD_ERROR
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case WALLET_LOADED:
      return {
        ...state,
        wallets: action.payload,
        loading: false
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case CLEAR_ERRORS:
    case WALLET_ERROR:
    case PASSWORD_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
