import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";

// Images & Assets
import heroImage from "../assets/hero.jpg";
import dark_arrow from "../assets/dark-arrow.png";
import about_img from "../assets/about.jpg";
import Cybersecurity from "../assets/Cybersecurity.jpg";
import Prompt from "../assets/Prompt.jpg";
import Cloud from "../assets/Cloud.jpg";
import fullStack from "../assets/fullstack.jpg";
import program_icon_1 from "../assets/program-icon-1.png";
import program_icon_2 from "../assets/program-icon-2.png";
import program_icon_3 from "../assets/program-icon-3.png";
import program_icon_4 from "../assets/program-icon-4.png";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.jpeg";
import mail_icon from "../assets/mail-icon.png";
import phone_icon from "../assets/phone-icon.png";
import location_icon from "../assets/location-icon.png";

// CSS
import "./Home.css";
import "./Services.css";
import "./About.css";
import "./Blog.css";
import "./Testimonial.css";
import "./Contact.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../pages/Title";


// -------------------- Home Page --------------------
const Home = () => {
  return (
    <div>
        <section id="home">
      <Hero /></section>
      <section id="about">
        <About /></section>
      

      <section id="services">
        <Title subTitle="Our Services" title="What We Offer" />
        <Services />
      </section>

      <section id="blogs">
        <Title subTitle="Our Latest Blogs" title="Dive in and get inspired!" />
        <Blog />
      </section>

      <section id="testimonial">
        <Title subTitle="Hear from learners." title="Student Voices" />
        <Testimonial />
      </section>

      <section id="contact">
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </section>
    </div>
  );
};

// -------------------- Hero Section --------------------
const Hero = () => (
  <section className="home">
    <div className="home-bg"></div>
    <div className="home-content">
      <div className="home-text fade-in-left">
        <h1>Empowering Careers with Future-Ready Skills</h1>
        <p>
          At Zevora Technologies, we provide industry-driven training in the most
          in-demand technologies. Our mission is to equip learners with hands-on
          knowledge to excel in today’s digital world.
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
      <div className="home-image fade-in-right">
        <img src={heroImage} alt="Hero" loading="lazy" />
      </div>
    </div>
    <div className="floating-shape shape1"></div>
    <div className="floating-shape shape2"></div>
  </section>
);

// -------------------- About Section --------------------
const About = () => (
  <section className="about">
    <div className="about-circle circle1"></div>
    <div className="about-circle circle2"></div>
    <div className="about-left">
      <img src={about_img} alt="About Zevora" className="about-img" />
    </div>
    <div className="about-right">
      <h2>About Us</h2>
      <p>
        Zevora Technologies is a global technology solutions company offering
        education, consulting, and training services in emerging technologies.
        With a team of industry experts, we provide practical learning experiences
        that bridge the gap between academic knowledge and real-world application.
      </p>
    </div>
  </section>
);

// -------------------- Services Section --------------------
const services = [
  { img: Cybersecurity, icon: program_icon_1, title: "Cybersecurity", path: "/signin" },
  { img: Prompt, icon: program_icon_2, title: "Prompt Engineering", path: "/signin" },
  { img: Cloud, icon: program_icon_3, title: "Cloud Computing", path: "/signin" },
  { img: fullStack, icon: program_icon_4, title: "Full-Stack", path: "/signin" },
];

