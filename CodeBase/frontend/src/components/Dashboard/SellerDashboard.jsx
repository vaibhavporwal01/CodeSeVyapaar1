import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './seller-Components/Sidebar';
import SellerNavbar from './seller-Components/SellerNavbar';
import RevenueCard from './seller-Components/RevenueCard';
import SalesCard from './seller-Components/SalesCard';
import TotalProductsCard from './seller-Components/TotalProductsCard';
import OrderSummary from './seller-Components/OrderSummary';
import PaymentSummary from './seller-Components/PaymentSummary';

const SellerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#CCD7F0] flex flex-col">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <SellerNavbar />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 mt-20 space-y-6 border-l-2 border-[#6798C5]">
          {/* Breadcrumb Navigation */}
          <nav className="text-sm text-gray-500 mb-4">
            <Link to="/" className="hover:text-blue-500">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/seller-dashboard" className="text-gray-800 font-semibold">Seller Portal</Link>
          </nav>

          {/* Dashboard Content */}
          <div className="space-y-6">
            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RevenueCard title="Total Orders" value="400" change="↑ 10%" color="green" icon="shopping_cart" />
              <SalesCard title="Total Sell" value="₹42.5L" change="↓ 5%" color="red" icon="attach_money" />
              <TotalProductsCard title="Total Products" value="452" change="↑ 23" color="green" icon="inventory" />
            </div>

            {/* Order Summary & Payment Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <OrderSummary />
              <PaymentSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
