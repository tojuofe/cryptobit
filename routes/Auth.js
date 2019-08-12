const express = require('express');
const router = express.Router();

//@route        Get api/auth
//@desc         Get logged in user
//@access       private

router.get('/', (req, res) => {
  res.send('Get logged in user');
});

//@route        Post api/auth
//@desc         Auth user and get token
//@access       public

router.post('/', (req, res) => {
  res.send('log in user');
});

module.exports = router;
