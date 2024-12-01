import React from 'react'
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'
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
					<LineChart data={salesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"name"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='visitors'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
    
  )
}

export default SalesOverview