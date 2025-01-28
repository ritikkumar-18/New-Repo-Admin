import React from 'react'
import Header from '../components/Common/Header'
import { motion } from 'framer-motion'
import StatCards from '../components/Common/StatCards'
import { Briefcase, Calendar, User2Icon } from 'lucide-react'
import RecruitSales from '../components/Recruiteoverview/RecruitSales'
import AI from '../components/Analytics/AI'
import IncomeSales from '../components/Incomepages/IncomeSales'

const Overviewrecruit = () => {
  return (
    <div className='flex-1 overflow-auto z-10 relative'>
        <Header title="Overview"/>
        <main className='w-full py-6 px-4 mx-auto lg:px-8'>
            <motion.div className="w-full grid grid-cols-1 gap-5 sm-grid-cols-2 lg:grid-cols-3 mb-8"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}>
                <StatCards
                name="Total Candidates" icon={User2Icon} value="12,354" color="#6366F1"/>
                <StatCards
                name="Total jobs" icon={Briefcase} value="34,567" color="#10B981"/>
                <StatCards
                name="Upcoming Interviews"  value="23,123" icon={Calendar} color="#EC4899"/>
                


            </motion.div>
            <div className='grid grid-cols-1  gap-8 lg:grid-cols-2'>
                <RecruitSales/>
                <AI/>
                <IncomeSales/>
            </div>
        </main>
    </div>
  )
}

export default Overviewrecruit