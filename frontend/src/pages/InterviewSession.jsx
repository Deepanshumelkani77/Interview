import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInterview } from '../context/InterviewContext';
import useSpeechRecognition from '../hooks/useSpeechRecognition';

const InterviewSession = () => {
  const navigate = useNavigate();
  const { interviewData, submitAnswer, loading } = useInterview();
  const [answer, setAnswer] = useState('');
  const [inputMode, setInputMode] = useState('text'); // 'text' or 'voice'
  const [feedback, setFeedback] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const {
    isListening,
    transcript,
    isSupported,
    error,
    startListening,
    stopListening,
    resetTranscript
  } = useSpeechRecognition();

  // Redirect if no interview started
  useEffect(() => {
    if (!interviewData.interviewId) {
      navigate('/interview-start');
    }
  }, [interviewData.interviewId, navigate]);

  const handleVoiceToggle = async () => {
    if (isListening) {
      stopListening();
    } else {
      resetTranscript();
      setAnswer('');
      try {
        const userAnswer = await startListening();
        setAnswer(userAnswer);
      } catch (error) {
        console.error('Voice input error:', error);
      }
    }
  };

  const handleSubmitAnswer = async () => {
    if (!answer.trim()) {
      alert('Please provide an answer');
      return;
    }

    if (isListening) {
      stopListening();
    }

    const result = await submitAnswer(answer);

    if (result.success) {
      setFeedback({
        score: result.score,
        feedback: result.feedback
      });
      setShowFeedback(true);

      // If interview is complete, go to report after showing feedback
      if (result.isComplete) {
        setTimeout(() => {
          navigate('/interview-report');
        }, 3000);
      }
    } else {
      alert(result.error || 'Failed to submit answer');
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setFeedback(null);
    setAnswer('');
    resetTranscript();
  };

  if (!interviewData.interviewId) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-white">{interviewData.jobRole}</h2>
              <p className="text-gray-300">AI Mock Interview Session</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-white">
                {interviewData.questionNumber}/{interviewData.totalQuestions}
              </div>
              <p className="text-sm text-gray-300">Questions</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
              style={{ width: `${(interviewData.questionNumber / interviewData.totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {!showFeedback ? (
          <>
            {/* Question Card */}
            <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-purple-500/30 shadow-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl">
                  🤖
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-300 mb-2">AI Interviewer</h3>
                  <p className="text-2xl text-white leading-relaxed">
                    {interviewData.currentQuestion}
                  </p>
                </div>
              </div>
            </div>

            {/* Answer Input Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Input Mode Toggle */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => {
                    setInputMode('text');
                    if (isListening) stopListening();
                  }}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                    inputMode === 'text'
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  ⌨️ Type Answer
                </button>
                <button
                  onClick={() => setInputMode('voice')}
                  disabled={!isSupported}
                  className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-all ${
                    inputMode === 'voice'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  } ${!isSupported ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  🎤 Voice Answer
                </button>
              </div>

              {/* Text Input */}
              {inputMode === 'text' && (
                <textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Type your answer here..."
                  className="w-full h-48 px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                />
              )}

              {/* Voice Input */}
              {inputMode === 'voice' && (
                <div className="space-y-4">
                  {!isSupported && (
                    <div className="p-4 bg-yellow-500/20 border border-yellow-500/50 rounded-lg">
                      <p className="text-yellow-300 text-sm">
                        ⚠️ Voice input is not supported in this browser. Please use Chrome, Edge, or Safari for the best experience.
                      </p>
                    </div>
                  )}
                  <div className="flex justify-center">
                    <button
                      onClick={handleVoiceToggle}
                      disabled={!isSupported}
                      className={`w-32 h-32 rounded-full flex items-center justify-center text-6xl transition-all transform ${
                        isListening
                          ? 'bg-red-500 animate-pulse scale-110 shadow-2xl shadow-red-500/50'
                          : 'bg-gradient-to-br from-purple-600 to-pink-600 hover:scale-110 shadow-xl'
                      } ${!isSupported ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isListening ? '⏸️' : '🎤'}
                    </button>
                  </div>
                  
                  <p className="text-center text-gray-300">
                    {isListening ? 'Listening... Click to stop' : 'Click microphone to start speaking'}
                  </p>

                  {/* Transcript Display */}
                  <div className="bg-black/30 rounded-xl p-6 min-h-[150px] border border-white/10">
                    <p className="text-white text-lg">
                      {answer || (!error && <span className="text-gray-500">Your answer will appear here...</span>)}
                    </p>
                    {error && (
                      <div className="mt-3 p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
                        <p className="text-red-300 text-sm mb-2">{error}</p>
                        {error.includes('Network') && (
                          <button
                            onClick={handleVoiceToggle}
                            className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded transition-colors"
                          >
                            Retry
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-6">
                <button
                  onClick={handleSubmitAnswer}
                  disabled={loading || !answer.trim()}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                    loading || !answer.trim()
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 hover:scale-105 shadow-xl hover:shadow-green-500/50'
                  } text-white`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Evaluating...
                    </span>
                  ) : (
                    'Submit Answer'
                  )}
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Feedback Card */
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 shadow-2xl animate-[fadeIn_0.5s_ease-in]">
            <div className="text-center mb-6">
              <div className="inline-block p-6 bg-white/10 rounded-full mb-4">
                <div className="text-6xl">
                  {feedback?.score >= 8 ? '🌟' : feedback?.score >= 6 ? '👍' : '💪'}
                </div>
              </div>
              <h3 className="text-3xl font-black text-white mb-2">
                Score: {feedback?.score}/10
              </h3>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-2 rounded-full ${
                      i < feedback?.score ? 'bg-green-400' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="bg-black/30 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-bold text-green-300 mb-3">📝 Feedback</h4>
              <p className="text-white text-lg leading-relaxed">{feedback?.feedback}</p>
            </div>

            {!interviewData.isComplete ? (
              <button
                onClick={handleNextQuestion}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg rounded-xl transition-all hover:scale-105 shadow-xl"
              >
                Next Question →
              </button>
            ) : (
              <div className="text-center">
                <p className="text-white text-xl mb-4">🎉 Interview Complete!</p>
                <p className="text-gray-300">Generating your final report...</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewSession;
