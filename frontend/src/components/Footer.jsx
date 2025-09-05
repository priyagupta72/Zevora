import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0a1f44",
        color: "#fff",
        padding: "30px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1000px",
          margin: "0 auto",
          gap: "20px",
        }}
      >
        {/* Company Info */}
        <div>
          <h3 style={{ fontSize: "1.3rem", marginBottom: "5px" }}>
            Zevora Technologies
          </h3>
          <p>Empowering Careers with Future-Ready Skills</p>
          <p>info@zevoratech.com <br></br> +91-XXXXXXXXXX</p>
          <p>Zevora Technologies,[City], India</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize: "1.1rem", marginBottom: "5px" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
  <li><a href="#home" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
  <li><a href="#about" style={{ color: "#fff", textDecoration: "none" }}>About Us</a></li>
  <li><a href="#services" style={{ color: "#fff", textDecoration: "none" }}>Services</a></li>
  <li><a href="#contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
</ul>

        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          borderTop: "1px solid #444",
          paddingTop: "10px",
          fontSize: "0.9rem",
          color: "#ccc",
        }}
      >
        &copy; {new Date().getFullYear()} Priya Gupta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

