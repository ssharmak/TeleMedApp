// src/pages/DoctorDashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);
  const [reply, setReply] = useState("");

  useEffect(() => {
    async function fetchPatients() {
      const response = await axios.get(
        "http://localhost:5000/api/patients/patients"
      );
      setPatients(response.data);
    }
    fetchPatients();
  }, []);

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = async (patientId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/patients/reply/${patientId}`,
        { doctorReply: reply }
      );

      if (response.data.success) {
        alert("Reply added successfully! Patient can view it in their portal.");
        setReply("");
      } else {
        alert("Failed to send reply.");
      }
    } catch (error) {
      alert("Error sending reply.");
    }
  };

  return (
    <div>
      <h1>Doctor Dashboard</h1>
      {patients.length > 0 ? (
        patients.map((patient) => (
          <div key={patient._id}>
            <h3>{patient.name}</h3>
            <p>Problem: {patient.problemDescription}</p>
            <p>Reply: {patient.doctorReply || "No reply yet"}</p>
            <textarea
              value={reply}
              onChange={handleReplyChange}
              placeholder="Write your reply here"
            />
            <button onClick={() => handleReplySubmit(patient._id)}>
              Reply
            </button>
          </div>
        ))
      ) : (
        <p>No patients to display</p>
      )}
    </div>
  );
};

export default DoctorDashboard;
