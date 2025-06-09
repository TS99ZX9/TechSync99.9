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
}

export function InteractiveCard({
  children,
  className,
  hoverEffect = "lift",
  onClick,
  delay = 0,
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

  const getHoverEffectClasses = () => {
    switch (hoverEffect) {
      case "glow":
        return "transition-shadow duration-300 hover:shadow-glow"
      case "lift":
        return "transition-transform duration-300 hover:-translate-y-2"
      case "scale":
        return "transition-transform duration-300 hover:scale-[1.02]"
      case "border":
        return "transition-colors duration-300 hover:border-primary-500"
      case "none":
        return ""
      default:
        return "transition-transform duration-300 hover:-translate-y-2"
    }
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative rounded-xl overflow-hidden", getHoverEffectClasses(), className)}
      onMouseMove={calculatePosition}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      style={
        {
          "--mouse-x": `${position.x}px`,
          "--mouse-y": `${position.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Dynamic highlight effect */}
      {hoverEffect === "tilt" && isHovered && (
        <div
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(230, 57, 70, 0.15), transparent 50%)`,
          }}
        />
      )}

      {children}
    </motion.div>
  )
}
