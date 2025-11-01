import React from 'react'
import assets from '../assets/assets'

const Video = () => {
  const { video } = assets;

  return (
    <div className="relative w-full min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-400/60 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400/60 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 right-1/2 w-2 h-2 bg-indigo-400/60 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Watch Our
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Featured Video
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mt-6">
            Discover amazing content and immerse yourself in a visual experience
          </p>
        </div>

        {/* Video Container */}
        <div className="relative group">
          {/* Decorative Border Gradient */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          
          {/* Video Card */}
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-2 sm:p-3 shadow-2xl">
            <div className="relative rounded-xl overflow-hidden aspect-video bg-black">
              {video ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster=""
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="text-center">
                    <svg
                      className="mx-auto h-24 w-24 text-gray-600 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-500 text-lg">No video available</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature Cards Below Video */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {[
            { icon: '🎬', title: 'HD Quality', desc: 'Crystal clear video quality' },
            { icon: '⚡', title: 'Fast Streaming', desc: 'Buffer-free experience' },
            { icon: '🎯', title: 'Engaging Content', desc: 'Curated for you' },
          ].map((feature, index) => (
            <div
              key={index}
              className="relative group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-900 transition duration-300">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Video
