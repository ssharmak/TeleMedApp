import React, { useEffect, useState } from "react";
import axios from "axios";

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const { data } = await axios.get("/api/patients");
      setPatients(data);
    };
    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient._id}>
            {patient.name} - {patient.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
