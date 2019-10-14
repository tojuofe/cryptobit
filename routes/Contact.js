const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const mailGun = require('nodemailer-mailgun-transport');
const nodemailer = require('nodemailer');

//@route        Send api/contact
//@desc         Create User Contact
//@access       Public

router.post(
  '/',
  [
    check('email', 'email is required').isEmail(),
    check('message', 'message is required')
      .not()
      .isEmpty()
  ],

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
      const auth = {
        auth: {
          api_key: 'f6ed1923558b18834f99a51006b8fef5-af6c0cec-2fb05069',
          domain: 'sandbox876cae9a2b6d4ab6924040adea476266.mailgun.org'
        }
      };
      const transporter = nodemailer.createTransport(mailGun(auth));

      const sendMail = (email, name, message, cb) => {
        const mailOptions = {
          from: email,
          to: 'scottschris78@gmail.com',
          subject: name,
          text: message
        };

        transporter.sendMail(mailOptions, (err, data) => {
          if (err) {
            return cb(err, null);
          } else {
            return cb(null, data);
          }
        });
      };

      sendMail(email, name, message, (err, data) => {
        if (err) {
          res.status(500).json({ msg: 'Server Error' });
        } else {
          res.json({ msg: 'Email Sent' });
        }
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
