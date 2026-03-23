import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './config/db.js';

import authRoutes from "./routes/auth.routes.js";
import interviewRoutes from "./routes/interview.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import answerRoutes from "./routes/answer.routes.js";
// import paymentRoutes from "./routes/payment.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); 

app.get("/", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  res.json(result.rows);
}); 

app.use("/api/auth", authRoutes);
app.use("/api/interview", interviewRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/answer", answerRoutes);
// app.use("/api/payment", paymentRoutes);
 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
