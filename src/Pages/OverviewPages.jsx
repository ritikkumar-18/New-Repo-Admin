import React from 'react'
import StatCards from '../components/Common/StatCards'
import { motion } from 'framer-motion'
import Header from '../components/Common/Header'
import SalesOverview from '../components/SalesOverview'
import Categorybased from '../components/Categorybased'
import {  DollarSign, UserCheck, } from 'lucide-react'
import UserCharts from '../components/Users/UserCharts'
import { Briefcase, CreditCard, Building2 } from 'lucide-react'


const OverviewPages = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10  scroll-hidden'>
    <Header title="Overview"/>

    <main className='w-full mx-auto py-6 px-4 lg:px-8  '>
        <motion.div className=" w-full grid grid-cols-1 gap-5 sm-grid-cols-2 lg:grid-cols-5 mb-8 hover:cursor-pointer"
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
