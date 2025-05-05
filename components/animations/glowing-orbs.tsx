"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface Orb {
  id: number
  x: number
  y: number
  size: number
  color: string
  delay: number
  duration: number
}

interface GlowingOrbsProps {
  count?: number
  mousePosition: { x: number; y: number }
  scrollSpeed: number
}

export function GlowingOrbs({ count = 5, mousePosition, scrollSpeed }: GlowingOrbsProps) {
  const [orbs, setOrbs] = useState<Orb[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    // Colors based on theme
    const colors = [
      "rgba(230, 57, 70, 0.15)",
      "rgba(255, 77, 94, 0.15)",
      "rgba(220, 38, 38, 0.15)",
      "rgba(153, 27, 27, 0.15)",
    ]

    const newOrbs = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 300 + 200,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      duration: Math.random() * 20 + 20,
    }))

    setOrbs(newOrbs)
  }, [count])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-[100px]"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.size,
            height: orb.size,
            backgroundColor: orb.color,
            filter: theme === "dark" ? "blur(100px)" : "blur(120px)",
          }}
          animate={{
            x: [0, (mousePosition.x / window.innerWidth - 0.5) * -50 * (1 + scrollSpeed * 0.1), 0],
            y: [0, (mousePosition.y / window.innerHeight - 0.5) * -50 * (1 + scrollSpeed * 0.1), 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
