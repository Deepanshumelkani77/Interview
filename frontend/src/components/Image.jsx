import React from 'react'
import assets from '../assets/assets.js'

const Image = () => {
  return (
    <div className="relative w-full min-h-[600px] bg-[#8B5CF6] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-white space-y-6">
          <div className="inline-block">
            <span className="bg-[#C596FD]/20 text-[#C596FD] px-4 py-2 rounded-full text-sm font-semibold border border-[#C596FD]/30">
              🚀 Ace Your Next Interview
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Master Your
            <span className="block bg-gradient-to-r from-[#C596FD] via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Mock Interviews
            </span>
          </h1>
          
          <p className="text-lg text-gray-300 max-w-xl">
            Practice with AI-powered mock interviews, get instant feedback, and boost your confidence. 
            PrepNinja helps you prepare for real interviews with realistic scenarios.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-[#C596FD] to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#C596FD]/50 transform hover:scale-105 transition-all duration-300">
              Start Practice
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              View Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-[#C596FD]">10K+</div>
              <div className="text-sm text-gray-400">Interviews Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C596FD]">95%</div>
              <div className="text-sm text-gray-400">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C596FD]">500+</div>
              <div className="text-sm text-gray-400">Questions</div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#C596FD] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-indigo-500 rounded-full opacity-20 blur-3xl"></div>
            
            {/* Main Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src={assets.img} 
                alt="Mock Interview Practice" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 -left-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-white/20 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Interview Completed!</div>
                  <div className="text-xs text-gray-600">Score: 92/100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Image
