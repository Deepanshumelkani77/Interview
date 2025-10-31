import React from 'react'
import assets from '../assets/assets'

const JobProfile = () => {

const {p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14} = assets

// Job profiles data
const jobProfiles = [
  { id: 1, img: p1, title: 'Software Engineer', company: 'Tech Giants', color: '#7415FD' },
  { id: 2, img: p2, title: 'Product Manager', company: 'Fortune 500', color: '#F447EF' },
  { id: 3, img: p3, title: 'Data Scientist', company: 'AI Companies', color: '#00CC79' },
  { id: 4, img: p4, title: 'UX Designer', company: 'Design Studios', color: '#3B82F6' },
  { id: 5, img: p5, title: 'Marketing Manager', company: 'Global Brands', color: '#F59E0B' },
  { id: 6, img: p6, title: 'DevOps Engineer', company: 'Cloud Platforms', color: '#8B5CF6' },
  { id: 7, img: p7, title: 'Business Analyst', company: 'Consulting Firms', color: '#EC4899' },
  { id: 8, img: p8, title: 'Full Stack Developer', company: 'Startups', color: '#06B6D4' },
  { id: 9, img: p9, title: 'Frontend Developer', company: 'Digital Agencies', color: '#10B981' },
  { id: 10, img: p10, title: 'Backend Developer', company: 'Enterprise', color: '#EF4444' },
  { id: 11, img: p11, title: 'Mobile Developer', company: 'App Studios', color: '#F97316' },
  { id: 12, img: p12, title: 'Cloud Architect', company: 'Cloud Providers', color: '#6366F1' },
  { id: 13, img: p13, title: 'AI/ML Engineer', company: 'AI Labs', color: '#14B8A6' },
  { id: 14, img: p14, title: 'Cybersecurity', company: 'Security Firms', color: '#A855F7' },
]

  return (
    <section className="relative bg-black  py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#7415FD]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#00CC79]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-[#00CC79]/10 border border-[#00CC79]/30 rounded-full text-[#00CC79] text-sm font-semibold tracking-wide animate-pulse">CHOOSE YOUR PATH</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-white mb-4">
            Job Profiles for <span className="text-[#00CC79] ">Mock Interview</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Choose your target role and practice with AI-powered mock interviews tailored to your career goals
          </p>
        </div>

        {/* Infinite Scrolling Animation Container */}
        <div className="relative max-w-8xl">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex overflow-hidden max-w-8xl">
            {/* Combined scrolling wrapper */}
            <div className="flex animate-scroll-left space-x-0">
              {/* First set of cards */}
              {jobProfiles.map((profile) => (
                <div key={`first-${profile.id}`} className="group relative flex-shrink-0 w-64 sm:w-72 md:w-80 mx-3 sm:mx-4">
                  <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden hover:border-[#7415FD] transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-zinc-900">
                      {profile.img && (
                        <img 
                          src={profile.img} 
                          alt={profile.title} 
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                        />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div 
                          className="w-3 h-3 rounded-full animate-pulse" 
                          style={{ backgroundColor: profile.color }}
                        ></div>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">{profile.company}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#7415FD] transition-colors duration-300">
                        {profile.title}
                      </h3>
                      <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#7415FD] to-purple-600 text-white rounded-xl text-sm sm:text-base font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50">
                        Start Practice →
                      </button>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7415FD]/0 via-[#7415FD]/0 to-[#7415FD]/0 group-hover:from-[#7415FD]/10 group-hover:via-[#7415FD]/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop - in same wrapper */}
              {jobProfiles.map((profile) => (
                <div key={`second-${profile.id}`} className="group relative flex-shrink-0 w-64 sm:w-72 md:w-80 mx-3 sm:mx-4">
                  <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden hover:border-[#7415FD] transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                    {/* Image */}
                    <div className="aspect-[4/3] overflow-hidden bg-zinc-900">
                      {profile.img && (
                        <img 
                          src={profile.img} 
                          alt={profile.title} 
                          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" 
                        />
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <div 
                          className="w-3 h-3 rounded-full animate-pulse" 
                          style={{ backgroundColor: profile.color }}
                        ></div>
                        <span className="text-xs text-gray-400 uppercase tracking-wider">{profile.company}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#7415FD] transition-colors duration-300">
                        {profile.title}
                      </h3>
                      <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#7415FD] to-purple-600 text-white rounded-xl text-sm sm:text-base font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50">
                        Start Practice →
                      </button>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7415FD]/0 via-[#7415FD]/0 to-[#7415FD]/0 group-hover:from-[#7415FD]/10 group-hover:via-[#7415FD]/5 transition-all duration-500 pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 px-4">
          <p className="text-gray-400 mb-6">Can't find your role? We have 50+ more profiles!</p>
          <button className="px-8 py-4 bg-white/10 text-white rounded-xl font-bold border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
            View All Profiles
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default JobProfile
