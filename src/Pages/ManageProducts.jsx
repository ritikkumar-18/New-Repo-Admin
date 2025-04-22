import { useState, useEffect, useRef } from "react"
import Header from "../components/Common/Header"
import {motion} from "framer-motion"
import { Search, Filter, Plus, Edit, Trash2, ChevronDown, ChevronUp, Eye, Download, Upload, ArrowUpDown, CheckCircle2, AlertCircle, Clock, Tag, Zap, Shield, Cpu, X, Save, RefreshCw, BarChart3, MoreHorizontal, SlidersHorizontal, Layers, GridIcon, List, ArrowUp, ArrowDown, Star, Calendar, Truck, DollarSign, Package, Percent, ExternalLink, Copy, ImageIcon, Loader2, Info, ChevronLeft, ChevronRight, FileText, ShoppingCart, Award, TrendingUp, Activity } from 'lucide-react'

const ManageProducts = () => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")
  const [sortConfig, setSortConfig] = useState({ key: "title", direction: "ascending" })
  const [selectedProducts, setSelectedProducts] = useState([])
  const [selectAll, setSelectAll] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [expandedProduct, setExpandedProduct] = useState(null)
  const [showStats, setShowStats] = useState(true)
  const [viewMode, setViewMode] = useState("grid") // grid or list
  const [showSortOptions, setShowSortOptions] = useState(false)
  const [showBulkActions, setShowBulkActions] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [stockRange, setStockRange] = useState([0, 500])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedVendors, setSelectedVendors] = useState([])
  const [showImagePreview, setShowImagePreview] = useState(null)
  const [isUploading, setIsUploading] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(null)
  const [showProductDetails, setShowProductDetails] = useState(null)
  const [showToast, setShowToast] = useState(null)
  const [showExportOptions, setShowExportOptions] = useState(false)
  const [showImportOptions, setShowImportOptions] = useState(false)
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [productAnalytics, setProductAnalytics] = useState(null)

  const searchInputRef = useRef(null)
  const fileInputRef = useRef(null)
  const toastTimeoutRef = useRef(null)

  const sampleProducts = [
    {
      id: 1,
      title: "Smart Electrical Boards",
      subtitle: "Next Generation Power Management",
      description: "Experience cutting-edge smart boards with real-time monitoring and energy optimization.",
      image:
        "https://imgs.search.brave.com/HBwjZrYBdESRw-mbBItimPwkIQPczZro_46i1-quYGo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3JlZW5lbGVjdHJp/Y2Fsc3VwcGx5LmNv/bS9jZG4vc2hvcC9m/aWxlcy9XRlJTTTEt/NF80MDB4LnBuZz92/PTE3MjU4ODk4Njg",
      status: "Active",
      inventory: 125,
      price: 299.99,
      category: "Smart Home",
      rating: 4.8,
      vendor: "ElectroTech Solutions",
      sku: "SEB-001",
      lastUpdated: "2023-11-15",
      features: ["IoT Integration", "Energy Saving", "Remote Access", "Surge Protection"],
      discount: 15,
      salesCount: 87,
      views: 1245,
      trending: true,
      weight: "2.5 kg",
      dimensions: "30 × 20 × 5 cm",
      warranty: "2 years",
      tags: ["smart", "electrical", "power", "energy"],
      monthlySales: [23, 34, 45, 56, 43, 67, 87],
      stockHistory: [150, 145, 140, 135, 130, 125],
      relatedProducts: [2, 4, 7],
    },
    {
      id: 2,
      title: "Advanced Switches",
      subtitle: "Touch & Voice Activated Controls",
      description: "High-durability switches with touch control and voice activation.",
      image:
        "https://imgs.search.brave.com/AYyt_GWKQ4Kyr-huX7ZoHDTEGwE3Ht4x4O1ArdHkZ4w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9FbGVj/dHJpY2FsLU1vZHVs/YXItU3dpdGNoLVBO/Ry1UcmFuc3BhcmVu/dC1JbWFnZS5wbmc",
      status: "Active",
      inventory: 210,
      price: 89.99,
      category: "Smart Home",
      rating: 4.6,
      vendor: "Luminance Creations",
      sku: "AS-002",
      lastUpdated: "2023-12-01",
      features: ["Voice Control", "Touch Sensitive", "Long Lifespan", "LED Indicators"],
      discount: 10,
      salesCount: 156,
      views: 2130,
      trending: false,
      weight: "0.5 kg",
      dimensions: "10 × 10 × 3 cm",
      warranty: "1 year",
      tags: ["switch", "touch", "voice", "control"],
      monthlySales: [45, 67, 89, 102, 134, 145, 156],
      stockHistory: [250, 240, 230, 220, 210],
      relatedProducts: [1, 6],
    },
    {
      id: 3,
      title: "Precision Regulators",
      subtitle: "Voltage Stabilization Technology",
      description: "Regulate voltage with precision using our smart regulators.",
      image:
        "https://imgs.search.brave.com/8AqeVhnMJSaHvMCdtd1cdK0QwvXImchTzpCBycVVQbI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbGVj/dHJpY3JlZ3VsYXRv/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDQvcGFy/dHMucG5n",
      status: "Low Stock",
      inventory: 32,
      price: 149.99,
      category: "Industrial",
      rating: 4.9,
      vendor: "HydraClean Solutions",
      sku: "PR-003",
      lastUpdated: "2023-10-22",
      features: ["Overvoltage Protection", "Efficiency Boost", "Compact Design", "Digital Display"],
      discount: 0,
      salesCount: 64,
      views: 890,
      trending: false,
      weight: "1.2 kg",
      dimensions: "15 × 12 × 8 cm",
      warranty: "3 years",
      tags: ["regulator", "voltage", "precision", "industrial"],
      monthlySales: [12, 18, 24, 32, 45, 56, 64],
      stockHistory: [60, 55, 48, 40, 32],
      relatedProducts: [5, 8],
    },
    {
      id: 4,
      title: "Power Distribution Units",
      subtitle: "Enterprise-Grade Power Solutions",
      description: "Optimize power distribution with our innovative PDUs.",
      image:
        "https://imgs.search.brave.com/VXNTWlwYjjjmJtJ8tQ0-GGlFbzRKqY40I4QSxhNIDec/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3liZXJwb3dlcnN5/c3RlbXM.Y29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA4/L05ldy1XZWItU3dp/dGNoZWQtTWV0ZXJl/ZC1ieS1PdXRsZXQt/MTQ4MHg3NjAtMS0z/MDB4MTU0LnBuZw",
      status: "Active",
      inventory: 78,
      price: 499.99,
      category: "Industrial",
      rating: 4.7,
      vendor: "FreshTech Appliances",
      sku: "PDU-004",
      lastUpdated: "2023-11-30",
      features: ["Scalable Design", "Reliable Performance", "Easy Installation", "Remote Monitoring"],
      discount: 5,
      salesCount: 42,
      views: 675,
      trending: false,
      weight: "4.8 kg",
      dimensions: "45 × 30 × 10 cm",
      warranty: "5 years",
      tags: ["power", "distribution", "enterprise", "industrial"],
      monthlySales: [5, 8, 12, 18, 25, 34, 42],
      stockHistory: [100, 95, 90, 85, 78],
      relatedProducts: [1, 7, 8],
    },
    {
      id: 5,
      title: "Industrial Circuit Breakers",
      subtitle: "Maximum Protection Systems",
      description: "Heavy-duty circuit breakers designed for industrial applications.",
      image:
        "https://imgs.search.brave.com/w690CjWMVXOHQABKWY9vuIahHoBhYj-9Xt-llJYb2TE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bHVtaW5zbWFydC5j/b20vc3RvcmFnZS9h/cHAvbWVkaWEvTHVt/aW4lMjBsc3AvTHVt/aW5fQW50ZW5uYS5w/bmc",
      status: "Active",
      inventory: 95,
      price: 349.99,
      category: "Safety",
      rating: 4.9,
      vendor: "Vitality Gear Co.",
      sku: "ICB-005",
      lastUpdated: "2023-09-15",
      features: ["Short Circuit Protection", "Thermal Protection", "Adjustable Trip Settings", "Status Indicators"],
      discount: 0,
      salesCount: 38,
      views: 520,
      trending: false,
      weight: "3.2 kg",
      dimensions: "25 × 15 × 10 cm",
      warranty: "10 years",
      tags: ["circuit", "breaker", "protection", "safety"],
      monthlySales: [4, 7, 12, 18, 25, 32, 38],
      stockHistory: [120, 115, 110, 100, 95],
      relatedProducts: [3, 8],
    },
    {
      id: 6,
      title: "Smart Home Lighting Controls",
      subtitle: "Intelligent Illumination Systems",
      description: "Complete lighting control solutions with dimming and scheduling capabilities.",
      image:
        "https://imgs.search.brave.com/HryknztkcbdsPmzL3zW5-XrU8Zu-9hpuLPq_XiN2N8Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUz/ZmNlNDcwZTRiMDM3/NGFkZmRkMzBiYy8x/NDE3NTYzODkxNzEx/LUVTSlFJUEtRVE9N/MUFISVJESUtPL2hl/cm8tZmVhdHVyZXMt/ZGltbWluZy1vci1z/d2l0Y2gucG5n",
      status: "Out of Stock",
      inventory: 0,
      price: 129.99,
      category: "Smart Home",
      rating: 4.5,
      vendor: "GreenGrowth Designers",
      sku: "SHLC-006",
      lastUpdated: "2023-12-05",
      features: ["Wireless Control", "Scene Programming", "Energy Monitoring", "Voice Compatible"],
      discount: 20,
      salesCount: 112,
      views: 1875,
      trending: true,
      weight: "0.8 kg",
      dimensions: "12 × 8 × 4 cm",
      warranty: "2 years",
      tags: ["lighting", "smart", "control", "home"],
      monthlySales: [15, 25, 45, 65, 85, 100, 112],
      stockHistory: [50, 40, 30, 15, 0],
      relatedProducts: [1, 2],
    },
    {
      id: 7,
      title: "Solar Power Inverters",
      subtitle: "Renewable Energy Conversion",
      description: "High-efficiency inverters for solar panel systems with grid-tie capabilities.",
      image:
        "https://imgs.search.brave.com/F1WswYW0wWUIPCihSjUtKfxu_98apBPM66th_Dal0oA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c21hLmRlL2ZpbGVh/ZG1pbi9fcHJvY2Vz/c2VkXy84LzcvY3Nt/X1NUUFhfU0NfU0Jf/MTAyNHg1NzZfY2I4/Y2E2M2NhZC5wbmc",
      status: "Active",
      inventory: 45,
      price: 799.99,
      category: "Renewable",
      rating: 4.8,
      vendor: "Luminance Creations",
      sku: "SPI-007",
      lastUpdated: "2023-11-10",
      features: ["High Efficiency", "Grid-Tie Ready", "Battery Integration", "Monitoring App"],
      discount: 10,
      salesCount: 29,
      views: 680,
      trending: true,
      weight: "8.5 kg",
      dimensions: "40 × 30 × 15 cm",
      warranty: "5 years",
      tags: ["solar", "inverter", "renewable", "energy"],
      monthlySales: [3, 5, 8, 12, 18, 24, 29],
      stockHistory: [70, 65, 60, 50, 45],
      relatedProducts: [1, 4],
    },
    {
      id: 8,
      title: "Industrial UPS Systems",
      subtitle: "Uninterrupted Power Supply",
      description: "Reliable backup power systems for critical infrastructure.",
      image:
        "https://imgs.search.brave.com/RN0WJdX7xWMJIIz8Ouu4ZwBj9PqV3JwV6ZTKZBxWn3s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG93ZXItc29sdXRp/b25zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMi9T/UllMNUsxNVJNWExU/X0ZMX1Zfd2ViLTMw/MHgzMDAucG5n",
      status: "Pending Review",
      inventory: 18,
      price: 1299.99,
      category: "Safety",
      rating: 4.7,
      vendor: "ElectroTech Solutions",
      sku: "UPS-008",
      lastUpdated: "2023-12-10",
      features: ["Zero Transfer Time", "Extended Runtime", "Power Conditioning", "Remote Management"],
      discount: 0,
      salesCount: 15,
      views: 420,
      trending: false,
      weight: "12.0 kg",
      dimensions: "50 × 40 × 20 cm",
      warranty: "3 years",
      tags: ["ups", "power", "backup", "industrial"],
      monthlySales: [1, 3, 5, 7, 10, 12, 15],
      stockHistory: [30, 28, 25, 20, 18],
      relatedProducts: [3, 4, 5],
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setProducts(sampleProducts)
      setFilteredProducts(sampleProducts)
      setIsLoading(false)
    }, 800)
  }, [])

  useEffect(() => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        searchQuery === "" ||
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.vendor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())))

      let matchesFilter = true

      // Handle tab filters
      if (activeTab === "active" && product.status !== "Active") matchesFilter = false
      if (activeTab === "outOfStock" && product.status !== "Out of Stock") matchesFilter = false
      if (activeTab === "lowStock" && product.status !== "Low Stock") matchesFilter = false
      if (activeTab === "pending" && product.status !== "Pending Review") matchesFilter = false
      if (activeTab === "trending" && !product.trending) matchesFilter = false

      // Handle dropdown filters
      if (activeFilter !== "All" && activeFilter !== product.status && activeFilter !== product.category) {
        matchesFilter = false
      }

      // Handle advanced filters
      if (showAdvancedFilters) {
        if (product.price < priceRange[0] || product.price > priceRange[1]) matchesFilter = false
        if (product.inventory < stockRange[0] || product.inventory > stockRange[1]) matchesFilter = false
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) matchesFilter = false
        if (selectedVendors.length > 0 && !selectedVendors.includes(product.vendor)) matchesFilter = false
      }

      return matchesSearch && matchesFilter
    })

    // Apply sorting
    const sortedProducts = [...filtered].sort((a, b) => {
      if (sortConfig.key === "price") {
        return sortConfig.direction === "ascending" ? a.price - b.price : b.price - a.price
      } else if (sortConfig.key === "inventory") {
        return sortConfig.direction === "ascending" ? a.inventory - b.inventory : b.inventory - a.inventory
      } else if (sortConfig.key === "rating") {
        return sortConfig.direction === "ascending" ? a.rating - b.rating : b.rating - a.rating
      } else if (sortConfig.key === "lastUpdated") {
        return sortConfig.direction === "ascending"
          ? new Date(a.lastUpdated) - new Date(b.lastUpdated)
          : new Date(b.lastUpdated) - new Date(a.lastUpdated)
      } else {
        // Default to title
        return sortConfig.direction === "ascending" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
      }
    })

    setFilteredProducts(sortedProducts)
  }, [
    searchQuery,
    activeFilter,
    products,
    sortConfig,
    activeTab,
    showAdvancedFilters,
    priceRange,
    stockRange,
    selectedCategories,
    selectedVendors,
  ])

  useEffect(() => {
    if (selectAll) {
      setSelectedProducts(filteredProducts.map((product) => product.id))
    } else if (selectedProducts.length === filteredProducts.length) {
      setSelectedProducts([])
    }
  }, [selectAll, filteredProducts])

  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus()
    }
  }, [showSearch])

  useEffect(() => {
    if (showToast) {
      // Clear any existing timeout
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current)
      }

      // Set a new timeout to clear the toast after 3 seconds
      toastTimeoutRef.current = setTimeout(() => {
        setShowToast(null)
      }, 3000)
    }

    // Cleanup function to clear the timeout when component unmounts or showToast changes
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current)
      }
    }
  }, [showToast])

  const handleSort = (key) => {
    let direction = "ascending"
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
    setShowSortOptions(false)
  }

  const toggleProductSelection = (productId) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const handleBulkAction = (action) => {
    switch (action) {
      case "delete":
        setShowConfirmation({
          title: "Delete Products",
          message: `Are you sure you want to delete ${selectedProducts.length} products? This action cannot be undone.`,
          confirmText: "Delete",
          cancelText: "Cancel",
          confirmAction: () => {
            setProducts((prev) => prev.filter((product) => !selectedProducts.includes(product.id)))
            setSelectedProducts([])
            setShowToast({
              type: "success",
              message: `${selectedProducts.length} products deleted successfully`,
            })
          },
          cancelAction: () => setShowConfirmation(null),
        })
        break
      case "activate":
        setProducts((prev) =>
          prev.map((product) => (selectedProducts.includes(product.id) ? { ...product, status: "Active" } : product)),
        )
        setShowToast({
          type: "success",
          message: `${selectedProducts.length} products activated successfully`,
        })
        break
      case "deactivate":
        setProducts((prev) =>
          prev.map((product) => (selectedProducts.includes(product.id) ? { ...product, status: "Inactive" } : product)),
        )
        setShowToast({
          type: "success",
          message: `${selectedProducts.length} products deactivated successfully`,
        })
        break
      case "discount":
        const discountPrompt = () => {
          const discountAmount = prompt("Enter discount percentage (0-100):", "10")
          if (discountAmount !== null) {
            const discount = Number.parseInt(discountAmount, 10)
            if (!isNaN(discount) && discount >= 0 && discount <= 100) {
              setProducts((prev) =>
                prev.map((product) => (selectedProducts.includes(product.id) ? { ...product, discount } : product)),
              )
              setShowToast({
                type: "success",
                message: `${discount}% discount applied to ${selectedProducts.length} products`,
              })
            } else {
              setShowToast({
                type: "error",
                message: "Please enter a valid discount percentage between 0 and 100",
              })
            }
          }
        }
        discountPrompt()
        break
      default:
        break
    }
    setShowBulkActions(false)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500/20 text-emerald-500 border-emerald-500/30"
      case "Inactive":
        return "bg-slate-500/20 text-slate-400 border-slate-500/30"
      case "Out of Stock":
        return "bg-rose-500/20 text-rose-500 border-rose-500/30"
      case "Low Stock":
        return "bg-amber-500/20 text-amber-500 border-amber-500/30"
      case "Pending Review":
        return "bg-sky-500/20 text-sky-400 border-sky-500/30"
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30"
    }
  }

  const getFeatureIcon = (feature) => {
    if (feature.toLowerCase().includes("energy") || feature.toLowerCase().includes("power")) {
      return <Zap className="w-4 h-4" />
    } else if (feature.toLowerCase().includes("protection") || feature.toLowerCase().includes("safety")) {
      return <Shield className="w-4 h-4" />
    } else if (feature.toLowerCase().includes("smart") || feature.toLowerCase().includes("iot")) {
      return <Cpu className="w-4 h-4" />
    } else {
      return <Tag className="w-4 h-4" />
    }
  }

  const stats = {
    totalProducts: products.length,
    activeProducts: products.filter((p) => p.status === "Active").length,
    outOfStock: products.filter((p) => p.status === "Out of Stock").length,
    lowStock: products.filter((p) => p.inventory > 0 && p.inventory < 50).length,
    pendingReview: products.filter((p) => p.status === "Pending Review").length,
    trending: products.filter((p) => p.trending).length,
    totalValue: products
      .reduce((sum, product) => {
        return sum + product.price * product.inventory
      }, 0)
      .toLocaleString("en-US", { style: "currency", currency: "USD" }),
    totalSales: products.reduce((sum, product) => sum + product.salesCount, 0),
    averageRating: (products.reduce((sum, product) => sum + product.rating, 0) / products.length).toFixed(1),
  }

  const categories = ["All", ...new Set(products.map((product) => product.category))]

  const vendors = [...new Set(products.map((product) => product.vendor))]

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setIsUploading(true)
      // Simulate upload
      setTimeout(() => {
        setIsUploading(false)
        setShowToast({
          type: "success",
          message: `File "${file.name}" uploaded successfully!`,
        })
      }, 2000)
    }
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    // Reset other filters when changing tabs
    setActiveFilter("All")
    setSelectedCategories([])
    setSelectedVendors([])
  }

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const toggleVendor = (vendor) => {
    setSelectedVendors((prev) => (prev.includes(vendor) ? prev.filter((v) => v !== vendor) : [...prev, vendor]))
  }

  const handleDeleteProduct = (productId) => {
    const productToDelete = products.find((p) => p.id === productId)
    setShowConfirmation({
      title: "Delete Product",
      message: `Are you sure you want to delete "${productToDelete.title}"? This action cannot be undone.`,
      confirmText: "Delete",
      cancelText: "Cancel",
      confirmAction: () => {
        setProducts((prev) => prev.filter((p) => p.id !== productId))
        setShowConfirmation(null)
        setShowToast({
          type: "success",
          message: `Product "${productToDelete.title}" deleted successfully`,
        })
      },
      cancelAction: () => setShowConfirmation(null),
    })
  }

  const handleViewProduct = (productId) => {
    const product = products.find((p) => p.id === productId)
    setShowProductDetails(product)
  }

  const handleExportData = (format) => {
    setShowToast({
      type: "success",
      message: `Products exported as ${format.toUpperCase()} successfully`,
    })
    setShowExportOptions(false)
  }

  const handleProductAnalytics = (productId) => {
    const product = products.find((p) => p.id === productId)
    setProductAnalytics(product)
  }

  return (
    <div className="flex-1 overflow-auto relative bg-gray-900 min-h-screen text-white scroll-hidden">
      <Header title="Manage Products" />
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      {/* Dashboard Overview */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Product Management</h1>
              <p className="text-gray-300 mt-1">Manage your inventory, track performance, and update product details</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={() => setShowImportOptions(true)}
                className="bg-gray-600 hover:bg-gray-500 text-white md:px-3 md:py-2 sm:px-2 sm:py-1 rounded-lg text-sm flex items-center gap-2 transition-all"
              >
                {isUploading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Uploading...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    <span>Import</span>
                  </>
                )}
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
                accept=".csv,.xlsx,.xls"
              />
              <button
                onClick={() => setShowExportOptions(true)}
                className="bg-gray-600 hover:bg-gray-500 text-white md:px-3 md:py-2 sm:px-2 sm:py-1 rounded-lg text-sm flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <button
                onClick={() => setShowAddProduct(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white md:px-3 md:py-2 sm:px-1 sm:py-1 rounded-lg text-sm flex items-center gap-2 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Product</span>
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-8 gap-4">
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-xs text-gray-200">Total Products</h3>
                <Package className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-xl font-bold mt-2">{stats.totalProducts}</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-xs text-gray-200">Active</h3>
                <CheckCircle2 className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-xl font-bold mt-2">{stats.activeProducts}</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-xs text-gray-200">Out of Stock</h3>
                <AlertCircle className="w-4 h-4 text-red-400" />
              </div>
              <p className="text-xl font-bold mt-2">{stats.outOfStock}</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-xs text-gray-200">Low Stock</h3>
                <Clock className="w-4 h-4 text-yellow-400" />
              </div>
              <p className="text-xl font-bold mt-2">{stats.lowStock}</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-xs text-gray-200">Pending Review</h3>
                <Clock className="w-4 h-4 text-purple-400" />
              </div>
              <p className="text-xl font-bold mt-2">{stats.pendingReview}</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-xs text-gray-200">Trending</h3>
                <TrendingUp className="w-4 h-4 text-orange-400" />
              </div>
              <p className="text-xl font-bold mt-2">{stats.trending}</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-xs text-gray-200">Inventory Value</h3>
                <DollarSign className="w-4 h-4 text-green-400" />
              </div>
              <p className="text-xl font-bold mt-2">{stats.totalValue}</p>
            </div>
            <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 border border-white/20 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-xs text-gray-200">Total Sales</h3>
                <ShoppingCart className="w-4 h-4 text-blue-400" />
              </div>
              <p className="text-xl font-bold mt-2">{stats.totalSales}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            <button
              onClick={() => handleTabChange("all")}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "all"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-300 hover:text-white"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => handleTabChange("active")}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "active"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-300 hover:text-white"
              }`}
            >
              Active
            </button>
            <button
              onClick={() => handleTabChange("outOfStock")}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "outOfStock"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-300 hover:text-white"
              }`}
            >
              Out of Stock
            </button>
            <button
              onClick={() => handleTabChange("lowStock")}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "lowStock"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-300 hover:text-white"
              }`}
            >
              Low Stock
            </button>
            <button
              onClick={() => handleTabChange("pending")}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "pending"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-300 hover:text-white"
              }`}
            >
              Pending Review
            </button>
            <button
              onClick={() => handleTabChange("trending")}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === "trending"
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-gray-300 hover:text-white"
              }`}
            >
              Trending
            </button>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-12 z-20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-grow max-w-md">
              <div className="relative flex-grow">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products, SKUs, vendors..."
                  className="w-full bg-gray-700 border-0 rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 transition-all text-white"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {/* View Mode Toggle */}
              <div className="bg-gray-700 rounded-lg p-1 flex">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded ${
                    viewMode === "grid" ? "bg-gray-600 text-blue-400 shadow-sm" : "text-gray-400"
                  }`}
                >
                  <GridIcon className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded ${
                    viewMode === "list" ? "bg-gray-600 text-blue-400 shadow-sm" : "text-gray-400"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowSortOptions(!showSortOptions)}
                  className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all"
                >
                  <ArrowUpDown className="w-4 h-4" />
                  <span className="hidden sm:inline">Sort</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showSortOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-700">
                    <button
                      onClick={() => handleSort("title")}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center justify-between"
                    >
                      <span>Name</span>
                      {sortConfig.key === "title" &&
                        (sortConfig.direction === "ascending" ? (
                          <ArrowUp className="w-4 h-4" />
                        ) : (
                          <ArrowDown className="w-4 h-4" />
                        ))}
                    </button>
                    <button
                      onClick={() => handleSort("price")}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center justify-between"
                    >
                      <span>Price</span>
                      {sortConfig.key === "price" &&
                        (sortConfig.direction === "ascending" ? (
                          <ArrowUp className="w-4 h-4" />
                        ) : (
                          <ArrowDown className="w-4 h-4" />
                        ))}
                    </button>
                    <button
                      onClick={() => handleSort("inventory")}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center justify-between"
                    >
                      <span>Inventory</span>
                      {sortConfig.key === "inventory" &&
                        (sortConfig.direction === "ascending" ? (
                          <ArrowUp className="w-4 h-4" />
                        ) : (
                          <ArrowDown className="w-4 h-4" />
                        ))}
                    </button>
                    <button
                      onClick={() => handleSort("rating")}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center justify-between"
                    >
                      <span>Rating</span>
                      {sortConfig.key === "rating" &&
                        (sortConfig.direction === "ascending" ? (
                          <ArrowUp className="w-4 h-4" />
                        ) : (
                          <ArrowDown className="w-4 h-4" />
                        ))}
                    </button>
                    <button
                      onClick={() => handleSort("lastUpdated")}
                      className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center justify-between"
                    >
                      <span>Last Updated</span>
                      {sortConfig.key === "lastUpdated" &&
                        (sortConfig.direction === "ascending" ? (
                          <ArrowUp className="w-4 h-4" />
                        ) : (
                          <ArrowDown className="w-4 h-4" />
                        ))}
                    </button>
                  </div>
                )}
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all"
                >
                  <Filter className="w-4 h-4" />
                  <span className="hidden md:block">Filter</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showFilters && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-700">
                    <div className="p-2 border-b border-gray-700">
                      <div className="text-xs font-medium text-gray-500 mb-1">Category</div>
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setActiveFilter(category)
                            setShowFilters(false)
                          }}
                          className={`w-full text-left px-2 py-1 text-sm rounded ${
                            activeFilter === category ? "bg-blue-100 text-blue-800" : "hover:bg-gray-700"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                    <div className="p-2">
                      <button
                        onClick={() => {
                          setShowAdvancedFilters(!showAdvancedFilters)
                          setShowFilters(false)
                        }}
                        className="w-full text-left px-2 py-1 text-sm text-blue-400 hover:bg-gray-700 rounded flex items-center"
                      >
                        <SlidersHorizontal className="w-3 h-3 mr-1" />
                        Advanced Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Bulk Actions */}
              {selectedProducts.length > 0 && (
                <div className="relative">
                  <button
                    onClick={() => setShowBulkActions(!showBulkActions)}
                    className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all"
                  >
                    <Layers className="w-4 h-4" />
                    <span>{selectedProducts.length} Selected</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showBulkActions && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-700">
                      <button
                        onClick={() => handleBulkAction("activate")}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center"
                      >
                        <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
                        Activate
                      </button>
                      <button
                        onClick={() => handleBulkAction("deactivate")}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center"
                      >
                        <AlertCircle className="w-4 h-4 mr-2 text-yellow-500" />
                        Deactivate
                      </button>
                      <button
                        onClick={() => handleBulkAction("discount")}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center"
                      >
                        <Percent className="w-4 h-4 mr-2 text-purple-500" />
                        Apply Discount
                      </button>
                      <button
                        onClick={() => handleBulkAction("delete")}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center text-red-600"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {showAdvancedFilters && (
        <div className="bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-sm font-medium">Advanced Filters</h3>
              <button onClick={() => setShowAdvancedFilters(false)} className="text-gray-500 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Price Range */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Price Range (${priceRange[0]} - ${priceRange[1]})
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Stock Range */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">
                  Stock Range ({stockRange[0]} - {stockRange[1]} units)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={stockRange[0]}
                    onChange={(e) => setStockRange([Number.parseInt(e.target.value), stockRange[1]])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={stockRange[1]}
                    onChange={(e) => setStockRange([stockRange[0], Number.parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Categories</label>
                <div className="max-h-24 overflow-y-auto bg-gray-600 rounded-lg p-2 scroll-hidden">
                  {categories
                    .filter((c) => c !== "All")
                    .map((category) => (
                      <label key={category} className="flex items-center gap-2 py-1">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm">{category}</span>
                      </label>
                    ))}
                </div>
              </div>

              {/* Vendors */}
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">Vendors</label>
                <div className="max-h-24 overflow-y-auto bg-gray-600 rounded-lg p-2 scroll-hidden">
                  {vendors.map((vendor) => (
                    <label key={vendor} className="flex items-center gap-2 py-1">
                      <input
                        type="checkbox"
                        checked={selectedVendors.includes(vendor)}
                        onChange={() => toggleVendor(vendor)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm">{vendor}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4 gap-2">
              <button
                onClick={() => {
                  setPriceRange([0, 2000])
                  setStockRange([0, 500])
                  setSelectedCategories([])
                  setSelectedVendors([])
                }}
                className="px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setShowAdvancedFilters(false)}
                className="px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-4 text-gray-500">Loading products...</p>
        </div>
      )}

      {/* No Results Message */}
      {!isLoading && filteredProducts.length === 0 && (
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="bg-gray-800 rounded-xl p-8 max-w-md mx-auto shadow-sm border border-gray-700">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">No products found</h3>
            <p className="text-gray-500 mb-4">We couldn't find any products matching your search criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("")
                setActiveFilter("All")
                setActiveTab("all")
                setSelectedCategories([])
                setSelectedVendors([])
                setPriceRange([0, 2000])
                setStockRange([0, 500])
                setShowAdvancedFilters(false)
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}

      {/* Product Grid View */}
      {!isLoading && filteredProducts.length > 0 && viewMode === "grid" && (
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-gray-800 rounded-xl overflow-hidden border transition-all duration-200 ${
                  selectedProducts.includes(product.id)
                    ? "border-blue-500 shadow-md shadow-blue-500/10"
                    : "border-gray-700 hover:border-blue-500/50 hover:shadow-md"
                }`}
              >
                <div className="relative">
                  <div
                    className="h-48 bg-cover bg-center cursor-pointer"
                    style={{ backgroundImage: `url(${product.image})` }}
                    onClick={() => setShowImagePreview(product.image)}
                  >
                    {product.trending && (
                      <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Trending
                      </div>
                    )}
                    {product.discount > 0 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {product.discount}% OFF
                      </div>
                    )}
                  </div>

                  <div className="absolute top-2 left-2">
                    <input
                      type="checkbox"
                      checked={selectedProducts.includes(product.id)}
                      onChange={() => toggleProductSelection(product.id)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 bg-white/80"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-white line-clamp-1">{product.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                      {product.status}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-1 mb-2">{product.subtitle}</p>

                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-white">${product.price.toFixed(2)}</span>
                      {product.discount > 0 && (
                        <span className="text-xs text-gray-400 line-through ml-2">
                          ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs ml-1">{product.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1 text-xs mb-3">
                    <div className="flex items-center text-gray-300">
                      <Package className="w-3 h-3 mr-1" />
                      <span className={`${product.inventory < 50 ? "text-yellow-500" : ""}`}>
                        {product.inventory} in stock
                      </span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Tag className="w-3 h-3 mr-1" />
                      <span>{product.category}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Truck className="w-3 h-3 mr-1" />
                      <span>{product.salesCount} sold</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{product.lastUpdated}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
                    <div className="flex gap-1">
                      <button
                        onClick={() => setEditingProduct(product)}
                        className="p-1.5 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-600 transition-colors"
                        title="Edit product"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-1.5 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-600 transition-colors"
                        title="Delete product"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleViewProduct(product.id)}
                        className="p-1.5 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-600 transition-colors"
                        title="View product details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                      className="text-blue-400 hover:text-blue-300 text-xs flex items-center transition-colors"
                    >
                      {expandedProduct === product.id ? "Less" : "More"}
                      {expandedProduct === product.id ? (
                        <ChevronUp className="w-3 h-3 ml-1" />
                      ) : (
                        <ChevronDown className="w-3 h-3 ml-1" />
                      )}
                    </button>
                  </div>

                  {expandedProduct === product.id && (
                    <div className="mt-3 pt-3 border-t border-gray-700">
                      <p className="text-sm text-gray-300 mb-2">{product.description}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {product.features.map((feature, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full flex items-center gap-1"
                          >
                            {getFeatureIcon(feature)}
                            <span>{feature}</span>
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <div>
                          <span className="text-gray-400">Vendor:</span>
                          <span className="ml-1 text-gray-300">{product.vendor}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">SKU:</span>
                          <span className="ml-1 text-gray-300">{product.sku}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Weight:</span>
                          <span className="ml-1 text-gray-300">{product.weight}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Dimensions:</span>
                          <span className="ml-1 text-gray-300">{product.dimensions}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Warranty:</span>
                          <span className="ml-1 text-gray-300">{product.warranty}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Views:</span>
                          <span className="ml-1 text-gray-300">{product.views}</span>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-end">
                        <button
                          onClick={() => handleProductAnalytics(product.id)}
                          className="text-xs text-blue-400 hover:text-blue-300 flex items-center"
                        >
                          <BarChart3 className="w-3 h-3 mr-1" />
                          View Analytics
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Product List View */}
      {!isLoading && filteredProducts.length > 0 && viewMode === "list" && (
        <div className="container mx-auto px-4 py-6">
          <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 bg-gray-700/50 border-b border-gray-700 text-xs font-medium text-gray-400">
              <div className="col-span-5 md:col-span-4 flex items-center">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={() => setSelectAll(!selectAll)}
                  className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <button onClick={() => handleSort("title")} className="flex items-center">
                  Product
                  {sortConfig.key === "title" &&
                    (sortConfig.direction === "ascending" ? (
                      <ArrowUp className="w-3 h-3 ml-1" />
                    ) : (
                      <ArrowDown className="w-3 h-3 ml-1" />
                    ))}
                </button>
              </div>
              <div className="col-span-2 md:col-span-1 hidden md:flex items-center">
                <button onClick={() => handleSort("inventory")} className="flex items-center">
                  Stock
                  {sortConfig.key === "inventory" &&
                    (sortConfig.direction === "ascending" ? (
                      <ArrowUp className="w-3 h-3 ml-1" />
                    ) : (
                      <ArrowDown className="w-3 h-3 ml-1" />
                    ))}
                </button>
              </div>
              <div className="col-span-2 md:col-span-1 hidden md:flex items-center">Status</div>
              <div className="col-span-3 md:col-span-2 flex items-center">
                <button onClick={() => handleSort("price")} className="flex items-center">
                  Price
                  {sortConfig.key === "price" &&
                    (sortConfig.direction === "ascending" ? (
                      <ArrowUp className="w-3 h-3 ml-1" />
                    ) : (
                      <ArrowDown className="w-3 h-3 ml-1" />
                    ))}
                </button>
              </div>
              <div className="col-span-2 hidden lg:flex items-center">Category</div>
              <div className="col-span-2 hidden lg:flex items-center">
                <button onClick={() => handleSort("lastUpdated")} className="flex items-center">
                  Updated
                  {sortConfig.key === "lastUpdated" &&
                    (sortConfig.direction === "ascending" ? (
                      <ArrowUp className="w-3 h-3 ml-1" />
                    ) : (
                      <ArrowDown className="w-3 h-3 ml-1" />
                    ))}
                </button>
              </div>
              <div className="col-span-4 md:col-span-2 lg:col-span-1 flex items-center justify-end">Actions</div>
            </div>

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`grid grid-cols-12 gap-4 p-4 border-b border-gray-700 items-center hover:bg-gray-700 transition-colors ${
                  selectedProducts.includes(product.id) ? "bg-blue-50" : ""
                }`}
              >
                <div className="col-span-5 md:col-span-4 flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(product.id)}
                    onChange={() => toggleProductSelection(product.id)}
                    className="mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <div
                    className="w-10 h-10 rounded bg-cover bg-center mr-3 cursor-pointer"
                    style={{ backgroundImage: `url(${product.image})` }}
                    onClick={() => setShowImagePreview(product.image)}
                  ></div>
                  <div>
                    <h3 className="font-medium text-white text-sm line-clamp-1">{product.title}</h3>
                    <p className="text-gray-300 text-xs">{product.sku}</p>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1 hidden md:block">
                  <span className={`text-sm ${product.inventory < 50 ? "text-yellow-500" : "text-gray-300"}`}>
                    {product.inventory}
                  </span>
                </div>
                <div className="col-span-2 md:col-span-1 hidden md:block">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                    {product.status}
                  </span>
                </div>
                <div className="col-span-3 md:col-span-2">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-white">${product.price.toFixed(2)}</span>
                    {product.discount > 0 && (
                      <span className="text-xs text-gray-400 line-through ml-2">
                        ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="col-span-2 hidden lg:block text-sm text-gray-300">{product.category}</div>
                <div className="col-span-2 hidden lg:block text-sm text-gray-300">{product.lastUpdated}</div>
                <div className="col-span-4 md:col-span-2 lg:col-span-1 flex items-center justify-end gap-1">
                  <button
                    onClick={() => setEditingProduct(product)}
                    className="p-1.5 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-600 transition-colors"
                    title="Edit product"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="p-1.5 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-600 transition-colors"
                    title="Delete product"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleViewProduct(product.id)}
                    className="p-1.5 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-600 text-gray-600 transition-colors"
                    title="View product details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
                      className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                    >
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                    {expandedProduct === product.id && (
                      <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50 border border-gray-700">
                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(product.sku)
                            setShowToast({
                              type: "success",
                              message: `SKU ${product.sku} copied to clipboard`,
                            })
                          }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center"
                        >
                          <Copy className="w-4 h-4 mr-2 text-gray-500" />
                          Copy SKU
                        </button>
                        <button
                          onClick={() => {
                            const newProduct = {
                              ...product,
                              id: products.length + 1,
                              title: `${product.title} (Copy)`,
                              sku: `${product.sku}-COPY`,
                            }
                            setProducts([...products, newProduct])
                            setShowToast({
                              type: "success",
                              message: `Product "${product.title}" duplicated successfully`,
                            })
                          }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center"
                        >
                          <Copy className="w-4 h-4 mr-2 text-gray-500" />
                          Duplicate
                        </button>
                        <button
                          onClick={() => window.open(product.image, "_blank")}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center"
                        >
                          <ImageIcon className="w-4 h-4 mr-2 text-gray-500" />
                          View Image
                        </button>
                        <button
                          onClick={() => handleProductAnalytics(product.id)}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center"
                        >
                          <BarChart3 className="w-4 h-4 mr-2 text-gray-500" />
                          Analytics
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {editingProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div 
            className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-gray-800 shadow-xl z-50 overflow-y-auto animate-slide-in-right scroll-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">Edit Product</h3>
                <button onClick={() => setEditingProduct(null)} className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Product Title</label>
                  <input
                    type="text"
                    value={editingProduct.title}
                    onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={editingProduct.subtitle}
                    onChange={(e) => setEditingProduct({ ...editingProduct, subtitle: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">SKU</label>
                  <input
                    type="text"
                    value={editingProduct.sku}
                    onChange={(e) => setEditingProduct({ ...editingProduct, sku: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={editingProduct.price}
                      onChange={(e) =>
                        setEditingProduct({ ...editingProduct, price: Number.parseFloat(e.target.value) })
                      }
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-7 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Status</label>
                  <select
                    value={editingProduct.status}
                    onChange={(e) => setEditingProduct({ ...editingProduct, status: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Out of Stock">Out of Stock</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Pending Review">Pending Review</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Inventory</label>
                  <input
                    type="number"
                    value={editingProduct.inventory}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, inventory: Number.parseInt(e.target.value) })
                    }
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Category</label>
                  <input
                    type="text"
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Vendor</label>
                  <input
                    type="text"
                    value={editingProduct.vendor}
                    onChange={(e) => setEditingProduct({ ...editingProduct, vendor: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Discount (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={editingProduct.discount}
                    onChange={(e) =>
                      setEditingProduct({ ...editingProduct, discount: Number.parseInt(e.target.value) })
                    }
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Trending</label>
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      checked={editingProduct.trending}
                      onChange={(e) => setEditingProduct({ ...editingProduct, trending: e.target.checked })}
                      className="rounded border-gray-600 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-300">Mark as trending product</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                <textarea
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Features</label>
                <div className="flex flex-wrap gap-2">
                  {editingProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center bg-gray-700 rounded-full pl-2 pr-1 py-1 border border-gray-600">
                      <span className="text-xs text-gray-200">{feature}</span>
                      <button
                        onClick={() => {
                          const newFeatures = [...editingProduct.features]
                          newFeatures.splice(index, 1)
                          setEditingProduct({ ...editingProduct, features: newFeatures })
                        }}
                        className="ml-1 text-gray-400 hover:text-white"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  <input
                    type="text"
                    placeholder="Add feature and press Enter"
                    className="flex-1 min-w-[200px] bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim() !== "") {
                        setEditingProduct({
                          ...editingProduct,
                          features: [...editingProduct.features, e.target.value.trim()],
                        })
                        e.target.value = ""
                        e.preventDefault()
                      }
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Tags</label>
                <div className="flex flex-wrap gap-2">
                  {editingProduct.tags &&
                    editingProduct.tags.map((tag, index) => (
                      <div key={index} className="flex items-center bg-gray-700 rounded-full pl-2 pr-1 py-1 border border-gray-600">
                        <span className="text-xs text-gray-200">{tag}</span>
                        <button
                          onClick={() => {
                            const newTags = [...editingProduct.tags]
                            newTags.splice(index, 1)
                            setEditingProduct({ ...editingProduct, tags: newTags })
                          }}
                          className="ml-1 text-gray-400 hover:text-white"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  <input
                    type="text"
                    placeholder="Add tag and press Enter"
                    className="flex-1 min-w-[200px] bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim() !== "") {
                        setEditingProduct({
                          ...editingProduct,
                          tags: [...(editingProduct.tags || []), e.target.value.trim()],
                        })
                        e.target.value = ""
                        e.preventDefault()
                      }
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Weight</label>
                  <input
                    type="text"
                    value={editingProduct.weight}
                    onChange={(e) => setEditingProduct({ ...editingProduct, weight: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Dimensions</label>
                  <input
                    type="text"
                    value={editingProduct.dimensions}
                    onChange={(e) => setEditingProduct({ ...editingProduct, dimensions: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Warranty</label>
                  <input
                    type="text"
                    value={editingProduct.warranty}
                    onChange={(e) => setEditingProduct({ ...editingProduct, warranty: e.target.value })}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6 border-t border-gray-700 pt-4">
                <button
                  onClick={() => setEditingProduct(null)}
                  className="bg-gray-700 border border-gray-600 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setProducts((prev) => prev.map((p) => (p.id === editingProduct.id ? editingProduct : p)))
                    setEditingProduct(null)
                    setShowToast({
                      type: "success",
                      message: `Product "${editingProduct.title}" updated successfully`,
                    })
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm flex items-center shadow-sm transition-all"
                >
                  <Save className="w-4 h-4 mr-1" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Details Modal */}
      {showProductDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div 
            className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-gray-800 shadow-xl z-50 overflow-y-auto animate-slide-in-right scroll-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">Product Details</h3>
                <button onClick={() => setShowProductDetails(null)} className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-6">
                <div className="relative rounded-lg overflow-hidden mb-4">
                  <img
                    src={showProductDetails.image || "/placeholder.svg"}
                    alt={showProductDetails.title}
                    className="w-full h-auto object-cover"
                  />
                  {showProductDetails.trending && (
                    <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Trending
                    </div>
                  )}
                  {showProductDetails.discount > 0 && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {showProductDetails.discount}% OFF
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{showProductDetails.title}</h2>
                  <p className="text-gray-400">{showProductDetails.subtitle}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(showProductDetails.rating) ? "fill-current" : "stroke-current fill-none"}`}
                      />
                    ))}
                    <span className="text-sm text-gray-400 ml-2">{showProductDetails.rating} out of 5</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(showProductDetails.status)}`}>
                    {showProductDetails.status}
                  </span>
                </div>

                <div className="flex items-center">
                  <span className="text-3xl font-bold text-white mr-2">${showProductDetails.price.toFixed(2)}</span>
                  {showProductDetails.discount > 0 && (
                    <span className="text-sm text-gray-400 line-through">
                      ${(showProductDetails.price / (1 - showProductDetails.discount / 100)).toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Description</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{showProductDetails.description}</p>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {showProductDetails.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded-full flex items-center gap-1 border border-gray-600"
                      >
                        {getFeatureIcon(feature)}
                        <span>{feature}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-sm text-gray-400 mb-2">Product Information</h4>
                    <div className="grid grid-cols-1 gap-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">SKU</span>
                        <span className="text-white font-medium">{showProductDetails.sku}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Category</span>
                        <span className="text-white font-medium">{showProductDetails.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Vendor</span>
                        <span className="text-white font-medium">{showProductDetails.vendor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Last Updated</span>
                        <span className="text-white font-medium">{showProductDetails.lastUpdated}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700 rounded-lg p-4">
                    <h4 className="font-medium text-sm text-gray-400 mb-2">Specifications</h4>
                    <div className="grid grid-cols-1 gap-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Weight</span>
                        <span className="text-white font-medium">{showProductDetails.weight}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Dimensions</span>
                        <span className="text-white font-medium">{showProductDetails.dimensions}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Warranty</span>
                        <span className="text-white font-medium">{showProductDetails.warranty}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-2">Inventory</h4>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mr-2">
                      <div
                        className={`h-2.5 rounded-full ${
                          showProductDetails.inventory === 0
                            ? "bg-red-500"
                            : showProductDetails.inventory < 50
                              ? "bg-yellow-500"
                              : "bg-green-500"
                        }`}
                        style={{ width: `${Math.min(100, (showProductDetails.inventory / 250) * 100)}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-300 whitespace-nowrap">
                      {showProductDetails.inventory} in stock
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => setEditingProduct(showProductDetails)}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm flex items-center transition-all"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit Product
                  </button>
                  <button
                    onClick={() => {
                      setShowProductDetails(null)
                      handleProductAnalytics(showProductDetails.id)
                    }}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-2 rounded-lg text-sm flex items-center transition-all"
                  >
                    <BarChart3 className="w-4 h-4 mr-1" />
                    View Analytics
                  </button>
                  <button
                    onClick={() => {
                      const newProduct = {...showProductDetails, id: products.length + 1, title: `${showProductDetails.title} (Copy)`, sku: `${showProductDetails.sku}-COPY`}
                      setProducts([...products, newProduct])
                      setShowToast({
                        type: "success",
                        message: `Product "${showProductDetails.title}" duplicated successfully`,
                      })
                      setShowProductDetails(null)
                    }}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm flex items-center transition-all"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Duplicate
                  </button>
                </div>

                {showProductDetails.relatedProducts && showProductDetails.relatedProducts.length > 0 && (
                  <div className="border-t border-gray-700 pt-4">
                    <h4 className="font-medium text-white mb-2">Related Products</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {showProductDetails.relatedProducts.map((relatedId) => {
                        const relatedProduct = products.find((p) => p.id === relatedId)
                        if (!relatedProduct) return null
                        return (
                          <div
                            key={relatedId}
                            className="bg-gray-700 rounded-lg p-2 cursor-pointer hover:bg-gray-600 transition-colors"
                            onClick={() => setShowProductDetails(relatedProduct)}
                          >
                            <div
                              className="w-full h-16 bg-cover bg-center rounded mb-1"
                              style={{ backgroundImage: `url(${relatedProduct.image})` }}
                            ></div>
                            <div className="text-xs font-medium text-white truncate">{relatedProduct.title}</div>
                            <div className="text-xs text-gray-400">${relatedProduct.price.toFixed(2)}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Analytics Modal */}
      {productAnalytics && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div 
            className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-gray-800 shadow-xl z-50 overflow-y-auto animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">Product Analytics: {productAnalytics.title}</h3>
                <button onClick={() => setProductAnalytics(null)} className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/20 backdrop-blur-md rounded-lg p-4 border border-blue-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-400">Total Sales</h4>
                    <ShoppingCart className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold text-white">{productAnalytics.salesCount}</p>
                  <p className="text-xs text-gray-400">
                    +
                    {productAnalytics.monthlySales[productAnalytics.monthlySales.length - 1] -
                      productAnalytics.monthlySales[productAnalytics.monthlySales.length - 2]}{" "}
                    this month
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-green-600/20 backdrop-blur-md rounded-lg p-4 border border-green-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-400">Revenue</h4>
                    <DollarSign className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold text-white">
                    ${(productAnalytics.price * productAnalytics.salesCount).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-400">
                    $
                    {(
                      productAnalytics.price *
                      (productAnalytics.monthlySales[productAnalytics.monthlySales.length - 1] -
                        productAnalytics.monthlySales[productAnalytics.monthlySales.length - 2])
                    ).toFixed(2)}{" "}
                    this month
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/20 backdrop-blur-md rounded-lg p-4 border border-purple-500/20">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-400">Page Views</h4>
                    <Eye className="w-5 h-5 text-purple-500" />
                  </div>
                  <p className="text-2xl font-bold text-white">{productAnalytics.views}</p>
                  <p className="text-xs text-gray-400">
                    Conversion rate: {((productAnalytics.salesCount / productAnalytics.views) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-700 rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-white mb-4">Monthly Sales</h4>
                  <div className="h-48 flex items-end space-x-2">
                    {productAnalytics.monthlySales.map((sales, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-blue-500 rounded-t-sm hover:bg-blue-600 transition-colors"
                          style={{ height: `${(sales / Math.max(...productAnalytics.monthlySales)) * 100}%` }}
                        ></div>
                        <div className="text-xs text-gray-400 mt-1">
                          {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"][i]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-700 rounded-lg p-4 shadow-sm">
                  <h4 className="font-medium text-white mb-4">Inventory History</h4>
                  <div className="h-48 flex items-end space-x-2">
                    {productAnalytics.stockHistory.map((stock, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div
                          className={`w-full rounded-t-sm transition-colors ${
                            stock < 50 ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"
                          }`}
                          style={{ height: `${(stock / Math.max(...productAnalytics.stockHistory)) * 100}%` }}
                        ></div>
                        <div className="text-xs text-gray-400 mt-1">
                          {["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"][i]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 border-t border-gray-700 pt-4">
                <button
                  onClick={() => {
                    setProductAnalytics(null)
                    setShowProductDetails(productAnalytics)
                  }}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-all"
                >
                  Back to Details
                </button>
                <button
                  onClick={() => {
                    setProductAnalytics(null)
                    setShowToast({
                      type: "success",
                      message: "Analytics report downloaded successfully",
                    })
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm flex items-center transition-all"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Preview Modal */}
      {showImagePreview && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setShowImagePreview(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
            <img
              src={showImagePreview || "/placeholder.svg"}
              alt="Product preview"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowImagePreview(null)
              }}
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                window.open(showImagePreview, "_blank")
              }}
              className="absolute top-2 left-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl w-full max-w-md shadow-2xl">
            <div className="p-6">
              <h3 className="text-lg font-medium text-white mb-2">{showConfirmation.title}</h3>
              <p className="text-gray-500 mb-6">{showConfirmation.message}</p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={showConfirmation.cancelAction}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition-all"
                >
                  {showConfirmation.cancelText || "Cancel"}
                </button>
                <button
                  onClick={showConfirmation.confirmAction}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-all"
                >
                  {showConfirmation.confirmText || "Confirm"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Export Options Modal */}
      {showExportOptions && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl w-full max-w-md shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Export Products</h3>
                <button onClick={() => setShowExportOptions(false)} className="text-gray-500 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-500 mb-4">Select the format to export your products data:</p>
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleExportData("csv")}
                  className="w-full bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-lg p-4 text-left flex items-center transition-all"
                >
                  <FileText className="w-5 h-5 text-green-500 mr-3" />
                  <div>
                    <div className="font-medium text-white">CSV</div>
                    <div className="text-xs text-gray-500">Export as comma-separated values</div>
                  </div>
                </button>

                <button
                  onClick={() => handleExportData("excel")}
                  className="w-full bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-lg p-4 text-left flex items-center transition-all"
                >
                  <FileText className="w-5 h-5 text-blue-500 mr-3" />
                  <div>
                    <div className="font-medium text-white">Excel</div>
                    <div className="text-xs text-gray-500">Export as Microsoft Excel spreadsheet</div>
                  </div>
                </button>

                <button
                  onClick={() => handleExportData("json")}
                  className="w-full bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-lg p-4 text-left flex items-center transition-all"
                >
                  <FileText className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="font-medium text-white">JSON</div>
                    <div className="text-xs text-gray-500">Export as JSON data format</div>
                  </div>
                </button>

                <button
                  onClick={() => handleExportData("pdf")}
                  className="w-full bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-lg p-4 text-left flex items-center transition-all"
                >
                  <FileText className="w-5 h-5 text-red-500 mr-3" />
                  <div>
                    <div className="font-medium text-white">PDF</div>
                    <div className="text-xs text-gray-500">Export as PDF document</div>
                  </div>
                </button>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowExportOptions(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Import Options Modal */}
      {showImportOptions && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl w-full max-w-md shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-white">Import Products</h3>
                <button onClick={() => setShowImportOptions(false)} className="text-gray-500 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-gray-500 mb-4">Select a file format to import:</p>
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => {
                    fileInputRef.current?.click()
                    setShowImportOptions(false)
                  }}
                  className="w-full bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-lg p-4 text-left flex items-center transition-all"
                >
                  <FileText className="w-5 h-5 text-green-500 mr-3" />
                  <div>
                    <div className="font-medium text-white">CSV</div>
                    <div className="text-xs text-gray-500">Import from comma-separated values</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    fileInputRef.current?.click()
                    setShowImportOptions(false)
                  }}
                  className="w-full bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-lg p-4 text-left flex items-center transition-all"
                >
                  <FileText className="w-5 h-5 text-blue-500 mr-3" />
                  <div>
                    <div className="font-medium text-white">Excel</div>
                    <div className="text-xs text-gray-500">Import from Microsoft Excel spreadsheet</div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    fileInputRef.current?.click()
                    setShowImportOptions(false)
                  }}
                  className="w-full bg-gray-800 border border-gray-700 hover:bg-gray-700 rounded-lg p-4 text-left flex items-center transition-all"
                >
                  <FileText className="w-5 h-5 text-yellow-500 mr-3" />
                  <div>
                    <div className="font-medium text-white">JSON</div>
                    <div className="text-xs text-gray-500">Import from JSON data format</div>
                  </div>
                </button>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowImportOptions(false)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div 
            className="fixed right-0 top-0 h-full w-full md:w-[600px] bg-gray-800 shadow-xl z-50 overflow-y-auto animate-slide-in-right scroll-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gray-800 border-b border-gray-700 p-4 z-10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-white">Add New Product</h3>
                <button onClick={() => setShowAddProduct(false)} className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Product Title*</label>
                  <input
                    type="text"
                    placeholder="Enter product title"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Subtitle</label>
                  <input
                    type="text"
                    placeholder="Enter product subtitle"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">SKU*</label>
                  <input
                    type="text"
                    placeholder="Enter product SKU"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Price*</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-7 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Status*</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Out of Stock">Out of Stock</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Pending Review">Pending Review</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Inventory*</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Category*</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white">
                    <option value="">Select a category</option>
                    {categories
                      .filter((c) => c !== "All")
                      .map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    <option value="new">+ Add new category</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Vendor*</label>
                  <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white">
                    <option value="">Select a vendor</option>
                    {vendors.map((vendor) => (
                      <option key={vendor} value={vendor}>
                        {vendor}
                      </option>
                    ))}
                    <option value="new">+ Add new vendor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Discount (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    placeholder="0"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Product Image</label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-3 py-2 rounded-lg text-sm flex items-center transition-all"
                    >
                      <Upload className="w-4 h-4 mr-1" />
                      Upload Image
                    </button>
                    <span className="text-xs text-gray-400">No file selected</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Trending</label>
                  <div className="flex items-center mt-2">
                    <input type="checkbox" className="rounded border-gray-600 text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-300">Mark as trending product</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                <textarea
                  placeholder="Enter product description"
                  rows={3}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Features</label>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="text"
                    placeholder="Add feature and press Enter"
                    className="flex-1 min-w-[200px] bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim() !== "") {
                        e.target.value = ""
                        e.preventDefault()
                      }
                    }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-300 mb-1">Tags</label>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="text"
                    placeholder="Add tag and press Enter"
                    className="flex-1 min-w-[200px] bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim() !== "") {
                        e.target.value = ""
                        e.preventDefault()
                      }
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Weight</label>
                  <input
                    type="text"
                    placeholder="e.g. 1.5 kg"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Dimensions</label>
                  <input
                    type="text"
                    placeholder="e.g. 10 × 10 × 5 cm"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Warranty</label>
                  <input
                    type="text"
                    placeholder="e.g. 1 year"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6 border-t border-gray-700 pt-4">
                <button
                  onClick={() => setShowAddProduct(false)}
                  className="bg-gray-700 border border-gray-600 hover:bg-gray-600 text-gray-200 px-4 py-2 rounded-lg text-sm transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowAddProduct(false)
                    setShowToast({
                      type: "success",
                      message: "New product added successfully",
                    })
                  }}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg text-sm flex items-center shadow-sm transition-all"
                >
                  <Save className="w-4 h-4 mr-1" />
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-down">
          <div
            className={`rounded-lg shadow-lg p-4 flex items-center gap-3 max-w-md ${
              showToast.type === "success"
                ? "bg-green-900 border border-green-700 text-green-100"
                : showToast.type === "error"
                  ? "bg-red-900 border border-red-700 text-red-100"
                  : "bg-blue-900 border border-blue-700 text-blue-100"
            }`}
          >
            {showToast.type === "success" && <CheckCircle2 className="w-5 h-5 text-green-400" />}
            {showToast.type === "error" && <AlertCircle className="w-5 h-5 text-red-400" />}
            {showToast.type === "info" && <Info className="w-5 h-5 text-blue-400" />}
            <div className="flex-1">
              <p className="text-sm font-medium">
                {showToast.message}
              </p>
            </div>
            <button onClick={() => setShowToast(null)} className="text-gray-300 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-500">
              Showing <span className="font-medium text-white">{filteredProducts.length}</span> of{" "}
              <span className="font-medium text-white">{products.length}</span> products
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setProducts(sampleProducts)
                  setFilteredProducts(sampleProducts)
                  setShowToast({
                    type: "success",
                    message: "Products refreshed successfully",
                  })
                }}
                className="bg-gray-700 hover:bg-gray-600 text-gray-200 px-3 py-1.5 rounded-lg text-sm flex items-center gap-1 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <button disabled className="p-1.5 rounded border border-gray-700 text-gray-400">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="px-2">1</span>
                <button disabled className="p-1.5 rounded border border-gray-700 text-gray-400">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     </motion.div>
    </div>
  )
}

export default ManageProducts;


