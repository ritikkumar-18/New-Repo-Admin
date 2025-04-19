// import { useState, useEffect, useRef } from "react";
// import Header from "../components/Common/Header";
// import {
//   Search,
//   Filter,
//   Plus,
//   Edit,
//   Trash2,
//   ChevronDown,
//   ChevronUp,
//   ChevronLeft,
//   ChevronRight,
//   Eye,
//   Download,
//   Upload,
//   ArrowUpDown,
//   CheckCircle2,
//   AlertCircle,
//   Clock,
//   Tag,
//   Zap,
//   Shield,
//   Cpu,
//   X,
//   Save,
//   RefreshCw,
//   FileText,
//   BarChart3,
//   Settings,
//   HelpCircle,
// } from "lucide-react";

// const ManageProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [sortConfig, setSortConfig] = useState({ key: "title", direction: "ascending" });
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [showFilters, setShowFilters] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [expandedProduct, setExpandedProduct] = useState(null);
//   const [showStats, setShowStats] = useState(true);
//   const [spotlightIndex, setSpotlightIndex] = useState(0);

//   const searchInputRef = useRef(null);

//   const sampleProducts = [
//     {
//       id: 1,
//       title: "Smart Electrical Boards",
//       subtitle: "Next Generation Power Management",
//       description: "Experience cutting-edge smart boards with real-time monitoring and energy optimization.",
//       image:
//         "https://imgs.search.brave.com/HBwjZrYBdESRw-mbBItimPwkIQPczZro_46i1-quYGo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3JlZW5lbGVjdHJp/Y2Fsc3VwcGx5LmNv/bS9jZG4vc2hvcC9m/aWxlcy9XRlJTTTEt/NF80MDB4LnBuZz92/PTE3MjU4ODk4Njg",
//       status: "Active",
//       inventory: 125,
//       price: "$299.99",
//       category: "Smart Home",
//       rating: 4.8,
//       vendor: "ElectroTech Solutions",
//       sku: "SEB-001",
//       lastUpdated: "2023-11-15",
//       features: ["IoT Integration", "Energy Saving", "Remote Access", "Surge Protection"],
//       discount: "15% OFF",
//       salesCount: 87,
//       views: 1245,
//     },
//     {
//       id: 2,
//       title: "Advanced Switches",
//       subtitle: "Touch & Voice Activated Controls",
//       description: "High-durability switches with touch control and voice activation.",
//       image:
//         "https://imgs.search.brave.com/AYyt_GWKQ4Kyr-huX7ZoHDTEGwE3Ht4x4O1ArdHkZ4w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9FbGVj/dHJpY2FsLU1vZHVs/YXItU3dpdGNoLVBO/Ry1UcmFuc3BhcmVu/dC1JbWFnZS5wbmc",
//       status: "Active",
//       inventory: 210,
//       price: "$89.99",
//       category: "Smart Home",
//       rating: 4.6,
//       vendor: "Luminance Creations",
//       sku: "AS-002",
//       lastUpdated: "2023-12-01",
//       features: ["Voice Control", "Touch Sensitive", "Long Lifespan", "LED Indicators"],
//       discount: "10% OFF",
//       salesCount: 156,
//       views: 2130,
//     },
//     {
//       id: 3,
//       title: "Precision Regulators",
//       subtitle: "Voltage Stabilization Technology",
//       description: "Regulate voltage with precision using our smart regulators.",
//       image:
//         "https://imgs.search.brave.com/8AqeVhnMJSaHvMCdtd1cdK0QwvXImchTzpCBycVVQbI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lbGVj/dHJpY3JlZ3VsYXRv/ci5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMDQvcGFy/dHMucG5n",
//       status: "Low Stock",
//       inventory: 32,
//       price: "$149.99",
//       category: "Industrial",
//       rating: 4.9,
//       vendor: "HydraClean Solutions",
//       sku: "PR-003",
//       lastUpdated: "2023-10-22",
//       features: ["Overvoltage Protection", "Efficiency Boost", "Compact Design", "Digital Display"],
//       discount: "",
//       salesCount: 64,
//       views: 890,
//     },
//     {
//       id: 4,
//       title: "Power Distribution Units",
//       subtitle: "Enterprise-Grade Power Solutions",
//       description: "Optimize power distribution with our innovative PDUs.",
//       image:
//         "https://imgs.search.brave.com/VXNTWlwYjjjmJtJ8tQ0-GGlFbzRKqY40I4QSxhNIDec/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y3liZXJwb3dlcnN5/c3RlbXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA4/L05ldy1XZWItU3dp/dGNoZWQtTWV0ZXJl/ZC1ieS1PdXRsZXQt/MTQ4MHg3NjAtMS0z/MDB4MTU0LnBuZw",
//       status: "Active",
//       inventory: 78,
//       price: "$499.99",
//       category: "Industrial",
//       rating: 4.7,
//       vendor: "FreshTech Appliances",
//       sku: "PDU-004",
//       lastUpdated: "2023-11-30",
//       features: ["Scalable Design", "Reliable Performance", "Easy Installation", "Remote Monitoring"],
//       discount: "5% OFF",
//       salesCount: 42,
//       views: 675,
//     },
//     {
//       id: 5,
//       title: "Industrial Circuit Breakers",
//       subtitle: "Maximum Protection Systems",
//       description: "Heavy-duty circuit breakers designed for industrial applications.",
//       image:
//         "https://imgs.search.brave.com/w690CjWMVXOHQABKWY9vuIahHoBhYj-9Xt-llJYb2TE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bHVtaW5zbWFydC5j/b20vc3RvcmFnZS9h/cHAvbWVkaWEvTHVt/aW4lMjBsc3AvTHVt/aW5fQW50ZW5uYS5w/bmc",
//       status: "Active",
//       inventory: 95,
//       price: "$349.99",
//       category: "Safety",
//       rating: 4.9,
//       vendor: "Vitality Gear Co.",
//       sku: "ICB-005",
//       lastUpdated: "2023-09-15",
//       features: ["Short Circuit Protection", "Thermal Protection", "Adjustable Trip Settings", "Status Indicators"],
//       discount: "",
//       salesCount: 38,
//       views: 520,
//     },
//     {
//       id: 6,
//       title: "Smart Home Lighting Controls",
//       subtitle: "Intelligent Illumination Systems",
//       description: "Complete lighting control solutions with dimming and scheduling capabilities.",
//       image:
//         "https://imgs.search.brave.com/HryknztkcbdsPmzL3zW5-XrU8Zu-9hpuLPq_XiN2N8Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzUz/ZmNlNDcwZTRiMDM3/NGFkZmRkMzBiYy8x/NDE3NTYzODkxNzEx/LUVTSlFJUEtRVE9N/MUFISVJESUtPL2hl/cm8tZmVhdHVyZXMt/ZGltbWluZy1vci1z/d2l0Y2gucG5n",
//       status: "Out of Stock",
//       inventory: 0,
//       price: "$129.99",
//       category: "Smart Home",
//       rating: 4.5,
//       vendor: "GreenGrowth Designers",
//       sku: "SHLC-006",
//       lastUpdated: "2023-12-05",
//       features: ["Wireless Control", "Scene Programming", "Energy Monitoring", "Voice Compatible"],
//       discount: "20% OFF",
//       salesCount: 112,
//       views: 1875,
//     },
//     {
//       id: 7,
//       title: "Solar Power Inverters",
//       subtitle: "Renewable Energy Conversion",
//       description: "High-efficiency inverters for solar panel systems with grid-tie capabilities.",
//       image:
//         "https://imgs.search.brave.com/F1WswYW0wWUIPCihSjUtKfxu_98apBPM66th_Dal0oA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c21hLmRlL2ZpbGVh/ZG1pbi9fcHJvY2Vz/c2VkXy84LzcvY3Nt/X1NUUFhfU0NfU0Jf/MTAyNHg1NzZfY2I4/Y2E2M2NhZC5wbmc",
//       status: "Active",
//       inventory: 45,
//       price: "$799.99",
//       category: "Renewable",
//       rating: 4.8,
//       vendor: "Luminance Creations",
//       sku: "SPI-007",
//       lastUpdated: "2023-11-10",
//       features: ["High Efficiency", "Grid-Tie Ready", "Battery Integration", "Monitoring App"],
//       discount: "10% OFF",
//       salesCount: 29,
//       views: 680,
//     },
//     {
//       id: 8,
//       title: "Industrial UPS Systems",
//       subtitle: "Uninterrupted Power Supply",
//       description: "Reliable backup power systems for critical infrastructure.",
//       image:
//         "https://imgs.search.brave.com/RN0WJdX7xWMJIIz8Ouu4ZwBj9PqV3JwV6ZTKZBxWn3s/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG93ZXItc29sdXRp/b25zLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8xMi9T/UllMNUsxNVJNWExU/X0ZMX1Zfd2ViLTMw/MHgzMDAucG5n",
//       status: "Pending Review",
//       inventory: 18,
//       price: "$1,299.99",
//       category: "Safety",
//       rating: 4.7,
//       vendor: "ElectroTech Solutions",
//       sku: "UPS-008",
//       lastUpdated: "2023-12-10",
//       features: ["Zero Transfer Time", "Extended Runtime", "Power Conditioning", "Remote Management"],
//       discount: "",
//       salesCount: 15,
//       views: 420,
//     },
//   ];

