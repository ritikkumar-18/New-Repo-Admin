import React from 'react'
import Header from '../components/Common/Header'
import Notification from '../components/Settings/Notification'
import Security from '../components/Settings/Security'
import Connected from '../components/Settings/Connected'
import Danger from '../components/Settings/Delete'
import Profile from '../components/Settings/Profile'

const Settings = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
    <Header title='Settings' />
    <main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
        <Profile/>
        <Notification/>
        <Security/>
        <Connected/>
        <Danger/>
        </main>
    </div>

  )
}

export default Settings