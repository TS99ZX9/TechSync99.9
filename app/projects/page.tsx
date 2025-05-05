"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Code, Database, FileCode, Globe, Layers, Server, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Financial Management System",
      description: "A comprehensive ERP solution for a multinational financial institution",
      category: "enterprise",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Automated reporting system", "Secure transaction processing", "Regulatory compliance features"],
      technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
      client: "Global Finance Corp",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A scalable online shopping platform for a retail chain",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Responsive design", "Integrated payment gateway", "Inventory management system"],
      technologies: ["Next.js", "Stripe", "MongoDB", "AWS"],
      client: "RetailPlus",
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      description: "Patient management app for a leading healthcare provider",
      category: "mobile",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Appointment scheduling", "Secure patient records", "Telemedicine integration"],
      technologies: ["React Native", "Firebase", "HIPAA Compliance", "WebRTC"],
      client: "MediCare Solutions",
    },
    {
      id: 4,
      title: "Supply Chain Management",
      description: "End-to-end supply chain solution for a manufacturing company",
      category: "enterprise",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Real-time inventory tracking", "Predictive analytics", "Supplier management portal"],
      technologies: ["Angular", "Python", "TensorFlow", "Azure"],
      client: "Industrial Innovations",
    },
    {
      id: 5,
      title: "Corporate Website Redesign",
      description: "Modern website overhaul for a professional services firm",
      category: "web",
      image: "/placeholder.svg?height=400&width=600",
      features: ["SEO optimization", "Content management system", "Lead generation features"],
      technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
      client: "Consulting Partners LLC",
    },
    {
      id: 6,
      title: "Logistics Tracking App",
      description: "Real-time shipment tracking app for a logistics company",
      category: "mobile",
      image: "/placeholder.svg?height=400&width=600",
      features: ["GPS integration", "Delivery confirmation system", "Route optimization"],
      technologies: ["Flutter", "Google Maps API", "GraphQL", "MongoDB"],
      client: "FastTrack Logistics",
    },
    {
      id: 7,
      title: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics platform with predictive capabilities",
      category: "ai",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Real-time data visualization", "Predictive modeling", "Custom reporting"],
      technologies: ["React", "Python", "TensorFlow", "D3.js"],
      client: "DataInsight Corp",
    },
    {
      id: 8,
      title: "Smart Home IoT Platform",
      description: "Integrated IoT solution for residential automation",
      category: "iot",
      image: "/placeholder.svg?height=400&width=600",
      features: ["Device management", "Energy optimization", "Voice control integration"],
      technologies: ["Node.js", "MQTT", "React Native", "AWS IoT"],
      client: "SmartLiving Technologies",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  const getCategoryIcon = (category) => {
    switch (category) {
      case "enterprise":
        return <Server className="h-6 w-6 text-cyan-400" />
      case "web":
        return <Globe className="h-6 w-6 text-cyan-400" />
      case "mobile":
        return <Smartphone className="h-6 w-6 text-cyan-400" />
      case "ai":
        return <Database className="h-6 w-6 text-cyan-400" />
      case "iot":
        return <Code className="h-6 w-6 text-cyan-400" />
      default:
        return <FileCode className="h-6 w-6 text-cyan-400" />
    }
  }

  const getCategoryLabel = (category) => {
    switch (category) {
      case "enterprise":
        return "Enterprise"
      case "web":
        return "Web Development"
      case "mobile":
        return "Mobile App"
      case "ai":
        return "AI & Analytics"
      case "iot":
        return "IoT"
      default:
        return category
    }
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
            <Link
              href="/projects"
              className="text-sm font-medium text-cyan-400 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400 after:transition-transform after:duration-300 after:ease-in-out"
            >
              Projects
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
                Our Portfolio
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Showcasing Our Success Stories
              </h1>
              <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
                Explore our portfolio of successful projects that have transformed businesses across industries.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-12 overflow-x-auto pb-2">
                <TabsList className="bg-slate-900 border border-slate-800">
                  <TabsTrigger
                    value="all"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    All Projects
                  </TabsTrigger>
                  <TabsTrigger
                    value="enterprise"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Enterprise
                  </TabsTrigger>
                  <TabsTrigger
                    value="web"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Web Development
                  </TabsTrigger>
                  <TabsTrigger
                    value="mobile"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Mobile Apps
                  </TabsTrigger>
                  <TabsTrigger
                    value="ai"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    AI & Analytics
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeTab} className="mt-0">
                <motion.div
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                  key={activeTab} // Re-render animation when tab changes
                >
                  {filteredProjects.map((project) => (
                    <motion.div key={project.id} variants={item}>
                      <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors group overflow-hidden h-full">
                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-0 right-0 m-4">
                            <Badge className="bg-slate-800/80 hover:bg-slate-800 text-white border-0">
                              {getCategoryLabel(project.category)}
                            </Badge>
                          </div>
                        </div>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <div className="bg-cyan-500/10 p-2 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                            {getCategoryIcon(project.category)}
                          </div>
                          <div>
                            <CardTitle className="text-white">{project.title}</CardTitle>
                            <CardDescription className="text-slate-400 text-sm">
                              Client: {project.client}
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-400 mb-4">{project.description}</p>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                              <ul className="space-y-1">
                                {project.features.map((feature, index) => (
                                  <li key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                                    <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-white mb-2">Technologies</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                  <span
                                    key={index}
                                    className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="outline"
                            className="w-full border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                          >
                            View Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-slate-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <motion.div
              className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400">
                  Our Approach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                  How We Deliver Successful Projects
                </h2>
                <p className="text-slate-400">
                  At TechSync99, we follow a proven methodology to ensure consistent, high-quality delivery of our
                  technology projects.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Discovery & Planning</h3>
                      <p className="text-slate-400">
                        We begin by understanding your business objectives, requirements, and constraints to create a
                        detailed project plan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Design & Architecture</h3>
                      <p className="text-slate-400">
                        Our experts design a tailored solution architecture that addresses your needs while ensuring
                        scalability and security.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Agile Development</h3>
                      <p className="text-slate-400">
                        We use agile methodologies to develop solutions iteratively, with regular client feedback and
                        continuous improvement.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Testing & Quality Assurance</h3>
                      <p className="text-slate-400">
                        Rigorous testing ensures your solution meets all functional requirements and quality standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                        5
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Deployment & Support</h3>
                      <p className="text-slate-400">
                        We manage the deployment process and provide ongoing support to ensure your solution continues
                        to deliver value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-[20px]"></div>
                  <div className="relative h-full w-full rounded-lg overflow-hidden border border-slate-800">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="Project Delivery Approach"
                      width={500}
                      height={500}
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

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
                  Start Your Project
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                  Ready to Build Something Amazing?
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed">
                  Contact us today to discuss your project ideas and discover how TechSync99 can help bring your vision
                  to life.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-cyan-500/20"
                >
                  Schedule a Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  View Our Services
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
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/services/software-development" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Custom Software Development
                  </a>
                </li>
                <li>
                  <a href="/services/enterprise-solutions" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Enterprise Solutions
                  </a>
                </li>
                <li>
                  <a href="/services/digital-transformation" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Digital Transformation
                  </a>
                </li>
                <li>
                  <a href="/services/it-consulting" className="text-slate-400 hover:text-cyan-400 text-sm">
                    IT Consulting
                  </a>
                </li>
                <li>
                  <a href="/services/cloud-solutions" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a href="/services/data-analytics" className="text-slate-400 hover:text-cyan-400 text-sm">
                    Data Analytics
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
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-400 text-sm">
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
                    className="h-4 w-4 text-cyan-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
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
                    className="h-4 w-4 text-cyan-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <span>info@techsync99.com</span>
                </li>
                <li className="flex items-center gap-2 text-slate-400 text-sm">
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
                    className="h-4 w-4 text-cyan-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>123 Tech Avenue, San Francisco, CA 94107</span>
                </li>
              </ul>
              <div className="mt-4">
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                  Contact Us
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
