import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Packages from './pages/Packages'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="site-bg flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
