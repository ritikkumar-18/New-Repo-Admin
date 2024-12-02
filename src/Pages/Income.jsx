import React from 'react'
import { motion } from 'framer-motion';
import Header from '../components/Common/Header'
import { CreditCard, DollarSign, ShoppingCart, TrendingUp } from "lucide-react";
import StatCards from '../components/Common/StatCards';
import IncomeSales from '../components/Incomepages/IncomeSales';
import IncomebyCategory from '../components/Incomepages/IncomebyCategory';
import DailyIncome from '../components/Incomepages/DailyIncome';

const salesStats = {
	totalRevenue: "$12,346",
	averageVisitorsValue: "$78.90",
	conversionRate: "3.45%",
	userGrowth: "12.3%",
};

const SalesPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
			<Header title='Income' />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
			
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCards name='Total Revenue' icon={DollarSign} value={salesStats.totalRevenue} color='#6366F1' />
					<StatCards
						name='Avg. Visitors Value'
						icon={ShoppingCart}
						value={salesStats.averageVisitorsValue}
						color='#10B981'
					/>
					<StatCards
						name='Conversion Rate'
						icon={TrendingUp}
						value={salesStats.conversionRate}
						color='#F59E0B'
					/>
					<StatCards name='Users Growth' icon={CreditCard} value={salesStats.userGrowth} color='#EF4444' />
				</motion.div>
				<IncomeSales/>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<IncomebyCategory/>
					<DailyIncome/>

				</div>
                </main>
            </div>
  )
}

export default SalesPage
