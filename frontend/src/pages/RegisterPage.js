import React, { useState } from "react";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      if (response.data.success) {
        setSuccessMessage(response.data.message);
        setErrorMessage("");
        setFormData({ name: "", email: "", password: "", role: "" });
      } else {
        setErrorMessage(response.data.message || "Registration failed.");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration.");
      setSuccessMessage("");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Register</h2>
      {successMessage && <p style={styles.success}>{successMessage}</p>}
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
      <form style={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />
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
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          style={styles.select}
        >
          <option value="">Select Role</option>
          <option value="doctor">Doctor</option>
          <option value="operator">Operator</option>
        </select>
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
      <p style={styles.link}>
        Already have an account?{" "}
        <a href="/" style={styles.linkText}>
          Login here
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
  select: {
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
  success: {
    color: "green",
    textAlign: "center",
    marginBottom: "20px",
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

export default RegisterPage;
