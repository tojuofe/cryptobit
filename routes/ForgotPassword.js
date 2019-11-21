const express = require('express');
const router = express.Router();
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator/check');
const mailGun = require('nodemailer-mailgun-transport');
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
        return res.status(400).json({ msg: 'Email Address not Found!' });
      }

      const payload = { user: { id: user.id } };
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        async (err, token) => {
          if (err) {
            throw err;
          }

          // TODO: this is to update token
          /*  
            await User.findByIdAndUpdate(
            { _id: user._id },
            { resetpasswordtoken: token },
            { new: true }
          );
        */

          const auth = {
            auth: {
              api_key: 'f6ed1923558b18834f99a51006b8fef5-af6c0cec-2fb05069',
              domain: 'sandbox876cae9a2b6d4ab6924040adea476266.mailgun.org'
            }
          };
          const transporter = nodemailer.createTransport(mailGun(auth));

          const sendMail = (email, cb) => {
            const mailOptions = {
              to: email,
              from: 'scottschris78@gmail.com',
              subject: 'Cryptobit Password Reset',
              text:
                'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                `http://localhost:3000/resetpassword/${token}` +
                '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n'
            };

            transporter.sendMail(mailOptions, (err, data) => {
              if (err) {
                return cb(err, null);
              } else {
                return cb(null, data);
              }
            });
          };

          sendMail(email, (err, data) => {
            if (err) {
              res.status(500).json({ msg: err.message });
            } else {
              res.json({ msg: 'Email Sent' });
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

//@route        Update api/forgotpassword
//@desc         Reset User Password
//@access       Private

router.put(
  '/:token',
  [check('password', 'Password is required').exists()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { password } = req.body;
    const { token } = req.params;
    jwt.verify(token, config.get('jwtSecret'), (err, decoded) => {
      if (err) {
        return res.status(400).send('Expired Url');
      }
      const payload = decoded;
      const { user } = payload;

      User.findOne({ _id: user.id });

      bcrypt.genSalt(10, (err, salt) => {
        if (err) return;
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) return;
          User.findOneAndUpdate({ _id: user.id }, { password: hash })
            .then(() => res.status(200).json('Password Changed'))
            .catch(err => res.status(500).json('Server Error'));
        });
      });
    });
  }
);

module.exports = router;
