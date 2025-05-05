"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { getEngagementLevel } from "@/utils/animation-utils"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  velocity: {
    x: number
    y: number
  }
  opacity: number
}

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  // Generate initial particles
  useEffect(() => {
    if (!containerRef.current) return

    const { clientWidth, clientHeight } = containerRef.current
    setDimensions({ width: clientWidth, height: clientHeight })

    const particleCount = Math.min(Math.floor((clientWidth * clientHeight) / 25000), 40)
    const colors = ["#e63946", "#ff4d5e", "#ff6b70", "#dc2626", "#991b1b"]

    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * clientWidth,
      y: Math.random() * clientHeight,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      velocity: {
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.3,
      },
      opacity: Math.random() * 0.5 + 0.1,
    }))

    setParticles(newParticles)

    const handleResize = () => {
      if (!containerRef.current) return
      const { clientWidth, clientHeight } = containerRef.current
      setDimensions({ width: clientWidth, height: clientHeight })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation loop
  useEffect(() => {
    const animate = (time: number) => {
      if (previousTimeRef.current === undefined) {
        previousTimeRef.current = time
      }

      const deltaTime = time - previousTimeRef.current
      previousTimeRef.current = time

      setParticles((prevParticles) => {
        const engagementLevel = getEngagementLevel()
        const interactionFactor = engagementLevel === "high" ? 2 : engagementLevel === "medium" ? 1.5 : 1

        return prevParticles.map((particle) => {
          // Calculate distance from mouse
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Apply mouse influence based on distance
          let vx = particle.velocity.x
          let vy = particle.velocity.y

          if (distance < 200) {
            const force = ((200 - distance) / 500) * interactionFactor
            vx += (dx / distance) * force
            vy += (dy / distance) * force
          }

          // Update position
          let newX = particle.x + vx
          let newY = particle.y + vy

          // Boundary check
          if (newX < 0 || newX > dimensions.width) {
            vx = -vx * 0.5
            newX = newX < 0 ? 0 : dimensions.width
          }

          if (newY < 0 || newY > dimensions.height) {
            vy = -vy * 0.5
            newY = newY < 0 ? 0 : dimensions.height
          }

          // Apply some drag
          vx *= 0.99
          vy *= 0.99

          return {
            ...particle,
            x: newX,
            y: newY,
            velocity: { x: vx, y: vy },
          }
        })
      })

      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [dimensions, mousePosition])

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-[-1]">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          animate={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
          }}
          transition={{
            duration: 0.1,
            ease: "linear",
          }}
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            filter: `blur(${particle.size / 2}px)`,
          }}
        />
      ))}
    </div>
  )
}
