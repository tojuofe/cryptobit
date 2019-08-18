import React, { useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div
        key={alert.id}
        className={`alert alert=${alert.type}`}
        style={{ width: '40em', margin: 'auto' }}
      >
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    ))
  );
};

export default Alert;
