const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5002;
const connectDB = require('./config/db');
connectDB();
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:5001', 'http://localhost:3000'],
    credentials: true,
  })
);
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the RandomIdeas API' });
});
const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
