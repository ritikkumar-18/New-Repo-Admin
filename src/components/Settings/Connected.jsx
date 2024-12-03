import React, { useState } from 'react';
import Settingpage1 from './Settingpage1';
import { HelpCircle, Plus } from 'lucide-react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';
import { BsThreads } from 'react-icons/bs';

const Connected = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: <FaGoogle size={20} className="text-[#4285F4]" />,
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
      icon: <FaFacebook size={20} className="text-[#4285F4]" />,
    },
    {
      id: 3,
      name: "Twitter",
      connected: true,
      icon: <BsThreads size={20} className="text-[#1DA1F2]" />,
    },
  ]);

  return (
    <Settingpage1 icon={HelpCircle} title={"Connected Accounts"}>
      {connectedAccounts.map((account) => (
        <div key={account.id} className="flex items-center justify-between py-3">
          <div className="flex gap-1">
            {account.icon}
            <span className="text-gray-300">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded ${
              account.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            } transition duration-200`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) => {
                  if (acc.id === account.id) {
                    return {
                      ...acc,
                      connected: !acc.connected,
                    };
                  }
                  return acc;
                })
              );
            }}
          >
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
      <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200">
        <Plus size={18} className="mr-2" /> Add Account
      </button>
    </Settingpage1>
  );
};

export default Connected;
