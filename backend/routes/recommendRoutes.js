
import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import Course from "../models/Course.js"; // ✅ your mongoose schema

const router = express.Router();

/* -------------------------------
   1. Define Schema with Zod
-------------------------------- */
const courseSchema = z.object({
  title: z.string().default("Untitled Course"),
  level: z.enum(["Beginner", "Intermediate", "Advanced", "N/A"]).default("N/A"),
  xp: z.number().default(0),
  badge: z.string().default("N/A"),
  prerequisites: z.array(z.string()).default([]),
  benefits: z.string().default("N/A"),
  miniProject: z.string().default("N/A"),
  futureScope: z.string().default("N/A"),
  jobOutlook: z
    .object({
      role: z.string().default("N/A"),
      salary: z.string().default("N/A"),
      hotCompanies: z.array(z.string()).default([])
    })
    .default({}),
  miniChallenges: z.array(z.string()).default([])
});

const responseSchema = z.object({
  careerPersona: z.string().default("Explorer"),
  recommendedPath: z.array(courseSchema).default([])
});

// normalize function
const normalizeAIResponse = (data) => {
  return {
    ...data,
    recommendedPath: data.recommendedPath.map((course) => ({
      ...course,
      xp: Number(course.xp) || 0,
      benefits: Array.isArray(course.benefits) ? course.benefits.join(", ") : course.benefits || "N/A",
      prerequisites: Array.isArray(course.prerequisites) ? course.prerequisites : [],
      miniChallenges: Array.isArray(course.miniChallenges) ? course.miniChallenges : [],
      jobOutlook: {
        ...course.jobOutlook,
        hotCompanies: Array.isArray(course.jobOutlook?.hotCompanies) ? course.jobOutlook.hotCompanies : []
      }
    }))
  };
};
/* -------------------------------
   2. Sanitizer Helper
-------------------------------- */
function sanitizeCourse(course) {
  return {
    title: course.title || "Untitled",
    level: ["Beginner", "Intermediate", "Advanced", "N/A"].includes(course.level)
      ? course.level
      : "N/A",
    xp:
      typeof course.xp === "number"
        ? course.xp
        : parseInt(course.xp, 10) || 0,
    badge: course.badge || "N/A",
    prerequisites: Array.isArray(course.prerequisites)
      ? course.prerequisites
      : course.prerequisites
      ? course.prerequisites.split(",").map((p) => p.trim())
      : [],
    benefits: course.benefits || "N/A",
    miniProject: course.miniProject || "N/A",
    futureScope: course.futureScope || "N/A",

    // ✅ Normalize jobOutlook
    jobOutlook: {
      role: course.jobOutlook?.role || "N/A",
      salary: typeof course.jobOutlook?.salary === "string"
        ? course.jobOutlook.salary
        : course.jobOutlook?.salary
        ? JSON.stringify(course.jobOutlook.salary) // convert object → string
        : "N/A",
      hotCompanies: Array.isArray(course.jobOutlook?.hotCompanies)
        ? course.jobOutlook.hotCompanies
        : course.jobOutlook?.hotCompanies
        ? course.jobOutlook.hotCompanies.split(",").map((c) => c.trim())
        : []
    },

    miniChallenges: Array.isArray(course.miniChallenges)
      ? course.miniChallenges
      : course.miniChallenges
      ? course.miniChallenges.split(",").map((c) => c.trim())
      : []
  };
}


