
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { Edit, Briefcase, Users, PieChart, LinkedinIcon, GithubIcon,  InstagramIcon, Building, User, FileText, Check, Activity, Star, MapPin, Globe, Phone, Mail, Upload, FileCheck, AlertCircle, Info, BarChart2, Award, UserCheck, X } from 'lucide-react';
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
                        <FaXTwitter className="text-blue-400" />
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
