"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlowEffectProps {
  children: React.ReactNode
  color?: string
  intensity?: number
  className?: string
  active?: boolean
}

export function GlowEffect({
  children,
  color = "rgba(230, 57, 70, 0.6)",
  intensity = 20,
  className = "",
  active = true,
}: GlowEffectProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  // Reset position when component mounts or active state changes
  useEffect(() => {
    if (!active) {
      setIsHovered(false)
    }
  }, [active])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!active) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    if (active) {
      setIsHovered(true)
    }
  }

  const handleMouseLeave = () => {
    if (active) {
      setIsHovered(false)
    }
  }

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Glow effect */}
      {active && isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-inherit"
          style={{
            background: `radial-gradient(
              circle at ${position.x}px ${position.y}px, 
              ${color}, 
              transparent ${intensity * 3}%
            )`,
            borderRadius: "inherit",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}

      {/* Content */}
      {children}
    </motion.div>
  )
}
