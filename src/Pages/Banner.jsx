// import { useState, useEffect, useRef } from "react"
// import Header from "../components/Common/Header"
// import {
//   ChevronLeft,
//   ChevronRight,
//   Pause,
//   Play,
//   Info,
//   Search,
//   Filter,
//   Heart,
//   Share2,
//   Bookmark,
//   X,
//   ArrowRight,
//   Star,
//   Zap,
//   Shield,
//   Cpu,
// } from "lucide-react"

// // Banner component with improved responsiveness and modern design
// const Banner = () => {
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [isPaused, setIsPaused] = useState(false)
//   const [isHovering, setIsHovering] = useState(false)
//   const [touchStart, setTouchStart] = useState(0)
//   const [touchEnd, setTouchEnd] = useState(0)
//   const [showDetails, setShowDetails] = useState(null)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [activeFilter, setActiveFilter] = useState("All")
//   const [isFavorite, setIsFavorite] = useState({})
//   const [showSearch, setShowSearch] = useState(false)
//   const autoPlayRef = useRef(null)
//   const searchInputRef = useRef(null)
//   const bannerRef = useRef(null)

//   // Enhanced banner data with electrical products
//   const banners = [
//     {
//       title: "Smart Electrical Boards",
//       subtitle: "Next Generation Power Management",
//       description:
//         "Experience cutting-edge smart boards with real-time monitoring and energy optimization. Compatible with IoT for seamless control.",
//       image:
//         "https://imgs.search.brave.com/HBwjZrYBdESRw-mbBItimPwkIQPczZro_46i1-quYGo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3JlZW5lbGVjdHJp/Y2Fsc3VwcGx5LmNv/bS9jZG4vc2hvcC9m/aWxlcy9XRlJTTTEt/NF80MDB4LnBuZz92/PTE3MjU4ODk4Njg",
//       link: "#",
//       features: ["IoT Integration", "Energy Saving", "Remote Access", "Surge Protection"],
//       details:
//         "Our smart electrical boards feature advanced microprocessors that monitor power consumption in real-time. They can be integrated with home automation systems and controlled via smartphone apps. The boards include surge protection and can automatically optimize power distribution based on usage patterns.",
//       cta: "Explore Smart Boards",
//       badge: "New",
//       category: "Smart Home",
//       rating: 4.8,
//       price: "$299.99",
//       discount: "15% OFF",
//     },
//     {
//       title: "Advanced Switches",
//       subtitle: "Touch & Voice Activated Controls",
//       description:
//         "High-durability switches with touch control and voice activation. Designed for modern homes and industries.",
//       image:
//         "https://imgs.search.brave.com/AYyt_GWKQ4Kyr-huX7ZoHDTEGwE3Ht4x4O1ArdHkZ4w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9FbGVj/dHJpY2FsLU1vZHVs/YXItU3dpdGNoLVBO/Ry1UcmFuc3BhcmVu/dC1JbWFnZS5wbmc",
//       link: "#",
//       features: ["Voice Control", "Touch Sensitive", "Long Lifespan", "LED Indicators"],
//       details:
//         "These premium switches feature capacitive touch technology with haptic feedback. They support voice commands through integration with popular smart home platforms. The switches have a rated lifespan of over 100,000 operations and include customizable LED indicators for status feedback.",
//       cta: "View Switch Collection",
//       badge: "Popular",
//       category: "Smart Home",
//       rating: 4.6,
//       price: "$89.99",
//       discount: "10% OFF",
//     },
//     {
//       title: "Precision Regulators",
//       subtitle: "Voltage Stabilization Technology",
//       description: "Regulate voltage with precision using our smart regulators, ensuring device safety and efficiency.",
//       image:
//         "https://imgs.search.brave.com/8AqeVhnMJSaHvMCdtd1cdK0QwvXImchTzpCBycVVQbI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbGVj/dHJpY3JlZ3VsYXRv/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDQvcGFy/dHMucG5n",
//       link: "#",
//       features: ["Overvoltage Protection", "Efficiency Boost", "Compact Design", "Digital Display"],
//       details:
//         "Our precision regulators maintain stable output voltage even during significant input fluctuations. They feature digital displays showing real-time voltage readings and include multiple protection mechanisms against surges, spikes, and brownouts. The compact design allows for installation in tight spaces.",
//       cta: "Discover Regulators",
//       badge: "Bestseller",
//       category: "Industrial",
//       rating: 4.9,
//       price: "$149.99",
//       discount: "",
//     },
//     {
//       title: "Power Distribution Units",
//       subtitle: "Enterprise-Grade Power Solutions",
//       description: "Optimize power distribution with our innovative PDUs, built for scalability and reliability.",
//       image:
//         "https://imgs.search.brave.com/VXNTWlwYjjjmJtJ8tQ0-GGlFbzRKqY40I4QSxhNIDec/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3liZXJwb3dlcnN5/c3RlbXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA4/L05ldy1XZWItU3dp/dGNoZWQtTWV0ZXJl/ZC1ieS1PdXRsZXQt/MTQ4MHg3NjAtMS0z/MDB4MTU0LnBuZw",
//       link: "#",
//       features: ["Scalable Design", "Reliable Performance", "Easy Installation", "Remote Monitoring"],
//       details:
//         "These enterprise-grade PDUs feature modular design for easy expansion. They include remote monitoring capabilities with SNMP support and can be integrated with data center management systems. The units feature hot-swappable components for maintenance without downtime and support redundant power configurations.",
//       cta: "Explore PDU Range",
//       badge: "Premium",
//       category: "Industrial",
//       rating: 4.7,
//       price: "$499.99",
//       discount: "5% OFF",
//     },
//     {
//       title: "Industrial Circuit Breakers",
//       subtitle: "Maximum Protection Systems",
//       description:
//         "Heavy-duty circuit breakers designed for industrial applications with advanced trip mechanisms and fault detection.",
//       image:
//         "https://imgs.search.brave.com/w690CjWMVXOHQABKWY9vuIahHoBhYj-9Xt-llJYb2TE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bHVtaW5zbWFydC5j/b20vc3RvcmFnZS9h/cHAvbWVkaWEvTHVt/aW4lMjBsc3AvTHVt/aW5fQW50ZW5uYS5w/bmc",
//       link: "#",
//       features: ["Short Circuit Protection", "Thermal Protection", "Adjustable Trip Settings", "Status Indicators"],
//       details:
//         "Our industrial circuit breakers are engineered for high-current applications up to 1000A. They feature advanced thermal and magnetic trip mechanisms with adjustable settings. The breakers include status indicators and can be integrated with building management systems for remote monitoring and control.",
//       cta: "View Circuit Breakers",
//       badge: "Industrial",
//       category: "Safety",
//       rating: 4.9,
//       price: "$349.99",
//       discount: "",
//     },
//     {
//       title: "Smart Home Lighting Controls",
//       subtitle: "Intelligent Illumination Systems",
//       description: "Complete lighting control solutions with dimming, scheduling, and scene programming capabilities.",
//       image:
//         "https://imgs.search.brave.com/HryknztkcbdsPmzL3zW5-XrU8Zu-9hpuLPq_XiN2N8Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUz/ZmNlNDcwZTRiMDM3/NGFkZmRkMzBiYy8x/NDE3NTYzODkxNzEx/LUVTSlFJUEtRVE9N/MUFISVJESUtPL2hl/cm8tZmVhdHVyZXMt/ZGltbWluZy1vci1z/d2l0Y2gucG5n",
//       link: "#",
//       features: ["Wireless Control", "Scene Programming", "Energy Monitoring", "Voice Compatible"],
//       details:
//         "Our smart lighting control systems allow for complete customization of your home or office lighting. Create scenes for different activities, schedule lighting changes throughout the day, and integrate with voice assistants. The system monitors energy usage and can suggest optimizations to reduce power consumption.",
//       cta: "Explore Lighting Controls",
//       badge: "Smart Home",
//       category: "Smart Home",
//       rating: 4.5,
//       price: "$129.99",
//       discount: "20% OFF",
//     },
//     {
//       title: "Solar Power Inverters",
//       subtitle: "Renewable Energy Conversion",
//       description:
//         "High-efficiency inverters for solar panel systems with grid-tie capabilities and battery backup options.",
//       image:
//         "https://imgs.search.brave.com/F1WswYW0wWUIPCihSjUtKfxu_98apBPM66th_Dal0oA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c21hLmRlL2ZpbGVh/ZG1pbi9fcHJvY2Vz/c2VkXy84LzcvY3Nt/X1NUUFhfU0NfU0Jf/MTAyNHg1NzZfY2I4/Y2E2M2NhZC5wbmc",
//       link: "#",
//       features: ["High Efficiency", "Grid-Tie Ready", "Battery Integration", "Monitoring App"],
//       details:
//         "Our solar inverters convert DC power from solar panels to AC power for home use with up to 98% efficiency. They feature grid-tie capabilities for selling excess power back to the utility company and can integrate with battery storage systems for backup power. The companion app provides real-time monitoring of power generation and consumption.",
//       cta: "Discover Solar Solutions",
//       badge: "Renewable",
//       category: "Renewable",
//       rating: 4.8,
//       price: "$799.99",
//       discount: "10% OFF",
//     },
//     {
//       title: "Industrial UPS Systems",
//       subtitle: "Uninterrupted Power Supply",
//       description:
//         "Reliable backup power systems for critical infrastructure with fast switchover and extended runtime.",
//       image:
//         "https://imgs.search.brave.com/RN0WJdX7xWMJIIz8Ouu4ZwBj9PqV3JwV6ZTKZBxWn3s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG93ZXItc29sdXRp/b25zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMi9T/UllMNUsxNVJNWExU/X0ZMX1Zfd2ViLTMw/MHgzMDAucG5n",
//       link: "#",
//       features: ["Zero Transfer Time", "Extended Runtime", "Power Conditioning", "Remote Management"],
//       details:
//         "Our industrial UPS systems provide critical power protection for servers, medical equipment, and industrial processes. They feature zero transfer time to backup power, power conditioning to protect sensitive equipment, and can be configured with extended battery modules for longer runtime during outages. Remote management capabilities allow for monitoring and control from anywhere.",
//       cta: "Explore UPS Systems",
//       badge: "Critical",
//       category: "Safety",
//       rating: 4.7,
//       price: "$1,299.99",
//       discount: "",
//     },
//   ]

