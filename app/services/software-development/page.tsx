"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Layers } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SoftwareDevelopmentPage() {
  const [activeTab, setActiveTab] = useState("overview")

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
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <motion.div
                className="flex-1 space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400 mb-4">
                  Our Services
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                  Custom Software Development
                </h1>
                <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
                  Tailored software solutions designed to meet your specific business requirements and challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                  >
                    View Our Portfolio
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
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Software Development"
                      width={600}
                      height={400}
                      className="object-cover h-full w-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-12 overflow-x-auto pb-2">
                <TabsList className="bg-slate-900 border border-slate-800">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="web"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Web Applications
                  </TabsTrigger>
                  <TabsTrigger
                    value="mobile"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Mobile Applications
                  </TabsTrigger>
                  <TabsTrigger
                    value="api"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    API Development
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview" className="mt-0">
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                      Tailored Software Solutions for Your Business
                    </h2>
                    <p className="text-slate-400">
                      At TechSync99, we specialize in developing custom software solutions that address your unique
                      business challenges. Our experienced team of developers, designers, and project managers work
                      collaboratively to deliver high-quality, scalable, and secure applications that drive real
                      business value.
                    </p>
                    <p className="text-slate-400">
                      Whether you need a web application, mobile app, API integration, or a complex enterprise system,
                      we have the expertise to bring your vision to life. We follow industry best practices and leverage
                      the latest technologies to ensure your software is robust, maintainable, and future-proof.
                    </p>
                    <div className="space-y-4 pt-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Customized Solutions</h3>
                          <p className="text-slate-400">
                            Software built specifically for your business needs, not off-the-shelf products that require
                            compromises.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Scalable Architecture</h3>
                          <p className="text-slate-400">
                            Solutions designed to grow with your business, handling increased loads and expanding
                            functionality.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Agile Development</h3>
                          <p className="text-slate-400">
                            Iterative approach with regular deliverables and feedback cycles to ensure alignment with
                            your goals.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="relative w-full max-w-[500px] aspect-square">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-[20px]"></div>
                      <div className="relative h-full w-full rounded-lg overflow-hidden border border-slate-800">
                        <Image
                          src="/placeholder.svg?height=500&width=500"
                          alt="Custom Software Development"
                          width={500}
                          height={500}
                          className="object-cover h-full w-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="web" className="mt-0">
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                      Web Application Development
                    </h2>
                    <p className="text-slate-400">
                      Our web application development services focus on creating responsive, user-friendly, and powerful
                      web-based solutions that help businesses streamline operations, improve customer engagement, and
                      drive growth.
                    </p>
                    <p className="text-slate-400">
                      We leverage modern frameworks and technologies to build applications that deliver exceptional user
                      experiences across all devices and platforms. From simple informational websites to complex
                      enterprise applications, we have the expertise to meet your specific requirements.
                    </p>
                    <div className="space-y-4 pt-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Responsive Design</h3>
                          <p className="text-slate-400">
                            Applications that work seamlessly across desktop, tablet, and mobile devices.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Modern Frameworks</h3>
                          <p className="text-slate-400">
                            Utilizing React, Next.js, Angular, and other cutting-edge technologies for optimal
                            performance.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Secure Development</h3>
                          <p className="text-slate-400">
                            Implementing security best practices to protect your data and users.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="relative w-full max-w-[500px] aspect-square">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-[20px]"></div>
                      <div className="relative h-full w-full rounded-lg overflow-hidden border border-slate-800">
                        <Image
                          src="/placeholder.svg?height=500&width=500"
                          alt="Web Application Development"
                          width={500}
                          height={500}
                          className="object-cover h-full w-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="mt-0">
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                      Mobile Application Development
                    </h2>
                    <p className="text-slate-400">
                      Our mobile application development services help businesses engage with customers, streamline
                      operations, and create new revenue streams through innovative mobile solutions. We develop native
                      and cross-platform applications for iOS and Android that deliver exceptional user experiences.
                    </p>
                    <p className="text-slate-400">
                      From concept to deployment and beyond, our team guides you through the entire mobile app
                      development process, ensuring your application meets your business objectives and user
                      expectations.
                    </p>
                    <div className="space-y-4 pt-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Native & Cross-Platform</h3>
                          <p className="text-slate-400">
                            Development options including native iOS/Android or cross-platform using React Native or
                            Flutter.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Intuitive UX/UI</h3>
                          <p className="text-slate-400">
                            User-centered design that ensures your app is intuitive, engaging, and aligned with your
                            brand.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Ongoing Support</h3>
                          <p className="text-slate-400">
                            Maintenance, updates, and enhancements to keep your app performing optimally.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="relative w-full max-w-[500px] aspect-square">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-[20px]"></div>
                      <div className="relative h-full w-full rounded-lg overflow-hidden border border-slate-800">
                        <Image
                          src="/placeholder.svg?height=500&width=500"
                          alt="Mobile Application Development"
                          width={500}
                          height={500}
                          className="object-cover h-full w-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>

              <TabsContent value="api" className="mt-0">
                <div className="grid gap-8 lg:grid-cols-2 items-center">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                      API Development & Integration
                    </h2>
                    <p className="text-slate-400">
                      Our API development and integration services enable seamless communication between different
                      systems and applications. We design, develop, and implement robust APIs that facilitate data
                      exchange, enhance functionality, and improve overall system performance.
                    </p>
                    <p className="text-slate-400">
                      Whether you need to connect disparate systems, integrate with third-party services, or create APIs
                      for your own applications, our team has the expertise to deliver secure, scalable, and
                      well-documented solutions.
                    </p>
                    <div className="space-y-4 pt-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">RESTful & GraphQL APIs</h3>
                          <p className="text-slate-400">
                            Development of modern, efficient APIs using REST or GraphQL based on your specific needs.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Third-Party Integrations</h3>
                          <p className="text-slate-400">
                            Seamless integration with payment gateways, CRMs, ERPs, and other business systems.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">Comprehensive Documentation</h3>
                          <p className="text-slate-400">
                            Clear, detailed API documentation to facilitate easy implementation and usage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="relative w-full max-w-[500px] aspect-square">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-[20px]"></div>
                      <div className="relative h-full w-full rounded-lg overflow-hidden border border-slate-800">
                        <Image
                          src="/placeholder.svg?height=500&width=500"
                          alt="API Development"
                          width={500}
                          height={500}
                          className="object-cover h-full w-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
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
              className="flex flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                  Our Development Process
                </h2>
                <p className="max-w-[700px] text-slate-400">
                  We follow a structured, collaborative approach to ensure your software meets your business needs and
                  exceeds your expectations.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12 max-w-5xl">
                <Card className="bg-slate-900 border-slate-800">
                  <CardContent className="p-6">
                    <div className="bg-cyan-500/10 p-3 rounded-full w-fit mb-4">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                        1
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
                    <p className="text-slate-400">
                      We begin by understanding your business objectives, requirements, and constraints to create a
                      detailed project plan.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900 border-slate-800">
                  <CardContent className="p-6">
                    <div className="bg-cyan-500/10 p-3 rounded-full w-fit mb-4">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                        2
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Design</h3>
                    <p className="text-slate-400">
                      Our team creates detailed technical specifications and user experience designs for your approval.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900 border-slate-800">
                  <CardContent className="p-6">
                    <div className="bg-cyan-500/10 p-3 rounded-full w-fit mb-4">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                        3
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Development</h3>
                    <p className="text-slate-400">
                      We build your solution using agile methodologies, with regular demos and feedback cycles.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-slate-900 border-slate-800">
                  <CardContent className="p-6">
                    <div className="bg-cyan-500/10 p-3 rounded-full w-fit mb-4">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
                        4
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Delivery</h3>
                    <p className="text-slate-400">
                      After thorough testing, we deploy your solution and provide training and ongoing support.
                    </p>
                  </CardContent>
                </Card>
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
                  Ready to Build Your Custom Software?
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed">
                  Contact us today to discuss your project and discover how TechSync99 can help bring your vision to
                  life.
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
