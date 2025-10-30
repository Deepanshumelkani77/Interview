import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