//   // Initialize favorites state
//   useEffect(() => {
//     const initialFavorites = {}
//     banners.forEach((_, index) => {
//       initialFavorites[index] = false
//     })
//     setIsFavorite(initialFavorites)
//   }, [])

//   // Filter banners based on search query and category filter
//   const filteredBanners = banners.filter((banner) => {
//     const matchesSearch =
//       searchQuery === "" ||
//       banner.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       banner.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       banner.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase()))

//     const matchesFilter = activeFilter === "All" || banner.category === activeFilter

//     return matchesSearch && matchesFilter
//   })

//   // Navigation functions
//   const goToSlide = (index) => {
//     let newIndex = index
//     if (filteredBanners.length === 0) return

//     if (index < 0) newIndex = filteredBanners.length - 1
//     if (index >= filteredBanners.length) newIndex = 0
//     setActiveIndex(newIndex)
//   }

//   // Reset active index when filters change
//   useEffect(() => {
//     if (activeIndex >= filteredBanners.length && filteredBanners.length > 0) {
//       setActiveIndex(0)
//     }
//   }, [filteredBanners.length, activeIndex])

//   // Auto-slide functionality
//   useEffect(() => {
//     if (!isPaused && filteredBanners.length > 0) {
//       autoPlayRef.current = setInterval(() => {
//         goToSlide(activeIndex + 1)
//       }, 5000)
//     }

//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current)
//       }
//     }
//   }, [activeIndex, isPaused, filteredBanners.length])

//   // Pause auto-slide on hover
//   useEffect(() => {
//     if ((isHovering || showSearch) && !isPaused) {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current)
//       }
//     } else if (!isPaused && filteredBanners.length > 0) {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current)
//       }
//       autoPlayRef.current = setInterval(() => {
//         goToSlide(activeIndex + 1)
//       }, 6000)
//     }

//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current)
//       }
//     }
//   }, [isHovering, isPaused, activeIndex, goToSlide, showSearch, filteredBanners.length])

//   // Focus search input when search is shown
//   useEffect(() => {
//     if (showSearch && searchInputRef.current) {
//       searchInputRef.current.focus()
//     }
//   }, [showSearch])

//   // Touch handlers for mobile swipe
//   const handleTouchStart = (e) => {
//     setTouchStart(e.targetTouches[0].clientX)
//   }

//   const handleTouchMove = (e) => {
//     setTouchEnd(e.targetTouches[0].clientX)
//   }

//   const handleTouchEnd = () => {
//     if (touchStart - touchEnd > 50) {
//       // Swipe left
//       goToSlide(activeIndex + 1)
//     }

//     if (touchStart - touchEnd < -50) {
//       // Swipe right
//       goToSlide(activeIndex - 1)
//     }
//   }
  
//   const toggleDetails = (index) => {
//     if (showDetails === index) {
//       setShowDetails(null)
//     } else {
//       setShowDetails(index)
//     }
//   }

//   // Toggle favorite
//   const toggleFavorite = (index, e) => {
//     e.stopPropagation()
//     setIsFavorite((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }))
//   }

//   // Get all unique categories
//   const categories = ["All", ...new Set(banners.map((banner) => banner.category))]

//   // Star rating component
//   const StarRating = ({ rating }) => {
//     const fullStars = Math.floor(rating)
//     const hasHalfStar = rating % 1 >= 0.5

