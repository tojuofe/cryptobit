import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import AlertContext from '../../context/alert/AlertContext';

const Register = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/userdashboard');
    }

    if (error === 'User already exists') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    Phone: '',
    password: '',
    password1: '',
    depositwallet: '',
    depositinterest: '',
    checkbox: false
  });

  const {
    name,
    email,
    phone,
    password,
    password1,
    depositwallet,
    depositinterest
  } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password1) {
      setAlert('Password does not Match', 'danger');
    } else {
      register({
        name,
        email,
        phone,
        password,
        depositwallet,
        depositinterest
      });
    }
  };

  return (
    <div className='container'>
      <div className='card formL' style={StyleShadow}>
        <h1 className='text-center my f1'>Sign Up to Create a New Account</h1>
        <form
          onSubmit={onSubmit}
          className='form'
          style={{ padding: '3px 15px' }}
        >
          <input
            type='text'
            placeholder='Full Name'
            name='name'
            onChange={onChange}
            required
            style={styleText}
          />
          <input
            type='text'
            placeholder='Email Address'
            name='email'
            onChange={onChange}
            required
            style={styleText}
          />
          <input
            type='text'
            placeholder='Phone Number'
            name='phone'
            onChange={onChange}
            required
            style={styleText}
          />
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={onChange}
            required
            minLength='6'
            style={styleText}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            name='password1'
            onChange={onChange}
            required
            minLength='6'
            style={styleText}
          />
          <div style={{ display: 'flex' }}>
            <input
              type='checkbox'
              name='checkbox'
              onChange={onChange}
              required
            />
            <p style={{ marginTop: '12px', paddingLeft: '5px' }}>
              {' '}
              I agree the terms &amp; conditions{' '}
            </p>
          </div>
          <input
            type='submit'
            className='btn btn-block btn-primary'
            style={{ borderRadius: '5px' }}
          />
        </form>
      </div>
    </div>
  );
};

const StyleShadow = {
  boxShadow: '1px 1px 3px 0px',
  margin: '50px auto'
};

const styleText = {
  padding: '15px 15px',
  borderRadius: '5px'
};

export default Register;
