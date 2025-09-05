import React from 'react';
import './About.css';
import about_img from '../assets/about.jpg';

const About = () => {
  return (
    <section className="about">
      {/* Background Circles */}
      <div className="about-circle circle1"></div>
      <div className="about-circle circle2"></div>

      {/* Left Image */}
      <div className="about-left">
        <img src={about_img} alt="About Zevora" className='about-img' />
      </div>

      {/* Right Text */}
      <div className="about-right">
        <h2>About Us</h2>
        <p>
          Zevora Technologies is a global technology solutions company offering education,
          consulting, and training services in emerging technologies. With a team of industry experts,
          we provide practical learning experiences that bridge the gap between academic knowledge
          and real-world application.
        </p>
      </div>
    </section>
  );
};

export default About;

