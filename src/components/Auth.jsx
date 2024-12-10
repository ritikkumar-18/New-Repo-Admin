import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OverviewPages from "../Pages/OverviewPages";
import Users from "../Pages/Users";
import Sidebar from "./Sidebar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Income from "../Pages/Income";
import { motion } from "framer-motion";
import Settings from "../Pages/Settings";
import Analytics from "../Pages/Analytics";
import Logout from "../Pages/Logout";
import { FaCheckCircle } from "react-icons/fa";
import { X } from "lucide-react";
import Calender from "../Pages/Calender";
import Email from "../Pages/Email";
import Job from "../Pages/Job";
import Help from "../Pages/Help";
import TeamManagementDashboard from "../Pages/TeamManagementDashboard";

function Auth() {
  const [currentPage, setCurrentPage] = useState("login");
  const [userDetails, setUserDetails] = useState({ username: "", role: "" });
  const [userPassword, setUserPassword] = useState({ password: "" });

  const handleLogin = (username, password) => {
    // Checking if the user is an admin
    if (username && password) { // Any email and password combination is accepted for admin
      setUserDetails({ username, role: "admin" });
      setUserPassword({ password });
      setCurrentPage("adminDashboard");
      toast.success("Welcome to the Admin Dashboard.",);
    } else {
      toast.error("Invalid Credentials",{
        icon:<X style={{ color: 'red' }} />
      });
    }
  };
  const handleLogout = () => {
    setCurrentPage("login");  // Reset to login page
     toast.info("You have been logged out.");
  };


  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-black">
      <ToastContainer />
      {currentPage === "login" && (
        <LoginPage
          onLogin={handleLogin}
          onBack={() => setCurrentPage("login")}
        />
      )}

      {currentPage === "adminDashboard" && (
        <AdminDashboard userDetails={userDetails} onLogout={handleLogout} />

      )}
    </div>
  );
}

function LoginPage({ onLogin}) {
  const navigate =useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
    navigate('/')
    console.log("Hello welcome to Admin Dashboard")
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    toast.success("Account created successfully!", {
      icon:<FaCheckCircle/>
    });
  
    setIsLogin(true); // Switch back to login after successful sign-up
  };
  

  return (
    <motion.div
      className="relative bg-white bg-opacity-80 p-3 rounded-lg shadow-xl mx-auto"	initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ width: "28rem" }}>
      {isLogin ? (
        <>
          <h2 className="text-3xl font-bold mb-8 ">Login to your Account</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-lg font-bold">Username</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Your E-mail"
              className="w-full mb-1 p-3 border rounded-md focus:outline-none"
            />
            <label className="block mb-2 text-lg font-bold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full mb-4 p-3 border rounded-md focus:outline-none"
            />
            <button className="bg-purple-200 hover:bg-purple-400 text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
              Login
            </button>
          </form>
          <div className="text-center">
            <label className="block mb-2 text-sm font-bold">Don't have an account?</label>
            <button onClick={() => setIsLogin(false)} className="text-black font-bold">
              Register
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-8">Create your Account</h2>
          <form onSubmit={handleSignupSubmit}>
            <label className="block mb-2 text-lg font-bold">Name</label>
            <input
              type="text"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              placeholder="Enter Your Name"
              className="w-full mb-1 p-3 border rounded-md focus:outline-none"
            />
            <label className="block mb-2 text-lg font-bold">E-mail</label>
            <input
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full mb-1 p-3 border rounded-md focus:outline-none"
            />
            <label className="block mb-2 text-lg font-bold"> Password</label>
            <input
              type="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full mb-4 p-3 border rounded-md focus:outline-none"
            />
            <button className="bg-purple-200 hover:bg-purple-400 text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
              Create Account
            </button>
          </form>
          <div className="text-center">
            <label className="block mb-2 text-sm font-bold">Already have an account?</label>
            <button onClick={() => setIsLogin(true)} className="text-black font-bold">
              Login
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}

function AdminDashboard({ onLogout}) {
  return (
    <div className="flex bg-gray-900 text-gray-100 overflow-hidden mr-auto w-full h-full mb-auto">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80">
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>
      </div>
      <Sidebar />
      <Routes>
      
        <Route path="/" element={<OverviewPages />} />
        <Route path="/users" element={<Users />} />
        <Route path="/income" element={<Income />} />
        <Route path ='/settings' element={<Settings/>}/>
        <Route path ='/analytics' element={<Analytics/>}/>
        <Route path ='/logout' element={<Logout onLogout={onLogout} />} /> 
        <Route path ='/login'element={<Auth/>}/>
        <Route path ='/calender' element={<Calender/>}/>
        <Route path='/email' element={<Email/>}/>
        <Route path='/job' element={<Job/>}/>
        <Route path="/help" element={<Help/>}/>
        <Route path='/team' element={<TeamManagementDashboard/>}/>
        
      </Routes>
    </div>
  );
}

export default Auth;
