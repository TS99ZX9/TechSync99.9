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
    <div className="min-h-screen section-primary">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding">
        {/* Animated background elements */}
        <motion.div className="absolute inset-0 opacity-30" style={{ y: y1 }}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto container-padding text-center relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="badge-primary mb-8">🚀 Next-Generation Technology Solutions</div>

            <h1 className="mb-8 leading-tight">
              <span className="block">Transform Your Business with</span>
              <span className="block text-gradient">Cutting-Edge Technology</span>
            </h1>

            <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed">
              We deliver innovative software solutions, cloud infrastructure, and digital transformation services that
              propel your business into the future.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <AdvancedButton
                variant="gradient"
                size="xl"
                rounded="full"
                glow={true}
                rightIcon={<ArrowRight className="h-6 w-6" />}
                iconAnimation="slide"
                className="min-w-[250px]"
              >
                Start Your Project
              </AdvancedButton>

              <AdvancedButton
                variant="outline"
                size="xl"
                rounded="full"
                rightIcon={<ChevronRight className="h-6 w-6" />}
                iconAnimation="slide"
                className="min-w-[250px]"
              >
                View Our Work
              </AdvancedButton>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-slate-300">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-blue-500" />
                <span className="text-slate-300">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-yellow-500" />
                <span className="text-slate-300">AWS Partner</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="section-padding section-secondary">
        <div className="container mx-auto container-padding">
          <div className="cards-grid cards-grid-4">
            {stats.map((stat, index) => (
              <InteractiveCard
                key={stat.label}
                hoverEffect="glow"
                delay={index * 0.1}
                size="stats"
                className="text-center"
              >
                <div className="card-content">
                  <div className="card-header">
                    <stat.icon className="h-12 w-12 text-red-500 mx-auto mb-6" />
                  </div>
                  <div className="card-body">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-4">{stat.value}</div>
                    <div className="text-xl text-slate-300">{stat.label}</div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding section-primary">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-20">
            <div className="badge-secondary mb-8">Our Services</div>
            <h2 className="mb-8">Comprehensive Technology Solutions</h2>
            <p className="text-2xl max-w-4xl mx-auto">
              From custom software development to cloud infrastructure, we provide end-to-end technology services that
              drive business growth.
            </p>
          </div>

          <div className="cards-grid cards-grid-2">
            {services.map((service, index) => (
              <InteractiveCard key={service.title} hoverEffect="lift" delay={index * 0.2} size="lg">
                <div className="card-content">
                  <div className="card-header">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 mb-8`}>
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
                  </div>

                  <div className="card-body">
                    <p className="text-xl mb-8 leading-relaxed">{service.description}</p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-lg">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-4 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-footer">
                    <AdvancedButton
                      variant="ghost"
                      rightIcon={<ArrowRight className="h-5 w-5" />}
                      iconAnimation="slide"
                      className="group text-lg"
                    >
                      Learn More
                    </AdvancedButton>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="section-padding section-accent">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-20">
            <div className="badge-accent mb-8">Technologies We Use</div>
            <h2 className="mb-8">Cutting-Edge Tech Stack</h2>
            <p className="text-2xl max-w-4xl mx-auto">
              We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="cards-grid cards-grid-4">
            {technologies.map((tech, index) => (
              <InteractiveCard
                key={tech.name}
                hoverEffect="scale"
                delay={index * 0.1}
                size="sm"
                className="text-center group"
              >
                <div className="card-content">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="text-xl font-medium">{tech.name}</div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding section-primary">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-20">
            <div className="badge-primary mb-8">Client Testimonials</div>
            <h2 className="mb-8">What Our Clients Say</h2>
            <p className="text-2xl max-w-4xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with TechSync99.
            </p>
          </div>

          <div className="cards-grid cards-grid-3">
            {testimonials.map((testimonial, index) => (
              <InteractiveCard key={testimonial.name} hoverEffect="lift" delay={index * 0.2} size="lg">
                <div className="card-content">
                  <div className="card-header">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>

                  <div className="card-body">
                    <p className="text-xl mb-8 leading-relaxed italic">"{testimonial.content}"</p>
                  </div>

                  <div className="card-footer">
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <div className="text-xl font-medium">{testimonial.name}</div>
                        <div className="text-lg text-slate-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding section-secondary">
        <div className="container mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="badge-primary mb-8">Ready to Get Started?</div>

            <h2 className="mb-8">Let's Build Something Amazing Together</h2>

            <p className="text-2xl mb-12 max-w-4xl mx-auto">
              Transform your business with our cutting-edge technology solutions. Contact us today for a free
              consultation and project estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <AdvancedButton
                variant="gradient"
                size="xl"
                rounded="full"
                glow={true}
                rightIcon={<Rocket className="h-6 w-6" />}
                iconAnimation="slide"
                className="min-w-[250px]"
              >
                Start Your Project
              </AdvancedButton>

              <AdvancedButton
                variant="outline"
                size="xl"
                rounded="full"
                rightIcon={<Target className="h-6 w-6" />}
                iconAnimation="slide"
                className="min-w-[250px]"
              >
                Schedule Consultation
              </AdvancedButton>
            </div>

            <div className="mt-12 text-xl text-slate-400">
              <p>✨ Free consultation • 💰 Competitive pricing • 🚀 Fast delivery</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
