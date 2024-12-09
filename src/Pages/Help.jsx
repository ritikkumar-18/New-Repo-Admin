import React from 'react'
import Header from '../components/Common/Header'
import FAQ from '../components/Help/FAQ'
import SupportForm from '../components/Help/SupportForm'

const Help = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
            <Header title={"Support and Help"} />
            <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
                <FAQ/>
                <SupportForm/>
    
           </main>
        </div>
  )
}

export default Help