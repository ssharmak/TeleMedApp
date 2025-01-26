import React, { useState } from "react";
import axios from "axios";

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/patients", formData);
      alert("Patient added successfully!");
    } catch (error) {
      console.error("Error adding patient:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        required
      />
      <input name="age" placeholder="Age" onChange={handleChange} />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default PatientForm;
