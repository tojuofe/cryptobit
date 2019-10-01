const express = require('express');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const nodemailer = require('nodemailer');

const User = require('../model/User');

//@route        POST api/forgotpassword
//@desc         Send Password link to users
//@access       Public

router.post(
  '/',
  [check('email', 'Please enter a valid email').isEmail()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email } = req.body;
    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'No User with this Email Address' });
      }

      const payload = { user: { id: user.id } };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) {
            throw err;
          }

          const smtpTrans = nodemailer.createTransport({
            service: 'Gmail',
            host: 'smtp.gmail.com',
            auth: {
              user: 'scottschris78@gmail.com',
              pass: 'Chriscotts_2018'
            }
          });

          const mailOptions = {
            to: user.email,
            from: 'scottschris78@gmail.com',
            subject: 'Gallery Password Reset',
            text:
              'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
              'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
              `http://localhost:3000/api/forgotpassword/${token}` +
              '\n\n' +
              'If you did not request this, please ignore this email and your password will remain unchanged.\n'
          };
          smtpTrans.sendMail(mailOptions, err => {
            if (err) {
              console.log('Error Sending', err);
            } else {
              res.status(400).json({ msg: 'Message Sent' });
            }
          });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
