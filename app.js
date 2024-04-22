// app.js
const express = require('express');
const mongoose = require('mongoose');
const disasterRoutes = require('./routes/disasters');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/disasterDB'; // Update with your MongoDB connection URI

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

app.use(express.json());
app.use('/api/disasters', disasterRoutes);

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for /home
app.get('/emergency', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'emergency.html'));
});
app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


















