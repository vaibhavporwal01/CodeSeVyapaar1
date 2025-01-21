import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-white p-6 rounded-md shadow-md w-full lg:w-64">
      {/* Accessories Section */}
      <div className="mb-6">
        <h3 className="font-bold text-lg text-red-500 mb-4">Accessories</h3>
        <ul className="space-y-2 text-gray-700">
          <li>View All</li>
          <li>Bags</li>
          <li>Belts</li>
          <li>Cosmetics</li>
          <li>Hats</li>
        </ul>
      </div>

      {/* Bags Section */}
      <div className="mb-6">
        <h3 className="font-bold text-lg text-red-500 flex items-center gap-2 mb-4">
          <span>Bags</span>
          <span role="img" aria-label="bag" className="text-xl">👜</span>
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>View All</li>
          <li>Product</li>
        </ul>
      </div>

      {/* Clothing Section */}
      <div className="mb-6">
        <h3 className="font-bold text-lg text-red-500 flex items-center gap-2 mb-4">
          <span>Clothing</span>
          <span role="img" aria-label="clothing" className="text-xl">👔</span>
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>View All</li>
          <li>Features</li>
        </ul>
      </div>

      {/* Filter Section */}
      <div className="bg-gray-100 p-4 rounded-md shadow-inner">
        <h3 className="font-bold text-lg text-red-500 flex items-center gap-2 mb-4">
          <span>Filter</span>
          <span role="img" aria-label="filter" className="text-xl">⚙️</span>
        </h3>
        <div className="mb-4">
          <h4 className="text-gray-800 font-semibold mb-2">Price</h4>
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Rs. 50</span>
            <span>Rs. 2000</span>
          </div>
          <input type="range" min="50" max="2000" className="w-full mb-2" />
        </div>
        <button className="bg-red-500 text-white w-full py-2 rounded-md hover:bg-red-600">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
