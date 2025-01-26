import React from "react";
import PatientForm from "../components/PatientForm";
import PatientList from "../components/PatientList";

const PatientPage = () => (
  <div className="patient-page">
    <PatientForm />
    <PatientList />
  </div>
);

export default PatientPage;
