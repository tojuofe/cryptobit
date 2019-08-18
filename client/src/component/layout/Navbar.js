import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

import Logo from './cryptobit.png';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const AuthLink = (
    <Fragment>
      <h1>
        <img
          src={Logo}
          alt="logo.."
          style={{ width: '150px', height: '50px' }}
        />
      </h1>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="#!">Withdraw</Link>
        </li>
        <li>
          <Link to="#!">Profile</Link>
        </li>
      </ul>
      <div>
        <Link to="#!">
          <input
            type="submit"
            className="btn btn-dark"
            style={{ backgroundColor: '#478192' }}
            value="Logout"
            onClick={onLogout}
          />
        </Link>
      </div>
    </Fragment>
  );

  const GuestLink = (
    <Fragment>
      <h1>
        <img
          src={Logo}
          alt="logo.."
          style={{ width: '150px', height: '50px' }}
        />
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#plan">Plan</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div>
        <Link to="/login">
          <input
            type="submit"
            className="btn btn-dark"
            style={{ backgroundColor: '#478192' }}
            value="Sign In"
          />
        </Link>
        <Link to="/register">
          <input
            type="submit"
            className="btn btn-dark"
            style={{ backgroundColor: '#478192' }}
            value="Sign Up"
          />
        </Link>
      </div>
    </Fragment>
  );

  return (
    <nav className="navbar bg-primary">
      {isAuthenticated ? AuthLink : GuestLink}
    </nav>
  );
};

export default Navbar;
