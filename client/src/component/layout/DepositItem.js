import React from 'react';
import PropTypes from 'prop-types';

const DepositItem = ({ deposit }) => {
  const { proof, status } = deposit;

  return (
    <div
      className="card bg-light"
      style={{ borderRadius: '10px', padding: '34px 40px 39px' }}
    >
      <h3 className="text-primary text-left">
        {proof}
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

DepositItem.propTypes = {
  proof: PropTypes.object.isRequired,
  status: PropTypes.object
};

export default DepositItem;
