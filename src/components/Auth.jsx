// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import OverviewPages from "../Pages/OverviewPages";
// import Users from "../Pages/Users";
// import Sidebar from "./Sidebar";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import Income from "../Pages/Income";
// import { motion } from "framer-motion";
// import Settings from "../Pages/Settings";
// import Analytics from "../Pages/Analytics";
// import Logout from "../Pages/Logout";
// import { FaCheckCircle } from "react-icons/fa";
// import { X } from "lucide-react";
// import Calender from "../Pages/Calender";
// import Email from "../Pages/Email";
// import Job from "../Pages/Job";
// import Help from "../Pages/Help";
// import TeamManagementDashboard from "../Pages/TeamManagementDashboard";
// import Application from "../Pages/Application";
// import FeedbackandReview from "../Pages/FeedbackandReview";
// import Payment from "../Pages/Payment";

// function Auth() {
//   const [currentPage, setCurrentPage] = useState("login");
//   const [userDetails, setUserDetails] = useState({ username: "", role: "" });
//   const [userPassword, setUserPassword] = useState({ password: "" });

//   const handleLogin = (username, password) => {
//     // Checking if the user is an admin
//     if (username && password) { // Any email and password combination is accepted for admin
//       setUserDetails({ username, role: "admin" });
//       setUserPassword({ password });
//       setCurrentPage("adminDashboard");
//       toast.success("Welcome to the Admin Dashboard.",);
//     } else {
//       toast.error("Invalid Credentials",{
//         icon:<X style={{ color: 'red' }} />
//       });
//     }
//   };
//   const handleLogout = () => {
//     setCurrentPage("login");  // Reset to login page
//      toast.info("You have been logged out.");
//      console.log("Login")
//   };


//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-900 text-black">
//       <ToastContainer />
//       {currentPage === "login" && (
//         <LoginPage
//           onLogin={handleLogin}
//           onBack={() => setCurrentPage("login")}
//         />
//       )}

//       {currentPage === "adminDashboard" && (
//         <AdminDashboard userDetails={userDetails} onLogout={handleLogout} />

//       )}
//     </div>
//   );
// }

// function LoginPage({ onLogin}) {
//   const navigate =useNavigate()
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLogin, setIsLogin] = useState(true);
//   const [signupName, setSignupName] = useState("");
//   const [signupEmail, setSignupEmail] = useState("");
//   const [signupPassword, setSignupPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(username, password);
//     navigate('/')
//     console.log("Hello welcome to Admin Dashboard")
//   };
//   const handleSignupSubmit = (e) => {
//     e.preventDefault();
//     toast.success("Account created successfully!", {
//       icon:<FaCheckCircle/>
//     });
  
//     setIsLogin(true); // Switch back to login after successful sign-up
//   };
  

//   return (
//     <motion.div
//       className="relative bg-white bg-opacity-80 p-3 rounded-lg shadow-xl mx-auto"	initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//       style={{ width: "28rem" }}>
//       {isLogin ? (
//         <>
//           <h2 className="text-3xl font-bold mb-8 ">Login to your Account</h2>
//           <form onSubmit={handleSubmit}>
//             <label className="block mb-2 text-lg font-bold">Username</label>
//             <input
//               type="email"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter Your E-mail"
//               className="w-full mb-1 p-3 border rounded-md focus:outline-none"
//             />
//             <label className="block mb-2 text-lg font-bold">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter Your Password"
//               className="w-full mb-4 p-3 border rounded-md focus:outline-none"
//             />
//             <button className="bg-purple-200 hover:bg-purple-400 text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
//               Login
//             </button>
//           </form>
//           <div className="text-center">
//             <label className="block mb-2 text-sm font-bold">Don't have an account?</label>
//             <button onClick={() => setIsLogin(false)} className="text-black font-bold">
//               Register
//             </button>
//           </div>
//         </>
//       ) : (
//         <>
//           <h2 className="text-3xl font-bold mb-8">Create your Account</h2>
//           <form onSubmit={handleSignupSubmit}>
//             <label className="block mb-2 text-lg font-bold">Name</label>
//             <input
//               type="text"
//               value={signupName}
//               onChange={(e) => setSignupName(e.target.value)}
//               placeholder="Enter Your Name"
//               className="w-full mb-1 p-3 border rounded-md focus:outline-none"
//             />
//             <label className="block mb-2 text-lg font-bold">E-mail</label>
//             <input
//               type="email"
//               value={signupEmail}
//               onChange={(e) => setSignupEmail(e.target.value)}
//               placeholder="Enter Your Email"
//               className="w-full mb-1 p-3 border rounded-md focus:outline-none"
//             />
//             <label className="block mb-2 text-lg font-bold"> Password</label>
//             <input
//               type="password"
//               value={signupPassword}
//               onChange={(e) => setSignupPassword(e.target.value)}
//               placeholder="Enter Your Password"
//               className="w-full mb-4 p-3 border rounded-md focus:outline-none"
//             />
//             <button className="bg-purple-200 hover:bg-purple-400 text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
//               Create Account
//             </button>
//           </form>
//           <div className="text-center">
//             <label className="block mb-2 text-sm font-bold">Already have an account?</label>
//             <button onClick={() => setIsLogin(true)} className="text-black font-bold">
//               Login
//             </button>
//           </div>
//         </>
//       )}
//     </motion.div>
//   );
// }

