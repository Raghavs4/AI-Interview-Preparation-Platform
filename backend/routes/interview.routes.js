import express from "express";
import upload from "../middlewares/upload.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { createInterview } from "../controllers/interview.controller.js";

const router = express.Router();

router.post("/create", authMiddleware, upload.single("resume"), createInterview);

export default router;