//   useEffect(() => {
//     setTimeout(() => {
//       setProducts(sampleProducts);
//       setFilteredProducts(sampleProducts);
//       setIsLoading(false);
//     }, 800);
//   }, []);

//   useEffect(() => {
//     const filtered = products.filter((product) => {
//       const matchesSearch =
//         searchQuery === "" ||
//         product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         product.vendor.toLowerCase().includes(searchQuery.toLowerCase());

//       const matchesFilter =
//         activeFilter === "All" ||
//         (activeFilter === "Low Stock" && product.inventory < 50) ||
//         (activeFilter === "Out of Stock" && product.inventory === 0) ||
//         product.status === activeFilter ||
//         product.category === activeFilter;

//       return matchesSearch && matchesFilter;
//     });
//     setFilteredProducts(filtered);
//   }, [searchQuery, activeFilter, products]);

//   useEffect(() => {
//     if (selectAll) {
//       setSelectedProducts(filteredProducts.map((product) => product.id));
//     } else if (selectedProducts.length === filteredProducts.length) {
//       setSelectedProducts([]);
//     }
//   }, [selectAll]);

//   useEffect(() => {
//     setShowStats(selectedProducts.length === 0);
//   }, [selectedProducts]);

//   useEffect(() => {
//     if (showSearch && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [showSearch]);

