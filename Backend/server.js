require("dotenv").config({ path: "../.env" }); // Ensure .env is loaded
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // Import database connection
// const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const bookingRoutes = require("./routes/booking");
const parkingRoutes = require("./routes/parking");
const rideRoutes = require("./routes/ride");
const adminRoutes = require("./routes/admin");

const app = express();
app.use(cors());
app.use(express.json());




connectDB();





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
