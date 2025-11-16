const Interview = require('../models/Interview');
// Clear require cache to ensure fresh module load
delete require.cache[require.resolve('../config/gemini')];
const genAI = require('../config/gemini');
const { getMockQuestion, getMockEvaluation, getMockReport } = require('./mockInterviewController');

// Set to true to use mock responses (for testing without API quota)
const USE_MOCK_MODE = false;

// Job role to questions mapping - AI will generate contextual questions
const jobRolePrompts = {
  'Frontend Developer': 'Frontend development with React, JavaScript, CSS, HTML, and modern web technologies',
  'Backend Developer': 'Backend development with Node.js, databases, APIs, server architecture, and security',
  'MERN Stack Developer': 'Full stack development using MongoDB, Express, React, and Node.js',
  'Java Developer': 'Java development, Spring Boot, OOP concepts, JVM, and enterprise applications',
  'Python Developer': 'Python development, Django/Flask, data structures, and backend systems',
  'DevOps Engineer': 'DevOps practices, CI/CD, Docker, Kubernetes, cloud platforms, and automation',
  'Data Scientist': 'Data science, machine learning, statistics, Python, and data analysis',
  'Mobile Developer': 'Mobile app development for iOS and Android, React Native, or native development',
  'Full Stack Developer': 'Full stack web development covering frontend, backend, and databases',
  'HR Interview': 'HR interview covering behavioral questions, company culture, teamwork, and soft skills'
};

// Start a new interview
exports.startInterview = async (req, res) => {
  try {
    const { jobRole, userName } = req.body;

    if (!jobRole) {
      return res.status(400).json({ error: 'Job role is required' });
    }

    // Create new interview session
    const interview = new Interview({
      jobRole,
      userName: userName || 'Candidate',
      questionsAnswers: []
    });

    await interview.save();

    // Generate first question using AI
    const roleContext = jobRolePrompts[jobRole] || jobRole;
    
    const prompt = `You are conducting a technical interview for a ${jobRole} position.
    
Context: ${roleContext}

Generate the first interview question. The question should be:
- Appropriate for the role
- Clear and specific
- Not too easy, not too hard (moderate difficulty)
- Related to core concepts

Return ONLY the question text, nothing else.`;

    let firstQuestion;
    
    if (USE_MOCK_MODE) {
      firstQuestion = getMockQuestion();
    } else {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });
      const result = await model.generateContent(prompt);
      firstQuestion = result.response.text();
    }

    res.json({
      success: true,
      interviewId: interview._id,
      jobRole,
      question: firstQuestion,
      questionNumber: 1,
      totalQuestions: 5
    });

  } catch (error) {
    console.error('Error starting interview:', error);
    res.status(500).json({ 
      error: 'Failed to start interview', 
      details: error.message 
    });
  }
};

// Evaluate answer and get next question
exports.evaluateAnswer = async (req, res) => {
  try {
    const { interviewId, question, answer, questionNumber } = req.body;

    if (!interviewId || !question || !answer) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const interview = await Interview.findById(interviewId);
    if (!interview) {
      return res.status(404).json({ error: 'Interview not found' });
    }

    // Evaluate the answer using AI
    const roleContext = jobRolePrompts[interview.jobRole] || interview.jobRole;
    
    const evaluationPrompt = `You are an expert interviewer for a ${interview.jobRole} position.

Context: ${roleContext}

Interview Question: ${question}

Candidate's Answer: ${answer}

Evaluate this answer and provide:
1. Score (0-10)
2. Brief feedback (2-3 sentences highlighting what was good and what was missing)

Format your response EXACTLY as:
SCORE: [number]
FEEDBACK: [your feedback]`;

    let evaluationText;
    
    if (USE_MOCK_MODE) {
      const mockEval = getMockEvaluation();
      evaluationText = `SCORE: ${mockEval.score}\nFEEDBACK: ${mockEval.feedback}`;
    } else {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });
      const result = await model.generateContent(evaluationPrompt);
      evaluationText = result.response.text();
    }
    
    // Parse score and feedback
    const scoreMatch = evaluationText.match(/SCORE:\s*(\d+)/i);
    const feedbackMatch = evaluationText.match(/FEEDBACK:\s*([\s\S]+)/i);
    
    const score = scoreMatch ? parseInt(scoreMatch[1]) : 5;
    const feedback = feedbackMatch ? feedbackMatch[1].trim() : evaluationText;

    // Save question-answer pair
    interview.questionsAnswers.push({
      question,
      userAnswer: answer,
      score,
      feedback
    });

    interview.currentQuestionIndex = questionNumber;

    // Check if interview should continue (max 5 questions)
    const shouldContinue = questionNumber < 5;
    let nextQuestion = null;

    if (shouldContinue) {
      // Generate next question based on previous conversation
      const conversationHistory = interview.questionsAnswers
        .map(qa => `Q: ${qa.question}\nA: ${qa.userAnswer}`)
        .join('\n\n');

      const nextQuestionPrompt = `You are conducting a technical interview for a ${interview.jobRole} position.

Context: ${roleContext}

Previous questions and answers:
${conversationHistory}

Generate the next interview question. The question should:
- Build upon previous topics or explore new relevant areas
- Be appropriate for the role
- Test different aspects of their knowledge
- Not repeat previous questions

Return ONLY the question text, nothing else.`;

      if (USE_MOCK_MODE) {
        nextQuestion = getMockQuestion();
      } else {
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });
        const result = await model.generateContent(nextQuestionPrompt);
        nextQuestion = result.response.text();
      }
    } else {
      // Interview complete
      interview.status = 'completed';
      interview.endTime = new Date();
    }

    await interview.save();

    res.json({
      success: true,
      score,
      feedback,
      nextQuestion,
      questionNumber: questionNumber + 1,
      totalQuestions: 5,
      isComplete: !shouldContinue
    });

  } catch (error) {
    console.error('Error evaluating answer:', error);
    res.status(500).json({ 
      error: 'Failed to evaluate answer', 
      details: error.message 
    });
  }
};

