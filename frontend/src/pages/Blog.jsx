import React from "react";
import Slider from "react-slick";
import "./Blog.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const blogPosts = [
  {
    id: 1,
    title: "Cyber Security Trends in 2025",
    summary: "Explore the latest trends in Cyber Security, including AI-based threat detection and advanced encryption methods.",
    author: "Zevora Team",
    date: "August 2025",
    image: "https://media.istockphoto.com/id/1420039900/photo/cyber-security-ransomware-email-phishing-encrypted-technology-digital-information-protected.webp?a=1&b=1&s=612x612&w=0&k=20&c=GOfKER2wccz8_UMtG0Jk4uQH2TgkUuHQhGT08EkFTOk=",
  },
  {
    id: 2,
    title: "Mastering Prompt Engineering",
    summary: "Learn how to craft efficient prompts for AI models and maximize your results in NLP projects.",
    author: "Zevora Team",
    date: "July 2025",
    image: "https://media.istockphoto.com/id/1502429660/photo/ai-tech-businessman-show-virtual-graphic-global-internet-connect-chatbot-chat-with-ai.webp?a=1&b=1&s=612x612&w=0&k=20&c=MMu4hicqCPz_vwSuwtohU6WfBBh72fvnNVVYryHB6wo=",
  },
  {
    id: 3,
    title: "Cloud Computing for Beginners",
    summary: "A complete guide to cloud computing fundamentals, services, and deployment strategies for beginners.",
    author: "Zevora Team",
    date: "June 2025",
    image: "https://media.istockphoto.com/id/2203755012/photo/big-data-storage-cloud-computing-concepts.webp?a=1&b=1&s=612x612&w=0&k=20&c=btKH9iH8Cl6fHyrtY-HvMM7COn6cDKVwDFOlMPTEjS0=",
  },
  {
    id: 4,
    title: "Full Stack Development Roadmap",
    summary: "Step-by-step roadmap for becoming a full stack developer in 2025 with essential tools and technologies.",
    author: "Zevora Team",
    date: "May 2025",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVsbCUyMHN0YWNrfGVufDB8fDB8fHww",
  },
];

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,       
    centerPadding: "60px",  
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "40px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };

  return (
   <div className="blog-section">
  
  <Slider {...settings} className="blog-slider">
    {blogPosts.map((post) => (
      <div key={post.id} className="blog-card">
        <img src={post.image} alt={post.title} className="blog-card-image" />
        <div className="blog-card-overlay">
          <h3 className="blog-card-title">{post.title}</h3>
          <p className="blog-card-summary">{post.summary}</p>
          <p className="blog-card-meta">{post.author} | {post.date}</p>
          <button className="blog-card-btn">Read More</button>
        </div>
      </div>
    ))}
  </Slider>
</div>

  );
};

export default Blog;
