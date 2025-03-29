// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import { toast } from "react-hot-toast";
// // import {Edit,Save,Linkedin,Github,Twitter,Sun,Moon,Key,Calendar,Clock,Briefcase,Users,PieChart, LinkedinIcon, GithubIcon, TwitterIcon, InstagramIcon,} from "lucide-react";
// // import Header from "../Common/Header";
// // import { useNavigate } from "react-router-dom";

// // const Profile = () => {
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [isDarkMode, setIsDarkMode] = useState(true);
// //   const [user, setUser] = useState({
// //     name: "John",
// //     title: "Design Director at Eleventh Digital",
// //     email: "john@example.com",
// //     bio: "18+ years experience in web design and development. 12+ years in mobile app UI design.",
// //     profilePicture: "https://via.placeholder.com/150",
// //     skills: ["UI Design", "Interaction Design", "Web Development"],
// //     socialLinks: {
// //       linkedin: "#",
// //       github: "#",
// //       twitter: "#",
// //       instagram:"#",
// //     },
// //   });

// //   const [stats] = useState({
// //     monitoringTime: "1,350 mins",
// //     completionRate: "3:4",
// //     expertise: ["Interactive", "Tech", "Home"],
// //   });

// //   const [availableSessions] = useState([
// //     { date: "01 May", slots: ["8:00 PM", "9:00 PM"] },
// //     { date: "02 May", slots: [] },
// //     { date: "01 June", slots: ["10:00 AM"] },
// //     { date: "03 June", slots: ["2:00 PM", "4:00 PM"] },
// //   ]);

// //   const [password, setPassword] = useState({
// //     currentPassword: "",
// //     newPassword: "",
// //     confirmPassword: "",
// //   });

// //   const [editUser, setEditUser] = useState({ ...user });

// //   const toggleDarkMode = () => {
// //     setIsDarkMode(!isDarkMode);
// //     document.documentElement.classList.toggle("dark");
// //   };

// //   const handlePasswordUpdate = (e) => {
// //     e.preventDefault();
// //     if (password.newPassword === password.confirmPassword) {
// //       toast.success("Password updated successfully!");
// //       setPassword({
// //         currentPassword: "",
// //         newPassword: "",
// //         confirmPassword: "",
// //       });
// //     } else {
// //       toast.error("New passwords do not match!");
// //     }
// //   };

// //   const handleEdit = () => {
// //     setIsEditing(true);
// //     setEditUser({ ...user });
// //   };

// //   const handleSave = () => {
// //     setUser({ ...editUser });
// //     setIsEditing(false);
// //     toast.success("Profile updated successfully!");
// //   };

// //   const handleCancel = () => {
// //     setIsEditing(false);
// //     toast("Changes discarded", { icon: "⚠️" });
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setEditUser((prev) => ({ ...prev, [name]: value }));
// //   };

// //   return (
// //     <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
// //       <Header title="Profile" />
// //       <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-gray-50"} transition-colors duration-300 overflow-y-auto`}>
// //         <div className="container mx-auto px-4 py-8">
          
// //           <div className="flex justify-between items-start mb-8">
// //             <div>
// //               <h1 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
// //                 {user.name}
// //               </h1>
// //               <p className={`flex items-center gap-2 mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
// //                 <Briefcase className="w-5 h-5" />
// //                 {user.title}
// //               </p>
// //             </div>
// //             <div className="flex gap-4">
// //               <button
// //                 onClick={toggleDarkMode}
// //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors"
// //               >
// //                 {isDarkMode ? (
// //                   <Sun className="text-yellow-400 w-6 h-6" />
// //                 ) : (
// //                   <Moon className="text-gray-900 w-6 h-6" />
// //                 )}
// //               </button>
// //               <button
// //                 onClick={handleEdit}
// //                 className="p-2 rounded-full hover:bg-gray-700 transition-colors"
// //               >
// //                 <Edit className={`w-6 h-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`} />
// //               </button>
              
// //             </div>
// //           </div>

// //           {/* Edit Modal */}
// //           {isEditing && (
// //             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //               <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} w-full max-w-md`}>
// //                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
// //                   <Edit className="w-6 h-6" />
// //                   <span className={isDarkMode ? "text-white" : "text-gray-900"}>Edit Profile</span>
// //                 </h2>
// //                 <form className="space-y-4">
// //                   <input
// //                     type="text"
// //                     name="name"
// //                     placeholder="Name"
// //                     value={editUser.name}
// //                     onChange={handleInputChange}
// //                     className={`w-full p-3 rounded-lg ${
// //                       isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
// //                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
// //                   />
// //                   <input
// //                     type="text"
// //                     name="title"
// //                     placeholder="Title"
// //                     value={editUser.title}
// //                     onChange={handleInputChange}
// //                     className={`w-full p-3 rounded-lg ${
// //                       isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
// //                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
// //                   />
// //                   <textarea
// //                     name="bio"
// //                     placeholder="Bio"
// //                     value={editUser.bio}
// //                     onChange={handleInputChange}
// //                     className={`w-full p-3 rounded-lg ${
// //                       isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
// //                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
// //                   />
// //                   <div className="flex gap-4">
// //                     <button
// //                       type="button"
// //                       onClick={handleSave}
// //                       className="flex-1 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
// //                     >
// //                       Save
// //                     </button>
// //                     <button
// //                       type="button"
// //                       onClick={handleCancel}
// //                       className="flex-1 p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
// //                     >
// //                       Cancel
// //                     </button>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>
// //           )}

// //           {/*Profile stats*/}
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
// //             <div className="space-y-8">
              
// //               <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
// //                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
// //                   <Users className="w-6 h-6" />
// //                   <span className={isDarkMode ? "text-white" : "text-gray-900"}>Profile</span>
// //                 </h2>
// //                 <div className="flex items-center gap-4">
// //                   <img
// //                     src={user.profilePicture}
// //                     alt="Profile"
// //                     className="w-20 h-20 rounded-full"
// //                   />
// //                   <div>
// //                     <h3 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
// //                       {user.name}
// //                     </h3>
// //                     <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
// //                       {user.title}
// //                     </p>
// //                   </div>
// //                 </div>
// //                 <div className="mt-4">
// //                   <h4 className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
// //                     Skills
// //                   </h4>
// //                   <div className="flex flex-wrap gap-2 mt-2">
// //                     {user.skills.map((skill, index) => (
// //                       <span
// //                         key={index}
// //                         className={`px-3 py-1 rounded-full text-sm ${
// //                           isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"
// //                         }`}
// //                       >
// //                         {skill}
// //                       </span>
// //                     ))}
// //                   </div>
                  
// //                 </div>
// //                 <h4 className={`text-lg font-semibold mt-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
// //                     Social Links
// //                   </h4>
// //                 <div className="flex flex-wrap hover:cursor-pointer gap-2 mt-2 ">
// //                   <LinkedinIcon className="mt-2 hover:text-blue-500"/>
// //                   <GithubIcon className="mt-2 ml-5 hover:text-black"/>
// //                   <TwitterIcon className="mt-2 ml-5 hover:text-blue-500"/>
// //                   <InstagramIcon className="mt-2 ml-5 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500"/>
// //                   </div>
// //               </div>
              

// //               {/* Overview Section */}
// //               <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
// //                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
// //                   <Users className="w-6 h-6" />
// //                   <span className={isDarkMode ? "text-white" : "text-gray-900"}>Overview</span>
// //                 </h2>
// //                 <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
// //                   {user.bio}
// //                 </p>
// //               </div>