//   const sortProducts = (key) => {
//     let direction = "ascending";
//     if (sortConfig.key === key && sortConfig.direction === "ascending") {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });

//     const sortedProducts = [...filteredProducts].sort((a, b) => {
//       if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
//       if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
//       return 0;
//     });
//     setFilteredProducts(sortedProducts);
//   };

//   const toggleProductSelection = (productId) => {
//     setSelectedProducts((prev) =>
//       prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
//     );
//   };

//   const handleBulkAction = (action) => {
//     switch (action) {
//       case "delete":
//         setProducts((prev) => prev.filter((product) => !selectedProducts.includes(product.id)));
//         setSelectedProducts([]);
//         break;
//       case "activate":
//         setProducts((prev) =>
//           prev.map((product) =>
//             selectedProducts.includes(product.id) ? { ...product, status: "Active" } : product,
//           ),
//         );
//         break;
//       case "deactivate":
//         setProducts((prev) =>
//           prev.map((product) =>
//             selectedProducts.includes(product.id) ? { ...product, status: "Inactive" } : product,
//           ),
//         );
//         break;
//       default:
//         break;
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Active":
//         return "bg-green-500/20 text-green-500";
//       case "Inactive":
//         return "bg-gray-500/20 text-gray-400";
//       case "Out of Stock":
//         return "bg-red-500/20 text-red-500";
//       case "Low Stock":
//         return "bg-yellow-500/20 text-yellow-500";
//       case "Pending Review":
//         return "bg-blue-500/20 text-blue-400";
//       default:
//         return "bg-gray-500/20 text-gray-400";
//     }
//   };

//   const getFeatureIcon = (feature) => {
//     if (feature.toLowerCase().includes("energy") || feature.toLowerCase().includes("power")) {
//       return <Zap className="w-4 h-4" />;
//     } else if (feature.toLowerCase().includes("protection") || feature.toLowerCase().includes("safety")) {
//       return <Shield className="w-4 h-4" />;
//     } else if (feature.toLowerCase().includes("smart") || feature.toLowerCase().includes("iot")) {
//       return <Cpu className="w-4 h-4" />;
//     } else {
//       return <Tag className="w-4 h-4" />;
//     }
//   };

