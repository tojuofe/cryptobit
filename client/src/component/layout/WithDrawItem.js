import React from 'react';
import PropTypes from 'prop-types';

const WithDrawItem = ({ withdraw }) => {
  const { amount, status } = withdraw;

  return (
    <div
      className="card bg-light"
      style={{ borderRadius: '10px', padding: '34px 40px 39px' }}
    >
      <h1>WithDraw</h1>
      <h3 className="text-primary text-left">
        {amount}
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (status === 'Pending' ? 'badge-primary' : 'badge-success')
          }
        >
          {status}
        </span>
      </h3>
    </div>
  );
};

WithDrawItem.propTypes = {
  withdraw: PropTypes.object.isRequired
};

export default WithDrawItem;
