const mongoose = require("mongoose");

const RideSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  rideType: { type: String, required: true }, // Uber, Ola, Rapido
  pickupLocation: { type: String, required: true },
  dropLocation: { type: String, required: true },
  distance: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: String, enum: ["Booked", "Completed", "Cancelled"], default: "Booked" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Ride", RideSchema);
