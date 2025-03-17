import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {Search,Plus,FileText,Star,Clock,Edit,Download,Copy,Trash,X,ChevronLeft,ChevronRight,Sparkles,Share2,Filter,Save,Send,Calendar,Tag,ArrowLeft,ArrowRight,AlertTriangle,Printer,Sliders,} from "lucide-react"
import { toast, Toaster } from "react-hot-toast"
import Header from "../components/Common/Header"

// Sample template categories
const categories = [
  { id: "all", name: "All Templates", count: 12 },
  { id: "tech", name: "Technology", count: 3 },
  { id: "finance", name: "Finance", count: 2 },
  { id: "marketing", name: "Marketing", count: 2 },
  { id: "hr", name: "Human Resources", count: 4 },
  { id: "custom", name: "My Templates", count: 1 },
]

// Sample predefined templates
const predefinedTemplates = [
  {
    id: 1,
    title: "Standard Offer Letter",
    description: "A professional, straightforward offer letter suitable for most positions",
    category: "hr",
    tags: ["Professional", "Standard", "Formal"],
    thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop",
    createdAt: "2023-10-15",
    isFavorite: true,
    content: `
      Dear [Candidate Name],

      We are pleased to offer you the position of [Position] at [Company Name]. We were impressed with your background and experience, and we believe you would be a valuable asset to our team.

      This position offers an annual salary of $[Salary], with benefits including health insurance, retirement plan, and [Number] days of paid time off per year. Your anticipated start date will be [Start Date].

      Please review the attached documents for more details about your compensation package, benefits, and company policies. To accept this offer, please sign and return this letter by [Response Date].

      Sincerely,
      [HR Manager Name]
      [Company Name]
    `,
  },
  {
    id: 2,
    title: "Tech Position Offer",
    description: "Tailored for software engineers and technical roles",
    category: "tech",
    tags: ["Technical", "Engineering", "Modern"],
    thumbnail: "https://images.unsplash.com/photo-1573495612937-f978cc14e4b9?w=300&h=200&fit=crop",
    createdAt: "2023-09-20",
    isFavorite: false,
    content: `
      Dear [Candidate Name],

      Congratulations! We are thrilled to offer you the [Position] role at [Company Name]. Your technical expertise and problem-solving abilities stood out during our interview process.

      Your compensation package includes:
      - Base salary: $[Salary] per year
      - Stock options: [Number] shares vesting over 4 years
      - Annual performance bonus: Up to [Percentage]% of base salary
      - Comprehensive health, dental, and vision insurance
      - Flexible work arrangements with [Number] days of remote work per week
      - Professional development budget of $[Amount] per year

      We're excited about the contributions you'll make to our engineering team. Your start date would be [Start Date].

      To accept this offer, please sign and return the enclosed documents by [Response Date].

      Welcome to the team!

      [CTO/Engineering Manager Name]
      [Company Name]
    `,
  },
  {
    id: 3,
    title: "Executive Offer Letter",
    description: "Formal offer letter for executive and leadership positions",
    category: "hr",
    tags: ["Executive", "Leadership", "Formal"],
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=200&fit=crop",
    createdAt: "2023-08-05",
    isFavorite: true,
    content: `
      Dear [Candidate Name],

      On behalf of the Board of Directors at [Company Name], I am pleased to extend an offer for the position of [Executive Position]. Your leadership experience and strategic vision align perfectly with our company's future direction.

      This executive role comes with the following compensation package:
      - Annual base salary: $[Salary]
      - Performance-based bonus: Up to [Percentage]% of base salary
      - Equity grant: [Number] shares vesting over [Number] years
      - Executive benefits package including premium health coverage
      - Relocation assistance of up to $[Amount]
      - Severance package as outlined in the attached agreement

      We believe your leadership will be instrumental in achieving our strategic objectives. Your anticipated start date is [Start Date].

      Please review the attached Executive Employment Agreement and return a signed copy by [Response Date].

      We look forward to welcoming you to our executive team.

      Sincerely,
      [CEO/Board Chair Name]
      [Company Name]
    `,
  },
  {
    id: 4,
    title: "Marketing Position Offer",
    description: "Creative offer letter for marketing and creative roles",
    category: "marketing",
    tags: ["Creative", "Marketing", "Modern"],
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop",
    createdAt: "2023-11-10",
    isFavorite: false,
    content: `
      Dear [Candidate Name],

      We're excited to offer you the position of [Marketing Role] at [Company Name]! Your creative portfolio and innovative ideas really impressed our team.

      Here's what we're offering:
      - Annual salary: $[Salary]
      - Quarterly performance bonuses based on campaign metrics
      - Comprehensive benefits package
      - Flexible work schedule with hybrid remote options
      - Creative development budget of $[Amount] annually
      - Access to industry conferences and events

      We can't wait to see the creative energy you'll bring to our marketing initiatives. Your start date would be [Start Date].

      To accept this offer, please sign and return the enclosed documents by [Response Date].

      Welcome to the creative team!

      [Marketing Director Name]
      [Company Name]
    `,
  },
  {
    id: 5,
    title: "Finance Position Offer",
    description: "Detailed offer letter for finance and accounting roles",
    category: "finance",
    tags: ["Finance", "Accounting", "Professional"],
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
    createdAt: "2023-07-15",
    isFavorite: false,
    content: `
      Dear [Candidate Name],

      We are pleased to offer you the position of [Finance Role] at [Company Name]. Your financial expertise and analytical skills will be valuable assets to our organization.

      Your compensation package includes:
      - Annual salary: $[Salary]
      - Annual performance bonus: Up to [Percentage]% based on individual and company performance
      - 401(k) matching up to [Percentage]%
      - Comprehensive health, dental, and vision insurance
      - Professional certification reimbursement
      - CPA exam support and study time

      Your anticipated start date is [Start Date]. Please review the attached documents for more details about your role and responsibilities.

      To accept this offer, please sign and return this letter by [Response Date].

      We look forward to your contributions to our finance team.

      Sincerely,
      [CFO/Finance Director Name]
      [Company Name]
    `,
  },
  {
    id: 6,
    title: "Remote Work Offer",
    description: "Modern offer letter emphasizing remote work policies",
    category: "hr",
    tags: ["Remote", "Flexible", "Modern"],
    thumbnail: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=300&h=200&fit=crop",
    createdAt: "2023-12-01",
    isFavorite: true,
    content: `
      Dear [Candidate Name],

      We are delighted to offer you the fully remote position of [Position] at [Company Name]. Your skills and experience make you an excellent fit for our distributed team.

      As a remote employee, you will receive:
      - Annual salary of $[Salary]
      - Home office stipend of $[Amount]
      - Monthly internet/utility allowance of $[Amount]
      - Comprehensive benefits package
      - Quarterly in-person team gatherings (travel expenses covered)
      - Flexible working hours across [Time Zone] time zone

      We've built a collaborative remote culture and can't wait for you to be part of it. Your start date would be [Start Date].

      To accept this offer, please sign and return the enclosed documents by [Response Date].

      Welcome to our global team!

      [Manager Name]
      [Company Name]
    `,
  },
  {
    id: 7,
    title: "Internship Offer Letter",
    description: "Offer letter for internship positions",
    category: "hr",
    tags: ["Internship", "Entry-level", "Training"],
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=200&fit=crop",
    createdAt: "2024-01-05",
    isFavorite: false,
    content: `
      Dear [Candidate Name],

      We are pleased to offer you the internship position of [Position] at [Company Name]. We were impressed with your enthusiasm and potential.

      This internship offers:
      - Stipend of $[Amount] per month
      - Flexible work schedule of [Hours] hours per week
      - Hands-on experience in [Field]
      - Mentorship from industry professionals
      - Opportunity for full-time employment upon successful completion

      Your internship will begin on [Start Date] and end on [End Date]. 

      Please confirm your acceptance by [Response Date].

      We look forward to having you join our team!

      Sincerely,
      [Manager Name]
      [Company Name]
    `,
  },
  {
    id: 8,
    title: "Sales Position Offer",
    description: "Offer letter for sales and business development roles",
    category: "marketing",
    tags: ["Sales", "Commission", "Business"],
    thumbnail: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=300&h=200&fit=crop",
    createdAt: "2024-01-10",
    isFavorite: false,
    content: `
      Dear [Candidate Name],

      We are excited to offer you the position of [Sales Role] at [Company Name]. Your sales experience and relationship-building skills make you an excellent addition to our team.

      Your compensation package includes:
      - Base salary of $[Salary] per year
      - Commission structure: [Commission Details]
      - Quarterly bonuses based on team performance
      - Company car allowance of $[Amount] per month
      - Comprehensive benefits package
      - Sales training and professional development opportunities

      Your anticipated start date is [Start Date]. Please review the attached documents for more details about your role and commission structure.

      To accept this offer, please sign and return this letter by [Response Date].

      We look forward to your contributions to our sales team.

      Sincerely,
      [Sales Director Name]
      [Company Name]
    `,
  },
  {
    id: 9,
    title: "Data Science Offer Letter",
    description: "Specialized offer letter for data scientists and analysts",
    category: "tech",
    tags: ["Data Science", "Analytics", "Technical"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop",
    createdAt: "2024-01-15",
    isFavorite: false,
    content: `
      Dear [Candidate Name],

      We are pleased to offer you the position of [Data Science Role] at [Company Name]. Your analytical skills and technical expertise stood out during our interview process.

      Your compensation package includes:
      - Annual salary of $[Salary]
      - Annual performance bonus of up to [Percentage]%
      - Research and publication stipend of $[Amount] per year
      - Advanced computing resources and tools
      - Flexible work arrangements
      - Professional development and conference attendance budget

      Your anticipated start date is [Start Date]. 

      To accept this offer, please sign and return this letter by [Response Date].

      We look forward to the insights and innovations you'll bring to our data team.

      Sincerely,
      [Chief Data Officer Name]
      [Company Name]
    `,
  },
  {
    id: 10,
    title: "Healthcare Position Offer",
    description: "Offer letter for healthcare professionals",
    category: "custom",
    tags: ["Healthcare", "Medical", "Professional"],
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop",
    createdAt: "2024-01-20",
    isFavorite: false,
    content: `
      Dear [Candidate Name],

      We are pleased to offer you the position of [Healthcare Role] at [Healthcare Facility]. Your clinical expertise and patient-centered approach align perfectly with our values.

      Your compensation package includes:
      - Annual salary of $[Salary]
      - Sign-on bonus of $[Amount]
      - Relocation assistance if applicable
      - Comprehensive benefits including malpractice insurance
      - Continuing education allowance of $[Amount] per year
      - [Schedule Details] with [Number] hours per week

      Your anticipated start date is [Start Date]. 

      To accept this offer, please sign and return this letter by [Response Date].

      We look forward to your contributions to our healthcare team and the patients we serve.

      Sincerely,
      [Medical Director Name]
      [Healthcare Facility]
    `,
  },
  {
    id: 11,
    title: "Legal Position Offer",
    description: "Offer letter for legal professionals",
    category: "finance",
    tags: ["Legal", "Law", "Professional"],
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop",
    createdAt: "2024-01-25",
    isFavorite: false,
    content: `
      Dear [Candidate Name],

      We are pleased to offer you the position of [Legal Role] at [Law Firm/Company]. Your legal expertise and professional demeanor make you an excellent addition to our team.

      Your compensation package includes:
      - Annual salary of $[Salary]
      - Annual bonus based on performance and billable hours
      - Partnership track consideration after [Number] years
      - Bar association dues and CLE credits
      - Comprehensive benefits package
      - Professional development opportunities

      Your anticipated start date is [Start Date]. 

      To accept this offer, please sign and return this letter by [Response Date].

      We look forward to your contributions to our legal team.

      Sincerely,
      [Managing Partner/Legal Director Name]
      [Law Firm/Company]
    `,
  },
  {
    id: 12,
    title: "UX/UI Designer Offer",
    description: "Offer letter for design professionals",
    category: "tech",
    tags: ["Design", "UX/UI", "Creative"],
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop",
    createdAt: "2024-01-30",
    isFavorite: false,
    content: `
      Dear [Candidate Name],

      We are excited to offer you the position of [Design Role] at [Company Name]. Your creative portfolio and design thinking impressed our entire team.

      Your compensation package includes:
      - Annual salary of $[Salary]
      - Performance bonus of up to [Percentage]%
      - Latest design software and hardware
      - Professional development budget of $[Amount] per year
      - Flexible work arrangements
      - Creative team events and workshops

      Your anticipated start date is [Start Date]. 

      To accept this offer, please sign and return this letter by [Response Date].

      We look forward to seeing your creative vision come to life at our company.

      Sincerely,
      [Design Director Name]
      [Company Name]
    `,
  },
]

// Sample filter options
const filterOptions = {
  sortBy: [
    { id: "newest", name: "Newest First" },
    { id: "oldest", name: "Oldest First" },
    { id: "a-z", name: "A-Z" },
    { id: "z-a", name: "Z-A" },
    { id: "favorites", name: "Favorites" },
  ],
  tags: [
    "Professional",
    "Standard",
    "Formal",
    "Technical",
    "Engineering",
    "Modern",
    "Executive",
    "Leadership",
    "Creative",
    "Marketing",
    "Finance",
    "Accounting",
    "Remote",
    "Flexible",
  ],
}

const Template = () => {
  // State for managing templates
  const [templates, setTemplates] = useState(predefinedTemplates)
  const [filteredTemplates, setFilteredTemplates] = useState(templates)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const [totalPages, setTotalPages] = useState(Math.ceil(filteredTemplates.length / itemsPerPage))

  // State for advanced filtering
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState({
    sortBy: "newest",
    tags: [],
    dateRange: {
      start: "",
      end: "",
    },
  })

  // State for template preview and editing
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [showPreview, setShowPreview] = useState(false)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [editMode, setEditMode] = useState(false)

  // State for new template form
  const [newTemplate, setNewTemplate] = useState({
    title: "",
    description: "",
    category: "hr",
    tags: [],
    content: "",
  })
  const [newTag, setNewTag] = useState("")

  // State for template deletion confirmation
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
  const [templateToDelete, setTemplateToDelete] = useState(null)

  // Ref for scrolling categories
  const categoriesRef = useRef(null)

  // Effect to update pagination when filtered templates change
  useEffect(() => {
    setTotalPages(Math.ceil(filteredTemplates.length / itemsPerPage))
    setCurrentPage(1) // Reset to first page when filters change
  }, [filteredTemplates, itemsPerPage])

  // Get current templates for pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentTemplates = filteredTemplates.slice(indexOfFirstItem, indexOfLastItem)

  // Function to change page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  // Function to handle category selection
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    applyFilters(categoryId, searchQuery, activeFilters)
  }

  // Function to handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchQuery(query)
    applyFilters(selectedCategory, query, activeFilters)
  }

  // Function to apply all filters
  const applyFilters = (category, query, filters) => {
    let results = [...templates]

    // Apply category filter
    if (category !== "all") {
      results = results.filter((template) => template.category === category)
    }

    // Apply search query
    if (query.trim() !== "") {
      results = results.filter(
        (template) =>
          template.title.toLowerCase().includes(query) ||
          template.description.toLowerCase().includes(query) ||
          template.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply tag filters
    if (filters.tags.length > 0) {
      results = results.filter((template) => filters.tags.some((tag) => template.tags.includes(tag)))
    }

    // Apply date range filter
    if (filters.dateRange.start && filters.dateRange.end) {
      const startDate = new Date(filters.dateRange.start)
      const endDate = new Date(filters.dateRange.end)

      results = results.filter((template) => {
        const createdDate = new Date(template.createdAt)
        return createdDate >= startDate && createdDate <= endDate
      })
    }

    // Apply sorting
    switch (filters.sortBy) {
      case "newest":
        results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        break
      case "oldest":
        results.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        break
      case "a-z":
        results.sort((a, b) => a.title.localeCompare(b.title))
        break
      case "z-a":
        results.sort((a, b) => b.title.localeCompare(a.title))
        break
      case "favorites":
        results.sort((a, b) => (b.isFavorite ? 1 : 0) - (a.isFavorite ? 1 : 0))
        break
      default:
        break
    }

    setFilteredTemplates(results)
  }

  // Function to update active filters
  const updateFilters = (newFilters) => {
    const updatedFilters = { ...activeFilters, ...newFilters }
    setActiveFilters(updatedFilters)
    applyFilters(selectedCategory, searchQuery, updatedFilters)
  }

  // Function to reset filters
  const resetFilters = () => {
    const defaultFilters = {
      sortBy: "newest",
      tags: [],
      dateRange: {
        start: "",
        end: "",
      },
    }
    setActiveFilters(defaultFilters)
    setSearchQuery("")
    setSelectedCategory("all")
    applyFilters("all", "", defaultFilters)
    setShowFilters(false)
  }

  // Function to toggle favorite status
  const toggleFavorite = (id) => {
    const updatedTemplates = templates.map((template) =>
      template.id === id ? { ...template, isFavorite: !template.isFavorite } : template,
    )

    setTemplates(updatedTemplates)
    applyFilters(selectedCategory, searchQuery, activeFilters)

    toast.success("Template favorite status updated!", {
      icon: "⭐",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    })
  }

  // Function to preview template
  const previewTemplate = (template) => {
    setSelectedTemplate(template)
    setShowPreview(true)
  }

  // Function to edit template
  const editTemplate = (template) => {
    setSelectedTemplate(template)
    setNewTemplate({
      title: template.title,
      description: template.description,
      category: template.category,
      tags: [...template.tags],
      content: template.content,
    })
    setEditMode(true)
    setShowCreateForm(true)
  }

  // Function to confirm template deletion
  const confirmDeleteTemplate = (template) => {
    setTemplateToDelete(template)
    setShowDeleteConfirm(true)
  }

  // Function to delete template
  const deleteTemplate = () => {
    if (!templateToDelete) return

    const updatedTemplates = templates.filter((template) => template.id !== templateToDelete.id)
    setTemplates(updatedTemplates)
    applyFilters(selectedCategory, searchQuery, activeFilters)

    setShowDeleteConfirm(false)
    setTemplateToDelete(null)

    toast.success("Template deleted successfully!")
  }

  // Function to copy template content
  const copyTemplateContent = (content) => {
    navigator.clipboard.writeText(content)

    toast.success("Template copied to clipboard!", {
      icon: "📋",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    })
  }

  // Function to download template
  const downloadTemplate = (template) => {
    const element = document.createElement("a")
    const file = new Blob([template.content], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `${template.title.replace(/\s+/g, "_")}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)

    toast.success("Template downloaded!", {
      icon: "📥",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    })
  }

  // Function to print template
  const printTemplate = (template) => {
    const printWindow = window.open("", "_blank")

    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${template.title}</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
              h1 { text-align: center; margin-bottom: 20px; }
              .content { white-space: pre-line; }
            </style>
          </head>
          <body>
            <h1>${template.title}</h1>
            <div class="content">${template.content}</div>
          </body>
        </html>
      `)

      printWindow.document.close()
      printWindow.focus()

      // Print after a short delay to ensure content is loaded
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 250)

      toast.success("Preparing template for printing!", {
        icon: "🖨️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
    } else {
      toast.error("Unable to open print window. Please check your popup settings.", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
    }
  }

  // Function to add tag to new template
  const addTag = () => {
    if (newTag.trim() !== "" && !newTemplate.tags.includes(newTag.trim())) {
      setNewTemplate({
        ...newTemplate,
        tags: [...newTemplate.tags, newTag.trim()],
      })
      setNewTag("")
    }
  }

  // Function to remove tag from new template
  const removeTag = (tagToRemove) => {
    setNewTemplate({
      ...newTemplate,
      tags: newTemplate.tags.filter((tag) => tag !== tagToRemove),
    })
  }

  // Function to toggle tag in filters
  const toggleTagFilter = (tag) => {
    const updatedTags = activeFilters.tags.includes(tag)
      ? activeFilters.tags.filter((t) => t !== tag)
      : [...activeFilters.tags, tag]

    updateFilters({ tags: updatedTags })
  }

  
  const saveTemplate = () => {
    if (newTemplate.title.trim() === "" || newTemplate.content.trim() === "") {
      toast.error("Title and content are required!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
      return
    }

    if (editMode && selectedTemplate) {
      const updatedTemplates = templates.map((template) =>
        template.id === selectedTemplate.id
          ? {
              ...template,
              title: newTemplate.title,
              description: newTemplate.description,
              category: newTemplate.category,
              tags: newTemplate.tags,
              content: newTemplate.content,
              thumbnail: template.thumbnail,
              createdAt: template.createdAt,
            }
          : template,
      )

      setTemplates(updatedTemplates)
      toast.success("Template updated successfully!", {
        icon: "✅",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
    } else {
      
      const newTemplateObj = {
        id: templates.length + 1,
        title: newTemplate.title,
        description: newTemplate.description,
        category: newTemplate.category,
        tags: newTemplate.tags,
        thumbnail: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=300&h=200&fit=crop",
        createdAt: new Date().toISOString().split("T")[0],
        isFavorite: false,
        content: newTemplate.content,
      }

      setTemplates([...templates, newTemplateObj])
      toast.success("New template created!", {
        icon: "🎉",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
    }

    
    setNewTemplate({
      title: "",
      description: "",
      category: "hr",
      tags: [],
      content: "",
    })
    setShowCreateForm(false)
    setEditMode(false)
    applyFilters(selectedCategory, searchQuery, activeFilters)
  }

  
  const generateAITemplate = () => {
    toast.success("AI is generating your template...", {
      icon: "✨",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    })
    setTimeout(() => {
      const aiTemplate = {
        title: "AI Generated Template",
        description: "Customized offer letter based on your requirements",
        category: newTemplate.category || "hr",
        tags: ["AI Generated", "Custom", "Smart"],
        content: `
          Dear [Candidate Name],

          We are delighted to offer you the position of [Position] at [Company Name]. After careful consideration of your qualifications and experience, we believe you are an excellent fit for our team.

          Your compensation package includes:
          - Annual salary: $[Salary]
          - Performance bonus: Up to [Percentage]% based on individual and company goals
          - Comprehensive benefits including health, dental, and vision insurance
          - [Number] days of paid time off annually
          - [Other benefits specific to the role]

          We're excited about the unique perspective and skills you'll bring to our organization. Your anticipated start date is [Start Date].

          To accept this offer, please sign and return this letter by [Response Date].

          We look forward to welcoming you to our team!

          Sincerely,
          [Manager Name]
          [Company Name]
        `,
      }

      setNewTemplate({
        ...newTemplate,
        title: aiTemplate.title,
        description: aiTemplate.description,
        tags: aiTemplate.tags,
        content: aiTemplate.content,
      })

      toast.success("AI template generated successfully!", {
        icon: "🤖",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
    }, 2000)
  }

  
  const issueOfferLetter = (template) => {
    setSelectedTemplate(template)
    setShowPreview(false)
    setShowIssueModal(true)
  }

  
  const [showIssueModal, setShowIssueModal] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState(null)
  const [offerDetails, setOfferDetails] = useState({
    salary: "120,000",
    startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
    responseDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  })

  const candidates = [
    { id: 1, name: "John Smith", position: "Software Engineer", status: "Hired", email: "john.smith@example.com" },
    { id: 2, name: "Jane Doe", position: "Product Manager", status: "Hired", email: "jane.doe@example.com" },
    { id: 3, name: "Alex Johnson", position: "Data Scientist", status: "Hired", email: "alex.johnson@example.com" },
    { id: 4, name: "Sarah Williams", position: "UX Designer", status: "Hired", email: "sarah.williams@example.com" },
    {id: 5,name: "Michael Brown",position: "Marketing Specialist",status: "Hired",email: "michael.brown@example.com",},
    { id: 6, name: "Emily Davis", position: "Financial Analyst", status: "Hired", email: "emily.davis@example.com" },
  ]

  
  const sendOfferToCandidate = () => {
    if (!selectedCandidate) {
      toast.error("Please select a candidate", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
      return
    }

    toast.success(`Offer letter sent to ${selectedCandidate.name}!`, {
      icon: "📨",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    })

    setShowIssueModal(false)
    setSelectedCandidate(null)
  }

  
  const scrollCategories = (direction) => {
    if (categoriesRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200
      categoriesRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="flex-1 overflow-auto relative z-10 bg-gray-900">
      <Header title="Offer Letter Templates" />
      <motion.div initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>

      <div className="p-4 md:p-6">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-2 w-full md:w-auto">
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Plus size={18} />
              <span>Create Template</span>
            </button>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center justify-center gap-2 ${showFilters ? "bg-indigo-600 hover:bg-indigo-700" : "bg-gray-700 hover:bg-gray-600"} text-white px-4 py-2 rounded-lg transition-colors`}
            >
              <Filter size={18} />
              <span className="hidden sm:inline">Filter</span>
              {activeFilters.tags.length > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full">
                  {activeFilters.tags.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Advanced Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-gray-800 rounded-lg p-4 mb-6 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="text-white text-sm font-medium mb-2 flex items-center">
                    <Sliders className="w-4 h-4 mr-1" />
                    Sort By
                  </h3>
                  <select
                    value={activeFilters.sortBy}
                    onChange={(e) => updateFilters({ sortBy: e.target.value })}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {filterOptions.sortBy.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <h3 className="text-white text-sm font-medium mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Date Range
                  </h3>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      value={activeFilters.dateRange.start}
                      onChange={(e) =>
                        updateFilters({
                          dateRange: { ...activeFilters.dateRange, start: e.target.value },
                        })
                      }
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="date"
                      value={activeFilters.dateRange.end}
                      onChange={(e) =>
                        updateFilters({
                          dateRange: { ...activeFilters.dateRange, end: e.target.value },
                        })
                      }
                      className="w-full p-2 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="md:text-right">
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-white text-sm font-medium mb-2 flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  Filter by Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {filterOptions.tags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTagFilter(tag)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                        activeFilters.tags.includes(tag)
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      {tag}
                      {activeFilters.tags.includes(tag) && <span className="ml-1">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Categories */}
        <div className="relative mb-6">
          <button
            onClick={() => scrollCategories("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-1 rounded-full shadow-lg z-10 text-white hover:bg-gray-700"
          >
            <ChevronLeft size={20} />
          </button>

          <div
            className="flex space-x-2 overflow-x-auto scrollbar-hide py-2 px-6"
            ref={categoriesRef}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors flex items-center ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.name}
                <span
                  className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                    selectedCategory === category.id ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollCategories("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-1 rounded-full shadow-lg z-10 text-white hover:bg-gray-700"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Templates Grid */}
        {currentTemplates.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {currentTemplates.map((template) => (
                <motion.div
                  key={template.id}
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-40 bg-gray-700">
                    <img
                      src={template.thumbnail || "/placeholder.svg"}
                      alt={template.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src =
                          "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=300&h=200&fit=crop"
                      }}
                    />
                    <button
                      onClick={() => toggleFavorite(template.id)}
                      className="absolute top-2 right-2 p-1 rounded-full bg-gray-800 bg-opacity-70 text-white hover:bg-opacity-100 transition-all"
                    >
                      <Star
                        size={18}
                        fill={template.isFavorite ? "#FFD700" : "none"}
                        color={template.isFavorite ? "#FFD700" : "white"}
                      />
                    </button>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-1 truncate">{template.title}</h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{template.description}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {template.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                      {template.tags.length > 3 && (
                        <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
                          +{template.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-gray-400 text-xs mb-4">
                      <Clock size={14} className="mr-1" />
                      <span>Created: {template.createdAt}</span>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={() => previewTemplate(template)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-sm transition-colors"
                      >
                        Preview
                      </button>

                      <div className="flex gap-1">
                        <button
                          onClick={() => editTemplate(template)}
                          className="p-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors"
                          title="Edit Template"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => confirmDeleteTemplate(template)}
                          className="p-1.5 bg-red-600 hover:bg-red-700 text-white rounded transition-colors"
                          title="Delete Template"
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-8">
              <div className="text-gray-400 text-sm">
                Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredTemplates.length)} of{" "}
                {filteredTemplates.length} templates
              </div>

              <div className="flex items-center space-x-2">
                <select
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="bg-gray-800 border border-gray-700 text-white rounded p-1 text-sm"
                >
                  <option value={4}>4 per page</option>
                  <option value={8}>8 per page</option>
                  <option value={12}>12 per page</option>
                  <option value={16}>16 per page</option>
                </select>

                <div className="flex">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-l border border-gray-700 ${
                      currentPage === 1
                        ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    <ArrowLeft size={16} />
                  </button>

                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    // Logic to show pages around current page
                    let pageNum
                    if (totalPages <= 5) {
                      pageNum = i + 1
                    } else if (currentPage <= 3) {
                      pageNum = i + 1
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i
                    } else {
                      pageNum = currentPage - 2 + i
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => paginate(pageNum)}
                        className={`w-8 h-8 border-t border-b border-gray-700 ${
                          currentPage === pageNum
                            ? "bg-blue-600 text-white"
                            : "bg-gray-800 text-white hover:bg-gray-700"
                        }`}
                      >
                        {pageNum}
                      </button>
                    )
                  })}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-r border border-gray-700 ${
                      currentPage === totalPages
                        ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                        : "bg-gray-800 text-white hover:bg-gray-700"
                    }`}
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-gray-800 rounded-lg p-8 text-center">
            <FileText size={48} className="mx-auto text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">No templates found</h3>
            <p className="text-gray-400 mb-4">Try adjusting your search or create a new template.</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={resetFilters}
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Reset Filters
              </button>
              <button
                onClick={() => setShowCreateForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Create New Template
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Template Preview Modal */}
      <AnimatePresence>
        {showPreview && selectedTemplate && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white text-black rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold text-gray-800">{selectedTemplate.title}</h2>
                <button onClick={() => setShowPreview(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedTemplate.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 whitespace-pre-line mb-4">
                  {selectedTemplate.content}
                </div>
              </div>

              <div className="border-t p-4 flex flex-wrap justify-between bg-gray-50 gap-2">
                <div>
                  <button
                    onClick={() => editTemplate(selectedTemplate)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center mr-2"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => issueOfferLetter(selectedTemplate)}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center"
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    Issue Offer
                  </button>
                  <button
                    onClick={() => copyTemplateContent(selectedTemplate.content)}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    Copy
                  </button>
                  <button
                    onClick={() => downloadTemplate(selectedTemplate)}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </button>
                  <button
                    onClick={() => printTemplate(selectedTemplate)}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <Printer className="w-4 h-4 mr-1" />
                    Print
                  </button>
                  <button
                    onClick={() => {
                      setShowPreview(false)
                      toast.success("Template sharing options opened!", {
                        icon: "🔗",
                        style: {
                          borderRadius: "10px",
                          background: "#333",
                          color: "#fff",
                        },
                      })
                    }}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100 flex items-center"
                  >
                    <Share2 className="w-4 h-4 mr-1" />
                    Share
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Create/Edit Template Modal */}
      <AnimatePresence>
        {showCreateForm && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold text-gray-800">
                  {editMode ? "Edit Template" : "Create New Template"}
                </h2>
                <button
                  onClick={() => {
                    setShowCreateForm(false)
                    setEditMode(false)
                    setNewTemplate({
                      title: "",
                      description: "",
                      category: "hr",
                      tags: [],
                      content: "",
                    })
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Template Title*</label>
                    <input
                      type="text"
                      value={newTemplate.title}
                      onChange={(e) => setNewTemplate({ ...newTemplate, title: e.target.value })}
                      placeholder="Enter template title"
                      className="w-full p-2 border border-gray-400 bg-white text-gray-800 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      value={newTemplate.category}
                      onChange={(e) => setNewTemplate({ ...newTemplate, category: e.target.value })}
                      className="w-full p-2 border border-gray-400 bg-white text-gray-800 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    >
                      {categories
                        .filter((cat) => cat.id !== "all" && cat.id !== "custom")
                        .map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <input
                    type="text"
                    value={newTemplate.description}
                    onChange={(e) => setNewTemplate({ ...newTemplate, description: e.target.value })}
                    placeholder="Brief description of this template"
                    className="w-full p-2 border border-gray-400 bg-white text-gray-800 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                  <div className="flex items-center mb-2">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Add a tag"
                      className="flex-1 p-2 border border-gray-400 bg-white text-gray-800 rounded-l focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      onKeyPress={(e) => e.key === "Enter" && addTag()}
                    />
                    <button onClick={addTag} className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700">
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {newTemplate.tags.map((tag, index) => (
                      <div key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded flex items-center">
                        <span className="text-xs">{tag}</span>
                        <button onClick={() => removeTag(tag)} className="ml-1 text-gray-500 hover:text-gray-700">
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Template Content*</label>
                  <textarea
                    value={newTemplate.content}
                    onChange={(e) => setNewTemplate({ ...newTemplate, content: e.target.value })}
                    placeholder="Enter the template content. Use [placeholders] for variables."
                    rows={10}
                    className="w-full p-2 border border-gray-400 bg-white text-gray-800 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono text-sm"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Use placeholders like [Candidate Name], [Position], [Salary], etc.
                  </p>
                </div>
              </div>

              <div className="border-t p-4 flex justify-between bg-gray-50">
                <button
                  onClick={generateAITemplate}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 flex items-center"
                >
                  <Sparkles className="w-4 h-4 mr-1" />
                  Generate with AI
                </button>

                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setShowCreateForm(false)
                      setEditMode(false)
                      setNewTemplate({
                        title: "",
                        description: "",
                        category: "hr",
                        tags: [],
                        content: "",
                      })
                    }}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveTemplate}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center"
                  >
                    <Save className="w-4 h-4 mr-1" />
                    {editMode ? "Update Template" : "Save Template"}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Issue Offer Letter Modal */}
      <AnimatePresence>
        {showIssueModal && selectedTemplate && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-auto"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold text-gray-800">Issue Offer Letter</h2>
                <button onClick={() => setShowIssueModal(false)} className="text-gray-500 hover:text-gray-700">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Candidate*</label>
                  <select
                    value={selectedCandidate ? selectedCandidate.id : ""}
                    onChange={(e) => {
                      const candidateId = Number.parseInt(e.target.value)
                      const candidate = candidates.find((c) => c.id === candidateId)
                      setSelectedCandidate(candidate)
                    }}
                    className="w-full p-2 border border-gray-400 bg-white text-gray-800 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">-- Select a candidate --</option>
                    {candidates.map((candidate) => (
                      <option key={candidate.id} value={candidate.id}>
                        {candidate.name} - {candidate.position}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      <input
                        type="text"
                        value={offerDetails.salary}
                        onChange={(e) => setOfferDetails({ ...offerDetails, salary: e.target.value })}
                        className="w-full p-2 pl-8 border border-gray-400 bg-white text-gray-800 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                    <input
                      type="date"
                      value={offerDetails.startDate}
                      onChange={(e) => setOfferDetails({ ...offerDetails, startDate: e.target.value })}
                      className="w-full p-2 border border-gray-400 bg-white text-gray-800 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Response Required By</label>
                  <input
                    type="date"
                    value={offerDetails.responseDate}
                    onChange={(e) => setOfferDetails({ ...offerDetails, responseDate: e.target.value })}
                    className="w-full p-2 border border-gray-400 bg-white text-gray-800 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                  <h3 className="font-medium text-gray-700 mb-2">Preview</h3>
                  <div className="whitespace-pre-line text-gray-600 text-sm max-h-60 overflow-y-auto p-2">
                    {selectedTemplate && selectedCandidate
                      ? selectedTemplate.content
                          .replace(/\[Candidate Name\]/g, selectedCandidate.name)
                          .replace(/\[Position\]/g, selectedCandidate.position)
                          .replace(/\[Salary\]/g, offerDetails.salary)
                          .replace(/\[Start Date\]/g, new Date(offerDetails.startDate).toLocaleDateString())
                          .replace(/\[Response Date\]/g, new Date(offerDetails.responseDate).toLocaleDateString())
                          .replace(/\[Company Name\]/g, "Your Company")
                          .replace(/\[Manager Name\]/g, "HR Manager")
                      : "Select a candidate to preview the personalized offer letter."}
                  </div>
                </div>
              </div>

              <div className="border-t p-4 flex justify-end gap-3 bg-gray-50">
                <button
                  onClick={() => setShowIssueModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={sendOfferToCandidate}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center"
                  disabled={!selectedCandidate}
                >
                  <Send className="w-4 h-4 mr-1" />
                  Send Offer Letter
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {showDeleteConfirm && templateToDelete && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl w-full max-w-md"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-center mb-4 text-red-500">
                  <AlertTriangle size={48} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-2">Confirm Deletion</h3>
                <p className="text-gray-600 text-center mb-6">
                  Are you sure you want to delete the template "{templateToDelete.title}"? This action cannot be undone.
                </p>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={deleteTemplate}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 flex items-center"
                  >
                    <Trash className="w-4 h-4 mr-1" />
                    Delete Template
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Template

