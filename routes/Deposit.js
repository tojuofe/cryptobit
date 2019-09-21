const express = require('express');
const router = express.Router();
const auth = require('../middleware/Auth');
const Deposit = require('../model/Deposit');

//@route        Post api/deposit
//@desc         Deposit an amount
//@access       Private
router.post('/', auth, async (req, res) => {
  const { proof, status } = req.body;
  try {
    const deposit = new Deposit({
      proof,
      status,
      user: req.user.id
    });
    const newDeposit = await deposit.save();
    res.json(newDeposit);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route        Get api/deposit
//@desc         Get the amount
//@access       Private
router.get('/', auth, async (req, res) => {
  try {
    const deposit = await Deposit.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(deposit);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
