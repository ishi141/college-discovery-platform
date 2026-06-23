import express from "express";
import { createQuestion, getQuestions, addAnswer, } from "../controllers/discussionController.js";
const router = express.Router();
router.post("/question", createQuestion);
router.get("/questions", getQuestions);
router.post("/answer", addAnswer);
export default router;
