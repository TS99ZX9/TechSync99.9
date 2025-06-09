"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface InteractiveCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: "glow" | "lift" | "tilt" | "scale" | "border" | "none"
  onClick?: () => void
  delay?: number
  size?: "sm" | "md" | "lg" | "xl" | "hero" | "stats"
}

export function InteractiveCard({
  children,
  className,
  hoverEffect = "lift",
  onClick,
  delay = 0,
  size = "md",
}: InteractiveCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const calculatePosition = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setPosition({ x, y })
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "service-card"
      case "md":
        return "feature-card"
      case "lg":
        return "hero-card"
      case "xl":
        return "hero-card"
      case "hero":
        return "hero-card"
      case "stats":
        return "stats-card"
      default:
        return "feature-card"
    }
  }

  const getHoverEffectClasses = () => {
    switch (hoverEffect) {
      case "glow":
        return "transition-all duration-500 hover:shadow-[0_0_50px_rgba(239,68,68,0.4)]"
      case "lift":
        return "transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-2xl"
      case "scale":
        return "transition-all duration-500 hover:scale-[1.05]"
      case "border":
        return "transition-all duration-500 hover:border-brand-primary hover:shadow-lg"
      case "tilt":
        return "transition-all duration-500 hover:rotate-1 hover:-translate-y-2"
      case "none":
        return ""
      default:
        return "transition-all duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:shadow-2xl"
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden cursor-pointer enhanced-card",
        getSizeClasses(),
        getHoverEffectClasses(),
        className,
      )}
      onMouseMove={calculatePosition}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      style={
        {
          "--mouse-x": `${position.x}px`,
          "--mouse-y": `${position.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Dynamic highlight effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 opacity-100 pointer-events-none rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(239, 68, 68, 0.15), transparent 60%)`,
          }}
        />
      )}

      {/* Content wrapper with proper flex layout */}
      <div className="card-content relative z-10">{children}</div>

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-red-500/20 to-cyan-500/20 opacity-0 transition-opacity duration-500 hover:opacity-100" />
    </motion.div>
  )
}
