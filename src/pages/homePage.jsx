import React from 'react'

export const HomePage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Welcome to LetMeGrab</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Recent Projects</h2>
          <p className="text-gray-400">Your recent work will appear here</p>
        </div>
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
          <p className="text-gray-400">Common tasks and shortcuts</p>
        </div>
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">Statistics</h2>
          <p className="text-gray-400">Your activity overview</p>
        </div>
      </div>
    </div>
  )
}
