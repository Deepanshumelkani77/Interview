import React from 'react'
import assets from '../assets/assets.js'

const Header = () => {
  return (
    <div className="relative w-full min-h-screen lg:h-[90vh] bg-[#CFA0F0] overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-indigo-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg">
              <span className="text-2xl">🤖</span>
              <span className="text-sm font-semibold text-purple-900">AI-Powered Interview Practice</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-white drop-shadow-lg">Ace Your</span>
              <br />
              <span className="text-purple-900">Dream Job</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-900 bg-clip-text text-transparent">Interview</span>
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-purple-900/90 font-medium max-w-xl">
              Master your interview skills with our AI-powered mock interviews. 
              Get real-time feedback, personalized coaching, and confidence to succeed.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-white text-purple-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                <span>Start Free Trial</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="bg-purple-900/20 backdrop-blur-sm text-purple-900 px-8 py-4 rounded-xl font-bold text-lg border-2 border-purple-900/30 hover:bg-purple-900/30 hover:border-purple-900/50 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-3xl font-black text-purple-900">50K+</div>
                <div className="text-sm text-purple-800 font-medium">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-900">98%</div>
                <div className="text-sm text-purple-800 font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-purple-900">1000+</div>
                <div className="text-sm text-purple-800 font-medium">Questions</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image & Cards */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50">
                  <img 
                    src={assets.img} 
                    alt="AI Mock Interview" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Floating Card 1 - AI Analysis */}
              <div className="absolute -left-6 top-20 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-purple-200 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-600">AI Analysis</div>
                    <div className="text-sm font-bold text-gray-900">95% Confident</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 - Score */}
              <div className="absolute -right-6 bottom-32 bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">A+</div>
                  <div className="text-xs font-semibold text-white/90">Great Answer!</div>
                </div>
              </div>

              {/* Floating Card 3 - Questions */}
              <div className="absolute -left-4 bottom-8 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-purple-200 z-20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
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
