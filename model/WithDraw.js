const mongoose = require('mongoose');

const WithDrawSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  amount: {
    type: String,
    required: true
  },
  bitcoin_address: {
    type: String
  },
  status: {
    type: String,
    default: 'Pending'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('withdraw', WithDrawSchema);
