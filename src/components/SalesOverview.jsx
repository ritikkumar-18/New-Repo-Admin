import React from 'react';
import { Pie, Tooltip, ResponsiveContainer, PieChart, Cell, Legend } from 'recharts';
import { motion } from 'framer-motion';

// Assuming sales data represents the total for each month
const salesData = [
	{ name: "Jul", visitors: 1240 },
	{ name: "Aug", visitors: 3800 },
	{ name: "Sep", visitors: 5100 },
	{ name: "Oct", visitors: 4600 },
	{ name: "Nov", visitors: 5400 },
	{ name: "Dec", visitors: 7200 },
	{ name: "Jan", visitors: 6100 },
	{ name: "Feb", visitors: 5900 },
	{ name: "Mar", visitors: 6800 },
	{ name: "Apr", visitors: 6300 },
	{ name: "May", visitors: 7100 },
	{ name: "Jun", visitors: 7500 },
];

const totalVisitors = salesData.reduce((acc, curr) => acc + curr.visitors, 0);

const firstPlatformGrowth = (totalVisitors * 0.4); // 40%
const secondPlatformGrowth = (totalVisitors * 0.3); // 30%
const aggregateStoreGrowth = (totalVisitors * 0.3); // 30%

const growthData = [
	{ name: 'First Platform', value: firstPlatformGrowth },
	{ name: 'Second Platform', value: secondPlatformGrowth },
	{ name: 'Aggregate Store', value: aggregateStoreGrowth },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899"]; 

const SalesOverview = () => {
  return (
    <motion.div
      className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className='text-lg font-medium mb-4 text-gray-100'>No. of Visitors</h2>

      <div className='h-80'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <PieChart>
            <Pie
              data={growthData}
              dataKey="value"
              nameKey="name"
              outerRadius="80%"
              fill="#8884d8"
              label
            >
              {growthData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesOverview;
