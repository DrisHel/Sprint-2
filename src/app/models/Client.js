const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    uppercase: true
  },
  birthdate: {
    type: Date,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  cityWhereLive: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true
  }
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
