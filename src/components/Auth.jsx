
// import { useEffect, useState, useRef } from "react"
// import { toast, Toaster } from "react-hot-toast"
// import { motion, AnimatePresence } from "framer-motion"
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
// import { loginUser, sendOTP, verifyOTP, resetPassword, logoutUser } from "../api/auth"

// export default function Auth() {
//   const navigate = useNavigate()

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

//       if (response?.data) {
//         localStorage.setItem("loginToken", response.data.data.token)
//         setUserDetails({
//           username: email,
//           role: response.data.data.role || response.data.role || "admin",
//         })

        
//         toast.success("Welcome to the Admin Dashboard.")
//         setCurrentPage("adminDashboard")
//         navigate("/")
//         return true
//       }
//       return false
//     } catch (error) {
//       console.error("Login error:", error)
//       toast.error(error.response?.data?.message || "Invalid credentials", {
//         duration: 3000,
//         style: {
//           background: "#991b1b",
//           color: "#fff",
//         },
//       })
//       playPointSound()
//       return false
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleLogout = async () => {
//     try {
//       const token = localStorage.getItem("loginToken")
//       if (token) {
//         await logoutUser(token)
//       }
//       localStorage.clear()
//       setCurrentPage("login")
//       toast.success("You have been logged out successfully.")
//       navigate("/login")
//     } catch (error) {
//       console.error("Logout error:", error)
//       toast.error("Error during logout. Please try again.")
//       localStorage.clear()
//       setCurrentPage("login")
//       navigate("/login")
//     }
//   }

//   return (
//     <div className="flex items-center justify-center h-screen bg-black">
//       <Toaster position="top-center" />
//       <AnimatePresence mode="wait">
//         {currentPage === "login" ? (
//           <motion.div
//             key="login"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="w-full h-full flex items-center justify-center"
//           >
//             <LoginPage onLogin={handleLogin} loading={loading} />
//           </motion.div>
//         ) : (
//           <motion.div
//             key="dashboard"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="w-full h-full"
//           >
//             <AdminDashboard userDetails={userDetails} onLogout={handleLogout} />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }


// function OtpInput({ length = 6, value, onChange, disabled }) {
//   const [otp, setOtp] = useState(Array(length).fill(""))
//   const inputRefs = useRef([])

//   useEffect(() => {
    
//     if (value) {
//       const otpArray = value.split("").concat(Array(length).fill("")).slice(0, length)
//       setOtp(otpArray)
//     }
//   }, [value, length])

//   const handleChange = (e, index) => {
//     const { value } = e.target

//     if (value === "" || /^[0-9]$/.test(value)) {
//       const newOtp = [...otp]
//       newOtp[index] = value
//       setOtp(newOtp)

//       // Call the onChange callback with the joined OTP
//       onChange(newOtp.join(""))

//       // Move to next input if current input is filled
//       if (value !== "" && index < length - 1) {
//         inputRefs.current[index + 1].focus()
//       }
//     }
//   }

//   const handleKeyDown = (e, index) => {
//     // Move to previous input on backspace if current input is empty
//     if (e.key === "Backspace" && index > 0 && otp[index] === "") {
//       inputRefs.current[index - 1].focus()
//     }

//     // Handle paste event
//     if (e.key === "v" && (e.ctrlKey || e.metaKey)) {
//       e.preventDefault()
//       navigator.clipboard.readText().then((text) => {
//         const pastedData = text.trim().slice(0, length)
//         if (/^\d+$/.test(pastedData)) {
//           const newOtp = pastedData.split("").concat(Array(length).fill("")).slice(0, length)
//           setOtp(newOtp)
//           onChange(newOtp.join(""))

//           // Focus the next empty input or the last input
//           const nextEmptyIndex = newOtp.findIndex((val) => val === "")
//           if (nextEmptyIndex !== -1) {
//             inputRefs.current[nextEmptyIndex].focus()
//           } else {
//             inputRefs.current[length - 1].focus()
//           }
//         }
//       })
//     }
//   }

//   const handlePaste = (e, index) => {
//     e.preventDefault()
//     const pastedData = e.clipboardData
//       .getData("text")
//       .trim()
//       .slice(0, length - index)

//     if (/^\d+$/.test(pastedData)) {
//       const newOtp = [...otp]
//       for (let i = 0; i < pastedData.length; i++) {
//         if (index + i < length) {
//           newOtp[index + i] = pastedData[i]
//         }
//       }
//       setOtp(newOtp)
//       onChange(newOtp.join(""))

//       // Focus the next empty input or the last input
//       const nextEmptyIndex = newOtp.findIndex((val) => val === "")
//       if (nextEmptyIndex !== -1) {
//         inputRefs.current[nextEmptyIndex].focus()
//       } else {
//         inputRefs.current[length - 1].focus()
//       }
//     }
//   }

//   return (
//     <div className="flex justify-center gap-2 md:gap-4 w-full">
//       {Array.from({ length }, (_, index) => (
//         <motion.div
//           key={index}
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.2, delay: index * 0.05 }}
//           className="relative"
//         >
//           <input
//             ref={(el) => (inputRefs.current[index] = el)}
//             type="text"
//             inputMode="numeric"
//             maxLength={1}
//             value={otp[index]}
//             onChange={(e) => handleChange(e, index)}
//             onKeyDown={(e) => handleKeyDown(e, index)}
//             onPaste={(e) => handlePaste(e, index)}
//             disabled={disabled}
//             className="w-10 h-12 md:w-12 md:h-14 text-center text-xl font-bold border-2 rounded-md focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
//           />
//           {index < length - 1 && index % 3 === 2 && (
//             <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-400">-</div>
//           )}
//         </motion.div>
//       ))}
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
//   const [resendLoading, setResendLoading] = useState(false)
//   const [userEmail, setUserEmail] = useState("")
//   const [showPassword, setShowPassword] = useState(false)
//   const [showNewPassword, setShowNewPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!username || !password) {
//       toast.error("Please enter both email and password")
//       return
//     }

