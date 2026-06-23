import express from "express";
import { getAllColleges, getCollegeById, } from "../controllers/collegeController.js";
const router = express.Router();
router.get("/", getAllColleges);
router.get("/:id", getCollegeById);
export default router;
