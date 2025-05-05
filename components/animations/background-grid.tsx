"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface BackgroundGridProps {
  scrollSpeed: number
}

export function BackgroundGrid({ scrollSpeed }: BackgroundGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrame: number
    let offset = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const draw = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update offset based on scroll speed
      offset += 0.2 + scrollSpeed * 0.05
      if (offset > 40) offset = 0

      // Grid settings
      const gridSize = 40
      const lineWidth = 1
      const lineColor = theme === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.03)"

      // Draw vertical lines
      for (let x = offset; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = lineColor
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = offset; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.lineWidth = lineWidth
        ctx.strokeStyle = lineColor
        ctx.stroke()
      }

      animationFrame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener("resize", resize)
    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [scrollSpeed, theme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
