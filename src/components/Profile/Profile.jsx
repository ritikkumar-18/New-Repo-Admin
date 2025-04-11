import { useState, useEffect } from "react"
import { toast, Toaster } from "react-hot-toast"
import { motion, AnimatePresence } from "framer-motion"
import Header from "../Common/Header"
import { BsTwitterX } from "react-icons/bs";
import {Activity,AlertTriangle,Calendar,Check,Edit2,ExternalLink,Eye,EyeOff,Github,Globe,HardDrive,Linkedin,Lock,Mail,MapPin,Phone,Plus,Save,Server,Shield,User,X,} from "lucide-react"

const Profile = () => {
  
  const [adminDetails, setAdminDetails] = useState({
    avatar: "",
    coverImage:
      "https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww",
    name: "Alex Morgan",
    role: "System Administrator",
    location: "San Francisco, USA",
    joinDate: "March 2022",
    email: "alex.morgan@admin.com",
    phone: "+1 (555) 123-4567",
    username: "alex_admin",
    password: "securepassword123",
    strPassword: "••••••••••••",
    bio: "Experienced system administrator with expertise in network security, database management, and cloud infrastructure. Passionate about implementing efficient systems and solving complex technical challenges.",
    skills: [
      "System Administration",
      "Network Security",
      "Cloud Infrastructure",
      "Database Management",
      "User Management",
    ],
    socialLinks: {
      twitter: "https://twitter.com/alexmorgan",
      linkedin: "https://linkedin.com/in/alexmorgan",
      github: "https://github.com/alexmorgan",
    },
  })

  // System stats
  const [systemStats, setSystemStats] = useState({
    activeUsers: 1248,
    pendingApprovals: 37,
    systemHealth: 98,
    lastBackup: "Today, 03:45 AM",
    serverUptime: "27 days, 14 hours",
    diskUsage: 68,
    cpuUsage: 42,
    memoryUsage: 56,
    networkTraffic: 78,
  })

  // Activity log
  const [activityLog, setActivityLog] = useState([
    {
      id: 1,
      action: "User account approved",
      target: "john.doe@example.com",
      time: "Today, 10:23 AM",
      status: "success",
    },
    {
      id: 2,
      action: "System backup completed",
      target: "Database & Files",
      time: "Today, 03:45 AM",
      status: "success",
    },
    {
      id: 3,
      action: "Security alert resolved",
      target: "Login attempts",
      time: "Yesterday, 11:52 PM",
      status: "warning",
    },
    { id: 4, action: "Configuration updated", target: "Email settings", time: "Yesterday, 04:17 PM", status: "info" },
    { id: 5, action: "New admin added", target: "sarah.johnson@example.com", time: "Aug 15, 2023", status: "success" },
  ])

  // Security settings
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorAuth: true,
    loginNotifications: true,
    sessionTimeout: 30, 
    passwordExpiry: 90, 
    ipRestriction: false,
    failedLoginLockout: true,
    passwordComplexity: "high",
  })

  // Edit states
  const [editProfile, setEditProfile] = useState(false)
  const [editSecurity, setEditSecurity] = useState(false)
  const [editPassword, setEditPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState("profile") // profile, security, activity

  // Temporary states for editing
  const [tempAdminDetails, setTempAdminDetails] = useState({ ...adminDetails })
  const [tempSecuritySettings, setTempSecuritySettings] = useState({ ...securitySettings })
  const [tempPassword, setTempPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  })

  // Password strength state
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: "Weak",
    color: "bg-red-500",
  })

  // Mobile state
  const [isMobile, setIsMobile] = useState(false)

  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Update password strength when password changes
  useEffect(() => {
    if (tempPassword.new) {
      const hasUppercase = /[A-Z]/.test(tempPassword.new)
      const hasLowercase = /[a-z]/.test(tempPassword.new)
      const hasNumbers = /\d/.test(tempPassword.new)
      const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(tempPassword.new)
      const isLongEnough = tempPassword.new.length >= 8

      let score = 0
      if (hasUppercase) score++
      if (hasLowercase) score++
      if (hasNumbers) score++
      if (hasSpecialChars) score++
      if (isLongEnough) score++

      let label = "Weak"
      let color = "bg-red-500"

      if (score >= 5) {
        label = "Very Strong"
        color = "bg-green-500"
      } else if (score >= 4) {
        label = "Strong"
        color = "bg-green-400"
      } else if (score >= 3) {
        label = "Medium"
        color = "bg-yellow-500"
      } else if (score >= 2) {
        label = "Weak"
        color = "bg-orange-500"
      }

      setPasswordStrength({ score, label, color })
    } else {
      setPasswordStrength({
        score: 0,
        label: "Weak",
        color: "bg-red-500",
      })
    }
  }, [tempPassword.new])

  // Handle file upload for avatar
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setTempAdminDetails((prev) => ({ ...prev, avatar: event.target.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle file upload for cover image
  const handleCoverUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setTempAdminDetails((prev) => ({ ...prev, coverImage: event.target.result }))
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle input changes for admin details
  const handleAdminChange = (e) => {
    const { name, value } = e.target
    setTempAdminDetails((prev) => ({ ...prev, [name]: value }))
  }

  // Handle social link changes
  const handleSocialLinkChange = (platform, value) => {
    setTempAdminDetails((prev) => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value,
      },
    }))
  }

  // Handle security settings changes
  const handleSecurityChange = (e) => {
    const { name, value, type, checked } = e.target
    setTempSecuritySettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  // Handle password change
  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setTempPassword((prev) => ({ ...prev, [name]: value }))
  }

  // Save profile details
  const saveProfileDetails = () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(tempAdminDetails.email)) {
      toast.error("Please enter a valid email address")
      return
    }

    // Validate phone format (simple validation)
    const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/
    if (!phoneRegex.test(tempAdminDetails.phone)) {
      toast.error("Please enter a valid phone number")
      return
    }

    setAdminDetails({ ...tempAdminDetails })
    setEditProfile(false)
    addActivityLog("Profile details updated", "Personal information")
    toast.success("Profile details updated successfully!")
  }

  // Save security settings
  const saveSecuritySettings = () => {
    setSecuritySettings({ ...tempSecuritySettings })
    setEditSecurity(false)
    addActivityLog("Security settings updated", "Security preferences")
    toast.success("Security settings updated successfully!")
  }

  // Save password
  const savePassword = () => {
    if (tempPassword.new !== tempPassword.confirm) {
      toast.error("New passwords don't match.")
      return
    }

    if (tempPassword.current !== adminDetails.password) {
      toast.error("Current password is incorrect.")
      return
    }

    if (passwordStrength.score < 3) {
      toast.error("Password is too weak. Please choose a stronger password.")
      return
    }

    setAdminDetails((prev) => ({
      ...prev,
      password: tempPassword.new,
      strPassword: "•".repeat(tempPassword.new.length),
    }))

    setEditPassword(false)
    setTempPassword({
      current: "",
      new: "",
      confirm: "",
    })

    addActivityLog("Password changed", "Security settings")
    toast.success("Password updated successfully!")
  }

  // Cancel editing
  const cancelProfileEdit = () => {
    setTempAdminDetails({ ...adminDetails })
    setEditProfile(false)
  }

  const cancelSecurityEdit = () => {
    setTempSecuritySettings({ ...securitySettings })
    setEditSecurity(false)
  }

  const cancelPasswordEdit = () => {
    setTempPassword({
      current: "",
      new: "",
      confirm: "",
    })
    setEditPassword(false)
  }

  // Add new activity log entry
  const addActivityLog = (action, target, status = "success") => {
    const newActivity = {
      id: activityLog.length + 1,
      action,
      target,
      time: "Just now",
      status,
    }

    setActivityLog([newActivity, ...activityLog])
  }

  // Toggle two-factor authentication
  const toggleTwoFactor = () => {
    const newValue = !securitySettings.twoFactorAuth
    setSecuritySettings((prev) => ({ ...prev, twoFactorAuth: newValue }))

    if (newValue) {
      addActivityLog("Two-factor authentication enabled", "Security settings")
    } else {
      addActivityLog("Two-factor authentication disabled", "Security settings")
    }
  }

  // Format disk usage for progress bar
  const getUsageColor = (usage) => {
    if (usage < 50) return "bg-green-500"
    if (usage < 80) return "bg-yellow-500"
    return "bg-red-500"
  }

  // Calculate progress width
  const getProgressWidth = (value) => {
    return `${value}%`
  }

  // Get status color for activity log
  const getStatusColor = (status) => {
    switch (status) {
      case "success":
        return "bg-green-500"
      case "warning":
        return "bg-yellow-500"
      case "error":
        return "bg-red-500"
      case "info":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  // Get status icon for activity log
  const getStatusIcon = (status) => {
    switch (status) {
      case "success":
        return <Check className="h-4 w-4" />
      case "warning":
        return <AlertTriangle className="h-4 w-4" />
      case "error":
        return <X className="h-4 w-4" />
      case "info":
        return <Activity className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  // Simulate a system backup
  const performBackup = () => {
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          const now = new Date()
          const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
          setSystemStats((prev) => ({
            ...prev,
            lastBackup: `Today, ${formattedTime}`,
          }))
          addActivityLog("System backup completed", "Database & Files")
          resolve()
        }, 2000)
      }),
      {
        loading: "Backing up system data...",
        success: "System backup completed successfully!",
        error: "Backup failed. Please try again.",
      },
    )
  }

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen scroll-hidden">
      <Header title={"Admin Profile"} />
      <Toaster/>

      {/* Cover Image and Profile Summary */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-48 md:h-64 w-full overflow-hidden relative">
          <img
            src={adminDetails.coverImage || "/placeholder.svg?height=400&width=1200"}
            alt="Cover"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />

          {editProfile && (
            <div className="absolute bottom-4 right-4">
              <label htmlFor="cover-upload" className="cursor-pointer">
                <div className="bg-gray-800 bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition-all hover:scale-110">
                  <Edit2 className="h-5 w-5" />
                </div>
              </label>
              <input id="cover-upload" type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>

        {/* Profile Info Overlay */}
        <div className="absolute bottom-0 left-0 w-full transform translate-y-1/2 px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
            {/* Avatar */}
            <div className="relative group">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                {adminDetails.avatar ? (
                  <img
                    src={adminDetails.avatar || "/placeholder.svg"}
                    alt="Admin Avatar"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-800 object-cover shadow-lg"
                  />
                ) : (
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-800 bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center text-3xl md:text-4xl font-bold text-white shadow-lg">
                    {adminDetails.name.charAt(0)}
                  </div>
                )}
              </motion.div>

              {editProfile && (
                <div className="absolute bottom-0 right-0">
                  <label htmlFor="avatar-upload" className="cursor-pointer">
                    <div className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-all hover:scale-110 shadow-lg">
                      <Edit2 className="h-4 w-4" />
                    </div>
                  </label>
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarUpload}
                  />
                </div>
              )}
            </div>

            {/* Basic Info */}
            <div className="text-center md:text-left md:flex-1 pb-2 md:pb-4">
              <h1 className="text-2xl md:text-3xl font-bold text-white">{adminDetails.name}</h1>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 mt-1 text-gray-300">
                <span className="bg-purple-900/50 px-3 py-1 rounded-full text-sm font-medium">{adminDetails.role}</span>
                <span className="flex items-center justify-center md:justify-start gap-1 text-sm">
                  <MapPin className="h-4 w-4" />
                  {adminDetails.location}
                </span>
                <span className="flex items-center justify-center md:justify-start gap-1 text-sm">
                  <Calendar className="h-4 w-4" />
                  Joined {adminDetails.joinDate}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex gap-2">
              {!editProfile ? (
                <motion.button
                  onClick={() => setEditProfile(true)}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition flex items-center gap-2 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Edit2 className="h-4 w-4" />
                  Edit Profile
                </motion.button>
              ) : (
                <div className="flex gap-2">
                  <motion.button
                    onClick={cancelProfileEdit}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    onClick={saveProfileDetails}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition flex items-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Save className="h-4 w-4" />
                    Save Changes
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-16 md:mt-20 px-4 md:px-8 pb-8 max-w-7xl mx-auto">
        {/* Mobile Edit Button */}
        <div className="md:hidden flex justify-end mb-4">
          {!editProfile ? (
            <motion.button
              onClick={() => setEditProfile(true)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Edit2 className="h-4 w-4" />
              Edit Profile
            </motion.button>
          ) : (
            <div className="flex gap-2">
              <motion.button
                onClick={cancelProfileEdit}
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={saveProfileDetails}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition flex items-center gap-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Save className="h-4 w-4" />
                Save
              </motion.button>
            </div>
          )}
        </div>

        {/* Mobile Tab Navigation */}
        <div className="md:hidden mb-6">
          <div className="flex rounded-lg bg-gray-800 p-1">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                activeTab === "profile" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                activeTab === "security" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Security
            </button>
            <button
              onClick={() => setActiveTab("activity")}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-all ${
                activeTab === "activity" ? "bg-purple-600 text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              Activity
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Admin Info */}
          <div className={`lg:col-span-2 ${isMobile && activeTab !== "profile" ? "hidden" : ""}`}>
            {/* Admin Details Card */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6 transition-all duration-300 hover:shadow-purple-900/20">
              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center">
                  <User className="mr-2 h-5 w-5 text-purple-400" />
                  About
                </h2>
                {editProfile ? (
                  <textarea
                    name="bio"
                    value={tempAdminDetails.bio}
                    onChange={handleAdminChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 mb-4 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                    rows={4}
                  ></textarea>
                ) : (
                  <p className="text-gray-300 mb-4 leading-relaxed">{adminDetails.bio}</p>
                )}

                <div className="border-t border-gray-700 my-4"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Mail className="mr-2 h-4 w-4 text-purple-400" />
                      Contact Information
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        {editProfile ? (
                          <input
                            type="email"
                            name="email"
                            value={tempAdminDetails.email}
                            onChange={handleAdminChange}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 mt-1 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                          />
                        ) : (
                          <div className="flex items-center gap-2 text-gray-200">
                            <Mail className="h-4 w-4 text-gray-400" />
                            {adminDetails.email}
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        {editProfile ? (
                          <input
                            type="text"
                            name="phone"
                            value={tempAdminDetails.phone}
                            onChange={handleAdminChange}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 mt-1 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                          />
                        ) : (
                          <div className="flex items-center gap-2 text-gray-200">
                            <Phone className="h-4 w-4 text-gray-400" />
                            {adminDetails.phone}
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        {editProfile ? (
                          <input
                            type="text"
                            name="location"
                            value={tempAdminDetails.location}
                            onChange={handleAdminChange}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 mt-1 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                          />
                        ) : (
                          <div className="flex items-center gap-2 text-gray-200">
                            <MapPin className="h-4 w-4 text-gray-400" />
                            {adminDetails.location}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Account Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-purple-400" />
                      Account Information
                    </h3>

                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm">Username</p>
                        {editProfile ? (
                          <input
                            type="text"
                            name="username"
                            value={tempAdminDetails.username}
                            onChange={handleAdminChange}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 mt-1 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                          />
                        ) : (
                          <p className="text-gray-200">{adminDetails.username}</p>
                        )}
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm">Role</p>
                        {editProfile ? (
                          <input
                            type="text"
                            name="role"
                            value={tempAdminDetails.role}
                            onChange={handleAdminChange}
                            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 mt-1 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                          />
                        ) : (
                          <p className="text-gray-200">{adminDetails.role}</p>
                        )}
                      </div>

                      <div>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-400 text-sm">Password</p>
                          {!editPassword && !editProfile && (
                            <button
                              onClick={() => setEditPassword(true)}
                              className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                            >
                              Change
                            </button>
                          )}
                        </div>

                        {!editPassword ? (
                          <p className="text-gray-200">{adminDetails.strPassword}</p>
                        ) : (
                          <div className="space-y-3 mt-2">
                            <div className="relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                name="current"
                                placeholder="Current Password"
                                value={tempPassword.current}
                                onChange={handlePasswordChange}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all pr-10"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                            <div className="relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                name="new"
                                placeholder="New Password"
                                value={tempPassword.new}
                                onChange={handlePasswordChange}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all pr-10"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                            {tempPassword.new && (
                              <div className="space-y-1">
                                <div className="flex justify-between items-center">
                                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                      className={`h-full ${passwordStrength.color}`}
                                      style={{ width: `${passwordStrength.score * 20}%` }}
                                    ></div>
                                  </div>
                                  <span className="text-xs ml-2 min-w-[60px] text-right">{passwordStrength.label}</span>
                                </div>
                                <p className="text-xs text-gray-400">
                                  Use 8+ characters with a mix of letters, numbers & symbols
                                </p>
                              </div>
                            )}
                            <div className="relative">
                              <input
                                type={showPassword ? "text" : "password"}
                                name="confirm"
                                placeholder="Confirm Password"
                                value={tempPassword.confirm}
                                onChange={handlePasswordChange}
                                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all pr-10"
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                            <div className="flex gap-2 pt-1">
                              <motion.button
                                onClick={cancelPasswordEdit}
                                className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-md text-sm transition duration-200 text-white"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                Cancel
                              </motion.button>
                              <motion.button
                                onClick={savePassword}
                                className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded-md text-sm transition duration-200 text-white flex items-center gap-1"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Save className="h-3 w-3" />
                                Update
                              </motion.button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-700 my-4"></div>

                {/* Social Links */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Globe className="mr-2 h-4 w-4 text-purple-400" />
                    Social Links
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <BsTwitterX className="h-4 w-4 text-blue-400" />
                        <p className="text-gray-400 text-sm">Twitter</p>
                      </div>
                      {editProfile ? (
                        <input
                          type="text"
                          value={tempAdminDetails.socialLinks.twitter}
                          onChange={(e) => handleSocialLinkChange("twitter", e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                        />
                      ) : (
                        <a
                          href={adminDetails.socialLinks.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-1"
                        >
                          {adminDetails.socialLinks.twitter}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Linkedin className="h-4 w-4 text-blue-600" />
                        <p className="text-gray-400 text-sm">LinkedIn</p>
                      </div>
                      {editProfile ? (
                        <input
                          type="text"
                          value={tempAdminDetails.socialLinks.linkedin}
                          onChange={(e) => handleSocialLinkChange("linkedin", e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                        />
                      ) : (
                        <a
                          href={adminDetails.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-600 transition-colors flex items-center gap-1"
                        >
                          {adminDetails.socialLinks.linkedin}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Github className="h-4 w-4 text-gray-300" />
                        <p className="text-gray-400 text-sm">GitHub</p>
                      </div>
                      {editProfile ? (
                        <input
                          type="text"
                          value={tempAdminDetails.socialLinks.github}
                          onChange={(e) => handleSocialLinkChange("github", e.target.value)}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                        />
                      ) : (
                        <a
                          href={adminDetails.socialLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                        >
                          {adminDetails.socialLinks.github}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Activity className="mr-2 h-4 w-4 text-purple-400" />
                    Skills & Expertise
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {(editProfile ? tempAdminDetails.skills : adminDetails.skills).map((skill, index) => (
                      <motion.span
                        key={index}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {skill}
                        {editProfile && (
                          <button
                            className="ml-2 text-gray-400 hover:text-gray-200 transition-colors"
                            onClick={() => {
                              const newSkills = [...tempAdminDetails.skills]
                              newSkills.splice(index, 1)
                              setTempAdminDetails((prev) => ({ ...prev, skills: newSkills }))
                            }}
                          >
                            <X className="h-3 w-3" />
                          </button>
                        )}
                      </motion.span>
                    ))}

                    {editProfile && (
                      <motion.button
                        className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm flex items-center hover:bg-purple-600 transition-colors"
                        onClick={() => {
                          const skill = prompt("Enter new skill:")
                          if (skill && !tempAdminDetails.skills.includes(skill)) {
                            setTempAdminDetails((prev) => ({
                              ...prev,
                              skills: [...prev.skills, skill],
                            }))
                          }
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        Add Skill
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* System Stats */}
            <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6 transition-all duration-300 hover:shadow-purple-900/20">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-white flex items-center">
                    <Server className="mr-2 h-5 w-5 text-purple-400" />
                    System Overview
                  </h2>
                  <motion.button
                    onClick={performBackup}
                    className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-md transition flex items-center gap-1 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HardDrive className="h-3 w-3" />
                    Backup Now
                  </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <motion.div
                    className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Active Users</p>
                        <p className="text-2xl font-bold text-white">{systemStats.activeUsers}</p>
                      </div>
                      <div className="bg-purple-900/30 p-3 rounded-lg">
                        <User className="h-6 w-6 text-purple-400" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">Pending Approvals</p>
                        <p className="text-2xl font-bold text-white">{systemStats.pendingApprovals}</p>
                      </div>
                      <div className="bg-yellow-900/30 p-3 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-yellow-400" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">System Health</p>
                        <p className="text-2xl font-bold text-white">{systemStats.systemHealth}%</p>
                      </div>
                      <div className="bg-green-900/30 p-3 rounded-lg">
                        <Shield className="h-6 w-6 text-green-400" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-gray-400 text-sm">Disk Usage</p>
                        <p className="text-gray-400 text-sm">{systemStats.diskUsage}%</p>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className={`h-2.5 rounded-full ${getUsageColor(systemStats.diskUsage)}`}
                          style={{ width: getProgressWidth(systemStats.diskUsage) }}
                          initial={{ width: 0 }}
                          animate={{ width: getProgressWidth(systemStats.diskUsage) }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-gray-400 text-sm">CPU Usage</p>
                        <p className="text-gray-400 text-sm">{systemStats.cpuUsage}%</p>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className={`h-2.5 rounded-full ${getUsageColor(systemStats.cpuUsage)}`}
                          style={{ width: getProgressWidth(systemStats.cpuUsage) }}
                          initial={{ width: 0 }}
                          animate={{ width: getProgressWidth(systemStats.cpuUsage) }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-gray-400 text-sm">Memory Usage</p>
                        <p className="text-gray-400 text-sm">{systemStats.memoryUsage}%</p>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className={`h-2.5 rounded-full ${getUsageColor(systemStats.memoryUsage)}`}
                          style={{ width: getProgressWidth(systemStats.memoryUsage) }}
                          initial={{ width: 0 }}
                          animate={{ width: getProgressWidth(systemStats.memoryUsage) }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors">
                      <p className="text-gray-400 text-sm">Last Backup</p>
                      <p className="text-lg font-medium text-white">{systemStats.lastBackup}</p>
                    </div>

                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors">
                      <p className="text-gray-400 text-sm">Server Uptime</p>
                      <p className="text-lg font-medium text-white">{systemStats.serverUptime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Security & Activity */}
          <div className={isMobile && activeTab !== "security" && activeTab !== "activity" ? "hidden" : ""}>
            {/* Security Settings Card */}
            <div
              className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-6 transition-all duration-300 hover:shadow-purple-900/20 ${isMobile && activeTab !== "security" ? "hidden" : ""}`}
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center">
                    <Lock className="mr-2 h-5 w-5 text-purple-400" />
                    Security Settings
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">Manage your account security</p>
                </div>
                {!editSecurity ? (
                  <motion.button
                    onClick={() => setEditSecurity(true)}
                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Edit
                  </motion.button>
                ) : (
                  <div className="flex gap-2">
                    <motion.button
                      onClick={cancelSecurityEdit}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      onClick={saveSecuritySettings}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition flex items-center gap-2 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Save className="h-4 w-4" />
                      Save
                    </motion.button>
                  </div>
                )}
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Two-Factor Authentication</p>
                    <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={editSecurity ? tempSecuritySettings.twoFactorAuth : securitySettings.twoFactorAuth}
                      onChange={(e) => {
                        if (editSecurity) {
                          setTempSecuritySettings((prev) => ({ ...prev, twoFactorAuth: e.target.checked }))
                        } else {
                          toggleTwoFactor()
                        }
                      }}
                      disabled={!editSecurity}
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Login Notifications</p>
                    <p className="text-gray-400 text-sm">Receive alerts for new login attempts</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={
                        editSecurity ? tempSecuritySettings.loginNotifications : securitySettings.loginNotifications
                      }
                      onChange={(e) => {
                        if (editSecurity) {
                          setTempSecuritySettings((prev) => ({ ...prev, loginNotifications: e.target.checked }))
                        }
                      }}
                      disabled={!editSecurity}
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">IP Restriction</p>
                    <p className="text-gray-400 text-sm">Limit access to specific IP addresses</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={editSecurity ? tempSecuritySettings.ipRestriction : securitySettings.ipRestriction}
                      onChange={(e) => {
                        if (editSecurity) {
                          setTempSecuritySettings((prev) => ({ ...prev, ipRestriction: e.target.checked }))
                        }
                      }}
                      disabled={!editSecurity}
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Failed Login Lockout</p>
                    <p className="text-gray-400 text-sm">Lock account after multiple failed attempts</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={
                        editSecurity ? tempSecuritySettings.failedLoginLockout : securitySettings.failedLoginLockout
                      }
                      onChange={(e) => {
                        if (editSecurity) {
                          setTempSecuritySettings((prev) => ({ ...prev, failedLoginLockout: e.target.checked }))
                        }
                      }}
                      disabled={!editSecurity}
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                  </label>
                </div>

                <div className="pt-2">
                  <p className="text-white font-medium mb-2">Session Timeout (minutes)</p>
                  {editSecurity ? (
                    <input
                      type="number"
                      name="sessionTimeout"
                      value={tempSecuritySettings.sessionTimeout}
                      onChange={(e) =>
                        setTempSecuritySettings((prev) => ({
                          ...prev,
                          sessionTimeout: Number.parseInt(e.target.value) || 0,
                        }))
                      }
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                      min="5"
                      max="120"
                    />
                  ) : (
                    <p className="text-gray-300">{securitySettings.sessionTimeout} minutes</p>
                  )}
                </div>

                <div>
                  <p className="text-white font-medium mb-2">Password Expiry (days)</p>
                  {editSecurity ? (
                    <input
                      type="number"
                      name="passwordExpiry"
                      value={tempSecuritySettings.passwordExpiry}
                      onChange={(e) =>
                        setTempSecuritySettings((prev) => ({
                          ...prev,
                          passwordExpiry: Number.parseInt(e.target.value) || 0,
                        }))
                      }
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                      min="30"
                      max="365"
                    />
                  ) : (
                    <p className="text-gray-300">{securitySettings.passwordExpiry} days</p>
                  )}
                </div>

                <div>
                  <p className="text-white font-medium mb-2">Password Complexity</p>
                  {editSecurity ? (
                    <select
                      name="passwordComplexity"
                      value={tempSecuritySettings.passwordComplexity}
                      onChange={(e) =>
                        setTempSecuritySettings((prev) => ({
                          ...prev,
                          passwordComplexity: e.target.value,
                        }))
                      }
                      className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none transition-all"
                    >
                      <option value="low">Low - Letters only</option>
                      <option value="medium">Medium - Letters & numbers</option>
                      <option value="high">High - Letters, numbers & symbols</option>
                    </select>
                  ) : (
                    <p className="text-gray-300 capitalize">{securitySettings.passwordComplexity}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Activity Log Card */}
            <div
              className={`bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-purple-900/20  ${isMobile && activeTab !== "activity" ? "hidden" : ""}`}
            >
              <div className="p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold text-white flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-purple-400" />
                  Recent Activity
                </h2>
                <p className="text-gray-400 text-sm mt-1">Your latest actions and system events</p>
              </div>

              <div className="p-6 max-h-[400px] overflow-y-auto scroll-hidden">
                <AnimatePresence>
                  <div className="space-y-4">
                    {activityLog.map((activity) => (
                      <motion.div
                        key={activity.id}
                        className="bg-gray-700 rounded-lg p-4 hover:bg-gray-650 transition-colors"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${getStatusColor(activity.status)}`}
                            >
                              {getStatusIcon(activity.status)}
                            </div>
                            <div>
                              <p className="text-white font-medium">{activity.action}</p>
                              <p className="text-gray-400 text-sm">{activity.target}</p>
                            </div>
                          </div>
                          <span className="text-gray-400 text-xs">{activity.time}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
