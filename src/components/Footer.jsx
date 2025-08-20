import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white/10 border-t border-white/20">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold">WorldTour & Travels</h3>
          <p className="text-sm">Handcrafted travel packages • 24/7 support</p>
        </div>
        <div className="text-sm">
          © {new Date().getFullYear()} WorldTour & Travels • All rights reserved
        </div>
      </div>
    </footer>
  )
}
