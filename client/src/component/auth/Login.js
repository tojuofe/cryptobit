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
      props.history.push('/dashboard');
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
    <div className="container">
      <div className="card" style={StyleShadow}>
        <h1 className="text-center">Login To Your Account</h1>
        <form
          onSubmit={onSubmit}
          className="form"
          style={{ padding: '34px 20px 19px' }}
        >
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            onChange={onChange}
            required
            style={styleText}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={onChange}
            required
            style={styleText}
          />
          <div style={{ display: 'flex' }}>
            <input type="checkbox" name="checkbox" onChange={onChange} />
            <p style={{ marginTop: '12px', paddingLeft: '5px' }}>
              {' '}
              Keep me Logged in
            </p>
            <p style={{ marginTop: '12px', paddingLeft: '230px' }}>
              <Link to="/forgotpassword"> Forgot Password?</Link>
            </p>
          </div>
          <input
            type="submit"
            className="btn btn-primary btn-block"
            style={{ borderRadius: '5px' }}
          />
        </form>
      </div>
    </div>
  );
};

const StyleShadow = {
  boxShadow: '1px 1px 3px 0px',
  margin: '50px auto',
  width: '40em'
};

const styleText = {
  padding: '15px 15px',
  borderRadius: '5px'
};

export default Login;
