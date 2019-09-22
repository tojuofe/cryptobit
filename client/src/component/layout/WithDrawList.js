import React, { Fragment, useContext } from 'react';
import WithDrawItem from './WithDrawItem';
import DashboardContext from '../../context/dashboard/DashboardContext';

const WithDrawList = () => {
  const dashboardContext = useContext(DashboardContext);

  const { withdraws } = dashboardContext;

  return (
    <Fragment>
      {withdraws.map(withdraw => (
        <WithDrawItem key={withdraw._id} withdraw={withdraw} />
      ))}
    </Fragment>
  );
};

export default WithDrawList;
