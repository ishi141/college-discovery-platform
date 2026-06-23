import express from "express";
import {
  saveCollege,
  getSavedColleges,
} from "../controllers/savedController.js";

import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, saveCollege);

router.get("/", verifyToken, getSavedColleges);

export default router;