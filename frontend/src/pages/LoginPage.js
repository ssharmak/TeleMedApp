import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // To handle navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      if (response.data.success) {
        // Store JWT token in localStorage
        localStorage.setItem("token", response.data.token);

        // Redirect user based on their role
        if (response.data.role === "operator") {
          navigate("/operator");
        } else if (response.data.role === "doctor") {
          navigate("/doctor");
        }
        setErrorMessage(""); // Clear any previous error
      } else {
        setErrorMessage(response.data.message || "Login failed.");
      }
    } catch (error) {
      setErrorMessage("An error occurred during login.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Login</h2>
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
      <p style={styles.link}>
        Don't have an account?{" "}
        <a href="/register" style={styles.linkText}>
          Register here
        </a>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginBottom: "20px",
  },
  link: {
    textAlign: "center",
    marginTop: "10px",
  },
  linkText: {
    color: "#007bff",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default LoginPage;
