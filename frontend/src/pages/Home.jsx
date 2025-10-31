import React from 'react'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="bg-black">
      <Header />
      
      {/* Features Section */}
      <section className="bg-zinc-900 py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Why Choose <span className="text-[#00CC79]">PrepNinja</span>?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Experience the future of interview preparation with AI-powered features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-[#7415FD] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#7415FD] to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI-Powered Analysis</h3>
              <p className="text-gray-400">Get instant, intelligent feedback on your answers with advanced AI</p>
            </div>

            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-[#F447EF] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#F447EF] to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Real-Time Feedback</h3>
              <p className="text-gray-400">Receive immediate insights on performance and communication skills</p>
            </div>

            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-[#00CC79] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-[#00CC79] to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">1000+ Questions</h3>
              <p className="text-gray-400">Access vast library of questions across various industries</p>
            </div>

            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Progress Tracking</h3>
              <p className="text-gray-400">Monitor improvement with detailed analytics and metrics</p>
            </div>

            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">24/7 Availability</h3>
              <p className="text-gray-400">Practice anytime, anywhere with our AI interviewer</p>
            </div>

            <div className="group bg-zinc-800/50 p-8 rounded-2xl border border-zinc-700 hover:border-indigo-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Personalized Coaching</h3>
              <p className="text-gray-400">Get customized tips based on your unique strengths</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-black py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              How It <span className="text-[#7415FD]">Works</span>
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
                  <h3 className="text-2xl font-bold text-white mb-4">Sign Up & Choose</h3>
                  <p className="text-gray-400 mb-6">Create account and select your job role and industry</p>
                  <div className="w-full h-40 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-700">
                    <svg className="w-20 h-20 text-[#7415FD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <h3 className="text-2xl font-bold text-white mb-4">Practice Interview</h3>
                  <p className="text-gray-400 mb-6">Answer questions with real-time AI feedback</p>
                  <div className="w-full h-40 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-700">
                    <svg className="w-20 h-20 text-[#F447EF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                  <h3 className="text-2xl font-bold text-white mb-4">Review & Improve</h3>
                  <p className="text-gray-400 mb-6">Get detailed reports and personalized recommendations</p>
                  <div className="w-full h-40 bg-zinc-900 rounded-xl flex items-center justify-center border border-zinc-700">
                    <svg className="w-20 h-20 text-[#00CC79]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-zinc-900 py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              What Our <span className="text-[#F447EF]">Users Say</span>
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

      {/* CTA Section */}
      <section className="bg-black py-20 px-4 sm:px-6 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-12 lg:p-16 border border-zinc-700 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7415FD]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F447EF]/10 rounded-full blur-3xl"></div>
            
            <div className="relative text-center">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Ready to Ace Your Interview?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 50,000+ professionals already using PrepNinja</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-[#7415FD] to-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                  Start Free Trial Now
                </button>
                <button className="bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/20 hover:bg-white/20 transition-all">View Pricing</button>
              </div>
              <p className="text-gray-400 text-sm mt-6">No credit card required • 7-day free trial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-12 px-4 sm:px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7415FD] to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <span className="text-xl font-bold text-white">PrepNinja</span>
              </div>
              <p className="text-gray-400 text-sm">AI-powered mock interviews for your success</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-[#7415FD] cursor-pointer transition-colors">Features</li>
                <li className="hover:text-[#7415FD] cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-[#7415FD] cursor-pointer transition-colors">FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-[#7415FD] cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-[#7415FD] cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-[#7415FD] cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-[#7415FD] cursor-pointer transition-colors">Privacy</li>
                <li className="hover:text-[#7415FD] cursor-pointer transition-colors">Terms</li>
                <li className="hover:text-[#7415FD] cursor-pointer transition-colors">Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2025 PrepNinja. All rights reserved.</p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-[#7415FD] transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-[#7415FD] transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
              <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-[#7415FD] transition-colors cursor-pointer">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
