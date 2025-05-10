"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  ChevronRight,
  Code,
  Globe,
  Layers,
  MessageSquare,
  Server,
  Shield,
  Star,
  CheckCircle,
  ArrowUpRight,
  Users,
  Zap,
  BarChart,
  Award,
  FileCode,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionTransition } from "@/components/animations/section-transition"
import { AnimatedText } from "@/components/animations/animated-text"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import { useAnimation } from "@/components/animations/animation-context"
import { InteractiveElement } from "@/components/animations/interactive-element"

export default function Home() {
  const { theme } = useTheme()
  const { colors, parallax, isReducedMotion } = useAnimation()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Stats counter animation
  const [stats, setStats] = useState({
    clients: 0,
    projects: 0,
    years: 0,
    satisfaction: 0,
  })

  const finalStats = {
    clients: 200,
    projects: 500,
    years: 15,
    satisfaction: 98,
  }

  const { scrollYProgress: statsScrollProgress } = useScroll({
    target: statsRef,
    offset: ["start bottom", "end bottom"],
  })

  useEffect(() => {
    const unsubscribe = statsScrollProgress.on("change", (value) => {
      if (value > 0) {
        // Start counting when section is in view
        const duration = 2000 // 2 seconds
        const interval = 20 // Update every 20ms
        const steps = duration / interval

        let currentStep = 0

        const timer = setInterval(() => {
          currentStep++
          const progress = currentStep / steps

          if (progress >= 1) {
            setStats(finalStats)
            clearInterval(timer)
          } else {
            setStats({
              clients: Math.floor(finalStats.clients * progress),
              projects: Math.floor(finalStats.projects * progress),
              years: Math.floor(finalStats.years * progress),
              satisfaction: Math.floor(finalStats.satisfaction * progress),
            })
          }
        }, interval)

        return () => clearInterval(timer)
      }
    })

    return () => unsubscribe()
  }, [statsScrollProgress])

  // Testimonials auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      quote:
        "TechSync99 transformed our business operations with their custom software solution. Their team's expertise and dedication to our project exceeded our expectations.",
      author: "Sarah Johnson",
      title: "CTO, EnterpriseIQ",
      avatar: "/placeholder.svg?height=60&width=60",
      logo: "/placeholder.svg?height=40&width=120&text=EnterpriseIQ",
    },
    {
      quote:
        "The cloud migration services provided by TechSync99 were exceptional. They ensured a seamless transition with zero downtime, and our systems are now more efficient than ever.",
      author: "Michael Chen",
      title: "IT Director, HealthTech Solutions",
      avatar: "/placeholder.svg?height=60&width=60",
      logo: "/placeholder.svg?height=40&width=120&text=HealthTech",
    },
    {
      quote:
        "Working with TechSync99 on our digital transformation initiative has been a game-changer. Their strategic approach and technical expertise have given us a competitive edge.",
      author: "Jessica Martinez",
      title: "COO, RetailPlus",
      avatar: "/placeholder.svg?height=60&width=60",
      logo: "/placeholder.svg?height=40&width=120&text=RetailPlus",
    },
  ]

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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        <motion.div
          className="container px-4 md:px-6 relative z-10"
          style={{
            opacity: heroOpacity,
            scale: heroScale,
            y: heroY,
          }}
        >
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-theme-red-500/10 px-3 py-1 text-sm text-theme-red-500 mb-4">
                Innovate. Integrate. Elevate.
              </div>

              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <AnimatedText
                  text="Next-Gen Technology Solutions"
                  type="words"
                  className="bg-gradient-to-r from-white to-slate-400 dark:from-white dark:to-slate-400 text-transparent bg-clip-text"
                />
              </h1>

              <p className="max-w-[600px] text-slate-700 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <AnimatedText
                  text="TechSync99 delivers cutting-edge software development, enterprise solutions, and digital transformation services to help your business thrive in the digital age."
                  delay={0.5}
                />
              </p>

              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <InteractiveElement hoverEffect="lift">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-theme-red-500 to-theme-red-600 hover:from-theme-red-600 hover:to-theme-red-700 text-white border-0 shadow-lg shadow-theme-red-500/20 group"
                    style={{
                      background: colors.primaryGradient,
                      boxShadow: `0 10px 15px -3px ${colors.primary}20`,
                    }}
                  >
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </InteractiveElement>
                <InteractiveElement hoverEffect="color">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-700 dark:border-slate-300 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Explore Services
                  </Button>
                </InteractiveElement>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden"
                    >
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
                  <span className="text-slate-700 dark:text-slate-400 text-sm">from 500+ reviews</span>
                </div>
              </div>
            </div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={
                !isReducedMotion
                  ? {
                      transform: `translate3d(${parallax(0.5).x}px, ${parallax(0.5).y}px, 0) rotate(${parallax(0.5).rotate}deg)`,
                    }
                  : {}
              }
            >
              <div className="relative w-full max-w-[600px] aspect-video rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-theme-red-500/10 via-purple-500/10 to-slate-900/10 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border border-slate-200/20 dark:border-slate-800/20 rounded-xl"></div>

                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Digital Transformation"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="bg-theme-red-500 rounded-full p-4 text-white"
                    style={{ backgroundColor: colors.primary }}
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
                      className="h-6 w-6"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Trusted by logos */}
          <div className="mt-20">
            <p className="text-center text-sm text-slate-700 dark:text-slate-400 mb-6">
              TRUSTED BY LEADING COMPANIES WORLDWIDE
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="h-8 w-32 bg-slate-300/10 dark:bg-slate-700/10 rounded-md flex items-center justify-center"
                >
                  <div className="text-slate-500 dark:text-slate-400 font-semibold">LOGO {i}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p className="text-sm text-slate-700 dark:text-slate-400 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-slate-700 dark:border-slate-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 rounded-full mt-2"
              style={{ backgroundColor: colors.primary }}
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <SectionTransition>
        <section className="w-full py-20 md:py-32 bg-slate-100/50 dark:bg-slate-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-theme-red-500/5 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-theme-red-500/10 px-3 py-1 text-sm text-theme-red-500">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 text-transparent bg-clip-text">
                Comprehensive Technology Solutions
              </h2>
              <p className="max-w-[900px] text-slate-700 dark:text-slate-400 md:text-xl/relaxed">
                We offer a wide range of services to help businesses leverage technology for growth and innovation.
              </p>
            </div>

            <motion.div
              className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Custom Software Development",
                  description:
                    "Tailored software solutions designed to meet your specific business requirements and challenges.",
                  icon: <Code className="h-6 w-6 text-theme-red-500" />,
                  link: "/services/software-development",
                },
                {
                  title: "Enterprise Solutions",
                  description:
                    "Comprehensive enterprise-grade applications to streamline operations and boost productivity.",
                  icon: <Globe className="h-6 w-6 text-theme-red-500" />,
                  link: "/services/enterprise-solutions",
                },
                {
                  title: "Digital Transformation",
                  description:
                    "Strategic guidance and implementation to help your business adapt to the digital landscape.",
                  icon: <Layers className="h-6 w-6 text-theme-red-500" />,
                  link: "/services/digital-transformation",
                },
                {
                  title: "Cloud Solutions",
                  description:
                    "Secure, scalable, and cost-effective cloud services to enhance your business capabilities.",
                  icon: <Server className="h-6 w-6 text-theme-red-500" />,
                  link: "/services/cloud-solutions",
                },
                {
                  title: "IT Consulting",
                  description:
                    "Expert advice on technology strategy, architecture, and implementation to achieve your business goals.",
                  icon: <MessageSquare className="h-6 w-6 text-theme-red-500" />,
                  link: "/services/it-consulting",
                },
                {
                  title: "Cybersecurity",
                  description:
                    "Protect your digital assets with our comprehensive security solutions and best practices.",
                  icon: <Shield className="h-6 w-6 text-theme-red-500" />,
                  link: "/services/cybersecurity",
                },
              ].map((service, index) => (
                <motion.div key={index} variants={item} className="group">
                  <Card
                    className={cn(
                      "h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group-hover:border-theme-red-500/50",
                      theme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200",
                    )}
                  >
                    <div className="h-2 w-full bg-gradient-to-r from-theme-red-500 to-theme-red-600"></div>
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="bg-theme-red-500/10 p-2 rounded-full group-hover:bg-theme-red-500/20 transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className={theme === "dark" ? "text-white" : "text-slate-900"}>
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <CardDescription className="text-slate-700 dark:text-slate-400 mb-4">
                        {service.description}
                      </CardDescription>
                      <Link
                        href={service.link}
                        className="text-theme-red-500 text-sm flex items-center group-hover:underline"
                      >
                        Learn more{" "}
                        <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center mt-12">
              <Button className="bg-gradient-to-r from-theme-red-500 to-theme-red-600 hover:from-theme-red-600 hover:to-theme-red-700 text-white border-0 group">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Stats Section */}
      <SectionTransition>
        <section ref={statsRef} className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-theme-red-500 mb-2">{stats.clients}+</div>
                <p className="text-slate-700 dark:text-slate-400">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-theme-red-500 mb-2">{stats.projects}+</div>
                <p className="text-slate-700 dark:text-slate-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-theme-red-500 mb-2">{stats.years}+</div>
                <p className="text-slate-700 dark:text-slate-400">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-theme-red-500 mb-2">{stats.satisfaction}%</div>
                <p className="text-slate-700 dark:text-slate-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Why Choose Us Section */}
      <SectionTransition>
        <section className="w-full py-20 md:py-32 bg-slate-100/50 dark:bg-slate-900/50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-theme-red-500/5 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-theme-red-500/10 px-3 py-1 text-sm text-theme-red-500">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 text-transparent bg-clip-text">
                  Driving Digital Excellence
                </h2>
                <p className="text-slate-700 dark:text-slate-400 md:text-xl/relaxed">
                  At TechSync99, we combine technical expertise with business acumen to deliver solutions that drive
                  real value and competitive advantage.
                </p>

                <div className="space-y-6 pt-4">
                  {[
                    {
                      title: "Cutting-Edge Technology",
                      description:
                        "We stay ahead of the curve, utilizing the latest technologies and methodologies to deliver superior solutions.",
                      icon: <Zap className="h-5 w-5 text-theme-red-500" />,
                    },
                    {
                      title: "Industry Expertise",
                      description:
                        "Our team brings deep knowledge across multiple industries, ensuring solutions tailored to your specific sector.",
                      icon: <BarChart className="h-5 w-5 text-theme-red-500" />,
                    },
                    {
                      title: "Client-Centric Approach",
                      description:
                        "We prioritize your business goals, working collaboratively to ensure our solutions address your unique challenges.",
                      icon: <Users className="h-5 w-5 text-theme-red-500" />,
                    },
                    {
                      title: "Proven Track Record",
                      description:
                        "With hundreds of successful projects, our experience speaks for itself through measurable client results.",
                      icon: <Award className="h-5 w-5 text-theme-red-500" />,
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="bg-theme-red-500/10 p-2 rounded-full mt-1">{feature.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                        <p className="text-slate-700 dark:text-slate-400">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-r from-theme-red-500/20 to-purple-500/20 rounded-lg blur-[20px]"></div>
                  <div className="relative h-full w-full rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
                    <Image
                      src="/placeholder.svg?height=500&width=500"
                      alt="Technology Innovation"
                      width={500}
                      height={500}
                      className="object-cover h-full w-full"
                    />
                  </div>

                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-6 -right-6 bg-white dark:bg-slate-900 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-sm font-medium text-slate-900 dark:text-white">99.9% Uptime</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 rounded-lg p-4 shadow-lg border border-slate-200 dark:border-slate-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-theme-red-500" />
                      <span className="text-sm font-medium text-slate-900 dark:text-white">Enterprise Security</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* Testimonials Section */}
      <SectionTransition>
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-theme-red-500/5 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-theme-red-500/10 px-3 py-1 text-sm text-theme-red-500">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 text-transparent bg-clip-text">
                What Our Clients Say
              </h2>
              <p className="max-w-[900px] text-slate-700 dark:text-slate-400 md:text-xl/relaxed">
                Don't just take our word for it. Here's what our clients have to say about working with TechSync99.
              </p>
            </div>

            <div className="mx-auto max-w-4xl">
              <div className="relative">
                {/* Testimonial cards */}
                <div className="overflow-hidden">
                  <div className="relative h-[300px]">
                    {testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        className={cn(
                          "absolute inset-0 p-6 md:p-8 rounded-2xl",
                          theme === "dark"
                            ? "bg-slate-900 border border-slate-800"
                            : "bg-white border border-slate-200",
                        )}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{
                          opacity: activeTestimonial === index ? 1 : 0,
                          x: activeTestimonial === index ? 0 : 100,
                          scale: activeTestimonial === index ? 1 : 0.9,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="flex flex-col h-full justify-between">
                          <div>
                            <div className="mb-6">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="inline-block h-5 w-5 text-yellow-400" fill="#facc15" />
                              ))}
                            </div>
                            <blockquote className="text-xl text-slate-900 dark:text-white italic mb-6">
                              "{testimonial.quote}"
                            </blockquote>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                  src={testimonial.avatar || "/placeholder.svg"}
                                  alt={testimonial.author}
                                  width={60}
                                  height={60}
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <div className="font-semibold text-slate-900 dark:text-white">{testimonial.author}</div>
                                <div className="text-sm text-slate-700 dark:text-slate-400">{testimonial.title}</div>
                              </div>
                            </div>

                            <div className="h-8">
                              <Image
                                src={testimonial.logo || "/placeholder.svg"}
                                alt="Company logo"
                                width={120}
                                height={40}
                                className="h-full w-auto object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Navigation dots */}
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={cn(
                        "w-3 h-3 rounded-full transition-colors",
                        activeTestimonial === index
                          ? "bg-theme-red-500"
                          : "bg-slate-300 dark:bg-slate-700 hover:bg-theme-red-400 dark:hover:bg-theme-red-400",
                      )}
                      onClick={() => setActiveTestimonial(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionTransition>

      {/* CTA Section */}
      <SectionTransition>
        <section className="w-full py-20 md:py-32 bg-gradient-to-b from-slate-100 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-theme-red-500/10 blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-theme-red-500/10 px-3 py-1 text-sm text-theme-red-500">
                Get Started Today
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 text-transparent bg-clip-text">
                Ready to Transform Your Business?
              </h2>
              <p className="max-w-[900px] text-slate-700 dark:text-slate-400 md:text-xl/relaxed">
                Contact us today to schedule a consultation and discover how TechSync99 can help you achieve your
                digital goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-theme-red-500 to-theme-red-600 hover:from-theme-red-600 hover:to-theme-red-700 text-white border-0 shadow-lg shadow-theme-red-500/20 group"
                >
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-700 dark:border-slate-300 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  View Our Portfolio
                </Button>
              </div>

              {/* Floating elements */}
              <div className="relative w-full max-w-4xl mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Free Consultation",
                      description: "Schedule a no-obligation consultation with our experts",
                      icon: <MessageSquare className="h-6 w-6 text-theme-red-500" />,
                      delay: 0.1,
                    },
                    {
                      title: "Custom Proposal",
                      description: "Receive a tailored solution designed for your specific needs",
                      icon: <FileCode className="h-6 w-6 text-theme-red-500" />,
                      delay: 0.2,
                    },
                    {
                      title: "Rapid Implementation",
                      description: "Experience a smooth and efficient project delivery process",
                      icon: <ArrowUpRight className="h-6 w-6 text-theme-red-500" />,
                      delay: 0.3,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={cn(
                        "p-6 rounded-xl",
                        theme === "dark" ? "bg-slate-900 border border-slate-800" : "bg-white border border-slate-200",
                      )}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: item.delay }}
                    >
                      <div className="bg-theme-red-500/10 p-3 rounded-full w-fit mb-4">{item.icon}</div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-slate-700 dark:text-slate-400">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionTransition>
    </div>
  )
}
