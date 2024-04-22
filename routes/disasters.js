// routes/disasters.js
const express = require('express');
const router = express.Router();
const Disaster = require('../models/disaster');

// Create a new disaster
router.post('/', async (req, res) => {
  try {
    const { name, location, description } = req.body;
    const submissionDate = new Date(); // Capture the current date/time
    const disaster = new Disaster({ name, location, description, submissionDate });
    await disaster.save();
    res.status(201).json(disaster);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Get all disasters
router.get('/', async (req, res) => {
  try {
    const disasters = await Disaster.find();
    res.json(disasters);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Add more routes for CRUD operations

module.exports = router;
