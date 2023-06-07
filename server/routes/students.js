import express from "express";
import { courses } from "../controllers/students.js";

const router = express.Router();

router.get("/courses", courses);

export default router;
