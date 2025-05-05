"use client"

import { useState } from "react"

import { useEffect, useRef } from "react"
import { getEngagementLevel } from "@/utils/animation-utils"

export function GradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    const colors = [
      { r: 230, g: 57, b: 70, a: 0.03 }, // #e63946
      { r: 255, g: 77, b: 94, a: 0.03 }, // #ff4d5e
      { r: 220, g: 38, b: 38, a: 0.03 }, // #dc2626
      { r: 153, g: 27, b: 27, a: 0.03 }, // #991b1b
    ]

    const gradients = [
      { x: 0.3, y: 0.1, radius: 0.4 },
      { x: 0.7, y: 0.9, radius: 0.3 },
      { x: 0.1, y: 0.7, radius: 0.5 },
    ]

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const engagementLevel = getEngagementLevel()
      const animationSpeed = engagementLevel === "high" ? 0.003 : engagementLevel === "medium" ? 0.002 : 0.001

      // Draw gradients
      gradients.forEach((gradient, i) => {
        const time = Date.now() * animationSpeed

        // Calculate position with some oscillation
        const x = canvas.width * (gradient.x + Math.sin(time + i) * 0.05)
        const y = canvas.height * (gradient.y + Math.cos(time + i * 2) * 0.05)

        // Make radius responsive to mouse position
        const dx = mousePosition.x - x
        const dy = mousePosition.y - y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const mouseInfluence = Math.max(0, 1 - distance / (canvas.width * 0.5))

        const radius = canvas.width * gradient.radius * (1 + mouseInfluence * 0.2)

        const grd = ctx.createRadialGradient(x, y, 0, x, y, radius)

        const color = colors[i % colors.length]
        grd.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a * 2})`)
        grd.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)

        ctx.fillStyle = grd
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-[-2]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
