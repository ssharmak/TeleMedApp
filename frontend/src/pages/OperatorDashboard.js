// src/pages/OperatorDashboard.js
import React, { useState } from "react";
import axios from "axios";

const OperatorDashboard = () => {
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
    problemDescription: "",
    email: "", // Ensure email is added as it's required in the backend
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data:", patientData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/patients/register",
        patientData
      );
      console.log("Response:", response.data);
      if (response.data.success) {
        setMessage(response.data.message);
        setPatientData({
          name: "",
          age: "",
          address: "",
          phone: "",
          problemDescription: "",
          email: "", // Reset the email field
        });
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error registering patient:", error);
      setMessage("Error registering patient.");
    }
  };

  return (
    <div>
      <h1>Register Patient</h1>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={patientData.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={patientData.age}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={patientData.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={patientData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email" // Added email input field
          placeholder="Email"
          value={patientData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="problemDescription"
          placeholder="Problem Description"
          value={patientData.problemDescription}
          onChange={handleChange}
          required
        />
        <button type="submit">Register Patient</button>
      </form>
    </div>
  );
};

export default OperatorDashboard;
