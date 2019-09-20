import React, { Fragment, useContext } from 'react';
import DashboardContext from '../../context/dashboard/DashboardContext';

const DepositItem = () => {
  const dashboardContext = useContext(DashboardContext);

  const { deposits } = dashboardContext;

  return (
    <Fragment>
      {deposits.map(deposit => (
        <h2 key={deposit._id}>{deposit.proof}</h2>
      ))}
    </Fragment>
  );
};

export default DepositItem;
