// server.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', userRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
