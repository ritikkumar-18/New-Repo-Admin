import React from 'react'
import Header from '../components/Common/Header'

import ChatApp from '../components/Help/SupportForm'

const Help = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
            <Header title={"Support and Help"} />
            <main className='w-full px-2'>
              
                <ChatApp/>
    
           </main>
        </div>
  )
}

export default Help