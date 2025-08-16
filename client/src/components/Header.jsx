import React from 'react'
import { Search, MessageCircle, Bell, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-5">
      <div className="relative w-[400px] max-w-full">
        <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search here"
          className="w-full rounded-lg border border-gray-200 bg-white pl-10 pr-3 py-2.5 text-sm focus:outline-none focus:ring-4 focus:ring-brand-purple/10 focus:border-brand-purple"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-brand-purple">
          <MessageCircle size={20} />
        </button>
        <button className="p-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-brand-purple">
          <Bell size={20} />
        </button>
        <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2">
          <div className="w-8 h-8 rounded-full bg-brand-purple text-white flex items-center justify-center">
            <User size={18} />
          </div>
          <span className="text-sm font-medium text-gray-800">Sherry Wolf, Tutor</span>
        </div>
      </div>
    </header>
  )
}

export default Header 