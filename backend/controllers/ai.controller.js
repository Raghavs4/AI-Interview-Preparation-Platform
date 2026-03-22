// import cloudinary from "../config/cloudinary.js";
// import pdfParse from "pdf-parse";
// import { generateQuestionsService } from "../services/ai.service.js";

// export const generateQuestions = async (req, res) => {
//   try {
//     const file = req.file;
//     const { jobDescription } = req.body;

//     if (!file) {
//       return res.status(400).json({ error: "Resume file required" });
//     }

//     // 1. Upload to cloudinary
//     const uploaded = await new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         { resource_type: "raw" },
//         (error, result) => {
//           if (error) reject(error);
//           else resolve(result);
//         }
//       );
//       stream.end(file.buffer);
//     });

//     const resumeUrl = uploaded.secure_url;

//     // 2. Extract text from PDF
//     const parsed = await pdfParse(file.buffer);
//     const resumeText = parsed.text;

//     // 3. Generate questions using AI
//     const questions = await generateQuestionsService(
//       resumeText,
//       jobDescription
//     );

//     // 4. Return everything
//     res.json({
//       success: true,
//       resumeUrl,
//       questions,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };