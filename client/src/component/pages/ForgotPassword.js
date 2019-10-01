import React, { useState } from 'react';

const ForgotPassword = () => {
  const [pass, setPass] = useState({
    email: ''
  });

  const { email } = pass;

  const onChange = e => setPass({ [e.target.name]: e.target.value });

  return (
    <div className="container" style={{ width: '50%', paddingTop: '30px' }}>
      <h2>Forgot Password</h2>
      <form className="form">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <input type="submit" className="btn btn-block btn-primary" />
      </form>
    </div>
  );
};

export default ForgotPassword;
