// models/disaster.js
const mongoose = require('mongoose');

const disasterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  submissionDate: { type: Date, default: Date.now }, // Add submission date field
  
  // Add more fields as needed
}, { timestamps: true });

module.exports = mongoose.model('Disaster', disasterSchema);
