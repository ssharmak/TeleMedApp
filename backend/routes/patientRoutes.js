const express = require("express");
const Patient = require("../models/Patient");
const router = express.Router();

// POST: Register a patient (Operator)
router.post("/register", async (req, res) => {
  const { name, email, phone, age, address, problemDescription } = req.body;
  console.log("Received data:", req.body); // Log incoming data

  if (!name || !email || !phone || !age || !address || !problemDescription) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields",
    });
  }

  try {
    const newPatient = new Patient({
      name,
      email,
      phone,
      age,
      address,
      problemDescription,
    });

    await newPatient.save();
    res
      .status(201)
      .json({ success: true, message: "Patient registered successfully" });
  } catch (error) {
    console.error("Error registering patient:", error);
    res
      .status(500)
      .json({ success: false, message: "Error registering patient" });
  }
});

// GET: Get all patients (Doctor)
router.get("/patients", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching patients" });
  }
});

// PUT: Doctor replies to a patient (Doctor)
router.put("/reply/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { doctorReply } = req.body;

    const patient = await Patient.findById(id);
    if (!patient) {
      return res
        .status(404)
        .json({ success: false, message: "Patient not found" });
    }

    // Store the doctor's reply in the database
    patient.doctorReply = doctorReply;
    await patient.save();

    res
      .status(200)
      .json({
        success: true,
        message:
          "Reply added successfully. Patient can view it in their portal.",
      });
  } catch (error) {
    console.error("Error updating patient details:", error);
    res
      .status(500)
      .json({ success: false, message: "Error updating patient details" });
  }
});

module.exports = router;
