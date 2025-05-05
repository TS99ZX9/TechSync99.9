"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { getEngagementLevel } from "@/utils/animation-utils"

interface Shape {
  id: number
  type: "circle" | "square" | "triangle"
  x: number
  y: number
  size: number
  rotation: number
  color: string
  delay: number
}

export function AnimatedShapes() {
  const [shapes, setShapes] = useState<Shape[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    // Generate shapes
    const shapeCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 120000), 15)
    const shapeTypes: ("circle" | "square" | "triangle")[] = ["circle", "square", "triangle"]
    const colors = ["#e63946", "#ff4d5e", "#dc2626", "#991b1b"]

    const newShapes = Array.from({ length: shapeCount }).map((_, i) => ({
      id: i,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
    }))

    setShapes(newShapes)

    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const renderShape = (shape: Shape) => {
    const engagementLevel = getEngagementLevel()
    const duration = engagementLevel === "high" ? 20 : engagementLevel === "medium" ? 30 : 40

    switch (shape.type) {
      case "circle":
        return (
          <motion.div
            key={shape.id}
            className="absolute rounded-full opacity-5"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, shape.rotation, 0],
            }}
            transition={{
              duration: duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        )
      case "square":
        return (
          <motion.div
            key={shape.id}
            className="absolute opacity-5"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, shape.rotation, 0],
            }}
            transition={{
              duration: duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        )
      case "triangle":
        return (
          <motion.div
            key={shape.id}
            className="absolute opacity-5"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, 1.2, 1],
              rotate: [0, shape.rotation, 0],
            }}
            transition={{
              duration: duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-[-3]">
      {shapes.map(renderShape)}
    </div>
  )
}