const Services = () => (
  <section id="services" className="services">
    <div className="service-circle circle1"></div>
    <div className="service-circle circle2"></div>
    {services.map((service, index) => (
      <Link to={service.path} key={index} className="service-link">
        <div className="service-card">
          <div className="service-img-wrapper">
            <img src={service.img} alt={service.title} className="service-img" />
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

// -------------------- Blog Section --------------------
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

// -------------------- Testimonial Section --------------------
const testimonials = [
  {
    name: "Aarav Sharma",
    course: "Full Stack Development",
    image: user2,
    feedback: "The Full Stack course gave me hands-on experience in React, Node.js, and database integration. Projects and industry guidance prepared me for real-world development!"
  },
  {
    name: "Meera Iyer",
    course: "Cybersecurity",
    image: user1,
    feedback: "Cybersecurity training was comprehensive and practical. Learning from industry experts boosted my confidence in ethical hacking and vulnerability assessment."
  },
  {
    name: "Rohan Verma",
    course: "Cloud Computing",
    image: user2,
    feedback: "The Cloud Computing course helped me master AWS and Azure architecture. Hands-on labs and real projects made learning enjoyable and effective."
  },
  {
    name: "Sanya Gupta",
    course: "Prompt Engineering",
    image: user1,
    feedback: "Prompt Engineering course helped me design AI-driven prompts confidently. Workflow automation lessons were directly applicable to my projects."
  },
  {
    name: "Kabir Singh",
    course: "Full Stack Development",
    image: user2,
    feedback: "Instructors were top-notch and provided practical insights. I built multiple projects that helped me land my first developer role!"
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    swipeToSlide: true,
    focusOnSelect: true,
    cssEase: "ease-in-out",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "20px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: "10px" } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: true, centerPadding: "5px" } },
    ],
  };

  return (
    <section className="testimonial-section">
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((student, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-image">
              <img src={student.image} alt={student.name} />
            </div>
            <div className="testimonial-content">
              <p className="feedback">"{student.feedback}"</p>
              <h4 className="student-name">{student.name}</h4>
              <span className="student-course">{student.course}</span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

// -------------------- Contact Section --------------------
// const Contact = () => {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Submitting...");
//     const formData = new FormData(event.target);
//     formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);


//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();
//       if (data.success) {
//         setResult("Registration Submitted Successfully");
//         event.target.reset();
//       } else {
//         setResult(data.message || "Submission failed");
//       }
//     } catch (error) {
//       setResult("Something went wrong!");
//     }
//   };

//   return (
//     <section id="contact" className="contact">
//       <motion.div className="contact-col" initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//         <div className="bg-circle circle1"></div>
//         <div className="bg-circle circle2"></div>
//         <h3>Send us a Message</h3>
//         <h4>Have questions about our training programs?</h4>
//         <ul>
//           <li><img src={mail_icon} alt="" /> info@zevoratech.com</li>
//           <li><img src={phone_icon} alt="" /> +91-XXXXXXXXXX</li>
//           <li><img src={location_icon} alt="" /> Zevora Technologies, <br />[City], India</li>
//         </ul>
//       </motion.div>

//       <motion.div className="contact-col" initial={{ opacity: 0, x: 80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
//         <form onSubmit={onSubmit}>
//           <input type="text" name="name" placeholder="Enter Your Name" required />
//           <input type="email" name="email" placeholder="Enter Your Email" required />
//           <select name="service" required>
//             <option value="">Select a Program</option>
//             <option value="Cybersecurity">Cybersecurity</option>
//             <option value="Prompt Engineering">Prompt Engineering</option>
//             <option value="Cloud Computing">Cloud Computing</option>
//             <option value="Full Stack Development">Full Stack Development</option>
//           </select>
//           <label>Message</label>
//           <textarea name="message" rows="5" placeholder="Any additional details..." />
//           <button type="submit" className="btn dark-btn">Submit Registration</button>
//         </form>
//         <span>{result}</span>
//       </motion.div>
//     </section>
//   );
// };


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Submitting...");

    const formData = new FormData(event.target);

    // Use environment variable for access_key
    const accessKey = process.env.REACT_APP_WEB3FORMS_KEY;
    console.log("Env Key:", accessKey); // Debug: check if key is loaded
    if (!accessKey) {
      setResult("Access key not found. Check .env file!");
      return;
    }
    formData.append("access_key", accessKey);

    // Anti-spam & better email context
    formData.append("subject", "New Registration from Zevora Website");
    formData.append("from_name", "Zevora Technologies Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Submission failed");
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact-col"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>
        <h3>Send us a Message</h3>
        <h4>Have questions about our training programs?</h4>
        <ul>
          <li><img src={mail_icon} alt="" /> info@zevoratech.com</li>
          <li><img src={phone_icon} alt="" /> +91-XXXXXXXXXX</li>
          <li><img src={location_icon} alt="" /> Zevora Technologies, <br />[City], India</li>
        </ul>
      </motion.div>

      <motion.div
        className="contact-col"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Enter Your Name" required />
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <select name="service" required>
            <option value="">Select a Program</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="Prompt Engineering">Prompt Engineering</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Full Stack Development">Full Stack Development</option>
          </select>

          <label>Message</label>
          <textarea name="message" rows="5" placeholder="Any additional details..." />

          {/* Hidden honeypot field for spam bots */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex="-1"
            autoComplete="off"
          />

          <button type="submit" className="btn dark-btn">Submit Registration</button>
        </form>
        <span>{result}</span>
      </motion.div>
    </section>
  );
};



export default Home;
