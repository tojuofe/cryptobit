import React, { useState, useContext } from 'react';
import DashboardContext from '../../context/dashboard/DashboardContext';
//import AlertContext from '../../context/alert/AlertContext';

const Ticket = () => {
  const dashboardContext = useContext(DashboardContext);
  // const alertContext = useContext(AlertContext);

  // const { setAlert } = alertContext;
  const { addTicket } = dashboardContext;

  const [ticket, setticket] = useState({
    email: '',
    message: ''
  });

  const { email, message } = ticket;

  const onChange = e =>
    setticket({ ...ticket, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addTicket(ticket);
    setticket({
      email: '',
      message: ''
    });
  };
  return (
    <div>
      <div id="ticket-Modal" className="modalDialog">
        <div>
          <a href="#close" title="Close" className="close">
            X
          </a>
          <h2>Support Ticket</h2>
          <p>Please Enter Complaints</p>
          <form className="form" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
              value={email}
              onChange={onChange}
              style={styleText}
            />
            <textarea
              placeholder="Message"
              style={{
                fontFamily: 'Roboto',
                height: '100px',
                borderRadius: '5px',
                padding: '15px 15px'
              }}
              name="message"
              required
              value={message}
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
  borderRadius: '5px',
  fontFamily: 'Roboto'
};

export default Ticket;
