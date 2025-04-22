import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { toast, Toaster } from "react-hot-toast"
import {
  Search,
  X,
  Download,
  Heart,
  ArrowUpDown,
  SlidersHorizontal,
  LayoutGrid,
  List,
  Cpu,
  Bookmark,
  Share2,
  Zap,
  Smartphone,
  Monitor,
  Speaker,
  Coffee,
  Lightbulb,
  Battery,
} from "lucide-react"
import Header from "../components/Common/Header"

const Blog = () => {
  // Sample electrical appliance photos
  const [photos, setPhotos] = useState([
    {
      id: 1,
      title: "Smart Home Hub with Connected Devices",
      url: "https://images.unsplash.com/photo-1558002038-1055907df827",
      photographer: "John Smith",
      category: "smart-home",
      tags: ["smart home", "hub", "iot", "connected", "devices"],
      downloads: 1245,
      likes: 342,
      featured: true,
    },
    {
      id: 2,
      title: "Modern LED Desk Lamp",
      url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",
      photographer: "Emma Johnson",
      category: "lighting",
      tags: ["lamp", "led", "desk", "modern", "lighting"],
      downloads: 987,
      likes: 256,
      featured: false,
    },
    {
      id: 3,
      title: "Professional DSLR Camera Setup",
      url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      photographer: "Michael Chen",
      category: "gadgets",
      tags: ["camera", "dslr", "photography", "gadget", "professional"],
      downloads: 1876,
      likes: 543,
      featured: true,
    },
    {
      id: 4,
      title: "Wireless Charging Pad with Smartphone",
      url: "https://images.unsplash.com/photo-1586953208448-b95a79798f07",
      photographer: "Sarah Williams",
      category: "gadgets",
      tags: ["wireless", "charging", "smartphone", "technology", "modern"],
      downloads: 2341,
      likes: 678,
      featured: false,
    },
    {
      id: 5,
      title: "Smart Refrigerator with Touchscreen",
      url: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5",
      photographer: "David Park",
      category: "appliances",
      tags: ["refrigerator", "smart", "kitchen", "appliance", "touchscreen"],
      downloads: 1543,
      likes: 421,
      featured: false,
    },
    {
      id: 6,
      title: "Home Office Setup with Multiple Monitors",
      url: "https://images.unsplash.com/photo-1547586696-ea22b4d4235d",
      photographer: "Jennifer Lopez",
      category: "computers",
      tags: ["office", "monitors", "computer", "workspace", "technology"],
      downloads: 876,
      likes: 198,
      featured: false,
    },
    {
      id: 7,
      title: "Smart Speaker with Voice Assistant",
      url: "https://images.unsplash.com/photo-1543512214-318c7553f230",
      photographer: "Robert Kim",
      category: "smart-home",
      tags: ["speaker", "smart", "voice", "assistant", "audio"],
      downloads: 2134,
      likes: 587,
      featured: true,
    },
    {
      id: 8,
      title: "Modern Electric Car Charging",
      url: "https://images.unsplash.com/photo-1593941707882-a5bba53b0998",
      photographer: "Amanda Chen",
      category: "automotive",
      tags: ["electric", "car", "charging", "automotive", "sustainable"],
      downloads: 1765,
      likes: 432,
      featured: false,
    },
    {
      id: 9,
      title: "Gaming PC with RGB Lighting",
      url: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7",
      photographer: "Thomas Wright",
      category: "computers",
      tags: ["gaming", "pc", "rgb", "computer", "setup"],
      downloads: 3210,
      likes: 876,
      featured: false,
    },
    {
      id: 10,
      title: "Smart Thermostat System",
      url: "https://images.unsplash.com/photo-1567030889431-5c6c9a3b7182",
      photographer: "Olivia Martinez",
      category: "smart-home",
      tags: ["thermostat", "smart", "home", "temperature", "control"],
      downloads: 2876,
      likes: 765,
      featured: true,
    },
    {
      id: 11,
      title: "Professional Audio Mixing Console",
      url: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625",
      photographer: "James Wilson",
      category: "audio",
      tags: ["audio", "mixing", "console", "professional", "studio"],
      downloads: 1432,
      likes: 321,
      featured: false,
    },
    {
      id: 12,
      title: "Modern Coffee Machine",
      url: "https://images.unsplash.com/photo-1570942872213-1242e212d760",
      photographer: "Sophia Lee",
      category: "appliances",
      tags: ["coffee", "machine", "kitchen", "appliance", "modern"],
      downloads: 2543,
      likes: 698,
      featured: false,
    },
  ])

  // State
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [sortConfig, setSortConfig] = useState({ key: "popular", direction: "descending" })
  const [featuredPhotos, setFeaturedPhotos] = useState([])
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)
  const [viewingPhoto, setViewingPhoto] = useState(null)
  const searchInputRef = useRef(null)

  // Sample categories with icons
  const categories = [
    { id: "all", name: "All Items", icon: <Zap size={20} /> },
    { id: "smart-home", name: "Smart Home", icon: <Cpu size={20} /> },
    { id: "appliances", name: "Appliances", icon: <Coffee size={20} /> },
    { id: "computers", name: "Computers", icon: <Monitor size={20} /> },
    { id: "gadgets", name: "Gadgets", icon: <Smartphone size={20} /> },
    { id: "lighting", name: "Lighting", icon: <Lightbulb size={20} /> },
    { id: "audio", name: "Audio", icon: <Speaker size={20} /> },
    { id: "automotive", name: "Automotive", icon: <Battery size={20} /> },
  ]

  // Sample trending tags
  const trendingTags = ["smart home", "wireless", "gadget", "led", "electric", "kitchen", "audio", "computer"]

  // Setup featured photos rotation
  useEffect(() => {
    const featured = photos.filter((photo) => photo.featured)
    setFeaturedPhotos(featured.length > 0 ? featured : photos.slice(0, 3))
  }, [photos])

  // Rotate featured background image every 3 seconds
  useEffect(() => {
    if (featuredPhotos.length === 0) return

    const interval = setInterval(() => {
      setCurrentFeaturedIndex((prevIndex) => (prevIndex + 1) % featuredPhotos.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [featuredPhotos])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  // Filter photos based on search term and active category
  const filteredPhotos = photos.filter((photo) => {
    const searchLower = searchTerm.toLowerCase()
    const isTitleMatch = photo.title.toLowerCase().includes(searchLower)
    const isTagsMatch = photo.tags.some((tag) => tag.toLowerCase().includes(searchLower))
    const isPhotographerMatch = photo.photographer.toLowerCase().includes(searchLower)

    const isCategoryMatch = activeCategory === "all" || photo.category === activeCategory

    return (isTitleMatch || isTagsMatch || isPhotographerMatch) && isCategoryMatch
  })

  // Sort photos
  const sortedPhotos = [...filteredPhotos].sort((a, b) => {
    if (sortConfig.key === "popular") {
      return sortConfig.direction === "ascending" ? a.likes - b.likes : b.likes - a.likes
    } else if (sortConfig.key === "downloads") {
      return sortConfig.direction === "ascending" ? a.downloads - b.downloads : b.downloads - a.downloads
    } else if (sortConfig.key === "title") {
      return sortConfig.direction === "ascending" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    }
    return 0
  })

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
  }

  // Handle download
  const handleDownload = (photoId) => {
    toast.success("Download started!")
  }

  // Handle like
  const handleLike = (photoId) => {
    setPhotos(photos.map((photo) => (photo.id === photoId ? { ...photo, likes: photo.likes + 1 } : photo)))
    toast.success("Added to favorites!")
  }

  // Open photo detail view
  const openPhotoDetail = (photo) => {
    setViewingPhoto(photo)
  }

  // Close photo detail view
  const closePhotoDetail = () => {
    setViewingPhoto(null)
  }

  // Get current featured photo
  const currentFeaturedPhoto = featuredPhotos[currentFeaturedIndex] || photos[0]

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white scroll-hidden">
       <Header title="Blogs" />
       <Toaster/>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-t-2 border-b-2 border-purple-500 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-r-2 border-l-2 border-indigo-500 animate-spin animation-delay-150"></div>
              <div className="absolute inset-4 rounded-full border-t-2 border-b-2 border-blue-500 animate-spin animation-delay-300"></div>
            </div>
            <p className="mt-4 text-lg text-purple-300 font-medium">Loading photos...</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative">
        {/* Background Image with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFeaturedPhoto?.id}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div
              className="w-full h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: `url(${currentFeaturedPhoto?.url || "https://images.unsplash.com/photo-1558002038-1055907df827"})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900"></div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 pt-16 pb-12 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Electrical Stock Photos
          </motion.h1>
          <motion.p
            className="text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Free high-quality images of electrical appliances and gadgets
          </motion.p>

          {/* Search Bar */}
          <motion.div
            className="max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search electrical photos..."
                className="w-full py-3 pl-10 pr-4 rounded-lg bg-white text-gray-900 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
              />
              <Search className="absolute left-3 top-3.5 text-gray-500" size={18} />
              {searchTerm && (
                <motion.button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-gray-700"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={18} />
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Trending Tags */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-sm text-gray-300 mr-1">Trending:</span>
            {trendingTags.map((tag, index) => (
              <motion.button
                key={index}
                onClick={() => setSearchTerm(tag)}
                className="px-3 py-1 bg-gray-800/50 hover:bg-purple-600/50 text-gray-300 hover:text-white rounded-full text-sm transition-colors border border-gray-700/50 hover:border-purple-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Featured Photo Credit */}
        <div className="relative z-10 container mx-auto px-4 pb-4">
          <div className="flex justify-between items-center">
            <div className="text-xs text-gray-400">
              Featured photo by {currentFeaturedPhoto?.photographer || "Unknown"}
            </div>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${
                activeCategory === category.id ? "ring-2 ring-purple-500" : "hover:ring-2 hover:ring-purple-500/50"
              }`}
              onClick={() => handleCategoryChange(category.id)}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div
                className="h-20 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    photos.find((photo) => photo.category === category.id)?.url ||
                    "https://images.unsplash.com/photo-1558002038-1055907df827"
                  })`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent group-hover:from-purple-900/80 group-hover:via-purple-800/40 transition-all duration-300"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-white mb-1">{category.icon}</span>
                    <span className="text-xs font-medium text-white">{category.name}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="container mx-auto px-4 py-6">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
          <div className="flex-grow">
            <h2 className="text-xl font-semibold text-white">
              {activeCategory === "all"
                ? "All Photos"
                : categories.find((c) => c.id === activeCategory)?.name || "Photos"}
            </h2>
            <p className="text-sm text-gray-400">{filteredPhotos.length} free stock photos</p>
          </div>
          <div className="flex gap-2">
            <div className="flex bg-gray-800/80 backdrop-blur-sm rounded-xl p-1 border border-gray-700/50">
              <motion.button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${
                  viewMode === "grid" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
                aria-label="Grid view"
                whileHover={viewMode !== "grid" ? { scale: 1.1 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                <LayoutGrid size={18} />
              </motion.button>
              <motion.button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${
                  viewMode === "list" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
                aria-label="List view"
                whileHover={viewMode !== "list" ? { scale: 1.1 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                <List size={18} />
              </motion.button>
            </div>

            <motion.button
              onClick={() => setShowFilters(true)}
              className="flex items-center justify-center gap-2 bg-gray-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SlidersHorizontal size={18} />
              <span className="hidden md:block">Filters</span>
            </motion.button>
          </div>
        </div>

        {/* No Results Message */}
        {filteredPhotos.length === 0 && (
          <motion.div
            className="bg-gray-800/50 p-8 text-center rounded-xl border border-gray-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No photos found</h3>
            <p className="text-gray-400 mb-4">We couldn't find any photos matching your search criteria.</p>
            <motion.button
              onClick={() => {
                setSearchTerm("")
                setActiveCategory("all")
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Clear Filters
            </motion.button>
          </motion.div>
        )}

        {/* Photo Grid */}
        {filteredPhotos.length > 0 && viewMode === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sortedPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/50 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
                onClick={() => openPhotoDetail(photo)}
                whileHover={{ y: -5 }}
                layout
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={photo.url || "/placeholder.svg?height=400&width=600"}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {photo.featured && (
                    <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md">
                      Featured
                    </div>
                  )}

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-white font-medium text-sm">{photo.title}</h3>
                        <p className="text-xs text-gray-300">by {photo.photographer}</p>
                      </div>
                      <div className="flex space-x-2">
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleLike(photo.id)
                          }}
                          className="p-1.5 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-purple-600/80 transition-colors"
                          aria-label="Like photo"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Heart size={14} />
                        </motion.button>
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleDownload(photo.id)
                          }}
                          className="p-1.5 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-purple-600/80 transition-colors"
                          aria-label="Download photo"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Download size={14} />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {photo.tags.slice(0, 3).map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-2 py-0.5 bg-gray-700/50 backdrop-blur-sm rounded-full text-xs text-gray-300 cursor-pointer hover:bg-purple-600/50 hover:text-white transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSearchTerm(tag)
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {photo.tags.length > 3 && (
                      <span className="px-2 py-0.5 bg-gray-700/50 backdrop-blur-sm rounded-full text-xs text-gray-300">
                        +{photo.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      {photo.downloads.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-3 h-3 mr-1" />
                      {photo.likes.toLocaleString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Photo List */}
        {filteredPhotos.length > 0 && viewMode === "list" && (
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/50 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700/50">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      <button
                        className="flex items-center"
                        onClick={() =>
                          setSortConfig({
                            key: "title",
                            direction:
                              sortConfig.key === "title" && sortConfig.direction === "descending"
                                ? "ascending"
                                : "descending",
                          })
                        }
                      >
                        Photo
                        <ArrowUpDown className="w-3 h-3 ml-1" />
                      </button>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell">
                      Category
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden lg:table-cell">
                      Photographer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      <button
                        className="flex items-center"
                        onClick={() =>
                          setSortConfig({
                            key: "downloads",
                            direction:
                              sortConfig.key === "downloads" && sortConfig.direction === "descending"
                                ? "ascending"
                                : "descending",
                          })
                        }
                      >
                        Downloads
                        <ArrowUpDown className="w-3 h-3 ml-1" />
                      </button>
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                      <button
                        className="flex items-center"
                        onClick={() =>
                          setSortConfig({
                            key: "popular",
                            direction:
                              sortConfig.key === "popular" && sortConfig.direction === "descending"
                                ? "ascending"
                                : "descending",
                          })
                        }
                      >
                        Likes
                        <ArrowUpDown className="w-3 h-3 ml-1" />
                      </button>
                    </th>
                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {sortedPhotos.map((photo) => (
                    <motion.tr
                      key={photo.id}
                      className="hover:bg-gray-700/30 transition-colors cursor-pointer"
                      onClick={() => openPhotoDetail(photo)}
                      whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.3)" }}
                    >
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0 mr-3">
                            <img
                              className="h-10 w-10 rounded-md object-cover"
                              src={photo.url || "/placeholder.svg?height=40&width=40"}
                              alt=""
                              loading="lazy"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white flex items-center">
                              {photo.title}
                              {photo.featured && (
                                <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-purple-600 text-white">
                                  Featured
                                </span>
                              )}
                            </div>
                            <div className="text-xs text-gray-400 line-clamp-1 hidden sm:block">
                              {photo.tags.slice(0, 3).join(", ")}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap hidden md:table-cell">
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300">
                          {categories.find((c) => c.id === photo.category)?.name || photo.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300 hidden lg:table-cell">
                        {photo.photographer}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                        {photo.downloads.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">
                        {photo.likes.toLocaleString()}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleLike(photo.id)
                            }}
                            className="p-1.5 bg-gray-700 rounded-md text-gray-300 hover:text-white hover:bg-purple-600"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Heart className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDownload(photo.id)
                            }}
                            className="p-1.5 bg-gray-700 rounded-md text-gray-300 hover:text-white hover:bg-purple-600"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Download className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Load More Button */}
        {filteredPhotos.length > 0 && (
          <div className="flex justify-center mt-10">
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg shadow-purple-900/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Load More Photos
            </motion.button>
          </div>
        )}
      </div>

      {/* Filter Sidebar */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 h-full w-full md:w-80 bg-gray-800 p-6 shadow-xl z-50 overflow-y-auto scroll-hidden"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-white">Filters & Sorting</h2>
                <motion.button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-white mb-2 font-medium">Category</label>
                  <div className="space-y-2">
                    <motion.button
                      onClick={() => handleCategoryChange("all")}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        activeCategory === "all"
                          ? "bg-purple-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      whileHover={activeCategory !== "all" ? { scale: 1.02, x: 3 } : {}}
                      whileTap={{ scale: 0.98 }}
                    >
                      All Categories
                    </motion.button>
                    {categories
                      .filter((c) => c.id !== "all")
                      .map((category) => (
                        <motion.button
                          key={category.id}
                          onClick={() => handleCategoryChange(category.id)}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                            activeCategory === category.id
                              ? "bg-purple-600 text-white"
                              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                          }`}
                          whileHover={activeCategory !== category.id ? { scale: 1.02, x: 3 } : {}}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-center">
                            <span className="mr-2">{category.icon}</span>
                            {category.name}
                          </div>
                        </motion.button>
                      ))}
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">Sort By</label>
                  <div className="space-y-2">
                    <motion.button
                      onClick={() =>
                        setSortConfig({
                          key: "popular",
                          direction:
                            sortConfig.key === "popular" && sortConfig.direction === "descending"
                              ? "ascending"
                              : "descending",
                        })
                      }
                      className={`w-full flex justify-between items-center px-4 py-2 rounded-lg ${
                        sortConfig.key === "popular"
                          ? "bg-purple-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      whileHover={sortConfig.key !== "popular" ? { scale: 1.02, x: 3 } : {}}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Popularity</span>
                      {sortConfig.key === "popular" && <ArrowUpDown size={16} />}
                    </motion.button>
                    <motion.button
                      onClick={() =>
                        setSortConfig({
                          key: "downloads",
                          direction:
                            sortConfig.key === "downloads" && sortConfig.direction === "descending"
                              ? "ascending"
                              : "descending",
                        })
                      }
                      className={`w-full flex justify-between items-center px-4 py-2 rounded-lg ${
                        sortConfig.key === "downloads"
                          ? "bg-purple-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      whileHover={sortConfig.key !== "downloads" ? { scale: 1.02, x: 3 } : {}}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Downloads</span>
                      {sortConfig.key === "downloads" && <ArrowUpDown size={16} />}
                    </motion.button>
                    <motion.button
                      onClick={() =>
                        setSortConfig({
                          key: "title",
                          direction:
                            sortConfig.key === "title" && sortConfig.direction === "descending"
                              ? "ascending"
                              : "descending",
                        })
                      }
                      className={`w-full flex justify-between items-center px-4 py-2 rounded-lg ${
                        sortConfig.key === "title"
                          ? "bg-purple-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                      whileHover={sortConfig.key !== "title" ? { scale: 1.02, x: 3 } : {}}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Title</span>
                      {sortConfig.key === "title" && <ArrowUpDown size={16} />}
                    </motion.button>
                  </div>
                </div>

                <div>
                  <label className="block text-white mb-2 font-medium">Popular Tags</label>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(photos.flatMap((photo) => photo.tags)))
                      .slice(0, 12)
                      .map((tag, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            setSearchTerm(tag)
                            setShowFilters(false)
                          }}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tag}
                        </motion.button>
                      ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <motion.button
                    onClick={() => {
                      setActiveCategory("all")
                      setSearchTerm("")
                      setSortConfig({ key: "popular", direction: "descending" })
                    }}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 mr-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reset All
                  </motion.button>
                  <motion.button
                    onClick={() => setShowFilters(false)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Photo Detail Modal */}
      <AnimatePresence>
        {viewingPhoto && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex z-50"
            onClick={closePhotoDetail}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="m-auto max-w-5xl w-full max-h-[90vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="md:w-2/3 h-[40vh] md:h-auto relative">
                  <img
                    src={viewingPhoto.url || "/placeholder.svg?height=600&width=800"}
                    alt={viewingPhoto.title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <motion.button
                    onClick={closePhotoDetail}
                    className="absolute top-4 right-4 p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-white"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>
                <div className="md:w-1/3 p-6 overflow-y-auto">
                  <h2 className="text-2xl font-bold text-white mb-2">{viewingPhoto.title}</h2>
                  <p className="text-gray-300 mb-4">by {viewingPhoto.photographer}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {viewingPhoto.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm cursor-pointer hover:bg-purple-600 hover:text-white transition-colors"
                        onClick={() => {
                          setSearchTerm(tag)
                          closePhotoDetail()
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1 text-gray-400" />
                        <span className="text-gray-300">{viewingPhoto.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1 text-gray-400" />
                        <span className="text-gray-300">{viewingPhoto.likes.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        onClick={() => handleLike(viewingPhoto.id)}
                        className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-purple-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart size={16} />
                      </motion.button>
                      <motion.button
                        className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-purple-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Bookmark size={16} />
                      </motion.button>
                      <motion.button
                        className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-white hover:bg-purple-600"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 size={16} />
                      </motion.button>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => handleDownload(viewingPhoto.id)}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 mb-4"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Download size={18} />
                    Download Free
                  </motion.button>

                  <div className="text-sm text-gray-400">
                    <p className="mb-2">License: CC0 - Free for commercial use</p>
                    <p>No attribution required</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Blog

// import { useState, useEffect, useRef } from "react"
// import Header from "../components/Common/Header"
// import { motion, AnimatePresence } from "framer-motion"
// import { toast, Toaster } from "react-hot-toast"
// import {
//   Search,
//   X,
//   ChevronLeft,
//   ChevronRight,
//   AlertTriangle,
//   Plus,
//   Calendar,
//   Clock,
//   Bookmark,
//   Share2,
//   ThumbsUp,
//   MessageSquare,
//   Edit,
//   Trash,
//   Power,
//   Zap,
//   Cpu,
//   Wifi,
//   Smartphone,
//   Monitor,
//   Speaker,
//   Coffee,
//   Printer,
//   Eye,
//   ArrowUpDown,
//   SlidersHorizontal,
//   Sparkles,
//   TrendingUp,
//   LayoutGrid,
//   List,
//   ChevronDown,
//   Tag,
//   User,
//   FileText,
//   Heart,
//   Download,
//   Save,
//   ChevronUp,
//   Upload,
// } from "lucide-react"

// const Blog = () => {
//   // Sample blog data about electrical appliances
//   const [blogPosts, setBlogPosts] = useState([
//     {
//       id: 1,
//       title: "The Ultimate Guide to Smart Refrigerators",
//       excerpt:
//         "Discover the latest features and technologies in smart refrigerators that are revolutionizing kitchen appliances.",
//       content:
//         "Smart refrigerators have come a long way since their introduction. Modern models now include features like touchscreen displays, internal cameras that let you see inside remotely, voice assistants integration, and even the ability to create shopping lists based on what's missing. Many can connect to your smartphone, allowing you to adjust temperatures remotely or receive notifications if the door is left open. Some advanced models even use AI to track food expiration dates and suggest recipes based on the ingredients you have available.",
//       category: "Kitchen",
//       tags: ["Smart Home", "Refrigerator", "IoT", "Kitchen Appliance"],
//       author: "Emma Johnson",
//       authorAvatar: "E",
//       date: "2023-11-15",
//       readTime: "8 min",
//       image:
//         "https://imgs.search.brave.com/M4vXxrsrokf-QZsvdf3dNQYzW34Trr-3ZZSmkY7AQFE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbWFydC1yZWZy/aWdlcmF0b3Itd2l0/aC1vcGVuLWRvb3It/dmlld18xMTQ1MDI5/LTQ1NjAuanBnP3Nl/bXQ9YWlzX2h5YnJp/ZCZ3PTc0MA",
//       likes: 124,
//       comments: 18,
//       featured: true,
//       icon: "cpu",
//     },
//     {
//       id: 2,
//       title: "Energy-Efficient Washing Machines: A Buyer's Guide",
//       excerpt:
//         "Learn how to choose the most energy-efficient washing machine to save on utility bills and reduce environmental impact.",
//       content:
//         "Energy-efficient washing machines not only help reduce your carbon footprint but also save you money on utility bills. When shopping for a new washing machine, look for models with the ENERGY STAR certification, which use about 25% less energy and 33% less water than standard models. Front-loading machines typically use less water and electricity than top-loading ones. Features like load sensing (which adjusts water levels based on load size), high spin speeds (which extract more water, reducing drying time), and cold water settings can further increase efficiency. Consider the capacity carefully - buying a machine that's too large for your needs will waste resources.",
//       category: "Laundry",
//       tags: ["Energy Efficient", "Washing Machine", "Eco-Friendly", "Laundry"],
//       author: "Michael Chen",
//       authorAvatar: "M",
//       date: "2023-10-28",
//       readTime: "6 min",
//       image:
//         "https://imgs.search.brave.com/L4mN5L8IvvgJiP8H9wnCrk4q4gtss2hGErtJvJikPdE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGcuY29tL2NvbnRl/bnQvZGFtL2NoYW5u/ZWwvd2Ntcy9pbi93/YXNoaW5nLW1hY2hp/bmVzL2NhdGVnb3J5/LXBhZ2UtY29udGVu/dC9mcm9udC1sb2Fk/LXdhc2hpbmctbWFj/aGluZS9HUDEtSEEt/U3ViLUNhdGVnb3J5/LUxhdW5kcnktNS1N/LTIwMjMtdjEuanBn",
//       likes: 87,
//       comments: 12,
//       featured: false,
//       icon: "zap",
//     },
//     {
//       id: 3,
//       title: "Smart Thermostats: Revolutionizing Home Climate Control",
//       excerpt:
//         "Explore how smart thermostats are changing the way we heat and cool our homes with precision and efficiency.",
//       content:
//         "Smart thermostats represent one of the most significant advancements in home climate control technology. Unlike traditional thermostats, smart models learn your schedule and preferences, automatically adjusting temperatures to optimize both comfort and efficiency. Many can detect when you're away from home and adjust accordingly, preventing unnecessary heating or cooling. Features like geofencing use your smartphone's location to determine when you're heading home and can start adjusting the temperature before you arrive. Most smart thermostats provide detailed energy usage reports, helping you understand and optimize your consumption patterns. Integration with voice assistants and other smart home systems allows for seamless control as part of your broader home automation setup.",
//       category: "Climate Control",
//       tags: ["Smart Home", "Thermostat", "Energy Saving", "IoT"],
//       author: "Sarah Williams",
//       authorAvatar: "S",
//       date: "2023-10-15",
//       readTime: "7 min",
//       image:
//         "https://imgs.search.brave.com/pgEmPhpzGRxEDJK3-3skEI2faclApHoQMwDKMaa88k8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9tb2Rlcm4tc21h/cnQtdGhlcm1vc3Rh/dC1kaXNwbGF5ZWQt/c3R5bGlzaC1saXZp/bmctcm9vbV81ODg0/OTMtNjE1MS5qcGc_/c2VtdD1haXNfaHli/cmlk",
//       likes: 156,
//       comments: 23,
//       featured: true,
//       icon: "thermometer",
//     },
//     {
//       id: 4,
//       title: "The Rise of Smart Lighting Systems",
//       excerpt:
//         "Discover how smart lighting is transforming homes with customizable ambiance, automation, and energy savings.",
//       content:
//         "Smart lighting systems have evolved far beyond simple remote-controlled bulbs. Today's systems offer color-changing capabilities, scheduling, scene creation, and integration with motion sensors and other smart home devices. Many smart bulbs use LED technology, which consumes significantly less energy than traditional incandescent bulbs while lasting much longer. Features like adaptive brightness can automatically adjust light levels based on the time of day or ambient light conditions. Voice control through assistants like Alexa, Google Assistant, or Siri makes managing your lighting effortless. Some systems even simulate occupancy when you're away, enhancing home security.",
//       category: "Lighting",
//       tags: ["Smart Home", "LED", "Lighting", "Energy Efficient"],
//       author: "David Park",
//       authorAvatar: "D",
//       date: "2023-09-30",
//       readTime: "5 min",
//       image:
//         "https://imgs.search.brave.com/xK40d1um0JV0_CDATZsq7qWPVYkNTqh7Ny3qMyoKDo4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudGhkc3RhdGlj/LmNvbS9wcm9kdWN0/SW1hZ2VzLzI5NmUy/NGM5LWMwZTktNGM4/YS1hNWEyLWVjYzI5/MzkzMzM3OS9zdm4v/YmxhY2stcmluZy1m/bG9vZGxpZ2h0cy1i/MGNnNnJ4bW52LTY0/XzYwMC5qcGc",
//       likes: 92,
//       comments: 14,
//       featured: false,
//       icon: "zap",
//     },
//     {
//       id: 5,
//       title: "Air Purifiers: Choosing the Right Technology for Your Home",
//       excerpt:
//         "Compare different air purification technologies and find the best solution for your specific indoor air quality needs.",
//       content:
//         "With increasing concerns about indoor air quality, air purifiers have become essential appliances in many homes. Different purification technologies target specific air quality issues: HEPA filters excel at removing particulate matter like dust, pollen, and pet dander; activated carbon filters absorb odors and gases; UV-C light kills bacteria and viruses; and ionizers charge particles so they stick to surfaces or dedicated collection plates. The most effective air purifiers often combine multiple technologies. When choosing a purifier, consider the Clean Air Delivery Rate (CADR), which indicates how quickly it can filter air in a given space. Also important are noise levels, filter replacement costs, and energy consumption. Some smart air purifiers can monitor air quality in real-time and adjust their operation accordingly.",
//       category: "Air Quality",
//       tags: ["Air Purifier", "HEPA", "Allergies", "Health"],
//       author: "Jennifer Lopez",
//       authorAvatar: "J",
//       date: "2023-09-18",
//       readTime: "9 min",
//       image:
//         "https://imgs.search.brave.com/I4IAPBjf868PACB3A3qZnbrm9NDorNwDbW7YDCr9xac/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vc2hhcnAtY29u/c3VtZXItZXUvaW1h/Z2UvZmV0Y2gvd181/MDAsZl9hdXRvLHFf/YXV0by9odHRwczov/L3MzLmluZnJhLmJy/YW5kcXVhZC5pby9h/Y2NvdW50cy1tZWRp/YS9TSFJQL0RBTS9v/cmlnaW4vY2IwM2Vj/YmEtZTE5Ny0xMWVh/LWE2ZDYtNWE2YTZi/NmQwNDJhLmpwZw",
//       likes: 78,
//       comments: 8,
//       featured: false,
//       icon: "wind",
//     },
//     {
//       id: 6,
//       title: "The Evolution of Smart TVs: Features Worth Upgrading For",
//       excerpt:
//         "Learn about the latest smart TV technologies and determine if it's time to upgrade your home entertainment system.",
//       content:
//         "Smart TVs have transformed from simple internet-connected displays to sophisticated entertainment hubs. Modern smart TVs offer 4K or even 8K resolution, HDR (High Dynamic Range) for improved contrast and color, and refresh rates of 120Hz or higher for smoother motion. Operating systems like Tizen, webOS, Android TV, and Roku provide access to thousands of streaming apps and services. Voice control capabilities allow hands-free operation, while some models offer integration with smart home systems. Advanced features like automatic content recognition can suggest shows based on your viewing habits, and some TVs even double as artwork or ambient displays when not in use. Gaming-specific features like variable refresh rate (VRR) and auto low latency mode (ALLM) cater to console gamers.",
//       category: "Entertainment",
//       tags: ["Smart TV", "4K", "Streaming", "Entertainment"],
//       author: "Robert Kim",
//       authorAvatar: "R",
//       date: "2023-09-05",
//       readTime: "7 min",
//       image:
//         "https://imgs.search.brave.com/_B6JFyoCSrz0ZbNTQUFME2x06ZmiaMioGRY55IvRKqs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hd3Mt/b2JnLWltYWdlLWxi/LTUudGNsLmNvbS9j/b250ZW50L2RhbS9i/cmFuZHNpdGUvcHJv/ZHVjdC90di9zL3M2/NTAwL3BjL2tzcC9B/bmRyb2lkLmpwZz90/PTE2NDU2MDczOTA4/NjAmdz0xMjAw",
//       likes: 112,
//       comments: 16,
//       featured: true,
//       icon: "monitor",
//     },
//     {
//       id: 7,
//       title: "Robot Vacuums: Comparing Navigation Technologies",
//       excerpt:
//         "Understand the differences between various robot vacuum navigation systems to find the best fit for your home layout.",
//       content:
//         "Robot vacuums use several different navigation technologies, each with its own strengths and limitations. Basic models use random patterns with bump sensors to change direction when they encounter obstacles. More advanced models employ gyroscopic navigation to move in more efficient straight lines. The most sophisticated robot vacuums use visual SLAM (Simultaneous Localization and Mapping) with cameras or LiDAR sensors to create detailed maps of your home, enabling room-specific cleaning, no-go zones, and the ability to resume cleaning after recharging. Some models can even identify and avoid common obstacles like pet waste, cords, and socks. When choosing a robot vacuum, consider your home's layout, flooring types, and whether you have pets, as these factors will influence which navigation technology will work best for you.",
//       category: "Cleaning",
//       tags: ["Robot Vacuum", "Smart Home", "Cleaning", "Automation"],
//       author: "Amanda Chen",
//       authorAvatar: "A",
//       date: "2023-08-22",
//       readTime: "8 min",
//       image:
//         "https://imgs.search.brave.com/X7lyQYmZQy75npuQncyCdTkAIC-ToglzlFQmyysmJTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zaXRl/LXN0YXRpYy5lY292/YWNzLmNvbS91cGxv/YWQvdXMvaW1hZ2Uv/cHJvZHVjdC8yMDI0/LzEwLzMxLzAyMjcx/MF8xNzIzJFg1LVBS/Ty1PTU5JLUJsYWNr/LTEyODB4MTI4MC5q/cGc",
//       likes: 95,
//       comments: 21,
//       featured: false,
//       icon: "cpu",
//     },
//     {
//       id: 8,
//       title: "Induction Cooking: The Future of Kitchen Technology",
//       excerpt:
//         "Discover why induction cooktops are gaining popularity and how they compare to traditional gas and electric options.",
//       content:
//         "Induction cooking represents a significant advancement in kitchen technology, offering precise temperature control, rapid heating, and improved safety. Unlike gas or traditional electric cooktops, induction works by creating a magnetic field that directly heats the cookware rather than the cooking surface. This results in up to 50% faster cooking times and much greater energy efficiency. The cooking surface remains relatively cool to the touch, reducing burn risks and making cleanup easier. Modern induction cooktops offer features like preset cooking programs, power boost functions for rapid boiling, and flexible cooking zones that can accommodate different pot sizes. While induction requires compatible ferromagnetic cookware (if a magnet sticks to it, it will work), the technology's benefits have made it increasingly popular in both professional and home kitchens.",
//       category: "Kitchen",
//       tags: ["Induction", "Cooking", "Energy Efficient", "Kitchen Appliance"],
//       author: "Thomas Wright",
//       authorAvatar: "T",
//       date: "2023-08-10",
//       readTime: "6 min",
//       image:
//         "https://imgs.search.brave.com/qcJvKnHFw5cLD1-eO2vpVnd4-fjgaLfJK3GoKPo_Ni4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAxLzg3LzY5Lzk2/LzM2MF9GXzE4NzY5/OTY1OV9jS2doenQ5/QTdaUWpEcEN6Q1M0/aHlpa1d6U0tnQnB6/ZC5qcGc",
//       likes: 67,
//       comments: 9,
//       featured: false,
//       icon: "zap",
//     },
//     {
//       id: 9,
//       title: "Smart Speakers: Comparing Audio Quality and Assistant Capabilities",
//       excerpt:
//         "Find the perfect balance between sound performance and smart assistant features in the latest smart speakers.",
//       content:
//         "Smart speakers have evolved from novelty gadgets to essential smart home hubs that also deliver quality audio. When evaluating smart speakers, consider both the sound quality and the capabilities of the integrated voice assistant. High-end models from brands like Sonos, Apple, and Bose prioritize audio performance with features like room-adapting sound, while still offering smart functionality. Google Assistant, Amazon Alexa, and Apple Siri each have different strengths in terms of natural language processing, smart home control, and integration with other services. Many smart speakers now include additional features like built-in smart home hubs (supporting protocols like Zigbee or Thread), display screens for visual information, and multi-room audio capabilities. Privacy features such as physical mute buttons and local processing options are becoming increasingly important to consumers.",
//       category: "Audio",
//       tags: ["Smart Speaker", "Voice Assistant", "Audio", "Smart Home"],
//       author: "Olivia Martinez",
//       authorAvatar: "O",
//       date: "2023-07-28",
//       readTime: "7 min",
//       image:
//         "https://imgs.search.brave.com/AgEIemOKGGY_odUsHL2CPlrN3sYGAzBsYyadb1jSlNk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzAzLzg3LzY5/LzM2MF9GXzEwMDM4/NzY5NzlfdGtpT2F4/WFo4SnJCdUUybkZW/RzJycm40MDZlN3Y3/TnEuanBn",
//       likes: 83,
//       comments: 15,
//       featured: false,
//       icon: "speaker",
//     },
//     {
//       id: 10,
//       title: "The Latest in Coffee Machine Technology",
//       excerpt: "Explore innovative features in modern coffee machines that are elevating the home brewing experience.",
//       content:
//         "Coffee machine technology has advanced significantly, bringing cafe-quality brewing into home kitchens. Super-automatic espresso machines now offer bean-to-cup convenience with built-in grinders, automatic milk frothing, and customizable user profiles for different family members' preferences. Smart connectivity allows you to start brewing from your phone or set schedules for your morning coffee. Some machines use barcode scanning to automatically adjust brewing parameters for different coffee pods or beans. PID temperature control provides precise water heating for optimal extraction, while pressure profiling mimics the techniques of professional baristas. For pour-over enthusiasts, automated drip machines with programmable bloom times and shower heads designed for even extraction are replicating manual methods with consistent results. Sustainability features like reusable filters and energy-saving modes are becoming standard as consumers become more environmentally conscious.",
//       category: "Kitchen",
//       tags: ["Coffee Machine", "Espresso", "Kitchen Appliance", "Brewing"],
//       author: "James Wilson",
//       authorAvatar: "J",
//       date: "2023-07-15",
//       readTime: "8 min",
//       image:
//         "https://imgs.search.brave.com/n3-nCjlLY2ROMRkD-YIFCG-9VVH-96qMhWOt4DqRhO0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8x/Mi8wNS8wMC80My9j/b2ZmZWUtNTgwNDc0/N182NDAuanBn",
//       likes: 104,
//       comments: 19,
//       featured: false,
//       icon: "coffee",
//     },
//     {
//       id: 11,
//       title: "Wireless Earbuds: Finding the Perfect Balance of Features",
//       excerpt:
//         "Navigate the crowded wireless earbud market by understanding which features matter most for your listening habits.",
//       content:
//         "The wireless earbud market has exploded with options, making it challenging to find the right pair for your needs. Sound quality remains fundamental, with many premium models offering custom EQ settings through companion apps. Active Noise Cancellation (ANC) technology continues to improve, with adaptive modes that adjust based on your environment. Battery life typically ranges from 4-12 hours per charge, with charging cases providing additional power on the go. Comfort and fit are crucial for extended listening, with many manufacturers offering multiple ear tip sizes or even custom-molded options. Water and sweat resistance (look for IPX4 rating or higher for workout use) protect your investment. Additional features to consider include multipoint connectivity for switching between devices, transparency modes for hearing your surroundings, touch controls, voice assistant integration, and spatial audio for immersive listening experiences.",
//       category: "Audio",
//       tags: ["Wireless Earbuds", "Bluetooth", "Audio", "Headphones"],
//       author: "Sophia Lee",
//       authorAvatar: "S",
//       date: "2023-07-03",
//       readTime: "6 min",
//       image:
//         "https://imgs.search.brave.com/SnfCCsB6brFRUW5DwT8s-tqblSO5qznwozs7D5BT7QU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NDk5ODg1NS9waG90/by9haXJwb2Qtd2l0/aC1ibGFjay1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1HX1dX/dUhCN29Md0xPeWRL/Ulo3M1E3MTRHZmh3/M2NxZnloTXQ0SXcy/RFZRPQ",
//       likes: 76,
//       comments: 11,
//       featured: false,
//       icon: "headphones",
//     },
//     {
//       id: 12,
//       title: "Home Battery Storage Systems: The Future of Residential Power",
//       excerpt:
//         "Learn how home battery systems are changing residential energy management and providing backup during outages.",
//       content:
//         "Home battery storage systems are transforming residential energy management by storing electricity from the grid or solar panels for later use. These systems provide backup power during outages, allow homeowners to use stored solar energy at night, and can even help reduce electricity bills by drawing from the battery during peak rate periods. Modern home batteries like the Tesla Powerwall, LG Chem RESU, and Enphase Encharge offer capacities ranging from 3kWh to 16kWh per unit, with the ability to stack multiple batteries for increased capacity. Smart features include mobile apps for monitoring energy flow, automatic switching during power outages, and integration with home energy management systems. When considering a home battery, evaluate your power needs, compatibility with existing solar systems, installation requirements, warranty terms, and potential utility incentives or rebates that may be available in your area.",
//       category: "Energy",
//       tags: ["Battery Storage", "Solar", "Energy Management", "Backup Power"],
//       author: "Daniel Brown",
//       authorAvatar: "D",
//       date: "2023-06-20",
//       readTime: "9 min",
//       image:
//         "https://imgs.search.brave.com/By0B0ciCZJI20wlktlF628Av6SiHFkoomUo_EWmZrlQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c29sYXJxdW90ZXMu/Y29tLmF1L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA5L3N1/bmdyb3ctaW5zdGFs/bGVkLmpwZw",
//       likes: 118,
//       comments: 24,
//       featured: true,
//       icon: "battery",
//     },
//   ])

//   const [newPost, setNewPost] = useState({
//     title: "",
//     excerpt: "",
//     content: "",
//     category: "",
//     tags: "",
//     author: "",
//     authorAvatar: "",
//     date: "",
//     readTime: "",
//     image:
//       "https://imgs.search.brave.com/By0B0ciCZJI20wlktlF628Av6SiHFkoomUo_EWmZrlQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c29sYXJxdW90ZXMu/Y29tLmF1L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA5L3N1/bmdyb3ctaW5zdGFs/bGVkLmpwZw",
//     likes: 0,
//     comments: 0,
//     featured: false,
//     icon: "zap",
//   })

//   // State for managing the blog
//   const [searchTerm, setSearchTerm] = useState("")
//   const [selectedCategory, setSelectedCategory] = useState("all")
//   const [currentPage, setCurrentPage] = useState(1)
//   const [activeTab, setActiveTab] = useState("All")
//   const [filterSidebar, setFilterSidebar] = useState(false)
//   const [viewingPost, setViewingPost] = useState(null)
//   const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false)
//   const [isEditPostModalOpen, setIsEditPostModalOpen] = useState(false)
//   const [editedPost, setEditedPost] = useState(null)
//   const [deleteModal, setDeleteModal] = useState(false)
//   const [postToDelete, setPostToDelete] = useState(null)
//   const [viewMode, setViewMode] = useState("grid") // grid or list
//   const [sortConfig, setSortConfig] = useState({ key: "date", direction: "descending" })
//   const [isLoading, setIsLoading] = useState(true)
//   const [showStats, setShowStats] = useState(true)

//   const postsPerPage = 6
//   const searchInputRef = useRef(null)

//   // Simulate loading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 1000)
//     return () => clearTimeout(timer)
//   }, [])

//   // Get all unique categories from blog posts
//   const categories = ["all", ...new Set(blogPosts.map((post) => post.category))]

//   // Get all unique tags from blog posts
//   const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))]

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value)
//     setCurrentPage(1)
//   }

//   // Handle category filter change
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category.toLowerCase())
//     setCurrentPage(1)
//     setFilterSidebar(false)
//   }

//   // Handle tab change
//   const handleTabChange = (tab) => {
//     setActiveTab(tab)
//     setCurrentPage(1)
//   }

//   // Sort posts
//   const sortPosts = (key) => {
//     let direction = "ascending"
//     if (sortConfig.key === key && sortConfig.direction === "ascending") {
//       direction = "descending"
//     }
//     setSortConfig({ key, direction })
//   }

//   // Filter blog posts based on search term, category, and active tab
//   const filteredPosts = blogPosts.filter((post) => {
//     // Search term can match title OR excerpt OR content OR tags
//     const searchLower = searchTerm.toLowerCase()
//     const isTitleMatch = post.title.toLowerCase().includes(searchLower)
//     const isExcerptMatch = post.excerpt.toLowerCase().includes(searchLower)
//     const isContentMatch = post.content.toLowerCase().includes(searchLower)
//     const isTagsMatch = post.tags.some((tag) => tag.toLowerCase().includes(searchLower))

//     // Category filter
//     const isCategoryMatch = selectedCategory === "all" || post.category.toLowerCase() === selectedCategory.toLowerCase()

//     // Tab filter
//     const isTabMatch =
//       activeTab === "All" || (activeTab === "Featured" && post.featured) || (activeTab === "Popular" && post.likes > 90)

//     return (isTitleMatch || isExcerptMatch || isContentMatch || isTagsMatch) && isCategoryMatch && isTabMatch
//   })

//   // Sort filtered posts
//   const sortedPosts = [...filteredPosts].sort((a, b) => {
//     if (a[sortConfig.key] < b[sortConfig.key]) {
//       return sortConfig.direction === "ascending" ? -1 : 1
//     }
//     if (a[sortConfig.key] > b[sortConfig.key]) {
//       return sortConfig.direction === "ascending" ? 1 : -1
//     }
//     return 0
//   })

//   // Paginate posts
//   const paginatedPosts = sortedPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage)

//   // Handle pagination
//   const paginate = (pageNumber) => setCurrentPage(pageNumber)

//   // Open post detail view
//   const openDetailView = (post) => setViewingPost(post)

//   // Close post detail view
//   const closeDetailView = () => setViewingPost(null)

//   // Handle delete post
//   const handleDeletePost = (id) => {
//     setPostToDelete(blogPosts.find((post) => post.id === id))
//     setDeleteModal(true)
//   }

//   // Confirm delete post
//   const confirmDelete = () => {
//     if (postToDelete) {
//       setBlogPosts(blogPosts.filter((post) => post.id !== postToDelete.id))
//       toast.error("Post deleted successfully!")
//       setDeleteModal(false)
//       setPostToDelete(null)
//     }
//   }

//   // Handle edit post
//   const handleEditPost = (post) => {
//     setEditedPost({ ...post })
//     setIsEditPostModalOpen(true)
//   }

//   // Save edited post
//   const handleSaveEditedPost = () => {
//     setBlogPosts(blogPosts.map((post) => (post.id === editedPost.id ? editedPost : post)))
//     toast.success("Post updated successfully!")
//     setIsEditPostModalOpen(false)
//   }

//   // Add new post
//   const handleAddNewPost = () => {
//     const newPostObj = {
//       id: blogPosts.length + 1,
//       ...newPost,
//       tags: newPost.tags.split(",").map((tag) => tag.trim()),
//       date: new Date().toISOString().split("T")[0],
//       likes: 0,
//       comments: 0,
//     }
//     setBlogPosts([...blogPosts, newPostObj])
//     setIsAddPostModalOpen(false)
//     toast.success("New post added successfully!")
//     setNewPost({
//       title: "",
//       excerpt: "",
//       content: "",
//       category: "",
//       tags: "",
//       author: "",
//       authorAvatar: "",
//       date: "",
//       readTime: "",
//       image: "/placeholder.svg?height=400&width=600",
//       likes: 0,
//       comments: 0,
//       featured: false,
//       icon: "zap",
//     })
//   }

//   // Get icon component based on icon name
//   const getIconComponent = (iconName, size = 20) => {
//     const icons = {
//       zap: <Zap size={size} />,
//       cpu: <Cpu size={size} />,
//       wifi: <Wifi size={size} />,
//       smartphone: <Smartphone size={size} />,
//       monitor: <Monitor size={size} />,
//       speaker: <Speaker size={size} />,
//       coffee: <Coffee size={size} />,
//       printer: <Printer size={size} />,
//       power: <Power size={size} />,
//       thermometer: <Power size={size} />,
//       wind: <Power size={size} />,
//       headphones: <Power size={size} />,
//       battery: <Power size={size} />,
//     }

//     return icons[iconName] || <Zap size={size} />
//   }

//   // Calculate stats
//   const stats = {
//     totalPosts: blogPosts.length,
//     featuredPosts: blogPosts.filter((p) => p.featured).length,
//     popularPosts: blogPosts.filter((p) => p.likes > 90).length,
//     totalComments: blogPosts.reduce((sum, post) => sum + post.comments, 0),
//     totalLikes: blogPosts.reduce((sum, post) => sum + post.likes, 0),
//   }

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white scroll-hidden">
//       <Header title="Blog Management" />
//       <Toaster/>

//       {/* Loading State */}
//       {isLoading && (
//         <div className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="flex flex-col items-center">
//             <div className="relative w-20 h-20">
//               <div className="absolute inset-0 rounded-full border-t-2 border-b-2 border-purple-500 animate-spin"></div>
//               <div className="absolute inset-2 rounded-full border-r-2 border-l-2 border-indigo-500 animate-spin animation-delay-150"></div>
//               <div className="absolute inset-4 rounded-full border-t-2 border-b-2 border-blue-500 animate-spin animation-delay-300"></div>
//             </div>
//             <p className="mt-4 text-lg text-purple-300 font-medium">Loading blog posts...</p>
//           </div>
//         </div>
//       )}

//       <motion.div
//         className="p-4 md:p-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {/* Stats Overview */}
//         {showStats && (
//           <div className="mb-6">
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//               <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700/50 shadow-lg">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-sm text-gray-400">Total Posts</h3>
//                   <FileText className="w-5 h-5 text-purple-400" />
//                 </div>
//                 <p className="text-2xl font-bold mt-2">{stats.totalPosts}</p>
//               </div>
//               <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700/50 shadow-lg">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-sm text-gray-400">Featured</h3>
//                   <Sparkles className="w-5 h-5 text-yellow-400" />
//                 </div>
//                 <p className="text-2xl font-bold mt-2">{stats.featuredPosts}</p>
//               </div>
//               <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700/50 shadow-lg">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-sm text-gray-400">Popular</h3>
//                   <TrendingUp className="w-5 h-5 text-green-400" />
//                 </div>
//                 <p className="text-2xl font-bold mt-2">{stats.popularPosts}</p>
//               </div>
//               <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700/50 shadow-lg">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-sm text-gray-400">Comments</h3>
//                   <MessageSquare className="w-5 h-5 text-blue-400" />
//                 </div>
//                 <p className="text-2xl font-bold mt-2">{stats.totalComments}</p>
//               </div>
//               <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700/50 shadow-lg">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-sm text-gray-400">Total Likes</h3>
//                   <Heart className="w-5 h-5 text-red-400" />
//                 </div>
//                 <p className="text-2xl font-bold mt-2">{stats.totalLikes}</p>
//               </div>
//             </div>
//             <button
//               onClick={() => setShowStats(false)}
//               className="text-gray-400 hover:text-white text-sm flex items-center mt-2 ml-auto"
//             >
//               <ChevronUp className="w-4 h-4 mr-1" /> Hide Stats
//             </button>
//           </div>
//         )}

//         {!showStats && (
//           <div className="mb-4">
//             <button
//               onClick={() => setShowStats(true)}
//               className="text-gray-400 hover:text-white text-sm flex items-center"
//             >
//               <ChevronDown className="w-4 h-4 mr-1" /> Show Stats
//             </button>
//           </div>
//         )}

//         <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
//           <div className="relative flex-grow">
//             <input
//               ref={searchInputRef}
//               type="text"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               placeholder="Search blog posts..."
//               className="w-full py-2.5 pl-10 pr-4 rounded-xl bg-gray-800/80 text-white border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 backdrop-blur-sm"
//             />
//             <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
//             {searchTerm && (
//               <button
//                 onClick={() => setSearchTerm("")}
//                 className="absolute right-3 top-2.5 text-gray-400 hover:text-white"
//               >
//                 <X size={18} />
//               </button>
//             )}
//           </div>
//           <div className="flex gap-2">
//             <div className="flex bg-gray-800/80 backdrop-blur-sm rounded-xl p-1 border border-gray-700/50">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded-lg ${
//                   viewMode === "grid" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"
//                 }`}
//                 aria-label="Grid view"
//               >
//                 <LayoutGrid size={18} />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded-lg ${
//                   viewMode === "list" ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white hover:bg-gray-700"
//                 }`}
//                 aria-label="List view"
//               >
//                 <List size={18} />
//               </button>
//             </div>

//             <button
//               onClick={() => setFilterSidebar(true)}
//               className="flex items-center justify-center gap-2 bg-gray-800/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl hover:bg-gray-700 transition-colors border border-gray-700/50"
//             >
//               <SlidersHorizontal size={18} />
//               <span className="hidden sm:inline">Filters</span>
//             </button>

//             <button
//               onClick={() => setIsAddPostModalOpen(true)}
//               className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-colors shadow-lg shadow-purple-900/20"
//             >
//               <Plus size={18} />
//               <span className="hidden sm:inline">New Post</span>
//             </button>
//           </div>
//         </div>

//         {/* Status Tabs */}
//         <div className="flex justify-center mb-6">
//           <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-1 flex flex-wrap border border-gray-700/50">
//             <button
//               onClick={() => handleTabChange("All")}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                 activeTab === "All"
//                   ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
//                   : "text-gray-300 hover:text-white hover:bg-gray-700"
//               }`}
//             >
//               All Posts
//             </button>
//             <button
//               onClick={() => handleTabChange("Featured")}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                 activeTab === "Featured"
//                   ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
//                   : "text-gray-300 hover:text-white hover:bg-gray-700"
//               }`}
//             >
//               Featured
//             </button>
//             <button
//               onClick={() => handleTabChange("Popular")}
//               className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
//                 activeTab === "Popular"
//                   ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
//                   : "text-gray-300 hover:text-white hover:bg-gray-700"
//               }`}
//             >
//               Popular
//             </button>
//           </div>
//         </div>

//         {/* Filter Sidebar */}
//         <AnimatePresence>
//           {filterSidebar && (
//             <>
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 0.5 }}
//                 exit={{ opacity: 0 }}
//                 onClick={() => setFilterSidebar(false)}
//                 className="fixed inset-0 bg-black z-40"
//               />
//               <motion.div
//                 initial={{ x: "100%" }}
//                 animate={{ x: 0 }}
//                 exit={{ x: "100%" }}
//                 transition={{ type: "tween" }}
//                 className="fixed right-0 top-0 h-full w-full md:w-96 bg-gray-800 p-6 shadow-xl z-50 overflow-y-auto scroll-hidden"
//               >
//                 <div className="flex justify-between items-center mb-6">
//                   <h2 className="text-xl font-semibold text-white">Filters & Sorting</h2>
//                   <button
//                     onClick={() => setFilterSidebar(false)}
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     <X size={24} />
//                   </button>
//                 </div>

//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-white mb-2 font-medium">Category</label>
//                     <div className="space-y-2">
//                       {categories.map((category, index) => (
//                         <button
//                           key={index}
//                           onClick={() => handleCategoryChange(category)}
//                           className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
//                             selectedCategory === category.toLowerCase()
//                               ? "bg-purple-600 text-white"
//                               : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                           }`}
//                         >
//                           {category === "all" ? "All Categories" : category}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-white mb-2 font-medium">Sort By</label>
//                     <div className="space-y-2">
//                       <button
//                         onClick={() => sortPosts("date")}
//                         className={`w-full flex justify-between items-center px-4 py-2 rounded-lg ${
//                           sortConfig.key === "date"
//                             ? "bg-purple-600 text-white"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                       >
//                         <span>Date</span>
//                         {sortConfig.key === "date" && (
//                           <ChevronDown size={16} className={sortConfig.direction === "ascending" ? "rotate-180" : ""} />
//                         )}
//                       </button>
//                       <button
//                         onClick={() => sortPosts("likes")}
//                         className={`w-full flex justify-between items-center px-4 py-2 rounded-lg ${
//                           sortConfig.key === "likes"
//                             ? "bg-purple-600 text-white"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                       >
//                         <span>Popularity</span>
//                         {sortConfig.key === "likes" && (
//                           <ChevronDown size={16} className={sortConfig.direction === "ascending" ? "rotate-180" : ""} />
//                         )}
//                       </button>
//                       <button
//                         onClick={() => sortPosts("title")}
//                         className={`w-full flex justify-between items-center px-4 py-2 rounded-lg ${
//                           sortConfig.key === "title"
//                             ? "bg-purple-600 text-white"
//                             : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                         }`}
//                       >
//                         <span>Title</span>
//                         {sortConfig.key === "title" && (
//                           <ChevronDown size={16} className={sortConfig.direction === "ascending" ? "rotate-180" : ""} />
//                         )}
//                       </button>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-white mb-2 font-medium">Popular Tags</label>
//                     <div className="flex flex-wrap gap-2">
//                       {allTags.slice(0, 12).map((tag, index) => (
//                         <button
//                           key={index}
//                           onClick={() => {
//                             setSearchTerm(tag)
//                             setFilterSidebar(false)
//                           }}
//                           className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors"
//                         >
//                           {tag}
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="pt-4 flex justify-end">
//                     <button
//                       onClick={() => {
//                         setSelectedCategory("all")
//                         setSearchTerm("")
//                         setActiveTab("All")
//                         setSortConfig({ key: "date", direction: "descending" })
//                       }}
//                       className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 mr-2"
//                     >
//                       Reset All
//                     </button>
//                     <button
//                       onClick={() => setFilterSidebar(false)}
//                       className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//                     >
//                       Apply
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             </>
//           )}
//         </AnimatePresence>

//         {/* Blog Post Cards */}
//         {paginatedPosts.length === 0 ? (
//           <div className="bg-gray-800/50 p-8 text-center rounded-xl border border-gray-700/50 backdrop-blur-sm">
//             <Search className="w-12 h-12 text-gray-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-white mb-2">No blog posts found</h3>
//             <p className="text-gray-400 mb-4">We couldn't find any posts matching your search criteria.</p>
//             <button
//               onClick={() => {
//                 setSearchTerm("")
//                 setSelectedCategory("all")
//                 setActiveTab("All")
//               }}
//               className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
//             >
//               Clear Filters
//             </button>
//           </div>
//         ) : viewMode === "grid" ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {paginatedPosts.map((post) => (
//               <motion.div
//                 key={post.id}
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/50 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => openDetailView(post)}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={post.image || "/placeholder.svg"}
//                     alt={post.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent"></div>
//                   {post.featured && (
//                     <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-md">
//                       Featured
//                     </div>
//                   )}
//                   <div className="absolute top-2 right-2 bg-gray-900/70 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
//                     {post.category}
//                   </div>

//                   <div className="absolute bottom-2 left-2 flex space-x-1">
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         handleEditPost(post)
//                       }}
//                       className="p-1.5 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-purple-600 transition-colors"
//                     >
//                       <Edit size={14} />
//                     </button>
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         handleDeletePost(post.id)
//                       }}
//                       className="p-1.5 bg-gray-800/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-red-600 transition-colors"
//                     >
//                       <Trash size={14} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-4">
//                   <div className="flex items-center gap-2 mb-2">
//                     <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold">
//                       {post.authorAvatar}
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-300">{post.author}</p>
//                       <div className="flex items-center text-xs text-gray-400">
//                         <Calendar className="w-3 h-3 mr-1" />
//                         {post.date}
//                       </div>
//                     </div>
//                   </div>

//                   <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors">
//                     {post.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm mb-3 line-clamp-2">{post.excerpt}</p>

//                   <div className="flex flex-wrap gap-1 mb-3">
//                     {post.tags.slice(0, 2).map((tag, index) => (
//                       <span
//                         key={index}
//                         className="px-2 py-0.5 bg-gray-700/50 backdrop-blur-sm rounded-full text-xs text-gray-300"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                     {post.tags.length > 2 && (
//                       <span className="px-2 py-0.5 bg-gray-700/50 backdrop-blur-sm rounded-full text-xs text-gray-300">
//                         +{post.tags.length - 2}
//                       </span>
//                     )}
//                   </div>

//                   <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-700/50">
//                     <div className="flex items-center">
//                       <Clock className="w-3 h-3 mr-1" />
//                       {post.readTime} read
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="flex items-center">
//                         <ThumbsUp className="w-3 h-3 mr-1" />
//                         {post.likes}
//                       </div>
//                       <div className="flex items-center">
//                         <MessageSquare className="w-3 h-3 mr-1" />
//                         {post.comments}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         ) : (
//           <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700/50 shadow-lg">
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700/50">
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       <button className="flex items-center" onClick={() => sortPosts("title")}>
//                         Title
//                         <ArrowUpDown className="w-3 h-3 ml-1" />
//                       </button>
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       <button className="flex items-center" onClick={() => sortPosts("author")}>
//                         Author
//                         <ArrowUpDown className="w-3 h-3 ml-1" />
//                       </button>
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       <button className="flex items-center" onClick={() => sortPosts("category")}>
//                         Category
//                         <ArrowUpDown className="w-3 h-3 ml-1" />
//                       </button>
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       <button className="flex items-center" onClick={() => sortPosts("date")}>
//                         Date
//                         <ArrowUpDown className="w-3 h-3 ml-1" />
//                       </button>
//                     </th>
//                     <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       <button className="flex items-center" onClick={() => sortPosts("likes")}>
//                         Stats
//                         <ArrowUpDown className="w-3 h-3 ml-1" />
//                       </button>
//                     </th>
//                     <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-700/50">
//                   {paginatedPosts.map((post) => (
//                     <tr
//                       key={post.id}
//                       className="hover:bg-gray-700/30 transition-colors cursor-pointer"
//                       onClick={() => openDetailView(post)}
//                     >
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="h-10 w-10 flex-shrink-0 mr-3">
//                             <img
//                               className="h-10 w-10 rounded-md object-cover"
//                               src={post.image || "/placeholder.svg"}
//                               alt=""
//                             />
//                           </div>
//                           <div>
//                             <div className="text-sm font-medium text-white flex items-center">
//                               {post.title}
//                               {post.featured && (
//                                 <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-purple-600 text-white">
//                                   Featured
//                                 </span>
//                               )}
//                             </div>
//                             <div className="text-xs text-gray-400 line-clamp-1">{post.excerpt}</div>
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="flex items-center">
//                           <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold mr-2">
//                             {post.authorAvatar}
//                           </div>
//                           <span className="text-sm text-gray-300">{post.author}</span>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <span className="px-2 py-1 text-xs rounded-full bg-gray-700/50 text-gray-300">
//                           {post.category}
//                         </span>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">{post.date}</td>
//                       <td className="px-4 py-3 whitespace-nowrap">
//                         <div className="flex items-center space-x-4 text-sm">
//                           <div className="flex items-center text-gray-400">
//                             <ThumbsUp className="w-3 h-3 mr-1" />
//                             {post.likes}
//                           </div>
//                           <div className="flex items-center text-gray-400">
//                             <MessageSquare className="w-3 h-3 mr-1" />
//                             {post.comments}
//                           </div>
//                         </div>
//                       </td>
//                       <td className="px-4 py-3 whitespace-nowrap text-right">
//                         <div className="flex items-center justify-end space-x-2">
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation()
//                               openDetailView(post)
//                             }}
//                             className="p-1.5 bg-gray-700 rounded-md text-gray-300 hover:text-white hover:bg-gray-600"
//                           >
//                             <Eye className="w-4 h-4" />
//                           </button>
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation()
//                               handleEditPost(post)
//                             }}
//                             className="p-1.5 bg-gray-700 rounded-md text-gray-300 hover:text-white hover:bg-purple-600"
//                           >
//                             <Edit className="w-4 h-4" />
//                           </button>
//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation()
//                               handleDeletePost(post.id)
//                             }}
//                             className="p-1.5 bg-gray-700 rounded-md text-gray-300 hover:text-white hover:bg-red-600"
//                           >
//                             <Trash className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}

//         {/* Pagination */}
//         {filteredPosts.length > postsPerPage && (
//           <div className="flex justify-center mt-8">
//             <div className="flex gap-2">
//               <button
//                 onClick={() => paginate(Math.max(1, currentPage - 1))}
//                 disabled={currentPage === 1}
//                 className={`p-2 rounded-lg transition-colors ${
//                   currentPage === 1
//                     ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
//                     : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white"
//                 }`}
//               >
//                 <ChevronLeft size={18} />
//               </button>

//               {Array.from({ length: Math.min(5, Math.ceil(filteredPosts.length / postsPerPage)) }, (_, index) => {
//                 // Calculate the page number to display
//                 let pageNumber
//                 const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

//                 if (totalPages <= 5) {
//                   // If we have 5 or fewer pages, show all page numbers
//                   pageNumber = index + 1
//                 } else {
//                   // Otherwise, show a window of 5 pages centered around the current page
//                   if (currentPage <= 3) {
//                     // Near the start
//                     pageNumber = index + 1
//                   } else if (currentPage >= totalPages - 2) {
//                     // Near the end
//                     pageNumber = totalPages - 4 + index
//                   } else {
//                     // In the middle
//                     pageNumber = currentPage - 2 + index
//                   }
//                 }

//                 return (
//                   <button
//                     key={index}
//                     onClick={() => paginate(pageNumber)}
//                     className={`
//                       min-w-[40px] px-3 py-2 rounded-lg transition-colors
//                       ${
//                         currentPage === pageNumber
//                           ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-900/20"
//                           : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white"
//                       }
//                     `}
//                   >
//                     {pageNumber}
//                   </button>
//                 )
//               })}

//               <button
//                 onClick={() => paginate(Math.min(Math.ceil(filteredPosts.length / postsPerPage), currentPage + 1))}
//                 disabled={currentPage === Math.ceil(filteredPosts.length / postsPerPage)}
//                 className={`p-2 rounded-lg transition-colors ${
//                   currentPage === Math.ceil(filteredPosts.length / postsPerPage)
//                     ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
//                     : "bg-gray-800/80 text-gray-300 hover:bg-gray-700 hover:text-white"
//                 }`}
//               >
//                 <ChevronRight size={18} />
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Post Detail Slider */}
//         <AnimatePresence>
//           {viewingPost && (
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex z-50"
//               onClick={closeDetailView}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.div
//                 className="fixed right-0 top-0 h-full w-full md:w-[700px] bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl z-50 overflow-y-auto scroll-hidden"
//                 initial={{ x: "100%" }}
//                 animate={{ x: 0 }}
//                 exit={{ x: "100%" }}
//                 transition={{ type: "tween" }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="sticky top-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 p-6 z-10">
//                   <div className="flex justify-between items-center">
//                     <h2 className="text-xl font-semibold text-white">Blog Post Details</h2>
//                     <button
//                       onClick={closeDetailView}
//                       className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700/50"
//                     >
//                       <X size={20} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <div className="relative mb-6">
//                     <img
//                       src={viewingPost.image || "/placeholder.svg"}
//                       alt={viewingPost.title}
//                       className="w-full h-64 object-cover rounded-xl"
//                     />
//                     {viewingPost.featured && (
//                       <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded-md font-medium">
//                         Featured
//                       </div>
//                     )}
//                   </div>

//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
//                       {viewingPost.authorAvatar}
//                     </div>
//                     <div>
//                       <p className="text-white font-medium">{viewingPost.author}</p>
//                       <div className="flex items-center text-sm text-gray-400">
//                         <Calendar className="w-4 h-4 mr-1" />
//                         {viewingPost.date}
//                         <span className="mx-2">•</span>
//                         <Clock className="w-4 h-4 mr-1" />
//                         {viewingPost.readTime} read
//                       </div>
//                     </div>
//                   </div>

//                   <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{viewingPost.title}</h1>

//                   <div className="flex flex-wrap gap-2 mb-6">
//                     <span className="px-3 py-1 bg-purple-900/40 text-purple-400 border border-purple-800/50 rounded-full text-sm">
//                       {viewingPost.category}
//                     </span>
//                     {viewingPost.tags.map((tag, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <div className="prose prose-invert max-w-none mb-8">
//                     <p className="text-gray-300 leading-relaxed whitespace-pre-line">{viewingPost.content}</p>
//                   </div>

//                   <div className="flex items-center justify-between border-t border-gray-700 pt-6">
//                     <div className="flex items-center gap-4">
//                       <button className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
//                         <ThumbsUp size={18} />
//                         <span>{viewingPost.likes} Likes</span>
//                       </button>
//                       <button className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors">
//                         <MessageSquare size={18} />
//                         <span>{viewingPost.comments} Comments</span>
//                       </button>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <button className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-purple-400 transition-colors">
//                         <Bookmark size={18} />
//                       </button>
//                       <button className="p-2 bg-gray-800 rounded-full text-gray-300 hover:text-purple-400 transition-colors">
//                         <Share2 size={18} />
//                       </button>
//                     </div>
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-3 mt-8">
//                     <button
//                       onClick={() => {
//                         closeDetailView()
//                         handleEditPost(viewingPost)
//                       }}
//                       className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-purple-900/20"
//                     >
//                       <Edit size={18} />
//                       Edit Post
//                     </button>
//                     <button
//                       onClick={() => {
//                         closeDetailView()
//                         handleDeletePost(viewingPost.id)
//                       }}
//                       className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-red-900/20"
//                     >
//                       <Trash size={18} />
//                       Delete Post
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Add Post Modal */}
//         <AnimatePresence>
//           {isAddPostModalOpen && (
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex z-50"
//               onClick={() => setIsAddPostModalOpen(false)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.div
//                 className="fixed right-0 top-0 h-full w-full md:w-[700px] bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl z-50 overflow-y-auto scroll-hidden"
//                 initial={{ x: "100%" }}
//                 animate={{ x: 0 }}
//                 exit={{ x: "100%" }}
//                 transition={{ type: "tween" }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="sticky top-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 p-6 z-10">
//                   <div className="flex justify-between items-center">
//                     <h2 className="text-xl font-semibold text-white">Add New Post</h2>
//                     <button
//                       onClick={() => setIsAddPostModalOpen(false)}
//                       className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700/50"
//                     >
//                       <X size={20} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <form
//                     onSubmit={(e) => {
//                       e.preventDefault()
//                       handleAddNewPost()
//                     }}
//                     className="space-y-6"
//                   >
//                     {/* Basic Information */}
//                     <div>
//                       <h3 className="text-lg font-medium text-gray-200 mb-3 flex items-center">
//                         <FileText className="w-5 h-5 mr-2 text-purple-400" />
//                         Basic Information
//                       </h3>
//                       <div className="space-y-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={newPost.title}
//                             onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Excerpt</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={newPost.excerpt}
//                             onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Content</label>
//                           <textarea
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={newPost.content}
//                             onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
//                             rows={8}
//                             required
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Categorization */}
//                     <div>
//                       <h3 className="text-lg font-medium text-gray-200 mb-3 flex items-center">
//                         <Tag className="w-5 h-5 mr-2 text-purple-400" />
//                         Categorization
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={newPost.category}
//                             onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
//                             required
//                             placeholder="e.g. Kitchen, Audio, Lighting"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Tags (comma separated)</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={newPost.tags}
//                             onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
//                             required
//                             placeholder="e.g. Smart Home, Energy Efficient, IoT"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Icon</label>
//                           <select
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={newPost.icon}
//                             onChange={(e) => setNewPost({ ...newPost, icon: e.target.value })}
//                           >
//                             <option value="zap">Power/Energy</option>
//                             <option value="cpu">Smart Device</option>
//                             <option value="wifi">Connectivity</option>
//                             <option value="smartphone">Mobile</option>
//                             <option value="monitor">Display</option>
//                             <option value="speaker">Audio</option>
//                             <option value="coffee">Kitchen</option>
//                             <option value="printer">Office</option>
//                           </select>
//                         </div>
//                         <div className="flex items-center">
//                           <input
//                             type="checkbox"
//                             id="featured"
//                             className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-purple-600 focus:ring-purple-500"
//                             checked={newPost.featured}
//                             onChange={(e) => setNewPost({ ...newPost, featured: e.target.checked })}
//                           />
//                           <label htmlFor="featured" className="ml-2 text-sm font-medium text-gray-400">
//                             Featured Post
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Author Information */}
//                     <div>
//                       <h3 className="text-lg font-medium text-gray-200 mb-3 flex items-center">
//                         <User className="w-5 h-5 mr-2 text-purple-400" />
//                         Author Information
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Author Name</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={newPost.author}
//                             onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Author Initial</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={newPost.authorAvatar}
//                             onChange={(e) => setNewPost({ ...newPost, authorAvatar: e.target.value })}
//                             required
//                             maxLength={1}
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">
//                             Read Time (e.g. "5 min")
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={newPost.readTime}
//                             onChange={(e) => setNewPost({ ...newPost, readTime: e.target.value })}
//                             required
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-700/50 pt-4">
//                       <button
//                         type="button"
//                         onClick={() => setIsAddPostModalOpen(false)}
//                         className="px-6 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors shadow-lg shadow-purple-900/20 flex items-center justify-center"
//                       >
//                         <Plus className="w-4 h-4 mr-1" />
//                         Add Post
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Edit Post Modal */}
//         <AnimatePresence>
//           {isEditPostModalOpen && editedPost && (
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex z-50"
//               onClick={() => setIsEditPostModalOpen(false)}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.div
//                 className="fixed right-0 top-0 h-full w-full md:w-[700px] bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl z-50 overflow-y-auto scroll-hidden"
//                 initial={{ x: "100%" }}
//                 animate={{ x: 0 }}
//                 exit={{ x: "100%" }}
//                 transition={{ type: "tween" }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <div className="sticky top-0 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700/50 p-6 z-10">
//                   <div className="flex justify-between items-center">
//                     <h2 className="text-xl font-semibold text-white">Edit Post</h2>
//                     <button
//                       onClick={() => setIsEditPostModalOpen(false)}
//                       className="p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700/50"
//                     >
//                       <X size={20} />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-6">
//                   <form
//                     onSubmit={(e) => {
//                       e.preventDefault()
//                       handleSaveEditedPost()
//                     }}
//                     className="space-y-6"
//                   >
//                     {/* Basic Information */}
//                     <div>
//                       <h3 className="text-lg font-medium text-gray-200 mb-3 flex items-center">
//                         <FileText className="w-5 h-5 mr-2 text-purple-400" />
//                         Basic Information
//                       </h3>
//                       <div className="space-y-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Title</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={editedPost.title}
//                             onChange={(e) => setEditedPost({ ...editedPost, title: e.target.value })}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Excerpt</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={editedPost.excerpt}
//                             onChange={(e) => setEditedPost({ ...editedPost, excerpt: e.target.value })}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Content</label>
//                           <textarea
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={editedPost.content}
//                             onChange={(e) => setEditedPost({ ...editedPost, content: e.target.value })}
//                             rows={8}
//                             required
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Categorization */}
//                     <div>
//                       <h3 className="text-lg font-medium text-gray-200 mb-3 flex items-center">
//                         <Tag className="w-5 h-5 mr-2 text-purple-400" />
//                         Categorization
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Category</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={editedPost.category}
//                             onChange={(e) => setEditedPost({ ...editedPost, category: e.target.value })}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Tags (comma separated)</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={editedPost.tags.join(", ")}
//                             onChange={(e) => setEditedPost({ ...editedPost, tags: e.target.value.split(", ") })}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Icon</label>
//                           <select
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={editedPost.icon}
//                             onChange={(e) => setEditedPost({ ...editedPost, icon: e.target.value })}
//                           >
//                             <option value="zap">Power/Energy</option>
//                             <option value="cpu">Smart Device</option>
//                             <option value="wifi">Connectivity</option>
//                             <option value="smartphone">Mobile</option>
//                             <option value="monitor">Display</option>
//                             <option value="speaker">Audio</option>
//                             <option value="coffee">Kitchen</option>
//                             <option value="printer">Office</option>
//                           </select>
//                         </div>
//                         <div className="flex items-center">
//                           <input
//                             type="checkbox"
//                             id="featured-edit"
//                             className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-purple-600 focus:ring-purple-500"
//                             checked={editedPost.featured}
//                             onChange={(e) => setEditedPost({ ...editedPost, featured: e.target.checked })}
//                           />
//                           <label htmlFor="featured-edit" className="ml-2 text-sm font-medium text-gray-400">
//                             Featured Post
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Author Information */}
//                     <div>
//                       <h3 className="text-lg font-medium text-gray-200 mb-3 flex items-center">
//                         <User className="w-5 h-5 mr-2 text-purple-400" />
//                         Author Information
//                       </h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Author Name</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={editedPost.author}
//                             onChange={(e) => setEditedPost({ ...editedPost, author: e.target.value })}
//                             required
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Author Initial</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={editedPost.authorAvatar}
//                             onChange={(e) => setEditedPost({ ...editedPost, authorAvatar: e.target.value })}
//                             required
//                             maxLength={1}
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-gray-400 mb-1">Read Time</label>
//                           <input
//                             type="text"
//                             className="w-full p-2.5 rounded-lg bg-gray-800/80 text-white border border-gray-700/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
//                             value={editedPost.readTime}
//                             onChange={(e) => setEditedPost({ ...editedPost, readTime: e.target.value })}
//                             required
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3 border-t border-gray-700/50 pt-4">
//                       <button
//                         type="button"
//                         onClick={() => setIsEditPostModalOpen(false)}
//                         className="px-6 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         type="submit"
//                         className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-colors shadow-lg shadow-purple-900/20 flex items-center justify-center"
//                       >
//                         <Save className="w-4 h-4 mr-1" />
//                         Save Changes
//                       </button>
//                     </div>
//                   </form>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Delete Confirmation Modal */}
//         <AnimatePresence>
//           {deleteModal && postToDelete && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
//             >
//               <motion.div
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 w-full max-w-md border border-gray-700/50 shadow-xl"
//               >
//                 <div className="flex items-center gap-3 text-red-400 mb-4">
//                   <AlertTriangle size={24} />
//                   <h3 className="text-xl font-semibold">Confirm Deletion</h3>
//                 </div>

//                 <p className="text-gray-300 mb-6">
//                   Are you sure you want to delete <span className="font-semibold">{postToDelete.title}</span>? This
//                   action cannot be undone.
//                 </p>

//                 <div className="flex justify-end gap-3">
//                   <button
//                     onClick={() => setDeleteModal(false)}
//                     className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
//                   >
//                     Cancel
//                   </button>
//                   <button
//                     onClick={confirmDelete}
//                     className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-colors shadow-lg shadow-red-900/20"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

       
//       </motion.div>
//     </div>
//   )
// }

// export default Blog

