
const ParkingSlot = require("../models/ParkingSlot");

const getAvailableSlots = async () => {
    return await ParkingSlot.find({ available: true });
};

const createParkingSlot = async (location, slotNumber, pricePerHour = 60) => {
    const existingSlot = await ParkingSlot.findOne({ slotNumber });
    if (existingSlot) throw new Error("Slot already exists");

    const slot = new ParkingSlot({ location, slotNumber, pricePerHour });
    await slot.save();
    return slot;
};

const deleteParkingSlot = async (slotId) => {
    await ParkingSlot.findByIdAndDelete(slotId);
};

module.exports = { getAvailableSlots, createParkingSlot, deleteParkingSlot };
