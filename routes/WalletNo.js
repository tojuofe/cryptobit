const express = require('express');
const router = express.Router();
const auth = require('../middleware/Auth');
const WalletNo = require('../model/WalletNo');

//@route        Post api/walletNo
//@desc         Wallet Number
//@access       Private

router.post('/', auth, async (req, res) => {
  const { walletNo } = req.body;
  try {
    const wallet = new WalletNo({
      walletNo,
      admin: req.admin.id
    });
    const newWallet = await wallet.save();
    res.json(newWallet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send();
  }
});

//@route        Get api/walletNo
//@desc         Get Wallet Number
//@access       Private

router.get('/', auth, async (req, res) => {
  try {
    const wallet = await WalletNo.find({ admin: req.admin.id }).sort({
      date: -1
    });
    res.json(wallet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route        Get api/walletNo/getuserwallet
//@desc         Get Wallet Number
//@access       Private

router.get('/getuserwallet', async (req, res) => {
  try {
    const wallet = await WalletNo.find({ user: req.user }).sort({
      date: -1
    });
    res.json(wallet);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//@route        Delete api/walletNo
//@desc         Delete Wallet Number
//@access       Private

router.delete('/:id', auth, async (req, res) => {
  try {
    let wallet = await WalletNo.findById(req.params.id);
    if (!wallet) return res.status(404).json({ msg: 'Wallet not found' });

    // Make sure Admin owns Wallet No
    if (wallet.admin.toString() !== req.admin.id) {
      return res.status(401).json({ msg: 'Not Authorised' });
    }

    await WalletNo.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Wallet Removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
