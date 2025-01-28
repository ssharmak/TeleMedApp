const express = require("express");
const mongoose = require("mongoose");
const patientRoutes = require("./routes/patientRoutes");
const cors = require("cors");

const app = express();

// Enable CORS for front-end to make requests to the backend
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Use patient routes for handling API calls related to patients
app.use("/api/patients", patientRoutes);

const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://ssharmak:JBbLrbJgAxfIDS5s@wandervibe.y23u0.mongodb.net/?retryWrites=true&w=majority&appName=WanderVibe"
  ) // Remove deprecated options
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log("MongoDB connection error:", err);
  });

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
