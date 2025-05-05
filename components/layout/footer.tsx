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
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function Footer() {
  const { theme } = useTheme()
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
    <footer
      className={cn(
        "relative border-t",
        theme === "dark" ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200",
      )}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-theme-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-theme-red-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Newsletter section */}
      <div className="container mx-auto px-4 py-16">
        <div
          className={cn(
            "relative rounded-2xl p-8 md:p-12 overflow-hidden mb-16",
            theme === "dark" ? "bg-slate-900" : "bg-slate-50",
          )}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-theme-red-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-theme-red-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-theme-red-400 to-theme-red-600 text-transparent bg-clip-text">
                Stay Updated with TechSync99
              </h2>
              <p className="text-slate-700 dark:text-slate-300">
                Subscribe to our newsletter to receive the latest news, updates, and exclusive offers.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-[300px] bg-white dark:bg-slate-800"
                />
                <Button className="bg-gradient-to-r from-theme-red-500 to-theme-red-600 hover:from-theme-red-600 hover:to-theme-red-700 text-white border-0">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* Column 1: About */}
          <motion.div variants={item}>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-theme-red-500 rounded-md blur-[5px] opacity-50"></div>
                <div className="relative bg-slate-950 dark:bg-slate-950 rounded-md flex items-center justify-center h-full border border-theme-red-500/50">
                  <Layers className="h-5 w-5 text-theme-red-400" />
                </div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-theme-red-400 to-theme-red-600 text-transparent bg-clip-text">
                TechSync99
              </span>
            </div>

            <p className="text-slate-700 dark:text-slate-300 mb-6">
              Empowering businesses through innovative technology solutions that drive growth, efficiency, and
              competitive advantage.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-theme-red-500/10 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-theme-red-500" />
                </div>
                <span className="text-slate-700 dark:text-slate-300">+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-theme-red-500/10 flex items-center justify-center">
                  <Mail className="h-4 w-4 text-theme-red-500" />
                </div>
                <span className="text-slate-700 dark:text-slate-300">info@techsync99.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-theme-red-500/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-theme-red-500" />
                </div>
                <span className="text-slate-700 dark:text-slate-300">123 Tech Avenue, San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Our Services</h3>
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
                  <Link
                    href={link.href}
                    className="text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 text-theme-red-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Company</h3>
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
                  <Link
                    href={link.href}
                    className="text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 text-theme-red-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Products */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-6 text-slate-900 dark:text-white">Our Products</h3>
            <ul className="space-y-3">
              {[
                { name: "DataFlow", href: "/products#dataflow" },
                { name: "SecureCloud", href: "/products#securecloud" },
                { name: "AnalytiX", href: "/products#analytix" },
                { name: "API Documentation", href: "/docs/api" },
                { name: "Support Center", href: "/support" },
                { name: "System Status", href: "/status" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 text-theme-red-500" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-theme-red-500/10 flex items-center justify-center text-theme-red-500 hover:bg-theme-red-500 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-theme-red-500/10 flex items-center justify-center text-theme-red-500 hover:bg-theme-red-500 hover:text-white transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-theme-red-500/10 flex items-center justify-center text-theme-red-500 hover:bg-theme-red-500 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-theme-red-500/10 flex items-center justify-center text-theme-red-500 hover:bg-theme-red-500 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className={cn("border-t py-6", theme === "dark" ? "border-slate-800" : "border-slate-200")}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              © {currentYear} TechSync99. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500 text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500 text-sm"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
