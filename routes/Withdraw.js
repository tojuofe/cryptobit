const express = require('express');
const router = express.Router();
const auth = require('../middleware/Auth');
const WithDraw = require('../model/WithDraw');

//@route        Post api/withdraw
//@desc         Withdraw Amount
//@access       private

router.post('/', auth, async (req, res) => {
  const { amount, status } = req.body;
  try {
    const withdraw = new WithDraw({
      amount,
      status,
      user: req.user.id
    });
    const newWithDraw = await withdraw.save();
    res.json(newWithDraw);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route        Get api/withdraw
//@desc         Withdraw Amount
//@access       private
router.get('/', auth, async (req, res) => {
  try {
    const withdraw = await WithDraw.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(withdraw);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
