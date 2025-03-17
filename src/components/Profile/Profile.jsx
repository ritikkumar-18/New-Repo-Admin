import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import {Edit,Save,Linkedin,Github,Twitter,Sun,Moon,Key,Calendar,Clock,Briefcase,Users,PieChart, LinkedinIcon, GithubIcon, TwitterIcon, InstagramIcon,} from "lucide-react";
import Header from "../Common/Header";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [user, setUser] = useState({
    name: "John",
    title: "Design Director at Eleventh Digital",
    email: "john@example.com",
    bio: "18+ years experience in web design and development. 12+ years in mobile app UI design.",
    profilePicture: "https://via.placeholder.com/150",
    skills: ["UI Design", "Interaction Design", "Web Development"],
    socialLinks: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      instagram:"#",
    },
  });

  const [stats] = useState({
    monitoringTime: "1,350 mins",
    completionRate: "3:4",
    expertise: ["Interactive", "Tech", "Home"],
  });

  const [availableSessions] = useState([
    { date: "01 May", slots: ["8:00 PM", "9:00 PM"] },
    { date: "02 May", slots: [] },
    { date: "01 June", slots: ["10:00 AM"] },
    { date: "03 June", slots: ["2:00 PM", "4:00 PM"] },
  ]);

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [editUser, setEditUser] = useState({ ...user });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (password.newPassword === password.confirmPassword) {
      toast.success("Password updated successfully!");
      setPassword({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } else {
      toast.error("New passwords do not match!");
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setEditUser({ ...user });
  };

  const handleSave = () => {
    setUser({ ...editUser });
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const handleCancel = () => {
    setIsEditing(false);
    toast("Changes discarded", { icon: "⚠️" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Profile" />
      <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"} transition-colors duration-300 overflow-y-auto`}>
        <div className="container mx-auto px-4 py-8">
          
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                {user.name}
              </h1>
              <p className={`flex items-center gap-2 mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                <Briefcase className="w-5 h-5" />
                {user.title}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="text-yellow-400 w-6 h-6" />
                ) : (
                  <Moon className="text-gray-900 w-6 h-6" />
                )}
              </button>
              <button
                onClick={handleEdit}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Edit className={`w-6 h-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`} />
              </button>
              
            </div>
          </div>

          {/* Edit Modal */}
          {isEditing && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} w-full max-w-md`}>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Edit className="w-6 h-6" />
                  <span className={isDarkMode ? "text-white" : "text-gray-900"}>Edit Profile</span>
                </h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={editUser.name}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg ${
                      isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={editUser.title}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg ${
                      isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <textarea
                    name="bio"
                    placeholder="Bio"
                    value={editUser.bio}
                    onChange={handleInputChange}
                    className={`w-full p-3 rounded-lg ${
                      isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={handleSave}
                      className="flex-1 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="flex-1 p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/*Profile stats*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="space-y-8">
              
              <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  <span className={isDarkMode ? "text-white" : "text-gray-900"}>Profile</span>
                </h2>
                <div className="flex items-center gap-4">
                  <img
                    src={user.profilePicture}
                    alt="Profile"
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                      {user.name}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {user.title}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    Skills
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {user.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-sm ${
                          isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                </div>
                <h4 className={`text-lg font-semibold mt-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    Social Links
                  </h4>
                <div className="flex flex-wrap hover:cursor-pointer gap-2 mt-2 ">
                  <LinkedinIcon className="mt-2 hover:text-blue-500"/>
                  <GithubIcon className="mt-2 ml-5 hover:text-black"/>
                  <TwitterIcon className="mt-2 ml-5 hover:text-blue-500"/>
                  <InstagramIcon className="mt-2 ml-5 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500"/>
                  </div>
              </div>
              

              {/* Overview Section */}
              <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  <span className={isDarkMode ? "text-white" : "text-gray-900"}>Overview</span>
                </h2>
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {user.bio}
                </p>
              </div>

              {/* Profile Insights */}
              <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <PieChart className="w-6 h-6" />
                  <span className={isDarkMode ? "text-white" : "text-gray-900"}>Profile Insights</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <h3 className="text-sm font-medium text-blue-600">Perfect Process</h3>
                    <p className="text-gray-800 mt-1">Master's current and highly responsible</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <h3 className="text-sm font-medium text-purple-600">Top-salaried Director</h3>
                    <p className="text-gray-800 mt-1">Top 10% of contributors in their field</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Available Sessions */}
              <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  <span className={isDarkMode ? "text-white" : "text-gray-900"}>Available Sessions</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {availableSessions.map((session, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className={`p-4 rounded-xl ${isDarkMode ? "bg-gray-700" : "bg-gray-50"} cursor-pointer`}
                    >
                      <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"} text-center`}>
                        {session.date}
                      </p>
                      <div className="mt-2 space-y-2">
                        {session.slots.map((slot, slotIndex) => (
                          <div
                            key={slotIndex}
                            className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${
                              isDarkMode ? "bg-gray-600 text-white" : "bg-white text-gray-600"
                            }`}
                          >
                            <Clock className="w-4 h-4" />
                            {slot}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Password Update */}
              <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Key className="w-6 h-6" />
                  <span className={isDarkMode ? "text-white" : "text-gray-900"}>Update Password</span>
                </h2>
                <form onSubmit={handlePasswordUpdate} className="space-y-4">
                  <input
                    type="password"
                    placeholder="Current Password"
                    value={password.currentPassword}
                    onChange={(e) => setPassword({ ...password, currentPassword: e.target.value })}
                    className={`w-full p-3 rounded-lg ${
                      isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    value={password.newPassword}
                    onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
                    className={`w-full p-3 rounded-lg ${
                      isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    value={password.confirmPassword}
                    onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
                    className={`w-full p-3 rounded-lg ${
                      isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    required
                  />
                  <button
                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Update Password
                  </button>
                </form>
              </div>

              {/* Job Related Cards */}
              <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6" />
                  <span className={isDarkMode ? "text-white" : "text-gray-900"}>Job Related</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-xl">
                    <h3 className="text-sm font-medium text-green-600">Current Projects</h3>
                    <p className="text-gray-800 mt-1">3 active projects</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-xl">
                    <h3 className="text-sm font-medium text-yellow-600">Pending Tasks</h3>
                    <p className="text-gray-800 mt-1">5 tasks to complete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;