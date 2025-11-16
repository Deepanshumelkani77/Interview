import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { InterviewProvider } from './context/InterviewContext'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import InterviewStart from './pages/InterviewStart.jsx'
import InterviewSession from './pages/InterviewSession.jsx'
import InterviewReport from './pages/InterviewReport.jsx'

const App = () => {
  const location = useLocation();
  
  // Hide Navbar and Footer for interview pages
  const hideHeaderFooter = ['/interview-start', '/interview-session', '/interview-report'].includes(location.pathname);

  return (
    <InterviewProvider>
      <div className="min-h-screen w-full bg-gray-50">
        {!hideHeaderFooter && <Navbar />}
        <main className={`w-full ${!hideHeaderFooter ? 'mt-20' : ''}`}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/interview-start' element={<InterviewStart/>}/>
            <Route path='/interview-session' element={<InterviewSession/>}/>
            <Route path='/interview-report' element={<InterviewReport/>}/>
          </Routes>
        </main>
        {!hideHeaderFooter && <Footer />}
      </div>
    </InterviewProvider>
  )
}

export default App
