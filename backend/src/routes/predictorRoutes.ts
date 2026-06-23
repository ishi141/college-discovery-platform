import express from "express";
import { predictCollege } from "../controllers/predictorController.js";

const router = express.Router();

router.post("/", predictCollege);

export default router;