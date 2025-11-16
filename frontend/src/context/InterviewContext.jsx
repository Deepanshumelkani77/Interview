import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const InterviewContext = createContext();

export const useInterview = () => {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error('useInterview must be used within InterviewProvider');
  }
  return context;
};

export const InterviewProvider = ({ children }) => {
  const [interviewData, setInterviewData] = useState({
    interviewId: null,
    jobRole: '',
    currentQuestion: '',
    questionNumber: 0,
    totalQuestions: 5,
    isComplete: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = 'http://localhost:2000/api/interview';

  // Start new interview
  const startInterview = async (jobRole, userName = 'Candidate') => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(`${API_URL}/start`, {
        jobRole,
        userName
      });

      if (response.data.success) {
        setInterviewData({
          interviewId: response.data.interviewId,
          jobRole: response.data.jobRole,
          currentQuestion: response.data.question,
          questionNumber: response.data.questionNumber,
          totalQuestions: response.data.totalQuestions,
          isComplete: false
        });
        return { success: true, data: response.data };
      }
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Failed to start interview';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Submit answer and get next question
  const submitAnswer = async (answer) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post(`${API_URL}/evaluate`, {
        interviewId: interviewData.interviewId,
        question: interviewData.currentQuestion,
        answer,
        questionNumber: interviewData.questionNumber
      });

      if (response.data.success) {
        const { nextQuestion, questionNumber, isComplete, score, feedback } = response.data;

        setInterviewData(prev => ({
          ...prev,
          currentQuestion: nextQuestion || '',
          questionNumber: questionNumber,
          isComplete: isComplete
        }));

        return { 
          success: true, 
          score, 
          feedback, 
          nextQuestion, 
          isComplete 
        };
      }
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Failed to submit answer';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Get final report
  const getReport = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`${API_URL}/report/${interviewData.interviewId}`);

      if (response.data.success) {
        return { success: true, report: response.data.report };
      }
    } catch (err) {
      const errorMsg = err.response?.data?.error || 'Failed to generate report';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Reset interview
  const resetInterview = () => {
    setInterviewData({
      interviewId: null,
      jobRole: '',
      currentQuestion: '',
      questionNumber: 0,
      totalQuestions: 5,
      isComplete: false
    });
    setError(null);
  };

  const value = {
    interviewData,
    loading,
    error,
    startInterview,
    submitAnswer,
    getReport,
    resetInterview
  };

  return (
    <InterviewContext.Provider value={value}>
      {children}
    </InterviewContext.Provider>
  );
};
