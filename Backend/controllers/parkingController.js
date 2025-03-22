const parkingService = require("../services/parkingService");

const getAvailableSlots = async (req, res) => {
  try {
    const slots = await parkingService.getAvailableSlots();
    res.json(slots);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createSlot = async (req, res) => {
  try {
    const { location, slotNumber, pricePerHour } = req.body;
    const slot = await parkingService.createParkingSlot(location, slotNumber, pricePerHour);
    res.status(201).json(slot);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteSlot = async (req, res) => {
  try {
    await parkingService.deleteParkingSlot(req.params.id);
    res.json({ message: "Slot deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getAvailableSlots, createSlot, deleteSlot };
