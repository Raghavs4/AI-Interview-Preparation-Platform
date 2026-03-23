import { GoogleGenerativeAI } from "@google/generative-ai";
import pool from "../config/db.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateQuestionsService = async ({
  interviewId,
  resumeText,
  jobDescription,
  questionCount, 
}) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = `
You are an interview expert.

Generate ${questionCount} interview questions based on:

Resume:
${resumeText}

Job Description:
${jobDescription}  

Return only questions, each on a new line. 
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const questionsArray = text
      .split("\n")
      .map((q) => q.trim())
      .filter((q) => q.length > 0)
      .slice(0, questionCount); // 🔥 ensure limit

    // Save to DB
    for (const question of questionsArray) {
      await pool.query(
        `INSERT INTO questions (interview_id, question_text)
         VALUES ($1, $2)`,
        [interviewId, question]
      );
    }

    return questionsArray;

  } catch (error) {
    throw new Error("Gemini AI Error: " + error.message);
  }
};