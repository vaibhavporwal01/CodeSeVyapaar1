import React, { useState } from 'react';

const PaymentSummary = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const paymentData = {
    Upcoming: [6000, 4000, 2000], 
    Paid: [5000, 3000, 1000],
  };

  const maxPayment = 6000; // Set this to the max value for scaling bars

  const getBarHeight = (amount) => {
    const maxContainerHeight = 12 * 16; // Fixed height of 192px (12rem)
    // Scale the bar height based on the amount, but limit it to the container height
    return `${Math.min((amount / maxPayment) * maxContainerHeight, maxContainerHeight)}px`;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-4xl">
      {/* Tabs */}
      <div className="mb-6">
        <div className="flex justify-between mb-4">
          <h3 className="text-base font-semibold">Payment Summary</h3>
          <div className="flex space-x-4">
            <button
              className={`text-sm font-medium ${
                activeTab === 'Upcoming'
                  ? 'text-purple-500 border-b-2 border-purple-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Upcoming')}
            >
              Upcoming
            </button>
            <button
              className={`text-sm font-medium ${
                activeTab === 'Paid'
                  ? 'text-green-500 border-b-2 border-green-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('Paid')}
            >
              Paid
            </button>
          </div>
        </div>
      </div>

      {/* Chart Container with fixed height */}
      <div className="relative w-full pt-6" style={{ height: '192px' }}>
        {/* Y-Axis */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-500 pr-4">
          <span>₹6,000</span>
          <span>₹5,000</span>
          <span>₹3,000</span>
          <span>₹0</span>
        </div>

        {/* Bars */}
        <div className="absolute inset-0 flex items-end justify-evenly px-12">
          {paymentData[activeTab].map((amount, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`${
                  activeTab === 'Upcoming' ? 'bg-purple-500' : 'bg-green-500'
                } w-10 rounded-t-md`}
                style={{ height: getBarHeight(amount) }}
              >
                {/* Value on top of the bar */}
                <span
                  className="absolute top-[-1.5rem] text-xs font-semibold text-white"
                  style={{ left: '50%', transform: 'translateX(-50%)' }}
                >
                  ₹{amount}
                </span>
              </div>
              <span className="text-sm mt-2 text-gray-500">
                {index === 0
                  ? '1-30 days'
                  : index === 1
                  ? '31-60 days'
                  : '61-90 days'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
