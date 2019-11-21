import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import { CONTACT_SUCCESS, CONTACT_FAIL } from '../types';

const ContactState = props => {
  const initialState = {
    contact: null,
    error: null,
    loading: true
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Create Contact Request
  const createContact = async formData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const res = await axios.post('/api/contact', formData, config);

      dispatch({
        type: CONTACT_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: CONTACT_FAIL, payload: err.response.msg });
    }
  };

  return (
    <ContactContext.Provider
      value={{
        contact: state.contact,
        error: state.error,
        createContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
