"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Layers, Menu, X, ChevronDown, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Software Development", href: "/services/software-development" },
      { name: "Enterprise Solutions", href: "/services/enterprise-solutions" },
      { name: "Digital Transformation", href: "/services/digital-transformation" },
      { name: "Cloud Solutions", href: "/services/cloud-solutions" },
      { name: "IT Consulting", href: "/services/it-consulting" },
      { name: "Cybersecurity", href: "/services/cybersecurity" },
    ],
  },
  {
    name: "Products",
    href: "/products",
    submenu: [
      { name: "DataFlow", href: "/products#dataflow" },
      { name: "SecureCloud", href: "/products#securecloud" },
      { name: "AnalytiX", href: "/products#analytix" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme } = useTheme()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top info bar */}
      <div className="hidden lg:block w-full bg-theme-red-600 text-white py-2 relative z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-3 w-3" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-3 w-3" />
              <span>info@techsync99.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-3 w-3" />
              <span>123 Tech Avenue, San Francisco, CA</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-white hover:text-white/80 transition-colors">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? theme === "dark"
              ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50"
              : "bg-white/90 backdrop-blur-md border-b border-slate-200/50"
            : "bg-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative z-10">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-theme-red-500 rounded-md blur-[5px] opacity-50"></div>
                <div className="relative bg-slate-950 dark:bg-slate-950 rounded-md flex items-center justify-center h-full border border-theme-red-500/50">
                  <Layers className="h-5 w-5 text-theme-red-400" />
                </div>
              </div>
              <motion.span
                className="text-xl font-bold bg-gradient-to-r from-theme-red-400 to-theme-red-600 text-transparent bg-clip-text"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                TechSync99
              </motion.span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <button
                      className={cn(
                        "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        pathname === link.href || pathname.startsWith(`${link.href}/`)
                          ? "text-theme-red-500"
                          : "text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500",
                      )}
                      onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                      onMouseEnter={() => setActiveSubmenu(link.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        pathname === link.href
                          ? "text-theme-red-500"
                          : "text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500",
                      )}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* Submenu */}
                  {link.submenu && (
                    <div
                      className="absolute left-0 mt-1 w-56 origin-top-left"
                      onMouseEnter={() => setActiveSubmenu(link.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                              "py-2 rounded-md shadow-lg border",
                              theme === "dark" ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200",
                            )}
                          >
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                className={cn(
                                  "block px-4 py-2 text-sm transition-colors",
                                  pathname === sublink.href
                                    ? "text-theme-red-500 bg-theme-red-500/10"
                                    : "text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500 hover:bg-slate-100 dark:hover:bg-slate-800",
                                )}
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side buttons */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              <Button className="hidden md:flex bg-gradient-to-r from-theme-red-500 to-theme-red-600 hover:from-theme-red-600 hover:to-theme-red-700 text-white border-0">
                Get Started
              </Button>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />

            <motion.div
              className={cn(
                "fixed right-0 top-0 bottom-0 w-full max-w-xs p-6 overflow-y-auto",
                theme === "dark" ? "bg-slate-950" : "bg-white",
              )}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 bg-theme-red-500 rounded-md blur-[5px] opacity-50"></div>
                    <div className="relative bg-slate-950 dark:bg-slate-950 rounded-md flex items-center justify-center h-full border border-theme-red-500/50">
                      <Layers className="h-5 w-5 text-theme-red-400" />
                    </div>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-theme-red-400 to-theme-red-600 text-transparent bg-clip-text">
                    TechSync99
                  </span>
                </Link>
                <button
                  className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="py-1">
                    {link.submenu ? (
                      <>
                        <button
                          className={cn(
                            "flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md transition-colors",
                            pathname === link.href || pathname.startsWith(`${link.href}/`)
                              ? "text-theme-red-500 bg-theme-red-500/10"
                              : "text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500 hover:bg-slate-100 dark:hover:bg-slate-800",
                          )}
                          onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                        >
                          {link.name}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform",
                              activeSubmenu === link.name ? "rotate-180" : "",
                            )}
                          />
                        </button>

                        <AnimatePresence>
                          {activeSubmenu === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden ml-4 mt-1"
                            >
                              {link.submenu.map((sublink) => (
                                <Link
                                  key={sublink.name}
                                  href={sublink.href}
                                  className={cn(
                                    "block px-3 py-2 text-sm rounded-md transition-colors",
                                    pathname === sublink.href
                                      ? "text-theme-red-500 bg-theme-red-500/10"
                                      : "text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500 hover:bg-slate-100 dark:hover:bg-slate-800",
                                  )}
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {sublink.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                          pathname === link.href
                            ? "text-theme-red-500 bg-theme-red-500/10"
                            : "text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500 hover:bg-slate-100 dark:hover:bg-slate-800",
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <Button
                  className="w-full bg-gradient-to-r from-theme-red-500 to-theme-red-600 hover:from-theme-red-600 hover:to-theme-red-700 text-white border-0"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-theme-red-500" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-theme-red-500" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">info@techsync99.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-theme-red-500" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      123 Tech Avenue, San Francisco, CA
                    </span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <a
                    href="#"
                    className="text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="text-slate-700 dark:text-slate-300 hover:text-theme-red-500 dark:hover:text-theme-red-500"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
