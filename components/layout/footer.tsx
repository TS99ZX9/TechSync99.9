"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  Layers,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <footer className="footer-enhanced">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter section */}
      <div className="container mx-auto container-padding py-16">
        <div className="footer-newsletter mb-16">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h2 className="footer-newsletter-title">Stay Updated with TechSync99</h2>
              <p className="footer-newsletter-text">
                Subscribe to our newsletter to receive the latest news, updates, and exclusive offers.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="enhanced-input min-w-[300px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="interactive-button bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 btn-lg">
                  Subscribe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <motion.div
          className="cards-grid cards-grid-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Column 1: About */}
          <motion.div variants={item} className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-red-500 rounded-lg blur-[6px] opacity-50"></div>
                <div className="relative bg-slate-900 rounded-lg flex items-center justify-center h-full border border-red-500/50">
                  <Layers className="h-6 w-6 text-red-400" />
                </div>
              </div>
              <span className="text-2xl font-bold footer-newsletter-title">TechSync99</span>
            </div>

            <p className="footer-text text-lg leading-relaxed">
              Empowering businesses through innovative technology solutions that drive growth, efficiency, and
              competitive advantage.
            </p>

            <div className="space-y-4">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-lg">+1 (555) 123-4567</span>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-lg">info@techsync99.com</span>
              </div>

              <div className="footer-contact-item">
                <div className="footer-contact-icon">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-lg">123 Tech Avenue, San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="footer-section-title">Our Services</h3>
            <ul className="space-y-3">
              {[
                { name: "Custom Software Development", href: "/services/software-development" },
                { name: "Enterprise Solutions", href: "/services/enterprise-solutions" },
                { name: "Digital Transformation", href: "/services/digital-transformation" },
                { name: "Cloud Solutions", href: "/services/cloud-solutions" },
                { name: "IT Consulting", href: "/services/it-consulting" },
                { name: "Cybersecurity", href: "/services/cybersecurity" },
                { name: "Data Analytics", href: "/services/data-analytics" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link flex items-center text-lg">
                    <ChevronRight className="h-4 w-4 mr-2 text-red-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="footer-section-title">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/team" },
                { name: "Case Studies", href: "/projects" },
                { name: "Careers", href: "/careers" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link flex items-center text-lg">
                    <ChevronRight className="h-4 w-4 mr-2 text-red-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Products & Social */}
          <motion.div variants={item} className="space-y-6">
            <h3 className="footer-section-title">Our Products</h3>
            <ul className="space-y-3 mb-8">
              {[
                { name: "DataFlow", href: "/products#dataflow" },
                { name: "SecureCloud", href: "/products#securecloud" },
                { name: "AnalytiX", href: "/products#analytix" },
                { name: "API Documentation", href: "/docs/api" },
                { name: "Support Center", href: "/support" },
                { name: "System Status", href: "/status" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="footer-link flex items-center text-lg">
                    <ChevronRight className="h-4 w-4 mr-2 text-red-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <h3 className="footer-section-title">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="footer-social-link">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="footer-social-link">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="footer-social-link">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="footer-social-link">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container mx-auto container-padding">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="footer-bottom-text text-lg">© {currentYear} TechSync99. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link href="/privacy" className="footer-bottom-link text-lg">
                Privacy Policy
              </Link>
              <Link href="/terms" className="footer-bottom-link text-lg">
                Terms of Service
              </Link>
              <Link href="/cookies" className="footer-bottom-link text-lg">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