// //               {/* Profile Insights */}
// //               <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
// //                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
// //                   <PieChart className="w-6 h-6" />
// //                   <span className={isDarkMode ? "text-white" : "text-gray-900"}>Profile Insights</span>
// //                 </h2>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   <div className="p-4 bg-blue-50 rounded-xl">
// //                     <h3 className="text-sm font-medium text-blue-600">Perfect Process</h3>
// //                     <p className="text-gray-800 mt-1">Master's current and highly responsible</p>
// //                   </div>
// //                   <div className="p-4 bg-purple-50 rounded-xl">
// //                     <h3 className="text-sm font-medium text-purple-600">Top-salaried Director</h3>
// //                     <p className="text-gray-800 mt-1">Top 10% of contributors in their field</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Right Column */}
// //             <div className="space-y-8">
// //               {/* Available Sessions */}
// //               <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
// //                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
// //                   <Calendar className="w-6 h-6" />
// //                   <span className={isDarkMode ? "text-white" : "text-gray-900"}>Available Sessions</span>
// //                 </h2>
// //                 <div className="grid grid-cols-2 gap-4">
// //                   {availableSessions.map((session, index) => (
// //                     <motion.div
// //                       key={index}
// //                       whileHover={{ scale: 1.05 }}
// //                       className={`p-4 rounded-xl ${isDarkMode ? "bg-gray-700" : "bg-gray-50"} cursor-pointer`}
// //                     >
// //                       <p className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"} text-center`}>
// //                         {session.date}
// //                       </p>
// //                       <div className="mt-2 space-y-2">
// //                         {session.slots.map((slot, slotIndex) => (
// //                           <div
// //                             key={slotIndex}
// //                             className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 ${
// //                               isDarkMode ? "bg-gray-600 text-white" : "bg-white text-gray-600"
// //                             }`}
// //                           >
// //                             <Clock className="w-4 h-4" />
// //                             {slot}
// //                           </div>
// //                         ))}
// //                       </div>
// //                     </motion.div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Password Update */}
// //               <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
// //                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
// //                   <Key className="w-6 h-6" />
// //                   <span className={isDarkMode ? "text-white" : "text-gray-900"}>Update Password</span>
// //                 </h2>
// //                 <form onSubmit={handlePasswordUpdate} className="space-y-4">
// //                   <input
// //                     type="password"
// //                     placeholder="Current Password"
// //                     value={password.currentPassword}
// //                     onChange={(e) => setPassword({ ...password, currentPassword: e.target.value })}
// //                     className={`w-full p-3 rounded-lg ${
// //                       isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
// //                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
// //                     required
// //                   />
// //                   <input
// //                     type="password"
// //                     placeholder="New Password"
// //                     value={password.newPassword}
// //                     onChange={(e) => setPassword({ ...password, newPassword: e.target.value })}
// //                     className={`w-full p-3 rounded-lg ${
// //                       isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
// //                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
// //                     required
// //                   />
// //                   <input
// //                     type="password"
// //                     placeholder="Confirm New Password"
// //                     value={password.confirmPassword}
// //                     onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
// //                     className={`w-full p-3 rounded-lg ${
// //                       isDarkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
// //                     } focus:outline-none focus:ring-2 focus:ring-blue-500`}
// //                     required
// //                   />
// //                   <button
// //                     type="submit"
// //                     className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
// //                   >
// //                     Update Password
// //                   </button>
// //                 </form>
// //               </div>

// //               {/* Job Related Cards */}
// //               <div className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800" : "bg-white"} backdrop-blur-lg bg-opacity-75`}>
// //                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
// //                   <Briefcase className="w-6 h-6" />
// //                   <span className={isDarkMode ? "text-white" : "text-gray-900"}>Job Related</span>
// //                 </h2>
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                   <div className="p-4 bg-green-50 rounded-xl">
// //                     <h3 className="text-sm font-medium text-green-600">Current Projects</h3>
// //                     <p className="text-gray-800 mt-1">3 active projects</p>
// //                   </div>
// //                   <div className="p-4 bg-yellow-50 rounded-xl">
// //                     <h3 className="text-sm font-medium text-yellow-600">Pending Tasks</h3>
// //                     <p className="text-gray-800 mt-1">5 tasks to complete</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { toast } from "react-hot-toast";
// import {
//   Edit,
//   Save,
//   Linkedin,
//   Github,
//   Twitter,
//   Key,
//   Calendar,
//   Clock,
//   Briefcase,
//   Users,
//   PieChart,
//   LinkedinIcon,
//   GithubIcon,
//   TwitterIcon,
//   InstagramIcon,
//   Building,
//   User,
//   FileText,
// } from "lucide-react";
// import Header from "../Common/Header";

// const Profile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "John",
//     title: "Design Director at Eleventh Digital",
//     email: "john@example.com",
//     bio: "18+ years experience in web design and development. 12+ years in mobile app UI design.",
//     profilePicture: "https://via.placeholder.com/150",
//     skills: ["UI Design", "Interaction Design", "Web Development"],
//     socialLinks: {
//       linkedin: "#",
//       github: "#",
//       twitter: "#",
//       instagram: "#",
//     },
//     companyDetails: {
//       companyName: "Eleventh Digital",
//       companyAddress: "123 Main St, San Francisco, CA",
//       companyWebsite: "https://eleventh.digital",
//     },
//     mainPersonDetails: {
//       name: "John Doe",
//       position: "CEO",
//       email: "john.doe@eleventh.digital",
//       phone: "+1 234 567 890",
//     },
//     govtIdProof: null,
//   });

//   const [stats] = useState({
//     monitoringTime: "1,350 mins",
//     completionRate: "3:4",
//     expertise: ["Interactive", "Tech", "Home"],
//   });

//   const [availableSessions] = useState([
//     { date: "01 May", slots: ["8:00 PM", "9:00 PM"] },
//     { date: "02 May", slots: [] },
//     { date: "01 June", slots: ["10:00 AM"] },
//     { date: "03 June", slots: ["2:00 PM", "4:00 PM"] },
//   ]);

//   const [password, setPassword] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [editUser, setEditUser] = useState({ ...user });

//   const handlePasswordUpdate = (e) => {
//     e.preventDefault();
//     if (password.newPassword === password.confirmPassword) {
//       toast.success("Password updated successfully!");
//       setPassword({
//         currentPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//       });
//     } else {
//       toast.error("New passwords do not match!");
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//     setEditUser({ ...user });
//   };