//     return (
//       <div className="flex items-center">
//         {[...Array(5)].map((_, i) => (
//           <span key={i} className="text-yellow-400 text-xs sm:text-sm">
//             {i < fullStars ? "★" : i === fullStars && hasHalfStar ? "★" : "☆"}
//           </span>
//         ))}
//         <span className="ml-1 text-xs text-gray-300">({rating})</span>
//       </div>
//     )
//   }

//   // Share product
//   const shareProduct = (banner, e) => {
//     e.stopPropagation()
//     if (navigator.share) {
//       navigator
//         .share({
//           title: banner.title,
//           text: banner.description,
//           url: banner.link || window.location.href,
//         })
//         .catch((err) => console.error("Error sharing:", err))
//     } else {
//       // Fallback for browsers that don't support Web Share API
//       navigator.clipboard
//         .writeText(`${banner.title} - ${banner.description} - ${banner.link || window.location.href}`)
//         .then(() => {
//           alert("Link copied to clipboard!")
//         })
//         .catch((err) => {
//           console.error("Failed to copy:", err)
//         })
//     }
//   }

//   // Get icon for feature
//   const getFeatureIcon = (feature) => {
//     if (feature.toLowerCase().includes("energy") || feature.toLowerCase().includes("power")) {
//       return <Zap className="w-4 h-4" />
//     } else if (feature.toLowerCase().includes("protection") || feature.toLowerCase().includes("safety")) {
//       return <Shield className="w-4 h-4" />
//     } else if (feature.toLowerCase().includes("smart") || feature.toLowerCase().includes("iot")) {
//       return <Cpu className="w-4 h-4" />
//     } else {
//       return <Star className="w-4 h-4" />
//     }
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-y-auto scroll-hidden">
//       <Header title="Banners" />

//       {/* Search and Filter Bar */}
//       <div className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800 transition-all">
//         <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2">
//           <div className="flex items-center w-full sm:w-auto">
//             {showSearch ? (
//               <div className="relative w-full sm:w-64 md:w-80">
//                 <input
//                   ref={searchInputRef}
//                   type="text"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   placeholder="Search products..."
//                   className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   onBlur={() => {
//                     if (searchQuery === "") {
//                       setShowSearch(false)
//                     }
//                   }}
//                   onKeyDown={(e) => {
//                     if (e.key === "Escape") {
//                       setSearchQuery("")
//                       setShowSearch(false)
//                     }
//                   }}
//                 />
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
//                 {searchQuery && (
//                   <button
//                     onClick={() => setSearchQuery("")}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
//                   >
//                     <X className="w-4 h-4" />
//                   </button>
//                 )}
//               </div>
//             ) : (
//               <button
//                 onClick={() => setShowSearch(true)}
//                 className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg flex items-center gap-2 text-sm"
//               >
//                 <Search className="w-4 h-4" />
//                 <span className="hidden sm:inline">Search</span>
//               </button>
//             )}
//           </div>

//           <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
//             <div className="relative group">
//               <button className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg flex items-center gap-2 text-sm">
//                 <Filter className="w-4 h-4" />
//                 <span className="hidden sm:inline">Filter</span>
//               </button>
//               <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-right">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     onClick={() => setActiveFilter(category)}
//                     className={`w-full text-left px-4 py-2 text-sm ${
//                       activeFilter === category ? "bg-blue-600 text-white" : "text-slate-200 hover:bg-slate-700"
//                     }`}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <button
//               onClick={() => setIsPaused(!isPaused)}
//               className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg"
//               aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
//             >
//               {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Active Filter Indicator */}
//       {activeFilter !== "All" && (
//         <div className="container mx-auto px-4 py-2">
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-slate-400">Filtered by:</span>
//             <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium flex items-center">
//               {activeFilter}
//               <button onClick={() => setActiveFilter("All")} className="ml-2 text-blue-400 hover:text-white">
//                 <X className="w-3 h-3" />
//               </button>
//             </span>
//           </div>
//         </div>
//       )}

