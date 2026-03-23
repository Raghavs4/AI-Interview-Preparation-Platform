import pool from "../config/db.js";
import { generateQuestionsService } from "../services/ai.service.js";

export const generateQuestions = async (req, res) => {
  try {
    const userId = req.user.id;
    const { interviewId, resumeText, jobDescription } = req.body;

    // 🔥 Get user plan
    const userResult = await pool.query(
      "SELECT plan FROM users WHERE id = $1",
      [userId]
    );

    const plan = userResult.rows[0]?.plan || "free";

    // ✅ Decide number of questions
    const questionCount = plan === "premium" ? 20 : 8;

    const questions = await generateQuestionsService({
      interviewId,
      resumeText,
      jobDescription,
      questionCount,
    });

    res.json({
      success: true,
      plan,
      totalQuestions: questionCount,
      questions,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};