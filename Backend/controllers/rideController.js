const Ride = require("../models/Ride");

// Book a Ride
exports.bookRide = async (req, res) => {
  try {
    const { rideType, pickupLocation, dropLocation, distance, price } = req.body;
    if (!rideType || !pickupLocation || !dropLocation || !distance || !price) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const ride = new Ride({
      userId: req.user.id,
      rideType,
      pickupLocation,
      dropLocation,
      distance,
      price,
    });

    await ride.save();
    res.status(201).json({ message: "Ride booked successfully!", ride });
  } catch (error) {
    console.error("Ride Booking Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get User's Ride History
exports.getRideHistory = async (req, res) => {
  try {
    const rides = await Ride.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(rides);
  } catch (error) {
    console.error("Ride History Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

//Cancel a Ride
exports.cancelRide = async (req, res) => {
  try {
    const ride = await Ride.findOne({ _id: req.params.id, userId: req.user.id });
    if (!ride) {
      return res.status(404).json({ error: "Ride not found" });
    }

    ride.status = "Cancelled";
    await ride.save();
    res.status(200).json({ message: "Ride cancelled successfully", ride });
  } catch (error) {
    console.error("Cancel Ride Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Complete a Ride (Admin or Driver action)
exports.completeRide = async (req, res) => {
  try {
    const ride = await Ride.findById(req.params.id);
    if (!ride) {
      return res.status(404).json({ error: "Ride not found" });
    }

    ride.status = "Completed";
    await ride.save();
    res.status(200).json({ message: "Ride completed successfully", ride });
  } catch (error) {
    console.error("Complete Ride Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
