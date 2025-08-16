import React from 'react'
import { ArrowRight } from 'lucide-react'

const ReferEarnCard = () => {
  return (
    <div className="rounded-xl p-6 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-sm">
      <div className="text-center mb-4">
        <div className="w-20 h-20 mx-auto rounded-full bg-white/20 flex items-center justify-center text-3xl">
          💰
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">Refer and Earn</h3>
      <p className="text-white/90 leading-relaxed mb-4">
        Invite friends and earn exclusive rewards for every successful referral!
      </p>
      <button className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg px-4 py-2 hover:bg-yellow-500 transition">
        Refer Now <ArrowRight size={16} />
      </button>
    </div>
  )
}

export default ReferEarnCard
