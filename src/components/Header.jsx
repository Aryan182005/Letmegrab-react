import React from 'react';
import { Search, Bell, } from 'lucide-react';
import UserImg from '../assets/User.png';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-white border-b border-[#F3F5F7] py-4 px-4 md:px-8 flex items-center justify-end sm:justify-between gap-4">
      <div className=" flex-1 max-w-[492px] min-w-0">
        <div className="relative">
          <Search className="absolute left-24 sm:left-72 md:left-56 lg:left-4 top-1/2 transform -translate-y-1/2 " size={24} />
          <input
            type="text"
            placeholder="Search something here"
            className="hidden lg:block w-full bg-white text-secondary pl-16 pr-4 py-2 border border-[#C3D4E9] rounded-full focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-4">
        <button className="relative p-2.5 w-[34px] md:w-[44px] h-[34px] md:h-[44px] text-black transition-colors border border-[#C3D4E9] rounded-full shrink-0">
          <Bell size={20} className='w-3.5 h-3.5 md:w-5 md:h-5'/>
          <div className="absolute top-0 right-1">
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-flex md:h-4 md:w-4 h-3 w-3 rounded-full bg-[#FF4423] opacity-75 animate-ping"></span>
              <span className="relative inline-flex md:w-3 md:h-3 w-2 h-2 bg-[#FF4423] rounded-full"></span>
            </div>
          </div>
        </button>

        <div className="flex items-center gap-1 lg:gap-4">
          <div className="">
            <img src={UserImg} alt="User" className="w-[34px] lg:w-[44px] h-[34px] lg:h-[44px] rounded-full" />
          </div>
          <div className="text-right hidden md:block">
            <p className="text-black text-sm font-medium hidden lg:block">John Cornors</p>
          </div>
           <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50 focus:outline-none">
              <FaAngleDown aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Account settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    License
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
