import React from 'react'

const PerformanceGauges = () => {
  const createGauge = (percentage, label, value) => {
    const radius = 40
    const circumference = 2 * Math.PI * radius
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
      <div key={label} className="text-center">
        <h4 className="text-sm font-medium text-gray-600 mb-4">{label}</h4>
        <div className="relative inline-block">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r={radius} fill="none" stroke="#f0f0f0" strokeWidth="8" />
            <circle cx="60" cy="60" r={radius} fill="none" stroke="#ff6b35" strokeWidth="8" strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} strokeLinecap="round" transform="rotate(-90 60 60)" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-brand-orange">{value}</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Overview</h3>
      <div className="flex flex-col gap-6">
        {createGauge(76, 'Overall Course Performance', '7.6/10')}
        {createGauge(66, 'Overall Student Performance', '6.6/10')}
      </div>
    </div>
  )
}

export default PerformanceGauges 