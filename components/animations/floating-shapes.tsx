"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface Shape {
  id: number
  type: "circle" | "square" | "triangle" | "hexagon"
  x: number
  y: number
  size: number
  rotation: number
  color: string
  delay: number
  duration: number
  opacity: number
}

interface FloatingShapesProps {
  count?: number
  mousePosition: { x: number; y: number }
  scrollSpeed: number
}

export function FloatingShapes({ count = 8, mousePosition, scrollSpeed }: FloatingShapesProps) {
  const [shapes, setShapes] = useState<Shape[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const shapeTypes: ("circle" | "square" | "triangle" | "hexagon")[] = ["circle", "square", "triangle", "hexagon"]

    // Colors based on theme
    const colors =
      theme === "dark"
        ? ["rgba(230, 57, 70, 0.1)", "rgba(255, 77, 94, 0.1)", "rgba(220, 38, 38, 0.1)", "rgba(153, 27, 27, 0.1)"]
        : ["rgba(230, 57, 70, 0.08)", "rgba(255, 77, 94, 0.08)", "rgba(220, 38, 38, 0.08)", "rgba(153, 27, 27, 0.08)"]

    const newShapes = Array.from({ length: count }).map((_, i) => ({
      id: i,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 40,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 30 + 30,
      opacity: Math.random() * 0.1 + 0.05,
    }))

    setShapes(newShapes)
  }, [count, theme])

  const renderShape = (shape: Shape) => {
    // Calculate mouse influence
    const mouseInfluenceX = (mousePosition.x / window.innerWidth - 0.5) * -30
    const mouseInfluenceY = (mousePosition.y / window.innerHeight - 0.5) * -30

    // Calculate scroll influence
    const scrollInfluence = scrollSpeed * 2

    switch (shape.type) {
      case "circle":
        return (
          <motion.div
            key={shape.id}
            className="absolute rounded-full"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              opacity: shape.opacity,
            }}
            animate={{
              x: [0, mouseInfluenceX, 0],
              y: [0, mouseInfluenceY + scrollInfluence, 0],
              rotate: [0, shape.rotation, 0],
            }}
            transition={{
              duration: shape.duration,
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
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              backgroundColor: shape.color,
              opacity: shape.opacity,
            }}
            animate={{
              x: [0, mouseInfluenceX, 0],
              y: [0, mouseInfluenceY + scrollInfluence, 0],
              rotate: [0, shape.rotation, 0],
            }}
            transition={{
              duration: shape.duration,
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
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
              opacity: shape.opacity,
            }}
            animate={{
              x: [0, mouseInfluenceX, 0],
              y: [0, mouseInfluenceY + scrollInfluence, 0],
              rotate: [0, shape.rotation, 0],
            }}
            transition={{
              duration: shape.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: shape.delay,
              ease: "easeInOut",
            }}
          />
        )
      case "hexagon":
        return (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: `${shape.size * 0.866}px`, // height = side * sin(60°)
              backgroundColor: shape.color,
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              opacity: shape.opacity,
            }}
            animate={{
              x: [0, mouseInfluenceX, 0],
              y: [0, mouseInfluenceY + scrollInfluence, 0],
              rotate: [0, shape.rotation, 0],
            }}
            transition={{
              duration: shape.duration,
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

  return <div className="absolute inset-0 overflow-hidden">{shapes.map(renderShape)}</div>
}
