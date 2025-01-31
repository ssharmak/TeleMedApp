// src/pages/OperatorDashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const OperatorDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [patientData, setPatientData] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
    problemDescription: "",
    email: "",
  });
  const [message, setMessage] = useState("");

  // Fetch patients and auto-refresh every 5 seconds
  useEffect(() => {
    async function fetchPatients() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/patients/patients"
        );
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    }
    fetchPatients();
    const interval = setInterval(fetchPatients, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/patients/register",
        patientData
      );

      if (response.data.success) {
        setMessage("Patient registered successfully!");
        setPatientData({
          name: "",
          age: "",
          address: "",
          phone: "",
          problemDescription: "",
          email: "",
        });

        // Refresh patient list
        const updatedPatients = await axios.get(
          "http://localhost:5000/api/patients/patients"
        );
        setPatients(updatedPatients.data);
      } else {
        setMessage("Error: " + response.data.message);
      }
    } catch (error) {
      console.error("Error registering patient:", error);
      setMessage("Error registering patient.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Operator Dashboard</h1>

      {/* Patient Registration Form */}
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Register Patient</h2>
        {message && <p style={styles.message}>{message}</p>}
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={patientData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={patientData.age}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={patientData.address}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={patientData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={patientData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
          <textarea
            name="problemDescription"
            placeholder="Problem Description"
            value={patientData.problemDescription}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
          <button type="submit" style={styles.button}>
            Register Patient
          </button>
        </form>
      </div>

      {/* Patient Dashboard */}
      <div style={styles.section}>
        <h2 style={styles.subtitle}>Patient List</h2>
        {patients.length > 0 ? (
          <div style={styles.patientList}>
            {patients.map((patient) => (
              <div key={patient._id} style={styles.patientCard}>
                <h3>{patient.name}</h3>
                <p>
                  <strong>Problem:</strong> {patient.problemDescription}
                </p>
                <p>
                  <strong>Doctor's Reply:</strong>{" "}
                  {patient.doctorReply || "No reply yet."}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No patients found</p>
        )}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    color: "#333",
  },
  section: {
    background: "#fff",
    padding: "15px",
    borderRadius: "6px",
    marginTop: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  },
  subtitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#007bff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  textarea: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    minHeight: "60px",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  message: {
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
  },
  patientList: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
  },
  patientCard: {
    padding: "10px",
    borderRadius: "5px",
    background: "#f0f8ff",
    border: "1px solid #ccc",
  },
};

export default OperatorDashboard;
