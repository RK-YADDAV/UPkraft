import React from 'react'
import ProfileCard from './ProfileCard'
import PerformanceMetrics from './PerformanceMetrics'
import ReferEarnCard from './ReferEarnCard'
import UpcomingLessons from './UpcomingLessons'
import PerformanceGauges from './PerformanceGauges'
import FeedbackPending from './FeedbackPending'

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProfileCard />
        <PerformanceMetrics />
        <ReferEarnCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <UpcomingLessons />
        <div className="flex flex-col gap-6 lg:col-span-1">
          <PerformanceGauges />
          <FeedbackPending />
        </div>
      </div>
    </div>
  )
}

export default Dashboard 