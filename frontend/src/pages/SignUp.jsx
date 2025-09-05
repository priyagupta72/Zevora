import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaLock, FaBookOpen, FaUserShield } from "react-icons/fa"; 
import "./SignUp.css";

const SignUp = () => {
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Submitting...");

    const formData = new FormData(event.target);
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
      dob: formData.get("dob"),
      address: formData.get("address"),
    };

    if (userData.password !== userData.confirmPassword) {
      setResult("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("https://zevora.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      if (data.success) {
        setResult("Registration Successful!");
        event.target.reset();
        setTimeout(() => navigate("/signin"), 1500);
      } else {
        setResult(data.message || "Signup failed");
      }
    } catch (error) {
      setResult("⚠️ Something went wrong!");
    }
  };
  

  return (
    <div className="signup">
         <div className="bg-circle circle1"></div>
  <div className="bg-circle circle2"></div>
      {/* Left Section */}
      <motion.div
        className="signup-col left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Create Account </h3>
        <h4>Register to join our courses</h4>
        <ul>
          <li>
            <FaUserShield className="icon" /> Secure & Fast Authentication
          </li>
          <li>
            <FaBookOpen className="icon" /> Access Premium Courses
          </li>
          <li>
            <FaLock className="icon" /> Personalized Dashboard
          </li>
        </ul>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="signup-col right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Enter Your Name" required />
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <input type="password" name="password" placeholder="Enter Password" required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
          <input type="date" name="dob" required />
          <input type="text" name="address" placeholder="Enter Your Address" required />

          <button type="submit" className="btn dark-btn">Sign Up</button>
        </form>

        <p className="redirect">
          Already have an account?{" "}
          <Link to="/signin" className="signin-link">
            Sign In
          </Link>
        </p>

        <span className="result-message">{result}</span>
      </motion.div>
    </div>
  );
};

export default SignUp;
