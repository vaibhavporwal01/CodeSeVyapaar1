import React from "react";

const BulkBuyRequests = () => {
  const bulkBuyItems = [
    { requestId: "SB001", productName: "round-neck dress", grade: "A1", quantity: "500 KG", pricePerKg: "$20", deliveryLocation: "Delhi, IN", deliveryTimeline: "7 Days" },
    { requestId: "SB001", productName: "round-neck dress", grade: "A1", quantity: "500 KG", pricePerKg: "$20", deliveryLocation: "Delhi, IN", deliveryTimeline: "5 Days" },
    { requestId: "SB001", productName: "round-neck dress", grade: "A1", quantity: "500 KG", pricePerKg: "$20", deliveryLocation: "Delhi, IN", deliveryTimeline: "3 Days" },
    { requestId: "SB001", productName: "round-neck dress", grade: "A1", quantity: "500 KG", pricePerKg: "$20", deliveryLocation: "Delhi, IN", deliveryTimeline: "30 Days" },
    { requestId: "SB001", productName: "round-neck dress", grade: "A1", quantity: "500 KG", pricePerKg: "$20", deliveryLocation: "Delhi, IN", deliveryTimeline: "45 Days" },
  ];

  return (
    <div className="bg-[#CCD7F0] flex justify-center">
      <div className="w-full max-w-[1100px] bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b rounded-t-xl bg-gray-50">
          <h2 className="text-lg font-semibold text-gray-800">Bulk Buy Requests</h2>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
            Recent Requests
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="py-3 px-4 font-medium">Request ID</th>
                <th className="py-3 px-4 font-medium">Product Name</th>
                <th className="py-3 px-4 font-medium">Grade</th>
                <th className="py-3 px-4 font-medium">Quantity</th>
                <th className="py-3 px-4 font-medium">Price/Kg</th>
                <th className="py-3 px-4 font-medium">Delivery Location</th>
                <th className="py-3 px-4 font-medium">Date & Time</th>
              </tr>
            </thead>
            <tbody>
              {bulkBuyItems.map((item, index) => (
                <tr
                  key={item.requestId + index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="py-3 px-4">{item.requestId}</td>
                  <td className="py-3 px-4">{item.productName}</td>
                  <td className="py-3 px-4">{item.grade}</td>
                  <td className="py-3 px-4 text-blue-500 font-medium">
                    {item.quantity}
                  </td>
                  <td className="py-3 px-4">{item.pricePerKg}</td>
                  <td className="py-3 px-4">{item.deliveryLocation}</td>
                  <td className="py-3 px-4">{item.deliveryTimeline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BulkBuyRequests;
