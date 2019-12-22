import React, { useState, useContext } from 'react';
import Wallet from './Wallet';
import DashboardContext from '../../context/dashboard/DashboardContext';

const Deposit = () => {
  const dashboardContext = useContext(DashboardContext);

  const { addDeposit } = dashboardContext;

  const [deposit, setdeposit] = useState({
    proof: '',
    status: 'Pending'
  });

  const { proof, status } = deposit;

  const onChange = e => setdeposit({ [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addDeposit({
      proof,
      status
    });
    setdeposit({ proof: '' });
  };

  return (
    <div>
      <div id='deposit-Modal' className='modalDialog'>
        <div>
          <a href='#close' title='Close' className='close'>
            X
          </a>
          <h2>Deposit</h2>
          <p>Copy the Bitcoin Number Below</p>
          <h4 className='depo-no'>
            <Wallet />
          </h4>
          <form className='form' onSubmit={onSubmit}>
            <textarea
              placeholder='Enter Prove of Payment'
              style={{
                fontFamily: 'Roboto',
                height: '100px',
                borderRadius: '5px'
              }}
              name='proof'
              value={proof}
              onChange={onChange}
              required
            />
            <input type='submit' className='btn btn-block btn-primary' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
