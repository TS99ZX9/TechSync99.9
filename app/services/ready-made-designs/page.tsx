"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Search,
  Star,
  ChevronRight,
  Eye,
  ShoppingCart,
  Heart,
  Download,
  X,
  Filter,
  SlidersHorizontal,
  User,
  LogIn,
  ShoppingBag,
  Menu,
  ChevronDown,
  ArrowLeft,
  Share2,
  MessageSquare,
  Zap,
  Layers,
  CheckCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { applyAnimationStyles } from "@/utils/animation-utils"

export default function ReadyMadeDesignsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredCard, setHoveredCard] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [showTemplateDetails, setShowTemplateDetails] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const heroRef = useRef(null)
  const searchRef = useRef(null)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const headerOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0.97])
  const headerBlur = useTransform(scrollYProgress, [0, 0.05], [0, 8])
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  // Check scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animation effect on mount
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            applyAnimationStyles(entry.target, {
              animation: "fadeInUp",
              duration: 0.6,
              delay: 0.1,
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Handle search
  useEffect(() => {
    if (searchQuery.length > 2) {
      setIsLoading(true)
      // Simulate search delay
      const timer = setTimeout(() => {
        const results = templates
          .filter(
            (template) =>
              template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
              template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
          )
          .slice(0, 5)

        setSearchResults(results)
        setShowSearchResults(true)
        setIsLoading(false)
      }, 500)

      return () => clearTimeout(timer)
    } else {
      setShowSearchResults(false)
    }
  }, [searchQuery])

  const templates = [
    {
      id: "dashboard-pro",
      title: "Dashboard Pro - Admin Template",
      description: "Complete admin dashboard with analytics, charts, and data tables",
      price: 69,
      category: "dashboard",
      type: "figma",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800&text=Dashboard+Overview",
        "/placeholder.svg?height=600&width=800&text=Analytics+Panel",
        "/placeholder.svg?height=600&width=800&text=User+Management",
        "/placeholder.svg?height=600&width=800&text=Settings+Page",
      ],
      tags: ["React", "Admin", "Dashboard"],
      rating: 4.9,
      reviewCount: 32,
      popular: true,
      features: [
        "Responsive design for all devices",
        "30+ pre-built components",
        "Interactive charts and graphs",
        "Data tables with sorting and filtering",
        "Dark and light mode",
        "User authentication flows",
      ],
      demo: "https://example.com/demo/dashboard-pro",
      relatedTemplates: ["ecommerce-kit", "saas-landing"],
      reviewItems: [
        {
          id: 1,
          user: "Sarah Johnson",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2023-10-15",
          comment: "Excellent dashboard template with all the features I needed. Saved me weeks of development time!",
        },
        {
          id: 2,
          user: "Michael Chen",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2023-09-28",
          comment:
            "Great template overall. The documentation could be a bit more detailed, but the code is clean and well-organized.",
        },
      ],
    },
    {
      id: "ecommerce-kit",
      title: "E-Commerce Kit",
      description: "Full-featured online store template with product pages and checkout",
      price: 79,
      category: "ecommerce",
      type: "figma",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800&text=Store+Homepage",
        "/placeholder.svg?height=600&width=800&text=Product+Page",
        "/placeholder.svg?height=600&width=800&text=Shopping+Cart",
        "/placeholder.svg?height=600&width=800&text=Checkout+Flow",
      ],
      tags: ["Next.js", "E-commerce"],
      rating: 4.8,
      reviewCount: 24,
      popular: true,
      features: [
        "Product catalog with filtering",
        "Shopping cart functionality",
        "Checkout process",
        "User accounts and order history",
        "Product reviews and ratings",
        "Inventory management",
      ],
      demo: "https://example.com/demo/ecommerce-kit",
      relatedTemplates: ["dashboard-pro", "corporate-site"],
      reviewItems: [
        {
          id: 1,
          user: "Emily Rodriguez",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2023-11-02",
          comment: "This e-commerce template is amazing! It has everything I needed to launch my online store quickly.",
        },
        {
          id: 2,
          user: "David Kim",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2023-10-18",
          comment: "The checkout flow is smooth and the design is modern. My clients love it!",
        },
      ],
    },
    {
      id: "minimal-portfolio",
      title: "Minimal - Portfolio Template",
      description: "Clean, minimalist portfolio for creatives and professionals",
      price: 49,
      category: "portfolio",
      type: "figma",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800&text=Portfolio+Home",
        "/placeholder.svg?height=600&width=800&text=Project+Gallery",
        "/placeholder.svg?height=600&width=800&text=About+Page",
        "/placeholder.svg?height=600&width=800&text=Contact+Form",
      ],
      tags: ["Portfolio", "Minimal"],
      rating: 4.7,
      reviewCount: 18,
      features: [
        "Project showcase gallery",
        "About me section",
        "Skills and experience display",
        "Contact form",
        "Blog integration",
        "Social media links",
      ],
      demo: "https://example.com/demo/minimal-portfolio",
      relatedTemplates: ["blog-platform", "saas-landing"],
      reviewItems: [
        {
          id: 1,
          user: "Alex Turner",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2023-09-15",
          comment: "Perfect minimalist design that really lets my work shine. Easy to customize too!",
        },
      ],
    },
    {
      id: "blog-platform",
      title: "Blog Platform",
      description: "Modern blog template with content management features",
      price: 59,
      category: "blog",
      type: "website",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800&text=Blog+Homepage",
        "/placeholder.svg?height=600&width=800&text=Article+Page",
        "/placeholder.svg?height=600&width=800&text=Author+Profile",
        "/placeholder.svg?height=600&width=800&text=Category+View",
      ],
      tags: ["Blog", "CMS"],
      rating: 4.6,
      reviewCount: 15,
      features: [
        "Article layouts and formatting",
        "Category and tag organization",
        "Author profiles",
        "Comments section",
        "Newsletter signup",
        "Search functionality",
      ],
      demo: "https://example.com/demo/blog-platform",
      relatedTemplates: ["minimal-portfolio", "corporate-site"],
      reviewItems: [
        {
          id: 1,
          user: "Jessica Lee",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4,
          date: "2023-10-05",
          comment:
            "Great blog template with all the features I needed. The only thing missing was better mobile optimization.",
        },
      ],
    },
    {
      id: "saas-landing",
      title: "SaaS Landing Page",
      description: "High-conversion landing page for software products",
      price: 39,
      category: "landing",
      type: "figma",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800&text=Hero+Section",
        "/placeholder.svg?height=600&width=800&text=Features+Overview",
        "/placeholder.svg?height=600&width=800&text=Pricing+Tables",
        "/placeholder.svg?height=600&width=800&text=Testimonials",
      ],
      tags: ["Landing Page", "SaaS"],
      rating: 4.8,
      reviewCount: 22,
      features: [
        "Hero section with call-to-action",
        "Feature showcase",
        "Pricing tables",
        "Testimonials section",
        "FAQ accordion",
        "Contact and signup forms",
      ],
      demo: "https://example.com/demo/saas-landing",
      relatedTemplates: ["dashboard-pro", "minimal-portfolio"],
      reviewItems: [
        {
          id: 1,
          user: "Ryan Wilson",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2023-11-10",
          comment: "This landing page template helped us increase our conversion rate by 30%. Worth every penny!",
        },
      ],
    },
    {
      id: "corporate-site",
      title: "Corporate Site",
      description: "Professional website template for businesses and organizations",
      price: 69,
      category: "corporate",
      type: "website",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800&text=Corporate+Homepage",
        "/placeholder.svg?height=600&width=800&text=Services+Page",
        "/placeholder.svg?height=600&width=800&text=Team+Members",
        "/placeholder.svg?height=600&width=800&text=Contact+Page",
      ],
      tags: ["Corporate", "Business"],
      rating: 4.7,
      reviewCount: 19,
      features: [
        "Company overview section",
        "Services and products showcase",
        "Team member profiles",
        "Case studies and testimonials",
        "News and blog section",
        "Contact information and form",
      ],
      demo: "https://example.com/demo/corporate-site",
      relatedTemplates: ["ecommerce-kit", "blog-platform"],
      reviewItems: [
        {
          id: 1,
          user: "Thomas Brown",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 5,
          date: "2023-09-22",
          comment:
            "Excellent corporate template that gave our company website a professional look. Easy to customize and deploy.",
        },
      ],
    },
  ]

  const popularTemplates = templates.filter((template) => template.popular)

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = activeCategory === "all" || template.category === activeCategory

    const matchesPrice = template.price >= priceRange[0] && template.price <= priceRange[1]

    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(template.type)

    return matchesSearch && matchesCategory && matchesPrice && matchesType
  })

  const categories = [
    { id: "all", label: "All Templates", icon: <Layers className="h-4 w-4" /> },
    { id: "dashboard", label: "Dashboards", icon: <SlidersHorizontal className="h-4 w-4" /> },
    { id: "ecommerce", label: "E-Commerce", icon: <ShoppingBag className="h-4 w-4" /> },
    { id: "portfolio", label: "Portfolio", icon: <User className="h-4 w-4" /> },
    { id: "blog", label: "Blog", icon: <MessageSquare className="h-4 w-4" /> },
    { id: "landing", label: "Landing Pages", icon: <Zap className="h-4 w-4" /> },
    { id: "corporate", label: "Corporate", icon: <Layers className="h-4 w-4" /> },
  ]

  const quickFilters = [
    { id: "react-admin", label: "React + Admin + Dashboard" },
    { id: "next-admin", label: "Next.js + Admin + Dashboard" },
    { id: "ecommerce", label: "Next.js + E-commerce" },
    { id: "figma-ui", label: "Figma UI Kit" },
  ]

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id))
      showNotificationMessage(`Removed from favorites`)
    } else {
      setFavorites([...favorites, id])
      showNotificationMessage(`Added to favorites`)
    }
  }

  const openTemplateDetails = (template) => {
    setSelectedTemplate(template)
    setActiveImageIndex(0)
    setShowTemplateDetails(true)
    document.body.style.overflow = "hidden"
  }

  const closeTemplateDetails = () => {
    setShowTemplateDetails(false)
    document.body.style.overflow = "auto"
  }

  const addToCart = (template) => {
    if (!cartItems.some((item) => item.id === template.id)) {
      setCartItems([...cartItems, template])
      showNotificationMessage(`${template.title} added to cart`)
    } else {
      showNotificationMessage(`${template.title} is already in your cart`)
    }
  }

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
    showNotificationMessage("Item removed from cart")
  }

  const showNotificationMessage = (message) => {
    setNotificationMessage(message)
    setShowNotification(true)

    setTimeout(() => {
      setShowNotification(false)
    }, 3000)
  }

  const handleTypeToggle = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type))
    } else {
      setSelectedTypes([...selectedTypes, type])
    }
  }

  const clearFilters = () => {
    setPriceRange([0, 100])
    setSelectedTypes([])
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white" ref={containerRef}>
      <motion.header
        className={`sticky top-0 z-50 w-full border-b border-gray-800 backdrop-blur transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
        style={{
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 mr-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-md blur-[5px] opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-r from-red-500 to-red-600 rounded-md flex items-center justify-center h-full">
                  <span className="text-white font-bold">T</span>
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                Store
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/services/ready-made-designs" className="text-sm font-medium text-white relative group">
              Templates
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link
              href="/services/design-kits"
              className="text-sm font-medium text-gray-400 hover:text-white relative group"
            >
              Design Kits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/services/custom-development"
              className="text-sm font-medium text-gray-400 hover:text-white relative group"
            >
              Custom Dev
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Button
                variant="outline"
                className="text-sm relative overflow-hidden group"
                onClick={() => setShowLoginModal(true)}
              >
                <LogIn className="h-4 w-4 mr-2" />
                <span className="relative z-10">Sign In</span>
                <span className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="relative overflow-hidden group">
                    <ShoppingCart className="h-4 w-4" />
                    {cartItems.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItems.length}
                      </span>
                    )}
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0 bg-gray-900 border border-gray-800">
                  <div className="p-4 border-b border-gray-800">
                    <h3 className="font-medium">Your Cart ({cartItems.length})</h3>
                  </div>
                  {cartItems.length === 0 ? (
                    <div className="p-4 text-center text-gray-400">
                      <ShoppingCart className="h-12 w-12 mx-auto mb-2 text-gray-700" />
                      <p>Your cart is empty</p>
                    </div>
                  ) : (
                    <>
                      <div className="max-h-60 overflow-auto">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center gap-3 p-3 border-b border-gray-800">
                            <div className="relative h-12 w-12 flex-shrink-0 rounded overflow-hidden">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium truncate">{item.title}</h4>
                              <p className="text-sm text-gray-400">${item.price}</p>
                            </div>
                            <button
                              className="text-gray-400 hover:text-red-500"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="p-4 border-t border-gray-800">
                        <div className="flex justify-between mb-4">
                          <span>Total:</span>
                          <span className="font-bold">${getTotalPrice()}</span>
                        </div>
                        <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white relative overflow-hidden group">
                          <span className="relative z-10">Checkout</span>
                          <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
                        </Button>
                      </div>
                    </>
                  )}
                </PopoverContent>
              </Popover>
            </div>

            <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white relative overflow-hidden group">
              <span className="relative z-10">Get Started</span>
              <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
            </Button>

            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMobileMenu && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 shadow-lg z-50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto py-4">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/services/ready-made-designs"
                    className="text-sm font-medium text-white relative group py-2"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Templates
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 scale-x-100 transition-transform duration-300"></span>
                  </Link>
                  <Link
                    href="/services/design-kits"
                    className="text-sm font-medium text-gray-400 hover:text-white relative group py-2"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Design Kits
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link
                    href="/services/custom-development"
                    className="text-sm font-medium text-gray-400 hover:text-white relative group py-2"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Custom Dev
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <div className="flex items-center gap-2 py-2">
                    <Button
                      variant="outline"
                      className="flex-1 text-sm relative overflow-hidden group"
                      onClick={() => {
                        setShowLoginModal(true)
                        setShowMobileMenu(false)
                      }}
                    >
                      <LogIn className="h-4 w-4 mr-2" />
                      <span className="relative z-10">Sign In</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>

                    <Button
                      variant="outline"
                      className="relative overflow-hidden group"
                      onClick={() => {
                        setShowCart(true)
                        setShowMobileMenu(false)
                      }}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {cartItems.length}
                        </span>
                      )}
                      <span className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Button>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 overflow-hidden" ref={heroRef}>
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 font-medium mb-2">
                  TechSync99 Store
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Premium design templates</h1>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text mb-6">
                  to kickstart your project
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  A collection of the best design templates and tools curated and verified by TechSync99's creators.
                </p>

                <div className="flex gap-2 mb-8 relative">
                  <div
                    className={`relative flex-1 transition-all duration-300 ${isSearchFocused ? "ring-2 ring-red-500 ring-opacity-50" : ""}`}
                    ref={searchRef}
                  >
                    <Search
                      className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isSearchFocused ? "text-red-500" : "text-gray-400"} h-4 w-4 transition-colors duration-300`}
                    />
                    <Input
                      placeholder="Search for templates and more"
                      className="pl-10 bg-gray-800 border-gray-700 focus:border-red-500 focus:ring-red-500 transition-all duration-300 text-white"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => {
                        setIsSearchFocused(false)
                        // Delay hiding results to allow for clicking on them
                        setTimeout(() => setShowSearchResults(false), 200)
                      }}
                    />
                    {searchQuery && (
                      <button
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        onClick={() => setSearchQuery("")}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    )}

                    {/* Search Results Dropdown */}
                    {showSearchResults && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-gray-900 rounded-md shadow-lg border border-gray-800 z-20">
                        {isLoading ? (
                          <div className="p-4 text-center">
                            <div className="animate-spin h-5 w-5 border-2 border-red-500 border-t-transparent rounded-full mx-auto"></div>
                            <p className="text-sm text-gray-400 mt-2">Searching...</p>
                          </div>
                        ) : searchResults.length > 0 ? (
                          <div>
                            {searchResults.map((result) => (
                              <div
                                key={result.id}
                                className="p-3 hover:bg-gray-800 cursor-pointer flex items-center gap-3 border-b border-gray-800 last:border-b-0"
                                onClick={() => {
                                  openTemplateDetails(result)
                                  setShowSearchResults(false)
                                }}
                              >
                                <div className="relative h-10 w-10 flex-shrink-0 rounded overflow-hidden">
                                  <Image
                                    src={result.image || "/placeholder.svg"}
                                    alt={result.title}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium">{result.title}</h4>
                                  <p className="text-xs text-gray-400 truncate">{result.description}</p>
                                </div>
                              </div>
                            ))}
                            <div className="p-2 bg-gray-800 border-t border-gray-800">
                              <Button
                                variant="link"
                                className="w-full text-sm text-red-500 hover:text-red-600"
                                onClick={() => {
                                  setShowSearchResults(false)
                                  setActiveCategory("all")
                                }}
                              >
                                View all results
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <div className="p-4 text-center text-gray-400">
                            <p>No results found</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white relative overflow-hidden group">
                    <span className="relative z-10">Browse Items</span>
                    <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {quickFilters.map((filter) => (
                    <Button
                      key={filter.id}
                      variant="outline"
                      className="text-sm border-gray-700 hover:border-transparent hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-600/10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300"
                      onClick={() => setSearchQuery(filter.label)}
                    >
                      {filter.label}
                    </Button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-lg blur-xl opacity-70"></div>
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden border border-gray-800 shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=1000"
                    alt="Template showcase"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-gray-900/90 backdrop-blur-sm rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white">Featured Template</h3>
                      <p className="text-sm text-gray-400">Dashboard Pro - Admin Template</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0">
                      $69
                    </Badge>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                Popular templates
              </h2>
              <Button
                variant="ghost"
                className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 group"
              >
                View all
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularTemplates.map((template) => (
                <motion.div
                  key={template.id}
                  className="animate-on-scroll"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setHoveredCard(template.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card className="h-full overflow-hidden border-gray-800 bg-gray-900 hover:border-transparent hover:shadow-lg transition-all duration-500 group relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5 opacity-0 group-hover:from-red-500/20 group-hover:to-red-600/20 group-hover:opacity-100 transition-all duration-500 -z-10 ${hoveredCard === template.id ? "opacity-100" : ""}`}
                    ></div>
                    <div className="relative h-[250px] w-full overflow-hidden">
                      <Image
                        src={template.image || "/placeholder.svg"}
                        alt={template.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <button
                          className={`p-2 rounded-full ${favorites.includes(template.id) ? "bg-red-500 text-white" : "bg-gray-900/80 text-gray-400 hover:text-red-500"} backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(template.id)
                          }}
                        >
                          <Heart className={`h-4 w-4 ${favorites.includes(template.id) ? "fill-white" : ""}`} />
                        </button>
                        <button
                          className="p-2 rounded-full bg-gray-900/80 text-gray-400 hover:text-red-500 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                          onClick={(e) => {
                            e.stopPropagation()
                            openTemplateDetails(template)
                          }}
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300">
                          {template.title}
                        </h3>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="h-4 w-4 fill-amber-500" />
                          <span className="text-sm font-medium">{template.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4">{template.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {template.tags.map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-gray-800 text-gray-200 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white border-gray-700 transition-all duration-300"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex justify-between items-center">
                      <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                        ${template.price}
                      </div>
                      <Button
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white relative overflow-hidden group"
                        onClick={() => openTemplateDetails(template)}
                      >
                        <span className="relative z-10">View Details</span>
                        <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                All templates
              </h2>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="text-sm border-gray-700 hover:border-red-500 hover:text-red-500 flex items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4" />
                  Filters
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`}
                  />
                </Button>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" className="p-2 text-gray-400 hover:text-red-500" onClick={clearFilters}>
                        <X className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Clear filters</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  className="mb-8 bg-gray-800 rounded-lg p-6 border border-gray-800"
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 32 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-medium mb-4">Price Range</h3>
                      <div className="px-2">
                        <Slider
                          defaultValue={[0, 100]}
                          min={0}
                          max={100}
                          step={1}
                          value={priceRange}
                          onValueChange={setPriceRange}
                          className="mb-6"
                        />
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">${priceRange[0]}</span>
                          <span className="text-sm text-gray-400">${priceRange[1]}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-4">Template Type</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="type-figma"
                            className="h-4 w-4 rounded border-gray-700 text-red-500 focus:ring-red-500"
                            checked={selectedTypes.includes("figma")}
                            onChange={() => handleTypeToggle("figma")}
                          />
                          <label htmlFor="type-figma" className="ml-2 text-sm text-gray-300">
                            Figma Templates
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="type-website"
                            className="h-4 w-4 rounded border-gray-700 text-red-500 focus:ring-red-500"
                            checked={selectedTypes.includes("website")}
                            onChange={() => handleTypeToggle("website")}
                          />
                          <label htmlFor="type-website" className="ml-2 text-sm text-gray-300">
                            Website Templates
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button variant="outline" className="text-sm mr-2" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                    <Button
                      className="text-sm bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                      onClick={() => setShowFilters(false)}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
              <TabsList className="mb-8 bg-transparent border-b border-gray-800 w-full justify-start rounded-none h-auto p-0 overflow-x-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="data-[state=active]:border-b-2 data-[state=active]:border-b-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 data-[state=active]:text-transparent data-[state=active]:bg-clip-text data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-red-600 rounded-none bg-transparent px-4 py-2 text-gray-400 hover:text-white relative group flex items-center gap-1"
                  >
                    {category.icon}
                    {category.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100 data-[state=active]:opacity-0"></span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={activeCategory} className="mt-0">
                {filteredTemplates.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="inline-block p-3 rounded-full bg-gray-800 mb-4">
                      <Search className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No templates found</h3>
                    <p className="text-gray-400 mb-4">Try adjusting your filters or search query</p>
                    <Button variant="outline" className="text-sm" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template) => (
                      <motion.div
                        key={template.id}
                        className="animate-on-scroll"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        onMouseEnter={() => setHoveredCard(template.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <Card
                          className="overflow-hidden border-gray-800 bg-gray-900 hover:border-transparent hover:shadow-lg transition-all duration-500 group relative cursor-pointer"
                          onClick={() => openTemplateDetails(template)}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-r from-red-500/5 to-red-600/5 opacity-0 group-hover:from-red-500/20 group-hover:to-red-600/20 group-hover:opacity-100 transition-all duration-500 -z-10 ${hoveredCard === template.id ? "opacity-100" : ""}`}
                          ></div>
                          <div className="relative h-[250px] w-full overflow-hidden">
                            <Image
                              src={template.image || "/placeholder.svg"}
                              alt={template.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-4 right-4 flex gap-2">
                              <button
                                className={`p-2 rounded-full ${favorites.includes(template.id) ? "bg-red-500 text-white" : "bg-gray-900/80 text-gray-400 hover:text-red-500"} backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0`}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleFavorite(template.id)
                                }}
                              >
                                <Heart className={`h-4 w-4 ${favorites.includes(template.id) ? "fill-white" : ""}`} />
                              </button>
                              <button
                                className="p-2 rounded-full bg-gray-900/80 text-gray-400 hover:text-red-500 backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  openTemplateDetails(template)
                                }}
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-semibold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300">
                                {template.title}
                              </h3>
                              <div className="flex items-center gap-1 text-amber-500">
                                <Star className="h-4 w-4 fill-amber-500" />
                                <span className="text-sm font-medium">{template.rating}</span>
                              </div>
                            </div>
                            <p className="text-gray-400 mb-4">{template.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {template.tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="bg-gray-800 text-gray-200 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white border-gray-700 transition-all duration-300"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="p-6 pt-0 flex justify-between items-center">
                            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                              ${template.price}
                            </div>
                            <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white relative overflow-hidden group">
                              <span className="relative z-10">View Details</span>
                              <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                  Ready to launch your project?
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Browse our collection of premium templates or contact us for a custom solution tailored to your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-6 text-lg relative overflow-hidden group">
                    <span className="relative z-10">Browse All Templates</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-200 hover:border-transparent hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-600/10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 px-8 py-6 text-lg transition-all duration-300"
                  >
                    Request Custom Design
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-800 py-12 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-md blur-[5px] opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-red-500 to-red-600 rounded-md flex items-center justify-center h-full">
                    <span className="text-white font-bold">T</span>
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                  TechSync99
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Premium design templates and development solutions for businesses and professionals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                Templates
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-sm relative group"
                  >
                    Admin Dashboards
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-sm relative group"
                  >
                    E-Commerce
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-sm relative group"
                  >
                    Portfolio
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-sm relative group"
                  >
                    Landing Pages
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-sm relative group"
                  >
                    About Us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/team"
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-sm relative group"
                  >
                    Our Team
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-sm relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-sm relative group"
                  >
                    Blog
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-sm relative group"
                  >
                    Privacy Policy
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-sm relative group"
                  >
                    Terms of Service
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/license"
                    className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 text-sm relative group"
                  >
                    License
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2023 TechSync99. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Template Details Modal */}
      <AnimatePresence>
        {showTemplateDetails && selectedTemplate && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeTemplateDetails}
          >
            <motion.div
              className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto border border-gray-800"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800">
                <div className="flex items-center justify-between p-4">
                  <button
                    className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-red-500 transition-colors duration-300"
                    onClick={closeTemplateDetails}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-red-500 transition-colors duration-300"
                      onClick={() => toggleFavorite(selectedTemplate.id)}
                    >
                      <Heart
                        className={`h-4 w-4 ${favorites.includes(selectedTemplate.id) ? "fill-red-500 text-red-500" : ""}`}
                      />
                    </button>
                    <button className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-red-500 transition-colors duration-300">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src={selectedTemplate.images[activeImageIndex] || selectedTemplate.image}
                  alt={selectedTemplate.title}
                  fill
                  className="object-cover"
                />

                {/* Image Navigation */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {selectedTemplate.images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${activeImageIndex === index ? "bg-white w-6" : "bg-white/50"}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveImageIndex(index)
                      }}
                    />
                  ))}
                </div>

                {/* Image Navigation Arrows */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-900/80 text-gray-400 hover:text-red-500 backdrop-blur-sm transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveImageIndex((prev) => (prev === 0 ? selectedTemplate.images.length - 1 : prev - 1))
                  }}
                >
                  <ChevronRight className="h-5 w-5 rotate-180" />
                </button>
                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-900/80 text-gray-400 hover:text-red-500 backdrop-blur-sm transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveImageIndex((prev) => (prev === selectedTemplate.images.length - 1 ? 0 : prev + 1))
                  }}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                      {selectedTemplate.title}
                    </h2>
                    <p className="text-gray-400">{selectedTemplate.description}</p>
                  </div>
                  <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white border-0 text-lg py-1 px-3">
                    ${selectedTemplate.price}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedTemplate.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-gray-800 text-gray-200 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:text-white border-gray-700 transition-all duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                      Features
                    </h3>
                    <ul className="space-y-2">
                      {selectedTemplate.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                      Details
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                        <span className="text-gray-400">Type</span>
                        <span className="font-medium text-white">
                          {selectedTemplate.type === "figma" ? "Figma Template" : "Developed Website"}
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                        <span className="text-gray-400">Rating</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
                          <span className="font-medium">
                            {selectedTemplate.rating} ({selectedTemplate.reviewCount} reviews)
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                        <span className="text-gray-400">License</span>
                        <span className="font-medium">Single Use</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                        <span className="text-gray-400">Support</span>
                        <span className="font-medium">6 months</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-800">
                        <span className="text-gray-400">Last Update</span>
                        <span className="font-medium">November 2023</span>
                      </div>
                    </div>

                    {selectedTemplate.demo && (
                      <div className="mt-6">
                        <a
                          href={selectedTemplate.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-red-500 hover:text-red-600 font-medium"
                        >
                          <Eye className="h-4 w-4" />
                          View Live Demo
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Reviews Section */}
                {selectedTemplate.reviewItems && selectedTemplate.reviewItems.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                      Customer Reviews
                    </h3>
                    <div className="space-y-4">
                      {selectedTemplate.reviewItems.map((review) => (
                        <div key={review.id} className="p-4 bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden">
                              <Image
                                src={review.avatar || "/placeholder.svg"}
                                alt={review.user}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{review.user}</div>
                              <div className="text-sm text-gray-400">{review.date}</div>
                            </div>
                            <div className="ml-auto flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${i < review.rating ? "text-amber-500 fill-amber-500" : "text-gray-700"}`}
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-300">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Related Templates */}
                {selectedTemplate.relatedTemplates && selectedTemplate.relatedTemplates.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                      You May Also Like
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {selectedTemplate.relatedTemplates.map((relatedId) => {
                        const relatedTemplate = templates.find((t) => t.id === relatedId)
                        if (!relatedTemplate) return null

                        return (
                          <div
                            key={relatedId}
                            className="group cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation()
                              openTemplateDetails(relatedTemplate)
                            }}
                          >
                            <div className="relative h-32 rounded-lg overflow-hidden mb-2">
                              <Image
                                src={relatedTemplate.image || "/placeholder.svg"}
                                alt={relatedTemplate.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <h4 className="font-medium text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300">
                              {relatedTemplate.title}
                            </h4>
                            <div className="text-sm text-gray-400">${relatedTemplate.price}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                    ${selectedTemplate.price}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="border-gray-700 text-gray-200 hover:border-transparent hover:bg-gradient-to-r hover:from-red-500/10 hover:to-red-600/10 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white relative overflow-hidden group"
                      onClick={() => {
                        addToCart(selectedTemplate)
                        closeTemplateDetails()
                      }}
                    >
                      <span className="relative z-10">
                        <ShoppingCart className="mr-2 h-4 w-4 inline" />
                        Add to Cart
                      </span>
                      <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLoginModal(false)}
          >
            <motion.div
              className="bg-gray-900 rounded-lg shadow-2xl w-full max-w-md"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">
                    Sign In
                  </h2>
                  <button className="text-gray-400 hover:text-gray-600" onClick={() => setShowLoginModal(false)}>
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <form className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="mt-1 bg-gray-800 border-gray-700 focus:border-red-500 focus:ring-red-500 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="mt-1 bg-gray-800 border-gray-700 focus:border-red-500 focus:ring-red-500 text-white"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded bg-gray-800 border-gray-700 text-red-500 focus:ring-red-500"
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm text-red-500 hover:text-red-600">
                      Forgot password?
                    </a>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white relative overflow-hidden group"
                  >
                    <span className="relative z-10">Sign In</span>
                    <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
                  </Button>
                </form>

                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full border-gray-700 text-gray-200">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                          <path
                            fill="#4285F4"
                            d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                          />
                          <path
                            fill="#34A853"
                            d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                          />
                          <path
                            fill="#EA4335"
                            d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                          />
                        </g>
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="w-full border-gray-700 text-gray-200">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <path
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          fill="currentColor"
                        />
                      </svg>
                      Facebook
                    </Button>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-400">
                    Don't have an account?{" "}
                    <a href="#" className="text-red-500 hover:text-red-600 font-medium">
                      Sign up
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Cart Drawer */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowCart(false)}></div>
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-md bg-gray-900 shadow-xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <h3 className="font-medium">Your Cart ({cartItems.length})</h3>
                <button className="text-gray-400 hover:text-gray-600" onClick={() => setShowCart(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>

              {cartItems.length === 0 ? (
                <div className="p-4 text-center text-gray-400">
                  <ShoppingCart className="h-12 w-12 mx-auto mb-2 text-gray-700" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="flex-1 overflow-auto p-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-3 p-3 border-b border-gray-800">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded overflow-hidden">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium truncate">{item.title}</h4>
                          <p className="text-gray-400">${item.price}</p>
                        </div>
                        <button className="text-gray-400 hover:text-red-500" onClick={() => removeFromCart(item.id)}>
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 border-t border-gray-800 mt-auto">
                    <div className="flex justify-between mb-4">
                      <span>Total:</span>
                      <span className="font-bold">${getTotalPrice()}</span>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white relative overflow-hidden group">
                      <span className="relative z-10">Checkout</span>
                      <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 rounded-lg shadow-lg border border-gray-800 p-4 flex items-center gap-3 max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-full p-2 text-white">
              <CheckCircle className="h-5 w-5" />
            </div>
            <p className="text-gray-300">{notificationMessage}</p>
            <button className="ml-auto text-gray-400 hover:text-gray-600" onClick={() => setShowNotification(false)}>
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add CSS for shine animation */}
      <style jsx global>{`
        @keyframes shine {
          100% {
            left: 125%;
          }
        }
        
        .group:hover .group-hover\\:animate-shine {
          animation: shine 1s;
        }
      `}</style>
    </div>
  )
}
