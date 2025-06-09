"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

interface EnhancedBackgroundProps {
  density?: number
  color?: string
  speed?: number
  interactive?: boolean
}

export function EnhancedBackground({
  density = 30,
  color = "rgba(230, 57, 70, 0.2)",
  speed = 1,
  interactive = true,
}: EnhancedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const particles = useRef<any[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY }
    }

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    // Create particles
    const particleCount = Math.round(((canvas.width * canvas.height) / 10000) * density)

    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        density: Math.random() * 30 + 10,
        color,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
      })
    }

    // Animation loop
    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i]

        // Update position
        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Interactive behavior
        if (interactive) {
          // Calculate distance to mouse
          const dx = mousePosition.current.x - p.x
          const dy = mousePosition.current.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // If mouse is close, move particles away
          if (distance < 120) {
            const angle = Math.atan2(dy, dx)
            const pushX = Math.cos(angle) * (1 - distance / 120) * 2
            const pushY = Math.sin(angle) * (1 - distance / 120) * 2

            p.vx -= pushX
            p.vy -= pushY
          }

          // Dampen velocity over time
          p.vx *= 0.99
          p.vy *= 0.99

          // Add some randomness to keep movement
          if (Math.random() < 0.01) {
            p.vx += (Math.random() - 0.5) * 0.2 * speed
            p.vy += (Math.random() - 0.5) * 0.2 * speed
          }
        }

        // Connect nearby particles with lines
        for (let j = i + 1; j < particles.current.length; j++) {
          const p2 = particles.current[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = p.color
            ctx.globalAlpha = 1 - distance / 100
            ctx.lineWidth = 0.5
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
      cancelAnimationFrame(animationFrameId)
    }
  }, [density, color, speed, interactive])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    />
  )
}
