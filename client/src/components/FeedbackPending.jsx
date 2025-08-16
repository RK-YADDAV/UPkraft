import React from 'react'
import { ArrowRight } from 'lucide-react'

const FeedbackPending = () => {
  const pendingCount = 12
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (pendingCount / 20) * circumference

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Feedback Pending</h3>
      <div className="text-center">
        <div className="relative inline-block mb-5">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="8"
            />
            <circle
              cx="60"
              cy="60"
              r={radius}
              fill="none"
              stroke="#ef4444" // Tailwind red-500
              strokeWidth="8"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-red-500">{pendingCount}</span>
            <span className="text-xs text-gray-500 mt-1">Feedback Pending</span>
          </div>
        </div>
        <button className="inline-flex items-center gap-2 bg-indigo-500 text-white font-semibold rounded-lg px-4 py-2 hover:bg-indigo-600 transition">
          Give Feedback <ArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default FeedbackPending