//       {/* No Results Message */}
//       {filteredBanners.length === 0 && (
//         <div className="container mx-auto px-4 py-16 text-center">
//           <div className="bg-slate-800/50 rounded-xl p-8 max-w-md mx-auto">
//             <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
//             <p className="text-slate-400 mb-4">We couldn't find any products matching your search criteria.</p>
//             <button
//               onClick={() => {
//                 setSearchQuery("")
//                 setActiveFilter("All")
//               }}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
//             >
//               Clear Filters
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Banner Slider */}
//       {filteredBanners.length > 0 && (
//         <div className="container mx-auto px-4 py-6">
//           <div
//             className="overflow-hidden rounded-xl shadow-2xl transition-all bg-slate-800"
//             ref={bannerRef}
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             {filteredBanners.map((banner, index) => (
//               <div
//                 key={index}
//                 className={`w-full transition-all duration-700 ease-in-out ${
//                   activeIndex === index
//                     ? "opacity-100 transform translate-x-0"
//                     : "opacity-0 absolute transform translate-x-full"
//                 }`}
//                 style={{ display: activeIndex === index ? "block" : "none" }}
//                 aria-hidden={activeIndex !== index}
//               >
//                 <div className="grid md:grid-cols-2 gap-0">
//                   {/* Image Section */}
//                   <div className="relative h-64 sm:h-80 md:h-full">
//                     <div
//                       className="absolute inset-0 bg-cover bg-center"
//                       style={{ backgroundImage: `url(${banner.image})` }}
//                     >
//                       <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent md:bg-gradient-to-t md:from-slate-900/80 md:via-slate-900/50 md:to-transparent"></div>
//                     </div>

//                     {/* Badge */}
//                     {banner.badge && (
//                       <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
//                         {banner.badge}
//                       </div>
//                     )}

//                     {/* Discount Tag */}
//                     {banner.discount && (
//                       <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
//                         {banner.discount}
//                       </div>
//                     )}

//                     {/* Mobile Content Overlay */}
//                     <div className="md:hidden absolute inset-0 flex items-end p-6">
//                       <div className="w-full">
//                         <h2 className="text-2xl font-bold mb-1 text-white tracking-tight">{banner.title}</h2>
//                         <h3 className="text-sm text-blue-400 font-medium mb-2">{banner.subtitle}</h3>
//                         <div className="flex items-center justify-between mb-3">
//                           <div className="flex items-center gap-2">
//                             <span className="text-lg font-bold text-white">{banner.price}</span>
//                             {banner.discount && <span className="text-green-400 text-sm">{banner.discount}</span>}
//                           </div>
//                           <StarRating rating={banner.rating} />
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Content Section */}
//                   <div className="p-6 md:p-8 flex flex-col justify-center">
//                     <div className="hidden md:block">
//                       <h2 className="text-2xl lg:text-3xl font-bold mb-1 text-white tracking-tight">{banner.title}</h2>
//                       <h3 className="text-sm lg:text-base text-blue-400 font-medium mb-3">{banner.subtitle}</h3>

//                       {/* Price and Rating */}
//                       <div className="flex flex-wrap items-center gap-4 mb-4">
//                         <div className="flex items-center gap-2">
//                           <span className="text-lg lg:text-xl font-bold text-white">{banner.price}</span>
//                           {banner.discount && <span className="text-green-400 text-sm">{banner.discount}</span>}
//                         </div>
//                         <StarRating rating={banner.rating} />
//                       </div>
//                     </div>

//                     <p className="text-sm lg:text-base mb-4 text-slate-300">{banner.description}</p>

//                     {/* Features */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {banner.features.map((feature, i) => (
//                         <span
//                           key={i}
//                           className="bg-slate-700/80 text-slate-200 text-xs px-3 py-1.5 rounded-full flex items-center gap-1"
//                         >
//                           {getFeatureIcon(feature)}
//                           {feature}
//                         </span>
//                       ))}
//                     </div>

//                     <div className="flex flex-wrap gap-3 mt-4">
//                       <a
//                         href={banner.link}
//                         className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/30"
//                       >
//                         {banner.cta}
//                         <ArrowRight className="ml-2 w-4 h-4" />
//                       </a>
//                       <button
//                         onClick={() => toggleDetails(index)}
//                         className="inline-flex items-center justify-center bg-slate-700/80 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
//                       >
//                         {showDetails === index ? "Hide Details" : "View Details"}
//                         <Info className="ml-2 w-4 h-4" />
//                       </button>

//                       {/* Action Buttons */}
//                       <div className="flex gap-2 ml-auto">
//                         <button
//                           onClick={(e) => toggleFavorite(index, e)}
//                           className={`p-2 rounded-full transition-all ${
//                             isFavorite[index]
//                               ? "bg-red-600 text-white"
//                               : "bg-slate-700/80 text-slate-300 hover:bg-slate-600"
//                           }`}
//                           aria-label={isFavorite[index] ? "Remove from favorites" : "Add to favorites"}
//                         >
//                           <Heart className="w-4 h-4" fill={isFavorite[index] ? "currentColor" : "none"} />
//                         </button>
//                         <button
//                           onClick={(e) => shareProduct(banner, e)}
//                           className="p-2 rounded-full bg-slate-700/80 text-slate-300 hover:bg-slate-600 transition-all"
//                           aria-label="Share product"
//                         >
//                           <Share2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Expanded Details Panel */}
//                 <div
//                   className={`bg-slate-700 text-white overflow-hidden transition-all duration-500 ease-in-out ${
//                     showDetails === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   <div className="p-6">
//                     <h4 className="text-lg font-semibold mb-2">Product Details</h4>
//                     <p className="text-slate-300 text-sm lg:text-base">{banner.details}</p>

//                     <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
//                       {banner.features.map((feature, i) => (
//                         <div key={i} className="bg-slate-600/50 p-3 rounded-lg">
//                           <span className="block text-xs text-slate-400">Feature</span>
//                           <span className="font-medium flex items-center gap-1">
//                             {getFeatureIcon(feature)}
//                             {feature}
//                           </span>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Additional Actions */}
//                     <div className="mt-4 flex flex-wrap justify-between items-center">
//                       <div className="flex items-center gap-2">
//                         <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1.5 px-3 rounded-lg transition-all">
//                           Request Quote
//                         </button>
//                         <button className="bg-slate-600 hover:bg-slate-500 text-white text-sm font-medium py-1.5 px-3 rounded-lg transition-all">
//                           Technical Specs
//                         </button>
//                       </div>
//                       <button className="flex items-center text-blue-400 hover:text-blue-300 text-sm">
//                         <Bookmark className="w-4 h-4 mr-1" /> Save for later
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Controls */}
//           {filteredBanners.length > 1 && (
//             <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-2 sm:px-4 -mt-6 pointer-events-none">
//               <button
//                 onClick={() => goToSlide(activeIndex - 1)}
//                 className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg transition-all transform hover:scale-110 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 aria-label="Previous slide"
//               >
//                 <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>
//               <button
//                 onClick={() => goToSlide(activeIndex + 1)}
//                 className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg transition-all transform hover:scale-110 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 aria-label="Next slide"
//               >
//                 <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//               </button>
//             </div>
//           )}

//           {/* Bottom Controls */}
//           {filteredBanners.length > 0 && (
//             <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-2">
//               {/* Navigation Dots */}
//               {filteredBanners.length > 1 && (
//                 <div className="flex justify-center space-x-2 mb-3 sm:mb-0 overflow-x-auto py-2 w-full sm:w-auto">
//                   {filteredBanners.map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => goToSlide(index)}
//                       className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
//                         activeIndex === index ? "bg-blue-600 w-6" : "bg-slate-400 hover:bg-slate-300"
//                       }`}
//                       aria-label={`Go to slide ${index + 1}`}
//                       aria-current={activeIndex === index ? "true" : "false"}
//                     ></button>
//                   ))}
//                 </div>
//               )}

//               {/* Playback Controls */}
//               <div className="flex items-center space-x-2">
//                 <span className="text-xs text-slate-400">
//                   {activeIndex + 1} / {filteredBanners.length}
//                 </span>
//                 <button
//                   onClick={() => setIsPaused(!isPaused)}
//                   className="bg-slate-700 hover:bg-slate-600 text-white p-1.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
//                 >
//                   {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}

//       {/* Category Filter */}
//       <div className="container mx-auto px-4 py-2">
//         <div className="flex flex-wrap gap-2 justify-center mb-4">
//           <button
//             onClick={() => setActiveFilter("All")}
//             className={`${activeFilter === "All" ? "bg-blue-600" : "bg-slate-700 hover:bg-slate-600"} text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors`}
//           >
//             All Products
//           </button>
//           {categories
//             .filter((cat) => cat !== "All")
//             .map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveFilter(category)}
//                 className={`${activeFilter === category ? "bg-blue-600" : "bg-slate-700 hover:bg-slate-600"} text-white px-4 py-1.5 rounded-full text-sm font-medium transition-colors`}
//               >
//                 {category}
//               </button>
//             ))}
//         </div>
//       </div>

//       {/* Responsive Product Grid Preview */}
//       {filteredBanners.length > 0 && (
//         <div className="container mx-auto px-4 py-6 mt-4">
//           <h3 className="text-xl font-semibold text-white mb-4">Quick Preview</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {filteredBanners.map((banner, index) => (
//               <div
//                 key={index}
//                 className={`bg-slate-800 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 ${
//                   activeIndex === index ? "ring-2 ring-blue-500" : ""
//                 }`}
//                 onClick={() => goToSlide(index)}
//               >
//                 <div className="relative">
//                   <div className="h-36 bg-cover bg-center" style={{ backgroundImage: `url(${banner.image})` }}></div>
//                   {banner.badge && (
//                     <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
//                       {banner.badge}
//                     </div>
//                   )}
//                   <button
//                     onClick={(e) => toggleFavorite(index, e)}
//                     className={`absolute top-2 left-2 p-1.5 rounded-full ${
//                       isFavorite[index] ? "bg-red-600 text-white" : "bg-black/50 text-white hover:bg-black/70"
//                     }`}
//                   >
//                     <Heart className="w-3.5 h-3.5" fill={isFavorite[index] ? "currentColor" : "none"} />
//                   </button>
//                 </div>
//                 <div className="p-3">
//                   <div className="flex justify-between items-start mb-1">
//                     <h4 className="text-white font-medium text-sm truncate flex-1">{banner.title}</h4>
//                     <span className="text-sm font-bold text-white">{banner.price}</span>
//                   </div>
//                   <p className="text-slate-400 text-xs truncate mb-2">{banner.subtitle}</p>
//                   <div className="flex justify-between items-center">
//                     <StarRating rating={banner.rating} />
//                     {banner.discount && <span className="text-green-400 text-xs font-medium">{banner.discount}</span>}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Banner


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
  Clock,
  Calendar,
  User,
  MessageSquare,
  Eye,
  Tag,
  BookmarkIcon,
  ThumbsUp,
} from "lucide-react"

