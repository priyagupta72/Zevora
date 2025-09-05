
import React from 'react';
import './Services.css';
import Cybersecurity from '../assets/Cybersecurity.jpg';
import Prompt from '../assets/Prompt.jpg';
import Cloud from '../assets/Cloud.jpg';
import fullStack from '../assets/full Stack.jpg';
import program_icon_1 from '../assets/program-icon-1.png';
import program_icon_2 from '../assets/program-icon-2.png';
import program_icon_3 from '../assets/program-icon-3.png';
import program_icon_4 from '../assets/program-icon-4.png';
import { Link } from 'react-router-dom';

const services = [
  { img: Cybersecurity, icon: program_icon_1, title: "Cybersecurity", path: "/services/cybersecurity" },
  { img: Prompt, icon: program_icon_2, title: "Prompt Engineering", path: "/services/prompt" },
  { img: Cloud, icon: program_icon_3, title: "Cloud Computing", path: "/services/cloud" },
  { img: fullStack, icon: program_icon_4, title: "Full-Stack", path: "/services/fullstack" },
];

const Services = () => {
  return (
    <section className="services">
      {/* Background Circles */}
      <div className="service-circle circle1"></div>
      <div className="service-circle circle2"></div>

      {services.map((service, index) => (
        <Link to={service.path} key={index} className="service-link">
          <div className="service-card">
            <div className="service-img-wrapper">
              <img src={service.img} alt={service.title} className="service-img"/>
              <div className="service-overlay">
                <img src={service.icon} alt="icon" />
              </div>
            </div>
            <p className="service-title">{service.title}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Services;