//   const stats = {
//     totalProducts: products.length,
//     activeProducts: products.filter((p) => p.status === "Active").length,
//     outOfStock: products.filter((p) => p.status === "Out of Stock").length,
//     lowStock: products.filter((p) => p.inventory > 0 && p.inventory < 50).length,
//     totalValue: products
//       .reduce((sum, product) => {
//         const price = Number.parseFloat(product.price.replace("$", "").replace(",", ""));
//         return sum + price * product.inventory;
//       }, 0)
//       .toLocaleString("en-US", { style: "currency", currency: "USD" }),
//   };

//   const categories = [
//     "All",
//     "Active",
//     "Inactive",
//     "Out of Stock",
//     "Low Stock",
//     "Pending Review",
//     ...new Set(products.map((product) => product.category)),
//   ];

//   // Auto-scroll for Product Spotlight
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSpotlightIndex((prev) => (prev + 1) % products.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [products.length]);

//   return (
//     <div className="flex-1 overflow-auto relative z-10 bg-gradient-to-br from-gray-900 via-gray-800 to-slate-950 min-h-screen text-white scroll-hidden">
//       <Header title="Manage Products" />

//       {/* Quick Insights Panel */}
//       {showStats && (
//         <div className="container mx-auto px-4 py-4">
//           <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-4">
//             <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/20 rounded-lg p-4 border border-blue-700/30 shadow-lg hover:shadow-blue-500/20 transition-all">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-sm text-slate-300">Total Products</h3>
//                 <FileText className="w-5 h-5 text-blue-400" />
//               </div>
//               <p className="text-2xl font-bold mt-2 text-white">{stats.totalProducts}</p>
//             </div>
//             <div className="bg-gradient-to-r from-slate-800/50 to-green-900/20 rounded-lg p-4 border border-green-700/30 shadow-lg hover:shadow-green-500/20 transition-all">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-sm text-slate-300">Active Products</h3>
//                 <CheckCircle2 className="w-5 h-5 text-green-400" />
//               </div>
//               <p className="text-2xl font-bold mt-2 text-white">{stats.activeProducts}</p>
//             </div>
//             <div className="bg-gradient-to-r from-slate-800/50 to-red-900/20 rounded-lg p-4 border border-red-700/30 shadow-lg hover:shadow-red-500/20 transition-all">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-sm text-slate-300">Out of Stock</h3>
//                 <AlertCircle className="w-5 h-5 text-red-400" />
//               </div>
//               <p className="text-2xl font-bold mt-2 text-white">{stats.outOfStock}</p>
//             </div>
//             <div className="bg-gradient-to-r from-slate-800/50 to-yellow-900/20 rounded-lg p-4 border border-yellow-700/30 shadow-lg hover:shadow-yellow-500/20 transition-all">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-sm text-slate-300">Low Stock</h3>
//                 <Clock className="w-5 h-5 text-yellow-400" />
//               </div>
//               <p className="text-2xl font-bold mt-2 text-white">{stats.lowStock}</p>
//             </div>
//             <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/20 rounded-lg p-4 border border-purple-700/30 shadow-lg hover:shadow-purple-500/20 transition-all">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-sm text-slate-300">Inventory Value</h3>
//                 <BarChart3 className="w-5 h-5 text-purple-400" />
//               </div>
//               <p className="text-2xl font-bold mt-2 text-white">{stats.totalValue}</p>
//             </div>
//           </div>
//           <button
//             onClick={() => setShowStats(false)}
//             className="text-slate-300 hover:text-white text-sm flex items-center mt-2 ml-auto transition-colors"
//           >
//             <ChevronUp className="w-4 h-4 mr-1" /> Hide Insights
//           </button>
//         </div>
//       )}

//       {!showStats && (
//         <div className="container mx-auto px-4">
//           <button
//             onClick={() => setShowStats(true)}
//             className="text-slate-300 hover:text-white text-sm flex items-center mt-2 transition-colors"
//           >
//             <ChevronDown className="w-4 h-4 mr-1" /> Show Insights
//           </button>
//         </div>
//       )}

