import express from "express";
import { salary, monthlyLeaves } from "../controller/teachers.js";

const router = express.Router();

router.get("/salary", salary);
router.get("/monthlyLeaves", monthlyLeaves);

export default router;
