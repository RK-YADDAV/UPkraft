import React from 'react'
import { Users, Star, CheckCircle } from 'lucide-react'

const PerformanceMetrics = () => {
  const metrics = [
    { icon: Users, label: 'Total Active Students', value: '30', gradient: 'from-indigo-500 to-indigo-700' },
    { icon: Star, label: 'Tutor CSAT Score', value: '80%', gradient: 'from-yellow-400 to-yellow-500' },
    { icon: CheckCircle, label: 'Assignment Completion Rate', value: '15%', gradient: 'from-green-500 to-green-600' }
  ]

  return (
    <div className="flex flex-col gap-4">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 border border-gray-200 flex items-center gap-3 shadow-sm"
        >
          <div
            className={`w-12 h-12 rounded-md bg-gradient-to-br ${metric.gradient} text-white flex items-center justify-center`}
          >
            <metric.icon size={22} />
          </div>
          <div>
            <div className="text-xl font-bold text-gray-900 leading-none">{metric.value}</div>
            <div className="text-xs text-gray-600">{metric.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PerformanceMetrics