// Enhance the Banner component with blog-like features
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
  const [viewMode, setViewMode] = useState("carousel") // 'carousel' or 'blog'
  const [selectedPost, setSelectedPost] = useState(null)
  const autoPlayRef = useRef(null)
  const searchInputRef = useRef(null)
  const bannerRef = useRef(null)

  // Enhanced banner data with blog-like content
  const banners = [
    {
      title: "Smart Electrical Boards: The Future of Power Management",
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
      author: "Sarah Johnson",
      date: "April 15, 2025",
      readTime: "5 min read",
      comments: 12,
      views: 1245,
      tags: ["Smart Home", "Energy Efficiency", "IoT"],
      content: `
        <p>The electrical industry is witnessing a revolutionary transformation with the introduction of smart electrical boards. These cutting-edge devices are redefining how we manage and monitor power in both residential and commercial settings.</p>
        
        <h3>Real-Time Monitoring</h3>
        <p>One of the most significant advantages of smart electrical boards is their ability to provide real-time monitoring of power consumption. This feature allows users to track energy usage patterns, identify power-hungry appliances, and make informed decisions about energy conservation.</p>
        
        <h3>IoT Integration</h3>
        <p>Smart boards seamlessly integrate with IoT ecosystems, enabling users to control their electrical systems remotely through smartphone applications. This integration extends to voice assistants like Amazon Alexa and Google Home, offering hands-free control options.</p>
        
        <h3>Energy Optimization</h3>
        <p>Advanced algorithms in smart boards analyze usage patterns and automatically optimize power distribution. This intelligent management can lead to significant energy savings, reducing both environmental impact and utility bills.</p>
        
        <h3>Enhanced Safety Features</h3>
        <p>Safety is paramount in electrical systems, and smart boards excel in this area. They include sophisticated surge protection mechanisms, ground fault detection, and automatic shutoff capabilities in case of anomalies, providing peace of mind to users.</p>
        
        <h3>Future Prospects</h3>
        <p>As we move toward more connected and energy-efficient homes and buildings, smart electrical boards will play an increasingly vital role. The market for these devices is projected to grow substantially in the coming years, driven by consumer demand for smarter, safer, and more efficient electrical systems.</p>
      `,
    },
    {
      title: "Advanced Touch & Voice Activated Switches: The New Standard",
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
      author: "Michael Chen",
      date: "April 10, 2025",
      readTime: "4 min read",
      comments: 8,
      views: 987,
      tags: ["Smart Home", "Voice Control", "Touch Technology"],
      content: `
        <p>The humble light switch has undergone a remarkable evolution in recent years. Today's advanced switches combine elegant design with cutting-edge technology to offer unprecedented convenience and functionality.</p>
        
        <h3>The Touch Revolution</h3>
        <p>Modern switches feature capacitive touch technology that responds to the lightest touch. Many models include haptic feedback, providing a subtle vibration to confirm activation. This technology eliminates mechanical parts, significantly extending the lifespan of the switch.</p>
        
        <h3>Voice Activation: Hands-Free Control</h3>
        <p>Voice-activated switches represent the next frontier in convenience. These devices integrate with popular smart home platforms like Amazon Alexa, Google Assistant, and Apple HomeKit, allowing users to control lighting and connected appliances with simple voice commands.</p>
        
        <h3>Smart Features</h3>
        <p>Beyond basic on/off functionality, today's switches offer programmable timers, dimming capabilities, and scene setting. LED indicators provide status information at a glance, while some models include ambient light sensors to automatically adjust brightness based on environmental conditions.</p>
        
        <h3>Design Aesthetics</h3>
        <p>Modern switches are designed with aesthetics in mind. Sleek, minimalist designs complement contemporary interiors, while customizable faceplates allow for personalization. Some manufacturers offer switches in various finishes, including brushed metal, glass, and matte options.</p>
        
        <h3>Installation Considerations</h3>
        <p>While most advanced switches are designed to fit standard electrical boxes, some features may require additional wiring or a neutral wire. Professional installation is recommended for optimal performance and safety.</p>
      `,
    },
    {
      title: "Precision Voltage Regulators: Ensuring Electrical Stability",
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
      author: "Dr. Robert Williams",
      date: "April 5, 2025",
      readTime: "7 min read",
      comments: 15,
      views: 1567,
      tags: ["Industrial", "Voltage Regulation", "Power Quality"],
      content: `
        <p>Voltage fluctuations represent one of the most common and potentially damaging power quality issues in both residential and industrial settings. Precision voltage regulators offer a sophisticated solution to this persistent problem.</p>
        
        <h3>Understanding Voltage Instability</h3>
        <p>Voltage instability can manifest as sags, swells, or brownouts, each presenting unique challenges to electrical equipment. These fluctuations can result from grid issues, heavy machinery startup, or even weather conditions. Without proper regulation, these variations can significantly reduce the lifespan of sensitive electronics and industrial equipment.</p>
        
        <h3>The Technology Behind Precision Regulation</h3>
        <p>Modern voltage regulators employ microprocessor-controlled systems that continuously monitor input voltage and make real-time adjustments to maintain stable output. Advanced models use buck-boost technology, which can both increase and decrease voltage as needed, providing comprehensive protection against all types of fluctuations.</p>
        
        <h3>Digital Monitoring and Control</h3>
        <p>Today's regulators feature digital displays that provide real-time voltage readings and system status information. Many models offer connectivity options for remote monitoring and control, allowing facility managers to track power quality metrics from anywhere.</p>
        
        <h3>Protection Mechanisms</h3>
        <p>Beyond voltage stabilization, premium regulators incorporate multiple protection features, including surge suppression, short circuit protection, and thermal shutdown capabilities. These safeguards provide comprehensive protection for connected equipment.</p>
        
        <h3>Applications and Benefits</h3>
        <p>Precision regulators find applications in diverse settings, from protecting home entertainment systems to ensuring stable power for critical medical equipment and industrial machinery. The benefits include extended equipment lifespan, improved performance, and significant energy savings through optimized power consumption.</p>
      `,
    },
    {
      title: "Enterprise-Grade Power Distribution Units: Backbone of Modern Data Centers",
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
      author: "Jennifer Martinez",
      date: "March 30, 2025",
      readTime: "6 min read",
      comments: 9,
      views: 1123,
      tags: ["Data Center", "Power Distribution", "Enterprise"],
      content: `
        <p>Power Distribution Units (PDUs) serve as the critical link between facility power and IT equipment in modern data centers. As data centers grow in complexity and density, the role of advanced PDUs becomes increasingly vital.</p>
        
        <h3>Evolution of PDU Technology</h3>
        <p>PDUs have evolved from simple power strips to sophisticated power management systems. Today's enterprise-grade units offer metering, switching, and monitoring capabilities that provide unprecedented visibility and control over power distribution.</p>
        
        <h3>Intelligent Power Management</h3>
        <p>Modern PDUs feature outlet-level monitoring and control, allowing data center operators to track power consumption with granular precision. This capability enables accurate capacity planning, load balancing, and identification of potential issues before they impact operations.</p>
        
        <h3>Remote Management Capabilities</h3>
        <p>Network-connected PDUs support remote monitoring and management through SNMP, DCIM integration, or proprietary management software. These interfaces provide real-time data on power consumption, environmental conditions, and system status, enabling proactive management from anywhere.</p>
        
        <h3>Redundancy and Reliability Features</h3>
        <p>Enterprise PDUs incorporate redundant power paths, hot-swappable components, and automatic transfer switches to ensure continuous operation even during maintenance or component failure. These features are essential for maintaining the high availability expected in modern data centers.</p>
        
        <h3>Energy Efficiency Considerations</h3>
        <p>Beyond distribution, today's PDUs contribute to energy efficiency initiatives through precise monitoring and control. By identifying inefficient equipment and optimizing power distribution, these units help reduce operational costs and environmental impact.</p>
      `,
    },
    {
      title: "Industrial Circuit Breakers: Advanced Protection for Critical Systems",
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
      author: "Thomas Anderson",
      date: "March 25, 2025",
      readTime: "8 min read",
      comments: 21,
      views: 1876,
      tags: ["Industrial Safety", "Circuit Protection", "Electrical Systems"],
      content: `
        <p>Industrial circuit breakers represent the first line of defense against electrical faults in critical systems. These sophisticated devices combine mechanical robustness with advanced electronic protection to safeguard valuable equipment and ensure personnel safety.</p>
        
        <h3>Beyond Basic Protection</h3>
        <p>While residential circuit breakers focus primarily on overload and short circuit protection, industrial variants offer a comprehensive suite of protective functions. These include ground fault protection, under/over voltage protection, phase loss detection, and harmonic filtering capabilities.</p>
        
        <h3>Intelligent Trip Mechanisms</h3>
        <p>Modern industrial breakers feature microprocessor-controlled trip units that can be precisely calibrated for specific applications. These intelligent systems can differentiate between momentary surges and genuine fault conditions, reducing nuisance tripping while maintaining robust protection.</p>
        
        <h3>Communication and Integration</h3>
        <p>Network-capable circuit breakers can communicate with building management systems and SCADA networks, providing real-time status information and allowing remote operation. This integration enables comprehensive power management strategies and facilitates predictive maintenance approaches.</p>
        
        <h3>Arc Flash Mitigation</h3>
        <p>Advanced industrial breakers incorporate arc flash reduction technology, which can significantly reduce incident energy during fault conditions. These features include maintenance modes with reduced trip times and zone-selective interlocking for coordinated protection.</p>
        
        <h3>Testing and Maintenance Considerations</h3>
        <p>Regular testing is essential for ensuring the reliability of protection systems. Modern breakers include built-in test capabilities and maintenance indicators that simplify this critical process, helping to maintain compliance with safety standards and regulations.</p>
      `,
    },
    {
      title: "Smart Home Lighting Controls: Creating Ambiance with Intelligence",
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
      author: "Emily Parker",
      date: "March 20, 2025",
      readTime: "5 min read",
      comments: 14,
      views: 1432,
      tags: ["Smart Home", "Lighting", "Home Automation"],
      content: `
        <p>Lighting control systems have transcended basic on/off functionality to become sophisticated platforms for enhancing comfort, productivity, and energy efficiency in modern spaces. These intelligent systems transform how we interact with our environments.</p>
        
        <h3>The Science of Lighting Scenes</h3>
        <p>Smart lighting controls enable the creation of preset scenes that optimize illumination for different activities and times of day. These scenes can be designed to support circadian rhythms, enhance productivity in work areas, or create ambiance for entertainment spaces.</p>
        
        <h3>Wireless Control Technologies</h3>
        <p>Modern lighting systems utilize various wireless protocols, including Zigbee, Z-Wave, and Bluetooth mesh networks, to enable reliable control without extensive rewiring. These technologies allow for flexible installation and seamless expansion of the system over time.</p>
        
        <h3>Integration with Smart Home Ecosystems</h3>
        <p>Lighting controls serve as a cornerstone of comprehensive smart home systems, integrating with security, HVAC, and entertainment platforms. This integration enables coordinated automation scenarios, such as pathway lighting when motion is detected or mood lighting that complements media content.</p>
        
        <h3>Energy Management Benefits</h3>
        <p>Beyond convenience, smart lighting delivers significant energy savings through occupancy sensing, daylight harvesting, and scheduled dimming. Advanced systems provide detailed energy consumption analytics, helping users identify opportunities for further optimization.</p>
        
        <h3>Future Trends</h3>
        <p>The future of lighting control includes tunable white lighting that adjusts color temperature throughout the day, Li-Fi technology that transmits data through light waves, and AI-driven systems that learn and adapt to user preferences automatically.</p>
      `,
    },
    {
      title: "Solar Power Inverters: Maximizing Renewable Energy Efficiency",
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
      author: "Dr. Amanda Lee",
      date: "March 15, 2025",
      readTime: "9 min read",
      comments: 18,
      views: 2145,
      tags: ["Renewable Energy", "Solar Power", "Energy Efficiency"],
      content: `
        <p>Solar power inverters serve as the critical link between photovoltaic arrays and usable electricity, transforming direct current (DC) from solar panels into alternating current (AC) for home or grid use. As solar adoption accelerates globally, inverter technology continues to advance rapidly.</p>
        
        <h3>Efficiency Breakthroughs</h3>
        <p>Modern inverters achieve conversion efficiencies exceeding 98%, representing significant improvements over earlier generations. These gains translate directly to increased energy yield and faster return on investment for solar installations. Advanced maximum power point tracking (MPPT) algorithms further optimize performance under varying conditions.</p>
        
        <h3>Grid Integration Capabilities</h3>
        <p>Grid-tie inverters incorporate sophisticated features for seamless interaction with utility networks. These include anti-islanding protection, low voltage ride-through, and reactive power control capabilities that support grid stability while maximizing solar utilization.</p>
        
        <h3>Battery Storage Integration</h3>
        <p>Hybrid inverters combine solar conversion with battery management functions, enabling energy storage for self-consumption or backup power. These systems automatically prioritize power sources based on availability, load requirements, and user preferences, maximizing renewable energy utilization.</p>
        
        <h3>Monitoring and Analytics</h3>
        <p>Contemporary inverters feature comprehensive monitoring capabilities accessible through web portals and mobile applications. These platforms provide real-time performance data, historical analytics, and predictive maintenance alerts, empowering system owners to optimize their renewable energy assets.</p>
        
        <h3>Emerging Technologies</h3>
        <p>The next generation of inverters will leverage wide-bandgap semiconductors like silicon carbide and gallium nitride, enabling higher switching frequencies, reduced thermal losses, and smaller form factors. These advancements will further improve efficiency while reducing manufacturing costs.</p>
      `,
    },
    {
      title: "Industrial UPS Systems: Ensuring Continuous Operations in Critical Environments",
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
      author: "James Wilson",
      date: "March 10, 2025",
      readTime: "7 min read",
      comments: 11,
      views: 1654,
      tags: ["Power Protection", "Critical Infrastructure", "Business Continuity"],
      content: `
        <p>Uninterruptible Power Supply (UPS) systems represent the last line of defense against power disruptions in critical environments. These sophisticated systems combine power conversion, energy storage, and intelligent management to ensure continuous operation of essential equipment.</p>
        
        <h3>Beyond Backup Power</h3>
        <p>Modern UPS systems provide more than simple backup power. They deliver comprehensive power quality management, including voltage regulation, frequency stabilization, harmonic filtering, and surge suppression. These functions protect sensitive equipment from the full spectrum of power quality issues.</p>
        
        <h3>Topology Considerations</h3>
        <p>Industrial applications typically employ double-conversion (online) UPS topology, which continuously converts incoming AC power to DC and back to AC, providing complete isolation from utility power anomalies. This approach delivers superior protection compared to line-interactive or standby topologies commonly used in less critical applications.</p>
        
        <h3>Scalability and Redundancy</h3>
        <p>Enterprise UPS systems support modular expansion and N+X redundancy configurations, allowing organizations to scale capacity and enhance reliability as needs evolve. Parallel operation capabilities enable multiple units to share load while providing mutual backup.</p>
        
        <h3>Advanced Battery Management</h3>
        <p>Battery health represents the most critical factor in UPS reliability. Modern systems incorporate sophisticated battery management technologies, including individual cell monitoring, temperature-compensated charging, and predictive analytics that forecast battery end-of-life before failures occur.</p>
        
        <h3>Integration with Facility Systems</h3>
        <p>Industrial UPS systems integrate with building management systems, data center infrastructure management platforms, and emergency power systems to enable coordinated responses to power events and facilitate comprehensive energy management strategies.</p>
      `,
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
      banner.features.some((feature) => feature.toLowerCase().includes(searchQuery.toLowerCase())) ||
      banner.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

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
    if (!isPaused && filteredBanners.length > 0 && viewMode === "carousel") {
      autoPlayRef.current = setInterval(() => {
        goToSlide(activeIndex + 1)
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [activeIndex, isPaused, filteredBanners.length, viewMode])

  // Pause auto-slide on hover
  useEffect(() => {
    if ((isHovering || showSearch) && !isPaused) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    } else if (!isPaused && filteredBanners.length > 0 && viewMode === "carousel") {
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
  }, [isHovering, isPaused, activeIndex, goToSlide, showSearch, filteredBanners.length, viewMode])

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

  // View full blog post
  const viewBlogPost = (index) => {
    setSelectedPost(index)
    setViewMode("blog")
    window.scrollTo(0, 0)
  }

  // Return to carousel/grid view
  const returnToGrid = () => {
    setSelectedPost(null)
    setViewMode("carousel")
  }

  // Get all unique categories
  const categories = ["All", ...new Set(banners.map((banner) => banner.category))]

  // Get all unique tags
  const allTags = [...new Set(banners.flatMap((banner) => banner.tags))]

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
      <Header title={viewMode === "blog" && selectedPost !== null ? "Blog" : "Banners"} />

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
                  placeholder="Search products or articles..."
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
            {viewMode === "carousel" && (
              <>
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
                  onClick={() => setViewMode("blog")}
                  className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg flex items-center gap-2 text-sm"
                  title="Switch to blog view"
                >
                  <BookmarkIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">Blog View</span>
                </button>

                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg"
                  aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
                >
                  {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                </button>
              </>
            )}

            {viewMode === "blog" && selectedPost !== null && (
              <button
                onClick={returnToGrid}
                className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg flex items-center gap-2 text-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Products</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Active Filter Indicator */}
      {activeFilter !== "All" && viewMode === "carousel" && (
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

      {/* Blog Post View */}
      {viewMode === "blog" && selectedPost !== null && filteredBanners.length > 0 && (
        <div className="container mx-auto px-4 py-6">
          <div className="bg-slate-800 rounded-xl overflow-hidden shadow-xl">
            {/* Featured Image */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${filteredBanners[selectedPost].image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  {filteredBanners[selectedPost].category}
                </span>
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {filteredBanners[selectedPost].title}
                </h1>
              </div>
            </div>

            {/* Article Meta */}
            <div className="border-b border-slate-700">
              <div className="container mx-auto px-6 py-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                        {filteredBanners[selectedPost].author
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{filteredBanners[selectedPost].author}</p>
                        <div className="flex items-center gap-2 text-slate-400 text-xs">
                          <Calendar className="w-3 h-3" />
                          <span>{filteredBanners[selectedPost].date}</span>
                          <span>•</span>
                          <Clock className="w-3 h-3" />
                          <span>{filteredBanners[selectedPost].readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <Eye className="w-3 h-3" />
                      <span>{filteredBanners[selectedPost].views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <MessageSquare className="w-3 h-3" />
                      <span>{filteredBanners[selectedPost].comments}</span>
                    </div>
                    <button
                      onClick={(e) => shareProduct(filteredBanners[selectedPost], e)}
                      className="p-2 rounded-full bg-slate-700 text-slate-300 hover:bg-slate-600 transition-all"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => toggleFavorite(selectedPost, e)}
                      className={`p-2 rounded-full transition-all ${
                        isFavorite[selectedPost]
                          ? "bg-red-600 text-white"
                          : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                      }`}
                    >
                      <Heart className="w-4 h-4" fill={isFavorite[selectedPost] ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="container mx-auto px-6 py-8">
              <div className="max-w-3xl mx-auto">
                {/* Subtitle */}
                <h2 className="text-xl text-blue-400 font-medium mb-6">{filteredBanners[selectedPost].subtitle}</h2>

                {/* Content */}
                <div
                  className="prose prose-lg prose-invert max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: filteredBanners[selectedPost].content }}
                ></div>

                {/* Product Info Box */}
                <div className="bg-slate-700/50 rounded-xl p-6 mb-8">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="aspect-square rounded-lg overflow-hidden">
                        <img
                          src={filteredBanners[selectedPost].image || "/placeholder.svg"}
                          alt={filteredBanners[selectedPost].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl font-bold text-white mb-2">Product Details</h3>
                      <p className="text-slate-300 mb-4">{filteredBanners[selectedPost].details}</p>

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl font-bold text-white">{filteredBanners[selectedPost].price}</span>
                          {filteredBanners[selectedPost].discount && (
                            <span className="text-green-400 text-sm font-medium">
                              {filteredBanners[selectedPost].discount}
                            </span>
                          )}
                        </div>
                        <StarRating rating={filteredBanners[selectedPost].rating} />
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {filteredBanners[selectedPost].features.map((feature, i) => (
                          <span
                            key={i}
                            className="bg-slate-600/80 text-slate-200 text-xs px-3 py-1.5 rounded-full flex items-center gap-1"
                          >
                            {getFeatureIcon(feature)}
                            {feature}
                          </span>
                        ))}
                      </div>

                      <a
                        href={filteredBanners[selectedPost].link}
                        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/30"
                      >
                        {filteredBanners[selectedPost].cta}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-slate-400 text-sm">Tags:</span>
                  {filteredBanners[selectedPost].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Comments Section */}
                <div className="border-t border-slate-700 pt-8">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Comments ({filteredBanners[selectedPost].comments})
                  </h3>

                  {/* Comment Form */}
                  <div className="bg-slate-700/30 rounded-xl p-4 mb-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-600 flex-shrink-0"></div>
                      <div className="flex-grow">
                        <textarea
                          placeholder="Add a comment..."
                          className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[100px]"
                        ></textarea>
                        <div className="flex justify-end mt-2">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all text-sm">
                            Post Comment
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sample Comments */}
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                        JD
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-white">John Doe</span>
                          <span className="text-slate-400 text-xs">2 days ago</span>
                        </div>
                        <p className="text-slate-300 text-sm mb-2">
                          This is exactly what I've been looking for! The energy efficiency features are impressive.
                        </p>
                        <div className="flex items-center gap-4 text-xs text-slate-400">
                          <button className="flex items-center gap-1 hover:text-white">
                            <ThumbsUp className="w-3 h-3" /> 12
                          </button>
                          <button className="hover:text-white">Reply</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                        AS
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-white">Alice Smith</span>
                          <span className="text-slate-400 text-xs">1 day ago</span>
                        </div>
                        <p className="text-slate-300 text-sm mb-2">
                          Great article! I'd love to see a comparison with other similar products in the market.
                        </p>
                        <div className="flex items-center gap-4 text-xs text-slate-400">
                          <button className="flex items-center gap-1 hover:text-white">
                            <ThumbsUp className="w-3 h-3" /> 8
                          </button>
                          <button className="hover:text-white">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBanners
                .filter((_, index) => index !== selectedPost)
                .slice(0, 3)
                .map((banner, index) => (
                  <div
                    key={index}
                    className="bg-slate-800 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
                    onClick={() => viewBlogPost(filteredBanners.findIndex((b) => b.title === banner.title))}
                  >
                    <div className="relative">
                      <div
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${banner.image})` }}
                      ></div>
                      <div className="absolute top-2 left-2">
                        <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                          {banner.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="text-white font-bold text-lg mb-2 line-clamp-2">{banner.title}</h4>
                      <p className="text-slate-400 text-sm mb-3 line-clamp-2">{banner.description}</p>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{banner.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{banner.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* Banner Slider */}
      {viewMode === "carousel" && filteredBanners.length > 0 && (
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

                      <button
                        onClick={() => viewBlogPost(index)}
                        className="inline-flex items-center justify-center bg-slate-700/80 hover:bg-slate-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
                      >
                        Read Article
                        <BookmarkIcon className="ml-2 w-4 h-4" />
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
      {viewMode === "carousel" && (
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
      )}

      {/* Blog Grid View */}
      {viewMode === "blog" && selectedPost === null && filteredBanners.length > 0 && (
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Latest Articles</h2>
            <button
              onClick={() => setViewMode("carousel")}
              className="bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-lg flex items-center gap-2 text-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Product View</span>
            </button>
          </div>

          {/* Featured Article */}
          <div
            className="bg-slate-800 rounded-xl overflow-hidden shadow-xl mb-8 cursor-pointer hover:shadow-2xl transition-all duration-300"
            onClick={() => viewBlogPost(0)}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${filteredBanners[0].image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/50 to-transparent"></div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {filteredBanners[0].category}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <Calendar className="w-3 h-3" />
                  <span>{filteredBanners[0].date}</span>
                  <span>•</span>
                  <Clock className="w-3 h-3" />
                  <span>{filteredBanners[0].readTime}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{filteredBanners[0].title}</h3>
                <p className="text-slate-300 mb-4">{filteredBanners[0].description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                      {filteredBanners[0].author
                        .split(" ")
                        .map((name) => name[0])
                        .join("")}
                    </div>
                    <span className="text-sm text-slate-300">{filteredBanners[0].author}</span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-400 text-xs">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{filteredBanners[0].views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-3 h-3" />
                      <span>{filteredBanners[0].comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBanners.slice(1).map((banner, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1"
                onClick={() => viewBlogPost(index + 1)}
              >
                <div className="relative">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${banner.image})` }}></div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                      {banner.category}
                    </span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleFavorite(index + 1, e)
                    }}
                    className={`absolute top-2 right-2 p-1.5 rounded-full ${
                      isFavorite[index + 1] ? "bg-red-600 text-white" : "bg-black/50 text-white hover:bg-black/70"
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5" fill={isFavorite[index + 1] ? "currentColor" : "none"} />
                  </button>
                </div>
                <div className="p-4">
                  <h4 className="text-white font-bold text-lg mb-2 line-clamp-2">{banner.title}</h4>
                  <p className="text-slate-400 text-sm mb-3 line-clamp-2">{banner.description}</p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{banner.author.split(" ")[0]}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{banner.date.split(" ")[0]}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        <span>{banner.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tags Section */}
          <div className="mt-12 bg-slate-800/50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(tag)}
                  className="bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1 transition-colors"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Responsive Product Grid Preview */}
      {viewMode === "carousel" && filteredBanners.length > 0 && (
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
