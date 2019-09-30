import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import DashboardContext from '../../context/dashboard/DashboardContext';

import DepositList from '../layout/DepositList';
import WithDrawList from '../layout/WithDrawList';

const AdminDashboard = () => {
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
      <div className="container">
        <DepositList />
        <WithDrawList />
      </div>
    </div>
  );
};

export default AdminDashboard;
