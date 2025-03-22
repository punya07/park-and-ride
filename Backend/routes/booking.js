
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  bookParkingSlot,
  cancelBooking,
  getBookings
} = require("../controllers/bookingController");

router.post("/book", authMiddleware, bookParkingSlot);
router.post("/cancel/:id", authMiddleware, cancelBooking);
router.get("/", authMiddleware, getBookings);

module.exports = router;
