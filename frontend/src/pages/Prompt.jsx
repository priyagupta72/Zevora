import React from "react";
import prompt_img from "../assets/Prompt.jpg";
import Contact from "../pages/Contact";
import "./FullStack.css"; // Reuse FullStack CSS
import Title from "../pages/Title";
import CourseRecommendation from "../pages/CourseRecommendation";

const topics = [
  {
    title: "AI Fundamentals",
    description:
      "Understand the basics of AI, machine learning, and how large language models like ChatGPT work.",
    img: "https://media.istockphoto.com/id/2169620598/photo/data-science-concept-it-engineer-data-scientist-working-on-digital-smartphone-with-big-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=zkhv_MKgnAEduStzfcx2Infpfh0qcrpotBCH1-eNqB8=",
  },
  {
    title: "Prompt Design Techniques",
    description:
      "Learn how to craft effective prompts to get the desired output from AI models.",
    img: "https://plus.unsplash.com/premium_photo-1725907643696-b30e86f66b28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvbXB0JTIwZGVzaWduaW5nfGVufDB8fDB8fHww",
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks using AI prompts to improve productivity.",
    img: "https://media.istockphoto.com/id/2154674637/photo/artificial-intelligence-machine-learning-natural-language-processing-data-technology.webp?a=1&b=1&s=612x612&w=0&k=20&c=0VVcHwlGRzF7xN4dCSQiceBumAYzNTvZMJHkrBg8C0g=",
  },
  {
    title: "Real-world Applications",
    description:
      "Apply prompt engineering skills to real-world problems and business scenarios.",
    img: "https://images.unsplash.com/photo-1710870509663-16f20f75d758?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWwlMjB3b3JsZCUyMGFwcHN8ZW58MHx8MHx8fDA%3D",
  },
];

const Prompt = () => {
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
            <h1>Prompt Engineering</h1>
            <p>
              Master the art of designing AI-driven prompts for models like ChatGPT. Enhance productivity and automate workflows using smart prompts.
            </p>
          </div>
          <div className="fullstack-hero-image">
            <img src={prompt_img} alt="Prompt Engineering" />
          </div>
        </div>
      </section>

      {/* Recommendation Section */}
      <CourseRecommendation defaultDomain="Prompt Engineering" />

      {/* Programs Title */}
      <Title subTitle="Prompt Engineering Topics" title="What You Will Learn" />

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

export default Prompt;
