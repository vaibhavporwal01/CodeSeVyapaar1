import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell } from 'react-icons/fa'; // Notification icon

const SellerNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800 flex items-center justify-between px-10 py-2 shadow-lg fixed top-0 w-full z-10 rounded-full mt-4 mr-4">
      {/* Container for centering */}
      <div className="max-w-screen-xl w-full mx-auto flex items-center justify-between">
        {/* Left side: Logo and Search Bar */}
        <div className="flex items-center space-x-6 w-full lg:w-auto">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/30" // Placeholder for the logo
              alt="Logo"
              className="w-8 h-8"
            />
            <div className="leading-tight">
              <span className="text-lg font-semibold text-blue-600">CodeSeVyapaar</span>
              <br />
              <span className="text-sm font-medium text-gray-500">Seller</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative hidden lg:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 text-gray-700 border border-gray-300 rounded-full px-3 py-1 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              &#x1F50D;
            </span>
          </div>
        </div>

        {/* Right side: Add Product Button, Notification, and Profile */}
        <div className="flex items-center space-x-4 lg:space-x-3">
          {/* Add Product Button */}
          <button
            className="bg-blue-600 text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition-colors duration-200 hidden sm:block"
            onClick={() => navigate('/add-product')}
          >
            Add Product
          </button>

          {/* Mobile View: Plus sign for Add Product */}
          <button
            className="bg-blue-600 text-white text-xl rounded-full hover:bg-blue-700 transition-colors duration-200 sm:hidden"
            onClick={() => navigate('/add-product')}
          >
            +
          </button>

          {/* Notification Icon */}
          <div className="relative">
            <FaBell
              className="text-gray-600 text-2xl cursor-pointer hover:text-blue-600 transition-colors duration-200"
              onClick={() => navigate('/notifications')} // Navigate to notifications page
            />
            <span className="absolute top-0 right-0 bg-red-500 w-3 h-3 rounded-full"></span> {/* Red dot */}
          </div>

          {/* Profile Section */}
          <div
            className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-3 py-1.5 rounded-full transition-colors duration-200"
            onClick={() => navigate('/profile')}
          >
            <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center text-gray-500">
              40x40
            </div>
            <span className="text-sm font-medium text-gray-600">ASIN</span>
          </div>
        </div>

        {/* Mobile View: Hamburger Menu */}
        <div className="lg:hidden flex items-center space-x-4">
          <button className="text-gray-600 text-2xl">
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerNavbar;
