"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Shield,
  Code,
  Cloud,
  BarChart3,
  Rocket,
  Target,
  ChevronRight,
} from "lucide-react"

import { AdvancedButton } from "@/components/ui/advanced-button"
import { InteractiveCard } from "@/components/ui/interactive-card"
import { GlowEffect } from "@/components/animations/glow-effect"
import { Container } from "@/components/layouts/container"
import { ELEMENTS } from "@/lib/constants"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 100])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built with cutting-edge technologies to meet your unique business requirements.",
      features: ["Full-stack development", "API integration", "Scalable architecture"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migrate, optimize, and scale your infrastructure with our comprehensive cloud services.",
      features: ["AWS/Azure/GCP", "DevOps automation", "Cost optimization"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with enterprise-grade security solutions and monitoring.",
      features: ["Threat detection", "Compliance", "Security audits"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and AI.",
      features: ["Business intelligence", "Machine learning", "Real-time dashboards"],
      color: "from-orange-500 to-red-500",
    },
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "1000+", label: "Projects Completed" },
    { icon: TrendingUp, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
  ]

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content:
        "TechSync99 transformed our entire infrastructure. Their expertise in cloud migration saved us 40% in operational costs.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "Founder, StartupXYZ",
      content: "The custom software solution they built for us increased our productivity by 300%. Exceptional work!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow Inc",
      content: "Their cybersecurity implementation gave us peace of mind. Professional, thorough, and reliable.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <motion.div className="absolute inset-0 opacity-30" style={{ y: y1 }}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </motion.div>

        <Container className="text-center relative z-10" maxWidth="2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className={ELEMENTS.badges.primary + " mb-6"}>🚀 Next-Generation Technology Solutions</div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Transform Your Business with</span>
              <br />
              <span className="text-gradient">Cutting-Edge Technology</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We deliver innovative software solutions, cloud infrastructure, and digital transformation services that
              propel your business into the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <AdvancedButton
                variant="gradient"
                size="xl"
                rounded="full"
                glow={true}
                rightIcon={<ArrowRight className="h-5 w-5" />}
                iconAnimation="slide"
                className="min-w-[200px]"
              >
                Start Your Project
              </AdvancedButton>

              <AdvancedButton
                variant="outline"
                size="xl"
                rounded="full"
                rightIcon={<ChevronRight className="h-5 w-5" />}
                iconAnimation="slide"
                className="min-w-[200px]"
              >
                View Our Work
              </AdvancedButton>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-500" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                <span>AWS Partner</span>
              </div>
            </div>
          </motion.div>
        </Container>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-gray-900/50">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <InteractiveCard
                key={stat.label}
                hoverEffect="glow"
                delay={index * 0.1}
                className="text-center p-6 bg-gray-800/50 border border-gray-700 rounded-xl"
              >
                <stat.icon className="h-8 w-8 text-primary-500 mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </InteractiveCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          <div className="text-center mb-16">
            <div className={ELEMENTS.badges.secondary + " mb-6"}>Our Services</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Comprehensive Technology Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From custom software development to cloud infrastructure, we provide end-to-end technology services that
              drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <GlowEffect key={service.title} className="h-full">
                <InteractiveCard
                  hoverEffect="lift"
                  delay={index * 0.2}
                  className="h-full p-8 bg-gray-800/50 border border-gray-700 rounded-xl"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <AdvancedButton
                    variant="ghost"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                    iconAnimation="slide"
                    className="group"
                  >
                    Learn More
                  </AdvancedButton>
                </InteractiveCard>
              </GlowEffect>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-gray-900/50">
        <Container>
          <div className="text-center mb-16">
            <div className={ELEMENTS.badges.accent + " mb-6"}>Technologies We Use</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Cutting-Edge Tech Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <InteractiveCard
                key={tech.name}
                hoverEffect="scale"
                delay={index * 0.1}
                className="p-6 bg-gray-800/50 border border-gray-700 rounded-xl text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                <div className="text-white font-medium">{tech.name}</div>
              </InteractiveCard>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <Container>
          <div className="text-center mb-16">
            <div className={ELEMENTS.badges.primary + " mb-6"}>Client Testimonials</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with TechSync99.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <InteractiveCard
                key={testimonial.name}
                hoverEffect="lift"
                delay={index * 0.2}
                className="p-8 bg-gray-800/50 border border-gray-700 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="text-white font-medium">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary-900/20 to-accent-900/20">
        <Container className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={ELEMENTS.badges.primary + " mb-6"}>Ready to Get Started?</div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Build Something Amazing Together</h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our cutting-edge technology solutions. Contact us today for a free
              consultation and project estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AdvancedButton
                variant="gradient"
                size="xl"
                rounded="full"
                glow={true}
                rightIcon={<Rocket className="h-5 w-5" />}
                iconAnimation="slide"
                className="min-w-[200px]"
              >
                Start Your Project
              </AdvancedButton>

              <AdvancedButton
                variant="outline"
                size="xl"
                rounded="full"
                rightIcon={<Target className="h-5 w-5" />}
                iconAnimation="slide"
                className="min-w-[200px]"
              >
                Schedule Consultation
              </AdvancedButton>
            </div>

            <div className="mt-8 text-gray-400">
              <p>✨ Free consultation • 💰 Competitive pricing • 🚀 Fast delivery</p>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}
