import React from 'react'

export default function Login(){
  return (
    <div className="max-w-md mx-auto bg-white/50 p-6 rounded-xl backdrop-blur-md shadow">
      <h2 className="text-xl font-bold mb-4">Sign in to your account</h2>
      <form className="space-y-4">
        <input className="w-full p-3 rounded border" placeholder="Email" />
        <input className="w-full p-3 rounded border" placeholder="Password" type="password" />
        <div className="flex gap-3">
          <button className="flex-1 px-4 py-2 rounded bg-purple-700 text-white">Sign in</button>
          <button className="flex-1 px-4 py-2 rounded border">Sign up</button>
        </div>
      </form>
    </div>
  )
}
