import React, { useState } from 'react'
import Settingpage1 from './Settingpage1'
import { Lock } from 'lucide-react'
import ToggleSwitch from './ToggleSwitch'

const Security = () => {
  const[twofactor,setTwoFactor]=useState(false)
  return (
    <Settingpage1 icon={Lock} title={"Security"}>
      <ToggleSwitch label ={"Two Factor Authentication"}
        isOn={twofactor}
        onToggle={() => setTwoFactor( !twofactor )}/>
        <div className='mt-4'>
          <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 w-auto sm:mx-auto sm:w-auto'>Change Password</button>
        </div>
    </Settingpage1>
  )
}

export default Security