const express = require('express');
const router = express.Router();

//@route        Post api/deposit
//@desc         Deposit an amount
//@access       Private

router.post('/', (req, res) => {
  res.send('Deposit an Amount');
});

//@route        Get api/deposit
//@desc         Get the amount
//@access       Private

router.get('/', (req, res) => {
  res.send('Get the Amount');
});

module.exports = router;
