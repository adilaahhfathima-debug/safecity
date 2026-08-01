import React, { useState } from "react";
import {
  Shield,
  MapPin,
  AlertTriangle,
  CheckCircle,
  FileText,
} from "lucide-react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    complaint: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    alert("Complaint Submitted Successfully!");

    setForm({
      name: "",
      location: "",
      complaint: "",
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const card = {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          background: "#1e3a8a",
          color: "white",
          padding: "15px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Shield size={24} />
          SafeCity AI
        </h2>

        <div>AI • Blockchain • Secure</div>
      </nav>

      {/* Hero */}
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>Welcome to SafeCity AI</h1>
        <p>Anonymous AI-powered Crime Reporting Platform using Blockchain</p>
      </div>

      {/* Dashboard */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        <div style={card}>
          <FileText size={35} />
          <h3>Reports</h3>
          <h2>125</h2>
        </div>

        <div style={card}>
          <AlertTriangle size={35} />
          <h3>High Priority</h3>
          <h2>18</h2>
        </div>

        <div style={card}>
          <MapPin size={35} />
          <h3>Hotspots</h3>
          <h2>7</h2>
        </div>

        <div style={card}>
          <CheckCircle size={35} />
          <h3>Verified</h3>
          <h2>96%</h2>
        </div>
      </div>

      {/* Complaint Form */}
      <div
        style={{
          background: "white",
          margin: "30px",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Submit Complaint</h2>

        <form onSubmit={submitForm}>
          <input
            type="text"
            name="name"
            placeholder="Your Name (Optional)"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="complaint"
            placeholder="Describe the complaint..."
            rows="5"
            value={form.complaint}
            onChange={handleChange}
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxSizing: "border-box",
};

const buttonStyle = {
  background: "#1e3a8a",
  color: "white",
  border: "none",
  padding: "12px 20px",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};