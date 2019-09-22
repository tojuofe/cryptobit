import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import DashboardContext from '../../context/dashboard/DashboardContext';

import Logo from './cryptobit.png';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const dashboardContext = useContext(DashboardContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearTrans } = dashboardContext;

  const onLogout = () => {
    logout();
    clearTrans();
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
      <div>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <a href="#deposit-Modal">Deposit</a>
          </li>
          <li>
            <a href="#withdraw-Modal">Withdraw</a>
          </li>
          <li>
            <a href="#ticket-Modal">Support Ticket</a>
          </li>
          <li>
            <a href="#profile-Modal">Profile</a>
          </li>
        </ul>
      </div>
      <div className="d-flex">
        <ul style={{ marginTop: '2em' }}>
          <li>Hello {user && user.name}</li>
        </ul>
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
          <Link to="/home">Home</Link>
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
