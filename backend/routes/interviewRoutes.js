const express = require('express');
const router = express.Router();
const interviewController = require('../controller/interviewController');

// Start new interview
router.post('/start', interviewController.startInterview);

// Evaluate answer and get next question
router.post('/evaluate', interviewController.evaluateAnswer);

// Generate final report
router.get('/report/:interviewId', interviewController.generateReport);

// Get interview history
router.get('/history', interviewController.getInterviewHistory);

module.exports = router;
