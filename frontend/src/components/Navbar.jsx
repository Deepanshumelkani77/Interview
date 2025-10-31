import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Logo - Left Side */}
        <div className="flex items-center gap-3 cursor-pointer group">
          {/* Attractive Icon with Gradient */}
          <div className="relative">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-all duration-300 shadow-lg shadow-indigo-500/50 group-hover:shadow-indigo-400/70">
              <svg 
                className="w-6 h-6 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Decorative dot */}
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-black animate-pulse"></div>
          </div>
          {/* Logo Text with Gradient */}
          <div className="text-2xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Prep
            </span>
            <span className="text-white ml-0.5">
              Ninja
            </span>
          </div>
        </div>
        
        {/* Profile Icon - Right Side */}
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors cursor-pointer">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
