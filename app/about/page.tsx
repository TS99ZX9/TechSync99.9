"use client"

import { useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Award, BarChart, Building, Clock, Layers, Lightbulb, Target, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("story")

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

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-950">
          <p className="text-white">Loading...</p>
        </div>
      }
    >
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
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
                Projects
              </Link>
              <Link href="/team" className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors">
                Team
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-cyan-400 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400 after:transition-transform after:duration-300 after:ease-in-out"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
              >
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
                  About Us
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                  Driving Digital Innovation
                </h1>
                <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
                  Learn about our journey, mission, and the values that drive us to create exceptional technology
                  solutions.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24">
            <div className="container px-4 md:px-6">
              <Tabs defaultValue="story" className="w-full" onValueChange={setActiveTab}>
                <div className="flex justify-center mb-12 overflow-x-auto pb-2">
                  <TabsList className="bg-slate-900 border border-slate-800">
                    <TabsTrigger
                      value="story"
                      className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                    >
                      Our Story
                    </TabsTrigger>
                    <TabsTrigger
                      value="mission"
                      className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                    >
                      Mission & Vision
                    </TabsTrigger>
                    <TabsTrigger
                      value="values"
                      className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                    >
                      Core Values
                    </TabsTrigger>
                    <TabsTrigger
                      value="timeline"
                      className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                    >
                      Timeline
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="story" className="mt-0">
                  <div className="grid gap-8 lg:grid-cols-2 items-center">
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                        Our Journey
                      </h2>
                      <p className="text-slate-400">
                        Founded in 2018, TechSync99 began with a simple mission: to help businesses leverage technology
                        to achieve their full potential. What started as a small team of passionate technologists has
                        grown into a dynamic company serving clients across industries and geographies.
                      </p>
                      <p className="text-slate-400">
                        Our founders, Alex Johnson and Sarah Chen, recognized a gap in the market for technology
                        solutions that truly aligned with business objectives. Too often, they saw companies investing
                        in technology for technology's sake, without a clear understanding of how it would drive
                        business value.
                      </p>
                      <p className="text-slate-400">
                        Drawing on their combined experience in software development, enterprise architecture, and
                        business strategy, they built TechSync99 on the principle that technology should be an enabler
                        of business success, not just a cost center.
                      </p>
                      <p className="text-slate-400">
                        Today, we're proud to have helped hundreds of clients across finance, healthcare, retail,
                        manufacturing, and other sectors transform their operations through thoughtful application of
                        technology. Our team has grown to include experts across a wide range of disciplines, but we
                        remain committed to our founding principle: technology that drives real business value.
                      </p>
                    </motion.div>
                    <motion.div
                      className="flex justify-center"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="relative w-full max-w-[500px] aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-[20px]"></div>
                        <div className="relative h-full w-full rounded-lg overflow-hidden border border-slate-800">
                          <Image
                            src="/placeholder.svg?height=500&width=500"
                            alt="TechSync99 Team"
                            width={500}
                            height={500}
                            className="object-cover h-full w-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </TabsContent>

                <TabsContent value="mission" className="mt-0">
                  <div className="grid gap-8 lg:grid-cols-2 items-center">
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                          Our Mission
                        </h2>
                        <p className="text-slate-400">
                          To empower businesses through innovative technology solutions that drive growth, efficiency,
                          and competitive advantage. We strive to be a trusted partner in our clients' digital journeys,
                          delivering exceptional value through our expertise, creativity, and commitment to excellence.
                        </p>
                        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mt-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-cyan-500/10 p-2 rounded-full">
                              <Target className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">What We Do</h3>
                          </div>
                          <p className="text-slate-400">
                            We design, develop, and implement technology solutions that solve real business problems.
                            From custom software development to enterprise systems integration, we help organizations
                            leverage technology to achieve their strategic objectives.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-4 mt-8">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                          Our Vision
                        </h2>
                        <p className="text-slate-400">
                          To be the leading technology partner for businesses undergoing digital transformation,
                          recognized for our technical excellence, business acumen, and client-centric approach. We
                          envision a world where technology enables every organization to reach its full potential.
                        </p>
                        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mt-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="bg-cyan-500/10 p-2 rounded-full">
                              <Lightbulb className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Where We're Going</h3>
                          </div>
                          <p className="text-slate-400">
                            We're building a company that leads the industry in innovation, attracts the best talent,
                            and consistently delivers exceptional results for our clients. Our goal is to be at the
                            forefront of emerging technologies while maintaining our commitment to practical,
                            value-driven solutions.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex justify-center"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="relative w-full max-w-[500px] aspect-square">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-[20px]"></div>
                        <div className="relative h-full w-full rounded-lg overflow-hidden border border-slate-800">
                          <Image
                            src="/placeholder.svg?height=500&width=500"
                            alt="Mission and Vision"
                            width={500}
                            height={500}
                            className="object-cover h-full w-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </TabsContent>

                <TabsContent value="values" className="mt-0">
                  <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center max-w-3xl mx-auto">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text mb-4">
                        Our Core Values
                      </h2>
                      <p className="text-slate-400">
                        These principles guide everything we do, from how we develop solutions to how we interact with
                        clients and each other.
                      </p>
                    </div>

                    <motion.div
                      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                      variants={container}
                      initial="hidden"
                      animate="show"
                    >
                      <motion.div variants={item}>
                        <Card className="bg-slate-900 border-slate-800 h-full">
                          <CardContent className="p-6">
                            <div className="bg-cyan-500/10 p-3 rounded-full w-fit mb-4">
                              <Award className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                            <p className="text-slate-400">
                              We strive for excellence in everything we do, from the quality of our code to the service
                              we provide our clients. We're never satisfied with "good enough" and continuously push
                              ourselves to improve.
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div variants={item}>
                        <Card className="bg-slate-900 border-slate-800 h-full">
                          <CardContent className="p-6">
                            <div className="bg-cyan-500/10 p-3 rounded-full w-fit mb-4">
                              <Users className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
                            <p className="text-slate-400">
                              We believe the best solutions come from working together. We foster a collaborative
                              environment where diverse perspectives are valued and everyone's contribution matters.
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div variants={item}>
                        <Card className="bg-slate-900 border-slate-800 h-full">
                          <CardContent className="p-6">
                            <div className="bg-cyan-500/10 p-3 rounded-full w-fit mb-4">
                              <Lightbulb className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                            <p className="text-slate-400">
                              We embrace new technologies and approaches, constantly seeking better ways to solve
                              problems. Innovation is not just about the latest tech—it's about finding creative
                              solutions to complex challenges.
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div variants={item}>
                        <Card className="bg-slate-900 border-slate-800 h-full">
                          <CardContent className="p-6">
                            <div className="bg-cyan-500/10 p-3 rounded-full w-fit mb-4">
                              <Building className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
                            <p className="text-slate-400">
                              We operate with honesty, transparency, and ethical behavior in all our interactions. We do
                              what we say we'll do and take responsibility for our actions.
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div variants={item}>
                        <Card className="bg-slate-900 border-slate-800 h-full">
                          <CardContent className="p-6">
                            <div className="bg-cyan-500/10 p-3 rounded-full w-fit mb-4">
                              <Target className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Client Focus</h3>
                            <p className="text-slate-400">
                              Our clients' success is our success. We're committed to understanding their needs,
                              exceeding their expectations, and building long-term relationships based on trust and
                              mutual benefit.
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>

                      <motion.div variants={item}>
                        <Card className="bg-slate-900 border-slate-800 h-full">
                          <CardContent className="p-6">
                            <div className="bg-cyan-500/10 p-3 rounded-full w-fit mb-4">
                              <BarChart className="h-6 w-6 text-cyan-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Results-Driven</h3>
                            <p className="text-slate-400">
                              We focus on delivering measurable outcomes that drive business value. Technology is a
                              means to an end—the end being tangible improvements in our clients' operations,
                              efficiency, and bottom line.
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="timeline" className="mt-0">
                  <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-center max-w-3xl mx-auto">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text mb-4">
                        Our Journey Through Time
                      </h2>
                      <p className="text-slate-400">
                        From our founding to the present day, these milestones have shaped our growth and evolution.
                      </p>
                    </div>

                    <div className="relative border-l border-slate-700 ml-6 pl-8 space-y-12">
                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        <div className="absolute -left-14 bg-slate-900 border border-slate-700 rounded-full p-2">
                          <Clock className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-cyan-400"></div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">2018 - Foundation</h3>
                          <p className="text-slate-400">
                            TechSync99 was founded by Alex Johnson and Sarah Chen with a vision to bridge the gap
                            between technology and business needs. The company started with a team of 5 passionate
                            technologists working from a small office in San Francisco.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="absolute -left-14 bg-slate-900 border border-slate-700 rounded-full p-2">
                          <Clock className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-cyan-400"></div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">2019 - First Major Client</h3>
                          <p className="text-slate-400">
                            Secured our first enterprise client, a regional financial institution, for whom we developed
                            a custom financial management system. This project established our reputation for delivering
                            high-quality enterprise solutions.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <div className="absolute -left-14 bg-slate-900 border border-slate-700 rounded-full p-2">
                          <Clock className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-cyan-400"></div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">2020 - Expansion</h3>
                          <p className="text-slate-400">
                            Despite the global pandemic, we expanded our team to 15 members and shifted to a
                            remote-first work model. Launched our cloud solutions practice to help clients adapt to the
                            new digital landscape.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <div className="absolute -left-14 bg-slate-900 border border-slate-700 rounded-full p-2">
                          <Clock className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-cyan-400"></div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">2021 - Industry Recognition</h3>
                          <p className="text-slate-400">
                            Received industry recognition for our innovative healthcare mobile app, which was named
                            "Healthcare Solution of the Year" by Tech Innovators Magazine. Grew our client base to
                            include organizations in healthcare, retail, and manufacturing.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <div className="absolute -left-14 bg-slate-900 border border-slate-700 rounded-full p-2">
                          <Clock className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-cyan-400"></div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">2022 - Strategic Partnerships</h3>
                          <p className="text-slate-400">
                            Formed strategic partnerships with leading technology providers to enhance our service
                            offerings. Launched our AI and data analytics practice to help clients leverage the power of
                            their data.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        className="relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <div className="absolute -left-14 bg-slate-900 border border-slate-700 rounded-full p-2">
                          <Clock className="h-5 w-5 text-cyan-400" />
                        </div>
                        <div className="absolute -left-[9px] h-4 w-4 rounded-full bg-cyan-400"></div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white">2023 - Present</h3>
                          <p className="text-slate-400">
                            Today, TechSync99 has grown to a team of 30+ professionals serving clients globally. We've
                            opened a second office in Austin, TX, and continue to expand our service offerings to meet
                            the evolving needs of our clients.
                          </p>
                        </div>
                      </motion.div>
                    </div>
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
                    Why Choose Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                    What Sets Us Apart
                  </h2>
                  <p className="text-slate-400">
                    At TechSync99, we combine technical expertise with business acumen to deliver solutions that drive
                    real value. Here's what makes us different:
                  </p>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                          1
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Business-First Approach</h3>
                        <p className="text-slate-400">
                          We start with your business objectives and work backward to design technology solutions that
                          help you achieve them.
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
                        <h3 className="text-lg font-semibold text-white">Technical Excellence</h3>
                        <p className="text-slate-400">
                          Our team comprises top-tier talent with expertise across a wide range of technologies and
                          domains.
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
                        <h3 className="text-lg font-semibold text-white">Collaborative Partnership</h3>
                        <p className="text-slate-400">
                          We work with you as partners, not just vendors, ensuring alignment at every step of the
                          project lifecycle.
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
                        <h3 className="text-lg font-semibold text-white">End-to-End Solutions</h3>
                        <p className="text-slate-400">
                          From strategy and design to development, deployment, and ongoing support, we provide
                          comprehensive services.
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
                        alt="TechSync99 Difference"
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
    </Suspense>
  )
}
