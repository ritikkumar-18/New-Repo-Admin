// import { useEffect, useState } from "react"
// import { toast, Toaster } from "react-hot-toast"
// import { motion } from "framer-motion"
// import Sidebar from "./Sidebar"
// import { Routes, Route, useNavigate } from "react-router-dom"
// import OverviewPages from "../Pages/OverviewPages"
// import Users from "../Pages/Users"
// import Income from "../Pages/Income"
// import Settings from "../Pages/Settings"
// import Analytics from "../Pages/Analytics"
// import Logout from "../Pages/Logout"
// import Help from "../Pages/Help"
// import TeamManagementDashboard from "../Pages/TeamManagementDashboard"
// import Application from "../Pages/Application"
// import FeedbackandReview from "../Pages/FeedbackandReview"
// import Payment from "../Pages/Payment"
// import pointSound from "/blip.mp3"
// import Transaction from "../Pages/Transaction"
// import Privacy from "./cms/Privacy"
// import About from "./cms/Aboutus"
// import Terms from "./cms/Terms&Condi"
// import Paymentpolicy from "./cms/Paymentpolicy"
// import Notification from "./Notification/Notification"
// import Profile from "./Profile/Profile"
// import Adminuser from "../Pages/Adminuser"
// import { generateToken, messaging } from "../notifications/firebase"
// import { onMessage } from "firebase/messaging"
// import { loginUser, sendOTP, verifyOTP, resetPassword } from "../api/auth"
// import cookies from "universal-cookie"

// export default function Auth() {
//   useEffect(() => {
//     generateToken()
//     onMessage(messaging, (payload) => {
//       console.log(payload)
//       toast.success(payload.notification.title, {})
//     })
//   }, [])

//   const [currentPage, setCurrentPage] = useState("login")
//   const [userDetails, setUserDetails] = useState({ username: "", role: "" })
//   const [loading, setLoading] = useState(false)

//   const playPointSound = () => {
//     const audio = new Audio(pointSound)
//     audio.play()
//   }

//   const handleLogin = async (email, password) => {
//     try {
//       setLoading(true)
//       const response = await loginUser({ email, password })

//       const cookie = new cookies()
//       if (response.data.token) {
//         cookie.set("token", response.data.token, { path: "/" })
//       }

