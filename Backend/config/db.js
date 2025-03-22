const dotenv = require("dotenv");
dotenv.config({ path: "../../.env" }); 

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            console.error(" ERROR: MONGO_URI is not defined in .env. Check your .env file.");
            process.exit(1);
        }

        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB Connected Successfully");
    } catch (err) {
        console.error(` MongoDB Connection Error: ${err.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
