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
      props.history.push('/');
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
    checkbox: false
  });

  const { name, email, phone, password, password1 } = user;

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
        password
      });
    }
  };

  return (
    <div className="container">
      <div className="card" style={StyleShadow}>
        <h1 className="text-center">Sign Up to Create a New Account</h1>
        <form
          onSubmit={onSubmit}
          className="form"
          style={{ padding: '34px 20px 19px' }}
        >
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            onChange={onChange}
            required
            style={styleText}
          />
          <input
            type="text"
            placeholder="Enter Your Email Address"
            name="email"
            onChange={onChange}
            required
            style={styleText}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
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
          <input
            type="password"
            placeholder="Confirm Password"
            name="password1"
            onChange={onChange}
            required
            style={styleText}
          />
          <div style={{ display: 'flex' }}>
            <input
              type="checkbox"
              name="checkbox"
              onChange={onChange}
              required
            />
            <p style={{ marginTop: '12px', paddingLeft: '5px' }}>
              {' '}
              I agree the terms &amp; conditions{' '}
            </p>
          </div>
          <input
            type="submit"
            className="btn btn-block btn-primary"
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

export default Register;
