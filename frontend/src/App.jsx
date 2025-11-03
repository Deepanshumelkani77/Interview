import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 ">
      <Navbar />
      <main className="w-full mt-20">
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
