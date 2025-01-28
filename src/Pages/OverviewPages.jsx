import React from 'react'
import StatCards from '../components/Common/StatCards'
import { motion } from 'framer-motion'
import Header from '../components/Common/Header'
import {  FaGetPocket, FaRegUserCircle } from 'react-icons/fa'
import { FiBarChart2 } from 'react-icons/fi'
import SalesOverview from '../components/SalesOverview'
import Categorybased from '../components/Categorybased'
import GetjobChart from '../components/GetjobChart'
import {  Briefcase, Building2, CreditCard, DollarSign, UserCheck, UserPlus2, Users2Icon } from 'lucide-react'
import UserCharts from '../components/Users/UserCharts'
import Production from '../components/Analytics/Production'

const OverviewPages = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 '>
    <Header title="Overview"/>

    <main className='w-full mx-auto py-6 px-4 lg:px-8 '>
        <motion.div className=" w-full grid grid-cols-1 gap-5 sm-grid-cols-2 lg:grid-cols-5 mb-8"
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}>
              
                <StatCards
                name="Total Jobs" icon={Briefcase} value ='152,845' color="#6366F1"
                />
                <StatCards
                name="Total Subscription" icon={CreditCard} value ='99,876' color="#10B981"
                />
                <StatCards
                name="Registered Candidates" icon={UserCheck} value ='69,884' color="#EC4899"
                />
                <StatCards
                name="Companies Registered" icon={Building2} value ='98,990' color="#6366F1"
                />
                <StatCards
                name="Revenue" icon={DollarSign} value ='93%' color="#10B981"
                />
                

        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <SalesOverview/>
            <Categorybased/>
            <UserCharts/>
            
        </div>
    </main>
    </div>
  )
}

export default OverviewPages
