import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../layout/cryptobit.png';

const UserDashboard = ({ icon, title }) => {
  return (
    <div>
      <nav className="navbar bg-primary">
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
        <div>
          <Link to="#!">
            <input
              type="submit"
              className="btn btn-dark"
              style={{ backgroundColor: '#478192' }}
              value="Logout"
            />
          </Link>
        </div>
      </nav>

      <div className="container grid-2">
        <div
          className="card "
          style={{ borderRadius: '10px', padding: '34px 40px 39px' }}
        >
          <div className="d-flex">
            <h1>
              <i
                className="far fa-money-bill-alt primaryColor"
                style={{ fontSize: '80px', paddingRight: '10px' }}
              />
            </h1>
            <div>
              <h2 style={{ fontSize: '2.2em' }}>Balance: $ 0</h2>
              <h3 style={{ fontWeight: 'bold' }}>Deposit Wallet</h3>
            </div>
          </div>
        </div>

        <div
          className="card "
          style={{ borderRadius: '10px', padding: '34px 40px 39px' }}
        >
          <div className="d-flex">
            <h1>
              <i
                className="fas fa-wallet primaryColor"
                style={{ fontSize: '80px', paddingRight: '10px' }}
              />
            </h1>
            <div>
              <h2 style={{ fontSize: '2.2em' }}>Balance: $ 0</h2>
              <h3 style={{ fontWeight: 'bold' }}>Interest Wallet</h3>
            </div>
          </div>
        </div>
      </div>
      {/* Deposit */}
      <div id="deposit-Modal" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">
            X
          </a>
          <h2>Deposit</h2>
          <p>Copy the Bitcoin Account Number Below</p>
          <p>The Bitcoin Wallet No Comes Here.....</p>
          <form className="form">
            <textarea
              placeholder="Enter Prove of Payment"
              style={{
                fontFamily: 'Roboto',
                height: '100px',
                borderRadius: '5px'
              }}
              name="text"
              required
            />
            <input type="submit" className="btn btn-block btn-primary" />
          </form>
        </div>
      </div>
      {/* Withdraw */}
      <div id="withdraw-Modal" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">
            X
          </a>
          <h2>Withdraw</h2>
          <p>Enter the Amount You want to Withdraw</p>
          <form className="form">
            <input
              type="text"
              placeholder="Enter the Amount"
              name="text"
              required
              style={styleText}
            />
            <input type="submit" className="btn btn-block btn-primary" />
          </form>
        </div>
      </div>
      {/* Support Ticket */}
      <div id="ticket-Modal" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">
            X
          </a>
          <h2>Support Ticket</h2>
          <p>Please Enter Ticket Details</p>
          <form className="form">
            <input
              type="text"
              placeholder="Email Address"
              name="text"
              required
              style={styleText}
            />
            <textarea
              placeholder="Message"
              style={{
                fontFamily: 'Roboto',
                height: '100px',
                borderRadius: '5px'
              }}
              name="text"
              required
            />
            <input type="submit" className="btn btn-block btn-primary" />
          </form>
        </div>
      </div>
      {/* Profile */}
      <div id="profile-Modal" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">
            X
          </a>
          <h1>Profile</h1>
          <h3>Change Password</h3>
          <form className="form">
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              style={styleText}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="password1"
              required
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

UserDashboard.defaultProps = {
  title: 'CryptoBit',
  icon: 'fab fa-bitcoin'
};

UserDashboard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default UserDashboard;