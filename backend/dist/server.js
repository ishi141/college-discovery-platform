import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import collegeRoutes from "./routes/collegeRoutes.js";
import compareRoutes from "./routes/compareRoutes.js";
import predictorRoutes from "./routes/predictorRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import savedRoutes from "./routes/savedRoutes.js";
import discussionRoutes from "./routes/discussionRoutes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Backend running successfully");
});
app.use("/api/auth", authRoutes);
app.use("/api/colleges", collegeRoutes);
app.use("/api/compare", compareRoutes);
app.use("/api/predictor", predictorRoutes);
app.use("/api/saved", savedRoutes);
app.use("/api/discussions", discussionRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
