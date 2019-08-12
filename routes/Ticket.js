const express = require('express');
const router = express.Router();

//@route        Post api/ticket
//@desc         Create a ticket
//@access       Private

router.post('/', (req, res) => {
  res.send('Create a Ticket');
});

module.exports = router;
