import { useState, useEffect, useCallback, useRef } from "react"
import Header from "../components/Common/Header"
import { ChevronLeft, ChevronRight, Pause, Play, ExternalLink, Info } from "lucide-react"

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [showDetails, setShowDetails] = useState(null)
  const bannerRef = useRef(null)
  const autoPlayRef = useRef(null)

  // Enhanced banner data with more electrical products
  const banners = [
    {
      title: "Smart Electrical Boards",
      subtitle: "Next Generation Power Management",
      description:
        "Experience cutting-edge smart boards with real-time monitoring and energy optimization. Compatible with IoT for seamless control.",
      image: "https://imgs.search.brave.com/nSUT5V-JNhMFfz7TfhvG_ZE7BX2tPHAP80CkRJwWGlQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly81Lmlt/aW1nLmNvbS9kYXRh/NS9JVS9BUy9HTEFE/TUlOLTU5NjkxNjM2/L3NtYXJ0LXN3aXRj/aC1ib2FyZC01MDB4/NTAwLnBuZw",
      link: "#",
      features: ["IoT Integration", "Energy Saving", "Remote Access", "Surge Protection"],
      details:
        "Our smart electrical boards feature advanced microprocessors that monitor power consumption in real-time. They can be integrated with home automation systems and controlled via smartphone apps. The boards include surge protection and can automatically optimize power distribution based on usage patterns.",
      cta: "Explore Smart Boards",
      badge: "New",
    },
    {
      title: "Advanced Switches",
      subtitle: "Touch & Voice Activated Controls",
      description:
        "High-durability switches with touch control and voice activation. Designed for modern homes and industries.",
      image: "https://imgs.search.brave.com/h_ayf4QGe0GVdMDnooYEHd6vELKudyZKAlo1RBxUAGY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5mcy5jb20vaW1h/Z2VzL2NvbW11bml0/eS9lcnAvNVdtV1Nf/RWJEc3kud2VicA",
      link: "#",
      features: ["Voice Control", "Touch Sensitive", "Long Lifespan", "LED Indicators"],
      details:
        "These premium switches feature capacitive touch technology with haptic feedback. They support voice commands through integration with popular smart home platforms. The switches have a rated lifespan of over 100,000 operations and include customizable LED indicators for status feedback.",
      cta: "View Switch Collection",
      badge: "Popular",
    },
    {
      title: "Precision Regulators",
      subtitle: "Voltage Stabilization Technology",
      description: "Regulate voltage with precision using our smart regulators, ensuring device safety and efficiency.",
      image: "https://imgs.search.brave.com/_zbpwv5745w2yqJUJeR2eXBF11xky0r6gOfJ4TFpcz8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnVyb24uY29tL3Np/dGVzL2hwcy1tYWMz/LWxpZmVzY2llbmNl/cy1lbGVjdHJvbmlj/cy9maWxlcy9zdHls/ZXMvOTUxeDYzOC9w/dWJsaWMvbWlncmF0/ZWQtaW1hZ2VzL0Z1/cm9uLVByZXNzdXJl/LVJlZ3VsYXRvci0w/LjI1LVBuZXVtYXRp/cXVlLUFjY2Vzc29y/aWVzLTEuanBnP2l0/b2s9SDh6SGRFajEm/Y2FjaGU9SVd2UGd1/NnE",
      link: "#",
      features: ["Overvoltage Protection", "Efficiency Boost", "Compact Design", "Digital Display"],
      details:
        "Our precision regulators maintain stable output voltage even during significant input fluctuations. They feature digital displays showing real-time voltage readings and include multiple protection mechanisms against surges, spikes, and brownouts. The compact design allows for installation in tight spaces.",
      cta: "Discover Regulators",
      badge: "Bestseller",
    },
    {
      title: "Power Distribution Units",
      subtitle: "Enterprise-Grade Power Solutions",
      description: "Optimize power distribution with our innovative PDUs, built for scalability and reliability.",
      image:
        "https://imgs.search.brave.com/7HhauylgqerOJHuFNBEnIqWkiuraIq42bqrPSIwtAjo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly96ZXZl/LmF1L2JyaWdodGZv/cmNlL3VwbG9hZHMv/MjAyMy8xMi9zd2l0/Y2hib2FyZC1oYWxs/d2F5LmpwZw",
      link: "#",
      features: ["Scalable Design", "Reliable Performance", "Easy Installation", "Remote Monitoring"],
      details:
        "These enterprise-grade PDUs feature modular design for easy expansion. They include remote monitoring capabilities with SNMP support and can be integrated with data center management systems. The units feature hot-swappable components for maintenance without downtime and support redundant power configurations.",
      cta: "Explore PDU Range",
      badge: "Premium",
    },
    // Added new electrical products
    {
      title: "Industrial Circuit Breakers",
      subtitle: "Maximum Protection Systems",
      description:
        "Heavy-duty circuit breakers designed for industrial applications with advanced trip mechanisms and fault detection.",
      image: "https://imgs.search.brave.com/Zv3FlKKlWfgUhbpw8O5A_XKW0e-uqe47z-vbsoa6XG8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDct/cnQuZ29vZ2xldXNl/cmNvbnRlbnQuY29t/L2RvY3N6L0FEXzRu/WGRNY0RITnVZbU9M/MF83akJHMXZFeldE/c2N3N1IxNmtXTFd0/aXZnejVxTk5qZUND/a0lsVndBOFV4eXZ4/MFdGcVZIZzhyZExl/cXRYcnFwbW90dmh6/NHo2WU1QOWhqRlBy/SzJDdDZfVzhiRE9G/NVUtTG1iRzAtSHV5/amtRZlZzQ0FQTjMw/bWFYTFE_a2V5PXE5/Y2YzWGxzbGpNeVdl/b0tVaEc3d1hCUQ.jpeg",
      link: "#",
      features: ["Short Circuit Protection", "Thermal Protection", "Adjustable Trip Settings", "Status Indicators"],
      details:
        "Our industrial circuit breakers are engineered for high-current applications up to 1000A. They feature advanced thermal and magnetic trip mechanisms with adjustable settings. The breakers include status indicators and can be integrated with building management systems for remote monitoring and control.",
      cta: "View Circuit Breakers",
      badge: "Industrial",
    },
    {
      title: "Smart Home Lighting Controls",
      subtitle: "Intelligent Illumination Systems",
      description: "Complete lighting control solutions with dimming, scheduling, and scene programming capabilities.",
      image: "https://imgs.search.brave.com/rKZup6-Y-wgTgEd5JdaPxI0qezuefDkZ2pnpURYJUg8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y25ldC5jb20vYS9p/bWcvcmVzaXplL2Fl/ZmI0OTJkODNmNjMy/YTYwOGUwM2ZiYjNj/YTFkMjhiNzE3YTJh/MTQvaHViLzIwMTYv/MTEvMjIvZjFhZWYx/OWEtMzQwYS00YjI1/LTg2MTgtMWQ5ZmQ0/NGRjNzA2L2x1dHJv/bi1jYXNldGEtaW4t/d2FsbC13aXJlbGVz/cy1zbWFydC1saWdo/dGluZy1raXQtcHJv/ZHVjdC1waG90b3Mt/Ni5qcGc_YXV0bz13/ZWJwJmhlaWdodD01/MDA",
      link: "#",
      features: ["Wireless Control", "Scene Programming", "Energy Monitoring", "Voice Compatible"],
      details:
        "Our smart lighting control systems allow for complete customization of your home or office lighting. Create scenes for different activities, schedule lighting changes throughout the day, and integrate with voice assistants. The system monitors energy usage and can suggest optimizations to reduce power consumption.",
      cta: "Explore Lighting Controls",
      badge: "Smart Home",
    },
    {
      title: "Solar Power Inverters",
      subtitle: "Renewable Energy Conversion",
      description:
        "High-efficiency inverters for solar panel systems with grid-tie capabilities and battery backup options.",
      image: "https://imgs.search.brave.com/fWwH2sPJY2zDTYw7BiFjjLo8QOxQ6owWstzIanWHm4I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdW5n/b2xkcG93ZXIuY29t/L2Nkbi9zaG9wL2Zp/bGVzLzAyXzVhODlj/OTc2LTBkMWYtNGRl/Mi04MmQxLTgzMGE5/ODU1ZDM0Yy05Mzc2/MTUuanBnP3Y9MTcz/NjQ5NDA2NSZ3aWR0/aD0yMDQ4",
      link: "#",
      features: ["High Efficiency", "Grid-Tie Ready", "Battery Integration", "Monitoring App"],
      details:
        "Our solar inverters convert DC power from solar panels to AC power for home use with up to 98% efficiency. They feature grid-tie capabilities for selling excess power back to the utility company and can integrate with battery storage systems for backup power. The companion app provides real-time monitoring of power generation and consumption.",
      cta: "Discover Solar Solutions",
      badge: "Renewable",
    },
    {
      title: "Industrial UPS Systems",
      subtitle: "Uninterrupted Power Supply",
      description:
        "Reliable backup power systems for critical infrastructure with fast switchover and extended runtime.",
      image: "https://imgs.search.brave.com/1EKYgPGuXObQ79AR3bTh9z6sC1Mgfw806LvpIqhs7LQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saXJw/LmNkbi13ZWJzaXRl/LmNvbS9mNTQ0NmRj/ZC9kbXMzcmVwL211/bHRpL29wdC9pbmR1/c3RyaWFsLVVQUy1z/eXN0ZW1zLS0yODEt/MjktMTkyMHcuanBn",
      link: "#",
      features: ["Zero Transfer Time", "Extended Runtime", "Power Conditioning", "Remote Management"],
      details:
        "Our industrial UPS systems provide critical power protection for servers, medical equipment, and industrial processes. They feature zero transfer time to backup power, power conditioning to protect sensitive equipment, and can be configured with extended battery modules for longer runtime during outages. Remote management capabilities allow for monitoring and control from anywhere.",
      cta: "Explore UPS Systems",
      badge: "Critical",
    },
  ]

  const goToSlide = useCallback(
    (index) => {
      let newIndex = index
      if (index < 0) newIndex = banners.length - 1
      if (index >= banners.length) newIndex = 0
      setActiveIndex(newIndex)
    },
    [banners.length],
  )
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        goToSlide(activeIndex + 1)
      }, 5000) 
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [activeIndex, isPaused, goToSlide])

  // Pause auto-slide on hover
  useEffect(() => {
    if (isHovering && !isPaused) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    } else if (!isPaused) {
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
  }, [isHovering, isPaused, activeIndex, goToSlide])

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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        goToSlide(activeIndex - 1)
      } else if (e.key === "ArrowRight") {
        goToSlide(activeIndex + 1)
      } else if (e.key === "Space") {
        setIsPaused(!isPaused)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex, isPaused, goToSlide])

  // Toggle details panel
  const toggleDetails = (index) => {
    if (showDetails === index) {
      setShowDetails(null)
    } else {
      setShowDetails(index)
    }
  }

  return (
    <div className="flex-1 overflow-hidden relative z-10 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen overflow-y-auto scroll-hidden">
      <Header title="Banners" />

      {/* Banner Slider */}
      <div className="relative w-full max-w-7xl mx-auto px-4 py-6">
        <div
          className="overflow-hidden rounded-xl shadow-2xl"
          ref={bannerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {banners.map((banner, index) => (
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
              <div
                className="bg-cover bg-center h-64 sm:h-80 md:h-96 lg:h-[28rem] w-full relative"
                style={{ backgroundImage: `url(${banner.image})` }}
              >
                {/* Badge */}
                {banner.badge && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {banner.badge}
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-center px-6 sm:px-10 md:px-16">
                  <div className="max-w-2xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 text-white tracking-tight">
                      {banner.title}
                    </h2>
                    <h3 className="text-sm sm:text-base md:text-lg text-blue-400 font-medium mb-3">
                      {banner.subtitle}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg mb-4 text-gray-200 max-w-xl">{banner.description}</p>

                    {/* Features */}
                    <div className="hidden sm:flex flex-wrap gap-2 mb-4">
                      {banner.features.map((feature, i) => (
                        <span
                          key={i}
                          className="bg-gray-800/80 text-gray-200 text-xs md:text-sm px-3 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-4">
                      <a
                        href={banner.link}
                        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-lg hover:shadow-blue-500/30"
                      >
                        {banner.cta}
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                      <button
                        onClick={() => toggleDetails(index)}
                        className="inline-flex items-center justify-center bg-gray-700/80 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-all"
                      >
                        {showDetails === index ? "Hide Details" : "View Details"}
                        <Info className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expanded Details Panel */}
              <div
                className={`bg-gray-800 text-white overflow-hidden transition-all duration-500 ease-in-out ${
                  showDetails === index ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 sm:p-6 ">
                  <h4 className="text-lg font-semibold mb-2">Product Details</h4>
                  <p className="text-gray-300 text-sm sm:text-base ">{banner.details}</p>

                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {banner.features.map((feature, i) => (
                      <div key={i} className="bg-gray-700/50 p-3 rounded-lg">
                        <span className="block text-xs text-gray-400">Feature</span>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
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

        {/* Bottom Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-2">
          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mb-3 sm:mb-0 overflow-x-auto py-2 w-full sm:w-auto">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  activeIndex === index ? "bg-blue-600 w-6" : "bg-gray-400 hover:bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : "false"}
              ></button>
            ))}
          </div>

          {/* Playback Controls */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-400">
              {activeIndex + 1} / {banners.length}
            </span>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="bg-gray-700 hover:bg-gray-600 text-white p-1.5 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="w-full max-w-7xl mx-auto px-4 py-2">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">All Products</button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Smart Home
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Industrial
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Renewable
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
            Safety
          </button>
        </div>
      </div>

      {/* Responsive Product Grid Preview */}
      <div className="w-full max-w-7xl mx-auto px-4 py-6 mt-4 hidden md:block">
        <h3 className="text-xl font-semibold text-white mb-4">Quick Preview</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-lg ${
                activeIndex === index ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="h-24 bg-cover bg-center" style={{ backgroundImage: `url(${banner.image})` }}></div>
              <div className="p-3">
                <h4 className="text-white font-medium text-sm truncate">{banner.title}</h4>
                <p className="text-gray-400 text-xs truncate">{banner.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Banner
