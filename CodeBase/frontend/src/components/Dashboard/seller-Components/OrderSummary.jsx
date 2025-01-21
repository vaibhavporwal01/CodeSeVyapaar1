import React from 'react';

const OrderSummary = () => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="text-sm font-semibold mb-4">Order Summary</h3>
    <div className="space-y-3">
      {[
        { label: 'Pending Orders', percentage: 40, color: 'bg-yellow-400' },
        { label: 'Shipped Orders', percentage: 30, color: 'bg-purple-500' },
        { label: 'Delivered Orders', percentage: 30, color: 'bg-green-400' },
      ].map((item, index) => (
        <div key={index}>
          <div className="flex justify-between text-xs">
            <span>{item.label}</span>
            <span>{item.percentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default OrderSummary;