// function AdminDashboard({ onLogout}) {
//   return (
//     <div className="flex bg-gray-900 text-gray-100 overflow-hidden mr-auto w-full h-full mb-auto">
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80">
//           <div className="absolute inset-0 backdrop-blur-sm"></div>
//         </div>
//       </div>
//       <Sidebar />
//       <Routes>
      
//         <Route path="/" element={<OverviewPages />} />
//         <Route path="/users" element={<Users />} />
//         <Route path="/income" element={<Income />} />
//         <Route path ='/settings' element={<Settings/>}/>
//         <Route path ='/analytics' element={<Analytics/>}/>
//         <Route path ='/logout' element={<Logout onLogout={onLogout} />} /> 
//         <Route path ='/login'element={<Auth/>}/>
//         <Route path ='/calender' element={<Calender/>}/>
//         <Route path='/email' element={<Email/>}/>
//         <Route path='/job' element={<Job/>}/>
//         <Route path="/help" element={<Help/>}/>
//         <Route path='/team' element={<TeamManagementDashboard/>}/>
//         <Route path='/application' element={<Application/>}/>
//         <Route path ='/feedback' element={<FeedbackandReview/>}/>
//         <Route path ='/payment' element={<Payment/>}/>

        
//       </Routes>
//     </div>
//   );
// }

// export default Auth;
// import React, { useState } from "react";
// import { toast, Toaster } from "react-hot-toast"; 
// import { Routes, Route, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { X } from "lucide-react";
// import Sidebar from "./Sidebar";
// import OverviewPages from "../Pages/OverviewPages";
// import Users from "../Pages/Users";
// import Income from "../Pages/Income";
// import Settings from "../Pages/Settings";
// import Analytics from "../Pages/Analytics";
// import Logout from "../Pages/Logout";
// import Calender from "../Pages/Calender";
// import Email from "../Pages/Email";
// import Job from "../Pages/Job";
// import Help from "../Pages/Help";
// import TeamManagementDashboard from "../Pages/TeamManagementDashboard";
// import Application from "../Pages/Application";
// import FeedbackandReview from "../Pages/FeedbackandReview";
// import Payment from "../Pages/Payment";
// import RecruiterSidebar from "./Recruitersidebar";
// import Recruit from "../Pages/Recruit";
// import Jobopening from "../Pages/Jobopening";
// import Candidate from "../Pages/Candidate search";

// function Auth() {
//   const [currentPage, setCurrentPage] = useState("login");
//   const [userDetails, setUserDetails] = useState({ username: "", role: "" });
//   const [userPassword, setUserPassword] = useState({ password: "" });

//   const handleLogin = (username, password, role) => {
//     if (username && password && role) {
      
//       setUserDetails({ username, role });
//       setUserPassword({ password });
//       setCurrentPage(role === "admin" ? "adminDashboard" : "recruiterDashboard");
//       toast.success(`Welcome to the ${role === "admin" ? "Admin" : "Recruiter"} Dashboard.`);
//     } 
//     else {
//       toast.error("Invalid Credentials", {
//         icon: <X style={{ color: "red" }} />,
//       });
//     }
    
//   };

