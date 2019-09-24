const express = require('express');
const router = express.Router();
const auth = require('../middleware/Auth');
const Ticket = require('../model/Ticket');

//@route        Post api/ticket
//@desc         Create a ticket
//@access       Private

router.post('/', auth, async (req, res) => {
  const { email, message } = req.body;

  try {
    const ticket = new Ticket({
      email,
      message,
      user: req.user.id
    });

    const newticket = await ticket.save();
    res.json(newticket);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
