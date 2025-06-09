"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Gift } from "lucide-react"
import { AdvancedButton } from "@/components/ui/advanced-button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [hasSubscribed, setHasSubscribed] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    // Check if user has already subscribed or dismissed
    const hasInteracted = localStorage.getItem("newsletterInteracted")

    if (!hasInteracted) {
      // Show popup after 8 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    localStorage.setItem("newsletterInteracted", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the email to your API
    console.log("Subscribing email:", email)

    setHasSubscribed(true)
    localStorage.setItem("newsletterInteracted", "true")

    // Close popup after 3 seconds
    setTimeout(() => {
      setIsOpen(false)
    }, 3000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={handleClose} />

          <motion.div
            className={cn(
              "relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl enhanced-popup",
              theme === "dark" ? "bg-slate-900/95" : "bg-white/95",
            )}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-slate-700 dark:text-slate-300 hover:bg-white/20 z-10 transition-all duration-300 hover:scale-110"
              onClick={handleClose}
            >
              <X className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              {/* Left side - Visual */}
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative text-center text-white z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
                  >
                    <Mail className="h-12 w-12" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl font-bold mb-4"
                  >
                    Stay in the Loop!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-white/90 leading-relaxed"
                  >
                    Get exclusive updates, tech insights, and special offers delivered straight to your inbox.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-8 flex items-center justify-center space-x-2 text-white/80"
                  >
                    <Gift className="h-5 w-5" />
                    <span className="text-sm font-medium">Plus get a welcome bonus!</span>
                  </motion.div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                {hasSubscribed ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6 mx-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Welcome Aboard!</h3>
                    <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                      You've successfully joined our community. Check your inbox for a welcome surprise!
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                      Join 10,000+ Tech Enthusiasts
                    </h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                      Subscribe to our newsletter and be the first to know about cutting-edge technologies, industry
                      insights, and exclusive opportunities.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full h-14 px-6 text-lg rounded-xl border-2 border-gray-200 dark:border-gray-700 focus:border-primary-500 transition-all duration-300"
                        />
                      </div>
                      <AdvancedButton
                        type="submit"
                        variant="gradient"
                        size="lg"
                        className="w-full"
                        rightIcon={<Mail className="h-5 w-5" />}
                      >
                        Subscribe Now
                      </AdvancedButton>
                    </form>

                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-6 text-center leading-relaxed">
                      By subscribing, you agree to our{" "}
                      <a href="#" className="text-primary-500 hover:underline font-medium">
                        Privacy Policy
                      </a>{" "}
                      and consent to receive updates. Unsubscribe anytime.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
