import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewOrders.css'; // Import the CSS file

const ReviewOrders = () => {
  const navigate = useNavigate(); // Hook to navigate to another page

  // Orders data
  const orders = [
    { date: '01/04/2024', product: 'ZithroMax Antibiotic', status: 'In Transit', color: 'blue' },
    { date: '02/04/2024', product: 'Panadol Extra Strength', status: 'Pending', color: 'orange' },
    { date: '24/05/2024', product: 'CiproCure 500mg', status: 'Delivered', color: 'green' },
    { date: '10/06/2024', product: 'Amoxycillin 250mg', status: 'In Transit', color: 'blue' },
    { date: '15/07/2024', product: 'Vitamin D Supplement', status: 'Delivered', color: 'green' },
    { date: '20/08/2024', product: 'Paracetamol 500mg', status: 'Pending', color: 'orange' },
    { date: '10/09/2024', product: 'Cotton T-shirt (Size L)', status: 'In Transit', color: 'blue' },
    { date: '14/09/2024', product: 'Cough Syrup', status: 'Delivered', color: 'green' },
    { date: '03/12/2024', product: 'Smartphone Charger', status: 'In Transit', color: 'blue' },
    { date: '07/12/2024', product: 'Vitamin C 500mg', status: 'Delivered', color: 'green' },
    { date: '13/12/2024', product: 'Prednisone 5mg', status: 'Pending', color: 'orange' },
    { date: '20/12/2024', product: 'Lisinopril 10mg', status: 'Delivered', color: 'green' },
    { date: '25/12/2024', product: 'Fluoxetine 20mg', status: 'In Transit', color: 'blue' },
    { date: '28/12/2024', product: 'Hydrochlorothiazide 25mg', status: 'Pending', color: 'orange' },
    { date: '30/12/2024', product: 'Amoxicillin 500mg', status: 'Delivered', color: 'green' },
    { date: '01/01/2025', product: 'Leather Wallet', status: 'Delivered', color: 'green' },
    { date: '03/01/2025', product: 'Snack Pack (Chips & Cookies)', status: 'In Transit', color: 'blue' },
    { date: '05/01/2025', product: 'Bluetooth Headphones', status: 'Pending', color: 'orange' },
    { date: '10/01/2025', product: 'Glass Vase (Decorative)', status: 'In Transit', color: 'blue' },
    { date: '12/01/2025', product: 'Wireless Mouse', status: 'Delivered', color: 'green' },
    { date: '15/01/2025', product: 'Camping Tent', status: 'Pending', color: 'orange' },
    { date: '18/01/2025', product: 'Home Coffee Maker', status: 'Delivered', color: 'green' },
    { date: '20/01/2025', product: 'Air Purifier', status: 'In Transit', color: 'blue' },
    { date: '25/01/2025', product: 'Smart Watch', status: 'Delivered', color: 'green' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {/* Clickable Title */}
      <h3
        className="text-sm font-semibold mb-3 cursor-pointer hover:underline"
        onClick={() => navigate('/orders')} // Navigate to the "Orders" page
      >
        Review Orders
      </h3>
      {/* Scrollable section without visible scrollbar */}
      <div
        className="space-y-3 overflow-y-auto max-h-32"
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE/Edge
        }}
      >
        {orders.map((order, index) => (
          <div key={index} className="flex justify-between text-sm">
            <span>{order.date}</span>
            <span>{order.product}</span>
            <span className="font-medium" style={{ color: order.color }}>
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewOrders;