//   const handleLogout = () => {
//     setCurrentPage("login");
//     toast.success("You have been logged out.");
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-black">
//       <Toaster />
//       {currentPage === "login" && <LoginPage onLogin={handleLogin} />}
//       {currentPage === "adminDashboard" && (
//         <AdminDashboard userDetails={userDetails} onLogout={handleLogout} />
//       )}
//       {currentPage === "recruiterDashboard" && (
//         <RecruiterDashboard userDetails={userDetails} onLogout={handleLogout} />
//       )}
//     </div>
//   );
// }

// function LoginPage({ onLogin }) {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("admin");
//   const [signupEmail, setSignupEmail] = useState("");
//   const [isLogin, setIsLogin] = useState(true);
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState("");
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(username, password, role);
//     navigate("/");
//     setUsername("");
//     setPassword("");
//     setRole("admin");
//   };

//   const handleForgotPasswordSubmit = (e) => {
//     e.preventDefault();
//     toast.promise(
//       new Promise((resolve) => {
//         setTimeout(() => {
//           resolve("OTP sent successfully!");
//           setOtpSent(true);
//           setOtp("");
//         }, 2000);
//       }),
//       {
//         loading: "Sending OTP...",
//         success: "OTP sent successfully!",
//         error: "Failed to send OTP.",
//       }
//     );
//     setSignupEmail("");
//   };

//   const handleVerifyOtp = (e) => {
//     e.preventDefault();
//     if (otp === "1234") {
//       toast.promise(
//         new Promise((resolve) => {
//           setTimeout(() => {
//             resolve("OTP verified successfully!");
//             setIsOtpVerified(true);
//             setOtp("");
//           }, 2000);
//         }),
//         {
//           loading: "Verifying OTP...",
//           success: "OTP verified successfully!",
//           error: "Invalid OTP!",
//         }
//       );
//       setNewPassword("");
//       setConfirmPassword("")
//     } else {
//       toast.error("Invalid OTP!");
//     }
//   };

//   const handleResetPassword = (e) => {
//     e.preventDefault();
//     if (newPassword.length < 6) {
//       setPasswordError("Password must be at least 6 characters.");
//     } else if (newPassword !== confirmPassword) {
//       setPasswordError("Password does not match. Please try again.");
//     } else {
//       setPasswordError("");
//       toast.success("Password reset successfully!");
//       setIsLogin(true); // Redirect to login
//       setOtpSent(false);
//       setIsOtpVerified(false);
//     }
//   };

//   return (
//     <div className="flex w-4/5 h-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
//       <div className="hidden sm:block w-4/6 relative bg-gray-800">
//         <video className="w-full h-full object-cover" autoPlay loop muted>
//           <source
//             src="https://videos.pexels.com/video-files/1390942/1390942-sd_960_506_24fps.mp4"
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </div>

//       <div className="w-full sm:w-1/2 lg:w-3/5 flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-8">
//         {isLogin ? (
//           <motion.div
//             className="w-full"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <h2 className="sm:text-2xl xs:text-xl font-bold text-center mb-6">
//               Login to Your Account
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder="Enter your email"
//                   className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-lg font-medium text-gray-700">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <label className="block mb-2 text-lg font-bold">Role</label>
//                 <div>
//                   <label>
//                     <input
//                       type="radio"
//                       value="admin"
//                       checked={role === "admin"}
//                       onChange={() => setRole("admin")}
//                       className="mr-2"
//                     />
//                     Admin
//                   </label>
//                   <label className="ml-4">
//                     <input
//                       type="radio"
//                       value="recruiter"
//                       checked={role === "recruiter"}
//                       onChange={() => setRole("recruiter")}
//                       className="mr-2"
//                     />
//                     Recruiter
//                   </label>
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//               >
//                 Login
//               </button>
//             </form>
//             <div className="text-center mt-4">
//               <button
//                 onClick={() => setIsLogin(false)}
//                 className="text-purple-600 hover:underline"
//               >
//                 Forgot Password?
//               </button>
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
//               <h2 className="text-2xl font-bold text-center mb-6">
//                 Create New Password
//               </h2>
//               <form onSubmit={handleResetPassword} className="space-y-4">
//                 <div>
//                   <label className="block text-lg font-medium text-gray-700">
//                     New Password
//                   </label>
//                   <input
//                     type="password"
//                     value={newPassword}
//                     onChange={(e) => setNewPassword(e.target.value)}
//                     placeholder="Enter new password"
//                     className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-lg font-medium text-gray-700">
//                     Confirm Password
//                   </label>
//                   <input
//                     type="password"
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     placeholder="Confirm your password"
//                     className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//                 {passwordError && (
//                   <p className="text-red-500 text-sm mt-2">{passwordError}</p>
//                 )}
//                 <button
//                   type="submit"
//                   className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//                 >
//                   Submit
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
//               <form onSubmit={handleVerifyOtp} className="space-y-4">
//                 <div>
//                   <label className="block text-lg font-medium text-gray-700">
//                     OTP
//                   </label>
//                   <input
//                     type="text"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     placeholder="Enter the OTP"
//                     className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//                 >
//                   Verify OTP
//                 </button>
//               </form>
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
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//               >
//                 Send OTP
//               </button>
//             </form>
//             <div className="text-center mt-4">
//               <button
//                 onClick={() => setIsLogin(true)}
//                 className="text-purple-600 hover:underline"
//               >
//                 Back to Login
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
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
//         <Route path="/calender" element={<Calender />} />
//         <Route path="/email" element={<Email />} />
//         <Route path="/job" element={<Job />} />
//         <Route path="/help" element={<Help />} />
//         <Route path="/team" element={<TeamManagementDashboard />} />
//         <Route path="/application" element={<Application />} />
//         <Route path="/feedback" element={<FeedbackandReview />} />
//         <Route path="/payment" element={<Payment />} />
//       </Routes>
//     </div>
//   );
// }

