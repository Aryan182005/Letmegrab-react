import React from 'react';
import { Search, Bell, User, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-[#1A1A1A] border-b border-gray-800 h-16 flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Create Button */}
        <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          <Plus size={18} />
          <span>Create</span>
        </button>

        {/* Notifications */}
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-white text-sm font-medium">John Doe</p>
            <p className="text-gray-400 text-xs">Free Plan</p>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <User size={18} className="text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
