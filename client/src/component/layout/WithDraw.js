import React, { useState, useContext } from 'react';
import DashboardContext from '../../context/dashboard/DashboardContext';

const WithDraw = () => {
  const dashboardContext = useContext(DashboardContext);

  const { addWithdraw } = dashboardContext;

  const [withdraw, setwithdraw] = useState({
    amount: '',
    bitcoin_address: '',
    status: 'Pending'
  });

  const { amount, bitcoin_address, status } = withdraw;

  const onChange = e =>
    setwithdraw({ ...withdraw, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addWithdraw({
      amount,
      bitcoin_address,
      status
    });
    setwithdraw({ amount: '', bitcoin_address: '' });
  };

  return (
    <div>
      <div id="withdraw-Modal" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">
            X
          </a>
          <h2>Withdraw</h2>
          <p>Enter the Amount You want to Withdraw</p>
          <form className="form" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Enter the Amount"
              name="amount"
              value={amount}
              required
              style={styleText}
              onChange={onChange}
            />
            <input
              type="text"
              placeholder="Enter your Bitcoin Address "
              name="bitcoin_address"
              value={bitcoin_address}
              required
              style={styleText}
              onChange={onChange}
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

export default WithDraw;