//       {/* Search and Filter Bar */}
//       <div className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/50 transition-all">
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
//                   className="w-full bg-slate-800/70 text-white border border-slate-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                 />
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
//                 {searchQuery && (
//                   <button
//                     onClick={() => setSearchQuery("")}
//                     className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
//                   >
//                     <X className="w-4 h-4" />
//                   </button>
//                 )}
//               </div>
//             ) : (
//               <button
//                 onClick={() => setShowSearch(true)}
//                 className="bg-gradient-to-r from-slate-800 to-gray-800 hover:from-blue-800 hover:to-gray-700 text-white p-2 rounded-lg flex items-center gap-2 text-sm transition-all shadow-md hover:shadow-blue-500/20"
//               >
//                 <Search className="w-4 h-4" />
//                 <span className="hidden sm:inline">Search</span>
//               </button>
//             )}
//           </div>

//           <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
//             <div className="relative">
//               <button
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="bg-gradient-to-r from-slate-800 to-gray-800 hover:from-blue-800 hover:to-gray-700 text-white p-2 rounded-lg flex items-center gap-2 text-sm transition-all shadow-md hover:shadow-blue-500/20"
//               >
//                 <Filter className="w-4 h-4" />
//                 <span className="hidden sm:inline">Filter</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {showFilters && (
//                 <div className="absolute right-0 mt-2 w-48 bg-slate-800/90 rounded-lg shadow-lg overflow-hidden z-50 max-h-80 overflow-y-auto backdrop-blur-md">
//                   {categories.map((category) => (
//                     <button
//                       key={category}
//                       onClick={() => {
//                         setActiveFilter(category);
//                         setShowFilters(false);
//                       }}
//                       className={`w-full text-left px-4 py-2 text-sm ${
//                         activeFilter === category
//                           ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white"
//                           : "text-slate-200 hover:bg-slate-700/50"
//                       } transition-all`}
//                     >
//                       {category}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <button
//               onClick={() => {
//                 alert("Add new product functionality would be implemented here");
//               }}
//               className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white p-2 rounded-lg flex items-center gap-2 text-sm transition-all shadow-md hover:shadow-blue-500/20"
//             >
//               <Plus className="w-4 h-4" />
//               <span className="hidden sm:inline">Add Product</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Active Filter Indicator */}
//       {activeFilter !== "All" && (
//         <div className="container mx-auto px-4 py-2">
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-slate-400">Filtered by:</span>
//             <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-md">
//               {activeFilter}
//               <button
//                 onClick={() => setActiveFilter("All")}
//                 className="ml-2 text-blue-400 hover:text-white transition-colors"
//               >
//                 <X className="w-3 h-3" />
//               </button>
//             </span>
//           </div>
//         </div>
//       )}

//       {/* Bulk Actions Bar */}
//       {selectedProducts.length > 0 && (
//         <div className="container mx-auto px-4 py-2 bg-gradient-to-r from-slate-800/50 to-blue-900/20 rounded-lg my-2 shadow-lg">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <span className="text-sm text-slate-300">{selectedProducts.length} products selected</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <button
//                 onClick={() => handleBulkAction("activate")}
//                 className="bg-green-600/20 hover:bg-green-600/30 text-green-400 px-3 py-1 rounded-lg text-xs font-medium transition-all shadow-md hover:shadow-green-500/20"
//               >
//                 Activate
//               </button>
//               <button
//                 onClick={() => handleBulkAction("deactivate")}
//                 className="bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-400 px-3 py-1 rounded-lg text-xs font-medium transition-all shadow-md hover:shadow-yellow-500/20"
//               >
//                 Deactivate
//               </button>
//               <button
//                 onClick={() => handleBulkAction("delete")}
//                 className="bg-red-600/20 hover:bg-red-600/30 text-red-400 px-3 py-1 rounded-lg text-xs font-medium transition-all shadow-md hover:shadow-red-500/20"
//               >
//                 Delete
//               </button>
//               <button
//                 onClick={() => setSelectedProducts([])}
//                 className="bg-slate-700/50 hover:bg-slate-600 text-white px-3 py-1 rounded-lg text-xs font-medium transition-all shadow-md"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Loading State */}
//       {isLoading && (
//         <div className="container mx-auto px-4 py-16 text-center">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           <p className="mt-4 text-slate-300">Loading products...</p>
//         </div>
//       )}

