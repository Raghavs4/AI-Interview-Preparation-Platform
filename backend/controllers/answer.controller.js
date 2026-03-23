import { submitAnswerService } from "../services/answer.service.js";

export const submitAnswer = async (req, res) => {
  try {
    const userId = req.user.id;

    const { interviewId, questionId, answerText } = req.body;

    if (!answerText) {
      return res.status(400).json({ error: "Answer required" });
    }

    const result = await submitAnswerService({
      userId,
      interviewId,
      questionId,
      answerText,
    });

    res.json({
      success: true,
      data: result,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};