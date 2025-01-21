import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineHome, HiOutlineShoppingCart, HiOutlineCube, HiOutlineChartBar, HiOutlineUserGroup, HiOutlineUser, HiOutlineCog, HiOutlineLogout } from 'react-icons/hi';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';

const Sidebar = () => {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(true);  // State for Main Menu
  const [isGeneralOpen, setIsGeneralOpen] = useState(true);  // State for General menu
  const location = useLocation();  // Get the current route

  const menuItems = [
    { 
      section: 'Main Menu', 
      isOpen: isMainMenuOpen,
      toggle: () => setIsMainMenuOpen(!isMainMenuOpen),  // Toggle Main Menu
      items: [
        { name: 'Dashboard', icon: <HiOutlineHome />, path: '/dashboard' },
        { name: 'Orders', icon: <HiOutlineShoppingCart />, path: '/orders' },
        { name: 'Products', icon: <HiOutlineCube />, path: '/products' },
        { name: 'Analytics', icon: <HiOutlineChartBar />, path: '/analytics' },
        { name: 'Customers', icon: <HiOutlineUserGroup />, path: '/customers' }
      ]
    },
    { 
      section: 'General', 
      isOpen: isGeneralOpen,
      toggle: () => setIsGeneralOpen(!isGeneralOpen),  // Toggle General Menu
      items: [
        { name: 'Profile', icon: <HiOutlineUser />, path: '/profile' },
        { name: 'Setting', icon: <HiOutlineCog />, path: '/settings' }
      ]
    }
  ];

  return (
    <div className="bg-[#CCD7F0] text-gray-800 h-screen w-60 p-4 flex flex-col pt-24 transition-all">
      {menuItems.map((menu) => (
        <div key={menu.section} className="mb-4">
          <div 
            className="flex items-center justify-between cursor-pointer text-lg font-medium text-gray-700 hover:text-gray-900"
            onClick={menu.toggle}
          >
            <span>{menu.section}</span>
            <span>{menu.isOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
          </div>

          {/* Only display the items when the section is open */}
          {menu.isOpen && (
            <ul className="space-y-2 mt-2">
              {menu.items.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                      location.pathname === item.path
                        ? 'bg-[#D9D9D9] border border-[#000000] shadow-md'
                        : 'hover:bg-blue-200'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="mt-auto">
        <button className="flex items-center space-x-3 p-3 text-gray-700 rounded-lg hover:bg-blue-200 transition-all w-full text-left">
          <HiOutlineLogout className="text-2xl" />
          <span>LOG OUT</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
