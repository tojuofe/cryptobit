const express = require('express');
const router = express.Router();

//@route        Update api/profile
//@desc         Update a User
//@access       Private

router.put('/:id', (req, res) => {
  res.send('Update a user');
});

module.exports = router;
