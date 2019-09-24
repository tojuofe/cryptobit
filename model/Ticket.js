const mongoose = require('mongoose')

const TicketSchema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users'
    },
    email: {
      type: String,
      required: true
    },
    message: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
  module.exports = mongoose.model('ticket', TicketSchema);