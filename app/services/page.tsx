"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  Code,
  Database,
  FileCode,
  Globe,
  Layers,
  Lock,
  Server,
  Settings,
  Smartphone,
  Phone,
  Palette,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ServicesPage() {
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

  const services = [
    {
      id: "software-development",
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements",
      icon: <Code className="h-6 w-6 text-cyan-400" />,
      category: "software",
      features: [
        "Web Application Development",
        "Mobile App Development",
        "API Development & Integration",
        "Legacy System Modernization",
        "UI/UX Design",
        "Quality Assurance & Testing",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "enterprise-solutions",
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise-grade applications to streamline operations",
      icon: <Server className="h-6 w-6 text-cyan-400" />,
      category: "enterprise",
      features: [
        "ERP Implementation",
        "CRM Solutions",
        "Business Intelligence",
        "Workflow Automation",
        "Document Management",
        "Enterprise Integration",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Strategic guidance to help your business adapt to the digital landscape",
      icon: <Globe className="h-6 w-6 text-cyan-400" />,
      category: "digital",
      features: [
        "Digital Strategy Development",
        "Process Automation",
        "Customer Experience Enhancement",
        "Digital Workplace Solutions",
        "IoT Implementation",
        "AI & Machine Learning Integration",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Secure, scalable, and cost-effective cloud services",
      icon: <Database className="h-6 w-6 text-cyan-400" />,
      category: "cloud",
      features: [
        "Cloud Migration",
        "Cloud-Native Development",
        "Multi-Cloud Management",
        "Cloud Security",
        "Serverless Architecture",
        "DevOps Implementation",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "it-consulting",
      title: "IT Consulting",
      description: "Expert advice on technology strategy and implementation",
      icon: <Settings className="h-6 w-6 text-cyan-400" />,
      category: "consulting",
      features: [
        "Technology Strategy",
        "IT Assessment & Planning",
        "Vendor Selection",
        "Project Management",
        "IT Governance",
        "Technology Roadmapping",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: <Lock className="h-6 w-6 text-cyan-400" />,
      category: "security",
      features: [
        "Security Assessment",
        "Penetration Testing",
        "Security Architecture",
        "Compliance Management",
        "Incident Response",
        "Security Training",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "ready-made-designs",
      title: "Ready-Made Designs",
      description: "Premium Figma templates and fully developed websites ready for customization",
      icon: <Palette className="h-6 w-6 text-cyan-400" />,
      category: "design",
      features: [
        "Figma Templates",
        "Developed Websites",
        "E-Commerce Solutions",
        "Portfolio Designs",
        "Blog Templates",
        "Dashboard Interfaces",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="h-6 w-6 text-cyan-400" />,
      category: "mobile",
      features: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Solutions",
        "Mobile UI/UX Design",
        "Mobile App Testing",
        "App Store Optimization",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights",
      icon: <FileCode className="h-6 w-6 text-cyan-400" />,
      category: "data",
      features: [
        "Data Warehousing",
        "Business Intelligence",
        "Predictive Analytics",
        "Data Visualization",
        "Big Data Solutions",
        "Machine Learning Models",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

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
            <Link
              href="/services"
              className="text-sm font-medium text-cyan-400 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400 after:transition-transform after:duration-300 after:ease-in-out"
            >
              Services
            </Link>
            <Link
              href="/services/ready-made-designs"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Ready-Made Designs
            </Link>
            <Link href="/projects" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
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
                Our Services
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Comprehensive Technology Solutions
              </h1>
              <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
                We offer a wide range of services to help businesses leverage technology for growth and innovation.
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
                    All Services
                  </TabsTrigger>
                  <TabsTrigger
                    value="software"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Software Development
                  </TabsTrigger>
                  <TabsTrigger
                    value="enterprise"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Enterprise Solutions
                  </TabsTrigger>
                  <TabsTrigger
                    value="digital"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Digital Transformation
                  </TabsTrigger>
                  <TabsTrigger
                    value="cloud"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Cloud Solutions
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <motion.div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredServices.map((service) => (
                    <motion.div key={service.id} variants={item}>
                      <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors group overflow-hidden h-full">
                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <div className="bg-cyan-500/10 p-2 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                            {service.icon}
                          </div>
                          <CardTitle className="text-white">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                          <CardDescription className="text-slate-400 mb-4">{service.description}</CardDescription>
                          <ul className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Link
                            href={`/services/${service.id}`}
                            className="text-cyan-400 text-sm flex items-center group-hover:underline"
                          >
                            Learn more <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              {/* Other tabs will use the same filtered content */}
              <TabsContent value="software" className="mt-0">
                <motion.div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredServices.map((service) => (
                    <motion.div key={service.id} variants={item}>
                      <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors group overflow-hidden h-full">
                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <div className="bg-cyan-500/10 p-2 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                            {service.icon}
                          </div>
                          <CardTitle className="text-white">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                          <CardDescription className="text-slate-400 mb-4">{service.description}</CardDescription>
                          <ul className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Link
                            href={`/services/${service.id}`}
                            className="text-cyan-400 text-sm flex items-center group-hover:underline"
                          >
                            Learn more <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="enterprise" className="mt-0">
                <motion.div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredServices.map((service) => (
                    <motion.div key={service.id} variants={item}>
                      <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors group overflow-hidden h-full">
                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <div className="bg-cyan-500/10 p-2 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                            {service.icon}
                          </div>
                          <CardTitle className="text-white">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                          <CardDescription className="text-slate-400 mb-4">{service.description}</CardDescription>
                          <ul className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Link
                            href={`/services/${service.id}`}
                            className="text-cyan-400 text-sm flex items-center group-hover:underline"
                          >
                            Learn more <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="digital" className="mt-0">
                <motion.div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredServices.map((service) => (
                    <motion.div key={service.id} variants={item}>
                      <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors group overflow-hidden h-full">
                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <div className="bg-cyan-500/10 p-2 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                            {service.icon}
                          </div>
                          <CardTitle className="text-white">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                          <CardDescription className="text-slate-400 mb-4">{service.description}</CardDescription>
                          <ul className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Link
                            href={`/services/${service.id}`}
                            className="text-cyan-400 text-sm flex items-center group-hover:underline"
                          >
                            Learn more <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="cloud" className="mt-0">
                <motion.div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredServices.map((service) => (
                    <motion.div key={service.id} variants={item}>
                      <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors group overflow-hidden h-full">
                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <div className="bg-cyan-500/10 p-2 rounded-full group-hover:bg-cyan-500/20 transition-colors">
                            {service.icon}
                          </div>
                          <CardTitle className="text-white">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pb-6">
                          <CardDescription className="text-slate-400 mb-4">{service.description}</CardDescription>
                          <ul className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-slate-300 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                        <CardFooter>
                          <Link
                            href={`/services/${service.id}`}
                            className="text-cyan-400 text-sm flex items-center group-hover:underline"
                          >
                            Learn more <ChevronRight className="h-4 w-4 ml-1" />
                          </Link>
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
                  How We Deliver Excellence
                </h2>
                <p className="text-slate-400">
                  At TechSync99, we follow a structured methodology to ensure consistent, high-quality delivery of our
                  technology services.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Discovery & Requirements</h3>
                      <p className="text-slate-400">
                        We begin by thoroughly understanding your business objectives, current systems, and specific
                        requirements.
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
                      <h3 className="text-lg font-semibold text-white">Solution Design</h3>
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
                      <h3 className="text-lg font-semibold text-white">Quality Assurance</h3>
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
                      <h3 className="text-lg font-semibold text-white">Deployment & Training</h3>
                      <p className="text-slate-400">
                        We manage the deployment process and provide comprehensive training to ensure smooth adoption.
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
                      alt="Service Delivery Approach"
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
                  Get Started
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                  Ready to Transform Your Business?
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed">
                  Contact us today to schedule a consultation and discover how TechSync99 can help you achieve your
                  digital goals.
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
                  View Our Portfolio
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
                  <Phone className="h-4 w-4 text-cyan-400" />
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
