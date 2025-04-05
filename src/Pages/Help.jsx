import React from 'react'
import Header from '../components/Common/Header'
import ChatApp from '../components/Help/SupportForm'

const Help = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 scroll-hidden">
            <Header title={"Messages & Queries"} />
            <main className='w-full'>
              
                <ChatApp/>
    
           </main>
        </div>
  )
}

export default Help