import { CONTACT_SUCCESS, CONTACT_FAIL } from '../types';

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CONTACT_SUCCESS:
      return {
        ...state,
        contact: payload,
        loading: false
      };
    case CONTACT_FAIL:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
};
