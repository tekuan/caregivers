const mongoose = require('mongoose');

const caregiverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  specialty: { type: String, required: true },
  location: { type: String, required: true },
  availability: { type: Boolean, default: true },
});

module.exports = mongoose.model('Caregiver', caregiverSchema);
