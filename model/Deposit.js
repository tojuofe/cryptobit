const mongoose = require('mongoose')

const DepositSchema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    proof: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = mongoose.model('deposit', DepositSchema);