//       setUserDetails({ username: email, role: response.data.role })
//       setCurrentPage("adminDashboard")
//       toast.success("Welcome to the Admin Dashboard.")
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Invalid credentials")
//       playPointSound()
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleLogout = () => {
//     // Clear token from cookie
//     const cookie = new cookies()
//     cookie.remove("token", { path: "/" })

//     setCurrentPage("login")
//     toast.success("You have been logged out.")
//   }

//   return (
//     <div className="flex items-center justify-center h-screen bg-black">
//       <Toaster position="top-center" />
//       {currentPage === "login" && <LoginPage onLogin={handleLogin} loading={loading} />}
//       {currentPage === "adminDashboard" && <AdminDashboard userDetails={userDetails} onLogout={handleLogout} />}
//     </div>
//   )
// }
// function LoginPage({ onLogin, loading }) {
//   const navigate = useNavigate()
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [signupEmail, setSignupEmail] = useState("")
//   const [isLogin, setIsLogin] = useState(true)
//   const [otpSent, setOtpSent] = useState(false)
//   const [otp, setOtp] = useState("")
//   const [isOtpVerified, setIsOtpVerified] = useState(false)
//   const [newPassword, setNewPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [passwordError, setPasswordError] = useState("")
//   const [forgotLoading, setForgotLoading] = useState(false)
//   const [otpLoading, setOtpLoading] = useState(false)
//   const [resetLoading, setResetLoading] = useState(false)
//   const [resendLoading, setResendLoading] = useState(false) // New state for resend OTP
//   const [userEmail, setUserEmail] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onLogin(username, password)
//     navigate("/")
//     setUsername("")
//     setPassword("")
//   }

//   const handleForgotPasswordSubmit = async (e) => {
//     e.preventDefault()

//     if (signupEmail === "") {
//       toast.error("Email field cannot be empty.")
//       return
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     if (!emailRegex.test(signupEmail)) {
//       toast.error("Invalid email format.")
//       return
//     }

//     try {
//       setForgotLoading(true)
//       setUserEmail(signupEmail)

//       const response = await sendOTP({ email: signupEmail })

//       // Store the OTP token if it's in the response
//       console.log("resssss",response);
//       if (response.data) {
//         console.log("+++++",response.data.data.token)
//         localStorage.setItem("otpToken", response.data.data.token)
//       }

//       toast.success(response.data.message || "OTP sent successfully!")
//       setOtpSent(true)
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to send OTP.")
//       playPointSound()
//     } finally {
//       setForgotLoading(false)
//       setSignupEmail("")
//     }
//   }

//   const handleVerifyOtp = async (e) => {
//     e.preventDefault()

//     try {
//       setOtpLoading(true)

//       // Get the OTP token from localStorage
//       const otpToken = localStorage.getItem("otpToken")

//       const response = await verifyOTP(
//         {
//           email: userEmail,
//           otp: otp,
//         },
//         otpToken,
//       )

//       // Store the token for password reset if needed
//       if (response.data.token) {
//         localStorage.setItem("resetToken", response.data.token)
//       }

//       toast.success(response.data.message || "OTP verified successfully!")
//       setIsOtpVerified(true)
//       setOtp("") // Clear OTP input
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Invalid OTP!")
//       playPointSound()
//     } finally {
//       setOtpLoading(false)
//     }
//   }

//   const handleResendOtp = async () => {
//     try {
//       setResendLoading(true)

//       const response = await sendOTP({ email: userEmail })

//       // Update the OTP token if it's in the response
//       if (response.data.token) {
//         localStorage.setItem("otpToken", response.data.token)
//       }

//       toast.success(response.data.message || "OTP resent successfully!")
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Failed to resend OTP.")
//       playPointSound()
//     } finally {
//       setResendLoading(false)
//     }
//   }

//   const handleChangeEmail = () => {
//     setOtpSent(false) // Go back to Forgot Password form
//     setOtp("") // Clear OTP input
//     setSignupEmail("") // Clear email input
//     setUserEmail("") // Clear stored email
//   }

//   const handleResetPassword = async (e) => {
//     e.preventDefault()

//     if (newPassword.length < 6) {
//       setPasswordError("Password must be at least 6 characters.")
//       return
//     }

//     if (newPassword !== confirmPassword) {
//       setPasswordError("Password does not match. Please try again.")
//       return
//     }

//     try {
//       setResetLoading(true)
//       setPasswordError("")

//       // Get the reset token from localStorage
//       const resetToken = localStorage.getItem("resetToken")

//       const payload = {
//         email: userEmail,
//         password: newPassword,
//         confirmPassword: confirmPassword,
//       }

//       const response = await resetPassword(payload, resetToken)

//       toast.success(response.data.message || "Password reset successfully!")

//       // Clear tokens after successful reset
//       localStorage.removeItem("otpToken")
//       localStorage.removeItem("resetToken")

//       setIsLogin(true)
//       setOtpSent(false)
//       setIsOtpVerified(false)
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Password reset failed.")
//       setPasswordError(error.response?.data?.message || "Password reset failed.")
//     } finally {
//       setResetLoading(false)
//     }
//   }

//   return (
//     <div className="flex w-4/5 h-auto bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="hidden md:block w-4/6 relative bg-gray-800">
//         <video className="w-full h-full object-cover" autoPlay loop muted playsInline preload="auto">
//           <source src="https://videos.pexels.com/video-files/1390942/1390942-sd_960_506_24fps.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
//         {isLogin ? (
//           <motion.div
//             className="w-full"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h2 className="md:text-2xl :text-xl font-bold text-center mb-6 ">Admin Login</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Email Address</label>
//                 <input
//                   type="email"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder="Enter your email"
//                   className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   disabled={loading}
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   disabled={loading}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//                 disabled={loading}
//               >
//                 {loading ? "Logging in..." : "Login"}
//               </button>
//             </form>
//             <div className="text-center mt-4">
//               <button onClick={() => setIsLogin(false)} className="text-purple-600 hover:underline" disabled={loading}>
//                 Forgot Password?
//               </button>
//               <div className="mt-2">
//                 <a href="https://static-page-0011.netlify.app/" className="text-purple-600 hover:underline">
//                   Sign Up
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ) : otpSent ? (
//           isOtpVerified ? (
//             <motion.div
//               className="w-full"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <h2 className="text-2xl font-bold text-center mb-6">Create New Password</h2>
//               <form onSubmit={handleResetPassword} className="space-y-4">
//                 <div>
//                   <label className="block text-lg font-medium text-gray-700">New Password</label>
//                   <input
//                     type="password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     placeholder="Enter new password"
//                     className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     disabled={resetLoading}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-lg font-medium text-gray-700">Confirm Password</label>
//                   <input
//                     type="password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     placeholder="Confirm your password"
//                     className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     disabled={resetLoading}
//                   />
//                 </div>
//                 {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
//                 <button
//                   type="submit"
//                   className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//                   disabled={resetLoading}
//                 >
//                   {resetLoading ? "Submitting..." : "Submit"}
//                 </button>
//               </form>
//             </motion.div>
//           ) : (
//             <motion.div
//               className="w-full"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 1 }}
//             >
//               <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
//               <p className="text-center text-gray-600 mb-4">
//                 OTP sent to <span className="font-medium">{userEmail}</span>
//               </p>
//               <form onSubmit={handleVerifyOtp} className="space-y-4">
//                 <div>
//                   <label className="block text-lg font-medium text-gray-700">OTP</label>
//                   <input
//                     type="text"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     placeholder="Enter the OTP"
//                     className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                     disabled={otpLoading || resendLoading}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//                   disabled={otpLoading || resendLoading}
//                 >
//                   {otpLoading ? "Verifying..." : "Verify OTP"}
//                 </button>
//               </form>
//               <div className="text-center mt-4 space-y-2">
//                 <button
//                   onClick={handleResendOtp}
//                   className="text-purple-600 hover:underline"
//                   disabled={otpLoading || resendLoading}
//                 >
//                   {resendLoading ? "Resending..." : "Resend OTP"}
//                 </button>
//                 <div>
//                   <button
//                     onClick={handleChangeEmail}
//                     className="text-purple-600 hover:underline"
//                     disabled={otpLoading || resendLoading}
//                   >
//                     Change Email
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           )
//         ) : (
//           <motion.div
//             className="w-full"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
//             <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-lg font-medium text-gray-700 text-center">
//                   In order to retrieve your password, please enter <br />
//                   registered email ID
//                 </label>
//                 <input
//                   type="email"
//                   value={signupEmail}
//                   onChange={(e) => setSignupEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   disabled={forgotLoading}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//                 disabled={forgotLoading}
//               >
//                 {forgotLoading ? "Sending..." : "Send OTP"}
//               </button>
//             </form>
//             <div className="text-center mt-4">
//               <button
//                 onClick={() => setIsLogin(true)}
//                 className="text-purple-600 hover:underline"
//                 disabled={forgotLoading}
//               >
//                 Back to Login
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   )
// }
// function AdminDashboard({ onLogout }) {
//   return (
//     <div className="flex bg-gray-900 text-gray-100 overflow-hidden w-full h-full">
//       <Sidebar />
//       <Routes>
//         <Route path="/" element={<OverviewPages />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/income" element={<Income />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/analytics" element={<Analytics />} />
//         <Route path="/logout" element={<Logout onLogout={onLogout} />} />
//         <Route path="/help" element={<Help />} />
//         <Route path="/adminuser" element={<Adminuser />} />
//         <Route path="/cms/privacy-policy" element={<Privacy />} />
//         <Route path="/cms/payment-policy" element={<Paymentpolicy />} />
//         <Route path="/cms/terms-and-conditions" element={<Terms />} />
//         <Route path="/cms/about-us" element={<About />} />
//         <Route path="/notifications" element={<Notification />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="transaction" element={<Transaction />} />
//         <Route path="/team" element={<TeamManagementDashboard />} />
//         <Route path="/application" element={<Application />} />
//         <Route path="/feedback-and-review" element={<FeedbackandReview />} />
//         <Route path="/payment" element={<Payment />} />
//       </Routes>
//     </div>
//   )
// }

