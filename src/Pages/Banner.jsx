import { useState, useEffect, useRef } from "react"
import Header from "../components/Common/Header"
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  Info,
  Search,
  Filter,
  Heart,
  Share2,
  Bookmark,
  X,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Cpu,
} from "lucide-react"

// Banner component with improved responsiveness and modern design
const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [showDetails, setShowDetails] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")
  const [isFavorite, setIsFavorite] = useState({})
  const [showSearch, setShowSearch] = useState(false)
  const autoPlayRef = useRef(null)
  const searchInputRef = useRef(null)
  const bannerRef = useRef(null)

  // Enhanced banner data with electrical products
  const banners = [
    {
      title: "Smart Electrical Boards",
      subtitle: "Next Generation Power Management",
      description:
        "Experience cutting-edge smart boards with real-time monitoring and energy optimization. Compatible with IoT for seamless control.",
      image:
        "https://imgs.search.brave.com/HBwjZrYBdESRw-mbBItimPwkIQPczZro_46i1-quYGo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3JlZW5lbGVjdHJp/Y2Fsc3VwcGx5LmNv/bS9jZG4vc2hvcC9m/aWxlcy9XRlJTTTEt/NF80MDB4LnBuZz92/PTE3MjU4ODk4Njg",
      link: "#",
      features: ["IoT Integration", "Energy Saving", "Remote Access", "Surge Protection"],
      details:
        "Our smart electrical boards feature advanced microprocessors that monitor power consumption in real-time. They can be integrated with home automation systems and controlled via smartphone apps. The boards include surge protection and can automatically optimize power distribution based on usage patterns.",
      cta: "Explore Smart Boards",
      badge: "New",
      category: "Smart Home",
      rating: 4.8,
      price: "$299.99",
      discount: "15% OFF",
    },
    {
      title: "Advanced Switches",
      subtitle: "Touch & Voice Activated Controls",
      description:
        "High-durability switches with touch control and voice activation. Designed for modern homes and industries.",
      image:
        "https://imgs.search.brave.com/AYyt_GWKQ4Kyr-huX7ZoHDTEGwE3Ht4x4O1ArdHkZ4w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9FbGVj/dHJpY2FsLU1vZHVs/YXItU3dpdGNoLVBO/Ry1UcmFuc3BhcmVu/dC1JbWFnZS5wbmc",
      link: "#",
      features: ["Voice Control", "Touch Sensitive", "Long Lifespan", "LED Indicators"],
      details:
        "These premium switches feature capacitive touch technology with haptic feedback. They support voice commands through integration with popular smart home platforms. The switches have a rated lifespan of over 100,000 operations and include customizable LED indicators for status feedback.",
      cta: "View Switch Collection",
      badge: "Popular",
      category: "Smart Home",
      rating: 4.6,
      price: "$89.99",
      discount: "10% OFF",
    },
    {
      title: "Precision Regulators",
      subtitle: "Voltage Stabilization Technology",
      description: "Regulate voltage with precision using our smart regulators, ensuring device safety and efficiency.",
      image:
        "https://imgs.search.brave.com/8AqeVhnMJSaHvMCdtd1cdK0QwvXImchTzpCBycVVQbI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbGVj/dHJpY3JlZ3VsYXRv/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDQvcGFy/dHMucG5n",
      link: "#",
      features: ["Overvoltage Protection", "Efficiency Boost", "Compact Design", "Digital Display"],
      details:
        "Our precision regulators maintain stable output voltage even during significant input fluctuations. They feature digital displays showing real-time voltage readings and include multiple protection mechanisms against surges, spikes, and brownouts. The compact design allows for installation in tight spaces.",
      cta: "Discover Regulators",
      badge: "Bestseller",
      category: "Industrial",
      rating: 4.9,
      price: "$149.99",
      discount: "",
    },
    {
      title: "Power Distribution Units",
      subtitle: "Enterprise-Grade Power Solutions",
      description: "Optimize power distribution with our innovative PDUs, built for scalability and reliability.",
      image:
        "https://imgs.search.brave.com/VXNTWlwYjjjmJtJ8tQ0-GGlFbzRKqY40I4QSxhNIDec/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3liZXJwb3dlcnN5/c3RlbXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA4/L05ldy1XZWItU3dp/dGNoZWQtTWV0ZXJl/ZC1ieS1PdXRsZXQt/MTQ4MHg3NjAtMS0z/MDB4MTU0LnBuZw",
      link: "#",
      features: ["Scalable Design", "Reliable Performance", "Easy Installation", "Remote Monitoring"],
      details:
        "These enterprise-grade PDUs feature modular design for easy expansion. They include remote monitoring capabilities with SNMP support and can be integrated with data center management systems. The units feature hot-swappable components for maintenance without downtime and support redundant power configurations.",
      cta: "Explore PDU Range",
      badge: "Premium",
      category: "Industrial",
      rating: 4.7,
      price: "$499.99",
      discount: "5% OFF",
    },
    {
      title: "Industrial Circuit Breakers",
      subtitle: "Maximum Protection Systems",
      description:
        "Heavy-duty circuit breakers designed for industrial applications with advanced trip mechanisms and fault detection.",
      image:
        "https://imgs.search.brave.com/w690CjWMVXOHQABKWY9vuIahHoBhYj-9Xt-llJYb2TE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bHVtaW5zbWFydC5j/b20vc3RvcmFnZS9h/cHAvbWVkaWEvTHVt/aW4lMjBsc3AvTHVt/aW5fQW50ZW5uYS5w/bmc",
      link: "#",
      features: ["Short Circuit Protection", "Thermal Protection", "Adjustable Trip Settings", "Status Indicators"],
      details:
        "Our industrial circuit breakers are engineered for high-current applications up to 1000A. They feature advanced thermal and magnetic trip mechanisms with adjustable settings. The breakers include status indicators and can be integrated with building management systems for remote monitoring and control.",
      cta: "View Circuit Breakers",
      badge: "Industrial",
      category: "Safety",
      rating: 4.9,
      price: "$349.99",
      discount: "",
    },
    {
      title: "Smart Home Lighting Controls",
      subtitle: "Intelligent Illumination Systems",
      description: "Complete lighting control solutions with dimming, scheduling, and scene programming capabilities.",
      image:
        "https://imgs.search.brave.com/HryknztkcbdsPmzL3zW5-XrU8Zu-9hpuLPq_XiN2N8Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUz/ZmNlNDcwZTRiMDM3/NGFkZmRkMzBiYy8x/NDE3NTYzODkxNzEx/LUVTSlFJUEtRVE9N/MUFISVJESUtPL2hl/cm8tZmVhdHVyZXMt/ZGltbWluZy1vci1z/d2l0Y2gucG5n",
      link: "#",
      features: ["Wireless Control", "Scene Programming", "Energy Monitoring", "Voice Compatible"],
      details:
        "Our smart lighting control systems allow for complete customization of your home or office lighting. Create scenes for different activities, schedule lighting changes throughout the day, and integrate with voice assistants. The system monitors energy usage and can suggest optimizations to reduce power consumption.",
      cta: "Explore Lighting Controls",
      badge: "Smart Home",
      category: "Smart Home",
      rating: 4.5,
      price: "$129.99",
      discount: "20% OFF",
    },
    {
      title: "Solar Power Inverters",
      subtitle: "Renewable Energy Conversion",
      description:
        "High-efficiency inverters for solar panel systems with grid-tie capabilities and battery backup options.",
      image:
        "https://imgs.search.brave.com/F1WswYW0wWUIPCihSjUtKfxu_98apBPM66th_Dal0oA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c21hLmRlL2ZpbGVh/ZG1pbi9fcHJvY2Vz/c2VkXy84LzcvY3Nt/X1NUUFhfU0NfU0Jf/MTAyNHg1NzZfY2I4/Y2E2M2NhZC5wbmc",
      link: "#",
      features: ["High Efficiency", "Grid-Tie Ready", "Battery Integration", "Monitoring App"],
      details:
        "Our solar inverters convert DC power from solar panels to AC power for home use with up to 98% efficiency. They feature grid-tie capabilities for selling excess power back to the utility company and can integrate with battery storage systems for backup power. The companion app provides real-time monitoring of power generation and consumption.",
      cta: "Discover Solar Solutions",
      badge: "Renewable",
      category: "Renewable",
      rating: 4.8,
      price: "$799.99",
      discount: "10% OFF",
    },
    {
      title: "Industrial UPS Systems",
      subtitle: "Uninterrupted Power Supply",
      description:
        "Reliable backup power systems for critical infrastructure with fast switchover and extended runtime.",
      image:
        "https://imgs.search.brave.com/RN0WJdX7xWMJIIz8Ouu4ZwBj9PqV3JwV6ZTKZBxWn3s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG93ZXItc29sdXRp/b25zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMi9T/UllMNUsxNVJNWExU/X0ZMX1Zfd2ViLTMw/MHgzMDAucG5n",
      link: "#",
      features: ["Zero Transfer Time", "Extended Runtime", "Power Conditioning", "Remote Management"],
      details:
        "Our industrial UPS systems provide critical power protection for servers, medical equipment, and industrial processes. They feature zero transfer time to backup power, power conditioning to protect sensitive equipment, and can be configured with extended battery modules for longer runtime during outages. Remote management capabilities allow for monitoring and control from anywhere.",
      cta: "Explore UPS Systems",
      badge: "Critical",
      category: "Safety",
      rating: 4.7,
      price: "$1,299.99",
      discount: "",
    },
  ]

  // Initialize favorites state
  useEffect(() => {
    const initialFavorites = {}
    banners.forEach((_, index) => {
      initialFavorites[index] = false
    })
    setIsFavorite(initialFavorites)
  }, [])

  // Filter banners based on search query and category filter
  const filteredBanners = banners.filter((banner) => {
    const matchesSearch =
      searchQuery === "" ||
      banner.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      banner.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      banner.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesFilter = activeFilter === "All" || banner.category === activeFilter

    return matchesSearch && matchesFilter
  })

  // Navigation functions
  const goToSlide = (index) => {
    let newIndex = index
    if (filteredBanners.length === 0) return

    if (index < 0) newIndex = filteredBanners.length - 1
    if (index >= filteredBanners.length) newIndex = 0
    setActiveIndex(newIndex)
  }

  // Reset active index when filters change
  useEffect(() => {
    if (activeIndex >= filteredBanners.length && filteredBanners.length > 0) {
      setActiveIndex(0)
    }
  }, [filteredBanners.length, activeIndex])

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused && filteredBanners.length > 0) {
      autoPlayRef.current = setInterval(() => {
        goToSlide(activeIndex + 1)
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [activeIndex, isPaused, filteredBanners.length])

  // Pause auto-slide on hover
  useEffect(() => {
    if ((isHovering || showSearch) && !isPaused) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    } else if (!isPaused && filteredBanners.length > 0) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
      autoPlayRef.current = setInterval(() => {
        goToSlide(activeIndex + 1)
      }, 6000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isHovering, isPaused, activeIndex, goToSlide, showSearch, filteredBanners.length])

  // Focus search input when search is shown
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearch])

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToSlide(activeIndex + 1)
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToSlide(activeIndex - 1)
    }
  }
  
  const toggleDetails = (index) => {
    if (showDetails === index) {
      setShowDetails(null)
    } else {
      setShowDetails(index)
    }
  }

  // Toggle favorite
  const toggleFavorite = (index, e) => {
    e.stopPropagation()
    setIsFavorite((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  // Get all unique categories
  const categories = ["All", ...new Set(banners.map((banner) => banner.category))]

  // Star rating component
  const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xs sm:text-sm">
            {i < fullStars ? "★" : i === fullStars && hasHalfStar ? "★" : "☆"}
          </span>
        ))}
        <span className="ml-1 text-xs text-gray-300">({rating})</span>
      </div>
    )
  }

  // Share product
  const shareProduct = (banner, e) => {
    e.stopPropagation()
    if (navigator.share) {
      navigator
        .share({
          title: banner.title,
          text: banner.description,
          url: banner.link || window.location.href,
        })
        .catch((err) => console.error("Error sharing:", err))
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard
        .writeText(`${banner.title} - ${banner.description} - ${banner.link || window.location.href}`)
        .then(() => {
          alert("Link copied to clipboard!")
        })
        .catch((err) => {
          console.error("Failed to copy:", err)
        })
    }
  }

  // Get icon for feature
  const getFeatureIcon = (feature) => {
    if (feature.toLowerCase().includes("energy") || feature.toLowerCase().includes("power")) {
      return <Zap className="w-4 h-4" />
    } else if (feature.toLowerCase().includes("protection") || feature.toLowerCase().includes("safety")) {
      return <Shield className="w-4 h-4" />
    } else if (feature.toLowerCase().includes("smart") || feature.toLowerCase().includes("iot")) {
      return <Cpu className="w-4 h-4" />
    } else {
      return <Star className="w-4 h-4" />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-y-auto scroll-hidden">
      <Header title="Banners" />

      {/* Search and Filter Bar */}
      <div className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 transition-all">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center w-full sm:w-auto">
            {showSearch ? (
              <div className="relative w-full sm:w-64 md:w-80">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onBlur={() => {
                    if (searchQuery === "") {
                      setShowSearch(false)
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setSearchQuery("")
                      setShowSearch(false)
                    }
                  }}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg flex items-center gap-2 text-sm"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline">Search</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <div className="relative group">
              <button className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg flex items-center gap-2 text-sm">
                <Filter className="w-4 h-4" />
                <span className="hidden sm:inline">Filter</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-right">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      activeFilter === category ? "bg-blue-600 text-white" : "text-slate-200 hover:bg-slate-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsPaused(!isPaused)}
              className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Active Filter Indicator */}
      {activeFilter !== "All" && (
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-400">Filtered by:</span>
            <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium flex items-center">
              {activeFilter}
              <button onClick={() => setActiveFilter("All")} className="ml-2 text-blue-400 hover:text-white">
                <X className="w-3 h-3" />
              </button>
            </span>
          </div>
        </div>
      )}

      {/* No Results Message */}
      {filteredBanners.length === 0 && (
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-slate-800/50 rounded-xl p-8 max-w-md mx-auto">
            <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
            <p className="text-slate-400 mb-4">We couldn't find any products matching your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveFilter("All")
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Banner Slider */}
      {filteredBanners.length > 0 && (
        <div className="container mx-auto px-4 py-6">
          <div
            className="overflow-hidden rounded-xl shadow-2xl transition-all bg-slate-800"
            ref={bannerRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {filteredBanners.map((banner, index) => (
              <div
                key={index}
                className={`w-full transition-all duration-700 ease-in-out ${
                  activeIndex === index
                    ? "opacity-100 transform translate-x-0"
                    : "opacity-0 absolute transform translate-x-full"
                }`}
                style={{ display: activeIndex === index ? "block" : "none" }}
                aria-hidden={activeIndex !== index}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 sm:h-80 md:h-full">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${banner.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent md:bg-gradient-to-t md:from-slate-900/80 md:via-slate-900/50 md:to-transparent"></div>
                    </div>

                    {/* Badge */}
                    {banner.badge && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                        {banner.badge}
                      </div>
                    )}

                    {/* Discount Tag */}
                    {banner.discount && (
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                        {banner.discount}
                      </div>
                    )}

                    {/* Mobile Content Overlay */}
                    <div className="md:hidden absolute inset-0 flex items-end p-6">
                      <div className="w-full">
                        <h2 className="text-2xl font-bold mb-1 text-white tracking-tight">{banner.title}</h2>
                        <h3 className="text-sm text-blue-400 font-medium mb-2">{banner.subtitle}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-white">{banner.price}</span>
                            {banner.discount && <span className="text-green-400 text-sm">{banner.discount}</span>}
                          </div>
                          <StarRating rating={banner.rating} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="hidden md:block">
                      <h2 className="text-2xl lg:text-3xl font-bold mb-1 text-white tracking-tight">{banner.title}</h2>
                      <h3 className="text-sm lg:text-base text-blue-400 font-medium mb-3">{banner.subtitle}</h3>

                      {/* Price and Rating */}
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-lg lg:text-xl font-bold text-white">{banner.price}</span>
                          {banner.discount && <span className="text-green-400 text-sm">{banner.discount}</span>}
                        </div>
                        <StarRating rating={banner.rating} />
                      </div>
                    </div>

                    <p className="text-sm lg:text-base mb-4 text-slate-300">{banner.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {banner.features.map((feature, i) => (
                        <span
                          key={i}
                          className="bg-slate-700/80 text-slate-200 text-xs px-3 py-1.5 rounded-full flex items-center gap-1"
                        >
                          {getFeatureIcon(feature)}
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-4">
                      <a
                        href={banner.link}
                        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/30"
                      >
                        {banner.cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                      <button
                        onClick={() => toggleDetails(index)}
                        className="inline-flex items-center justify-center bg-slate-700/80 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
                      >
                        {showDetails === index ? "Hide Details" : "View Details"}
                        <Info className="ml-2 w-4 h-4" />
                      </button>

                      {/* Action Buttons */}
                      <div className="flex gap-2 ml-auto">
                        <button
                          onClick={(e) => toggleFavorite(index, e)}
                          className={`p-2 rounded-full transition-all ${
                            isFavorite[index]
                              ? "bg-red-600 text-white"
                              : "bg-slate-700/80 text-slate-300 hover:bg-slate-600"
                          }`}
                          aria-label={isFavorite[index] ? "Remove from favorites" : "Add to favorites"}
                        >
                          <Heart className="w-4 h-4" fill={isFavorite[index] ? "currentColor" : "none"} />
                        </button>
                        <button
                          onClick={(e) => shareProduct(banner, e)}
                          className="p-2 rounded-full bg-slate-700/80 text-slate-300 hover:bg-slate-600 transition-all"
                          aria-label="Share product"
                        >
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details Panel */}
                <div
                  className={`bg-slate-700 text-white overflow-hidden transition-all duration-500 ease-in-out ${
                    showDetails === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6">
                    <h4 className="text-lg font-semibold mb-2">Product Details</h4>
                    <p className="text-slate-300 text-sm lg:text-base">{banner.details}</p>

                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {banner.features.map((feature, i) => (
                        <div key={i} className="bg-slate-600/50 p-3 rounded-lg">
                          <span className="block text-xs text-slate-400">Feature</span>
                          <span className="font-medium flex items-center gap-1">
                            {getFeatureIcon(feature)}
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Additional Actions */}
                    <div className="mt-4 flex flex-wrap justify-between items-center">
                      <div className="flex items-center gap-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-3 rounded-lg transition-all">
                          Request Quote
                        </button>
                        <button className="bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium py-1.5 px-3 rounded-lg transition-all">
                          Technical Specs
                        </button>
                      </div>
                      <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm">
                        <Bookmark className="w-4 h-4 mr-1" /> Save for later
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          {filteredBanners.length > 1 && (
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-2 sm:px-4 -mt-6 pointer-events-none">
              <button
                onClick={() => goToSlide(activeIndex - 1)}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg transition-all transform hover:scale-110 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => goToSlide(activeIndex + 1)}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg transition-all transform hover:scale-110 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          )}

          {/* Bottom Controls */}
          {filteredBanners.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-2">
              {/* Navigation Dots */}
              {filteredBanners.length > 1 && (
                <div className="flex justify-center space-x-2 mb-3 sm:mb-0 overflow-x-auto py-2 w-full sm:w-auto">
                  {filteredBanners.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        activeIndex === index ? "bg-blue-600 w-6" : "bg-slate-400 hover:bg-slate-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                      aria-current={activeIndex === index ? "true" : "false"}
                    ></button>
                  ))}
                </div>
              )}

              {/* Playback Controls */}
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-400">
                  {activeIndex + 1} / {filteredBanners.length}
                </span>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="bg-slate-700 hover:bg-slate-600 text-white p-1.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button
            onClick={() => setActiveFilter("All")}
            className={`${activeFilter === "All" ? "bg-blue-600" : "bg-slate-700 hover:bg-slate-600"} text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors`}
          >
            All Products
          </button>
          {categories
            .filter((cat) => cat !== "All")
            .map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`${activeFilter === category ? "bg-blue-600" : "bg-slate-700 hover:bg-slate-600"} text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors`}
              >
                {category}
              </button>
            ))}
        </div>
      </div>

      {/* Responsive Product Grid Preview */}
      {filteredBanners.length > 0 && (
        <div className="container mx-auto px-4 py-6 mt-4">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Preview</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredBanners.map((banner, index) => (
              <div
                key={index}
                className={`bg-slate-800 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${
                  activeIndex === index ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => goToSlide(index)}
              >
                <div className="relative">
                  <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url(${banner.image})` }}></div>
                  {banner.badge && (
                    <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                      {banner.badge}
                    </div>
                  )}
                  <button
                    onClick={(e) => toggleFavorite(index, e)}
                    className={`absolute top-2 left-2 p-1.5 rounded-full ${
                      isFavorite[index] ? "bg-red-600 text-white" : "bg-black/50 text-white hover:bg-black/70"
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5" fill={isFavorite[index] ? "currentColor" : "none"} />
                  </button>
                </div>
                <div className="p-3">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-white font-medium text-sm truncate flex-1">{banner.title}</h4>
                    <span className="text-sm font-bold text-white">{banner.price}</span>
                  </div>
                  <p className="text-slate-400 text-xs truncate mb-2">{banner.subtitle}</p>
                  <div className="flex justify-between items-center">
                    <StarRating rating={banner.rating} />
                    {banner.discount && <span className="text-green-400 text-xs font-medium">{banner.discount}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Banner
