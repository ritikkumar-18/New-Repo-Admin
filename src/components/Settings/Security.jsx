// import React, { useState } from 'react'
// import Settingpage1 from './Settingpage1'
// import { Lock } from 'lucide-react'
// import ToggleSwitch from './ToggleSwitch'

// const Security = () => {
//   const[twofactor,setTwoFactor]=useState(false)
//   return (
//     <Settingpage1 icon={Lock} title={"Security"}>
//       <ToggleSwitch label ={"Two Factor Authentication"}
//         isOn={twofactor}
//         onToggle={() => setTwoFactor( !twofactor )}/>
//         <div className='mt-4'>
//           <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 w-auto sm:mx-auto sm:w-auto'>Change Password</button>
//         </div>
//     </Settingpage1>
//   )
// }

// export default Security
import React, { useState } from 'react';
import Settingpage1 from './Settingpage1';
import { Lock } from 'lucide-react';
import ToggleSwitch from './ToggleSwitch';
import toast from 'react-hot-toast';

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const toggleChangePassword = () => {
    setIsChangePasswordOpen(!isChangePasswordOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate an API call using a Promise
    const changePasswordPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (newPassword === confirmPassword) {
          resolve('Password changed successfully');
        } else {
          reject('Passwords do not match');
        }
      }, 1500); // Simulate a 1.5s API delay
    });

    toast.promise(changePasswordPromise, {
      loading: 'Updating password...',
      success: 'Password changed successfully!',
      error: 'Passwords do not match. Try again.',
    });

    changePasswordPromise.then(() => {
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setIsChangePasswordOpen(false);
    });
  };

  return (
    <Settingpage1 icon={Lock} title={"Security"}>
      <ToggleSwitch
        label={"Two Factor Authentication"}
        isOn={twoFactor}
        onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className="mt-4">
        <button
          onClick={toggleChangePassword}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 w-auto sm:mx-auto sm:w-auto"
        >
          Change Password
        </button>
      </div>


      {isChangePasswordOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center mb-96">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Change Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full p-2 border rounded-lg text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 border rounded-lg text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 border rounded-lg text-black"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={toggleChangePassword}
                  className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Settingpage1>
  );
};

export default Security;
