const express = require("express");
const router = express.Router();
const rideController = require("../controllers/rideController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.post("/book", authMiddleware, rideController.bookRide);
router.get("/history", authMiddleware, rideController.getRideHistory);
router.put("/cancel/:id", authMiddleware, rideController.cancelRide);
router.put("/complete/:id", adminMiddleware, rideController.completeRide); 

module.exports = router;
