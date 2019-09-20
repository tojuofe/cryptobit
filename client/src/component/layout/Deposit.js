import React from 'react';
import Wallet from './Wallet';

const Deposit = () => {
  return (
    <div>
      <div id="deposit-Modal" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">
            X
          </a>
          <h2>Deposit</h2>
          <p>Copy the Bitcoin Account Number Below</p>
          <div style={{ color: 'blue', fontFamily: 'Century Gothic' }}>
            <Wallet />
          </div>
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
    </div>
  );
};

export default Deposit;
