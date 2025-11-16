import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInterview } from '../context/InterviewContext';

const InterviewReport = () => {
  const navigate = useNavigate();
  const { interviewData, getReport, resetInterview } = useInterview();
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReport = async () => {
      if (!interviewData.interviewId) {
        navigate('/interview-start');
        return;
      }

      const result = await getReport();
      if (result.success) {
        setReport(result.report);
      } else {
        alert('Failed to generate report');
        navigate('/interview-start');
      }
      setLoading(false);
    };

    fetchReport();
  }, []);

  const handleNewInterview = () => {
    resetInterview();
    navigate('/interview-start');
  };

  const handleGoHome = () => {
    resetInterview();
    navigate('/');
  };

  const getScoreColor = (score) => {
    if (score >= 8) return 'from-green-500 to-emerald-500';
    if (score >= 6) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getScoreEmoji = (score) => {
    if (score >= 8) return '🌟';
    if (score >= 6) return '👍';
    return '💪';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block w-20 h-20 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-white text-xl">Generating your interview report...</p>
        </div>
      </div>
    );
  }

  if (!report) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-[fadeIn_0.5s_ease-in]">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-semibold tracking-wide">
              ✅ INTERVIEW COMPLETE
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Your Interview <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Report</span>
          </h1>
          <p className="text-lg text-gray-300">
            {report.jobRole} • {report.totalQuestions} Questions
          </p>
        </div>

        {/* Overall Score Card */}
        <div className={`bg-gradient-to-br ${getScoreColor(report.overallScore)} rounded-3xl p-8 mb-8 text-center shadow-2xl animate-[scaleIn_0.5s_ease-out]`}>
          <div className="text-8xl mb-4">{getScoreEmoji(report.overallScore)}</div>
          <h2 className="text-6xl font-black text-white mb-2">{report.overallScore}/10</h2>
          <p className="text-2xl text-white/90 font-semibold">Overall Score</p>
        </div>

        {/* Verdict Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 animate-[slideUp_0.6s_ease-out]">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-5xl">🎯</div>
            <h3 className="text-3xl font-bold text-white">Final Verdict</h3>
          </div>
          <p className="text-2xl text-gray-200 leading-relaxed">{report.verdict}</p>
        </div>

        {/* Strengths & Weaknesses Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Strengths */}
          <div className="bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 animate-[slideInLeft_0.7s_ease-out]">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">💪</div>
              <h3 className="text-2xl font-bold text-green-300">Strengths</h3>
            </div>
            <ul className="space-y-4">
              {report.strengths.map((strength, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                  <p className="text-white text-lg leading-relaxed flex-1">{strength}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30 animate-[slideInRight_0.7s_ease-out]">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-4xl">🎯</div>
              <h3 className="text-2xl font-bold text-orange-300">Areas to Improve</h3>
            </div>
            <ul className="space-y-4">
              {report.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    !
                  </div>
                  <p className="text-white text-lg leading-relaxed flex-1">{weakness}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Suggestions Card */}
        <div className="bg-gradient-to-br from-purple-900/50 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-purple-500/30 animate-[slideUp_0.8s_ease-out]">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl">💡</div>
            <h3 className="text-2xl font-bold text-purple-300">Suggestions for Improvement</h3>
          </div>
          <ul className="space-y-4">
            {report.suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <p className="text-white text-lg leading-relaxed flex-1">{suggestion}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Question-wise Breakdown */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20 animate-[fadeIn_0.9s_ease-in]">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">📊</span>
            Question-wise Performance
          </h3>
          <div className="space-y-6">
            {report.questionsAnswers.map((qa, index) => (
              <div key={index} className="bg-black/30 rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-purple-300">Question {index + 1}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{qa.score >= 8 ? '🌟' : qa.score >= 6 ? '👍' : '💪'}</span>
                    <span className="text-xl font-bold text-white">{qa.score}/10</span>
                  </div>
                </div>
                <p className="text-white mb-3 font-semibold">{qa.question}</p>
                <div className="bg-white/5 rounded-lg p-4 mb-3">
                  <p className="text-sm text-gray-400 mb-1">Your Answer:</p>
                  <p className="text-gray-200">{qa.userAnswer}</p>
                </div>
                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                  <p className="text-sm text-green-400 mb-1">Feedback:</p>
                  <p className="text-green-200">{qa.feedback}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeIn_1s_ease-in]">
          <button
            onClick={handleNewInterview}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg rounded-xl transition-all hover:scale-105 shadow-xl hover:shadow-purple-500/50"
          >
            🔄 Take Another Interview
          </button>
          <button
            onClick={handleGoHome}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-xl transition-all hover:scale-105 border-2 border-white/20"
          >
            🏠 Go to Home
          </button>
        </div>

        {/* Print Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-gray-300 font-semibold rounded-xl transition-all border border-white/10"
          >
            🖨️ Print Report
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default InterviewReport;
