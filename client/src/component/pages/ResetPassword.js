import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ForgetPasswordContext from '../../context/forgetpassword/ForgetPasswordContext';
import AlertContext from '../../context/alert/AlertContext';
import PropTypes from 'prop-types';

const ResetPassword = props => {
  const forgetPasswordContext = useContext(ForgetPasswordContext);
  const alertContext = useContext(AlertContext);

  const { changePassword } = forgetPasswordContext;
  const { setAlert } = alertContext;

  const [pass, setPass] = useState({
    password: '',
    password1: ''
  });

  const { token } = props.match.params;

  const { password, password1 } = pass;

  const onChange = e => setPass({ ...pass, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password1) {
      setAlert('Password does not match', 'danger');
    } else {
      changePassword({ token, password });
      setAlert('Password changed Successfully', 'success');
      return <Redirect to="/login" />;
    }
  };

  return (
    <div className="container" style={{ width: '40%', paddingTop: '30px' }}>
      <h2>Reset Password</h2>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="password"
          placeholder="New Password"
          name="password"
          value={password}
          onChange={onChange}
          required
          minLength="6"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password1"
          value={password1}
          onChange={onChange}
          required
        />
        <input type="submit" className="btn btn-block btn-primary" />
      </form>
    </div>
  );
};

ResetPassword.propsTypes = {
  token: PropTypes.string
};

export default ResetPassword;
