const mongoose = require("mongoose");

const ParkingSlotSchema = new mongoose.Schema({
    location: { type: String, required: true },
    slotNumber: { type: String, required: true, unique: true },
    pricePerHour: { type: Number, default: 60 },
    available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model("ParkingSlot", ParkingSlotSchema);
