import React from 'react'
import assets from '../assets/assets.js'

const Header = () => {

  const {  a, b, c, d, e } = assets;


  return (
    <div className="relative w-full h-auto min-h-[90vh] md:h-[80vh] bg-white  overflow-hidden flex items-center pt-5">
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
      <div className="relative  z-10 max-w-8xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 lg:px-20 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          
          {/* Left Content */}
          <div className=" bg-green-200 space-y-8 text-center lg:text-left animate-[fadeIn_1s_ease-in]">
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

          {/* Right Side - Image Gallery with Animations */}
          <div className=" bg-pink-200 relative flex justify-center lg:justify-center animate-[slideInRight_1s_ease-out]">
            <div className="relative w-full max-w-lg h-[500px]">
              
              {/* Center Main Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 group">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl shadow-2xl overflow-hidden border-4 border-white hover:border-purple-300 transition-all duration-500 hover:shadow-[0_25px_60px_rgba(139,92,246,0.4)] hover:scale-110 hover:rotate-3 transform">
                  <img 
                    src={a} 
                    alt="Interview 1" 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-6 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Floating Image 1 - Top Left */}
              <div className="absolute top-0 left-0 z-20 animate-[float_6s_ease-in-out_infinite] hover:z-40" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <div className="w-50 h-50 rounded-2xl shadow-xl overflow-hidden border-3 border-white/70 hover:scale-125 hover:-rotate-6 transition-all duration-500 cursor-pointer">
                  <img 
                    src={b} 
                    alt="Interview 2" 
                    className="w-full h-full object-cover hover:brightness-110 transition-all"
                  />
                </div>
              </div>

              {/* Floating Image 2 - Top Right */}
              <div className="absolute top-8 right-4 z-20 animate-[float_5s_ease-in-out_infinite] hover:z-40" style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}>
                <div className="w-50 h-50 rounded-full shadow-xl overflow-hidden border-3 border-white/70 hover:scale-125 hover:rotate-12 transition-all duration-500 cursor-pointer">
                  <img 
                    src={c} 
                    alt="Interview 3" 
                    className="w-full h-full object-cover hover:brightness-110 transition-all"
                  />
                </div>
              </div>

              {/* Floating Image 3 - Bottom Left */}
              <div className="absolute bottom-4 left-8 z-20 animate-[float_7s_ease-in-out_infinite] hover:z-40" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }}>
                <div className="w-50 h-50 rounded-xl shadow-xl overflow-hidden border-3 border-white/70 hover:scale-125 hover:rotate-6 transition-all duration-500 cursor-pointer bg-gradient-to-br from-blue-400 to-purple-500 p-1">
                  <img 
                    src={d} 
                    alt="Interview 4" 
                    className="w-full h-full object-cover rounded-lg hover:brightness-110 transition-all"
                  />
                </div>
              </div>

              {/* Floating Image 4 - Bottom Right */}
              <div className="absolute bottom-8 right-0 z-20 animate-[float_6s_ease-in-out_infinite] hover:z-40" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '3s' }}>
                <div className="w-50 h-50 rounded-2xl shadow-xl overflow-hidden border-3 border-white/70 hover:scale-125 hover:-rotate-12 transition-all duration-500 cursor-pointer">
                  <img 
                    src={e} 
                    alt="Interview 5" 
                    className="w-full h-full object-cover hover:brightness-110 transition-all"
                  />
                </div>
              </div>

              {/* Floating Info Cards */}
              {/* AI Analysis Card */}
              <div className="absolute -left-6 top-20 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl border border-purple-200 z-40 animate-bounce hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center animate-pulse">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">AI Score: 95%</div>
                  </div>
                </div>
              </div>

              {/* Score Badge */}
              <div className="absolute -right-8 bottom-32 bg-gradient-to-br from-green-400 to-emerald-500 p-3 rounded-full shadow-xl z-40 animate-bounce hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer" style={{ animationDuration: '3s', animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-black text-white">A+</div>
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
