import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/AuthContext';
import DashboardContext from '../../context/dashboard/DashboardContext';

import DepositList from '../layout/DepositList';
import WithDrawList from '../layout/WithDrawList';

const UserDashboard = () => {
  const authContext = useContext(AuthContext);
  const dashboardContext = useContext(DashboardContext);

  const { loadUser, getUserWallet, user } = authContext;
  const { getUserDeposit, getUserWithdraw } = dashboardContext;

  useEffect(() => {
    loadUser();
    getUserWallet();
    getUserDeposit();
    getUserWithdraw();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className='container grid-2'>
        <div
          className='card'
          style={{ borderRadius: '10px', padding: '34px 40px 39px' }}
        >
          <div className='d-flex'>
            <h1>
              <i
                className='far fa-money-bill-alt primaryColor'
                style={{ fontSize: '68px', paddingRight: '10px' }}
              />
            </h1>
            <div>
              <h2 style={{ fontSize: '2.0em' }}>
                Balance: {user && user.depositwallet ? user.depositwallet : '0'}
              </h2>
              <h3 style={{ fontWeight: 'bold' }}>Deposit Wallet</h3>
            </div>
          </div>
        </div>

        <div
          className='card '
          style={{ borderRadius: '10px', padding: '34px 40px 39px' }}
        >
          <div className='d-flex'>
            <h1>
              <i
                className='fas fa-wallet primaryColor'
                style={{ fontSize: '70px', paddingRight: '10px' }}
              />
            </h1>
            <div>
              <h2 style={{ fontSize: '2.0em' }}>
                Balance:{' '}
                {user && user.depositinterest ? user.depositinterest : '0'}
              </h2>
              <h3 style={{ fontWeight: 'bold' }}>Interest Wallet</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <DepositList />
        <WithDrawList />
      </div>
    </div>
  );
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
