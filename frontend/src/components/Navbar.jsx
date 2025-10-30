import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Left Side */}
        <div className="text-2xl font-bold text-white hover:text-gray-300 transition-colors cursor-pointer">
          PrepNinja
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
