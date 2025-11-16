import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import JobProfile from '../components/JobProfile'
import Video from '../components/Video'

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <Header />
      
      {/* Hero Section with CTA */}
      <section className="relative bg-black py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
        {/* Animated background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#7415FD]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00CC79]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#F447EF]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#7415FD] rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#00CC79] rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#F447EF] rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-8xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-[fadeIn_1s_ease-in]">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#00CC79]/10 border border-[#00CC79]/30 rounded-full text-[#00CC79] text-sm font-semibold tracking-wide animate-pulse">🎯 AI-POWERED INTERVIEW PREP</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 animate-[slideUp_0.8s_ease-out]">
              Master Your <span className="text-[#00CC79] inline-block hover:scale-110 transition-transform duration-300">Interview</span>
              <br />
              with <span className="text-[#7415FD] inline-block hover:scale-110 transition-transform duration-300">AI</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto mb-12 animate-[fadeIn_1.2s_ease-in]">
              Practice with our AI interviewer, get instant feedback, and land your dream job. 
              Start your journey to interview success today!
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-[fadeIn_1.4s_ease-in]">
              <button
                onClick={() => navigate('/interview-start')}
                className="group px-8 py-4 bg-gradient-to-r from-[#00CC79] to-green-600 hover:from-[#00CC79]/90 hover:to-green-600/90 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  🚀 Start Interview Now
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button
                onClick={() => navigate('/interview-start')}
                className="group px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-full border-2 border-white/20 hover:border-white/40 shadow-xl hover:shadow-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  📋 Choose Job Role
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-3xl font-black text-[#00CC79] mb-2">10+</div>
                <div className="text-gray-400 text-sm">Job Roles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#7415FD] mb-2">1000+</div>
                <div className="text-gray-400 text-sm">AI Questions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#F447EF] mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="relative bg-black py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
        {/* Animated background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#7415FD]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00CC79]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#F447EF]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#7415FD] rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#00CC79] rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#F447EF] rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}></div>
        </div>

        <div className="max-w-8xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-[fadeIn_1s_ease-in]">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#00CC79]/10 border border-[#00CC79]/30 rounded-full text-[#00CC79] text-sm font-semibold tracking-wide animate-pulse">FEATURES</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-4 animate-[slideUp_0.8s_ease-out]">
              Why Choose <span className="text-[#00CC79] inline-block hover:scale-110 transition-transform duration-300">PrepNinja</span>?
            </h2>
            <p className="text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto animate-[fadeIn_1.2s_ease-in]">
              Experience the future of interview preparation with AI-powered features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-[#7415FD] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7415FD] to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-[#7415FD] transition-colors duration-300">AI-Powered Analysis</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Get instant, intelligent feedback on your answers with advanced AI</p>
            </div>

            {/* Card 2 */}
            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-[#F447EF] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-pink-500/20 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#F447EF] to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-[#F447EF] transition-colors duration-300">Real-Time Feedback</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Receive immediate insights on performance and communication skills</p>
            </div>

            {/* Card 3 */}
            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-[#00CC79] transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-500/20 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#00CC79] to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-[#00CC79] transition-colors duration-300">1000+ Questions</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Access vast library of questions across various industries</p>
            </div>

            {/* Card 4 */}
            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">Progress Tracking</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Monitor improvement with detailed analytics and metrics</p>
            </div>

            {/* Card 5 */}
            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-yellow-500 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-yellow-500/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '2s' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">24/7 Availability</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Practice anytime, anywhere with our AI interviewer</p>
            </div>

            {/* Card 6 */}
            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-indigo-500 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-500/20 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce" style={{ animationDuration: '3s', animationDelay: '2.5s' }}>
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">Personalized Coaching</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Get customized tips based on your unique strengths</p>
            </div>
          </div>
        </div>
      </section>

<Video />

      {/* Secondary CTA Section */}
      <section className="relative bg-gradient-to-r from-[#7415FD]/10 to-[#00CC79]/10 py-20 px-4 sm:px-6 lg:px-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-20 w-32 h-32 bg-[#F447EF]/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-[#00CC79]/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <div className="mb-8">
            <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold tracking-wide animate-pulse">
              🎯 READY TO START?
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            Your Dream Job <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CC79] to-green-400">Awaits</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Don't let interviews stand in your way. Practice with AI, build confidence, and ace your next interview.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate('/interview-start')}
              className="group px-10 py-5 bg-gradient-to-r from-[#7415FD] to-purple-600 hover:from-[#7415FD]/90 hover:to-purple-600/90 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <span className="flex items-center gap-3">
                🎤 Start Practice Interview
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={() => navigate('/interview-start')}
              className="group px-10 py-5 bg-gradient-to-r from-[#00CC79] to-green-600 hover:from-[#00CC79]/90 hover:to-green-600/90 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <span className="flex items-center gap-3">
                💼 Explore Job Roles
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl mb-2">⏱️</div>
              <h4 className="text-white font-bold mb-1">5 Minutes</h4>
              <p className="text-gray-400 text-sm">Quick practice sessions</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="text-white font-bold mb-1">Targeted</h4>
              <p className="text-gray-400 text-sm">Role-specific questions</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-2xl mb-2">📈</div>
              <h4 className="text-white font-bold mb-1">Track Progress</h4>
              <p className="text-gray-400 text-sm">Improve over time</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-black py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              How It <span className="text-[#00CC79] ">Works</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Get started in minutes with just 3 simple steps
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative">
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-2xl border border-zinc-700 hover:border-[#7415FD] transition-all duration-300">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-[#7415FD] to-purple-600 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">1</div>
                <div className="mt-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Sign Up & Choose</h3>
                  <p className="text-gray-400 mb-6">Create account and select your job role and industry</p>
                  <div className="w-full h-40 bg-[#7415FD] rounded-xl flex items-center justify-center border border-zinc-700">
                    <svg className="w-20 h-20 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-2xl border border-zinc-700 hover:border-[#F447EF] transition-all duration-300">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-[#F447EF] to-pink-600 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">2</div>
                <div className="mt-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Practice Interview</h3>
                  <p className="text-gray-400 mb-6">Answer questions with real-time AI feedback</p>
                  <div className="w-full h-40 bg-[#F447EF] rounded-xl flex items-center justify-center border border-zinc-700">
                    <svg className="w-20 h-20 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 rounded-2xl border border-zinc-700 hover:border-[#00CC79] transition-all duration-300">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-r from-[#00CC79] to-green-600 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg">3</div>
                <div className="mt-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Review & Improve</h3>
                  <p className="text-gray-400 mb-6">Get detailed reports and personalized recommendations</p>
                  <div className="w-full h-40 bg-[#00CC79] rounded-xl flex items-center justify-center border border-zinc-700">
                    <svg className="w-20 h-20 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <JobProfile />

      {/* Testimonials Section */}
      <section className="bg-black pb-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-8xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              What Our <span className="text-[#00CC79]">Users Say</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Join thousands who landed their dream jobs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-[#7415FD] transition-all duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"PrepNinja's AI feedback was incredibly accurate. Practiced for a week and aced my Google interview!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7415FD] to-purple-600 flex items-center justify-center text-white font-bold">SJ</div>
                <div>
                  <div className="text-white font-bold">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">Software Engineer</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-[#F447EF] transition-all duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"The personalized coaching helped me identify my weaknesses. Got my dream job at Amazon!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F447EF] to-pink-600 flex items-center justify-center text-white font-bold">MP</div>
                <div>
                  <div className="text-white font-bold">Michael Park</div>
                  <div className="text-gray-400 text-sm">Product Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-[#00CC79] transition-all duration-300 hover:scale-105">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"Best investment! The AI felt like talking to a real person. Highly recommend!"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00CC79] to-green-600 flex items-center justify-center text-white font-bold">ER</div>
                <div>
                  <div className="text-white font-bold">Emily Rodriguez</div>
                  <div className="text-gray-400 text-sm">Data Scientist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  

    
    </div>
  )
}

export default Home
