import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import AlertContext from '../../context/alert/AlertContext';

const Login = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/userdashboard');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login({
      email,
      password
    });
  };

  return (
    <div className='container'>
      <div className='card formL' style={StyleShadow}>
        <h1 className='text-center f1'>Login To Your Account</h1>
        <form
          onSubmit={onSubmit}
          className='form'
          style={{ padding: '3px 15px' }}
        >
          <input
            type='text'
            placeholder='Email Address'
            name='email'
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
            style={styleText}
          />
          <div className='checks hide-sm'>
            <input type='checkbox' name='checkbox' onChange={onChange} />
            <p className='check'>Keep me Logged In</p>
            <p className='check left'>
              <Link to='/forgotpassword'> Forgot Password?</Link>
            </p>
          </div>
          <input
            type='submit'
            className='btn btn-primary btn-block'
            style={{ borderRadius: '3px' }}
          />
          <p className='check text-center hide-lg'>
            <Link to='/forgotpassword'> Forgot Password?</Link>
          </p>
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
  borderRadius: '3px'
};

export default Login;