//       {/* No Results Message */}
//       {!isLoading && filteredProducts.length === 0 && (
//         <div className="container mx-auto px-4 py-16 text-center">
//           <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/20 rounded-xl p-8 max-w-md mx-auto shadow-lg">
//             <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-white mb-2">No products found</h3>
//             <p className="text-slate-400 mb-4">We couldn't find any products matching your search criteria.</p>
//             <button
//               onClick={() => {
//                 setSearchQuery("");
//                 setActiveFilter("All");
//               }}
//               className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-blue-500/20"
//             >
//               Clear Filters
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Product Grid View */}
//       {!isLoading && filteredProducts.length > 0 && (
//         <div className="container mx-auto px-4 py-6">
//           {/* Product Spotlight Carousel */}
//           <div className="relative w-full mb-6 overflow-hidden rounded-xl shadow-lg">
//             <div
//               className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${spotlightIndex * 100}%)` }}
//             >
//               {filteredProducts.map((product) => (
//                 <div key={product.id} className="w-full flex-shrink-0">
//                   <div
//                     className="bg-cover bg-center h-48 sm:h-64 md:h-72 relative"
//                     style={{ backgroundImage: `url(${product.image})` }}
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
//                       <div>
//                         <h3 className="text-xl sm:text-2xl font-bold text-white">{product.title}</h3>
//                         <p className="text-sm text-blue-300">{product.subtitle}</p>
//                         <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(product.status)} mt-2 inline-block`}>
//                           {product.status}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={() => setSpotlightIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length)}
//               className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={() => setSpotlightIndex((prev) => (prev + 1) % filteredProducts.length)}
//               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Product Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className={`bg-gradient-to-br from-slate-800/70 to-gray-900 rounded-xl overflow-hidden border border-slate-700/30 shadow-lg hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 ${
//                   selectedProducts.includes(product.id) ? "ring-2 ring-blue-500" : ""
//                 }`}
//               >
//                 <div className="relative">
//                   <div className="h-40 sm:h-48 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }}>
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                   </div>

//                   <div className="absolute top-2 left-2">
//                     <input
//                       type="checkbox"
//                       checked={selectedProducts.includes(product.id)}
//                       onChange={() => toggleProductSelection(product.id)}
//                       className="w-4 h-4 rounded border-slate-500 text-blue-600 focus:ring-blue-500 bg-slate-700"
//                     />
//                   </div>

//                   <div className="absolute top-2 right-2">
//                     <span
//                       className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)} shadow-md`}
//                     >
//                       {product.status}
//                     </span>
//                   </div>

//                   <div className="absolute bottom-2 right-2 flex gap-1">
//                     <button
//                       onClick={() => setEditingProduct(product)}
//                       className="p-1.5 rounded-full bg-slate-700/80 text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
//                     >
//                       <Edit className="w-4 h-4" />
//                     </button>
//                     <button
//                       onClick={() => {
//                         if (confirm("Are you sure you want to delete this product?")) {
//                           setProducts((prev) => prev.filter((p) => p.id !== product.id));
//                         }
//                       }}
//                       className="p-1.5 rounded-full bg-slate-700/80 text-slate-300 hover:bg-red-600 hover:text-white transition-all"
//                     >
//                       <Trash2 className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-4">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="text-white font-semibold text-base line-clamp-2">{product.title}</h3>
//                     {product.discount && (
//                       <span className="bg-red-500/20 text-red-400 text-xs px-2 py-0.5 rounded-full font-medium">
//                         {product.discount}
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-slate-400 text-sm line-clamp-1 mb-2">{product.subtitle}</p>

//                   <div className="grid grid-cols-2 gap-1 text-xs mb-3">
//                     <div>
//                       <span className="text-slate-400">Price:</span>
//                       <span className="ml-1 text-white font-medium">{product.price}</span>
//                     </div>
//                     <div>
//                       <span className="text-slate-400">SKU:</span>
//                       <span className="ml-1 text-white">{product.sku}</span>
//                     </div>
//                     <div>
//                       <span className="text-slate-400">Inventory:</span>
//                       <span
//                         className={`ml-1 ${product.inventory < 50 ? "text-yellow-400" : "text-white"}`}
//                       >
//                         {product.inventory}
//                       </span>
//                     </div>
//                     <div>
//                       <span className="text-slate-400">Category:</span>
//                       <span className="ml-1 text-white">{product.category}</span>
//                     </div>
//                   </div>

