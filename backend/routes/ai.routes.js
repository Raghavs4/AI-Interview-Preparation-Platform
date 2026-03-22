import express from "express";
import upload from "../middlewares/upload.middleware.js";
import { generateQuestions } from "../controllers/ai.controller.js";

const router = express.Router();

router.post("/generate", upload.single("resume"), generateQuestions);

export default router;