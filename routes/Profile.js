const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/Auth');
const User = require('../model/User');

//@route        Update api/profile
//@desc         Update a User
//@access       Private

router.put(
  '/:id',
  auth,
  [check('password', 'Password is required').exists()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { password } = req.body;
    const salt = await bcrypt.genSalt(10);

    pass = await bcrypt.hash(password, salt);

    // Build User Object
    const passField = {};
    if (pass) passField.password = pass;
    try {
      let user = await User.findById(req.params.id);

      user = new User({ pass });
      user = await User.findByIdAndUpdate(
        req.params.id,
        { $set: passField },
        { new: true }
      );

      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
