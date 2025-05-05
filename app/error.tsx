"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900/30 to-slate-900 z-0"></div>

      {/* Animated elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="z-10 flex flex-col items-center justify-center space-y-8 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-7xl font-bold bg-gradient-to-r from-red-400 to-orange-500 text-transparent bg-clip-text"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Oops!
        </motion.div>

        <motion.h1
          className="text-3xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Something went wrong
        </motion.h1>

        <motion.p
          className="max-w-md text-lg text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We apologize for the inconvenience. Please try again or return to the home page.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button
            size="lg"
            onClick={() => reset()}
            className="gap-2 bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 text-white border-0 shadow-lg shadow-red-500/20"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </Button>
          <Link href="/">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
