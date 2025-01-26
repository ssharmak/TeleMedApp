import React from "react";

const HomePage = () => {
  const styles = {
    container: {
      maxWidth: "800px",
      margin: "50px auto",
      padding: "20px",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
    },
    header: {
      marginBottom: "20px",
      fontSize: "2rem",
      color: "#333",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      margin: "10px",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome to TeleMedApp</h1>
      <button style={styles.button}>Operator Dashboard</button>
      <button style={styles.button}>Doctor Dashboard</button>
    </div>
  );
};

export default HomePage;
