import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TotalProductsCard = ({ title, apiEndpoint, icon }) => {
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
        console.log("API Response:", response.data); // Debugging line
        const { value, change } = response.data;

        if (value && change) {
          setValue(value);
          setChange(change);
          setTrend(change.includes('-') ? 'down' : 'up');
        }
      } catch (error) {
        console.error('Error fetching total products data:', error);
      } finally {
        setLoading(false); // Set loading to false after the request is completed
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
          <span className="material-icons mr-2 text-black">
            {icon}
          </span>
          {title}
        </div>
        <p className="text-2xl font-bold text-gray-800 mt-2">{value}</p>
        <p className={`text-sm mt-1 text-${trend === 'up' ? 'green' : 'red'}-500`}>
          {trend === 'up' ? '↑' : '↓'} {change} vs last month
        </p>
      </div>
    </div>
  );
};

export default TotalProductsCard;
