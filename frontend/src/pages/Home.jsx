import React from 'react';
import './Home.css';
import heroImage from '../assets/hero.jpg';
import dark_arrow from '../assets/dark-arrow.png';

const Home = () => {
  return (
    <section className="home">
      {/* Background gradient */}
      <div className="home-bg"></div>

      <div className="home-content">
        {/* Left text */}
        <div className="home-text fade-in-left">
          <h1>Empowering Careers with Future-Ready Skills</h1>
          <p>
            At Zevora Technologies, we provide industry-driven training in the most in-demand technologies. 
            Our mission is to equip learners with hands-on knowledge to excel in today’s digital world.
          </p>
          <div className="home-buttons">
  <a href="#services">
    <button className="btn explore-btn">
      Explore More <img src={dark_arrow} alt="arrow" />
    </button>
  </a>
           <a href="#contact">
    <button className="btn contact-btn">Contact Us</button>
  </a>
</div>
        </div>

        {/* Right image */}
        <div className="home-image fade-in-right">
          <img src={heroImage} alt="Hero" loading="lazy" />
        </div>
      </div>

      {/* Floating shapes */}
      <div className="floating-shape shape1"></div>
      <div className="floating-shape shape2"></div>
    </section>
  );
};

export default Home;
