const express = require('express');
const app = express();
const ConnectDB = require('./config/db');

// Connect DB
ConnectDB();

// init middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));

// Define Routes
app.use('/api/admin', require('./routes/Admin'));
app.use('/api/authadmin', require('./routes/authAdmin'));
app.use('/api/walletno', require('./routes/WalletNo'));
app.use('/api/user', require('./routes/User'));
app.use('/api/auth', require('./routes/Auth'));
app.use('/api/ticket', require('./routes/Ticket'));
app.use('/api/deposit', require('./routes/Deposit'));
app.use('/api/withdraw', require('./routes/Withdraw'));
app.use('/api/profile', require('./routes/Profile'));
app.use('/api/forgotpassword', require('./routes/ForgotPassword'));
app.use('/api/contact', require('./routes/Contact'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set Static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}
