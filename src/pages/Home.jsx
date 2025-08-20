import React from 'react'
import { Link } from 'react-router-dom'

function Hero(){
  return (
    <section className="rounded-xl p-8 bg-white/40 backdrop-blur-md shadow-lg">
      <div className="md:flex items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-extrabold">Explore the world with premium travel packages</h2>
          <p className="mt-4 text-lg">Custom itineraries, verified hotels, local experiences and 24/7 concierge.</p>
          <Link to="/packages" className="inline-block mt-6 px-6 py-3 bg-purple-700 text-white rounded-full font-semibold">Browse Packages</Link>
        </div>
        <div className="flex-1 mt-6 md:mt-0">
          <div className="grid grid-cols-2 gap-4">
            <div className="h-40 rounded-lg bg-white/60 flex items-end p-3">Beach Escapes</div>
            <div className="h-40 rounded-lg bg-white/60 flex items-end p-3">Mountain Retreats</div>
            <div className="h-40 rounded-lg bg-white/60 flex items-end p-3">City Breaks</div>
            <div className="h-40 rounded-lg bg-white/60 flex items-end p-3">Adventure Tours</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home(){
  return (
    <div className="space-y-6">
      <Hero />
      <section className="grid md:grid-cols-3 gap-4">
        <div className="rounded-xl p-6 bg-white/30">Why choose us?<br/>Curated experts.</div>
        <div className="rounded-xl p-6 bg-white/30">Flexible dates & payment options.</div>
        <div className="rounded-xl p-6 bg-white/30">Verified partners worldwide.</div>
      </section>
    </div>
  )
}
