import pool from "../config/db.js";

export const createInterviewService = async ({
  userId,
  jobDescription,
  resumeUrl,
}) => {
  try {
    const query = `
      INSERT INTO interviews (user_id, job_description, resume_url)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;

    const values = [userId, jobDescription, resumeUrl];

    const result = await pool.query(query, values);

    return result.rows[0];
  } catch (error) {
    throw new Error("Error creating interview: " + error.message);
  }
};