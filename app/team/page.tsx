"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Layers, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState("leadership")

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

  const teamMembers = {
    leadership: [
      {
        id: 1,
        name: "Alex Johnson",
        role: "Chief Executive Officer",
        bio: "With over 15 years of experience in technology leadership, Alex drives our strategic vision and growth initiatives.",
        image: "/placeholder.svg?height=400&width=400",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        skills: ["Strategic Planning", "Business Development", "Technology Leadership"],
      },
      {
        id: 2,
        name: "Sarah Chen",
        role: "Chief Technology Officer",
        bio: "Sarah leads our technical strategy and innovation, bringing expertise from her background at leading tech companies.",
        image: "/placeholder.svg?height=400&width=400",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        skills: ["Software Architecture", "Cloud Computing", "AI & Machine Learning"],
      },
      {
        id: 3,
        name: "Michael Rodriguez",
        role: "Chief Operations Officer",
        bio: "Michael ensures operational excellence across all our projects and client engagements with his methodical approach.",
        image: "/placeholder.svg?height=400&width=400",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        skills: ["Project Management", "Process Optimization", "Team Leadership"],
      },
    ],
    engineering: [
      {
        id: 4,
        name: "David Kim",
        role: "Lead Software Architect",
        bio: "David designs scalable and robust software architectures that form the foundation of our client solutions.",
        image: "/placeholder.svg?height=400&width=400",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        skills: ["Microservices", "Distributed Systems", "Cloud Architecture"],
      },
      {
        id: 5,
        name: "Emily Patel",
        role: "Frontend Development Lead",
        bio: "Emily leads our frontend development team, creating intuitive and responsive user interfaces.",
        image: "/placeholder.svg?height=400&width=400",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        skills: ["React", "TypeScript", "UI/UX Design"],
      },
      {
        id: 6,
        name: "James Wilson",
        role: "Backend Development Lead",
        bio: "James specializes in building high-performance backend systems that power our enterprise applications.",
        image: "/placeholder.svg?height=400&width=400",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        skills: ["Node.js", "Python", "Database Design"],
      },
      {
        id: 7,
        name: "Sophia Martinez",
        role: "DevOps Engineer",
        bio: "Sophia manages our CI/CD pipelines and infrastructure, ensuring smooth deployments and system reliability.",
        image: "/placeholder.svg?height=400&width=400",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        skills: ["Docker", "Kubernetes", "AWS/Azure"],
      },
    ],
    design: [
      {
        id: 8,
        name: "Ryan Lee",
        role: "UX Design Lead",
        bio: "Ryan leads our user experience design team, creating intuitive and engaging digital experiences.",
        image: "/placeholder.svg?height=400&width=400",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        skills: ["User Research", "Wireframing", "Usability Testing"],
      },
      {
        id: 9,
        name: "Olivia Thompson",
        role: "UI Designer",
        bio: "Olivia crafts beautiful and functional user interfaces that bring our clients' visions to life.",
        image: "/placeholder.svg?height=400&width=400",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        skills: ["Visual Design", "Design Systems", "Prototyping"],
      },
    ],
    product: [
      {
        id: 10,
        name: "Daniel Garcia",
        role: "Product Manager",
        bio: "Daniel translates business requirements into product features, ensuring our solutions meet client needs.",
        image: "/placeholder.svg?height=400&width=400",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        skills: ["Product Strategy", "Agile Methodologies", "Market Research"],
      },
      {
        id: 11,
        name: "Natalie Wong",
        role: "Business Analyst",
        bio: "Natalie bridges the gap between business needs and technical implementation with her analytical skills.",
        image: "/placeholder.svg?height=400&width=400",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
        skills: ["Requirements Gathering", "Process Modeling", "Data Analysis"],
      },
    ],
  }

  const filteredTeamMembers = teamMembers[activeTab] || []

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
              href="/team"
              className="text-sm font-medium text-cyan-400 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-cyan-400 after:transition-transform after:duration-300 after:ease-in-out"
            >
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
                Our Team
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                Meet the Experts Behind TechSync99
              </h1>
              <p className="max-w-[700px] text-slate-400 md:text-xl/relaxed">
                Our talented team brings together diverse expertise to deliver exceptional technology solutions.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="leadership" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-center mb-12 overflow-x-auto pb-2">
                <TabsList className="bg-slate-900 border border-slate-800">
                  <TabsTrigger
                    value="leadership"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Leadership
                  </TabsTrigger>
                  <TabsTrigger
                    value="engineering"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Engineering
                  </TabsTrigger>
                  <TabsTrigger
                    value="design"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Design
                  </TabsTrigger>
                  <TabsTrigger
                    value="product"
                    className="data-[state=active]:bg-cyan-500/20 data-[state=active]:text-cyan-400"
                  >
                    Product
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="leadership" className="mt-0">
                <motion.div
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredTeamMembers.map((member) => (
                    <motion.div key={member.id} variants={item}>
                      <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors group overflow-hidden h-full">
                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                            <div>
                              <h3 className="text-xl font-bold text-white">{member.name}</h3>
                              <p className="text-cyan-400 text-sm">{member.role}</p>
                            </div>
                            <div className="flex space-x-2">
                              <a
                                href={member.social.linkedin}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Linkedin className="h-4 w-4 text-white" />
                              </a>
                              <a
                                href={member.social.twitter}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Twitter className="h-4 w-4 text-white" />
                              </a>
                              <a
                                href={member.social.github}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Github className="h-4 w-4 text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <CardContent className="pt-4">
                          <p className="text-slate-400 text-sm">{member.bio}</p>
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="ghost"
                            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Contact {member.name.split(" ")[0]}
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="engineering" className="mt-0">
                <motion.div
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredTeamMembers.map((member) => (
                    <motion.div key={member.id} variants={item}>
                      <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors group overflow-hidden h-full">
                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                            <div>
                              <h3 className="text-xl font-bold text-white">{member.name}</h3>
                              <p className="text-cyan-400 text-sm">{member.role}</p>
                            </div>
                            <div className="flex space-x-2">
                              <a
                                href={member.social.linkedin}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Linkedin className="h-4 w-4 text-white" />
                              </a>
                              <a
                                href={member.social.twitter}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Twitter className="h-4 w-4 text-white" />
                              </a>
                              <a
                                href={member.social.github}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Github className="h-4 w-4 text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <CardContent className="pt-4">
                          <p className="text-slate-400 text-sm">{member.bio}</p>
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="ghost"
                            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Contact {member.name.split(" ")[0]}
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="design" className="mt-0">
                <motion.div
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredTeamMembers.map((member) => (
                    <motion.div key={member.id} variants={item}>
                      <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors group overflow-hidden h-full">
                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                            <div>
                              <h3 className="text-xl font-bold text-white">{member.name}</h3>
                              <p className="text-cyan-400 text-sm">{member.role}</p>
                            </div>
                            <div className="flex space-x-2">
                              <a
                                href={member.social.linkedin}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Linkedin className="h-4 w-4 text-white" />
                              </a>
                              <a
                                href={member.social.twitter}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Twitter className="h-4 w-4 text-white" />
                              </a>
                              <a
                                href={member.social.github}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Github className="h-4 w-4 text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <CardContent className="pt-4">
                          <p className="text-slate-400 text-sm">{member.bio}</p>
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="ghost"
                            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Contact {member.name.split(" ")[0]}
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="product" className="mt-0">
                <motion.div
                  className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {filteredTeamMembers.map((member) => (
                    <motion.div key={member.id} variants={item}>
                      <Card className="bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-colors group overflow-hidden h-full">
                        <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-end">
                            <div>
                              <h3 className="text-xl font-bold text-white">{member.name}</h3>
                              <p className="text-cyan-400 text-sm">{member.role}</p>
                            </div>
                            <div className="flex space-x-2">
                              <a
                                href={member.social.linkedin}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Linkedin className="h-4 w-4 text-white" />
                              </a>
                              <a
                                href={member.social.twitter}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Twitter className="h-4 w-4 text-white" />
                              </a>
                              <a
                                href={member.social.github}
                                className="bg-slate-800/80 p-2 rounded-full hover:bg-cyan-500/20 transition-colors"
                              >
                                <Github className="h-4 w-4 text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                        <CardContent className="pt-4">
                          <p className="text-slate-400 text-sm">{member.bio}</p>
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-white mb-2">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                              {member.skills.map((skill, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            variant="ghost"
                            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 p-0"
                          >
                            <Mail className="h-4 w-4 mr-2" />
                            Contact {member.name.split(" ")[0]}
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
                  Join Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                  We're Always Looking for Talent
                </h2>
                <p className="text-slate-400">
                  At TechSync99, we're building a team of passionate technologists who are excited about creating
                  innovative solutions for our clients. If you're looking for a challenging and rewarding career in
                  technology, we'd love to hear from you.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-500/10 p-2 rounded-full mt-1">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Collaborative Environment</h3>
                      <p className="text-slate-400">
                        Work with talented professionals in a supportive and collaborative atmosphere.
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
                      <h3 className="text-lg font-semibold text-white">Continuous Learning</h3>
                      <p className="text-slate-400">
                        Access to training, conferences, and resources to help you grow professionally.
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
                      <h3 className="text-lg font-semibold text-white">Challenging Projects</h3>
                      <p className="text-slate-400">
                        Work on diverse and challenging projects across various industries and technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0">
                    View Open Positions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-[20px]"></div>
                  <div className="relative h-full w-full rounded-lg overflow-hidden border border-slate-800">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="Team Collaboration"
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
                  Get in Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-white to-slate-400 text-transparent bg-clip-text">
                  Ready to Work with Our Team?
                </h2>
                <p className="max-w-[900px] text-slate-400 md:text-xl/relaxed">
                  Contact us today to schedule a consultation and discover how TechSync99's expert team can help you
                  achieve your digital goals.
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
