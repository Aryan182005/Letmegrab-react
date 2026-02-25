import React from 'react';
import { Home, Search, PlusCircle, Heart, Settings, HelpCircle, LogOut } from 'lucide-react';
import letmegrabLogo from '../assets/lermegrab_logo.png';

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Search, label: 'Search', active: false },
    { icon: PlusCircle, label: 'Create', active: false },
    { icon: Heart, label: 'Favorites', active: false },
  ];

  const preferencesItems = [
    { icon: Settings, label: 'Settings', active: false },
    { icon: HelpCircle, label: 'Help & Support', active: false },
    { icon: LogOut, label: 'Logout', active: false },
  ];

  return (
    <div className="w-64 bg-[#0F0F0F] h-screen flex flex-col">
      {/* Logo Section */}
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <img src={letmegrabLogo} alt="LetMeGrab Logo" className='w-[162px] h-[50px]'/>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 px-4">
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                item.active
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Preferences Section */}
        <div className="mt-8 space-y-2">
          {preferencesItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Upgrade Button */}
      <div className="p-4">
        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity">
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
