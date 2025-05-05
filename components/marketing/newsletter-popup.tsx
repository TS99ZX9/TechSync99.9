"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
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
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 10000)

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

    // Close popup after 2 seconds
    setTimeout(() => {
      setIsOpen(false)
    }, 2000)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

          <motion.div
            className={cn(
              "relative max-w-md w-full rounded-2xl overflow-hidden",
              theme === "dark" ? "bg-slate-900" : "bg-white",
            )}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <button
              className="absolute top-4 right-4 p-1 rounded-full bg-slate-200/20 text-slate-700 dark:text-slate-300 hover:bg-slate-200/30 z-10"
              onClick={handleClose}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-theme-red-500 p-6 flex items-center justify-center">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                  <p className="text-white/80">Get the latest news and updates</p>
                </div>
              </div>

              <div className="md:col-span-3 p-6">
                {hasSubscribed ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Thank You!</h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      You've successfully subscribed to our newsletter.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Signup to get latest news</h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      Stay informed about our latest innovations, updates, and special offers.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-theme-red-500 to-theme-red-600 hover:from-theme-red-600 hover:to-theme-red-700 text-white border-0"
                      >
                        Subscribe
                      </Button>
                    </form>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                      By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                    </p>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
