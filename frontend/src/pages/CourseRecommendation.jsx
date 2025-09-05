import React, { useState } from "react";
import { motion } from "framer-motion";
import { XCircle, ChevronDown, ChevronUp } from "lucide-react";
import "./CourseRecommendation.css";

const safeText = (val, fallback = "Not available") =>
  !val || val === "N/A" || (Array.isArray(val) && val.length === 0)
    ? fallback
    : Array.isArray(val)
    ? val.join(", ")
    : val;

export default function CourseRecommendation() {
  const [domain, setDomain] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [goals, setGoals] = useState("");
  const [name, setName] = useState("");

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const [expandedIndex, setExpandedIndex] = useState(null);

  const fetchCourses = async () => {
    setLoading(true);
    setError("");
    setResponse(null);
    try {
      const res = await fetch("https://zevora.onrender.com/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain, skillLevel, goals, name }),
      });
      const data = await res.json();
      if (!data.success) setError(data.message || "Something went wrong.");
      else setResponse(data);
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const sortedCourses =
    response?.data?.recommendedPath?.slice().sort((a, b) => (a.xp || 0) - (b.xp || 0)) || [];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="course-page">
      <div className="bg-circle fs-circle1"></div>
      <div className="bg-circle fs-circle2"></div>
      <div className="bg-circle fs-circle3"></div>
      <div className="bg-circle fs-circle4"></div>

      <section className="course-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="title">
  <p>Personalized Learning Path</p>
  <h2>Enter your preferences</h2>
</div>


          <div className="input-controls">
            <input
              className="input-field"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <select className="input-field styled-select" value={domain} onChange={(e) => setDomain(e.target.value)}>
              <option value="">Select Domain</option>
              <option>Full Stack</option>
              <option>Cybersecurity</option>
              <option>Cloud</option>
              <option>Prompt Engineering</option>
            </select>
            <select className="input-field styled-select" value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
              <option value="">Select Skill Level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <input
              className="input-field flex-grow"
              placeholder="Your learning goal"
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
            />
            <button onClick={fetchCourses} disabled={loading} className="fetch-btn">
              Get Path
            </button>
          </div>

          {error && (
            <div className="error-message">
              <XCircle /> <span>{error}</span>
            </div>
          )}
        </motion.div>
      </section>

      <section className="course-results">
        {!loading && response && (
          <>
            <motion.div
              className="ai-banner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              AI Generated Learning Path
            </motion.div>

            <h2 className="persona-title">{safeText(response.data?.careerPersona)}</h2>

            {sortedCourses.length ? (
              <div className="grid-courses horizontal-scroll">
                {sortedCourses.map((course, idx) => {
                  const isExpanded = expandedIndex === idx;
                  return (
                    <motion.div
                      key={idx}
                      className="course-card-wrapper"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div className={`course-card ${isExpanded ? "expanded" : ""}`}>
                        <div className="course-header">
                          <h3 className="course-title">{safeText(course.title)}</h3>
                        </div>
                        <p className="course-meta">{safeText(course.level)}</p>
                        <p className="course-desc">{safeText(course.benefits)}</p>

                        <button className="read-more-btn" onClick={() => toggleExpand(idx)}>
                          {isExpanded ? <><ChevronUp className="read-icon" /> Hide Details</> 
                          : <><ChevronDown className="read-icon" /> Read More</>}
                        </button>

                        {isExpanded && (
                          <div className="course-details">
                            {course.miniProject && <p><strong>Mini Project:</strong> {safeText(course.miniProject)}</p>}
                            {course.prerequisites && <p><strong>Prerequisites:</strong> {safeText(course.prerequisites)}</p>}
                            {course.futureScope && <p><strong>Future Scope:</strong> {safeText(course.futureScope)}</p>}
                            {course.jobOutlook && (
                              <div className="job-outlook">
                                <strong>Job Outlook:</strong>
                                <ul>
                                  <li>Role: {safeText(course.jobOutlook.role)}</li>
                                  <li>Salary: {safeText(course.jobOutlook.salary)}</li>
                                  <li>Companies: {safeText(course.jobOutlook.hotCompanies)}</li>
                                </ul>
                              </div>
                            )}
                            {course.miniChallenges?.length > 0 && (
                              <div className="mini-challenges">
                                <strong>Mini Challenges:</strong>
                                <ul>
                                  {course.miniChallenges.map((ch, i) => <li key={i}>{safeText(ch)}</li>)}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <p className="no-courses">No courses available.</p>
            )}
          </>
        )}
      </section>
    </div>
  );
}
