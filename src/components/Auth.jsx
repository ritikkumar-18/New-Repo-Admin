
import React, { useState } from "react";
import { useEffect } from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OverviewPages from "../Pages/OverviewPages";
import Products from "../Pages/Products";
import Sidebar from "./Sidebar";
import { Routes,Route } from "react-router-dom";

function Auth() {
  const [currentPage, setCurrentPage] = useState("home");
  const [role, setRole] = useState("");
  const [userDetails, setUserDetails] = useState({ username: "", role: "" });
  const [userPassword, setUserPassword] = useState({ password: ""});

  const goToLogin = (selectedRole) => {
    setRole(selectedRole);
    setCurrentPage("login");
  };

  const handleLogin = (username, password) => {
    if (role === "admin" ) {
      setUserDetails({ username, role: "admin" });
      setUserPassword({userPassword})
      setCurrentPage("adminDashboard");
      toast.success("Login successful! Welcome to the Admin Dashboard.");
    } else if (role === "customer") {
      toast.error("Only Admins can access the Admin Dashboard!");
    } else {
      toast.error("Invalid credentials!");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen  bg-gray-900 text-black">
      <ToastContainer />
      {currentPage === "home" && (
        <div className="text-center ">
          <h1 className="text-5xl font-bold mb-10 text-gray-100">Welcome </h1>
          <div className="flex space-x-20 ml-10">
          <button
            className="bg-blue-500 text-white py-2 px-6 rounded mb-4 hover:bg-blue-700"
            onClick={() => goToLogin("admin")}
          >
            Admin
          </button>
          <button
            className="bg-green-500 text-white py-2 px-6 rounded mb-4 hover:bg-green-700"
            onClick={() => goToLogin("customer")}
          >
            Customer
          </button>
          
        </div>
        </div>
      )}

      {currentPage === "login" && (
        <LoginPage
          onLogin={handleLogin}
          onBack={() => setCurrentPage("home")}
        />
      )}

      {currentPage === "adminDashboard" && <AdminDashboard userDetails={userDetails} onBack={()=>setCurrentPage("login")} />}
    </div>
  );
}

function LoginPage({ onLogin, onBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true); 
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Implement your sign-up logic here (e.g., save the user or send a request)
    toast.success("Account created successfully!");
    setIsLogin(true); // Switch back to login after successful sign-up
  };

  return (
    <div className=" relative bg-white bg-opacity-80 p-3 rounded-lg shadow-xl   mx-auto"style={{width:"28rem"}}>
      <div className="fixed top-4 left-4">
      <FaChevronCircleLeft onClick={onBack} className="cursor-pointer text-gray-100"/>
      </div>
      
      {isLogin ? (
        <>
          <h2 className="text-3xl font-bold mb-8 ">Login to your Account</h2>
          <form onSubmit={handleSubmit}>
            <label className="block mb-2 text-lg font-bold">Enter Your E-mail</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter Your E-mail"
              className="w-full mb-1 p-3 border rounded-md focus:outline-none"
            />
            <label className="block mb-2 text-lg font-bold">Enter Your Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full mb-4 p-3 border rounded-md focus:outline-none"
            />
            <button className="bg-purple-200 hover:bg-purple-400 text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
              Submit
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
            <label className="block mb-2 text-lg font-bold">Enter Your Name</label>
            <input
              type="text"
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              placeholder="Enter Your Name"
              className="w-full mb-1 p-3 border rounded-md focus:outline-none"
            />
            <label className="block mb-2 text-lg font-bold">Enter Your Email</label>
            <input
              type="email"
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="w-full mb-1 p-3 border rounded-md focus:outline-none"
            />
            <label className="block mb-2 text-lg font-bold">Enter Your Password</label>
            <input
              type="password"
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              placeholder="Enter Your Password"
              className="w-full mb-4 p-3 border rounded-md focus:outline-none"
            />
            <button className="bg-purple-200 hover:bg-purple-400 text-black hover:text-white transition-all border border-black font-bold w-full py-2 rounded-md mt-6 mb-5">
              Submit
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
    </div>
  );
}

  function AdminDashboard({onBack}) {
  

  return (
    
    <div className="flex bg-gray-900 text-gray-100 overflow-hidden mr-auto w-full  h-full mb-auto">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80">
          <div className="absolute inset-0 backdrop-blur-sm">

          </div>

        </div>
      </div>
      <Sidebar/>
      <Routes>
    
        <Route path='/'element={<OverviewPages/>}/>
        <Route path='/products'element={<Products/>}/>
      </Routes>
    </div>
  );
}


 export default Auth;
