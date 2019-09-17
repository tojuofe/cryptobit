import React, { useContext } from 'react';

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
          <p style={{ color: 'blue', fontFamily: 'Century Gothic' }}>
            15KXp4mDRMTqwLqNrZjiVFDtk3cnE7FRyB
          </p>
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
