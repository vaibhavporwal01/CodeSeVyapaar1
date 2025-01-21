import React from "react";
import UserNavbar from './userNavbar';
import Sidebar from "./sidebar";
import BreadCrumb from  './Breadcrumb';

const auction = () => {
  return (
    <div className="user-dashboard min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <UserNavbar />
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <BreadCrumb />
        {/* Sidebar and Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Auction Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={`https://shorturl.at/rUUF9`}
                  alt={`Auction Item ${index + 1}`}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="font-bold text-lg mb-1">Product Name</h2>
                  <p className="text-sm text-gray-500 mb-2">
                    Rs. 120 <span className="text-gray-400">(Order ends: Jan 20, 2025)</span>
                  </p>
                  <button className="bg-blue-500 text-white w-full py-2 rounded-md">
                    Bid Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-8">
          <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-600">
            Previous
          </button>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
              1
            </button>
            <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-600">
              2
            </button>
            <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-600">
              3
            </button>
          </div>
          <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-600">
            Next
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6 rounded-lg text-center my-6">
        <h2 className="text-2xl font-bold mb-4">
          STAY UP TO DATE ABOUT OUR LATEST DEALS
        </h2>
        <form className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-3 rounded-md w-full max-w-lg sm:w-64"
          />
          <button className="bg-white text-blue-500 px-6 py-2 rounded-md">
            Subscribe to Newsletter
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-white mt-4 shadow-lg">
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-3">Company</h3>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Help</h3>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">FAQ</h3>
            <ul>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-3">Resources</h3>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How-to Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 py-4">
          BidBuy © 2000-2023, All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default auction;