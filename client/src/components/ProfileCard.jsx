import React from 'react'
import { Users, BookOpen, Award } from 'lucide-react'

const ProfileCard = () => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-5">Profile</h3>
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white flex items-center justify-center text-2xl font-bold">
            SW
          </div>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-gray-900">Sherry Wolf</h4>
          <p className="text-gray-500 mb-5">Piano Tutor</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <Users size={16} />
            <span>Students 30</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <BookOpen size={16} />
            <span>Course 6</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <Award size={16} />
            <span>Reward 3</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