// function RecruiterDashboard({ onLogout }) {
//   return (
//     <div className="flex bg-gray-900 text-gray-100 overflow-hidden w-full h-full">
//       <RecruiterSidebar />
//       <Routes>
//         <Route path="/" element={<Recruit />} />
//         <Route path="/candidate" element={<Candidate />} />
//         <Route path="/jobopening" element={<Jobopening />} />
//         <Route path="/calender" element={<Calender />} />
//         <Route path="/email" element={<Email />} />
//         <Route path="/feedback" element={<FeedbackandReview />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/logout" element={<Logout onLogout={onLogout} />} />
//       </Routes>
//     </div>
//   );
// }

// export default Auth;

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast"; 
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import RecruiterSidebar from "./Recruitersidebar";
import { Routes, Route, useNavigate } from "react-router-dom";
import OverviewPages from "../Pages/OverviewPages";
import Users from "../Pages/Users";
import Income from "../Pages/Income";
import Settings from "../Pages/Settings";
import Analytics from "../Pages/Analytics";
import Logout from "../Pages/Logout";
import Calender from "../Pages/Calender";
import Email from "../Pages/Email";
import Help from "../Pages/Help";
import TeamManagementDashboard from "../Pages/TeamManagementDashboard";
import Application from "../Pages/Application";
import FeedbackandReview from "../Pages/FeedbackandReview";
import Payment from "../Pages/Payment";
import Recruit from "../Pages/Recruit";
import Jobopening from "../Pages/Jobopening";
import Candidate from "../Pages/Candidate search";
import pointSound from '/blip.mp3';  
import Resume from "../Pages/Resume";
import Overviewrecruit from "../Pages/Overviewrecruit";

