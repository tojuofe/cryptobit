import React, { useState, useContext } from 'react';
import ContactContext from '../../context/contact/ContactContext';
import AlertContext from '../../context/alert/AlertContext';

const Contact = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);

  const { createContact } = contactContext;
  const { setAlert } = alertContext;

  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createContact({
      name,
      email,
      message
    });
    setAlert('Message Sent', 'success');
    setContact({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container">
      <h1
        style={{
          fontSize: '3em',
          textAlign: 'center',
          padding: '34px 40px 39px'
        }}
        className="mb-6"
      >
        Contact Us
      </h1>
      <div className="grid-3">
        <div className="card" style={StyleShadow}>
          <i className="fa fa-map-marker large" style={{ color: '#476875' }} />
          <h3>Our Address</h3>
          <p>DEFAULT ADDRESS: COMPANIES HOUSE Cardiff CF14 8LH.</p>
          <p>SERVICE ADDRESS: 130 Old Street, London, England EC1V 9BD</p>
        </div>

        <div className="card" style={StyleShadow}>
          <i className="fa fa-envelope large" style={{ color: '#476875' }} />
          <h3>Email Address</h3>
          <p>info@cryptobit.com</p>
        </div>

        <div className="card" style={StyleShadow}>
          <i className="fa fa-phone large" style={{ color: '#476875' }} />
          <h3>Phone Number</h3>
          <p>+447520670920, Whatsapp : +447537147614</p>
        </div>
      </div>

      <div className="card" style={StyleShadow}>
        <h1>Contact Us For Support</h1>
        <form onSubmit={onSubmit} className="form">
          <div className="grid-2">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={onChange}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              onChange={onChange}
              required
            />
          </div>
          <textarea
            placeholder="Enter Your Message"
            style={{ fontFamily: 'Arial', height: '100px' }}
            name="message"
            onChange={onChange}
            required
          />
          <input type="submit" value="Submit" className="btn btn-block btn-primary" />
        </form>
      </div>

      <footer
        style={{
          padding: '34px 40px 39px',
          textAlign: 'center',
          fontSize: '1em'
        }}
      >
        <p>© CRYPTO BIT 2019 - All Rights Reserved</p>
      </footer>
    </div>
  );
};

const StyleShadow = {
  boxShadow: '1px 1px 3px 0px',
  textAlign: 'center',
  margin: '30px 30px'
};

export default Contact;
