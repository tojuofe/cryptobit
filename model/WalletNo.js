const mongoose = require('mongoose');

const WalletNoSchema = mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'admins'
  },
  walletNo: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('wallet', WalletNoSchema);
