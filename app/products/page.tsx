"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Check,
  Database,
  Download,
  Layers,
  LineChart,
  Lock,
  MessageSquare,
  Play,
  Shield,
  Star,
  X,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// Add this import at the top with the other imports
import { useMediaQuery } from "@/hooks/use-mobile"

export default function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState("dataflow")
  const [showChat, setShowChat] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { sender: "bot", message: "Hello! How can I help you with our products today?" },
  ])
  const [messageInput, setMessageInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  // Responsive helpers
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Product configurator state
  const [selectedPlan, setSelectedPlan] = useState("pro")
  const [users, setUsers] = useState(10)
  const [storage, setStorage] = useState(500)
  const [annualBilling, setAnnualBilling] = useState(true)
  const [addons, setAddons] = useState({
    advancedAnalytics: false,
    prioritySupport: false,
    customIntegrations: false,
  })

  // Calculate price based on configuration
  const calculatePrice = () => {
    const basePrices = {
      starter: 49,
      pro: 99,
      enterprise: 249,
    }

    let price = basePrices[selectedPlan]

    // Add per user cost
    if (selectedPlan === "starter") {
      price += (users - 5) * 5 // $5 per user after 5 users
    } else if (selectedPlan === "pro") {
      price += (users - 10) * 4 // $4 per user after 10 users
    } else {
      price += (users - 25) * 3 // $3 per user after 25 users
    }

    // Add storage cost
    const baseStorage = {
      starter: 100,
      pro: 500,
      enterprise: 1000,
    }

    if (storage > baseStorage[selectedPlan]) {
      const extraStorage = storage - baseStorage[selectedPlan]
      const storageBlocks = Math.ceil(extraStorage / 100)
      price += storageBlocks * 5 // $5 per 100GB extra
    }

    // Add addons
    if (addons.advancedAnalytics) price += 29
    if (addons.prioritySupport) price += 49
    if (addons.customIntegrations) price += 99

    // Apply annual discount
    if (annualBilling) {
      price = price * 10 // 10 months for annual (2 months free)
    } else {
      price = price * 12 // 12 months for monthly
    }

    return annualBilling ? Math.round(price / 12) : price
  }

  // Handle chat submission
  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    // Add user message
    setChatMessages([...chatMessages, { sender: "user", message: messageInput }])
    setMessageInput("")
    setIsTyping(true)

    // Simulate bot response after delay
    setTimeout(() => {
      let response
      const lowerMsg = messageInput.toLowerCase()

      if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("pricing")) {
        response =
          "Our pricing starts at $49/month for the Starter plan. You can see detailed pricing with our interactive calculator on this page."
      } else if (lowerMsg.includes("trial") || lowerMsg.includes("free")) {
        response = "Yes, we offer a 14-day free trial for all our products. No credit card required to get started!"
      } else if (lowerMsg.includes("support") || lowerMsg.includes("help")) {
        response =
          "We offer 24/7 support for all paid plans. Enterprise customers get dedicated support with a 1-hour response time guarantee."
      } else if (lowerMsg.includes("dataflow") || lowerMsg.includes("data flow")) {
        response =
          "DataFlow is our flagship data integration platform. It allows you to connect, transform, and automate your data flows between 200+ systems."
      } else if (lowerMsg.includes("securecloud") || lowerMsg.includes("secure cloud")) {
        response =
          "SecureCloud is our cloud security solution that provides end-to-end encryption, access controls, and compliance monitoring for your cloud infrastructure."
      } else if (lowerMsg.includes("analytix") || lowerMsg.includes("analytics")) {
        response =
          "AnalytiX is our advanced analytics platform with AI-powered insights, customizable dashboards, and predictive modeling capabilities."
      } else {
        response =
          "Thanks for your message! One of our product specialists will get back to you shortly. Is there anything specific about our products you'd like to know?"
      }

      setChatMessages((prev) => [...prev, { sender: "bot", message: response }])
      setIsTyping(false)
    }, 1500)
  }

  // Products data
  const products = [
    {
      id: "dataflow",
      name: "DataFlow",
      tagline: "Enterprise Data Integration Platform",
      description:
        "Connect, transform, and automate your data flows between 200+ systems with our powerful ETL platform.",
      icon: <Database className="h-6 w-6 text-cyan-400" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "200+ pre-built connectors",
        "Visual workflow builder",
        "Real-time data processing",
        "Automated error handling",
        "Data quality monitoring",
        "Version control & rollbacks",
      ],
      demo: {
        tabs: ["Connectors", "Workflows", "Monitoring"],
        screenshots: [
          "/placeholder.svg?height=400&width=700",
          "/placeholder.svg?height=400&width=700",
          "/placeholder.svg?height=400&width=700",
        ],
      },
      testimonial: {
        quote:
          "DataFlow reduced our integration development time by 70% and helped us connect our entire tech stack seamlessly.",
        author: "Sarah Johnson",
        title: "CTO, EnterpriseIQ",
        avatar: "/placeholder.svg?height=60&width=60",
      },
    },
    {
      id: "securecloud",
      name: "SecureCloud",
      tagline: "Enterprise-Grade Cloud Security",
      description:
        "Protect your cloud infrastructure with end-to-end encryption, access controls, and compliance monitoring.",
      icon: <Shield className="h-6 w-6 text-cyan-400" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "End-to-end encryption",
        "Zero-trust architecture",
        "Compliance dashboard (GDPR, HIPAA, SOC2)",
        "Threat detection & response",
        "Access control management",
        "Security posture assessment",
      ],
      demo: {
        tabs: ["Dashboard", "Compliance", "Threats"],
        screenshots: [
          "/placeholder.svg?height=400&width=700",
          "/placeholder.svg?height=400&width=700",
          "/placeholder.svg?height=400&width=700",
        ],
      },
      testimonial: {
        quote:
          "SecureCloud gave us peace of mind with our cloud infrastructure. The compliance features alone saved us countless hours of manual work.",
        author: "Michael Chen",
        title: "CISO, HealthTech Solutions",
        avatar: "/placeholder.svg?height=60&width=60",
      },
    },
    {
      id: "analytix",
      name: "AnalytiX",
      tagline: "AI-Powered Business Intelligence",
      description:
        "Transform your data into actionable insights with AI-powered analytics, customizable dashboards, and predictive modeling.",
      icon: <LineChart className="h-6 w-6 text-cyan-400" />,
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "AI-powered insights",
        "Customizable dashboards",
        "Predictive modeling",
        "Natural language queries",
        "Automated reporting",
        "Data visualization library",
      ],
      demo: {
        tabs: ["Dashboards", "Insights", "Predictions"],
        screenshots: [
          "/placeholder.svg?height=400&width=700",
          "/placeholder.svg?height=400&width=700",
          "/placeholder.svg?height=400&width=700",
        ],
      },
      testimonial: {
        quote:
          "AnalytiX transformed how we make decisions. The AI-powered insights have uncovered opportunities we would have missed otherwise.",
        author: "Jessica Martinez",
        title: "Data Science Director, RetailPlus",
        avatar: "/placeholder.svg?height=60&width=60",
      },
    },
  ]

  // Get current product data
  const currentProduct = products.find((p) => p.id === activeProduct)

  // Feature comparison data
  const featureComparison = {
    categories: [
      {
        name: "Core Features",
        features: [
          { name: "Number of users", starter: "Up to 5", pro: "Up to 25", enterprise: "Unlimited" },
          { name: "Storage", starter: "100GB", pro: "500GB", enterprise: "1TB+" },
          { name: "API access", starter: true, pro: true, enterprise: true },
          { name: "Custom branding", starter: false, pro: true, enterprise: true },
        ],
      },
      {
        name: "Support",
        features: [
          { name: "Email support", starter: "Business hours", pro: "24/7", enterprise: "24/7" },
          { name: "Phone support", starter: false, pro: "Business hours", enterprise: "24/7" },
          { name: "Dedicated account manager", starter: false, pro: false, enterprise: true },
          { name: "Response time SLA", starter: false, pro: "8 hours", enterprise: "1 hour" },
        ],
      },
      {
        name: "Security",
        features: [
          { name: "Two-factor authentication", starter: true, pro: true, enterprise: true },
          { name: "SSO integration", starter: false, pro: true, enterprise: true },
          { name: "Role-based access control", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
          { name: "Audit logs", starter: "30 days", pro: "90 days", enterprise: "1 year+" },
        ],
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-cyan-500 rounded-md blur-[10px] opacity-50"></div>
              <div className="relative bg-slate-950 rounded-md flex items-center justify-center h-full border border-cyan-500/50">
                <Layers className="h-5 w-5 text-cyan-400" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
              TechSync99
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Projects
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-cyan-400 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400 after:transition-transform after:duration-300 after:ease-in-out"
            >
              Products
            </Link>
            <Link href="/team" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Team
            </Link>
            <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
            Get Started
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400 mb-4">
                Our Products
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Enterprise Software Solutions
              </h1>
              <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
                Powerful, secure, and scalable products designed to transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  View Pricing
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="w-full py-12 md:py-24 bg-slate-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Our Enterprise Software Suite
              </h2>
              <p className="max-w-[700px] text-slate-400">
                Explore our suite of enterprise-grade software products designed to help businesses streamline
                operations, enhance security, and drive growth.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-12">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    className={`bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors h-full cursor-pointer ${activeProduct === product.id ? "border-cyan-500/50 ring-1 ring-cyan-500/20" : ""}`}
                    onClick={() => setActiveProduct(product.id)}
                  >
                    <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="bg-cyan-500/10 p-2 rounded-full">{product.icon}</div>
                      <div>
                        <CardTitle className="text-white">{product.name}</CardTitle>
                        <CardDescription className="text-slate-400">{product.tagline}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400 mb-4">{product.description}</p>
                      <div className="space-y-2">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                            <Check className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {product.features.length > 3 && (
                          <div className="text-cyan-400 text-sm">+{product.features.length - 3} more features</div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant={activeProduct === product.id ? "default" : "outline"}
                        className={
                          activeProduct === product.id
                            ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 w-full"
                            : "border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white w-full"
                        }
                      >
                        {activeProduct === product.id ? "Currently Viewing" : "Learn More"}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Product Detail */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900 border border-slate-800 rounded-lg p-6 md:p-8"
              >
                <div className="grid gap-4 md:gap-8 grid-cols-1 lg:grid-cols-2 items-center mb-6 md:mb-8">
                  <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                      Featured Product
                    </div>
                    <h3 className="text-3xl font-bold text-white">{currentProduct.name}</h3>
                    <p className="text-slate-400">{currentProduct.description}</p>
                    <div className="space-y-2 pt-4">
                      {currentProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-slate-300">
                          <div className="bg-cyan-500/10 p-1 rounded-full">
                            <Check className="h-4 w-4 text-cyan-400" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                        Request Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Whitepaper
                      </Button>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden border border-slate-800">
                    <Image
                      src={currentProduct.image || "/placeholder.svg"}
                      alt={currentProduct.name}
                      width={800}
                      height={600}
                      className="object-cover w-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-slate-900/80 p-4 rounded-full cursor-pointer hover:bg-slate-900/90 transition-colors">
                        <Play className="h-8 w-8 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Demo */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4">Interactive Demo</h4>
                  <Tabs defaultValue={currentProduct.demo.tabs[0].toLowerCase()} className="w-full">
                    <TabsList className="bg-slate-800 border border-slate-700 mb-4 w-full flex-wrap">
                      {currentProduct.demo.tabs.map((tab, index) => (
                        <TabsTrigger
                          key={index}
                          value={tab.toLowerCase()}
                          className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                        >
                          {tab}
                        </TabsTrigger>
                      ))}
                    </TabsList>

                    {currentProduct.demo.tabs.map((tab, index) => (
                      <TabsContent key={index} value={tab.toLowerCase()} className="mt-0">
                        <div className="relative rounded-lg overflow-hidden border border-slate-800">
                          <Image
                            src={currentProduct.demo.screenshots[index] || "/placeholder.svg"}
                            alt={`${currentProduct.name} ${tab} Demo`}
                            width={700}
                            height={400}
                            className="object-cover w-full"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-4">
                            <div className="flex items-center gap-2">
                              <div className="bg-cyan-500/20 p-1 rounded-full">
                                <div className="h-2 w-2 rounded-full bg-cyan-400"></div>
                              </div>
                              <span className="text-sm text-slate-300">
                                Interactive demo - Click elements to explore
                              </span>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>

                {/* Testimonial */}
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <Image
                        src={currentProduct.testimonial.avatar || "/placeholder.svg"}
                        alt={currentProduct.testimonial.author}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-slate-300 italic mb-2">"{currentProduct.testimonial.quote}"</p>
                      <div>
                        <p className="text-white font-medium">{currentProduct.testimonial.author}</p>
                        <p className="text-slate-400 text-sm">{currentProduct.testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Product Configurator & Pricing */}
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Interactive Product Configurator
              </h2>
              <p className="max-w-[700px] text-slate-400">
                Customize your plan to fit your specific business needs and see real-time pricing.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 grid-cols-1 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card className="bg-slate-900 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-white">Configure Your Plan</CardTitle>
                    <CardDescription className="text-slate-400">
                      Adjust the options below to customize your solution
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Plan Selection */}
                    <div className="space-y-2">
                      <Label className="text-white">Select Plan</Label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${selectedPlan === "starter" ? "bg-cyan-500/10 border-cyan-500/50" : "border-slate-700 hover:border-slate-600"}`}
                          onClick={() => setSelectedPlan("starter")}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-white">Starter</h4>
                            {selectedPlan === "starter" && <Check className="h-4 w-4 text-cyan-400" />}
                          </div>
                          <p className="text-sm text-slate-400">For small teams getting started</p>
                        </div>
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${selectedPlan === "pro" ? "bg-cyan-500/10 border-cyan-500/50" : "border-slate-700 hover:border-slate-600"}`}
                          onClick={() => setSelectedPlan("pro")}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-white">Professional</h4>
                            {selectedPlan === "pro" && <Check className="h-4 w-4 text-cyan-400" />}
                          </div>
                          <p className="text-sm text-slate-400">For growing businesses</p>
                          <Badge className="bg-cyan-500/20 text-cyan-400 mt-2 border-0">Popular</Badge>
                        </div>
                        <div
                          className={`border rounded-lg p-4 cursor-pointer transition-colors ${selectedPlan === "enterprise" ? "bg-cyan-500/10 border-cyan-500/50" : "border-slate-700 hover:border-slate-600"}`}
                          onClick={() => setSelectedPlan("enterprise")}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-white">Enterprise</h4>
                            {selectedPlan === "enterprise" && <Check className="h-4 w-4 text-cyan-400" />}
                          </div>
                          <p className="text-sm text-slate-400">For large organizations with complex needs</p>
                        </div>
                      </div>
                    </div>

                    {/* Users Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label className="text-white">Number of Users</Label>
                        <span className="text-cyan-400 font-medium">{users} users</span>
                      </div>
                      <Slider
                        defaultValue={[10]}
                        max={100}
                        step={1}
                        value={[users]}
                        onValueChange={(value) => setUsers(value[0])}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>5</span>
                        <span>25</span>
                        <span>50</span>
                        <span>100</span>
                      </div>
                    </div>

                    {/* Storage Slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label className="text-white">Storage</Label>
                        <span className="text-cyan-400 font-medium">{storage} GB</span>
                      </div>
                      <Slider
                        defaultValue={[500]}
                        max={2000}
                        step={100}
                        value={[storage]}
                        onValueChange={(value) => setStorage(value[0])}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>100GB</span>
                        <span>500GB</span>
                        <span>1TB</span>
                        <span>2TB</span>
                      </div>
                    </div>

                    {/* Billing Toggle */}
                    <div className="space-y-2">
                      <Label className="text-white">Billing Cycle</Label>
                      <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Switch checked={annualBilling} onCheckedChange={setAnnualBilling} />
                          <span className="text-white">Annual billing</span>
                          {annualBilling && <Badge className="bg-green-500/20 text-green-400 border-0">Save 20%</Badge>}
                        </div>
                        <span className="text-slate-400">{annualBilling ? "Billed annually" : "Billed monthly"}</span>
                      </div>
                    </div>

                    {/* Add-ons */}
                    <div className="space-y-2">
                      <Label className="text-white">Add-ons</Label>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                          <div>
                            <h4 className="text-white font-medium">Advanced Analytics</h4>
                            <p className="text-sm text-slate-400">AI-powered insights and custom reports</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-slate-400">$29/mo</span>
                            <Switch
                              checked={addons.advancedAnalytics}
                              onCheckedChange={(checked) => setAddons({ ...addons, advancedAnalytics: checked })}
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                          <div>
                            <h4 className="text-white font-medium">Priority Support</h4>
                            <p className="text-sm text-slate-400">Dedicated support with 4-hour response time</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-slate-400">$49/mo</span>
                            <Switch
                              checked={addons.prioritySupport}
                              onCheckedChange={(checked) => setAddons({ ...addons, prioritySupport: checked })}
                            />
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                          <div>
                            <h4 className="text-white font-medium">Custom Integrations</h4>
                            <p className="text-sm text-slate-400">Connect with your existing tools and systems</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="text-slate-400">$99/mo</span>
                            <Switch
                              checked={addons.customIntegrations}
                              onCheckedChange={(checked) => setAddons({ ...addons, customIntegrations: checked })}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Pricing Summary */}
              <div>
                <Card className="bg-slate-900 border-slate-800 sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-white">Your Custom Plan</CardTitle>
                    <CardDescription className="text-slate-400">Summary of your selected options</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Base plan ({selectedPlan})</span>
                        <span className="text-white">${calculatePrice()}/mo</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Users</span>
                        <span className="text-white">{users} users</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400">Storage</span>
                        <span className="text-white">{storage} GB</span>
                      </div>
                      {addons.advancedAnalytics && (
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Advanced Analytics</span>
                          <span className="text-white">Included</span>
                        </div>
                      )}
                      {addons.prioritySupport && (
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Priority Support</span>
                          <span className="text-white">Included</span>
                        </div>
                      )}
                      {addons.customIntegrations && (
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Custom Integrations</span>
                          <span className="text-white">Included</span>
                        </div>
                      )}
                      <div className="pt-4 border-t border-slate-700 mt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">Total</span>
                          <div className="text-right">
                            <div className="text-xl font-bold text-white">${calculatePrice()}/mo</div>
                            <div className="text-xs text-slate-400">
                              {annualBilling
                                ? "Billed annually ($" + calculatePrice() * 12 + "/year)"
                                : "Billed monthly"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                      >
                        Talk to Sales
                      </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                      <Lock className="h-4 w-4" />
                      <span>Secure checkout</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full py-12 md:py-24 bg-slate-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Feature Comparison
              </h2>
              <p className="max-w-[700px] text-slate-400">
                Compare our plans to find the perfect fit for your business needs.
              </p>
            </div>

            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <div className="inline-block min-w-full align-middle px-4 sm:px-0">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="text-left p-4 bg-slate-800 rounded-tl-lg"></th>
                      <th className="p-4 bg-slate-800 text-center">
                        <div className="text-white font-medium">Starter</div>
                        <div className="text-slate-400 text-sm">$49/month</div>
                      </th>
                      <th className="p-4 bg-cyan-500/10 text-center border-t border-x border-cyan-500/30">
                        <div className="text-cyan-400 font-medium">Professional</div>
                        <div className="text-slate-400 text-sm">$99/month</div>
                        <Badge className="bg-cyan-500/20 text-cyan-400 mt-1 border-0">Popular</Badge>
                      </th>
                      <th className="p-4 bg-slate-800 text-center rounded-tr-lg">
                        <div className="text-white font-medium">Enterprise</div>
                        <div className="text-slate-400 text-sm">$249/month</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureComparison.categories.map((category, categoryIndex) => (
                      <React.Fragment key={categoryIndex}>
                        <tr>
                          <td colSpan={4} className="p-4 bg-slate-900 font-medium text-white">
                            {category.name}
                          </td>
                        </tr>
                        {category.features.map((feature, featureIndex) => (
                          <tr key={featureIndex} className="border-b border-slate-800">
                            <td className="p-4 text-left text-slate-300">{feature.name}</td>
                            <td className="p-4 text-center">
                              {typeof feature.starter === "boolean" ? (
                                feature.starter ? (
                                  <Check className="h-5 w-5 text-green-400 mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-slate-600 mx-auto" />
                                )
                              ) : (
                                <span className="text-slate-300">{feature.starter}</span>
                              )}
                            </td>
                            <td className="p-4 text-center bg-cyan-500/5 border-x border-cyan-500/30">
                              {typeof feature.pro === "boolean" ? (
                                feature.pro ? (
                                  <Check className="h-5 w-5 text-green-400 mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-slate-600 mx-auto" />
                                )
                              ) : (
                                <span className="text-slate-300">{feature.pro}</span>
                              )}
                            </td>
                            <td className="p-4 text-center">
                              {typeof feature.enterprise === "boolean" ? (
                                feature.enterprise ? (
                                  <Check className="h-5 w-5 text-green-400 mx-auto" />
                                ) : (
                                  <X className="h-5 w-5 text-slate-600 mx-auto" />
                                )
                              ) : (
                                <span className="text-slate-300">{feature.enterprise}</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="p-4 rounded-bl-lg"></td>
                      <td className="p-4 text-center">
                        <Button
                          variant="outline"
                          className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                        >
                          Choose Starter
                        </Button>
                      </td>
                      <td className="p-4 text-center bg-cyan-500/5 border-x border-b border-cyan-500/30">
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                          Choose Professional
                        </Button>
                      </td>
                      <td className="p-4 text-center rounded-br-lg">
                        <Button
                          variant="outline"
                          className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                        >
                          Choose Enterprise
                        </Button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-slate-400">
                Find answers to common questions about our products and services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem
                  value="item-1"
                  className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-white">How does the free trial work?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-slate-400">
                    Our free trial gives you full access to all features of your selected plan for 14 days. No credit
                    card is required to start, and you can cancel anytime. At the end of your trial, you can choose to
                    subscribe or your account will automatically downgrade to our limited free tier.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-white">Can I change plans later?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-slate-400">
                    Yes, you can upgrade, downgrade, or change your plan at any time. When upgrading, the new features
                    will be available immediately, and we'll prorate your billing. When downgrading, the changes will
                    take effect at the start of your next billing cycle.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-white">Do you offer custom enterprise solutions?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-slate-400">
                    Absolutely. Our Enterprise plan can be further customized to meet your specific requirements. We
                    offer custom development, dedicated infrastructure, and tailored SLAs. Contact our sales team to
                    discuss your needs and get a custom quote.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-white">What kind of support do you offer?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-slate-400">
                    All plans include standard support via email with a 24-hour response time during business days.
                    Professional plans include 24/7 email support with an 8-hour response time. Enterprise plans include
                    24/7 priority support with a 1-hour response time, plus a dedicated account manager and optional
                    on-site support.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-5"
                  className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <span className="text-white">How secure are your products?</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-slate-400">
                    Security is our top priority. All our products are built with security-first architecture, featuring
                    end-to-end encryption, regular security audits, and compliance with industry standards (SOC 2, GDPR,
                    HIPAA). We also offer additional security features like SSO, 2FA, and custom security policies for
                    Enterprise customers.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                  Get Started Today
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                  Ready to Transform Your Business?
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed">
                  Start your free 14-day trial now. No credit card required.
                </p>
              </div>
              <div className="flex flex-col xs:flex-row gap-3 md:gap-4 mt-6 md:mt-8 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/20"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Schedule a Demo
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=32&width=32&text=${i}`}
                        alt={`User ${i}`}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400" fill="#facc15" />
                    ))}
                  </div>
                  <span className="text-slate-400 text-sm">from 500+ reviews</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Live Chat Widget */}
      <div
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 transition-all duration-300 ${showChat ? "w-[calc(100%-2rem)]" : "w-auto"} ${showChat ? "max-w-[320px]" : ""}`}
      >
        {showChat ? (
          <Card className="bg-slate-900 border-slate-800 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <CardTitle className="text-base">Product Support</CardTitle>
                </div>
                <X
                  className="h-5 w-5 cursor-pointer hover:text-slate-200 transition-colors"
                  onClick={() => setShowChat(false)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-80 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === "user" ? "bg-cyan-500 text-white" : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      {msg.message}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-slate-800 text-slate-300 rounded-lg p-3 max-w-[80%]">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-slate-500 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4 border-t border-slate-800">
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <Input
                    placeholder="Type your message..."
                    className="bg-slate-800 border-slate-700 text-white"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button
            onClick={() => setShowChat(true)}
            className="rounded-full w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/20"
          >
            <MessageSquare className="h-6 w-6" />
          </Button>
        )}
      </div>

      <footer className="w-full border-t border-slate-800 py-12 bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-cyan-500 rounded-md blur-[10px] opacity-50"></div>
                  <div className="relative bg-slate-950 rounded-md flex items-center justify-center h-full border border-cyan-500/50">
                    <Layers className="h-5 w-5 text-cyan-400" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                  TechSync99
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Empowering businesses through innovative technology solutions that drive growth, efficiency, and
                competitive advantage.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-cyan-400">
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
                <a href="#" className="text-slate-400 hover:text-cyan-400">
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
                <a href="#" className="text-slate-400 hover:text-cyan-400">
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
                <a href="#" className="text-slate-400 hover:text-cyan-400">
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
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#dataflow" className="text-slate-400 hover:text-cyan-400 text-sm">
                    DataFlow
                  </a>
                </li>
                <li>
                  <a href="#securecloud" className="text-slate-400 hover:text-cyan-400 text-sm">
                    SecureCloud
                  </a>
                </li>
                <li>
                  <a href="#analytix" className="text-slate-400 hover:text-cyan-400 text-sm">
                    AnalytiX
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="/documentation" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="/api" className="text-slate-400 hover:text-cyan-400 text-sm">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-slate-400 hover:text-cyan-400 text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/team" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/help" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="/status" className="text-slate-400 hover:text-cyan-400 text-sm">
                    System Status
                  </a>
                </li>
                <li>
                  <a href="/security" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Security
                  </a>
                </li>
                <li>
                  <a href="/compliance" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Compliance
                  </a>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-slate-400 hover:text-cyan-400 text-sm"
                    onClick={() => setShowChat(true)}
                  >
                    Live Chat Support
                  </Button>
                </li>
              </ul>
              <div className="mt-4">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2023 TechSync99. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-slate-400 hover:text-cyan-400 text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-400 hover:text-cyan-400 text-sm">
                Terms of Service
              </a>
              <a href="/cookies" className="text-slate-400 hover:text-cyan-400 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
