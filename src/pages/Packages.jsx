import React from 'react'

const samplePackages = [
  { id: 1, title: 'Luxury Bali Escape', days: 6, price: 1299 },
  { id: 2, title: 'Swiss Alps Honeymoon', days: 7, price: 2199 },
  { id: 3, title: 'Tokyo City & Food Tour', days: 5, price: 1599 },
  { id: 4, title: 'Safari Adventure - Kenya', days: 8, price: 2499 }
]

export default function Packages(){
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Packages</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {samplePackages.map(p => (
          <article key={p.id} className="rounded-xl p-6 bg-white/40 backdrop-blur-md shadow">
            <h3 className="font-semibold text-xl">{p.title}</h3>
            <p className="mt-2">Duration: {p.days} days</p>
            <p className="mt-2 font-bold">From ${p.price}</p>
            <div className="mt-4 flex gap-3">
              <button className="px-4 py-2 rounded bg-purple-700 text-white">Book Now</button>
              <button className="px-4 py-2 rounded border">View Details</button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
