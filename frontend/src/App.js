// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OperatorDashboard from "./pages/OperatorDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/operator" element={<OperatorDashboard />} />
      <Route path="/doctor" element={<DoctorDashboard />} />
    </Routes>
  </Router>
);

export default App;
