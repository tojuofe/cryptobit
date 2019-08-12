const express = require('express');
const router = express.Router();

//@route        Post api/withdraw
//@desc         Withdraw Amount
//@access       private

router.post('/', (req, res) => {
  res.send('Withdraw Amount');
});

module.exports = router;
