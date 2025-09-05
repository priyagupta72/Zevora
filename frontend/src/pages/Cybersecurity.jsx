
import React from "react";
import cyber_img from "../assets/Cybersecurity.jpg";
import Contact from "../pages/Contact";
import "./FullStack.css"; // Reuse FullStack CSS
import Title from "../pages/Title";
import CourseRecommendation from "../pages/CourseRecommendation";

const topics = [
  {
    title: "Ethical Hacking",
    description:
      "Learn penetration testing techniques, discover vulnerabilities, and understand hacker mindsets to protect systems.",
    img: "https://images.unsplash.com/photo-1654498770512-c9045a3b6be0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
  },
  {
    title: "Network Security",
    description:
      "Understand network protocols, firewall configurations, VPNs, and secure communication methods to protect networks.",
    img: "https://media.istockphoto.com/id/1435605327/photo/cybersecurity-concept-global-network-security-technology-business-people-protect-personal.webp?a=1&b=1&s=612x612&w=0&k=20&c=Reqkqf1qILOYmckRT5y1B9pL-hZuBWl1FbXTrWnoiGw=",
  },
  {
    title: "Vulnerability Assessment",
    description:
      "Perform scans, identify weaknesses, and prioritize security issues for effective risk mitigation.",
    img: "https://media.istockphoto.com/id/2123156328/photo/network-security-concept-businessman-uses-tablet-on-secure-global-networking-data-encryption.webp?a=1&b=1&s=612x612&w=0&k=20&c=rgVdEVfdwPr6aTp_iNaI1G9KRbSN9G9TBTqsAcsoyY8=",
  },
  {
    title: "Incident Response",
    description:
      "Develop skills to detect, respond, and recover from cyber incidents with minimal impact.",
    img: "https://media.istockphoto.com/id/2209062506/photo/digital-threat-warning-in-cyberspace.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZkRZwem6hHBuQO3nFFXzn3rzxFUgwL2qeh0J2CVvsmg=",
  },
];

const Cybersecurity = () => {
  return (
    <div className="fullstack-page"> {/* Use FullStack page class */}

      {/* Floating Circles - Hero */}
      <div className="bg-circle fs-circle1"></div>
      <div className="bg-circle fs-circle2"></div>

      {/* Hero Section */}
      <section className="fullstack-hero-landing">
        <div className="fullstack-hero-overlay"></div>
        <div className="fullstack-hero-content">
          <div className="fullstack-hero-text">
            <h1>Cybersecurity Training</h1>
            <p>
              Learn how to protect digital assets from cyber threats. Our Cybersecurity program equips you with real-world skills to safeguard networks, systems, and data.
            </p>
          </div>
          <div className="fullstack-hero-image">
            <img src={cyber_img} alt="Cybersecurity" />
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      <CourseRecommendation defaultDomain="Cybersecurity" />

      {/* Programs Title */}
      <Title subTitle="Our Cybersecurity Programs" title="What You Will Learn" />

      {/* Topics Section */}
      <section className="fullstack-topics">
        {/* Floating Circles - Topics */}
        <div className="bg-circle fs-circle3"></div>
        <div className="bg-circle fs-circle4"></div>

        {topics.map((topic, index) => (
          <div className="fullstack-topic-card" key={index}>
            <div className="topic-image">
              <img src={topic.img} alt={topic.title} />
            </div>
            <div className="topic-text">
              <h2>{topic.title}</h2>
              <p>{topic.description}</p>
              <button className="btn dark-btn">Read More</button>
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <Title subTitle="Contact Us" title="Get in Touch" />
      <Contact />
    </div>
  );
};

export default Cybersecurity;
