

// backend/models/Course.js
import mongoose from "mongoose";

const jobOutlookSchema = new mongoose.Schema({
  role: { type: String, default: "N/A" },
  salary: { type: String, default: "N/A" },
  hotCompanies: { type: [String], default: [] }
});

const courseSchema = new mongoose.Schema(
  {
    domain: { type: String, required: true }, // e.g. Full Stack, Cloud
    title: { type: String, required: true },
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "N/A"],
      default: "N/A"
    },
    xp: { type: Number, default: 0 },
    badge: { type: String, default: "N/A" },
    prerequisites: { type: [String], default: [] },
    benefits: { type: String, default: "N/A" },
    miniProject: { type: String, default: "N/A" },
    futureScope: { type: String, default: "N/A" },
    jobOutlook: { type: jobOutlookSchema, default: () => ({}) },
    miniChallenges: { type: [String], default: [] }
  },
  { timestamps: true }
);

// ✅ Fix for OverwriteModelError
const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);

export default Course;
