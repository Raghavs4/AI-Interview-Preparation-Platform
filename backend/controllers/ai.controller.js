import pool from "../config/db.js";
import { generateQuestionsService } from "../services/ai.service.js";

export const generateQuestions = async (req, res) => {
  try {
    const userId = req.user.id;
    const { interviewId, resumeText, jobDescription } = req.body;

    // ✅ Check active subscription
    const subResult = await pool.query(
      `SELECT * FROM subscriptions 
   WHERE user_id = $1 
   AND plan = 'premium'
   AND end_date > NOW()
   ORDER BY end_date DESC
   LIMIT 1`,
      [userId]
    );

    const isPremium = subResult.rows.length > 0;

    const questionCount = isPremium ? 20 : 8;

    const questions = await generateQuestionsService({
      interviewId,
      resumeText,
      jobDescription,
      questionCount,
    });

    const subscription = subResult.rows[0];

    res.json({
      success: true,
  plan: isPremium ? "premium" : "free",
  expiresAt: subscription?.end_date || null,
  questions,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};