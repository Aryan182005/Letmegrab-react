import React from 'react';
import { Home, Settings,  LogOut, BarChart3, ReceiptText, Package, Wallet, Inbox, Users, LifeBuoy, LogOutIcon, DoorOpen, ArrowBigLeft } from 'lucide-react';
import letmegrabLogo from '../assets/lermegrab_logo.png';
import { FaArrowLeft } from "react-icons/fa6";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Dashboard', active: true },
    { icon: BarChart3, label: 'Insight', active: false },
    { icon: ReceiptText, label: 'Invoices', active: false },
    { icon: Package, label: 'Products', active: false },
    { icon: Wallet, label: 'Reimburse', active: false },
    { icon: Inbox, label: 'Inbox', active: false },
    { icon: Users, label: 'People & Teams', active: false },
  ];

  const preferencesItems = [
    { icon: Settings, label: 'Settings', active: false },
    { icon: LifeBuoy, label: 'Help Center', active: false },
    { icon: Users, label: 'Dark Mode', active: false },
  ];

  return (
    <div className="w-20 md:w-72 xl:w-[286px] bg-white h-screen flex flex-col relative border-r border-[#F3F5F7]">
      <div className="absolute top-6 -right-3 shadow-primary border border-[#40A19866] bg-white p-1 w-[25px] h-[25px] rounded-md z-40  flex items-center justify-center cursor-pointer">
        <FaArrowLeft size={16} className='text-primary w-[13px] h-[13px]  '/>
      </div>
      <div className="p-3 lg:p-6">
        <div className="flex items-center justify-center space-x-2">
          <img src={letmegrabLogo} alt="LetMeGrab Logo" className='w-[80px] h-[50px] md:w-[162px] md:h-[50px]'/>
        </div>
      </div>

      <div className="overflow-y-auto flex flex-col justify-between">
        <div className="flex-1 px-4">
        <h6 className="text-sm text-[#90A3BF] font-medium mb-3 px-4 hidden md:block">Main Menu</h6>
        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex justify-center md:justify-start items-center space-x-3 px-2 md:px-4 py-2 md:py-3 rounded-lg transition-all ${
                item.active
                  ? 'bg-primary text-white'
                  : 'text-gray-400 hover:text-white hover:bg-primary'
              }`}
            >
              <item.icon size={20}/>
              <span className="font-medium hidden md:block">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <h6 className="text-sm text-[#90A3BF] font-medium mb-3 px-4 hidden md:block">Preferences</h6>
          <div className=" space-y-2">
          {preferencesItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex justify-center md:justify-start items-center space-x-3 px-2 md:px-4 py-2 md:py-3 rounded-lg text-gray-400 hover:text-white hover:bg-primary transition-all"
            >
              <item.icon size={20} />
              <span className="font-medium hidden md:block">{item.label}</span>
            </button>
          ))}
        </div>
        </div>
      </div>

      <div className="p-4">
        <button className="flex justify-center md:justify-start items-center gap-3 w-full  text-[#596780] py-2 md:py-3 px-2 md:px-4 rounded-lg font-medium">
          <LogOut size={20} /> 
          <span className="font-medium hidden md:block">Log Out</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Sidebar;