//                   <div className="flex justify-between items-center mt-2">
//                     <span className="text-xs text-slate-400">Updated: {product.lastUpdated}</span>
//                     <button
//                       onClick={() => setExpandedProduct(expandedProduct === product.id ? null : product.id)}
//                       className="text-blue-400 hover:text-blue-300 text-xs flex items-center transition-colors"
//                     >
//                       {expandedProduct === product.id ? "Less" : "More"}
//                       {expandedProduct === product.id ? (
//                         <ChevronUp className="w-3 h-3 ml-1" />
//                       ) : (
//                         <ChevronDown className="w-3 h-3 ml-1" />
//                       )}
//                     </button>
//                   </div>

//                   {expandedProduct === product.id && (
//                     <div className="mt-3 pt-3 border-t border-slate-700/50">
//                       <p className="text-sm text-slate-300 mb-2 line-clamp-3">{product.description}</p>
//                       <div className="flex flex-wrap gap-1 mb-2">
//                         {product.features.map((feature, i) => (
//                           <span
//                             key={i}
//                             className="bg-slate-700/70 text-slate-200 text-xs px-2 py-0.5 rounded-full flex items-center gap-1 hover:bg-blue-600/50 transition-all"
//                           >
//                             {getFeatureIcon(feature)}
//                             <span className="text-[10px]">{feature}</span>
//                           </span>
//                         ))}
//                       </div>
//                       <div className="grid grid-cols-2 gap-1 text-xs">
//                         <div>
//                           <span className="text-slate-400">Vendor:</span>
//                           <span className="ml-1 text-white">{product.vendor}</span>
//                         </div>
//                         <div>
//                           <span className="text-slate-400">Rating:</span>
//                           <span className="ml-1 text-white">{product.rating}/5</span>
//                         </div>
//                         <div>
//                           <span className="text-slate-400">Sales:</span>
//                           <span className="ml-1 text-white">{product.salesCount}</span>
//                         </div>
//                         <div>
//                           <span className="text-slate-400">Views:</span>
//                           <span className="ml-1 text-white">{product.views}</span>
//                         </div>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Edit Product Modal */}
//       {editingProduct && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
//           <div className="bg-gradient-to-br from-slate-800/70 to-gray-900 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
//             <div className="flex items-center justify-between p-4 border-b border-slate-700">
//               <h3 className="text-lg font-medium text-white">Edit Product</h3>
//               <button onClick={() => setEditingProduct(null)} className="text-slate-400 hover:text-white">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
//             <div className="p-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-1">Product Title</label>
//                   <input
//                     type="text"
//                     value={editingProduct.title}
//                     onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
//                     className="w-full bg-slate-700/70 text-white border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-1">Subtitle</label>
//                   <input
//                     type="text"
//                     value={editingProduct.subtitle}
//                     onChange={(e) => setEditingProduct({ ...editingProduct, subtitle: e.target.value })}
//                     className="w-full bg-slate-700/70 text-white border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-1">SKU</label>
//                   <input
//                     type="text"
//                     value={editingProduct.sku}
//                     onChange={(e) => setEditingProduct({ ...editingProduct, sku: e.target.value })}
//                     className="w-full bg-slate-700/70 text-white border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-1">Price</label>
//                   <input
//                     type="text"
//                     value={editingProduct.price}
//                     onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
//                     className="w-full bg-slate-700/70 text-white border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-1">Status</label>
//                   <select
//                     value={editingProduct.status}
//                     onChange={(e) => setEditingProduct({ ...editingProduct, status: e.target.value })}
//                     className="w-full bg-slate-700/70 text-white border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                   >
//                     <option value="Active">Active</option>
//                     <option value="Inactive">Inactive</option>
//                     <option value="Out of Stock">Out of Stock</option>
//                     <option value="Low Stock">Low Stock</option>
//                     <option value="Pending Review">Pending Review</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-1">Inventory</label>
//                   <input
//                     type="number"
//                     value={editingProduct.inventory}
//                     onChange={(e) =>
//                       setEditingProduct({ ...editingProduct, inventory: Number.parseInt(e.target.value) })
//                     }
//                     className="w-full bg-slate-700/70 text-white border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-1">Category</label>
//                   <input
//                     type="text"
//                     value={editingProduct.category}
//                     onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
//                     className="w-full bg-slate-700/70 text-white border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-slate-300 mb-1">Vendor</label>
//                   <input
//                     type="text"
//                     value={editingProduct.vendor}
//                     onChange={(e) => setEditingProduct({ ...editingProduct, vendor: e.target.value })}
//                     className="w-full bg-slate-700/70 text-white border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                   />
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-slate-300 mb-1">Description</label>
//                 <textarea
//                   value={editingProduct.description}
//                   onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
//                   rows={3}
//                   className="w-full bg-slate-700/70 text-white border border-slate-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                 ></textarea>
//               </div>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-slate-300 mb-1">Features</label>
//                 <div className="flex flex-wrap gap-2">
//                   {editingProduct.features.map((feature, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center bg-slate-700/70 rounded-full pl-2 pr-1 py-1 text-white"
//                     >
//                       <span className="text-xs">{feature}</span>
//                       <button
//                         onClick={() => {
//                           const newFeatures = [...editingProduct.features];
//                           newFeatures.splice(index, 1);
//                           setEditingProduct({ ...editingProduct, features: newFeatures });
//                         }}
//                         className="ml-1 text-slate-400 hover:text-white"
//                       >
//                         <X className="w-3 h-3" />
//                       </button>
//                     </div>
//                   ))}
//                   <input
//                     type="text"
//                     placeholder="Add feature and press Enter"
//                     className="flex-1 min-w-[200px] bg-slate-700/70 text-white border border-slate-600 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter" && e.target.value.trim() !== "") {
//                         setEditingProduct({
//                           ...editingProduct,
//                           features: [...editingProduct.features, e.target.value.trim()],
//                         });
//                         e.target.value = "";
//                         e.preventDefault();
//                       }
//                     }}
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-end gap-3 mt-6">
//                 <button
//                   onClick={() => setEditingProduct(null)}
//                   className="bg-slate-700/70 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm transition-all shadow-md"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={() => {
//                     setProducts((prev) =>
//                       prev.map((p) => (p.id === editingProduct.id ? editingProduct : p)),
//                     );
//                     setEditingProduct(null);
//                   }}
//                   className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-4 py-2 rounded-lg text-sm flex items-center shadow-md hover:shadow-blue-500/20 transition-all"
//                 >
//                   <Save className="w-4 h-4 mr-1" />
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer with Pagination */}
//       {!isLoading && filteredProducts.length > 0 && (
//         <div className="container mx-auto px-4 py-4 border-t border-slate-800/50">
//           <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
//             <div className="text-sm text-slate-300">
//               Showing <span className="font-medium text-white">{filteredProducts.length}</span> of{" "}
//               <span className="font-medium text-white">{products.length}</span> products
//             </div>
//             <div className="flex items-center gap-2">
//               <button className="bg-gradient-to-r from-slate-800 to-gray-800 hover:from-blue-800 hover:to-gray-700 text-white px-3 py-1 rounded-lg text-sm flex items-center shadow-md hover:shadow-blue-500/20 transition-all">
//                 <RefreshCw className="w-3 h-3 mr-1" />
//                 Refresh
//               </button>
//               <button className="bg-gradient-to-r from-slate-800 to-gray-800 hover:from-blue-800 hover:to-gray-700 text-white px-3 py-1 rounded-lg text-sm flex items-center shadow-md hover:shadow-blue-500/20 transition-all">
//                 <Download className="w-3 h-3 mr-1" />
//                 Export
//               </button>
//               <button className="bg-gradient-to-r from-slate-800 to-gray-800 hover:from-blue-800 hover:to-gray-700 text-white px-3 py-1 rounded-lg text-sm flex items-center shadow-md hover:shadow-blue-500/20 transition-all">
//                 <Upload className="w-3 h-3 mr-1" />
//                 Import
//               </button>
//               <button className="bg-gradient-to-r from-slate-800 to-gray-800 hover:from-blue-800 hover:to-gray-700 text-white px-3 py-1 rounded-lg text-sm flex items-center shadow-md hover:shadow-blue-500/20 transition-all">
//                 <Settings className="w-3 h-3 mr-1" />
//                 Settings
//               </button>
//               <button className="bg-gradient-to-r from-slate-800 to-gray-800 hover:from-blue-800 hover:to-gray-700 text-white px-3 py-1 rounded-lg text-sm flex items-center shadow-md hover:shadow-blue-500/20 transition-all">
//                 <HelpCircle className="w-3 h-3 mr-1" />
//                 Help
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageProducts;