import express from "express";
import { submitAnswer } from "../controllers/answer.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/submit", authMiddleware, submitAnswer);

export default router;