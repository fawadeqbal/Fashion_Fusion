import express from "express";
import { courses } from "../controller/students.js";

const router = express.Router();

router.get("/courses", courses);

export default router;
