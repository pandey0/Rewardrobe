const express = require("express");  // Corrected typo
const connectDB = require("./config/db_connect");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const connectCloudinary = require("./config/cloudinary");
const adminauthroute = require("./Routes/adminauth.route.js");
const adminfunctions = require("./Routes/adminfunctions.route.js");

dotenv.config();

const app = express();  // Corrected typo here as well

// Middleware configuration
app.use(
  cors({
    credentials: true,
    // origin: "http://localhost:3000",
    origin:true
  })
);

app.use(express.json());  
app.use(cookieParser());

// Routes
app.use("/api/adminauth", adminauthroute);
app.use("/api/adminfunctions", adminfunctions);

// Test route
app.get("/", (req, res) => {
  res.send("Hello from server!");
});

// Start the server
app.listen(5100, () => {
  console.log("Server is running on port 5100");  // Fixed port mismatch
  connectDB();  // Ensure your database connection logic is here
  connectCloudinary();  // Initialize Cloudinary connection
});
