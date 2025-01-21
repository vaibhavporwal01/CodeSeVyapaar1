import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SalesCard = ({ title, apiEndpoint, color, icon }) => {
  // Sample data for testing
    const sampleData = {
      value: 5000,  // Sample revenue value
      change: '+10%'  // Sample change percentage
    };
  
    const [value, setValue] = useState(sampleData.value);  // Set initial value to sample value
    const [change, setChange] = useState(sampleData.change);  // Set initial change to sample change
    const [trend, setTrend] = useState('up');  // Assume up for testing (since change is +10%)
    const [loading, setLoading] = useState(false);  // Disable loading state for this static data
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        console.log("API Response:", response.data);
        const { value, change } = response.data;

        if (value && change) {
          setValue(value);
          setChange(change);
          setTrend(change.includes('-') ? 'down' : 'up');
        }
      } catch (error) {
        console.error('Error fetching sales data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between space-x-4">
        <div className="flex flex-col">
          <div className="flex items-center text-sm font-semibold text-gray-700">
            <span className="material-icons mr-2 text-gray-400">hourglass_empty</span>
            {title}
          </div>
          <div className="text-2xl font-bold text-gray-800 mt-2">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between space-x-4">
      <div className="flex flex-col">
        <div className="flex items-center text-sm font-semibold text-gray-700">
          <span className={`material-icons mr-2 text-${color === 'green' ? 'green' : 'red'}-500`}>
            {icon}
          </span>
          {title}
        </div>
        <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
        <p
          className={`text-xs mt-1 ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
        >
          {trend === 'up' ? '↑' : '↓'} {change} vs last month
        </p>
      </div>
      <div className="relative w-20 h-14">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 100 50">
          <path
            d={`M0 40 Q 25 ${trend === 'up' ? '10' : '30'}, 50 40 T 100 ${trend === 'up' ? '10' : '30'}`}
            fill="transparent"
            stroke={trend === 'up' ? '#34D399' : '#F87171'} // Dynamic stroke color
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default SalesCard;
