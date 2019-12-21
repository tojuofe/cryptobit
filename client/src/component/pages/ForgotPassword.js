import React, { useState, useContext, useEffect } from 'react';
import ForgetPasswordContext from '../../context/forgetpassword/ForgetPasswordContext';
import AlertContext from '../../context/alert/AlertContext';

const ForgotPassword = () => {
  const forgetpasswordContext = useContext(ForgetPasswordContext);
  const alertContext = useContext(AlertContext);

  const { checkEmail, error, clearErrors } = forgetpasswordContext;
  const { setAlert } = alertContext;

  useEffect(() => {
    if (error === 'Email Address not Found!') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error]);

  const [pass, setPass] = useState({
    email: ''
  });

  const { email } = pass;

  const onChange = e => setPass({ [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    checkEmail({ email });
    setAlert('Email has been successfully sent your email address', 'success');
  };

  return (
    <div className='container fp'>
      <h2 className='fp-font'>Forgot Password</h2>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={onChange}
          required
        />
        <input type='submit' className='btn btn-block btn-primary' />
      </form>
    </div>
  );
};

export default ForgotPassword;