/* -------------------------------
   3. Static Fallback Data
-------------------------------- */
const fallbackCourses = {
  "Full Stack": [
    {
      title: "HTML & CSS Basics",
      level: "Beginner",
      xp: 100,
      badge: "Beginner Badge",
      prerequisites: ["None"],
      benefits: "Build static web pages",
      miniProject: "Create a personal portfolio",
      futureScope: "Learn JavaScript & React",
      jobOutlook: {
        role: "Junior Frontend Developer",
        salary: "₹3-5 LPA",
        hotCompanies: ["Swiggy", "Zomato"]
      },
      miniChallenges: ["Build a responsive navbar"]
    },
    {
      title: "JavaScript & React",
      level: "Intermediate",
      xp: 200,
      badge: "React Badge",
      prerequisites: ["HTML & CSS Basics"],
      benefits: "Build dynamic web applications",
      miniProject: "Develop a React app",
      futureScope: "Learn Node.js & Express",
      jobOutlook: {
        role: "Frontend Developer",
        salary: "₹4-6 LPA",
        hotCompanies: ["Paytm", "Amazon"]
      },
      miniChallenges: ["Implement a to-do list app"]
    },
    {
      title: "Full Stack Development",
      level: "Advanced",
      xp: 300,
      badge: "Full Stack Pro Badge",
      prerequisites: ["JavaScript & React"],
      benefits: "Develop complete applications",
      miniProject: "Build a MERN stack app",
      futureScope: "Full Stack Engineer",
      jobOutlook: {
        role: "Full Stack Developer",
        salary: "₹10-12 LPA",
        hotCompanies: ["Flipkart", "Microsoft"]
      },
      miniChallenges: ["Deploy MERN app"]
    }
  ],

  Cybersecurity: [
    {
      title: "Cybersecurity Basics",
      level: "Beginner",
      xp: 100,
      badge: "Security Badge",
      prerequisites: ["None"],
      benefits: "Intro to security concepts",
      miniProject: "Set up a secure password system",
      futureScope: "Learn ethical hacking",
      jobOutlook: {
        role: "Security Analyst",
        salary: "₹3-5 LPA",
        hotCompanies: ["Infosys", "TCS"]
      },
      miniChallenges: ["Create a strong password checker"]
    },
    {
      title: "Ethical Hacking",
      level: "Intermediate",
      xp: 200,
      badge: "Ethical Hacker Badge",
      prerequisites: ["Cybersecurity Basics"],
      benefits: "Learn pentesting skills",
      miniProject: "Perform vulnerability assessment",
      futureScope: "Cybersecurity Engineer",
      jobOutlook: {
        role: "Security Engineer",
        salary: "₹6-8 LPA",
        hotCompanies: ["PwC", "Capgemini"]
      },
      miniChallenges: ["Scan a website for vulnerabilities"]
    },
    {
      title: "Advanced Penetration Testing",
      level: "Advanced",
      xp: 300,
      badge: "Pentester Badge",
      prerequisites: ["Ethical Hacking"],
      benefits: "Master advanced hacking techniques",
      miniProject: "Conduct a full pentest",
      futureScope: "Lead Security Engineer",
      jobOutlook: {
        role: "Senior Security Engineer",
        salary: "₹10-12 LPA",
        hotCompanies: ["Cisco", "Microsoft"]
      },
      miniChallenges: ["Exploit vulnerabilities in lab"]
    }
  ],

  Cloud: [
    {
      title: "Cloud Fundamentals",
      level: "Beginner",
      xp: 100,
      badge: "Cloud Beginner Badge",
      prerequisites: ["None"],
      benefits: "Intro to cloud concepts",
      miniProject: "Deploy a static website",
      futureScope: "Learn AWS/Azure",
      jobOutlook: {
        role: "Cloud Support Associate",
        salary: "₹3-5 LPA",
        hotCompanies: ["AWS", "Microsoft"]
      },
      miniChallenges: ["Create a simple VM"]
    },
    {
      title: "AWS Solutions Architect",
      level: "Intermediate",
      xp: 200,
      badge: "AWS Badge",
      prerequisites: ["Cloud Fundamentals"],
      benefits: "Deploy scalable applications",
      miniProject: "Set up EC2 & S3",
      futureScope: "Cloud Engineer",
      jobOutlook: {
        role: "Cloud Engineer",
        salary: "₹6-8 LPA",
        hotCompanies: ["Amazon", "Accenture"]
      },
      miniChallenges: ["Launch a web app on cloud"]
    },
    {
      title: "Cloud Security & DevOps",
      level: "Advanced",
      xp: 300,
      badge: "Cloud Pro Badge",
      prerequisites: ["AWS Solutions Architect"],
      benefits: "Secure and automate cloud infrastructure",
      miniProject: "Implement CI/CD pipelines",
      futureScope: "Senior Cloud Engineer",
      jobOutlook: {
        role: "Cloud Solutions Architect",
        salary: "₹10-12 LPA",
        hotCompanies: ["Google", "Microsoft"]
      },
      miniChallenges: ["Set up automated deployment pipelines"]
    }
  ],

  "Prompt Engineering": [
    {
      title: "Prompt Engineering Basics",
      level: "Beginner",
      xp: 100,
      badge: "Prompt Beginner Badge",
      prerequisites: ["None"],
      benefits: "Learn how to create effective prompts",
      miniProject: "Write prompts for simple tasks",
      futureScope: "Learn advanced prompt design",
      jobOutlook: {
        role: "AI Prompt Engineer",
        salary: "₹3-5 LPA",
        hotCompanies: ["OpenAI", "Google"]
      },
      miniChallenges: ["Design prompts for text completion"]
    },
    {
      title: "Advanced Prompt Strategies",
      level: "Intermediate",
      xp: 200,
      badge: "Prompt Pro Badge",
      prerequisites: ["Prompt Engineering Basics"],
      benefits: "Optimize prompts for better outputs",
      miniProject: "Create multi-step prompts",
      futureScope: "AI Engineer",
      jobOutlook: {
        role: "AI Engineer",
        salary: "₹6-8 LPA",
        hotCompanies: ["Microsoft", "Anthropic"]
      },
      miniChallenges: ["Develop a prompt chain for a chatbot"]
    },
    {
      title: "AI System Integration",
      level: "Advanced",
      xp: 300,
      badge: "AI Pro Badge",
      prerequisites: ["Advanced Prompt Strategies"],
      benefits: "Integrate prompts with AI systems",
      miniProject: "Build AI-powered applications",
      futureScope: "Senior AI Engineer",
      jobOutlook: {
        role: "AI Solutions Architect",
        salary: "₹10-12 LPA",
        hotCompanies: ["OpenAI", "Google"]
      },
      miniChallenges: ["Integrate prompts into an AI pipeline"]
    }
  ]
};

