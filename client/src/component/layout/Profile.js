import React, { useState, useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';

const Profile = () => {
  const authContext = useContext(AuthContext);

  const { changePassword } = authContext;

  const [user, setuser] = useState({
    password: '',
    password1: ''
  });

  const { password, password1 } = user;
  const onChange = e => setuser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    changePassword(user);
    setuser({
      password: '',
      password1: ''
    });
  };

  return (
    <div>
      <div id="profile-Modal" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">
            X
          </a>
          <h1>Profile</h1>
          <h3>Change Password</h3>
          <form className="form" onSubmit={onSubmit}>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={password}
              onChange={onChange}
              style={styleText}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password1"
              required
              value={password1}
              onChange={onChange}
              style={styleText}
            />
            <input type="submit" className="btn btn-block btn-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

const styleText = {
  padding: '15px 15px',
  borderRadius: '5px'
};

export default Profile;
