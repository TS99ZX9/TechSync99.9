"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useAnimation } from "./animation-context"
import { cn } from "@/lib/utils"

interface InteractiveElementProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: "lift" | "glow" | "scale" | "color" | "none"
  clickEffect?: "bounce" | "pulse" | "none"
}

export function InteractiveElement({
  children,
  className,
  hoverEffect = "lift",
  clickEffect = "bounce",
}: InteractiveElementProps) {
  const { colors, isReducedMotion } = useAnimation()

  const getHoverAnimation = () => {
    if (isReducedMotion) return {}

    switch (hoverEffect) {
      case "lift":
        return { y: -5 }
      case "glow":
        return { boxShadow: `0 0 15px 2px ${colors.primary}` }
      case "scale":
        return { scale: 1.05 }
      case "color":
        return { backgroundColor: colors.primary, color: "#ffffff" }
      case "none":
      default:
        return {}
    }
  }

  const getClickAnimation = () => {
    if (isReducedMotion) return {}

    switch (clickEffect) {
      case "bounce":
        return { scale: 0.95 }
      case "pulse":
        return { opacity: 0.8 }
      case "none":
      default:
        return {}
    }
  }

  return (
    <motion.div
      className={cn("transition-all duration-300", className)}
      whileHover={getHoverAnimation()}
      whileTap={getClickAnimation()}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
