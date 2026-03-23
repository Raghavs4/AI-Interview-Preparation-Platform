import { GoogleGenerativeAI } from "@google/generative-ai";
import pool from "../config/db.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const submitAnswerService = async ({
  interviewId,
  questionId,
  answerText,
}) => {
  try {
    // ✅ 1. Fetch question text from DB
    const questionResult = await pool.query(
      "SELECT question_text FROM questions WHERE id = $1",
      [questionId]
    );

    if (questionResult.rows.length === 0) {
      throw new Error("Question not found");
    }

    const questionText = questionResult.rows[0].question_text;

    // ✅ 2. Use correct working model
    const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview", // safer & stable
    });

    // 🔥 AI Evaluation Prompt
    const prompt = `
You are an interview evaluator.

Evaluate the following response:

Question:
${questionText}

Answer:
${answerText}

Give:
1. Score out of 10
2. Feedback based on:
   - Relevance to question
   - Technical correctness
   - Clarity and communication
   - Depth of explanation
   - Use of examples
   - Structured thinking

Return in format:
Score: X/10
Feedback: ...
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    // ✅ 3. Extract score safely
    const scoreMatch = text.match(/(\d+)/);
    const score = scoreMatch ? parseInt(scoreMatch[0]) : 5;

    // ✅ 4. Save in DB
    const dbResult = await pool.query(
      `INSERT INTO answers (interview_id, question_id, answer_text, feedback, score)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [interviewId, questionId, answerText, text, score]
    );

    return dbResult.rows[0];

  } catch (error) {
    console.error(error);
    throw new Error("Answer Evaluation Error: " + error.message);
  }
};