/* -------------------------------
   4. Route: POST /api/recommend
-------------------------------- */
router.post("/", async (req, res) => {
  const { domain, skillLevel, goals, name } = req.body;

  if (!domain || !skillLevel || !goals) {
    return res.status(400).json({
      success: false,
      message: "Domain, skill level, and goals are required",
      meta: { domain, skillLevel, goals, timestamp: Date.now() },
      data: null
    });
  }

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
    You are an expert course advisor.
    Create a personalized learning path for a ${skillLevel} user 
    who wants to ${goals} in ${domain}.
    Include: career persona, 4-6 sequential courses with
    title, level, xp (number), badge, prerequisites (array), benefits, 
    mini project, future scope, job outlook (role, salary, hot companies), 
    and challenges (array).
    Return JSON in this exact structure:
    {
      "careerPersona": "...",
      "recommendedPath": [ { ...course } ]
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const textOutput = result.response.text();

    const match = textOutput.match(/\{[\s\S]*\}/);
if (!match) throw new Error("Invalid JSON from AI");

let raw;
try {
  raw = JSON.parse(match[0]); // try normal JSON first
} catch (e) {
  raw = JSON5.parse(match[0]); // fallback for AI’s bad JSON
}

// ✅ Sanitize before Zod

    const safeOutput = {
      careerPersona: raw.careerPersona || "Explorer",
      recommendedPath: Array.isArray(raw.recommendedPath)
        ? raw.recommendedPath.map(sanitizeCourse)
        : []
    };

    const parsed = responseSchema.parse(safeOutput);

    // ✅ Optional: Save courses to Mongo
    for (const course of parsed.recommendedPath) {
      try {
        await Course.findOneAndUpdate(
          { domain, title: course.title },
          { domain, ...course },
          { upsert: true, new: true }
        );
      } catch (dbErr) {
        console.error("Mongo save error:", dbErr.message);
      }
    }

    return res.json({
      success: true,
      message: "AI generated learning path",
      meta: { domain, skillLevel, goals, name, timestamp: Date.now() },
      data: parsed
    });
  } catch (err) {
    console.error("AI error:", err.message);

    return res.json({
      success: true,
      message: "AI unavailable, showing fallback data",
      meta: { domain, skillLevel, goals, name, timestamp: Date.now() },
      data: {
        careerPersona: `${name || "User"} - ${domain} Explorer`,
        recommendedPath: (fallbackCourses[domain] || []).map(sanitizeCourse)
      }
    });
  }
});

export default router;