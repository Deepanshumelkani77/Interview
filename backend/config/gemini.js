const { GoogleGenerativeAI } = require("@google/generative-ai");

// Create and export the genAI instance directly
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

module.exports = genAI;
