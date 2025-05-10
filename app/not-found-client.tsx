"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function NotFoundClient() {
  // Use state to control when animations start (after component mounts)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Only render animations after component is mounted to avoid hydration issues
  if (!isMounted) {
    return (
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-0"></div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        <div className="z-10 flex flex-col items-center justify-center space-y-8 text-center px-4">
          <div className="text-9xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            404
          </div>
          <h1 className="text-4xl font-bold text-white">Page Not Found</h1>
          <p className="max-w-md text-lg text-white/80">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-purple-500/20"
              >
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // Enhanced animated version with floating elements
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Gradient background with animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [0.8, 1.2, 0.9, 1.1, 1],
            opacity: [0, 0.5, 0.3, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, 1.3, 0.8, 1.2, 1],
            opacity: [0, 0.7, 0.4, 0.6, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -20, 0, 20, 0],
            opacity: [0, 0.3, 0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl"
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, 30, 0, -30, 0],
            opacity: [0, 0.4, 0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            delay: 1,
          }}
        />
      </div>

      {/* Content with animations */}
      <motion.div
        className="z-10 flex flex-col items-center justify-center space-y-8 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-9xl font-bold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <motion.span
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text inline-block"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          >
            404
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Page Not Found
        </motion.h1>

        <motion.p
          className="max-w-md text-lg text-white/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link href="/">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-purple-500/20 w-full"
              >
                <Home className="h-5 w-5" />
                Back to Home
              </Button>
            </motion.div>
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white w-full"
            >
              <ArrowLeft className="h-5 w-5" />
              Go Back
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
