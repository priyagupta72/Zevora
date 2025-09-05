import React from "react";
import cloud_img from "../assets/Cloud.jpg";
import Contact from "../pages/Contact";
import "./fullStack.css"; // Reuse FullStack CSS
import Title from "../pages/Title";
import CourseRecommendation from "../pages/CourseRecommendation";

const topics = [
  {
    title: "Cloud Architecture",
    description:
      "Learn how to design and structure cloud solutions for scalability, reliability, and cost-efficiency.",
    img: "https://media.istockphoto.com/id/1155123965/photo/double-exposure-the-city-and-clouds-technology-futuristic-computer-digital-abstract.webp?a=1&b=1&s=612x612&w=0&k=20&c=5PsFrzNB8TPp628r_JNsCcZcXOe_OXvMe9qTYWV3tg0=",
  },
  {
    title: "Virtualization",
    description:
      "Understand virtual machines, containers, and how to optimize resources in cloud environments.",
    img: "https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.webp?a=1&b=1&s=612x612&w=0&k=20&c=i8vHSeffMXOknM1iu8QDnSEDuNg0nOoLjJvP-KjdRoE=",
  },
  {
    title: "Storage Solutions",
    description:
      "Explore cloud storage options, data management, and strategies for secure and efficient storage.",
    img: "https://media.istockphoto.com/id/2193247029/photo/business-team-analyzing-interactive-digital-dashboards-with-data-visualizations.webp?a=1&b=1&s=612x612&w=0&k=20&c=isQ028AFUBPSHzElNgBRsSGPMksNTAyKUVgQ_K5NxT0=",
  },
  {
    title: "DevOps Integration",
    description:
      "Integrate DevOps practices with cloud platforms to automate deployment, monitoring, and management.",
    img: "https://media.istockphoto.com/id/1472024953/photo/devops-software-development-operations-programmer-administration-system-life-cycle-quality.webp?a=1&b=1&s=612x612&w=0&k=20&c=5Tbf5pbi0FIX9wkEnwOJXtPac5Nof7nvoYMGab7txhI=",
  },
];

const Cloud = () => {
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
            <h1>Cloud Computing</h1>
            <p>
              Build expertise in cloud platforms like AWS, Azure, and Google Cloud. Learn to design, deploy, and manage cloud infrastructure efficiently.
            </p>
          </div>
          <div className="fullstack-hero-image">
            <img src={cloud_img} alt="Cloud Computing" />
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      <CourseRecommendation defaultDomain="Cloud Computing" />

      {/* Programs Title */}
      <Title subTitle="Cloud Computing Topics" title="What You Will Learn" />

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

export default Cloud;
