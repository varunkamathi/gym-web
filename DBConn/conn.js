const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const mongoURI = process.env.MONGO_URI;


mongoose.connect(mongoURI)
.then(() => console.log("DB connection successful!"))
.catch((err) => console.error("DB connection error:", err));