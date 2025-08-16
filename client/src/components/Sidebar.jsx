import React from 'react'
import { 
  Grid3X3, 
  Users, 
  BookOpen, 
  Calendar, 
  ClipboardList, 
  Music, 
  Piano, 
  CreditCard, 
  UserPlus, 
  Settings, 
  LogOut 
} from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: Grid3X3, label: 'Home', active: true },
    { icon: Users, label: 'My Students' },
    { icon: BookOpen, label: 'My Courses' },
    { icon: Calendar, label: 'Calendar' },
    { icon: ClipboardList, label: 'Assignment' },
    { icon: Music, label: 'Music Library' },
    { icon: Piano, label: 'Practice Studio' },
    { icon: CreditCard, label: 'Payment Summary' },
    { icon: UserPlus, label: 'Refer & Earn' },
    { icon: Settings, label: 'Settings' }
  ]

  return (
    <div className="w-72 fixed inset-y-0 left-0 bg-gradient-to-br from-purple-600 to-purple-800 text-white flex flex-col overflow-y-auto">
      <div className="px-6 pb-6 pt-6 border-b border-white/10">
        <h2 className="text-center text-2xl font-bold">UPKRAFT</h2>
      </div>

      <nav className="flex-1 py-4">
        {menuItems.map((item, index) => (
          <a 
            key={index}
            href="#"
            className={`flex items-center gap-3 px-6 py-3 text-white/80 transition-colors border-l-4 ${
              item.active 
                ? 'bg-white/20 text-white border-white' 
                : 'border-transparent hover:bg-white/10 hover:text-white'
            }`}
          >
            <item.icon size={20} />
            <span className="text-sm font-medium">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="px-6 py-4 border-t border-white/10">
        <a href="#" className="flex items-center gap-3 px-4 py-2 text-white/70 hover:text-red-300">
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </a>
      </div>
    </div>
  )
}

export default Sidebar
