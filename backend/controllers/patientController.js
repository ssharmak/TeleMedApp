const Patient = require("../models/Patient");

const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addPatient = async (req, res) => {
  try {
    const { name, email, phone, age } = req.body;
    const newPatient = new Patient({ name, email, phone, age });
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getPatients, addPatient };
