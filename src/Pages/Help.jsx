import React from 'react'
import Header from '../components/Common/Header'
import TicketForm from '../components/Help/SupportForm'

const Help = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
            <Header title={"Support and Help"} />
            <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
              
                <TicketForm/>
    
           </main>
        </div>
  )
}

export default Help