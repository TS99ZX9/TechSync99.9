"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useAnimation } from "./animation-context"

export function CursorFollower() {
  const { mousePosition, isReducedMotion } = useAnimation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || isReducedMotion) return null

  return (
    <motion.div
      className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      <motion.div
        className="w-full h-full bg-white rounded-full opacity-70"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
      />
    </motion.div>
  )
}