// // Helper function for playing sound
// const playPointSound = () => {
//   const audio = new Audio(pointSound)
//   audio.play()
// }


import { useEffect, useState } from "react"
import { toast, Toaster } from "react-hot-toast"
import { motion } from "framer-motion"
import Sidebar from "./Sidebar"
import { Routes, Route, useNavigate } from "react-router-dom"
import OverviewPages from "../Pages/OverviewPages"
import Users from "../Pages/Users"
import Income from "../Pages/Income"
import Settings from "../Pages/Settings"
import Analytics from "../Pages/Analytics"
import Logout from "../Pages/Logout"
import Help from "../Pages/Help"
import TeamManagementDashboard from "../Pages/TeamManagementDashboard"
import Application from "../Pages/Application"
import FeedbackandReview from "../Pages/FeedbackandReview"
import Payment from "../Pages/Payment"
import pointSound from "/blip.mp3"
import Transaction from "../Pages/Transaction"
import Privacy from "./cms/Privacy"
import About from "./cms/Aboutus"
import Terms from "./cms/Terms&Condi"
import Paymentpolicy from "./cms/Paymentpolicy"
import Notification from "./Notification/Notification"
import Profile from "./Profile/Profile"
import Adminuser from "../Pages/Adminuser"
import { generateToken, messaging } from "../notifications/firebase"
import { onMessage } from "firebase/messaging"
import { loginUser, sendOTP, verifyOTP, resetPassword } from "../api/auth"
import cookies from "universal-cookie"

