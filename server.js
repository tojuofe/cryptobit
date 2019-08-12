const express = require('express');
const app = express();

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));

// Create Route
app.get('/', (req, res) => res.json({ msg: 'Welcome from CryptoBit...' }));