//   const handleSave = () => {
//     setUser({ ...editUser });
//     setIsEditing(false);
//     toast.success("Profile updated successfully!");
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     toast("Changes discarded", { icon: "⚠️" });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditUser((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setEditUser((prev) => ({
//           ...prev,
//           govtIdProof: { file, preview: reader.result },
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
//       <Header title="Profile" />
//       <div className="min-h-screen bg-gray-900 transition-colors duration-300 overflow-y-auto">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex justify-between items-start mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-white">{user.name}</h1>
//               <p className="flex items-center gap-2 mt-2 text-gray-600">
//                 <Briefcase className="w-5 h-5" />
//                 {user.title}
//               </p>
//             </div>
//             <div className="flex gap-4">
//               <button
//                 onClick={handleEdit}
//                 className="p-2 rounded-full hover:bg-gray-700 transition-colors"
//               >
//                 <Edit className="w-6 h-6 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Edit Modal */}
//           {isEditing && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//               <div className="bg-gray-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                   <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                     <Edit className="w-6 h-6" />
//                     <span className="text-gray-100">Edit Profile</span>
//                   </h2>
//                   <form className="space-y-4">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Name"
//                       value={editUser.name}
//                       onChange={handleInputChange}
//                       className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="title"
//                       placeholder="Title"
//                       value={editUser.title}
//                       onChange={handleInputChange}
//                       className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <textarea
//                       name="bio"
//                       placeholder="Bio"
//                       value={editUser.bio}
//                       onChange={handleInputChange}
//                       className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       rows={4}
//                     />
//                     <input
//                       type="text"
//                       name="companyName"
//                       placeholder="Company Name"
//                       value={editUser.companyDetails.companyName}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           companyDetails: {
//                             ...prev.companyDetails,
//                             companyName: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="companyAddress"
//                       placeholder="Company Address"
//                       value={editUser.companyDetails.companyAddress}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           companyDetails: {
//                             ...prev.companyDetails,
//                             companyAddress: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="companyWebsite"
//                       placeholder="Company Website"
//                       value={editUser.companyDetails.companyWebsite}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           companyDetails: {
//                             ...prev.companyDetails,
//                             companyWebsite: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="mainPersonName"
//                       placeholder="Main Person Name"
//                       value={editUser.mainPersonDetails.name}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           mainPersonDetails: {
//                             ...prev.mainPersonDetails,
//                             name: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="mainPersonPosition"
//                       placeholder="Main Person Position"
//                       value={editUser.mainPersonDetails.position}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           mainPersonDetails: {
//                             ...prev.mainPersonDetails,
//                             position: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="email"
//                       name="mainPersonEmail"
//                       placeholder="Main Person Email"
//                       value={editUser.mainPersonDetails.email}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           mainPersonDetails: {
//                             ...prev.mainPersonDetails,
//                             email: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="mainPersonPhone"
//                       placeholder="Main Person Phone"
//                       value={editUser.mainPersonDetails.phone}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           mainPersonDetails: {
//                             ...prev.mainPersonDetails,
//                             phone: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm text-gray-400">
//                         Government ID Proof
//                       </label>
//                       <input
//                         type="file"
//                         onChange={handleFileChange}
//                         className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                       {editUser.govtIdProof?.preview && (
//                         <img
//                           src={editUser.govtIdProof.preview}
//                           alt="ID Proof Preview"
//                           className="mt-2 w-32 h-32 object-cover rounded-lg"
//                         />
//                       )}
//                     </div>
//                     <div className="flex gap-4">
//                       <button
//                         type="button"
//                         onClick={handleSave}
//                         className="flex-1 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                       >
//                         Save
//                       </button>
//                       <button
//                         type="button"
//                         onClick={handleCancel}
//                         className="flex-1 p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Profile stats */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="space-y-8">
//               <div className="p-6 rounded-2xl bg-gray-900  backdrop-blur-lg bg-opacity-75">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                   <Users className="w-6 h-6" />
//                   <span className="text-gray-100">Profile</span>
//                 </h2>
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={user.profilePicture}
//                     alt="Profile"
//                     className="w-20 h-20 rounded-full"
//                   />
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-100">
//                       {user.name}
//                     </h3>
//                     <p className="text-sm text-gray-400">{user.title}</p>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold text-gray-100">Skills</h4>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {user.skills.map((skill, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-800"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <h4 className="text-lg font-semibold mt-4 text-gray-100">
//                   Social Links
//                 </h4>
//                 <div className="flex flex-wrap hover:cursor-pointer gap-2 mt-2">
//                   <LinkedinIcon className="mt-2 hover:text-blue-500" />
//                   <GithubIcon className="mt-2 ml-5 hover:text-black" />
//                   <TwitterIcon className="mt-2 ml-5 hover:text-blue-500" />
//                   <InstagramIcon className="mt-2 ml-5 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500" />
//                 </div>
//               </div>

//               {/* Overview Section */}
//               <div className="p-6 rounded-2xl bg-gray-900 backdrop-blur-lg bg-opacity-75">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                   <Users className="w-6 h-6" />
//                   <span className="text-gray-100">Overview</span>
//                 </h2>
//                 <p className="text-gray-400">{user.bio}</p>
//               </div>

//               {/* Profile Insights */}
//               <div className="p-6 rounded-2xl bg-gray-900 backdrop-blur-lg bg-opacity-75">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                   <PieChart className="w-6 h-6" />
//                   <span className="text-gray-100">Profile Insights</span>
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="p-4 bg-blue-50 rounded-xl">
//                     <h3 className="text-sm font-medium text-blue-600">
//                       Perfect Process
//                     </h3>
//                     <p className="text-gray-800 mt-1">
//                       Master's current and highly responsible
//                     </p>
//                   </div>
//                   <div className="p-4 bg-purple-50 rounded-xl">
//                     <h3 className="text-sm font-medium text-purple-600">
//                       Top-salaried Director
//                     </h3>
//                     <p className="text-gray-800 mt-1">
//                       Top 10% of contributors in their field
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="space-y-8">
//               {/* Available Sessions */}
//               <div className="p-6 rounded-2xl bg-gray-900 backdrop-blur-lg bg-opacity-75">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                   <Calendar className="w-6 h-6" />
//                   <span className="text-gray-100">Available Sessions</span>
//                 </h2>
//                 <div className="grid grid-cols-2 gap-4">
//                   {availableSessions.map((session, index) => (
//                     <motion.div
//                       key={index}
//                       whileHover={{ scale: 1.05 }}
//                       className="p-4 rounded-xl bg-gray-900 cursor-pointer"
//                     >
//                       <p className="font-medium text-gray-100 text-center">
//                         {session.date}
//                       </p>
//                       <div className="mt-2 space-y-2">
//                         {session.slots.map((slot, slotIndex) => (
//                           <div
//                             key={slotIndex}
//                             className="px-3 py-1 rounded-full text-sm flex items-center gap-2 bg-gray-900 text-gray-100"
//                           >
//                             <Clock className="w-4 h-4" />
//                             {slot}
//                           </div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Password Update */}
//               <div className="p-6 rounded-2xl bg-white backdrop-blur-lg bg-opacity-75">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                   <Key className="w-6 h-6" />
//                   <span className="text-gray-900">Update Password</span>
//                 </h2>
//                 <form onSubmit={handlePasswordUpdate} className="space-y-4">
//                   <input
//                     type="password"
//                     placeholder="Current Password"
//                     value={password.currentPassword}
//                     onChange={(e) =>
//                       setPassword({ ...password, currentPassword: e.target.value })
//                     }
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                   <input
//                     type="password"
//                     placeholder="New Password"
//                     value={password.newPassword}
//                     onChange={(e) =>
//                       setPassword({ ...password, newPassword: e.target.value })
//                     }
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                   <input
//                     type="password"
//                     placeholder="Confirm New Password"
//                     value={password.confirmPassword}
//                     onChange={(e) =>
//                       setPassword({ ...password, confirmPassword: e.target.value })
//                     }
//                     className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                   >
//                     Update Password
//                   </button>
//                 </form>
//               </div>

//               {/* Job Related Cards */}
//               <div className="p-6 rounded-2xl bg-white backdrop-blur-lg bg-opacity-75">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                   <Briefcase className="w-6 h-6" />
//                   <span className="text-gray-900">Job Related</span>
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="p-4 bg-green-50 rounded-xl">
//                     <h3 className="text-sm font-medium text-green-600">
//                       Current Projects
//                     </h3>
//                     <p className="text-gray-800 mt-1">3 active projects</p>
//                   </div>
//                   <div className="p-4 bg-yellow-50 rounded-xl">
//                     <h3 className="text-sm font-medium text-yellow-600">
//                       Pending Tasks
//                     </h3>
//                     <p className="text-gray-800 mt-1">5 tasks to complete</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Company Details */}
//               <div className="p-6 rounded-2xl bg-white backdrop-blur-lg bg-opacity-75">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                   <Building className="w-6 h-6" />
//                   <span className="text-gray-900">Company Details</span>
//                 </h2>
//                 <div className="space-y-4">
//                   <p className="text-gray-600">
//                     <strong>Company Name:</strong> {user.companyDetails.companyName}
//                   </p>
//                   <p className="text-gray-600">
//                     <strong>Company Address:</strong>{" "}
//                     {user.companyDetails.companyAddress}
//                   </p>
//                   <p className="text-gray-600">
//                     <strong>Company Website:</strong>{" "}
//                     <a
//                       href={user.companyDetails.companyWebsite}
//                       className="text-blue-500 hover:underline"
//                     >
//                       {user.companyDetails.companyWebsite}
//                     </a>
//                   </p>
//                 </div>
//               </div>

//               {/* Main Person Details */}
//               <div className="p-6 rounded-2xl bg-white backdrop-blur-lg bg-opacity-75">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                   <User className="w-6 h-6" />
//                   <span className="text-gray-900">Main Person Details</span>
//                 </h2>
//                 <div className="space-y-4">
//                   <p className="text-gray-600">
//                     <strong>Name:</strong> {user.mainPersonDetails.name}
//                   </p>
//                   <p className="text-gray-600">
//                     <strong>Position:</strong> {user.mainPersonDetails.position}
//                   </p>
//                   <p className="text-gray-600">
//                     <strong>Email:</strong> {user.mainPersonDetails.email}
//                   </p>
//                   <p className="text-gray-600">
//                     <strong>Phone:</strong> {user.mainPersonDetails.phone}
//                   </p>
//                 </div>
//               </div>

//               {/* Government ID Proof */}
//               <div className="p-6 rounded-2xl bg-white backdrop-blur-lg bg-opacity-75">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                   <FileText className="w-6 h-6" />
//                   <span className="text-gray-900">Government ID Proof</span>
//                 </h2>
//                 <div className="space-y-4">
//                   {user.govtIdProof?.preview ? (
//                     <img
//                       src={user.govtIdProof.preview}
//                       alt="ID Proof Preview"
//                       className="w-32 h-32 object-cover rounded-lg"
//                     />
//                   ) : (
//                     <p className="text-gray-600">No file uploaded</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { toast } from "react-hot-toast";
// import {
//   Edit,
//   Save,
//   Linkedin,
//   Github,
//   Twitter,
//   Key,
//   Calendar,
//   Clock,
//   Briefcase,
//   Users,
//   PieChart,
//   LinkedinIcon,
//   GithubIcon,
//   TwitterIcon,
//   InstagramIcon,
//   Building,
//   User,
//   FileText,
//   Check,
//   Activity,
//   Star,
// } from "lucide-react";
// import Header from "../Common/Header";

// const Profile = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "John",
//     title: "Design Director at Eleventh Digital",
//     email: "john@example.com",
//     bio: "18+ years experience in web design and development. 12+ years in mobile app UI design.",
//     profilePicture: "https://via.placeholder.com/150",
//     skills: ["UI Design", "Interaction Design", "Web Development"],
//     socialLinks: {
//       linkedin: "#",
//       github: "#",
//       twitter: "#",
//       instagram: "#",
//     },
//     companyDetails: {
//       companyName: "Eleventh Digital",
//       companyAddress: "123 Main St, San Francisco, CA",
//       companyWebsite: "https://eleventh.digital",
//     },
//     mainPersonDetails: {
//       name: "John Doe",
//       position: "CEO",
//       email: "john.doe@eleventh.digital",
//       phone: "+1 234 567 890",
//     },
//     govtIdProof: null,
//   });

//   const [stats] = useState({
//     monitoringTime: "1,350 mins",
//     completionRate: "3:4",
//     expertise: ["Interactive", "Tech", "Home"],
//   });

//   const [availableSessions] = useState([
//     { date: "01 May", slots: ["8:00 PM", "9:00 PM"] },
//     { date: "02 May", slots: [] },
//     { date: "01 June", slots: ["10:00 AM"] },
//     { date: "03 June", slots: ["2:00 PM", "4:00 PM"] },
//   ]);

//   const [password, setPassword] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const [editUser, setEditUser] = useState({ ...user });

//   const handlePasswordUpdate = (e) => {
//     e.preventDefault();
//     if (password.newPassword === password.confirmPassword) {
//       toast.success("Password updated successfully!");
//       setPassword({
//         currentPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//       });
//     } else {
//       toast.error("New passwords do not match!");
//     }
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//     setEditUser({ ...user });
//   };

//   const handleSave = () => {
//     setUser({ ...editUser });
//     setIsEditing(false);
//     toast.success("Profile updated successfully!");
//   };

//   const handleCancel = () => {
//     setIsEditing(false);
//     toast("Changes discarded", { icon: "⚠️" });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditUser((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setEditUser((prev) => ({
//           ...prev,
//           govtIdProof: { file, preview: reader.result },
//         }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
//       <Header title="Profile" />
//       <div className="min-h-screen bg-gray-900 transition-colors duration-300 overflow-y-auto">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex justify-between items-start mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-white">{user.name}</h1>
//               <p className="flex items-center gap-2 mt-2 text-gray-400">
//                 <Briefcase className="w-5 h-5" />
//                 {user.title}
//               </p>
//             </div>
//             <div className="flex gap-4">
//               <button
//                 onClick={handleEdit}
//                 className="p-2 rounded-full hover:bg-gray-800 transition-colors"
//               >
//                 <Edit className="w-6 h-6 text-gray-400" />
//               </button>
//             </div>
//           </div>

//           {/* Edit Modal */}
//           {isEditing && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//               <div className="bg-gray-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
//                 <div className="p-6">
//                   <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
//                     <Edit className="w-6 h-6" />
//                     <span>Edit Profile</span>
//                   </h2>
//                   <form className="space-y-4">
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Name"
//                       value={editUser.name}
//                       onChange={handleInputChange}
//                       className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="title"
//                       placeholder="Title"
//                       value={editUser.title}
//                       onChange={handleInputChange}
//                       className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <textarea
//                       name="bio"
//                       placeholder="Bio"
//                       value={editUser.bio}
//                       onChange={handleInputChange}
//                       className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       rows={4}
//                     />
//                     <input
//                       type="text"
//                       name="companyName"
//                       placeholder="Company Name"
//                       value={editUser.companyDetails.companyName}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           companyDetails: {
//                             ...prev.companyDetails,
//                             companyName: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="companyAddress"
//                       placeholder="Company Address"
//                       value={editUser.companyDetails.companyAddress}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           companyDetails: {
//                             ...prev.companyDetails,
//                             companyAddress: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="companyWebsite"
//                       placeholder="Company Website"
//                       value={editUser.companyDetails.companyWebsite}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           companyDetails: {
//                             ...prev.companyDetails,
//                             companyWebsite: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="mainPersonName"
//                       placeholder="Main Person Name"
//                       value={editUser.mainPersonDetails.name}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           mainPersonDetails: {
//                             ...prev.mainPersonDetails,
//                             name: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="mainPersonPosition"
//                       placeholder="Main Person Position"
//                       value={editUser.mainPersonDetails.position}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           mainPersonDetails: {
//                             ...prev.mainPersonDetails,
//                             position: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="email"
//                       name="mainPersonEmail"
//                       placeholder="Main Person Email"
//                       value={editUser.mainPersonDetails.email}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           mainPersonDetails: {
//                             ...prev.mainPersonDetails,
//                             email: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <input
//                       type="text"
//                       name="mainPersonPhone"
//                       placeholder="Main Person Phone"
//                       value={editUser.mainPersonDetails.phone}
//                       onChange={(e) =>
//                         setEditUser((prev) => ({
//                           ...prev,
//                           mainPersonDetails: {
//                             ...prev.mainPersonDetails,
//                             phone: e.target.value,
//                           },
//                         }))
//                       }
//                       className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                     <div className="flex flex-col gap-2">
//                       <label className="text-sm text-gray-400">
//                         Government ID Proof
//                       </label>
//                       <input
//                         type="file"
//                         onChange={handleFileChange}
//                         className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                       {editUser.govtIdProof?.preview && (
//                         <img
//                           src={editUser.govtIdProof.preview}
//                           alt="ID Proof Preview"
//                           className="mt-2 w-32 h-32 object-cover rounded-lg"
//                         />
//                       )}
//                     </div>
//                     <div className="flex gap-4">
//                       <button
//                         type="button"
//                         onClick={handleSave}
//                         className="flex-1 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                       >
//                         Save
//                       </button>
//                       <button
//                         type="button"
//                         onClick={handleCancel}
//                         className="flex-1 p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Profile stats */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="space-y-8">
//               {/* Profile Card */}
//               <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
//                   <Users className="w-6 h-6" />
//                   <span>Profile</span>
//                 </h2>
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={user.profilePicture}
//                     alt="Profile"
//                     className="w-20 h-20 rounded-full"
//                   />
//                   <div>
//                     <h3 className="text-lg font-semibold text-white">
//                       {user.name}
//                     </h3>
//                     <p className="text-sm text-gray-400">{user.title}</p>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <h4 className="text-lg font-semibold text-white">Skills</h4>
//                   <div className="flex flex-wrap gap-2 mt-2">
//                     {user.skills.map((skill, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 rounded-full text-sm bg-gray-700 text-white"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <h4 className="text-lg font-semibold mt-4 text-white">
//                   Social Links
//                 </h4>
//                 <div className="flex flex-wrap hover:cursor-pointer gap-2 mt-2">
//                   <LinkedinIcon className="mt-2 hover:text-blue-500" />
//                   <GithubIcon className="mt-2 ml-5 hover:text-white" />
//                   <TwitterIcon className="mt-2 ml-5 hover:text-blue-400" />
//                   <InstagramIcon className="mt-2 ml-5 hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500" />
//                 </div>
//               </div>

//               {/* Profile Completeness */}
//               <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
//                   <Check className="w-6 h-6" />
//                   <span>Profile Completeness</span>
//                 </h2>
//                 <div className="w-full bg-gray-700 rounded-full h-2.5">
//                   <div
//                     className="bg-blue-500 h-2.5 rounded-full"
//                     style={{ width: "75%" }}
//                   ></div>
//                 </div>
//                 <p className="text-sm text-gray-400 mt-2">75% complete</p>
//               </div>

//               {/* Skill Proficiency */}
//               <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
//                   <Activity className="w-6 h-6" />
//                   <span>Skill Proficiency</span>
//                 </h2>
//                 <div className="flex justify-center">
//                   <div className="radial-progress text-blue-500" style={{ "--value": 85 }}>
//                     85%
//                   </div>
//                 </div>
//                 <p className="text-sm text-gray-400 mt-2 text-center">
//                   UI Design Mastery
//                 </p>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="space-y-8">
//               {/* Available Sessions */}
//               <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
//                   <Calendar className="w-6 h-6" />
//                   <span>Available Sessions</span>
//                 </h2>
//                 <div className="grid grid-cols-2 gap-4">
//                   {availableSessions.map((session, index) => (
//                     <motion.div
//                       key={index}
//                       whileHover={{ scale: 1.05 }}
//                       className="p-4 rounded-xl bg-gray-700 cursor-pointer"
//                     >
//                       <p className="font-medium text-white text-center">
//                         {session.date}
//                       </p>
//                       <div className="mt-2 space-y-2">
//                         {session.slots.map((slot, slotIndex) => (
//                           <div
//                             key={slotIndex}
//                             className="px-3 py-1 rounded-full text-sm flex items-center gap-2 bg-gray-600 text-white"
//                           >
//                             <Clock className="w-4 h-4" />
//                             {slot}
//                           </div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Password Update */}
//               <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
//                   <Key className="w-6 h-6" />
//                   <span>Update Password</span>
//                 </h2>
//                 <form onSubmit={handlePasswordUpdate} className="space-y-4">
//                   <input
//                     type="password"
//                     placeholder="Current Password"
//                     value={password.currentPassword}
//                     onChange={(e) =>
//                       setPassword({ ...password, currentPassword: e.target.value })
//                     }
//                     className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                   <input
//                     type="password"
//                     placeholder="New Password"
//                     value={password.newPassword}
//                     onChange={(e) =>
//                       setPassword({ ...password, newPassword: e.target.value })
//                     }
//                     className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                   <input
//                     type="password"
//                     placeholder="Confirm New Password"
//                     value={password.confirmPassword}
//                     onChange={(e) =>
//                       setPassword({ ...password, confirmPassword: e.target.value })
//                     }
//                     className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
//                   >
//                     Update Password
//                   </button>
//                 </form>
//               </div>

//               {/* Recent Activities Timeline */}
//               <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
//                 <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
//                   <Star className="w-6 h-6" />
//                   <span>Recent Activities</span>
//                 </h2>
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                     <p className="text-sm text-gray-400">
//                       Updated profile information
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                     <p className="text-sm text-gray-400">
//                       Added new skill: Interaction Design
//                     </p>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
//                     <p className="text-sm text-gray-400">
//                       Scheduled a new session for 01 June
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Edit, Save, Linkedin, Github, Twitter, Key, Calendar, Clock, Briefcase, Users, PieChart, LinkedinIcon, GithubIcon, TwitterIcon, InstagramIcon, Building, User, FileText, Check, Activity, Star, MapPin, Globe, Phone, Mail, Upload, FileCheck, AlertCircle, Info, BarChart2, Award, UserCheck, X } from 'lucide-react';
import Header from "../Common/Header";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileCompletion, setProfileCompletion] = useState(65);
  const [activeTab, setActiveTab] = useState("personal");
  
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
      instagram: "#",
    },
    companyDetails: {
      logo: null,
      name: "Eleventh Digital",
      company_description: "A leading digital design agency specializing in UI/UX and web development.",
      industry: "Design & Technology",
      company_type: "Agency",
      company_size: "50-100",
      company_location: "San Francisco, CA",
      address: "123 Main St, San Francisco, CA 94105",
      website_url: "https://eleventh.digital",
      founded_year: "2010",
    },
    mainPersonDetails: {
      person_name: "John Doe",
      person_position: "CEO",
      country_code: "+1",
      mobile: "234 567 890",
      email: "john.doe@eleventh.digital",
      user_name: "johndoe",
      strng_password: "********",
      password: "********",
    },
    verification: {
      goverment_certificate: null,
      bank_statement: null,
      tax_certificate: null,
    }
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

  useEffect(() => {
    // Calculate profile completion percentage
    let completedFields = 0;
    let totalFields = 0;
    
    // Personal details
    const personalFields = ['name', 'email', 'bio', 'profilePicture'];
    personalFields.forEach(field => {
      totalFields++;
      if (user[field]) completedFields++;
    });
    
    // Company details
    const companyFields = Object.keys(user.companyDetails);
    companyFields.forEach(field => {
      totalFields++;
      if (user.companyDetails[field]) completedFields++;
    });
    
    // Main person details
    const personFields = Object.keys(user.mainPersonDetails);
    personFields.forEach(field => {
      totalFields++;
      if (user.mainPersonDetails[field]) completedFields++;
    });
    
    // Verification
    const verificationFields = Object.keys(user.verification);
    verificationFields.forEach(field => {
      totalFields++;
      if (user.verification[field]) completedFields++;
    });
    
    const percentage = Math.round((completedFields / totalFields) * 100);
    setProfileCompletion(percentage);
  }, [user]);

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

  const handleCompanyChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      companyDetails: {
        ...prev.companyDetails,
        [name]: value,
      },
    }));
  };

  const handlePersonChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      mainPersonDetails: {
        ...prev.mainPersonDetails,
        [name]: value,
      },
    }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'logo') {
          setEditUser((prev) => ({
            ...prev,
            companyDetails: {
              ...prev.companyDetails,
              logo: { file, preview: reader.result },
            },
          }));
        } else if (type === 'government') {
          setEditUser((prev) => ({
            ...prev,
            verification: {
              ...prev.verification,
              goverment_certificate: { file, preview: reader.result },
            },
          }));
        } else if (type === 'bank') {
          setEditUser((prev) => ({
            ...prev,
            verification: {
              ...prev.verification,
              bank_statement: { file, preview: reader.result },
            },
          }));
        } else if (type === 'tax') {
          setEditUser((prev) => ({
            ...prev,
            verification: {
              ...prev.verification,
              tax_certificate: { file, preview: reader.result },
            },
          }));
        } else if (type === 'profile') {
          setEditUser((prev) => ({
            ...prev,
            profilePicture: reader.result,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Profile" />
      <div className="min-h-screen bg-gray-900 transition-colors duration-300 overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">{user.name}</h1>
              <p className="flex items-center gap-2 mt-2 text-gray-400">
                <Briefcase className="w-5 h-5" />
                {user.title}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleEdit}
                className="p-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                <Edit className="w-6 h-6 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Profile Completion Bar */}
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 shadow-lg mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-purple-400" />
                  Profile Completion
                </h3>
                <p className="text-gray-400 text-sm">Complete your profile to improve visibility</p>
              </div>
              <div className="bg-gray-700 rounded-full px-3 py-1 text-sm font-medium text-white">
                {profileCompletion}% Complete
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2.5 rounded-full"
                style={{ width: `${profileCompletion}%` }}
              ></div>
            </div>
          </div>

          {/* Profile Tabs */}
          <div className="flex mb-6 border-b border-gray-700">
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                activeTab === "personal"
                  ? "text-white border-b-2 border-purple-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <User className="w-4 h-4 inline mr-2" />
              Personal Details
            </button>
            <button
              onClick={() => setActiveTab("company")}
              className={`px-4 py-2 font-medium text-sm transition-colors ${
                activeTab === "company"
                  ? "text-white border-b-2 border-purple-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Building className="w-4 h-4 inline mr-2" />
              Company Details
            </button>
          </div>

          {/* Edit Modal */}
          {isEditing && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold flex items-center gap-2 text-white">
                      <Edit className="w-6 h-6" />
                      <span>Edit Profile</span>
                    </h2>
                    <button
                      onClick={handleCancel}
                      className="p-2 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex mb-6 border-b border-gray-700">
                    <button
                      onClick={() => setActiveTab("personal")}
                      className={`px-4 py-2 font-medium text-sm transition-colors ${
                        activeTab === "personal"
                          ? "text-white border-b-2 border-purple-500"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <User className="w-4 h-4 inline mr-2" />
                      Personal Details
                    </button>
                    <button
                      onClick={() => setActiveTab("company")}
                      className={`px-4 py-2 font-medium text-sm transition-colors ${
                        activeTab === "company"
                          ? "text-white border-b-2 border-purple-500"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <Building className="w-4 h-4 inline mr-2" />
                      Company Details
                    </button>
                  </div>

                  <form className="space-y-6">
                    {activeTab === "personal" && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-medium text-white">Personal Information</h3>
                        
                        <div className="flex flex-col items-center gap-2 mb-4">
                          <div className="relative">
                            <img
                              src={editUser.profilePicture || "/placeholder.svg"}
                              alt="Profile"
                              className="w-24 h-24 rounded-full object-cover"
                            />
                            <label className="absolute bottom-0 right-0 bg-purple-600 p-1.5 rounded-full cursor-pointer hover:bg-purple-700">
                              <Edit className="w-4 h-4 text-white" />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, 'profile')}
                                className="hidden"
                              />
                            </label>
                          </div>
                          <p className="text-sm text-gray-400">Upload profile picture</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Full Name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Full Name"
                              value={editUser.name}
                              onChange={handleInputChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Job Title</label>
                            <input
                              type="text"
                              name="title"
                              placeholder="Job Title"
                              value={editUser.title}
                              onChange={handleInputChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 mb-2 text-sm">Bio</label>
                          <textarea
                            name="bio"
                            placeholder="Bio"
                            value={editUser.bio}
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            rows={4}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Email</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={editUser.email}
                              onChange={handleInputChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Skills (comma separated)</label>
                            <input
                              type="text"
                              name="skills"
                              placeholder="Skills"
                              value={editUser.skills.join(", ")}
                              onChange={(e) => {
                                const skillsArray = e.target.value.split(",").map(skill => skill.trim());
                                setEditUser({...editUser, skills: skillsArray});
                              }}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>

                        <h3 className="text-lg font-medium text-white pt-4">Main Person Details</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Person Name</label>
                            <input
                              type="text"
                              name="person_name"
                              placeholder="Person Name"
                              value={editUser.mainPersonDetails.person_name}
                              onChange={handlePersonChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Position</label>
                            <input
                              type="text"
                              name="person_position"
                              placeholder="Position"
                              value={editUser.mainPersonDetails.person_position}
                              onChange={handlePersonChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Country Code</label>
                            <input
                              type="text"
                              name="country_code"
                              placeholder="Country Code"
                              value={editUser.mainPersonDetails.country_code}
                              onChange={handlePersonChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-gray-300 mb-2 text-sm">Mobile</label>
                            <input
                              type="text"
                              name="mobile"
                              placeholder="Mobile"
                              value={editUser.mainPersonDetails.mobile}
                              onChange={handlePersonChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Email</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={editUser.mainPersonDetails.email}
                              onChange={handlePersonChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Username</label>
                            <input
                              type="text"
                              name="user_name"
                              placeholder="Username"
                              value={editUser.mainPersonDetails.user_name}
                              onChange={handlePersonChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Password</label>
                            <input
                              type="password"
                              name="strng_password"
                              placeholder="Password"
                              value={editUser.mainPersonDetails.strng_password}
                              onChange={handlePersonChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Confirm Password</label>
                            <input
                              type="password"
                              name="password"
                              placeholder="Confirm Password"
                              value={editUser.mainPersonDetails.password}
                              onChange={handlePersonChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === "company" && (
                      <div className="space-y-6">
                        <h3 className="text-lg font-medium text-white">Company Information</h3>
                        
                        <div className="flex flex-col items-center gap-2 mb-4">
                          <div className="relative">
                            {editUser.companyDetails.logo ? (
                              <img
                                src={editUser.companyDetails.logo.preview || "/placeholder.svg"}
                                alt="Company Logo"
                                className="w-24 h-24 rounded-lg object-contain bg-gray-700 p-2"
                              />
                            ) : (
                              <div className="w-24 h-24 rounded-lg bg-gray-700 flex items-center justify-center">
                                <Building className="w-12 h-12 text-gray-500" />
                              </div>
                            )}
                            <label className="absolute bottom-0 right-0 bg-purple-600 p-1.5 rounded-full cursor-pointer hover:bg-purple-700">
                              <Edit className="w-4 h-4 text-white" />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, 'logo')}
                                className="hidden"
                              />
                            </label>
                          </div>
                          <p className="text-sm text-gray-400">Upload company logo</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Company Name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Company Name"
                              value={editUser.companyDetails.name}
                              onChange={handleCompanyChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Founded Year</label>
                            <input
                              type="text"
                              name="founded_year"
                              placeholder="Founded Year"
                              value={editUser.companyDetails.founded_year}
                              onChange={handleCompanyChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 mb-2 text-sm">Company Description</label>
                          <textarea
                            name="company_description"
                            placeholder="Company Description"
                            value={editUser.companyDetails.company_description}
                            onChange={handleCompanyChange}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            rows={4}
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Industry</label>
                            <input
                              type="text"
                              name="industry"
                              placeholder="Industry"
                              value={editUser.companyDetails.industry}
                              onChange={handleCompanyChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Company Type</label>
                            <input
                              type="text"
                              name="company_type"
                              placeholder="Company Type"
                              value={editUser.companyDetails.company_type}
                              onChange={handleCompanyChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Company Size</label>
                            <input
                              type="text"
                              name="company_size"
                              placeholder="Company Size"
                              value={editUser.companyDetails.company_size}
                              onChange={handleCompanyChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-300 mb-2 text-sm">Company Location</label>
                            <input
                              type="text"
                              name="company_location"
                              placeholder="Company Location"
                              value={editUser.companyDetails.company_location}
                              onChange={handleCompanyChange}
                              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-300 mb-2 text-sm">Address</label>
                          <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            value={editUser.companyDetails.address}
                            onChange={handleCompanyChange}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-300 mb-2 text-sm">Website URL</label>
                          <input
                            type="url"
                            name="website_url"
                            placeholder="Website URL"
                            value={editUser.companyDetails.website_url}
                            onChange={handleCompanyChange}
                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                          />
                        </div>

                        <h3 className="text-lg font-medium text-white pt-4">Verification Documents</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-white text-sm font-medium mb-2">Government Certificate</h4>
                            {editUser.verification.goverment_certificate ? (
                              <div className="relative">
                                <img
                                  src={editUser.verification.goverment_certificate.preview || "/placeholder.svg"}
                                  alt="Government Certificate"
                                  className="w-full h-32 object-cover rounded-lg"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditUser((prev) => ({
                                      ...prev,
                                      verification: {
                                        ...prev.verification,
                                        goverment_certificate: null,
                                      },
                                    }));
                                  }}
                                  className="absolute top-2 right-2 bg-red-500 p-1 rounded-full"
                                >
                                  <X className="w-4 h-4 text-white" />
                                </button>
                              </div>
                            ) : (
                              <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer hover:bg-gray-600/30">
                                <Upload className="w-8 h-8 text-gray-500 mb-2" />
                                <span className="text-sm text-gray-400">Upload Certificate</span>
                                <input
                                  type="file"
                                  accept="image/*,.pdf"
                                  onChange={(e) => handleFileChange(e, 'government')}
                                  className="hidden"
                                />
                              </label>
                            )}
                          </div>
                          
                          <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-white text-sm font-medium mb-2">Bank Statement</h4>
                            {editUser.verification.bank_statement ? (
                              <div className="relative">
                                <img
                                  src={editUser.verification.bank_statement.preview || "/placeholder.svg"}
                                  alt="Bank Statement"
                                  className="w-full h-32 object-cover rounded-lg"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditUser((prev) => ({
                                      ...prev,
                                      verification: {
                                        ...prev.verification,
                                        bank_statement: null,
                                      },
                                    }));
                                  }}
                                  className="absolute top-2 right-2 bg-red-500 p-1 rounded-full"
                                >
                                  <X className="w-4 h-4 text-white" />
                                </button>
                              </div>
                            ) : (
                              <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer hover:bg-gray-600/30">
                                <Upload className="w-8 h-8 text-gray-500 mb-2" />
                                <span className="text-sm text-gray-400">Upload Statement</span>
                                <input
                                  type="file"
                                  accept="image/*,.pdf"
                                  onChange={(e) => handleFileChange(e, 'bank')}
                                  className="hidden"
                                />
                              </label>
                            )}
                          </div>
                          
                          <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-white text-sm font-medium mb-2">Tax Certificate</h4>
                            {editUser.verification.tax_certificate ? (
                              <div className="relative">
                                <img
                                  src={editUser.verification.tax_certificate.preview || "/placeholder.svg"}
                                  alt="Tax Certificate"
                                  className="w-full h-32 object-cover rounded-lg"
                                />
                                <button
                                  type="button"
                                  onClick={() => {
                                    setEditUser((prev) => ({
                                      ...prev,
                                      verification: {
                                        ...prev.verification,
                                        tax_certificate: null,
                                      },
                                    }));
                                  }}
                                  className="absolute top-2 right-2 bg-red-500 p-1 rounded-full"
                                >
                                  <X className="w-4 h-4 text-white" />
                                </button>
                              </div>
                            ) : (
                              <label className="flex flex-col items-center justify-center h-32 border-2 border-dashed border-gray-500 rounded-lg cursor-pointer hover:bg-gray-600/30">
                                <Upload className="w-8 h-8 text-gray-500 mb-2" />
                                <span className="text-sm text-gray-400">Upload Certificate</span>
                                <input
                                  type="file"
                                  accept="image/*,.pdf"
                                  onChange={(e) => handleFileChange(e, 'tax')}
                                  className="hidden"
                                />
                              </label>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-end space-x-4 pt-4">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 font-medium"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleSave}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 font-medium"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {activeTab === "personal" && (
              <>
                {/* Left Column - Personal Details */}
                <div className="space-y-8">
                  {/* Profile Card */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <User className="w-6 h-6 text-purple-400" />
                      <span>Profile</span>
                    </h2>
                    <div className="flex items-center gap-4">
                      <img
                        src={user.profilePicture || "/placeholder.svg"}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {user.name}
                        </h3>
                        <p className="text-sm text-gray-400">{user.title}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-300 text-sm">{user.bio}</p>
                    </div>
                  </div>

                  {/* Main Person Details Card */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <UserCheck className="w-6 h-6 text-purple-400" />
                      <span>Main Person Details</span>
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
                          <User size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Name</p>
                          <p className="text-white">{user.mainPersonDetails.person_name}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
                          <Briefcase size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Position</p>
                          <p className="text-white">{user.mainPersonDetails.person_position}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
                          <Phone size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Phone</p>
                          <p className="text-white">{user.mainPersonDetails.country_code} {user.mainPersonDetails.mobile}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
                          <Mail size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="text-white">{user.mainPersonDetails.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
                          <User size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Username</p>
                          <p className="text-white">{user.mainPersonDetails.user_name}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills Card */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <Award className="w-6 h-6 text-purple-400" />
                      <span>Skills</span>
                    </h2>
                    <div>
                      <h3 className="text-white text-sm font-medium mb-2">Top Skills</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {user.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm bg-purple-900/40 text-purple-400 border border-purple-800/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="text-white text-sm font-medium mb-2">All Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {user.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full text-sm bg-gray-700 text-white"
                          >
                            {skill}
                          </span>
                        ))}
                        <span className="px-3 py-1 rounded-full text-sm bg-gray-700 text-white">HTML5</span>
                        <span className="px-3 py-1 rounded-full text-sm bg-gray-700 text-white">CSS3</span>
                        <span className="px-3 py-1 rounded-full text-sm bg-gray-700 text-white">JavaScript</span>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <Globe className="w-6 h-6 text-purple-400" />
                      <span>Social Links</span>
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                      <a href={user.socialLinks.linkedin} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                        <LinkedinIcon className="text-blue-500" />
                        <span className="text-white">LinkedIn</span>
                      </a>
                      <a href={user.socialLinks.github} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                        <GithubIcon className="text-white" />
                        <span className="text-white">GitHub</span>
                      </a>
                      <a href={user.socialLinks.twitter} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                        <TwitterIcon className="text-blue-400" />
                        <span className="text-white">Twitter</span>
                      </a>
                      <a href={user.socialLinks.instagram} className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                        <InstagramIcon className="text-pink-500" />
                        <span className="text-white">Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column - Additional Info */}
                <div className="space-y-8">
                  {/* Password Update */}
                  
                  

                  {/* Verification Status */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <FileCheck className="w-6 h-6 text-purple-400" />
                      <span>Verification Status</span>
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="text-purple-400" />
                          <span className="text-white">Government Certificate</span>
                        </div>
                        {user.verification.goverment_certificate ? (
                          <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full text-xs">Verified</span>
                        ) : (
                          <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded-full text-xs">Pending</span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="text-purple-400" />
                          <span className="text-white">Bank Statement</span>
                        </div>
                        {user.verification.bank_statement ? (
                          <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full text-xs">Verified</span>
                        ) : (
                          <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded-full text-xs">Pending</span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="text-purple-400" />
                          <span className="text-white">Tax Certificate</span>
                        </div>
                        {user.verification.tax_certificate ? (
                          <span className="px-2 py-1 bg-green-900/30 text-green-400 rounded-full text-xs">Verified</span>
                        ) : (
                          <span className="px-2 py-1 bg-yellow-900/30 text-yellow-400 rounded-full text-xs">Pending</span>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </>
            )}

            {activeTab === "company" && (
              <>
                {/* Left Column - Company Details */}
                <div className="space-y-8">
                  {/* Company Profile Card */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <Building className="w-6 h-6 text-purple-400" />
                      <span>Company Profile</span>
                    </h2>
                    <div className="flex items-center gap-4">
                      {user.companyDetails.logo ? (
                        <img
                          src={user.companyDetails.logo.preview || "/placeholder.svg"}
                          alt="Company Logo"
                          className="w-20 h-20 rounded-lg object-contain bg-gray-700 p-2"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-lg bg-gray-700 flex items-center justify-center">
                          <Building className="w-10 h-10 text-gray-500" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-white">
                          {user.companyDetails.name}
                        </h3>
                        <p className="text-sm text-gray-400">Founded: {user.companyDetails.founded_year}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-300 text-sm">{user.companyDetails.company_description}</p>
                    </div>
                  </div>

                  {/* Company Details Card */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <Info className="w-6 h-6 text-purple-400" />
                      <span>Company Details</span>
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
                          <Briefcase size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Industry</p>
                          <p className="text-white">{user.companyDetails.industry}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
                          <Building size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Company Type</p>
                          <p className="text-white">{user.companyDetails.company_type}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
                          <Users size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Company Size</p>
                          <p className="text-white">{user.companyDetails.company_size} employees</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location Card */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <MapPin className="w-6 h-6 text-purple-400" />
                      <span>Location</span>
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Location</p>
                          <p className="text-white">{user.companyDetails.company_location}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-purple-900/20 text-purple-400">
                          <MapPin size={18} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Address</p>
                          <p className="text-white">{user.companyDetails.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Website Card */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <Globe className="w-6 h-6 text-purple-400" />
                      <span>Website</span>
                    </h2>
                    <a 
                      href={user.companyDetails.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <Globe className="text-purple-400" />
                      <span className="text-white">{user.companyDetails.website_url}</span>
                    </a>
                  </div>
                </div>

                {/* Right Column - Verification */}
                <div className="space-y-8">
                  {/* Verification Documents */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <FileCheck className="w-6 h-6 text-purple-400" />
                      <span>Verification Documents</span>
                    </h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-700 rounded-lg">
                        <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-purple-400" />
                          Government Certificate
                        </h3>
                        {user.verification.goverment_certificate ? (
                          <div className="relative">
                            <img
                              src={user.verification.goverment_certificate.preview || "/placeholder.svg"}
                              alt="Government Certificate"
                              className="w-full h-40 object-cover rounded-lg"
                            />
                            <div className="absolute top-2 right-2 bg-green-500 px-2 py-1 rounded-md text-xs text-white">
                              Verified
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-500 rounded-lg">
                            <AlertCircle className="w-8 h-8 text-yellow-500 mb-2" />
                            <span className="text-sm text-gray-400">No document uploaded</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4 bg-gray-700 rounded-lg">
                        <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-purple-400" />
                          Bank Statement
                        </h3>
                        {user.verification.bank_statement ? (
                          <div className="relative">
                            <img
                              src={user.verification.bank_statement.preview || "/placeholder.svg"}
                              alt="Bank Statement"
                              className="w-full h-40 object-cover rounded-lg"
                            />
                            <div className="absolute top-2 right-2 bg-green-500 px-2 py-1 rounded-md text-xs text-white">
                              Verified
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-500 rounded-lg">
                            <AlertCircle className="w-8 h-8 text-yellow-500 mb-2" />
                            <span className="text-sm text-gray-400">No document uploaded</span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-4 bg-gray-700 rounded-lg">
                        <h3 className="text-white font-medium mb-2 flex items-center gap-2">
                          <FileText className="w-4 h-4 text-purple-400" />
                          Tax Certificate
                        </h3>
                        {user.verification.tax_certificate ? (
                          <div className="relative">
                            <img
                              src={user.verification.tax_certificate.preview || "/placeholder.svg"}
                              alt="Tax Certificate"
                              className="w-full h-40 object-cover rounded-lg"
                            />
                            <div className="absolute top-2 right-2 bg-green-500 px-2 py-1 rounded-md text-xs text-white">
                              Verified
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-gray-500 rounded-lg">
                            <AlertCircle className="w-8 h-8 text-yellow-500 mb-2" />
                            <span className="text-sm text-gray-400">No document uploaded</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Verification Status */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <Check className="w-6 h-6 text-purple-400" />
                      <span>Verification Status</span>
                    </h2>
                    <div className="bg-gray-700 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-white font-medium">Overall Status</h3>
                        <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 rounded-full text-xs">
                          In Progress
                        </span>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Government Certificate</span>
                          {user.verification.goverment_certificate ? (
                            <Check className="text-green-500" />
                          ) : (
                            <AlertCircle className="text-yellow-500" />
                          )}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Bank Statement</span>
                          {user.verification.bank_statement ? (
                            <Check className="text-green-500" />
                          ) : (
                            <AlertCircle className="text-yellow-500" />
                          )}
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Tax Certificate</span>
                          {user.verification.tax_certificate ? (
                            <Check className="text-green-500" />
                          ) : (
                            <AlertCircle className="text-yellow-500" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Company Stats */}
                  <div className="p-6 rounded-2xl bg-gray-800 backdrop-blur-lg bg-opacity-75 hover:shadow-lg transition-shadow">
                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-white">
                      <PieChart className="w-6 h-6 text-purple-400" />
                      <span>Company Stats</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-gray-400 text-sm mb-1">Founded</h3>
                        <p className="text-xl font-semibold text-white">{user.companyDetails.founded_year}</p>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-gray-400 text-sm mb-1">Team Size</h3>
                        <p className="text-xl font-semibold text-white">{user.companyDetails.company_size}</p>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-gray-400 text-sm mb-1">Industry</h3>
                        <p className="text-xl font-semibold text-white">{user.companyDetails.industry}</p>
                      </div>
                      
                      <div className="bg-gray-700 p-4 rounded-lg">
                        <h3 className="text-gray-400 text-sm mb-1">Type</h3>
                        <p className="text-xl font-semibold text-white">{user.companyDetails.company_type}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
