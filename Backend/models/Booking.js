const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    parkingSlotId: { type: mongoose.Schema.Types.ObjectId, ref: "ParkingSlot", required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "confirmed", "canceled"], default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Booking", BookingSchema);
