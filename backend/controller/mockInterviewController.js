// Mock responses for testing without OpenAI API
const mockResponses = {
  questions: [
    "Tell me about yourself and your experience.",
    "What are your greatest strengths?",
    "Describe a challenging situation you've faced at work.",
    "Where do you see yourself in 5 years?",
    "Why do you want to work here?"
  ],
  evaluations: [
    { score: 85, feedback: "Good response with relevant examples." },
    { score: 75, feedback: "Decent answer but could be more specific." },
    { score: 90, feedback: "Excellent detailed response." }
  ],
  reports: {
    strengths: "Strong communication skills, relevant experience, good problem-solving abilities",
    weaknesses: "Could provide more specific examples, needs more confidence",
    verdict: "Good candidate with potential, recommend for next round"
  }
};

const getMockQuestion = () => {
  return mockResponses.questions[Math.floor(Math.random() * mockResponses.questions.length)];
};

const getMockEvaluation = () => {
  return mockResponses.evaluations[Math.floor(Math.random() * mockResponses.evaluations.length)];
};

const getMockReport = () => {
  return mockResponses.reports;
};

module.exports = { getMockQuestion, getMockEvaluation, getMockReport };
