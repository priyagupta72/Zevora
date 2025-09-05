


// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import About from './pages/About';
// import Services from './pages/Services';
// import Contact from './pages/Contact';
// import Testimonials from './pages/Testimonials';
// import Blog from './pages/Blog';
// import Title from './pages/Title';

// import Cybersecurity from './pages/Cybersecurity';
// import Prompt from './pages/Prompt';
// import Cloud from './pages/Cloud';
// import Fullstack from './pages/Fullstack';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import CourseRecommendation from './pages/CourseRecommendation';
// import HomeBeforeLogin from './pages/HomeBeforeLogin';

// const App = () => {
//   const [user, setUser] = useState(() => {
//     // Initialize from localStorage if available
//     const storedUser = localStorage.getItem('user');
//     return storedUser ? JSON.parse(storedUser) : null;
//   });

//   // 🔹 Fix: disable scroll restoration on refresh
//   useEffect(() => {
//     if ("scrollRestoration" in window.history) {
//       window.history.scrollRestoration = "manual";
//     }
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <Router>
//       {/* Pass user state and setter to Navbar */}
//       <Navbar user={user} setUser={setUser} />

//       <Routes>
//         {/* Homepage with scroll sections */}
//         <Route
//           path="/home"
//           element={
//             <>
//               <div id="home"><Home /></div>
//               <div id="about"><About /></div>
//               <div id="services">
//                 <div className="title-wrapper">
//                   <Title subTitle="Our Services" title="What We Offer" />
//                 </div>
//                 <Services />
//               </div>
//               <div id="blogs">
//                 <div className="title-wrapper">
//                   <Title subTitle="Our Latest Blogs" title="Dive in and get inspired!" />
//                 </div>
//                 <Blog />
//               </div>
//               <div id="testimonial">
//                 <div className="title-wrapper">
//                   <Title subTitle="Hear from learners." title="Student Voices" />
//                 </div>
//                 <Testimonials />
//               </div>
//               <div id="contact">
//                 <div className="title-wrapper">
//                   <Title subTitle="Contact Us" title="Get in Touch" />
//                 </div>
//                 <Contact />
//               </div>
//             </>
//           }
//         />

//         {/* Individual Service Pages */}
//         <Route path="/services/cybersecurity" element={<Cybersecurity />} />
//         <Route path="/services/prompt" element={<Prompt />} />
//         <Route path="/services/cloud" element={<Cloud />} />
//         <Route path="/services/fullstack" element={<Fullstack />} />

//         {/* SignIn & SignUp */}
// <Route
//   path="/signin"
//   element={
//     <>
//       <div className="title-wrapper">
//         <Title subTitle="Welcome Back" title="Sign In to Continue" />
//       </div>
//       <SignIn setUser={setUser} />
//     </>
//   }
// />

// <Route
//   path="/signup"
//   element={
//     <>
//       <div className="title-wrapper">
//         <Title subTitle="Join Us Today" title="Create Your Account" />
//       </div>
//       <SignUp setUser={setUser} />
//     </>
//   }
// />


//         {/* HomeBeforeLogin */}
//         <Route path="/" element={<HomeBeforeLogin />} />

//         {/* Course Recommendation */}
//         <Route path="/recommend" element={<CourseRecommendation />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// };

// export default App;





import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import Title from './pages/Title';

import Cybersecurity from './pages/Cybersecurity';
import Prompt from './pages/Prompt';
import Cloud from './pages/Cloud';
import Fullstack from './pages/Fullstack';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CourseRecommendation from './pages/CourseRecommendation';
import HomeBeforeLogin from './pages/HomeBeforeLogin';

const App = () => {
const [user, setUser] = useState(() => {
  try {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  } catch {
    return null;
  }

  });

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route
          path="/home"
          element={
            <>
              <div id="home"><Home /></div>
              <div id="about"><About /></div>
              <div id="services">
                <div className="title-wrapper">
                  <Title subTitle="Our Services" title="What We Offer" />
                </div>
                <Services />
              </div>
              <div id="blogs">
                <div className="title-wrapper">
                  <Title subTitle="Our Latest Blogs" title="Dive in and get inspired!" />
                </div>
                <Blog />
              </div>
              <div id="testimonial">
                <div className="title-wrapper">
                  <Title subTitle="Hear from learners." title="Student Voices" />
                </div>
                <Testimonials />
              </div>
              <div id="contact">
                <div className="title-wrapper">
                  <Title subTitle="Contact Us" title="Get in Touch" />
                </div>
                <Contact />
              </div>
            </>
          }
        />

        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/prompt" element={<Prompt />} />
        <Route path="/services/cloud" element={<Cloud />} />
        <Route path="/services/fullstack" element={<Fullstack />} />

        <Route
          path="/signin"
          element={
            <>
              <div className="title-wrapper">
                <Title subTitle="Welcome Back" title="Sign In to Continue" />
              </div>
              <SignIn setUser={setUser} />
            </>
          }
        />

        <Route
          path="/signup"
          element={
            <>
              <div className="title-wrapper">
                <Title subTitle="Join Us Today" title="Create Your Account" />
              </div>
              <SignUp setUser={setUser} />
            </>
          }
        />

        <Route path="/" element={<HomeBeforeLogin />} />
        <Route path="/recommend" element={<CourseRecommendation />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
