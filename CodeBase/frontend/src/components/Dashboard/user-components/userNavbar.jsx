import { Link } from 'react-router-dom';
import { FaHeart, FaUser, FaSearch, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between w-full">
        {/* Logo Section */}
        <div className="text-blue-600 text-3xl font-semibold flex-shrink-0">
          CodeseVyapaar
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 flex-grow justify-center">
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-all"
          >
            Home
          </Link>
          <Link
            to="/sell"
            className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-all"
          >
            Sell
          </Link>
          <Link
            to="/about-us"
            className="text-gray-700 hover:text-blue-600 text-sm font-medium transition-all"
          >
            About Us
          </Link>
        </div>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative flex items-center w-72 sm:w-96">
            <input
              type="text"
              placeholder="Search for products..."
              className="border border-gray-300 rounded-full pl-4 pr-10 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <FaSearch
              className="absolute right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
              aria-label="Search"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Link
              to="/favorites"
              className="text-gray-700 hover:text-blue-600 text-xl transition-all"
              aria-label="Favorites"
            >
              <FaHeart />
            </Link>
            <Link
              to="/profile"
              className="text-gray-700 hover:text-blue-600 text-xl transition-all"
              aria-label="Profile"
            >
              <FaUser />
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <FaBars
            className="text-blue-600 text-2xl cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <Link
            to="/"
            className="block text-blue-600 bg-blue-100 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition-all"
          >
            Home
          </Link>
          <Link
            to="/sell"
            className="block text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-all"
          >
            Sell
          </Link>
          <Link
            to="/about-us"
            className="block text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition-all"
          >
            About Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
