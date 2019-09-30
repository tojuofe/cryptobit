import React, { useState, useContext, useEffect } from 'react';
import AdminContext from '../../context/adminauth/AdminContext';
import AlertContext from '../../context/alert/AlertContext';

const LoginAdmin = props => {
  const adminContext = useContext(AdminContext);
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = adminContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/admindashboard');
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [admin, setAdmin] = useState({
    email: '',
    password: ''
  });

  const { email, password } = admin;

  const onChange = e => setAdmin({ ...admin, [e.target.name]: e.target.value });

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
        <h1 className="text-center">Admin Login</h1>
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
  width: '30em'
};

const styleText = {
  padding: '15px 15px',
  borderRadius: '5px'
};

export default LoginAdmin;