//     const success = await onLogin(username, password)

//     if (success) {
//       // Clear form fields only on success
//       setUsername("")
//       setPassword("")
//     }
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

//       if (response.data) {
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

//     if (!otp || otp.length !== 6) {
//       toast.error("Please enter a valid 6-digit OTP")
//       return
//     }

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
//       setNewPassword("")
//       setConfirmPassword("")
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Password reset failed.")
//       setPasswordError(error.response?.data?.message || "Password reset failed.")
//     } finally {
//       setResetLoading(false)
//     }
//   }

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword)
//   }

//   const toggleNewPasswordVisibility = () => {
//     setShowNewPassword(!showNewPassword)
//   }

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(!showConfirmPassword)
//   }

//   return (
//     <div className="flex w-4/5 h-auto bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="hidden md:block w-4/6 relative bg-gray-800">
//         <video className="w-full h-full object-cover" autoPlay loop muted playsInline preload="auto">
//           <source src="https://videos.pexels.com/video-files/1390942/1390942-sd_960_506_24fps.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 "></div>
//       </div>

//       <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
//         <AnimatePresence mode="wait">
//           {isLogin ? (
//             <motion.div
//               key="login-form"
//               className="w-full"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h2 className="md:text-2xl text-xl font-bold text-center mb-6">Admin Login</h2>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-lg font-medium text-gray-700">Email Address</label>
//                   <input
//                     type="email"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Enter your email"
//                     className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                     disabled={loading}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-lg font-medium text-gray-700">Password</label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? "text" : "password"}
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       placeholder="Enter your password"
//                       className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                       disabled={loading}
//                     />
//                     <button
//                       type="button"
//                       onClick={togglePasswordVisibility}
//                       className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                       disabled={loading}
//                     >
//                       {showPassword ? (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-5 w-5"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                         >
//                           <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                           <path
//                             fillRule="evenodd"
//                             d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       ) : (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-5 w-5"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
//                             clipRule="evenodd"
//                           />
//                           <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
//                         </svg>
//                       )}
//                     </button>
//                   </div>
//                 </div>
//                 <motion.button
//                   type="submit"
//                   className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-all duration-200 flex items-center justify-center"
//                   disabled={loading}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   {loading ? (
//                     <>
//                       <svg
//                         className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         ></path>
//                       </svg>
//                       Logging in...
//                     </>
//                   ) : (
//                     "Login"
//                   )}
//                 </motion.button>
//               </form>
//               <div className="text-center mt-4">
//                 <motion.button
//                   onClick={() => setIsLogin(false)}
//                   className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
//                   disabled={loading}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Forgot Password?
//                 </motion.button>
//                 <div className="mt-2">
//                   <motion.a
//                     href="https://static-page-0011.netlify.app/"
//                     className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Sign Up
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           ) : otpSent ? (
//             isOtpVerified ? (
//               <motion.div
//                 key="reset-password"
//                 className="w-full"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h2 className="text-2xl font-bold text-center mb-6">Create New Password</h2>
//                 <form onSubmit={handleResetPassword} className="space-y-4">
//                   <div>
//                     <label className="block text-lg font-medium text-gray-700">New Password</label>
//                     <div className="relative">
//                       <input
//                         type={showNewPassword ? "text" : "password"}
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         placeholder="Enter new password"
//                         className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                         disabled={resetLoading}
//                       />
//                       <button
//                         type="button"
//                         onClick={toggleNewPasswordVisibility}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                         disabled={resetLoading}
//                       >
//                         {showNewPassword ? (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                             <path
//                               fillRule="evenodd"
//                               d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         ) : (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
//                               clipRule="evenodd"
//                             />
//                             <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
//                           </svg>
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-lg font-medium text-gray-700">Confirm Password</label>
//                     <div className="relative">
//                       <input
//                         type={showConfirmPassword ? "text" : "password"}
//                         value={confirmPassword}
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                         placeholder="Confirm your password"
//                         className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                         disabled={resetLoading}
//                       />
//                       <button
//                         type="button"
//                         onClick={toggleConfirmPasswordVisibility}
//                         className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//                         disabled={resetLoading}
//                       >
//                         {showConfirmPassword ? (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                             <path
//                               fillRule="evenodd"
//                               d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         ) : (
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
//                               clipRule="evenodd"
//                             />
//                             <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
//                           </svg>
//                         )}
//                       </button>
//                     </div>
//                   </div>
//                   {passwordError && (
//                     <motion.p
//                       className="text-red-500 text-sm mt-2"
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       {passwordError}
//                     </motion.p>
//                   )}
//                   <motion.button
//                     type="submit"
//                     className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-all duration-200 flex items-center justify-center"
//                     disabled={resetLoading}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {resetLoading ? (
//                       <>
//                         <svg
//                           className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Submitting...
//                       </>
//                     ) : (
//                       "Submit"
//                     )}
//                   </motion.button>
//                 </form>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="verify-otp"
//                 className="w-full"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
//                 <p className="text-center text-gray-600 mb-4">
//                   OTP sent to <span className="font-medium">{userEmail}</span>
//                 </p>
//                 <form onSubmit={handleVerifyOtp} className="space-y-6">
//                   <div className="space-y-4">
//                     <label className="block text-lg font-medium text-gray-700 text-center">Enter 6-digit OTP</label>
//                     <OtpInput length={6} value={otp} onChange={setOtp} disabled={otpLoading || resendLoading} />
//                   </div>
//                   <motion.button
//                     type="submit"
//                     className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-all duration-200 flex items-center justify-center"
//                     disabled={otpLoading || resendLoading}
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     {otpLoading ? (
//                       <>
//                         <svg
//                           className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Verifying...
//                       </>
//                     ) : (
//                       "Verify OTP"
//                     )}
//                   </motion.button>
//                 </form>
//                 <div className="flex justify-between mt-6 w-full">
//                   <motion.button
//                     onClick={handleResendOtp}
//                     className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200 flex items-center"
//                     disabled={otpLoading || resendLoading}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     {resendLoading ? (
//                       <>
//                         <svg
//                           className="animate-spin -ml-1 mr-2 h-4 w-4 text-purple-600"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Resending...
//                       </>
//                     ) : (
//                       <>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-4 w-4 mr-1"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
//                           />
//                         </svg>
//                         Resend OTP
//                       </>
//                     )}
//                   </motion.button>
//                   <motion.button
//                     onClick={handleChangeEmail}
//                     className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
//                     disabled={otpLoading || resendLoading}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Change Email
//                   </motion.button>
//                 </div>
//               </motion.div>
//             )
//           ) : (
//             <motion.div
//               key="forgot-password"
//               className="w-full"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h2 className="text-2xl font-bold text-center mb-6">Forgot Password</h2>
//               <form onSubmit={handleForgotPasswordSubmit} className="space-y-4">
//                 <div>
//                   <label className="block text-lg font-medium text-gray-700 text-center">
//                     In order to retrieve your password, please enter <br />
//                     registered email ID
//                   </label>
//                   <input
//                     type="email"
//                     value={signupEmail}
//                     onChange={(e) => setSignupEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
//                     disabled={forgotLoading}
//                   />
//                 </div>
//                 <motion.button
//                   type="submit"
//                   className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-all duration-200 flex items-center justify-center"
//                   disabled={forgotLoading}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   {forgotLoading ? (
//                     <>
//                       <svg
//                         className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                       >
//                         <circle
//                           className="opacity-25"
//                           cx="12"
//                           cy="12"
//                           r="10"
//                           stroke="currentColor"
//                           strokeWidth="4"
//                         ></circle>
//                         <path
//                           className="opacity-75"
//                           fill="currentColor"
//                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                         ></path>
//                       </svg>
//                       Sending...
//                     </>
//                   ) : (
//                     "Send OTP"
//                   )}
//                 </motion.button>
//               </form>
//               <div className="text-center mt-4">
//                 <motion.button
//                   onClick={() => setIsLogin(true)}
//                   className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
//                   disabled={forgotLoading}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Back to Login
//                 </motion.button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   )
// }

// function AdminDashboard({ userDetails, onLogout }) {
//   const navigate = useNavigate()

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


import { useEffect, useState, useRef } from "react"
import { toast, Toaster } from "react-hot-toast"
import { motion, AnimatePresence } from "framer-motion"
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
import Blog from "../Pages/Blog"
import Banner from "../Pages/Banner"
import ManagePackage from "../Pages/ManageProducts"
import ManageProducts from "../Pages/ManageProducts"

export default function Auth() {
  const navigate = useNavigate()

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

      if (response?.data) {
        localStorage.setItem("loginToken", response.data.data.token)
        setUserDetails({
          username: email,
          role: response.data.data.role || response.data.role || "admin",
        })

        toast.success("Welcome to the Admin Dashboard.")
        setCurrentPage("adminDashboard")
        navigate("/")
        return true
      }
      return false
    } catch (error) {
      console.error("Login error:", error)
      toast.error(error.response?.data?.message || "Invalid credentials", {
        duration: 3000,
        style: {
          background: "#991b1b",
          color: "#fff",
        },
      })
      playPointSound()
      return false
    } finally {
      setLoading(false)
    }
  }

  // We'll handle logout in the Logout component directly
  const handleLogoutSuccess = () => {
    setCurrentPage("login")
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Toaster/>
      <AnimatePresence mode="wait">
        {currentPage === "login" ? (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex items-center justify-center"
          >
            <LoginPage onLogin={handleLogin} loading={loading} />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <AdminDashboard userDetails={userDetails} onLogoutSuccess={handleLogoutSuccess} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


function OtpInput({ length = 6, value, onChange, disabled }) {
  const [otp, setOtp] = useState(Array(length).fill(""))
  const inputRefs = useRef([])

  useEffect(() => {
    // Update internal state when value changes externally
    if (value) {
      const otpArray = value.split("").concat(Array(length).fill("")).slice(0, length)
      setOtp(otpArray)
    }
  }, [value, length])

  const handleChange = (e, index) => {
    const { value } = e.target

    if (value === "" || /^[0-9]$/.test(value)) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Call the onChange callback with the joined OTP
      onChange(newOtp.join(""))

      // Move to next input if current input is filled
      if (value !== "" && index < length - 1) {
        inputRefs.current[index + 1].focus()
      }
    }
  }

  const handleKeyDown = (e, index) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus()
    }

    // Handle paste event
    if (e.key === "v" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault()
      navigator.clipboard.readText().then((text) => {
        const pastedData = text.trim().slice(0, length)
        if (/^\d+$/.test(pastedData)) {
          const newOtp = pastedData.split("").concat(Array(length).fill("")).slice(0, length)
          setOtp(newOtp)
          onChange(newOtp.join(""))

          // Focus the next empty input or the last input
          const nextEmptyIndex = newOtp.findIndex((val) => val === "")
          if (nextEmptyIndex !== -1) {
            inputRefs.current[nextEmptyIndex].focus()
          } else {
            inputRefs.current[length - 1].focus()
          }
        }
      })
    }
  }

  const handlePaste = (e, index) => {
    e.preventDefault()
    const pastedData = e.clipboardData
      .getData("text")
      .trim()
      .slice(0, length - index)

    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...otp]
      for (let i = 0; i < pastedData.length; i++) {
        if (index + i < length) {
          newOtp[index + i] = pastedData[i]
        }
      }
      setOtp(newOtp)
      onChange(newOtp.join(""))

      // Focus the next empty input or the last input
      const nextEmptyIndex = newOtp.findIndex((val) => val === "")
      if (nextEmptyIndex !== -1) {
        inputRefs.current[nextEmptyIndex].focus()
      } else {
        inputRefs.current[length - 1].focus()
      }
    }
  }

  return (
    <div className="flex justify-center gap-2 md:gap-4 w-full">
      {Array.from({ length }, (_, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2, delay: index * 0.05 }}
          className="relative"
        >
          <input
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={(e) => handlePaste(e, index)}
            disabled={disabled}
            className="w-10 h-12 md:w-12 md:h-14 text-center text-xl font-bold border-2 rounded-md focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />
          {index < length - 1 && index % 3 === 2 && (
            <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-gray-400">-</div>
          )}
        </motion.div>
      ))}
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
  const [resendLoading, setResendLoading] = useState(false)
  const [userEmail, setUserEmail] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!username || !password) {
      toast.error("Please enter both email and password")
      return
    }

    const success = await onLogin(username, password)

    if (success) {
      // Clear form fields only on success
      setUsername("")
      setPassword("")
    }
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

      if (response.data) {
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

    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP")
      return
    }

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
      setNewPassword("")
      setConfirmPassword("")
    } catch (error) {
      toast.error(error.response?.data?.message || "Password reset failed.")
      setPasswordError(error.response?.data?.message || "Password reset failed.")
    } finally {
      setResetLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="flex w-4/5 h-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="hidden md:block w-4/6 relative bg-gray-800">
        <video className="w-full h-full object-cover" autoPlay loop muted playsInline preload="auto">
          <source src="https://videos.pexels.com/video-files/1390942/1390942-sd_960_506_24fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 "></div>
      </div>

      <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login-form"
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="md:text-2xl text-xl font-bold text-center mb-6">Admin Login</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700">Email Address</label>
                  <input
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                    disabled={loading}
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                      disabled={loading}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      disabled={loading}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                            clipRule="evenodd"
                          />
                          <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-all duration-200 flex items-center justify-center"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Logging in...
                    </>
                  ) : (
                    "Login"
                  )}
                </motion.button>
              </form>
              <div className="text-center mt-4">
                <motion.button
                  onClick={() => setIsLogin(false)}
                  className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Forgot Password?
                </motion.button>
                <div className="mt-2">
                  <motion.a
                    href="https://static-page-0011.netlify.app/"
                    className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ) : otpSent ? (
            isOtpVerified ? (
              <motion.div
                key="reset-password"
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-center mb-6">Create New Password</h2>
                <form onSubmit={handleResetPassword} className="space-y-4">
                  <div>
                    <label className="block text-lg font-medium text-gray-700">New Password</label>
                    <div className="relative">
                      <input
                        type={showNewPassword ? "text" : "password"}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        disabled={resetLoading}
                      />
                      <button
                        type="button"
                        onClick={toggleNewPasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        disabled={resetLoading}
                      >
                        {showNewPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                              clipRule="evenodd"
                            />
                            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700">Confirm Password</label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                        disabled={resetLoading}
                      />
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        disabled={resetLoading}
                      >
                        {showConfirmPassword ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                              clipRule="evenodd"
                            />
                            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                  {passwordError && (
                    <motion.p
                      className="text-red-500 text-sm mt-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {passwordError}
                    </motion.p>
                  )}
                  <motion.button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-all duration-200 flex items-center justify-center"
                    disabled={resetLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {resetLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="verify-otp"
                className="w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
                <p className="text-center text-gray-600 mb-4">
                  OTP sent to <span className="font-medium">{userEmail}</span>
                </p>
                <form onSubmit={handleVerifyOtp} className="space-y-6">
                  <div className="space-y-4">
                    <label className="block text-lg font-medium text-gray-700 text-center">Enter 6-digit OTP</label>
                    <OtpInput length={6} value={otp} onChange={setOtp} disabled={otpLoading || resendLoading} />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-all duration-200 flex items-center justify-center"
                    disabled={otpLoading || resendLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {otpLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Verifying...
                      </>
                    ) : (
                      "Verify OTP"
                    )}
                  </motion.button>
                </form>
                <div className="flex justify-between mt-6 w-full">
                  <motion.button
                    onClick={handleResendOtp}
                    className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200 flex items-center"
                    disabled={otpLoading || resendLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {resendLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-purple-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Resending...
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                        Resend OTP
                      </>
                    )}
                  </motion.button>
                  <motion.button
                    onClick={handleChangeEmail}
                    className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
                    disabled={otpLoading || resendLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Change Email
                  </motion.button>
                </div>
              </motion.div>
            )
          ) : (
            <motion.div
              key="forgot-password"
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
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
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                    disabled={forgotLoading}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition-all duration-200 flex items-center justify-center"
                  disabled={forgotLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {forgotLoading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send OTP"
                  )}
                </motion.button>
              </form>
              <div className="text-center mt-4">
                <motion.button
                  onClick={() => setIsLogin(true)}
                  className="text-purple-600 hover:text-purple-800 hover:underline transition-colors duration-200"
                  disabled={forgotLoading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Back to Login
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function AdminDashboard({ userDetails, onLogoutSuccess }) {
  const navigate = useNavigate()

  return (
    <div className="flex bg-gray-900 text-gray-100 overflow-hidden w-full h-full">
      <Sidebar />
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={() => {}} loading={false} />} />
        <Route path="/" element={<OverviewPages />} />
        <Route path="/users" element={<Users />} />
        <Route path="/income" element={<Income />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/logout" element={<Logout onLogoutSuccess={onLogoutSuccess} />} />
        <Route path="/help" element={<Help />} />
        <Route path ='/blog' element={<Blog/>}/>
        <Route path ='/banner' element={<Banner/>}/>
        <Route path ='/manageproducts' element={<ManageProducts/>}/>
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
