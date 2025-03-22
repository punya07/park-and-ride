const bookingService = require("../services/bookingService");

const bookParkingSlot = async (req, res) => {
  try {
    const booking = await bookingService.bookParkingSlot(
      req.user.id,
      req.body.parkingSlotId,
      req.body.startTime,
      req.body.endTime
    );
    res.status(201).json({ message: "Booking confirmed", booking });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const updatedBooking = await bookingService.cancelBooking(req.params.id);
    res.json({ message: "Booking canceled", updatedBooking });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await bookingService.getUserBookings(req.user.id);
    res.json(bookings);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { bookParkingSlot, cancelBooking, getBookings };
