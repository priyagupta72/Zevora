

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import recommendRoutes from "./routes/recommendRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

// DB
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/recommend", recommendRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
