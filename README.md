# Zevora Technologies - Education Services Website 🚀
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Google Gemini](https://img.shields.io/badge/Google%20Gemini-0F9D58?style=for-the-badge&logo=google-gemini&logoColor=white)](https://ai.google.dev/)

*Empowering Careers with Future-Ready Skills*

A modern, responsive website showcasing Zevora Technologies’ education and training services, enhanced with *AI-driven course recommendations powered by Google Gemini PAI*.

---

## 🌟 Project Overview

Zevora Technologies is a global technology solutions company offering *education, consulting, and training in emerging technologies*.

This project demonstrates a professional, interactive website that:

- Highlights our *Cybersecurity, Prompt Engineering, Cloud Computing, and Full Stack Development courses*.
- Provides *personalized course recommendations* using *Generative AI (Google Gemini PAI)*.
- Bridges the gap between academic knowledge and real-world application.

---

## 🎯 Project Goals

- To create a user-friendly platform showcasing Zevora Technologies' course offerings.
- To implement an AI-powered course recommendation system using Google Gemini PAI to personalize the learning experience.
- To provide detailed information about each course, including learning objectives, curriculum, and instructor profiles.
- To facilitate easy enrollment and payment processing for courses.
- To establish Zevora Technologies as a leader in innovative education solutions.

---

## 🖥 Website Features

### Homepage

- *Headline:* Empowering Careers with Future-Ready Skills
- *Subtext:* Industry-driven training to equip learners with hands-on knowledge in today’s digital world.
- *Call-to-Action (CTA):* [Explore Courses] [Contact Us]

### About Us Page

- Company overview and mission
- *Why Choose Us:*
  - Industry-expert trainers
  - Hands-on learning with real projects
  - Career guidance & certifications
  - Flexible learning modes (online/offline)

### Services Pages

1.  *Cybersecurity Training*
    - Ethical Hacking, Network Security, Vulnerability Assessment, Incident Response

2.  *Prompt Engineering*
    - AI Fundamentals, Prompt Design Techniques, Workflow Automation, Real-world Applications

3.  *Cloud Computing*
    - Cloud Architecture, Virtualization, Storage, DevOps Integration

4.  *Full Stack Development*
    - Frontend (HTML, CSS, JS, React), Backend (Node.js/Python/Java), Databases (SQL/MongoDB)

### AI-Powered Course Recommendation

- *Personalized suggestions using Google Gemini PAI*
- Learners receive *tailored learning paths* based on their preferences and skill level.  The AI model considers:
    - User's stated interests
    - Current skill level (assessed through a questionnaire)
    - Career goals
- Enhances *career guidance* and *user experience* by providing relevant course options.
- Algorithm dynamically updates recommendations based on user progress and feedback.

---

## 🧩 Architecture

- *Frontend:* React.js, HTML5, CSS3, JavaScript, Framer Motion, Redux/Context API (for state management)
- *Backend:* Node.js, Express.js (optional)
- *Database:* MongoDB / SQL (PostgreSQL, MySQL)
- *AI/ML:* *Google Gemini PAI* for course recommendations (via API)
- *Libraries & Tools:* Axios, Lucide Icons, Framer Motion, React Router, bcrypt, jsonwebtoken
- *Deployment:*  > (Specify deployment platform: e.g., Netlify, Vercel, AWS, Heroku)

---

## ⚙ Installation & Setup

### Prerequisites

- Node.js (version >= 16)
- npm (Node Package Manager) or yarn
- MongoDB (if using MongoDB as your database)
- Google Cloud Account (for accessing Gemini API) >(Provide link to setup Gemini API)

### Steps

1.  *Clone the repository:*

bash
    git clone https://github.com/your-username/Zevora.git
    cd Zevora
        > (Optional: Specify environment variables needed for the client, e.g., API endpoint)
    > Example: Create a .env file in the client directory and add REACT_APP_API_ENDPOINT=http://localhost:5000

3.  *Backend Setup (Server):*

    
    >  PORT=5000
    >  MONGODB_URI=mongodb://localhost:27017/zevora
    >  GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    >  JWT_SECRET=your_jwt_secret_key
    >  4.  *Database Setup:*

    > (If using MongoDB) Ensure MongoDB is running.  You can use MongoDB Compass or the MongoDB CLI to manage your database.
    > (If using SQL) Configure your SQL database (e.g., PostgreSQL, MySQL) and update the connection string in the .env file.

5.  *Running the Development Servers:*

    -   *Backend (Express server):*

        bash
        cd ../client
        npm start  # or yarn start
            Open your browser and navigate to http://localhost:3000 (or the port specified in your client's configuration).  The backend API will typically be running on http://localhost:5000 (or the port specified in your server's .env file).

---

## 💻 Usage

1.  *Homepage:* Browse featured courses and explore different categories.
2.  *Course Pages:* View detailed information about each course, including curriculum, instructor profiles, and learning objectives.
3.  *AI-Powered Recommendations:*  Complete a short questionnaire to receive personalized course recommendations.
4.  *Enrollment:*  Click the "Enroll Now" button to register for a course. >(Describe the enrollment process)
5.  *User Authentication:* > (If implemented) Create an account or log in to track your progress and access enrolled courses.

---

##  platform support
> (Mention supported platforms e.g. Windows, Mac, Linux, and browsers such as Chrome, Firefox, Safari, Edge)
