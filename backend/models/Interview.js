const mongoose = require('mongoose');

const QuestionAnswerSchema = new mongoose.Schema({
  question: { type: String, required: true },
  userAnswer: { type: String, required: true },
  score: { type: Number, required: true },
  feedback: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const InterviewSchema = new mongoose.Schema({
  jobRole: { type: String, required: true },
  userName: { type: String },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date },
  currentQuestionIndex: { type: Number, default: 0 },
  questionsAnswers: [QuestionAnswerSchema],
  finalReport: {
    overallScore: { type: Number },
    strengths: [String],
    weaknesses: [String],
    verdict: { type: String },
    suggestions: [String]
  },
  status: { 
    type: String, 
    enum: ['in_progress', 'completed'], 
    default: 'in_progress' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Interview', InterviewSchema);
