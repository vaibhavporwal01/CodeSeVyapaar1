import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import SellerNavbar from '../SellerNavbar';
import CardWithGraph from './overallsales'; 
import BulkBuyRequests from './BulkBuy';


const orderpage = () => {
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
          

          {/* Dashboard Content */}
          <CardWithGraph /> 
          <BulkBuyRequests/>
        </div>
      </div>
    </div>
  );
};

export default orderpage;
