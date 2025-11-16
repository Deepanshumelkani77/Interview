import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInterview } from '../context/InterviewContext';

const InterviewStart = () => {
  const navigate = useNavigate();
  const { startInterview, loading } = useInterview();
  const [selectedRole, setSelectedRole] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  const jobRoles = [
    { id: 1, role: 'Frontend Developer', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
    { id: 2, role: 'Backend Developer', icon: '🔧', color: 'from-green-500 to-emerald-500' },
    { id: 3, role: 'MERN Stack Developer', icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 4, role: 'Java Developer', icon: '☕', color: 'from-orange-500 to-red-500' },
    { id: 5, role: 'Python Developer', icon: '🐍', color: 'from-yellow-500 to-orange-500' },
    { id: 6, role: 'DevOps Engineer', icon: '⚙️', color: 'from-indigo-500 to-purple-500' },
    { id: 7, role: 'Data Scientist', icon: '📊', color: 'from-teal-500 to-green-500' },
    { id: 8, role: 'Mobile Developer', icon: '📱', color: 'from-pink-500 to-rose-500' },
    { id: 9, role: 'Full Stack Developer', icon: '💻', color: 'from-violet-500 to-purple-500' },
    { id: 10, role: 'HR Interview', icon: '👔', color: 'from-gray-500 to-slate-500' }
  ];

  const handleStartInterview = async () => {
    if (!selectedRole) {
      setError('Please select a job role');
      return;
    }

    if (!userName.trim()) {
      setError('Please enter your name');
      return;
    }

    setError('');
    const result = await startInterview(selectedRole, userName);
    
    if (result.success) {
      navigate('/interview-session');
    } else {
      setError(result.error || 'Failed to start interview');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="px-6 py-3 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold tracking-wide animate-pulse">
              🤖 AI MOCK INTERVIEW
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Interview Journey</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Select your target role and let AI guide you through a realistic mock interview with real-time feedback
          </p>
        </div>

        {/* Name Input */}
        <div className="max-w-md mx-auto mb-8">
          <label className="block text-white text-sm font-semibold mb-2">Your Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
          />
        </div>

        {/* Job Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {jobRoles.map((job) => (
            <button
              key={job.id}
              onClick={() => setSelectedRole(job.role)}
              className={`group relative p-6 rounded-2xl transition-all duration-300 ${
                selectedRole === job.role
                  ? `bg-gradient-to-br ${job.color} scale-105 shadow-2xl`
                  : 'bg-white/10 hover:bg-white/20 hover:scale-105'
              } border-2 ${
                selectedRole === job.role ? 'border-white' : 'border-white/20'
              }`}
            >
              <div className="text-center">
                <div className="text-5xl mb-3">{job.icon}</div>
                <h3 className="text-white font-bold text-sm leading-tight">
                  {job.role}
                </h3>
              </div>
              {selectedRole === job.role && (
                <div className="absolute -top-2 -right-2 bg-white rounded-full p-1">
                  <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Error Message */}
        {error && (
          <div className="max-w-md mx-auto mb-6 p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-300 text-center">
            {error}
          </div>
        )}

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={handleStartInterview}
            disabled={loading || !selectedRole || !userName.trim()}
            className={`group px-12 py-5 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 ${
              loading || !selectedRole || !userName.trim()
                ? 'bg-gray-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:scale-110 hover:shadow-purple-500/50'
            } text-white`}
          >
            {loading ? (
              <span className="flex items-center gap-3">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Starting Interview...
              </span>
            ) : (
              <span className="flex items-center gap-3">
                Start AI Interview
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            )}
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="text-white font-bold mb-2">5 Questions</h4>
            <p className="text-gray-400 text-sm">Comprehensive interview with AI-generated questions</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">🎤</div>
            <h4 className="text-white font-bold mb-2">Voice or Text</h4>
            <p className="text-gray-400 text-sm">Answer by speaking or typing your responses</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-3">📊</div>
            <h4 className="text-white font-bold mb-2">Detailed Report</h4>
            <p className="text-gray-400 text-sm">Get instant feedback and improvement suggestions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewStart;
