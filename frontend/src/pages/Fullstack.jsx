import React from "react";
import fullstack_img from "../assets/full Stack.jpg";
import Contact from "../pages/Contact";
import "./FullStack.css";
import Title from "../pages/Title";
import CourseRecommendation from "../pages/CourseRecommendation";

const topics = [
  {
    title: "Frontend Development",
    description:
      "Master HTML, CSS, JavaScript, and React to build responsive, dynamic, and user-friendly interfaces.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&auto=format&fit=crop&q=60",
  },
  {
    title: "Backend Development",
    description:
      "Learn to build robust server-side applications using Node.js, Python, or Java.",
    img: "https://media.istockphoto.com/id/1134696790/photo/web-development.webp?a=1&b=1&s=612x612&w=0&k=20&c=yHJGH-42scBAlHD0wSxNMp0EiNpMvi443F8pUSC5MXA=",
  },
  {
    title: "Databases",
    description:
      "Understand SQL and NoSQL databases like MySQL, PostgreSQL, and MongoDB for efficient data storage and retrieval.",
    img: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YWJhc2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Deployment & DevOps",
    description:
      "Deploy full-stack applications and learn DevOps practices using Docker, CI/CD, and cloud platforms.",
    img: "https://media.istockphoto.com/id/1424122482/photo/using-artificial-intelligence-technology-in-internal-audit-concept-examination-and-evaluation.webp?a=1&b=1&s=612x612&w=0&k=20&c=OftpfRvJdU540IS6RhFTs7EKR6-Sj3v-Aj2VmUNqf5Y=",
  },
];

const FullStack = () => {
  return (
    <div className="fullstack-page">
      {/* Floating Circles - Hero */}
      <div className="bg-circle fs-circle1"></div>
      <div className="bg-circle fs-circle2"></div>

      {/* Hero Section */}
      <section className="fullstack-hero-landing">
        <div className="fullstack-hero-overlay"></div>
        <div className="fullstack-hero-content">
          <div className="fullstack-hero-text">
            <h1>Full Stack Development</h1>
            <p>
              Build end-to-end web applications with hands-on experience in
              frontend, backend, databases, and deployment. Become an industry-ready
              full stack developer.
            </p>
          </div>
          <div className="fullstack-hero-image">
            <img src={fullstack_img} alt="Full Stack Development" />
          </div>
        </div>
      </section>
       
      <CourseRecommendation defaultDomain="Full Stack" />

      <Title
        subTitle="Our Full Stack Programs"
        title="What You Will Learn"
      />

        

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

export default FullStack;







