import React from 'react'
import { motion } from 'framer-motion'
import { PieChart,Pie,Cell,Tooltip,ResponsiveContainer,Legend } from 'recharts'

const categoryData = [
	{ name: "Frontend Developer", value: 4500 },
	{ name: "Backend Dev", value: 3200 },
	{ name: "DevOps", value: 2800 },
	{ name: "Data Scientist", value: 2100 },
	{ name: "API Handler", value: 1900 },
];

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];



const Categorybased = () => {
  return (
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Department Distribution</h2>
			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<PieChart>
						<Pie
							data={categoryData}
							cx={"50%"}
							cy={"50%"}
							labelLine={false}
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
						>
							{categoryData.map((entry, index) => (
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
  )
}

export default Categorybased