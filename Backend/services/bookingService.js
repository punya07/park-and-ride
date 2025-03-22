const Booking = require("../models/Booking");
const ParkingSlot = require("../models/ParkingSlot");

const bookParkingSlot = async (userId, parkingSlotId, startTime, endTime) => {
    const slot = await ParkingSlot.findById(parkingSlotId);
    if (!slot || !slot.available) throw new Error("Slot is not available");

    const hours = (new Date(endTime) - new Date(startTime)) / (1000 * 60 * 60);
    const amount = hours * slot.pricePerHour;

    const booking = new Booking({
        userId,
        parkingSlotId,
        startTime,
        endTime,
        amount,
        status: "confirmed",
    });

    await booking.save();
    return booking;
};

const cancelBooking = async (bookingId) => {
    const booking = await Booking.findById(bookingId);
    if (!booking) throw new Error("Booking not found");

    booking.status = "canceled";
    await booking.save();
    return booking;
};

module.exports = { bookParkingSlot, cancelBooking };
