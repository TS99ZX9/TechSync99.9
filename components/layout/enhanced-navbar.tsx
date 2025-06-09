"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Layers, Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { AdvancedButton } from "@/components/ui/advanced-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { NAVIGATION, METADATA } from "@/lib/constants"

export function EnhancedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

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
      <div className="hidden lg:block w-full bg-gray-900 border-b border-gray-800 py-2 relative z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-3 w-3 text-primary-400" />
              <span className="text-gray-300">{METADATA.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-3 w-3 text-primary-400" />
              <span className="text-gray-300">{METADATA.contact.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {Object.entries(METADATA.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                className="text-gray-400 hover:text-primary-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{name}</span>
                <div className="w-4 h-4 flex items-center justify-center">
                  {name === "twitter" && (
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  )}
                  {name === "facebook" && (
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  )}
                  {name === "linkedin" && (
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {name === "github" && (
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <motion.header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled ? "bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg" : "bg-transparent",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative z-10 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-primary-500 rounded-md blur-[5px] opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gray-950 rounded-md flex items-center justify-center h-full border border-primary-500/50 shadow-lg">
                  <Layers className="h-5 w-5 text-primary-500" />
                </div>
              </div>
              <motion.span
                className="text-xl font-bold text-gradient"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                TechSync99
              </motion.span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {NAVIGATION.main.map((link) => (
                <div key={link.name} className="relative group">
                  {link.submenu ? (
                    <button
                      className={cn(
                        "nav-link flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                        pathname === link.href || pathname.startsWith(`${link.href}/`)
                          ? "text-primary-500 bg-primary-500/10"
                          : "text-gray-300 hover:text-primary-500 hover:bg-primary-500/5",
                      )}
                      onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                      onMouseEnter={() => setActiveSubmenu(link.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200",
                          activeSubmenu === link.name ? "rotate-180" : "",
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "nav-link px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                        pathname === link.href
                          ? "text-primary-500 bg-primary-500/10"
                          : "text-gray-300 hover:text-primary-500 hover:bg-primary-500/5",
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
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="py-2 rounded-xl shadow-xl border bg-gray-900 border-gray-800"
                          >
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                className={cn(
                                  "block px-4 py-2 text-sm transition-all duration-200 font-medium",
                                  pathname === sublink.href
                                    ? "text-primary-500 bg-primary-500/10"
                                    : "text-gray-300 hover:text-primary-500 hover:bg-primary-500/5",
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
            <div className="flex items-center gap-3">
              <ThemeToggle />

              <AdvancedButton
                variant="gradient"
                size="sm"
                rounded="full"
                className="hidden md:flex"
                rightIcon={<ChevronDown className="h-4 w-4" />}
                iconAnimation="slide"
              >
                Get Started
              </AdvancedButton>

              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
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
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />

            <motion.div
              className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-gray-950 shadow-2xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-800">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="relative w-8 h-8">
                    <div className="absolute inset-0 bg-primary-500 rounded-md blur-[5px] opacity-50"></div>
                    <div className="relative bg-gray-950 rounded-md flex items-center justify-center h-full border border-primary-500/50">
                      <Layers className="h-5 w-5 text-primary-500" />
                    </div>
                  </div>
                  <span className="text-xl font-bold text-gradient">TechSync99</span>
                </Link>
                <button
                  className="p-2 rounded-lg text-gray-300 hover:bg-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-4">
                {NAVIGATION.main.map((link, i) => (
                  <div key={link.name} className="mb-2">
                    {link.submenu ? (
                      <>
                        <button
                          className={cn(
                            "flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                            pathname === link.href || pathname.startsWith(`${link.href}/`)
                              ? "text-primary-500 bg-primary-500/10"
                              : "text-gray-300 hover:text-primary-500 hover:bg-primary-500/5",
                          )}
                          onClick={() => setActiveSubmenu(activeSubmenu === link.name ? null : link.name)}
                        >
                          {link.name}
                          <ChevronDown
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
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
                              className="overflow-hidden"
                            >
                              <div className="pl-4 mt-2 space-y-1">
                                {link.submenu.map((sublink) => (
                                  <Link
                                    key={sublink.name}
                                    href={sublink.href}
                                    className={cn(
                                      "block px-4 py-2 text-sm rounded-lg transition-all duration-200",
                                      pathname === sublink.href
                                        ? "text-primary-500 bg-primary-500/10"
                                        : "text-gray-300 hover:text-primary-500 hover:bg-primary-500/5",
                                    )}
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {sublink.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200",
                          pathname === link.href
                            ? "text-primary-500 bg-primary-500/10"
                            : "text-gray-300 hover:text-primary-500 hover:bg-primary-500/5",
                        )}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="mt-6 pt-6 border-t border-gray-800">
                  <AdvancedButton
                    variant="gradient"
                    size="lg"
                    rounded="full"
                    className="w-full"
                    rightIcon={<ChevronDown className="h-4 w-4" />}
                    iconAnimation="slide"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </AdvancedButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
