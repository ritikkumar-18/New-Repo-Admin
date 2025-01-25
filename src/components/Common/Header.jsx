import { BellRing } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Header = ({ title }) => {
  const [notifications] = useState([
    "You have a new message.",
    "Your profile has been updated.",
    "Someone liked your post.",
  ]);
  const [showNotifications, setShowNotifications] = useState(false);

  const dropdownRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNotificationClick = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <>

      <header className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-700 fixed top-0 md:w-full xs:w-[300px] sm:w-[350px] z-50">
        <div className="max-w-none mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-100">{title}</h1>

        
          <div className="relative md:mr-64  " ref={dropdownRef}>
            <button
              onClick={handleNotificationClick}
              className="focus:outline-none">
              <BellRing className="text-gray-100" size={24} />
            </button>

    
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                <div className="px-4 py-2 bg-gray-800 text-gray-300 font-medium">
                  Notifications
                </div>
                <ul className="divide-y divide-gray-700">
                  {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                      <li
                        key={index}
                        className="px-4 py-3 text-sm text-gray-300 hover:bg-gray-700"
                      >
                        {notification}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-3 text-sm text-gray-400">
                      No new notifications.
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="pt-[72px] md:pt-[80px]"></div>
    </>
  );
};

export default Header;
