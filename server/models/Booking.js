const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  vehicleNumber: String,
  ownerName: String,
  slotNumber: Number,
  bookingTime: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
