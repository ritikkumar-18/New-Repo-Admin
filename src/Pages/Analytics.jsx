import React from 'react'
import Header from '../components/Common/Header'
import Overviewcards from '../components/Analytics/Overviewcards'
import Revenue from '../components/Analytics/Revenue'
import Channel from '../components/Analytics/Channel'
import Production from '../components/Analytics/Production'
import UserRetention from '../components/Analytics/UserRetention'
import Developer from '../components/Analytics/Developer'
import AI from '../components/Analytics/AI'

const Analytics = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
			<Header title={"Analytics"} />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                
                <Overviewcards/>
                <Revenue/>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
                    <Channel/>
                    <Production/>
                    <UserRetention/>
                    <Developer/>
                </div>
                <AI/>
            </main>
            </div>

  )
}

export default Analytics