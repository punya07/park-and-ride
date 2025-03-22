const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const {
  getAvailableSlots,
  createSlot,
  deleteSlot
} = require("../controllers/parkingController");

router.get("/", getAvailableSlots);
router.post("/", authMiddleware, adminMiddleware, createSlot);
router.delete("/:id", authMiddleware, adminMiddleware, deleteSlot);

module.exports = router;
