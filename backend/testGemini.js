import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const askAI = async (req, res) => {
  try {
    const { question, answer, role } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Act like a senior interviewer for the role: ${role}.

      Question: ${question}
      Candidate Answer: ${answer}

      You must return:
      - score out of 10
      - detailed feedback
      - next interview question
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    res.json({ reply: text });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
