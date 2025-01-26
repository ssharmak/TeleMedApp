// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController"); // Ensure this path is correct

// Register route
router.post("/register", authController.registerUser); // Ensure function name is correct

// Login route
router.post("/login", authController.loginUser); // Ensure function name is correct

module.exports = router;
