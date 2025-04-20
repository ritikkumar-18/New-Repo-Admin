// import { useNavigate } from "react-router-dom"
// import Header from "../components/Common/Header"
// import { motion } from "framer-motion"
// import { logoutUser } from "../api/auth"
// import toast from "react-hot-toast"

// const Logout = ({ onLogoutSuccess }) => {
//   const navigate = useNavigate()
//    const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem("loginToken")
//       if (token) {
//         await logoutUser(token)
//       }
//       localStorage.clear()
//       toast.success("You have been logged out successfully.")
//       if (onLogoutSuccess) {
//         onLogoutSuccess()
//       }
//       navigate("/login")
//     } catch (error) {
//       console.error("Logout error:", error)
//       toast.error("Error during logout. Please try again.")
//       localStorage.clear()
//       if (onLogoutSuccess) {
//         onLogoutSuccess()
//       }
//       navigate("/login")
//     }
//   }
//   const handleCancel = () => {
//     navigate("/")
//   }

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gray-900 ">
//       <Header title={"Logout"} />
//       <motion.div
//         className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border md:mx-72 border-gray-700 md:mt-36 xs:mt-48"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="font-bold text-white sm:text-md text-center md:text-2xl">Do you want to Logout?</h2>

//         <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 flex justify-evenly mt-10">
//           <button
//             onClick={handleLogout}
//             className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
//           >
//             Logout
//           </button>
//           <button
//             onClick={handleCancel}
//             className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-colors"
//           >
//             Cancel
//           </button>
//         </main>
//       </motion.div>
//     </div>
//   )
// }

// export default Logout

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Common/Header"
import { motion } from "framer-motion"
import { logoutUser } from "../api/auth"
import toast from "react-hot-toast"

const Logout = ({ onLogoutSuccess }) => {
  const navigate = useNavigate()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  // Add the CSS animation to the document
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      @keyframes appleSpinnerFade {
        0% { opacity: 0.85; }
        50% { opacity: 0.25; }
        100% { opacity: 0.25; }
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      const token = localStorage.getItem("loginToken")
      if (token) {
        await logoutUser(token)
      }

      // Clear all storage
      localStorage.clear()
      sessionStorage.clear() 
      toast.success("You have been logged out successfully.")
      if (onLogoutSuccess) {
        onLogoutSuccess()
      }
      setTimeout(() => {
        navigate("/login")
      }, 800)
    } catch (error) {
      console.error("Logout error:", error)
      toast.error("Error during logout. Please try again.")
      localStorage.clear()
      sessionStorage.clear()

      if (onLogoutSuccess) {
        onLogoutSuccess()
      }

      setTimeout(() => {
        navigate("/login")
      }, 800)
    }
  }

  const handleCancel = () => {
    navigate("/")
  }

  // Apple-style spinner component
  const AppleSpinner = () => {
    return (
      <div className="flex items-center justify-center mr-2">
        <div className="relative w-5 h-5">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-white rounded-full"
              style={{
                left: "50%",
                top: "50%",
                opacity: 0.2 + i / 10,
                transform: `rotate(${i * 45}deg) translate(0, -150%) scale(${0.6 + (i % 3) * 0.1})`,
                animation: `appleSpinnerFade 1s linear ${i * 0.125}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title={"Logout"} />
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border md:mx-72 border-gray-700 md:mt-36 xs:mt-48"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2 className="font-bold text-white sm:text-md text-center md:text-2xl">Do you want to Logout?</h2>

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 flex justify-evenly mt-10">
          <motion.button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center min-w-[100px]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? (
              <div className="flex items-center justify-center">
                <AppleSpinner />
                <span>Logging out...</span>
              </div>
            ) : (
              "Logout"
            )}
          </motion.button>
          <motion.button
            onClick={handleCancel}
            className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoggingOut}
          >
            Cancel
          </motion.button>
        </main>
      </motion.div>
    </div>
  )
}

export default Logout
