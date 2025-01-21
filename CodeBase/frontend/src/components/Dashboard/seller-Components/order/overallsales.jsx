// CardWithGraph.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CardWithGraph = () => {
  const [timeframe, setTimeframe] = useState('This Month');

  // Data and options for the chart
  const data = {
    labels: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'],
    datasets: [
      {
        label: 'Current Sales',
        data: [150000, 160000, 170000, 165000, 160000, 175000, 180000, 200000, 210000, 230000, 250000, 260000],
        borderColor: '#4A90E2',
        backgroundColor: 'rgba(74, 144, 226, 0.1)',
        fill: true,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 4,
        pointBackgroundColor: '#FFFFFF',
        pointBorderColor: '#4A90E2',
      },
      {
        label: 'Projected Sales',
        data: [140000, 150000, 160000, 155000, 150000, 165000, 170000, 190000, 200000, 210000, 220000, 230000],
        borderColor: '#9B9B9B',
        backgroundColor: 'transparent',
        fill: false,
        tension: 0.4,
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: '#7F8C8D',
        },
      },
      y: {
        ticks: {
          beginAtZero: false,
          callback: (value) => `$${value / 1000}K`,
          color: '#7F8C8D',
        },
      },
    },
    plugins: {
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleColor: '#fff',
        bodyColor: '#fff',
        displayColors: false,
        callbacks: {
          label: (context) => `$${context.raw / 1000}K`,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="p-6 bg-white shadow-xl hover:shadow-2xl transition duration-300"
         style={{ width: '725px', height: '334px', gap: '0px', borderRadius: '10px', opacity: '1' }}>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-gray-500">Overall Sales</p>
          <div className="flex items-center">
            <h3 className="text-3xl font-bold text-gray-800 mr-4">$348,253.65</h3>
            <p className="text-sm text-green-500 font-semibold flex items-center">
              <span className="mr-1">⬈</span> 13.02%
            </p>
          </div>
        </div>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="text-sm text-gray-500 border rounded-md p-2 cursor-pointer hover:bg-gray-100 transition"
        >
          <option value="Today">Today</option>
          <option value="This Week">This Week</option>
          <option value="This Month">This Month</option>
          <option value="This Year">This Year</option>
        </select>
      </div>

      <div className="relative h-48">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default CardWithGraph;
