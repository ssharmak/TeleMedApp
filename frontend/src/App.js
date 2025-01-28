import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OperatorDashboard from "./pages/OperatorDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/operator" element={<OperatorDashboard />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
