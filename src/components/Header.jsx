import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white/20 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">WT</div>
          <div>
            <h1 className="text-xl font-bold">WorldTour & Travels</h1>
            <p className="text-xs">Premium experiences, curated for you</p>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link to="/" className="px-3 py-2 rounded hover:bg-white/30">Home</Link>
          <Link to="/packages" className="px-3 py-2 rounded hover:bg-white/30">Packages</Link>
          <Link to="/login" className="px-3 py-2 rounded bg-white text-purple-700 font-semibold">Login</Link>
        </nav>
      </div>
    </header>
  )
}
