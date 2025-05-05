"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check, ChevronRight, Download, ExternalLink, Layers, Play, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AIProductRecommender } from "@/components/ai-assistant/ai-product-recommender"

export default function OurProductsPage() {
  const [activeTab, setActiveTab] = useState("all")

  // Company's own products data
  const products = [
    {
      id: "techsync-cloud",
      name: "TechSync Cloud",
      category: "cloud",
      tagline: "Enterprise Cloud Management Platform",
      description:
        "A comprehensive cloud management solution that simplifies infrastructure deployment, monitoring, and optimization across multiple cloud providers.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Multi-cloud management (AWS, Azure, GCP)",
        "Automated resource provisioning",
        "Cost optimization and analytics",
        "Security compliance monitoring",
        "Real-time performance dashboards",
        "Disaster recovery automation",
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
      },
    },
    {
      id: "data-nexus",
      name: "Data Nexus",
      category: "data",
      tagline: "Intelligent Data Integration Platform",
      description:
        "A powerful data integration and transformation platform that connects, cleanses, and enriches data from any source to any destination.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "200+ pre-built connectors",
        "No-code data transformation",
        "Real-time and batch processing",
        "Data quality monitoring",
        "Automated data lineage",
        "Enterprise-grade security",
      ],
      benefits: [
        "Eliminate data silos",
        "Reduce integration development by 70%",
        "Ensure data quality and compliance",
        "Enable real-time analytics",
      ],
      testimonial: {
        quote:
          "Data Nexus has revolutionized how we handle data integration. What used to take months now takes days, and the quality of our data has improved dramatically.",
        author: "Sarah Johnson",
        title: "Data Director, RetailCorp",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      caseStudy: {
        title: "Healthcare Provider Unifies Patient Data Across 50+ Systems",
        description: "See how a major healthcare network integrated their disparate systems with Data Nexus.",
        image: "/placeholder.svg?height=300&width=500",
      },
    },
    {
      id: "securedefend",
      name: "SecureDefend",
      category: "security",
      tagline: "Advanced Cybersecurity Platform",
      description:
        "A comprehensive cybersecurity solution that protects your digital assets with AI-powered threat detection, prevention, and response.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "AI-powered threat detection",
        "Zero-day vulnerability protection",
        "Automated incident response",
        "Endpoint security management",
        "Compliance monitoring and reporting",
        "Security awareness training",
      ],
      benefits: [
        "Reduce security incidents by 75%",
        "Detect threats 10x faster",
        "Automate compliance reporting",
        "Minimize breach impact",
      ],
      testimonial: {
        quote:
          "SecureDefend identified and neutralized a sophisticated attack that our previous solution missed completely. The AI-powered detection is truly next-generation.",
        author: "David Rodriguez",
        title: "CISO, Financial Services Group",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      caseStudy: {
        title: "How a Global Bank Strengthened Their Security Posture",
        description: "Learn how SecureDefend helped a major financial institution protect against advanced threats.",
        image: "/placeholder.svg?height=300&width=500",
      },
    },
    {
      id: "devops-accelerator",
      name: "DevOps Accelerator",
      category: "devops",
      tagline: "End-to-End DevOps Automation",
      description:
        "A complete DevOps platform that automates and streamlines the entire software development lifecycle from code to deployment.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "CI/CD pipeline automation",
        "Infrastructure as code",
        "Containerization and orchestration",
        "Automated testing and quality gates",
        "Release management",
        "Performance monitoring",
      ],
      benefits: [
        "Reduce release cycles by 80%",
        "Improve code quality",
        "Increase deployment frequency",
        "Enhance developer productivity",
      ],
      testimonial: {
        quote:
          "DevOps Accelerator has transformed our development process. We've gone from monthly releases to daily deployments with higher quality and fewer incidents.",
        author: "Jennifer Lee",
        title: "VP of Engineering, SaaS Innovations",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      caseStudy: {
        title: "E-commerce Giant Achieves 10x Faster Deployments",
        description: "Discover how a leading e-commerce company revolutionized their development pipeline.",
        image: "/placeholder.svg?height=300&width=500",
      },
    },
    {
      id: "ai-insights",
      name: "AI Insights",
      category: "ai",
      tagline: "Business Intelligence & Predictive Analytics",
      description:
        "An AI-powered analytics platform that transforms your data into actionable insights and accurate predictions to drive business growth.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Predictive analytics",
        "Natural language querying",
        "Automated data visualization",
        "Anomaly detection",
        "Prescriptive recommendations",
        "Custom ML model deployment",
      ],
      benefits: [
        "Uncover hidden business opportunities",
        "Predict market trends with 85%+ accuracy",
        "Optimize operations with AI",
        "Make data-driven decisions faster",
      ],
      testimonial: {
        quote:
          "AI Insights predicted a market shift that helped us pivot our strategy ahead of competitors. The ROI has been incredible, with a 40% increase in customer acquisition.",
        author: "Alex Thompson",
        title: "CMO, Growth Ventures",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      caseStudy: {
        title: "How AI Insights Helped a Retailer Increase Revenue by 32%",
        description: "See how predictive analytics transformed inventory management and marketing strategies.",
        image: "/placeholder.svg?height=300&width=500",
      },
    },
    {
      id: "customer-360",
      name: "Customer 360",
      category: "crm",
      tagline: "Unified Customer Experience Platform",
      description:
        "A comprehensive CRM and customer experience platform that provides a 360-degree view of your customers across all touchpoints.",
      image: "/placeholder.svg?height=600&width=800",
      features: [
        "Unified customer profiles",
        "Omnichannel engagement",
        "AI-powered customer insights",
        "Journey mapping and optimization",
        "Personalization engine",
        "Customer sentiment analysis",
      ],
      benefits: [
        "Increase customer retention by 45%",
        "Boost conversion rates",
        "Enhance customer satisfaction",
        "Drive personalized experiences",
      ],
      testimonial: {
        quote:
          "Customer 360 has given us insights we never had before. We've improved our NPS score by 35 points and significantly increased customer lifetime value.",
        author: "Rebecca Martinez",
        title: "Customer Experience Director, Retail Chain",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      caseStudy: {
        title: "Telecom Provider Reduces Churn by 60% with Customer 360",
        description: "Learn how a telecom company transformed their customer experience strategy.",
        image: "/placeholder.svg?height=300&width=500",
      },
    },
  ]

  // Filter products based on active tab
  const filteredProducts = activeTab === "all" ? products : products.filter((product) => product.category === activeTab)

  // Categories for filtering
  const categories = [
    { id: "all", name: "All Products" },
    { id: "cloud", name: "Cloud Solutions" },
    { id: "data", name: "Data Management" },
    { id: "security", name: "Security" },
    { id: "devops", name: "DevOps" },
    { id: "ai", name: "AI & Analytics" },
    { id: "crm", name: "Customer Experience" },
  ]

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
        {/* Hero Section */}
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
                Innovative Solutions
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Our Product Portfolio
              </h1>
              <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
                Discover our suite of innovative products designed to transform your business and drive digital
                excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  Schedule a Demo
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-slate-900/50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Find Your Perfect Solution
              </h2>
              <p className="max-w-[700px] text-slate-400 mx-auto">
                Answer a few questions and our AI will recommend the best product for your needs.
              </p>
            </div>
            <AIProductRecommender />
          </div>
        </section>

        {/* Product Filter Section */}
        <section className="w-full py-8 bg-slate-900/50">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="overflow-x-auto -mx-4 px-4">
                <TabsList className="bg-slate-800 border border-slate-700 mb-8 inline-flex w-auto">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-0">
                <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="h-full"
                    >
                      <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors h-full flex flex-col">
                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <CardHeader>
                          <div className="space-y-1">
                            <Badge className="bg-slate-800 text-slate-300 hover:bg-slate-700 border-0">
                              {categories.find((c) => c.id === product.category)?.name || product.category}
                            </Badge>
                            <CardTitle className="text-xl text-white">{product.name}</CardTitle>
                            <CardDescription className="text-slate-400">{product.tagline}</CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden border border-slate-800">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <p className="text-slate-400 mb-4">{product.description}</p>
                          <div className="space-y-2">
                            <h4 className="text-sm font-medium text-white">Key Features:</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {product.features.slice(0, 3).map((feature, index) => (
                                <div key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                                  <Check className="h-4 w-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                            {product.features.length > 3 && (
                              <p className="text-cyan-400 text-sm">+{product.features.length - 3} more features</p>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter className="border-t border-slate-800 pt-4">
                          <div className="flex flex-col w-full gap-2">
                            <Link href={`/our-products/${product.id}`}>
                              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                                Learn More
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Button>
                            </Link>
                            <Button
                              variant="outline"
                              className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                            >
                              Request Demo
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Product Section */}
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                Featured Product
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                TechSync Cloud
              </h2>
              <p className="max-w-[700px] text-slate-400">
                Our flagship cloud management platform that simplifies infrastructure deployment, monitoring, and
                optimization.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="relative rounded-lg overflow-hidden border border-slate-800">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="TechSync Cloud Dashboard"
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

              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">Enterprise Cloud Management Platform</h3>
                  <p className="text-slate-400">
                    TechSync Cloud provides a unified interface to manage, monitor, and optimize your cloud
                    infrastructure across AWS, Azure, and Google Cloud Platform.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-medium text-white">Key Benefits:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {products[0].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 text-slate-300">
                        <div className="bg-cyan-500/10 p-1 rounded-full mt-0.5">
                          <Check className="h-4 w-4 text-cyan-400" />
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <Image
                        src={products[0].testimonial.avatar || "/placeholder.svg"}
                        alt={products[0].testimonial.author}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-slate-300 italic mb-2">"{products[0].testimonial.quote}"</p>
                      <div>
                        <p className="text-white font-medium">{products[0].testimonial.author}</p>
                        <p className="text-slate-400 text-sm">{products[0].testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                    Get Started
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
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="w-full py-12 md:py-24 bg-slate-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Customer Case Studies
              </h2>
              <p className="max-w-[700px] text-slate-400">
                See how our products have helped organizations across industries achieve their digital transformation
                goals.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 3).map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors h-full">
                    <div className="relative w-full h-40">
                      <Image
                        src={product.caseStudy.image || "/placeholder.svg"}
                        alt={product.caseStudy.title}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <Badge className="bg-cyan-500/20 text-cyan-400 border-0">{product.name}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white">{product.caseStudy.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-400">{product.caseStudy.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        variant="outline"
                        className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                      >
                        Read Case Study
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Our Products */}
        <section className="w-full py-12 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                The TechSync99 Advantage
              </h2>
              <p className="max-w-[700px] text-slate-400">
                Our products are built with enterprise-grade quality, security, and scalability to meet the demands of
                modern businesses.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-cyan-400"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <CardTitle className="text-white">Enterprise Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">
                    All our products are built with security-first architecture, featuring end-to-end encryption,
                    regular security audits, and compliance with industry standards.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-cyan-400"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <path d="M3.29 7 12 12l8.71-5" />
                      <path d="M12 22V12" />
                    </svg>
                  </div>
                  <CardTitle className="text-white">Scalable Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">
                    Our products are designed to scale seamlessly from startups to enterprise, handling growing
                    workloads without compromising performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-cyan-400"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="m4.9 4.9 14.2 14.2" />
                      <path d="M12 2v2" />
                      <path d="M12 20v2" />
                      <path d="m2 12 2 0" />
                      <path d="m20 12 2 0" />
                      <path d="m6.3 6.3-1.4-1.4" />
                      <path d="m19.1 19.1-1.4-1.4" />
                      <path d="m19.1 4.9-1.4 1.4" />
                      <path d="m6.3 17.7-1.4 1.4" />
                    </svg>
                  </div>
                  <CardTitle className="text-white">AI-Powered Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">
                    We integrate cutting-edge AI and machine learning capabilities to deliver intelligent automation,
                    predictive insights, and enhanced user experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-cyan-400"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <CardTitle className="text-white">24/7 Expert Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400">
                    Our dedicated support team is available around the clock to ensure your success, with enterprise
                    customers receiving priority assistance and dedicated account managers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-slate-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">Testimonials</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                What Our Customers Say
              </h2>
              <p className="max-w-[700px] text-slate-400">
                Hear from organizations that have transformed their operations with our products.
              </p>
            </div>

            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 3).map((product) => (
                <Card key={product.id} className="bg-slate-900 border-slate-800">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400" fill="#facc15" />
                      ))}
                    </div>
                    <p className="text-slate-300 italic mb-6">"{product.testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
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
                        <p className="text-white font-medium">{product.testimonial.author}</p>
                        <p className="text-slate-400 text-sm">{product.testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                  Discover how our products can help you achieve your digital transformation goals.
                </p>
              </div>
              <div className="flex flex-col xs:flex-row gap-3 md:gap-4 mt-6 md:mt-8 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/20"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  View Product Catalog
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

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
                  <a href="#techsync-cloud" className="text-slate-400 hover:text-cyan-400 text-sm">
                    TechSync Cloud
                  </a>
                </li>
                <li>
                  <a href="#data-nexus" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Data Nexus
                  </a>
                </li>
                <li>
                  <a href="#securedefend" className="text-slate-400 hover:text-cyan-400 text-sm">
                    SecureDefend
                  </a>
                </li>
                <li>
                  <a href="#devops-accelerator" className="text-slate-400 hover:text-cyan-400 text-sm">
                    DevOps Accelerator
                  </a>
                </li>
                <li>
                  <a href="#ai-insights" className="text-slate-400 hover:text-cyan-400 text-sm">
                    AI Insights
                  </a>
                </li>
                <li>
                  <a href="#customer-360" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Customer 360
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
