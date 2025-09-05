import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import user1 from "../assets/user1.png";
import user2 from "../assets/user2.jpeg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,   // keep center peek
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,   // small peek
          centerPadding: "5px",
        },
      },
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

export default Testimonial;


