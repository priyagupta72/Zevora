
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaBolt, FaUserCheck } from "react-icons/fa";
import "./SignIn.css";

const SignIn = ({ setUser }) => { // receive setUser
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Submitting...");

    const formData = new FormData(event.target);
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setResult("Sign In Successful");
        event.target.reset();

        // Save token and user info
        localStorage.setItem("token", data.token);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          setUser(data.user); // update navbar immediately
        }

        setTimeout(() => navigate("/home"), 500);
      } else {
        setResult(data.message || "Sign In failed");
      }
    } catch (error) {
      setResult("⚠️ Something went wrong!");
    }
  };

  return (
    <div className="signin">
      <motion.div
        className="signin-col left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>

        <h3>Welcome Back 👋</h3>
        <h4>Sign in to continue learning</h4>
        <ul>
          <li><FaLock className="icon" /> Secure Authentication</li>
          <li><FaBolt className="icon" /> Instant Dashboard Access</li>
          <li><FaUserCheck className="icon" /> Personalized Experience</li>
        </ul>
      </motion.div>

      <motion.div
        className="signin-col right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form onSubmit={onSubmit}>
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <input type="password" name="password" placeholder="Enter Password" required />
          <button type="submit" className="btn dark-btn">Sign In</button>
        </form>

        <p className="redirect">
          Don't have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>

        <span className="result-message">{result}</span>
      </motion.div>
    </div>
  );
};

export default SignIn;
