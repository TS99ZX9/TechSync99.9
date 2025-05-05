"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")

    if (!hasAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const handleSettings = () => {
    // Here you would typically open cookie settings modal
    console.log("Open cookie settings")
    // For now, just accept all cookies
    handleAccept()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto">
            <div
              className={cn(
                "rounded-lg shadow-lg p-6 md:flex items-center justify-between",
                theme === "dark" ? "bg-slate-900 border border-slate-800" : "bg-white border border-slate-200",
              )}
            >
              <div className="mb-4 md:mb-0 md:mr-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">We use cookies</h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">
                  We are using cookies to give you the best experience on our website. You can find out more about which
                  cookies we are using or switch them off in settings.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" onClick={handleSettings} className="border-slate-300 dark:border-slate-700">
                  Cookie Settings
                </Button>
                <Button
                  onClick={handleAccept}
                  className="bg-gradient-to-r from-theme-red-500 to-theme-red-600 hover:from-theme-red-600 hover:to-theme-red-700 text-white border-0"
                >
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
