import { useNavigate } from "react-router-dom"
import Header from "../components/Common/Header"
import { motion } from "framer-motion"
import { logoutUser } from "../api/auth"
import toast from "react-hot-toast"

const Logout = ({ onLogoutSuccess }) => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      
      const token = localStorage.getItem("loginToken")
      if (token) {
        await logoutUser(token)
      }
      localStorage.clear()
      toast.success("You have been logged out successfully.")
      if (onLogoutSuccess) {
        onLogoutSuccess()
      }
      navigate("/login")
    } catch (error) {
      console.error("Logout error:", error)
      toast.error("Error during logout. Please try again.")
      localStorage.clear()
      if (onLogoutSuccess) {
        onLogoutSuccess()
      }
      navigate("/login")
    }
  }

  const handleCancel = () => {
    navigate("/")
  }

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900 ">
      <Header title={"Logout"} />
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border md:mx-72 border-gray-700 md:mt-36 xs:mt-48"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-bold text-white sm:text-md text-center md:text-2xl">Do you want to Logout?</h2>

        <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 flex justify-evenly mt-10">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 transition-colors"
          >
            Cancel
          </button>
        </main>
      </motion.div>
    </div>
  )
}

export default Logout