export default function Auth() {
  useEffect(() => {
    generateToken()
    onMessage(messaging, (payload) => {
      console.log(payload)
      toast.success(payload.notification.title, {})
    })
  }, [])

  const [currentPage, setCurrentPage] = useState("login")
  const [userDetails, setUserDetails] = useState({ username: "", role: "" })
  const [loading, setLoading] = useState(false)

  const playPointSound = () => {
    const audio = new Audio(pointSound)
    audio.play()
  }

  const handleLogin = async (email, password) => {
    try {
      setLoading(true)
      const response = await loginUser({ email, password })

      const cookie = new cookies()
      if (response.data.token) {
        cookie.set("token", response.data.token, { path: "/" })
      }

      setUserDetails({ username: email, role: response.data.role })
      setCurrentPage("adminDashboard")
      toast.success("Welcome to the Admin Dashboard.")
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid credentials")
      playPointSound()
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    // Clear token from cookie
    const cookie = new cookies()
    cookie.remove("token", { path: "/" })

    setCurrentPage("login")
    toast.success("You have been logged out.")
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Toaster position="top-center" />
      {currentPage === "login" && <LoginPage onLogin={handleLogin} loading={loading} />}
      {currentPage === "adminDashboard" && <AdminDashboard userDetails={userDetails} onLogout={handleLogout} />}
    </div>
  )
}
function LoginPage({ onLogin, loading }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [isOtpVerified, setIsOtpVerified] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [forgotLoading, setForgotLoading] = useState(false)
  const [otpLoading, setOtpLoading] = useState(false)
  const [resetLoading, setResetLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false) // New state for resend OTP
  const [userEmail, setUserEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onLogin(username, password)
    navigate("/")
    setUsername("")
    setPassword("")
  }

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault()

    if (signupEmail === "") {
      toast.error("Email field cannot be empty.")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(signupEmail)) {
      toast.error("Invalid email format.")
      return
    }

    try {
      setForgotLoading(true)
      setUserEmail(signupEmail)

      const response = await sendOTP({ email: signupEmail })

      // Store the OTP token if it's in the response
      // console.log("resssss", response)
      if (response.data) {
        // console.log("+++++", response.data.data.token)
        localStorage.setItem("otpToken", response.data.data.token)
      }

      toast.success(response.data.message || "OTP sent successfully!")
      setOtpSent(true)
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send OTP.")
      playPointSound()
    } finally {
      setForgotLoading(false)
      setSignupEmail("")
    }
  }

  const handleVerifyOtp = async (e) => {
    e.preventDefault()

    try {
      setOtpLoading(true)

      // Get the OTP token from localStorage
      const otpToken = localStorage.getItem("otpToken")

      const response = await verifyOTP(
        {
          email: userEmail,
          otp: otp,
        },
        otpToken,
      )

      // Store the token for password reset if needed
      if (response.data.token) {
        localStorage.setItem("resetToken", response.data.token)
      }

      toast.success(response.data.message || "OTP verified successfully!")
      setIsOtpVerified(true)
      setOtp("") // Clear OTP input
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP!")
      playPointSound()
    } finally {
      setOtpLoading(false)
    }
  }

  const handleResendOtp = async () => {
    try {
      setResendLoading(true)

      const response = await sendOTP({ email: userEmail })

      // Update the OTP token if it's in the response
      if (response.data.token) {
        localStorage.setItem("otpToken", response.data.token)
      }

      toast.success(response.data.message || "OTP resent successfully!")
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP.")
      playPointSound()
    } finally {
      setResendLoading(false)
    }
  }

  const handleChangeEmail = () => {
    setOtpSent(false) // Go back to Forgot Password form
    setOtp("") // Clear OTP input
    setSignupEmail("") // Clear email input
    setUserEmail("") // Clear stored email
  }

  const handleResetPassword = async (e) => {
    e.preventDefault()

    if (newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters.")
      return
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Password does not match. Please try again.")
      return
    }

    try {
      setResetLoading(true)
      setPasswordError("")

      // Get the reset token from localStorage
      const resetToken = localStorage.getItem("resetToken")

      const payload = {
        email: userEmail,
        password: newPassword,
        confirmPassword: confirmPassword,
      }

      const response = await resetPassword(payload, resetToken)

      toast.success(response.data.message || "Password reset successfully!")

      // Clear tokens after successful reset
      localStorage.removeItem("otpToken")
      localStorage.removeItem("resetToken")

      setIsLogin(true)
      setOtpSent(false)
      setIsOtpVerified(false)
    } catch (error) {
      toast.error(error.response?.data?.message || "Password reset failed.")
      setPasswordError(error.response?.data?.message || "Password reset failed.")
    } finally {
      setResetLoading(false)
    }
  }

  return (
    <div className="flex w-4/5 h-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="hidden md:block w-4/6 relative bg-gray-800">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline preload="auto">
          <source src="https://videos.pexels.com/video-files/1390942/1390942-sd_960_506_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
        {isLogin ? (
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="md:text-2xl :text-xl font-bold text-center mb-6 ">Admin Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={loading}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
            <div className="text-center mt-4">
              <button onClick={() => setIsLogin(false)} className="text-purple-600 hover:underline" disabled={loading}>
                Forgot Password?
              </button>
              <div className="mt-2">
                <a href="https://static-page-0011.netlify.app/" className="text-purple-600 hover:underline">
                  Sign Up
                </a>
              </div>
            </div>
          </motion.div>
        ) : otpSent ? (
          isOtpVerified ? (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-bold text-center mb-6">Create New Password</h2>
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    disabled={resetLoading}
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    disabled={resetLoading}
                  />
                </div>
                {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                  disabled={resetLoading}
                >
                  {resetLoading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
              <p className="text-center text-gray-600 mb-4">
                OTP sent to <span className="font-medium">{userEmail}</span>
              </p>
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700">OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter the OTP"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    disabled={otpLoading || resendLoading}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                  disabled={otpLoading || resendLoading}
                >
                  {otpLoading ? "Verifying..." : "Verify OTP"}
                </button>
              </form>
              <div className="flex justify-between mt-4 w-full">
                <button
                  onClick={handleResendOtp}
                  className="text-purple-600 hover:underline"
                  disabled={otpLoading || resendLoading}
                >
                  {resendLoading ? "Resending..." : "Resend OTP"}
                </button>
                <button
                  onClick={handleChangeEmail}
                  className="text-purple-600 hover:underline"
                  disabled={otpLoading || resendLoading}
                >
                  Change Email
                </button>
              </div>
            </motion.div>
          )
        ) : (
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
            <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-700 text-center">
                  In order to retrieve your password, please enter <br />
                  registered email ID
                </label>
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  disabled={forgotLoading}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
                disabled={forgotLoading}
              >
                {forgotLoading ? "Sending..." : "Send OTP"}
              </button>
            </form>
            <div className="text-center mt-4">
              <button
                onClick={() => setIsLogin(true)}
                className="text-purple-600 hover:underline"
                disabled={forgotLoading}
              >
                Back to Login
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
function AdminDashboard({ onLogout }) {
  return (
    <div className="flex bg-gray-900 text-gray-100 overflow-hidden w-full h-full">
      <Sidebar />
      <Routes>
        <Route path="/" element={<OverviewPages />} />
        <Route path="/users" element={<Users />} />
        <Route path="/income" element={<Income />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/logout" element={<Logout onLogout={onLogout} />} />
        <Route path="/help" element={<Help />} />
        <Route path="/adminuser" element={<Adminuser />} />
        <Route path="/cms/privacy-policy" element={<Privacy />} />
        <Route path="/cms/payment-policy" element={<Paymentpolicy />} />
        <Route path="/cms/terms-and-conditions" element={<Terms />} />
        <Route path="/cms/about-us" element={<About />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="/team" element={<TeamManagementDashboard />} />
        <Route path="/application" element={<Application />} />
        <Route path="/feedback-and-review" element={<FeedbackandReview />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  )
}

// Helper function for playing sound
const playPointSound = () => {
  const audio = new Audio(pointSound)
  audio.play()
}
