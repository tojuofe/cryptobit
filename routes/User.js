const express = require('express');
const router = express.Router();

//@route        Post api/user
//@desc         Register a User
//@access       public

router.post('/', (req, res) => {
  res.send('Register a user');
});

module.exports = router;
