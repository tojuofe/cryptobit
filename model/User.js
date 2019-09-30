const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'admins'
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String
  },
  password: {
    type: String,
    required: true
  },
  depositwallet: {
    type: String
  },
  depositinterest: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user', UserSchema);