// Generate final interview report
exports.generateReport = async (req, res) => {
  try {
    const { interviewId } = req.params;

    const interview = await Interview.findById(interviewId);
    if (!interview) {
      return res.status(404).json({ error: 'Interview not found' });
    }

    // Calculate overall score
    const totalScore = interview.questionsAnswers.reduce((sum, qa) => sum + qa.score, 0);
    const overallScore = (totalScore / interview.questionsAnswers.length).toFixed(1);

    // Generate comprehensive report using AI
    const conversationSummary = interview.questionsAnswers
      .map((qa, idx) => `Question ${idx + 1}: ${qa.question}\nAnswer: ${qa.userAnswer}\nScore: ${qa.score}/10\nFeedback: ${qa.feedback}`)
      .join('\n\n');

    const reportPrompt = `You are an expert interviewer. Generate a comprehensive interview report for a ${interview.jobRole} candidate.

Overall Score: ${overallScore}/10

Interview Details:
${conversationSummary}

Provide a detailed report with:
1. TOP 3 STRENGTHS (specific skills or qualities demonstrated)
2. TOP 3 WEAKNESSES (areas needing improvement)
3. VERDICT (one sentence: Ready for hire/Needs improvement/Strong candidate/etc.)
4. TOP 3 SUGGESTIONS (specific actionable advice for improvement)

Format your response EXACTLY as:
STRENGTHS:
- [strength 1]
- [strength 2]
- [strength 3]

WEAKNESSES:
- [weakness 1]
- [weakness 2]
- [weakness 3]

VERDICT: [your verdict]

SUGGESTIONS:
- [suggestion 1]
- [suggestion 2]
- [suggestion 3]`;

    let reportText;
    
    if (USE_MOCK_MODE) {
      const mockReport = getMockReport();
      reportText = `STRENGTHS:
- ${mockReport.strengths}

WEAKNESSES:
- ${mockReport.weaknesses}

VERDICT:
${mockReport.verdict}

SUGGESTIONS:
- Focus on providing specific examples
- Practice with more confidence
- Research the company thoroughly`;
    } else {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-preview-09-2025" });
      const result = await model.generateContent(reportPrompt);
      reportText = result.response.text();
    }

    // Parse the report
    const strengthsMatch = reportText.match(/STRENGTHS:\s*([\s\S]*?)(?=WEAKNESSES:|$)/i);
    const weaknessesMatch = reportText.match(/WEAKNESSES:\s*([\s\S]*?)(?=VERDICT:|$)/i);
    const verdictMatch = reportText.match(/VERDICT:\s*(.*?)(?=\n|$)/i);
    const suggestionsMatch = reportText.match(/SUGGESTIONS:\s*([\s\S]*?)$/i);

    const parseList = (text) => {
      if (!text) return [];
      return text
        .split('\n')
        .filter(line => line.trim().startsWith('-'))
        .map(line => line.replace(/^-\s*/, '').trim())
        .filter(item => item.length > 0);
    };

    const strengths = strengthsMatch ? parseList(strengthsMatch[1]) : ['Good communication', 'Technical knowledge', 'Problem-solving approach'];
    const weaknesses = weaknessesMatch ? parseList(weaknessesMatch[1]) : ['Needs more practice', 'Could improve depth', 'Time management'];
    const verdict = verdictMatch ? verdictMatch[1].trim() : 'Needs improvement in core concepts';
    const suggestions = suggestionsMatch ? parseList(suggestionsMatch[1]) : ['Practice more', 'Study fundamentals', 'Work on projects'];

    // Save report
    interview.finalReport = {
      overallScore: parseFloat(overallScore),
      strengths,
      weaknesses,
      verdict,
      suggestions
    };

    await interview.save();

    res.json({
      success: true,
      report: {
        jobRole: interview.jobRole,
        userName: interview.userName,
        overallScore: parseFloat(overallScore),
        totalQuestions: interview.questionsAnswers.length,
        strengths,
        weaknesses,
        verdict,
        suggestions,
        questionsAnswers: interview.questionsAnswers,
        duration: interview.endTime 
          ? Math.round((interview.endTime - interview.startTime) / 1000 / 60) 
          : null
      }
    });

  } catch (error) {
    console.error('Error generating report:', error);
    res.status(500).json({ 
      error: 'Failed to generate report', 
      details: error.message 
    });
  }
};

// Get interview history
exports.getInterviewHistory = async (req, res) => {
  try {
    const interviews = await Interview.find({ status: 'completed' })
      .sort({ createdAt: -1 })
      .limit(10)
      .select('jobRole userName finalReport.overallScore createdAt');

    res.json({
      success: true,
      interviews
    });

  } catch (error) {
    console.error('Error fetching history:', error);
    res.status(500).json({ 
      error: 'Failed to fetch interview history', 
      details: error.message 
    });
  }
};
