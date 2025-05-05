"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Check,
  ChevronRight,
  Download,
  ExternalLink,
  Layers,
  Play,
  Star,
  CheckCircle,
  Server,
  Shield,
  Zap,
  BarChart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
// First, add these imports at the top with the other imports
import { Bot, X, Send, Sparkles } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Product data - in a real app, this would come from a database or API
const productsData = [
  {
    id: "techsync-cloud",
    name: "TechSync Cloud",
    category: "cloud",
    tagline: "Enterprise Cloud Management Platform",
    description:
      "A comprehensive cloud management solution that simplifies infrastructure deployment, monitoring, and optimization across multiple cloud providers.",
    longDescription: `TechSync Cloud is an enterprise-grade cloud management platform designed to simplify and optimize your multi-cloud infrastructure. It provides a unified interface to manage, monitor, and optimize resources across AWS, Azure, and Google Cloud Platform.

With TechSync Cloud, organizations can accelerate their cloud adoption journey while maintaining control over costs, security, and compliance. Our platform helps IT teams automate routine tasks, implement best practices, and gain visibility into their entire cloud ecosystem.

Whether you're managing a hybrid cloud environment or going all-in on public cloud, TechSync Cloud provides the tools and insights you need to maximize the value of your cloud investments.`,
    image: "/placeholder.svg?height=600&width=800",
    features: [
      {
        title: "Multi-cloud management",
        description: "Unified dashboard for AWS, Azure, and GCP resources with consistent policies and governance.",
      },
      {
        title: "Automated resource provisioning",
        description: "Infrastructure as code templates and self-service catalogs for rapid deployment.",
      },
      {
        title: "Cost optimization and analytics",
        description: "Real-time cost tracking, anomaly detection, and intelligent recommendations for savings.",
      },
      {
        title: "Security compliance monitoring",
        description: "Continuous assessment against industry standards (CIS, NIST, SOC2, HIPAA, GDPR).",
      },
      {
        title: "Real-time performance dashboards",
        description: "Customizable dashboards with actionable insights and alerting capabilities.",
      },
      {
        title: "Disaster recovery automation",
        description: "Automated backup, replication, and recovery workflows with testing capabilities.",
      },
      {
        title: "Policy-based governance",
        description: "Enforce organizational standards and compliance requirements across all cloud resources.",
      },
      {
        title: "Integration capabilities",
        description: "Connect with your existing DevOps tools, ITSM systems, and security solutions.",
      },
    ],
    benefits: [
      "Reduce cloud costs by up to 30%",
      "Accelerate deployment time by 5x",
      "Enhance security posture",
      "Simplify multi-cloud operations",
    ],
    testimonial: {
      quote:
        "TechSync Cloud transformed our infrastructure management. We've reduced our cloud costs by 28% while improving deployment speed and reliability.",
      author: "Michael Chen",
      title: "CTO, Global Enterprises Inc.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    caseStudy: {
      title: "How FinTech Leader Reduced Cloud Costs by 35%",
      description:
        "Learn how a leading fintech company optimized their multi-cloud infrastructure with TechSync Cloud.",
      image: "/placeholder.svg?height=300&width=500",
      link: "/case-studies/fintech-cloud-optimization",
    },
    pricing: {
      plans: [
        {
          name: "Standard",
          price: 499,
          billing: "per month",
          features: [
            "Up to 100 cloud resources",
            "Multi-cloud support (AWS, Azure, GCP)",
            "Basic cost optimization",
            "Standard security compliance",
            "8x5 email support",
            "Basic reporting",
          ],
          cta: "Start Free Trial",
          popular: false,
        },
        {
          name: "Professional",
          price: 999,
          billing: "per month",
          features: [
            "Up to 500 cloud resources",
            "Advanced cost optimization",
            "Enhanced security compliance",
            "Disaster recovery automation",
            "24x7 email and phone support",
            "Advanced reporting and analytics",
          ],
          cta: "Start Free Trial",
          popular: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          billing: "contact for pricing",
          features: [
            "Unlimited cloud resources",
            "Custom integrations",
            "Advanced governance",
            "Dedicated account manager",
            "Custom SLAs",
            "On-site training and support",
          ],
          cta: "Contact Sales",
          popular: false,
        },
      ],
      calculator: {
        basePrice: 999,
        resourceRanges: [
          { min: 0, max: 100, price: 0 },
          { min: 101, max: 500, price: 2 },
          { min: 501, max: 1000, price: 1.5 },
          { min: 1001, max: 5000, price: 1 },
        ],
      },
    },
    faq: [
      {
        question: "How does TechSync Cloud integrate with our existing cloud accounts?",
        answer:
          "TechSync Cloud uses read-only API access to connect to your cloud accounts (AWS, Azure, GCP). This secure connection allows for monitoring and management without compromising security. For automation features, you can optionally grant additional permissions. The setup process typically takes less than 30 minutes per cloud account.",
      },
      {
        question: "Can TechSync Cloud help with our compliance requirements?",
        answer:
          "Yes, TechSync Cloud includes built-in compliance monitoring for major standards including CIS, NIST, SOC2, HIPAA, and GDPR. The platform continuously scans your cloud resources against these frameworks and provides remediation guidance for any findings. You can also create custom compliance policies specific to your organization's requirements.",
      },
      {
        question: "How does the cost optimization feature work?",
        answer:
          "TechSync Cloud analyzes your resource utilization patterns and identifies opportunities for savings through rightsizing, reserved instance purchases, and spot instance usage. The platform provides actionable recommendations with estimated savings and can automatically implement these changes based on your approval workflows. Customers typically see ROI within the first 3 months of implementation.",
      },
      {
        question: "Is TechSync Cloud suitable for hybrid cloud environments?",
        answer:
          "Absolutely. TechSync Cloud is designed to work with hybrid environments, supporting both public clouds (AWS, Azure, GCP) and private cloud infrastructure based on VMware, OpenStack, or Kubernetes. This provides a unified management experience across your entire infrastructure footprint.",
      },
      {
        question: "What kind of support is included with TechSync Cloud?",
        answer:
          "Support varies by plan. Standard includes 8x5 email support with 24-hour response time. Professional includes 24x7 email and phone support with 4-hour response time. Enterprise includes all Professional features plus a dedicated account manager, custom SLAs, and optional on-site support. All plans include access to our knowledge base, documentation, and community forums.",
      },
    ],
    screenshots: [
      {
        title: "Dashboard",
        description: "Unified view of all your cloud resources with real-time metrics and alerts",
        image: "/placeholder.svg?height=600&width=1000",
      },
      {
        title: "Cost Management",
        description: "Detailed cost analysis and optimization recommendations",
        image: "/placeholder.svg?height=600&width=1000",
      },
      {
        title: "Security Compliance",
        description: "Comprehensive security posture assessment and remediation",
        image: "/placeholder.svg?height=600&width=1000",
      },
      {
        title: "Resource Provisioning",
        description: "Self-service catalog for rapid deployment of standardized resources",
        image: "/placeholder.svg?height=600&width=1000",
      },
    ],
    relatedProducts: ["data-nexus", "securedefend", "devops-accelerator"],
  },
  {
    id: "data-nexus",
    name: "Data Nexus",
    category: "data",
    tagline: "Intelligent Data Integration Platform",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "securedefend",
    name: "SecureDefend",
    category: "security",
    tagline: "Advanced Cybersecurity Platform",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "devops-accelerator",
    name: "DevOps Accelerator",
    category: "devops",
    tagline: "End-to-End DevOps Automation",
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.productId as string

  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  // Pricing calculator state
  const [resources, setResources] = useState(250)
  const [annualBilling, setAnnualBilling] = useState(true)
  const [addons, setAddons] = useState({
    advancedSecurity: false,
    prioritySupport: false,
    customIntegrations: false,
  })

  // Add these state variables in the ProductDetailPage component, after the existing state variables
  const [showAIChat, setShowAIChat] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "ai",
      message:
        "Hi there! I'm your AI assistant for this product. How can I help you understand more about this solution?",
    },
  ])
  const [messageInput, setMessageInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showAIExplainer, setShowAIExplainer] = useState(false)
  const [explainerTopic, setExplainerTopic] = useState("")
  const [explainerContent, setExplainerContent] = useState("")

  useEffect(() => {
    // In a real app, this would be an API call
    const foundProduct = productsData.find((p) => p.id === productId)
    setProduct(foundProduct || null)
    setLoading(false)
  }, [productId])

  // Calculate price based on configuration
  const calculatePrice = () => {
    if (!product || !product.pricing) return 0

    let price = product.pricing.calculator.basePrice

    // Add cost for resources
    for (const range of product.pricing.calculator.resourceRanges) {
      if (resources > range.min) {
        const resourcesInRange = Math.min(resources, range.max) - range.min
        price += resourcesInRange * range.price
      }
    }

    // Add addons
    if (addons.advancedSecurity) price += 199
    if (addons.prioritySupport) price += 299
    if (addons.customIntegrations) price += 499

    // Apply annual discount
    if (annualBilling) {
      price = price * 10 // 10 months for annual (2 months free)
      return Math.round(price / 12)
    }

    return Math.round(price)
  }

  // Add these functions inside the ProductDetailPage component, before the return statement

  // Handle chat submission
  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (!messageInput.trim()) return

    // Add user message
    setChatMessages([...chatMessages, { sender: "user", message: messageInput }])
    setMessageInput("")
    setIsTyping(true)

    // Simulate AI response after delay
    setTimeout(() => {
      let response
      const lowerMsg = messageInput.toLowerCase()
      const productName = product?.name || "our product"

      if (lowerMsg.includes("price") || lowerMsg.includes("cost") || lowerMsg.includes("pricing")) {
        response = `${productName} offers flexible pricing plans starting at $499/month for the Standard plan. The Professional plan at $999/month includes additional features like advanced cost optimization and 24/7 support. For enterprise needs, we offer custom pricing based on your specific requirements. Would you like me to explain any specific plan in more detail?`
      } else if (lowerMsg.includes("trial") || lowerMsg.includes("free")) {
        response = `Yes, we offer a 14-day free trial for ${productName} with full access to all features. No credit card is required to get started, and you can cancel anytime. Would you like me to help you set up a trial account?`
      } else if (lowerMsg.includes("support") || lowerMsg.includes("help")) {
        response = `${productName} comes with different support options depending on your plan. The Standard plan includes 8x5 email support, while the Professional plan offers 24x7 email and phone support. Enterprise customers receive dedicated account management and custom SLAs. How else can I assist you with support questions?`
      } else if (lowerMsg.includes("integration") || lowerMsg.includes("connect")) {
        response = `${productName} integrates seamlessly with popular tools and platforms including DevOps tools (GitHub, GitLab, Jenkins), ITSM platforms (ServiceNow, Jira), security tools (Splunk, Datadog), and identity providers (Okta, Azure AD). Is there a specific integration you're interested in?`
      } else if (lowerMsg.includes("security") || lowerMsg.includes("compliance")) {
        response = `Security is a top priority for ${productName}. We offer comprehensive compliance monitoring for major standards including CIS, NIST, SOC2, HIPAA, and GDPR. Our platform continuously scans your resources against these frameworks and provides remediation guidance. Would you like more details about our security features?`
      } else if (lowerMsg.includes("feature") || lowerMsg.includes("capability")) {
        response = `${productName} offers numerous powerful features including multi-cloud management, automated resource provisioning, cost optimization, security compliance monitoring, real-time performance dashboards, and disaster recovery automation. Which specific feature would you like me to explain in more detail?`
      } else if (lowerMsg.includes("compare") || lowerMsg.includes("competitor") || lowerMsg.includes("vs")) {
        response = `${productName} stands out from competitors with our comprehensive multi-cloud support, advanced cost optimization algorithms that typically save 30% on cloud costs, and our intuitive user interface designed for both technical and non-technical users. Our implementation time is also industry-leading, with most customers fully deployed within days rather than weeks or months. Would you like a specific competitor comparison?`
      } else {
        response = `Thanks for your question about ${productName}. I'd be happy to help you learn more about our solution. Could you please provide more specific details about what you'd like to know? I can explain features, pricing, implementation process, or technical specifications.`
      }

      setChatMessages((prev) => [...prev, { sender: "ai", message: response }])
      setIsTyping(false)
    }, 1500)
  }

  // Handle AI explainer
  const handleExplainTopic = (topic) => {
    setExplainerTopic(topic)
    setShowAIExplainer(true)

    // Generate explanation based on topic
    let explanation = ""

    switch (topic) {
      case "Multi-cloud management":
        explanation = `<strong>Multi-cloud management</strong> refers to the ability to control and monitor cloud resources across different cloud providers (like AWS, Azure, and Google Cloud) from a single interface.
        
        <strong>In simple terms:</strong> Instead of logging into 3 different cloud accounts and learning 3 different systems, you can manage everything in one place with consistent controls.
        
        <strong>Benefits:</strong>
        • Simplified operations - one dashboard for everything
        • Consistent policies across all clouds
        • Reduced training needs for your team
        • Better visibility into your entire cloud infrastructure
        
        <strong>Real-world example:</strong> Imagine you're running applications on AWS, storing data on Azure, and using Google Cloud for AI capabilities. With multi-cloud management, you can see all resources, costs, and security issues in one place, making it much easier to manage your entire cloud ecosystem.`
        break
      case "Cost optimization":
        explanation = `<strong>Cost optimization</strong> is the process of identifying and reducing unnecessary cloud spending while maintaining performance and security.
        
        <strong>In simple terms:</strong> It's like having a financial advisor for your cloud resources that helps you avoid wasting money on unused or oversized resources.
        
        <strong>How it works:</strong>
        • Identifies idle or underutilized resources
        • Recommends right-sizing for instances that are larger than needed
        • Suggests reserved instances or savings plans for predictable workloads
        • Highlights unusual spending patterns or sudden cost increases
        
        <strong>Real-world impact:</strong> Our customers typically see 20-30% reduction in cloud costs within the first 3 months of implementation, without any negative impact on performance or availability.`
        break
      case "Security compliance":
        explanation = `<strong>Security compliance monitoring</strong> continuously checks your cloud resources against industry standards and regulations to ensure you're following best practices and meeting legal requirements.
        
        <strong>In simple terms:</strong> It's like having an automated security expert constantly checking your infrastructure for vulnerabilities or compliance issues.
        
        <strong>Key capabilities:</strong>
        • Automated scanning against major compliance frameworks (CIS, NIST, SOC2, HIPAA, GDPR)
        • Real-time alerts for security violations
        • Guided remediation steps for fixing issues
        • Compliance reporting for audits
        
        <strong>Why it matters:</strong> Security breaches can cost millions in damages and lost trust. Compliance violations can result in heavy fines. Automated compliance monitoring helps prevent these issues before they occur.`
        break
      default:
        explanation = `I'd be happy to explain more about ${topic}. This feature is designed to make your cloud operations more efficient and effective. Would you like more specific information about how it works or its benefits?`
    }

    setExplainerContent(explanation)
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-t-2 border-cyan-400 mx-auto"></div>
          <p>Loading product information...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        <div className="text-center max-w-md px-4">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-slate-400 mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link href="/our-products">
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    )
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
            <Link href="/products" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
              Products
            </Link>
            <Link
              href="/our-products"
              className="text-sm font-medium text-cyan-400 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400 after:transition-transform after:duration-300 after:ease-in-out"
            >
              Our Products
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
        {/* Product Hero Section */}
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                className="flex-1 space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Link href="/our-products" className="text-sm text-slate-400 hover:text-cyan-400">
                    Our Products
                  </Link>
                  <ChevronRight className="h-4 w-4 text-slate-600" />
                  <span className="text-sm text-slate-300">{product.name}</span>
                </div>
                <div className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400 mb-2">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Solution
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                  {product.name}
                </h1>
                <p className="text-xl text-cyan-400 font-medium">{product.tagline}</p>
                <p className="max-w-[600px] text-slate-400 text-lg">{product.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    Schedule Demo
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="flex-1 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative w-full max-w-[500px] aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-[20px]"></div>
                  <div className="relative h-full w-full rounded-lg overflow-hidden border border-slate-800">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-slate-900/80 p-4 rounded-full cursor-pointer hover:bg-slate-900/90 transition-colors">
                        <Play className="h-8 w-8 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product Tabs Section */}
        <section className="w-full py-12 md:py-24 bg-slate-900/50">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="overflow-x-auto -mx-4 px-4">
                <TabsList className="bg-slate-800 border border-slate-700 mb-8 inline-flex w-auto">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="features"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Features
                  </TabsTrigger>
                  <TabsTrigger
                    value="screenshots"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Screenshots
                  </TabsTrigger>
                  <TabsTrigger
                    value="pricing"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Pricing
                  </TabsTrigger>
                  <TabsTrigger
                    value="faq"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    FAQ
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-0">
                <div className="grid gap-8 lg:grid-cols-2 items-start">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">Product Overview</h2>
                      <div className="text-slate-300 space-y-4">
                        {product.longDescription.split("\n\n").map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">Key Benefits</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {product.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="bg-cyan-500/10 p-2 rounded-full mt-0.5">
                              <CheckCircle className="h-5 w-5 text-cyan-400" />
                            </div>
                            <div>
                              <p className="text-slate-300">{benefit}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Customer Success Story</h3>
                      <div className="flex items-start gap-4">
                        <div className="relative h-12 w-12 flex-shrink-0">
                          <Image
                            src={product.testimonial.avatar || "/placeholder.svg"}
                            alt={product.testimonial.author}
                            width={60}
                            height={60}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-slate-300 italic mb-2">"{product.testimonial.quote}"</p>
                          <div>
                            <p className="text-white font-medium">{product.testimonial.author}</p>
                            <p className="text-slate-400 text-sm">{product.testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-700">
                        <Link href={product.caseStudy.link}>
                          <Button
                            variant="outline"
                            className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                          >
                            Read Full Case Study
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Why Choose {product.name}?</h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-cyan-500/10 p-2 rounded-full mt-0.5">
                            <Server className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="text-white font-medium">Multi-cloud Support</h4>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-6 w-6 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400"
                                      onClick={() => handleExplainTopic("Multi-cloud management")}
                                    >
                                      <Sparkles className="h-3.5 w-3.5" />
                                      <span className="sr-only">AI Explain</span>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Get AI explanation</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <p className="text-slate-400">
                              Unified management across AWS, Azure, and Google Cloud Platform.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-cyan-500/10 p-2 rounded-full mt-0.5">
                            <Shield className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="text-white font-medium">Enterprise-Grade Security</h4>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-6 w-6 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400"
                                      onClick={() => handleExplainTopic("Security compliance")}
                                    >
                                      <Sparkles className="h-3.5 w-3.5" />
                                      <span className="sr-only">AI Explain</span>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Get AI explanation</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <p className="text-slate-400">Comprehensive security and compliance controls built-in.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-cyan-500/10 p-2 rounded-full mt-0.5">
                            <Zap className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="text-white font-medium">Rapid Implementation</h4>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-6 w-6 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400"
                                      onClick={() => handleExplainTopic("Rapid Implementation")}
                                    >
                                      <Sparkles className="h-3.5 w-3.5" />
                                      <span className="sr-only">AI Explain</span>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Get AI explanation</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <p className="text-slate-400">
                              Get up and running in days, not months, with our guided setup.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-cyan-500/10 p-2 rounded-full mt-0.5">
                            <BarChart className="h-5 w-5 text-cyan-400" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="text-white font-medium">Actionable Insights</h4>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-6 w-6 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400"
                                      onClick={() => handleExplainTopic("Cost optimization")}
                                    >
                                      <Sparkles className="h-3.5 w-3.5" />
                                      <span className="sr-only">AI Explain</span>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Get AI explanation</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <p className="text-slate-400">
                              AI-powered recommendations for optimization and cost savings.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between border-b border-slate-700 pb-2">
                          <span className="text-slate-300">Deployment Options</span>
                          <span className="text-white">SaaS, Private Cloud, On-Premises</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-700 pb-2">
                          <span className="text-slate-300">Supported Cloud Providers</span>
                          <span className="text-white">AWS, Azure, GCP, VMware</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-700 pb-2">
                          <span className="text-slate-300">Authentication</span>
                          <span className="text-white">SSO, MFA, RBAC</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-700 pb-2">
                          <span className="text-slate-300">API</span>
                          <span className="text-white">RESTful, GraphQL</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-700 pb-2">
                          <span className="text-slate-300">Compliance</span>
                          <span className="text-white">SOC2, HIPAA, GDPR, ISO 27001</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-300">SLA</span>
                          <span className="text-white">99.99% Uptime</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                        Start Free Trial
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download Product Datasheet
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Features Tab */}
              <TabsContent value="features" className="mt-0">
                <div className="space-y-8">
                  <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Features</h2>
                    <p className="text-slate-400">
                      {product.name} offers a complete set of features to help you manage, optimize, and secure your
                      cloud infrastructure.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {product.features.map((feature, index) => (
                      <Card
                        key={index}
                        className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors h-full"
                      >
                        <CardHeader className="pb-2">
                          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3">
                            <Check className="h-5 w-5 text-cyan-400" />
                          </div>
                          <CardTitle className="text-white text-lg flex items-center gap-2">
                            {feature.title}
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400"
                                    onClick={() => handleExplainTopic(feature.title)}
                                  >
                                    <Sparkles className="h-3.5 w-3.5" />
                                    <span className="sr-only">AI Explain</span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Get AI explanation</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-400">{feature.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-8">
                    <div className="grid gap-8 md:grid-cols-2 items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">Enterprise-Ready Integration</h3>
                        <p className="text-slate-300 mb-4">
                          {product.name} seamlessly integrates with your existing tools and workflows, providing a
                          unified experience across your technology stack.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                            <p className="text-slate-300">DevOps tools (GitHub, GitLab, Jenkins, CircleCI)</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                            <p className="text-slate-300">ITSM platforms (ServiceNow, Jira, Zendesk)</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                            <p className="text-slate-300">Security tools (Splunk, Datadog, PagerDuty)</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                            <p className="text-slate-300">Identity providers (Okta, Azure AD, Google Workspace)</p>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-64 rounded-lg overflow-hidden border border-slate-700">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Integration Ecosystem"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Screenshots Tab */}
              <TabsContent value="screenshots" className="mt-0">
                <div className="space-y-8">
                  <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Product Screenshots</h2>
                    <p className="text-slate-400">
                      Take a visual tour of {product.name} and see how it can transform your cloud operations.
                    </p>
                  </div>

                  <div className="grid gap-8">
                    {product.screenshots.map((screenshot, index) => (
                      <div key={index} className="space-y-4">
                        <div className="relative h-[400px] rounded-lg overflow-hidden border border-slate-700">
                          <Image
                            src={screenshot.image || "/placeholder.svg"}
                            alt={screenshot.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                          <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{screenshot.title}</h3>
                            <p className="text-slate-300">{screenshot.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                      Schedule Live Demo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              {/* Pricing Tab */}
              <TabsContent value="pricing" className="mt-0">
                <div className="space-y-12">
                  <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>
                    <p className="text-slate-400">
                      Choose the plan that's right for your business, with flexible options to meet your needs.
                    </p>
                  </div>

                  {/* Pricing Plans */}
                  <div className="grid gap-6 md:grid-cols-3">
                    {product.pricing.plans.map((plan, index) => (
                      <Card
                        key={index}
                        className={`bg-slate-900 border-slate-800 ${plan.popular ? "ring-2 ring-cyan-500/50" : ""} relative h-full flex flex-col`}
                      >
                        {plan.popular && (
                          <div className="absolute top-0 right-0 -mt-2 -mr-2">
                            <Badge className="bg-cyan-500 hover:bg-cyan-600 text-white border-0">Most Popular</Badge>
                          </div>
                        )}
                        <CardHeader>
                          <CardTitle className="text-white text-xl">{plan.name}</CardTitle>
                          <div className="mt-2">
                            <div className="flex items-baseline">
                              {typeof plan.price === "number" ? (
                                <>
                                  <span className="text-3xl font-bold text-white">${plan.price}</span>
                                  <span className="text-slate-400 ml-1">{plan.billing}</span>
                                </>
                              ) : (
                                <span className="text-2xl font-bold text-white">{plan.price}</span>
                              )}
                            </div>
                            {typeof plan.price !== "number" && <p className="text-slate-400 text-sm">{plan.billing}</p>}
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <ul className="space-y-3">
                            {plan.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-3">
                                <Check className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                                <span className="text-slate-300">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className={
                              plan.popular
                                ? "w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                                : "w-full bg-slate-800 hover:bg-slate-700 text-white border-0"
                            }
                          >
                            {plan.cta}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>

                  {/* Custom Pricing Calculator */}
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mt-12">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">Custom Pricing Calculator</h3>
                      <p className="text-slate-400">Estimate your monthly cost based on your specific requirements.</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div className="space-y-6">
                        {/* Resources Slider */}
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label className="text-white">Number of Cloud Resources</Label>
                            <span className="text-cyan-400 font-medium">{resources} resources</span>
                          </div>
                          <Slider
                            defaultValue={[250]}
                            max={1000}
                            step={10}
                            value={[resources]}
                            onValueChange={(value) => setResources(value[0])}
                            className="py-4"
                          />
                          <div className="flex justify-between text-xs text-slate-400">
                            <span>100</span>
                            <span>500</span>
                            <span>1000</span>
                          </div>
                        </div>

                        {/* Billing Toggle */}
                        <div className="space-y-2">
                          <Label className="text-white">Billing Cycle</Label>
                          <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                            <div className="flex items-center gap-2">
                              <Switch checked={annualBilling} onCheckedChange={setAnnualBilling} />
                              <span className="text-white">Annual billing</span>
                              {annualBilling && (
                                <Badge className="bg-green-500/20 text-green-400 border-0">Save 20%</Badge>
                              )}
                            </div>
                            <span className="text-slate-400">
                              {annualBilling ? "Billed annually" : "Billed monthly"}
                            </span>
                          </div>
                        </div>

                        {/* Add-ons */}
                        <div className="space-y-2">
                          <Label className="text-white">Add-ons</Label>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                              <div>
                                <h4 className="text-white font-medium">Advanced Security</h4>
                                <p className="text-sm text-slate-400">
                                  Enhanced security features and compliance controls
                                </p>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-slate-400">$199/mo</span>
                                <Switch
                                  checked={addons.advancedSecurity}
                                  onCheckedChange={(checked) => setAddons({ ...addons, advancedSecurity: checked })}
                                />
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                              <div>
                                <h4 className="text-white font-medium">Priority Support</h4>
                                <p className="text-sm text-slate-400">24/7 support with 2-hour response time</p>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-slate-400">$299/mo</span>
                                <Switch
                                  checked={addons.prioritySupport}
                                  onCheckedChange={(checked) => setAddons({ ...addons, prioritySupport: checked })}
                                />
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-4 border border-slate-700 rounded-lg">
                              <div>
                                <h4 className="text-white font-medium">Custom Integrations</h4>
                                <p className="text-sm text-slate-400">
                                  Custom API integrations with your existing tools
                                </p>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="text-slate-400">$499/mo</span>
                                <Switch
                                  checked={addons.customIntegrations}
                                  onCheckedChange={(checked) => setAddons({ ...addons, customIntegrations: checked })}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Card className="bg-slate-900 border-slate-800 sticky top-24">
                          <CardHeader>
                            <CardTitle className="text-white">Your Custom Plan</CardTitle>
                            <CardDescription className="text-slate-400">
                              Summary of your selected options
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-slate-400">Base plan (Professional)</span>
                                <span className="text-white">${product.pricing.calculator.basePrice}/mo</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-slate-400">Cloud Resources ({resources})</span>
                                <span className="text-white">
                                  ${calculatePrice() - product.pricing.calculator.basePrice}/mo
                                </span>
                              </div>
                              {addons.advancedSecurity && (
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-400">Advanced Security</span>
                                  <span className="text-white">$199/mo</span>
                                </div>
                              )}
                              {addons.prioritySupport && (
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-400">Priority Support</span>
                                  <span className="text-white">$299/mo</span>
                                </div>
                              )}
                              {addons.customIntegrations && (
                                <div className="flex justify-between items-center">
                                  <span className="text-slate-400">Custom Integrations</span>
                                  <span className="text-white">$499/mo</span>
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
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>

                  {/* Enterprise Section */}
                  <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-slate-700 rounded-lg p-8 mt-12">
                    <div className="grid gap-8 md:grid-cols-2 items-center">
                      <div>
                        <Badge className="bg-cyan-500/20 text-cyan-400 border-0 mb-4">Enterprise</Badge>
                        <h3 className="text-2xl font-bold text-white mb-4">Need a Custom Solution?</h3>
                        <p className="text-slate-300 mb-6">
                          Our enterprise plan offers customized solutions tailored to your specific business
                          requirements. Contact our sales team to discuss your needs.
                        </p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                            <p className="text-slate-300">Custom deployment options</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                            <p className="text-slate-300">Dedicated account manager</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                            <p className="text-slate-300">Custom SLAs and support</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                            <p className="text-slate-300">On-site training and implementation</p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button className="bg-white text-slate-900 hover:bg-slate-100">
                            Contact Enterprise Sales
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="relative h-64 rounded-lg overflow-hidden border border-slate-700 hidden md:block">
                        <Image
                          src="/placeholder.svg?height=400&width=600"
                          alt="Enterprise Solutions"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* FAQ Tab */}
              <TabsContent value="faq" className="mt-0">
                <div className="space-y-8">
                  <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-400">Find answers to common questions about {product.name}.</p>
                  </div>

                  <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                      {product.faq.map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <span className="text-white text-left">{item.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-slate-300">{item.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>

                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 max-w-3xl mx-auto">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">Still Have Questions?</h3>
                      <p className="text-slate-400 mb-6">
                        Our team is here to help. Contact us for more information about {product.name}.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                          Contact Support
                        </Button>
                        <Button
                          variant="outline"
                          className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                        >
                          Schedule a Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Related Products
              </h2>
              <p className="max-w-[700px] text-slate-400">Explore other products that complement {product.name}.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {product.relatedProducts.map((relatedId) => {
                const relatedProduct = productsData.find((p) => p.id === relatedId)
                if (!relatedProduct) return null

                return (
                  <Card
                    key={relatedId}
                    className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="relative h-40 w-full">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white">{relatedProduct.name}</CardTitle>
                      <CardDescription className="text-slate-400">{relatedProduct.tagline}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link href={`/our-products/${relatedProduct.id}`} className="w-full">
                        <Button
                          variant="outline"
                          className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                        >
                          Learn More
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                )
              })}
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
                  Ready to Transform Your Cloud Operations?
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed">
                  Start your free 14-day trial of {product.name} and see the difference for yourself.
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
                  Schedule Demo
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

      {/* AI Chat Widget */}
      <div
        className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 transition-all duration-300 ${showAIChat ? "w-[calc(100%-2rem)]" : "w-auto"} ${showAIChat ? "max-w-[350px]" : ""}`}
      >
        {showAIChat ? (
          <Card className="bg-slate-900 border-slate-800 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Bot className="h-5 w-5" />
                  <CardTitle className="text-base">AI Product Assistant</CardTitle>
                </div>
                <X
                  className="h-5 w-5 cursor-pointer hover:text-slate-200 transition-colors"
                  onClick={() => setShowAIChat(false)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-80 overflow-y-auto p-4 space-y-4" id="chat-messages">
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
                  <Textarea
                    placeholder="Ask me anything about this product..."
                    className="bg-slate-800 border-slate-700 text-white min-h-[40px] resize-none"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleChatSubmit(e)
                      }
                    }}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button
            onClick={() => setShowAIChat(true)}
            className="rounded-full w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/20"
          >
            <Bot className="h-6 w-6" />
          </Button>
        )}
      </div>

      {/* AI Explainer Dialog */}
      <Dialog open={showAIExplainer} onOpenChange={setShowAIExplainer}>
        <DialogContent className="bg-slate-900 border border-slate-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span>AI Explanation: {explainerTopic}</span>
            </DialogTitle>
            <DialogDescription className="text-slate-400">Simplified explanation powered by AI</DialogDescription>
          </DialogHeader>
          <div className="text-slate-300 space-y-2" dangerouslySetInnerHTML={{ __html: explainerContent }}></div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                Got it
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>

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
                  <a href="/our-products/techsync-cloud" className="text-slate-400 hover:text-cyan-400 text-sm">
                    TechSync Cloud
                  </a>
                </li>
                <li>
                  <a href="/our-products/data-nexus" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Data Nexus
                  </a>
                </li>
                <li>
                  <a href="/our-products/securedefend" className="text-slate-400 hover:text-cyan-400 text-sm">
                    SecureDefend
                  </a>
                </li>
                <li>
                  <a href="/our-products/devops-accelerator" className="text-slate-400 hover:text-cyan-400 text-sm">
                    DevOps Accelerator
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
                  <a href="/documentation" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Documentation
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
