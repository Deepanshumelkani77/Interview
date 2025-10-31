import React from 'react'
import assets from '../assets/assets.js'

const Header = () => {
  return (
    <div className="relative w-full h-auto min-h-[90vh] md:h-[80vh] bg-[#CFA0F0] overflow-hidden flex items-center pt-5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles with different animations */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional animated shapes */}
        <div className="absolute top-40 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-400/5 rounded-full blur-xl animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/3 w-4 h-4 bg-white/30 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-purple-300/40 rounded-full animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left animate-[fadeIn_1s_ease-in]">
            {/* Badge with animation */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-[slideDown_0.8s_ease-out]">
              <span className="text-2xl animate-bounce" style={{ animationDuration: '2s' }}>🤖</span>
              <span className="text-sm font-semibold text-purple-900">AI-Powered Interview Practice</span>
            </div>

            {/* Main Heading with stagger animation */}
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              <span className="inline-block text-white drop-shadow-lg animate-[slideInLeft_0.6s_ease-out] hover:scale-105 transition-transform">Ace Your</span>
              <br />
              <span className="inline-block text-purple-900 animate-[slideInLeft_0.8s_ease-out] hover:scale-105 transition-transform">Dream Job</span>
              <br />
              <span className="inline-block bg-gradient-to-r from-indigo-600 to-purple-900 bg-clip-text text-transparent animate-[slideInLeft_1s_ease-out] hover:scale-110 transition-transform">Interview</span>
            </h1>

            {/* Description with fade in */}
            <p className="text-lg lg:text-xl text-black font-medium max-w-xl animate-[fadeIn_1.2s_ease-in] hover:text-purple-900 transition-colors duration-300">
              Master your interview skills with our AI-powered mock interviews. 
              Get real-time feedback, personalized coaching, and confidence to succeed.
            </p>

            {/* CTA Buttons with animations */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-[slideUp_1s_ease-out]">
              <button className="group bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 hover:bg-purple-50 animate-[pulse_2s_ease-in-out_infinite]">
                <span className="group-hover:animate-pulse">Start Free Trial</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="bg-purple-900/20 backdrop-blur-sm text-purple-900 px-8 py-4 rounded-xl font-bold text-lg border-2 border-purple-900/30 hover:bg-purple-900/30 hover:border-purple-900/50 hover:scale-105 transition-all duration-300 hover:shadow-lg">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators with hover animations */}
            <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start pt-4 animate-[fadeIn_1.5s_ease-in]">
              <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="text-5xl font-black text-black group-hover:text-purple-900 transition-colors animate-[countUp_2s_ease-out]">50K+</div>
                <div className="text-xl text-black font-medium group-hover:text-purple-800 transition-colors">Users</div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="text-5xl font-black text-black group-hover:text-purple-900 transition-colors animate-[countUp_2s_ease-out]" style={{ animationDelay: '0.2s' }}>98%</div>
                <div className="text-xl text-black font-medium group-hover:text-purple-800 transition-colors">Success Rate</div>
              </div>
              <div className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-300">
                <div className="text-5xl font-black text-black group-hover:text-purple-900 transition-colors animate-[countUp_2s_ease-out]" style={{ animationDelay: '0.4s' }}>1000+</div>
                <div className="text-xl text-black font-medium group-hover:text-purple-800 transition-colors">Questions</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image & Cards */}
          <div className="relative flex justify-center lg:justify-end animate-[slideInRight_1s_ease-out]">
            <div className="relative w-full max-w-lg">
              {/* Main Image Container */}
              <div className="relative z-10 group">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50 hover:border-purple-300 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] hover:scale-[1.02] transform">
                  <img 
                    src={assets.img} 
                    alt="AI Mock Interview" 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Floating Card 1 - AI Analysis */}
              <div className="absolute -left-6 top-20 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-purple-200 z-20 animate-bounce hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center animate-pulse">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-600">AI Analysis</div>
                    <div className="text-sm font-bold text-gray-900 animate-pulse">95% Confident</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 - Score */}
              <div className="absolute -right-6 bottom-32 bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl shadow-xl z-20 animate-bounce hover:scale-125 hover:rotate-6 transition-all duration-300 cursor-pointer hover:shadow-2xl" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-3xl font-black text-white animate-[spin_3s_ease-in-out_infinite]">A+</div>
                  <div className="text-xs font-semibold text-white/90">Great Answer!</div>
                </div>
              </div>

              {/* Floating Card 3 - Questions */}
              <div className="absolute -left-4 bottom-8 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-purple-200 z-20 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer animate-[slideInLeft_1.5s_ease-out]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-xs font-semibold text-gray-700">1,247 Practice Questions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
