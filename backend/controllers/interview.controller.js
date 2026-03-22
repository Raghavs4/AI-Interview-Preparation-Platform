import cloudinary from "../config/cloudinary.js";
import { extractTextFromPDF } from "../utils/pdfParser.js";
import { createInterviewService } from "../services/interview.service.js";

export const createInterview = async (req, res) => {
  try {
    const userId = req.user.id;
    const { jobDescription } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: "Resume file required" });
    }

    // Upload to Cloudinary
    const uploaded = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "raw" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(file.buffer);
    });

    const resumeUrl = uploaded.secure_url;

    // ✅ WORKING PDF PARSE
    const resumeText = await extractTextFromPDF(file.buffer);

    const interview = await createInterviewService({
      userId,
      jobDescription,
      resumeUrl,
    });

    res.json({
      success: true,
      interview,
      resumeText,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};