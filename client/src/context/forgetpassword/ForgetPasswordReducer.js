import {
  FORGOTPASSWORD_SUCCESS,
  FORGOTPASSWORD_FAIL,
  CHANGE_PASSWORD,
  PASSWORD_ERROR,
  CLEAR_ERRORS
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case FORGOTPASSWORD_SUCCESS:
      return {
        ...state,
        pass: payload,
        loading: false
      };
    case FORGOTPASSWORD_FAIL:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        pass: payload,
        loading: false
      };
    case PASSWORD_ERROR:
      return {
        ...state,
        error: payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
