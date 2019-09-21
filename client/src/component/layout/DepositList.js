import React, { Fragment, useContext } from 'react';
import DepositItem from './DepositItem'
import DashboardContext from '../../context/dashboard/DashboardContext';

const DepositList = () => {
  const dashboardContext = useContext(DashboardContext);

  const { deposits } = dashboardContext;

  return (
    <Fragment>
      {deposits.map(deposit => (
        <DepositItem key={deposit._id} deposit={deposit}/>
      ))}
    </Fragment>
  );
};

export default DepositList;