function Auth() {
  const [currentPage, setCurrentPage] = useState("login");
  const [userDetails, setUserDetails] = useState({ username: "", role: "" });
  const [userPassword, setUserPassword] = useState({ password: "" });

  const playPointSound = () => {
    const audio = new Audio(pointSound);
    audio.play();
  };

  const handleLogin = (username, password, role) => {
    if (username && password && role) {
      setUserDetails({ username, role });
      setUserPassword({ password });
      setCurrentPage(role === "admin" ? "adminDashboard" : "recruiterDashboard");
      toast.success(`Welcome to the ${role === "admin" ? "Admin" : "Recruiter"} Dashboard.`);
    } 
    else {
      toast.error("Invalid Credentials")
      playPointSound();  
    }
  };

  const handleLogout = () => {
    setCurrentPage("login");
    toast.success("You have been logged out.");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <Toaster />
      {currentPage === "login" && <LoginPage onLogin={handleLogin} />}
      {currentPage === "adminDashboard" && (
        <AdminDashboard userDetails={userDetails} onLogout={handleLogout} />
      )}
      {currentPage === "recruiterDashboard" && (
        <RecruiterDashboard userDetails={userDetails} onLogout={handleLogout} />
      )}
    </div>
  );
}

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [signupEmail, setSignupEmail] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password, role);
    navigate("/");
    setUsername("");
    setPassword("");
    setRole("admin");
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    
    // Validate email format and check if the field is not empty
    if (signupEmail === "") {
      toast.error("Email field cannot be empty.",{
        style:{
          background:"#f8d7da",
          
        }
      });
      return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signupEmail)) {
      toast.error("Invalid email format.");
      return;
    }

    // If validation passes, send the OTP
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("OTP sent successfully!");
          setOtpSent(true);
          setOtp("");
        }, 2000);
      }),
      {
        loading: "Sending OTP...",
        success: "OTP sent successfully!",
        error: "Failed to send OTP.",
      }
    );
    setSignupEmail("");
  };

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    if (otp === "1234") {
      toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve("OTP verified successfully!");
            setIsOtpVerified(true);
            setOtp("");
          }, 2000);
        }),
        {
          loading: "Verifying OTP...",
          success: "OTP verified successfully!",
          error: "Invalid OTP!",
        }
      );
      setNewPassword("");
      setConfirmPassword("");
    } else {
      toast.error("Invalid OTP!");
      playPointSound();  // Play beep sound
    }
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
    } else if (newPassword !== confirmPassword) {
      setPasswordError("Password does not match. Please try again.");
    } else {
      setPasswordError("");
      toast.success("Password reset successfully!");
      setIsLogin(true); // Redirect to login
      setOtpSent(false);
      setIsOtpVerified(false);
    }
  };

  return (
    <div className="flex w-4/5 h-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="hidden md:block w-4/6 relative bg-gray-800">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source
            src="https://videos.pexels.com/video-files/1390942/1390942-sd_960_506_24fps.mp4"
            type="video/mp4"
          />
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
            <h2 className="md:text-2xl :text-xl font-bold text-center mb-6 ">
              Login to Your Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              
              <div className="mb-4">
                <label className="block mb-2 text-lg font-bold">Role</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      value="admin"
                      checked={role === "admin"}
                      onChange={() => setRole("admin")}
                      className="mr-2"
                    />
                    Admin
                  </label>
                  <label className="ml-4">
                    <input
                      type="radio"
                      value="recruiter"
                      checked={role === "recruiter"}
                      onChange={() => setRole("recruiter")}
                      className="mr-2"
                    />
                    Recruiter
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                Login
              </button>
            </form>
            <div className="text-center mt-4">
              <button
                onClick={() => setIsLogin(false)}
                className="text-purple-600 hover:underline">
                Forgot Password?
              </button>
            </div>
          </motion.div>
        ) : otpSent ? (
          isOtpVerified ? (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}>
              <h2 className="text-2xl font-bold text-center mb-6">
                Create New Password
              </h2>
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                  Submit
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} >
              <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-lg font-medium text-gray-700">
                    OTP
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter the OTP"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                  Verify OTP
                </button>
              </form>
            </motion.div>
          )
        ) : (
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}>
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
                  className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"/>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                Send OTP
              </button>
            </form>
            <div className="text-center mt-4">
              <button
                onClick={() => setIsLogin(true)}
                className="text-purple-600 hover:underline">
                Back to Login
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
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
        <Route path="/calender" element={<Calender />} />
        <Route path="/email" element={<Email />} />
        <Route path="/help" element={<Help />} />
        <Route path="/team" element={<TeamManagementDashboard />} />
        <Route path="/application" element={<Application />} />
        <Route path="/feedback-and-review" element={<FeedbackandReview />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

function RecruiterDashboard({ onLogout }) {
  return (
    <div className="flex bg-gray-900 text-gray-100 overflow-hidden w-full h-full">
      <RecruiterSidebar />
      <Routes>
        <Route path="/" element={<Overviewrecruit/>}/>
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/job-opening" element={<Jobopening />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/jobopening" element={<Jobopening />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/resume"element={<Resume/>}/>
        <Route path="/email" element={<Email />} />
        <Route path="/feedback" element={<FeedbackandReview />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout onLogout={onLogout} />} />
      </Routes>
    </div>
  );
}

export default Auth;
