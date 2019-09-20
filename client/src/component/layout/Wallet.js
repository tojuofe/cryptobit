import React, { Fragment, useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';

const Wallet = () => {
  const authContext = useContext(AuthContext);

  const { wallets } = authContext;

  return (
    <Fragment>
      {wallets.map(wallet => (
        <h3 key={wallet._id}>{wallet.walletNo}</h3>
      ))}
    </Fragment>
  );
};

export default Wallet;
