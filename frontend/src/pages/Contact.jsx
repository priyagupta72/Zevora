

// import React from 'react';
// import { motion } from 'framer-motion';
// import './Contact.css';
// // import msg_icon from '../assets/msg-icon.png';
// import mail_icon from '../assets/mail-icon.png';
// import phone_icon from '../assets/phone-icon.png';
// import location_icon from '../assets/location-icon.png';

// const Contact = () => {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Submitting....");
//     const formData = new FormData(event.target);
//     formData.append("access_key",process.env.REACT_APP_WEB3FORMS_KEY);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const data = await response.json();
//       if (data.success) {
//         setResult("Registration Submitted Successfully");
//         event.target.reset();
//       } else {
//         console.log("Error", data);
//         setResult(data.message || "Submission failed");
//       }
//     } catch (error) {
//       console.log("Error", error);
//       setResult("Something went wrong!");
//     }
//   };

//   return (
//     <div className='contact'>
//       {/* Left Column */}
//       <motion.div 
//         className="contact-col"
//         initial={{ opacity: 0, x: -80 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="bg-circle circle1"></div>
//         <div className="bg-circle circle2"></div>

//         <h3>Send us a Message <img src="" alt=""/></h3>
//         <h4>Have questions about our training programs? </h4>
//         <ul>
//           <li><img src={mail_icon} alt="" />info@zevoratech.com</li>
//           <li><img src={phone_icon} alt="" />+91-XXXXXXXXXX</li>
//           <li><img src={location_icon} alt="" /> Zevora Technologies, <br></br>[City], India</li>
//         </ul>
//       </motion.div>

//       {/* Right Column */}
//       <motion.div 
//         className="contact-col"
//         initial={{ opacity: 0, x: 80 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         <form onSubmit={onSubmit}>
//           <input type="text" name='name' placeholder='Enter Your Name' required />
//           <input type="email" name='email' placeholder='Enter Your Email' required />
//           <select name='service' required>
//             <option value="">Select a Program</option>
//             <option value="Cybersecurity">Cybersecurity</option>
//             <option value="Prompt Engineering">Prompt Engineering</option>
//             <option value="Cloud Computing">Cloud Computing</option>
//             <option value="Full Stack Development">Full Stack Development</option>
//           </select>

//           <label>Message</label>
//           <textarea name="message" rows="5" placeholder='Any additional details...' />
          

//           <button type='submit' className='btn dark-btn'>Submit Registration</button>
//         </form>
//         <span>{result}</span>
//       </motion.div>
//     </div>
//   );
// };

// export default Contact;





import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';
import mail_icon from '../assets/mail-icon.png';
import phone_icon from '../assets/phone-icon.png';
import location_icon from '../assets/location-icon.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Submitting....");

    const formData = new FormData(event.target);

    // Required Web3Forms key
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    // Extra fields to avoid spam filter
    formData.append("subject", "New Registration from Zevora Website");
    formData.append("from_name", "Zevora Technologies Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("✅ Registration Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "❌ Submission failed");
      }
    } catch (error) {
      console.error("Error", error);
      setResult("⚠️ Something went wrong!");
    }
  };

  return (
    <div className="contact">
      {/* Left Column */}
      <motion.div 
        className="contact-col"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-circle circle1"></div>
        <div className="bg-circle circle2"></div>

        <h3>Send us a Message <img src="" alt=""/></h3>
        <h4>Have questions about our training programs?</h4>
        <ul>
          <li><img src={mail_icon} alt="" /> info@zevoratech.com</li>
          <li><img src={phone_icon} alt="" /> +91-XXXXXXXXXX</li>
          <li><img src={location_icon} alt="" /> Zevora Technologies, <br /> [City], India</li>
        </ul>
      </motion.div>

      {/* Right Column */}
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

          {/* Honeypot field (spam protection) */}
          <input 
            type="checkbox" 
            name="botcheck" 
            className="hidden" 
            style={{ display: "none" }} 
            tabIndex="-1" 
            autoComplete="off" 
          />

          <button type="submit" className="btn dark-btn">Submit Registration</button>
        </form>
        <span>{result}</span>
      </motion.div>
    </div>
  );
};

export default Contact;
