import { BellRing,  Bell } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

const Header = ({ title }) => {
  const [notificationOn, setNotificationOn] = useState(false);

  const handleNotificationClick = () => {
    setNotificationOn(!notificationOn);
    toast.success(notificationOn ? "Notifications Off" : "Notifications On");
  };

  return (
    <header className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700'>
      <div className='max-w-none mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
        <h1 className='text-2xl font-semibold text-gray-100'>{title}</h1>
        <button onClick={handleNotificationClick} className="focus:outline-none">
          {notificationOn ? (
            <BellRing className="text-indigo-500" size={24} />
          ) : (
            <Bell className="text-gray-100" size={24} />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
