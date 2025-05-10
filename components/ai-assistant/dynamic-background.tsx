"use client"

import { useEffect, useRef, useState } from "react"
import { useAnimation } from "../animations/animation-context"

export function DynamicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { mousePosition, windowDimensions, colors, isReducedMotion } = useAnimation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !canvasRef.current || isReducedMotion) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasDimensions()

    // Create wave points
    const wavePoints: { x: number; y: number; originalY: number; speed: number }[] = []
    const numberOfPoints = Math.ceil(canvas.width / 50) + 2
    const spacing = canvas.width / (numberOfPoints - 3)

    for (let i = 0; i < numberOfPoints; i++) {
      wavePoints.push({
        x: i * spacing - spacing,
        y: canvas.height / 2,
        originalY: canvas.height / 2,
        speed: 0.01 + Math.random() * 0.01,
      })
    }

    // Animation loop
    let animationFrameId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Update wave points
      for (let i = 0; i < wavePoints.length; i++) {
        const point = wavePoints[i]
        point.y = point.originalY + Math.sin(time + i * 0.3) * 30
      }

      // Draw waves
      drawWave(ctx, wavePoints, colors.primary, 0.05)
      drawWave(
        ctx,
        wavePoints.map((p) => ({ ...p, y: p.y + 20 })),
        colors.secondary,
        0.03,
      )

      animationFrameId = requestAnimationFrame(animate)
    }

    // Draw a wave
    function drawWave(
      ctx: CanvasRenderingContext2D,
      points: { x: number; y: number }[],
      color: string,
      opacity: number,
    ) {
      ctx.fillStyle = color
      ctx.globalAlpha = opacity

      ctx.beginPath()
      ctx.moveTo(points[0].x, points[0].y)

      // Draw curve through points
      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2
        const yc = (points[i].y + points[i + 1].y) / 2
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
      }

      // Complete the path
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.closePath()
      ctx.fill()

      ctx.globalAlpha = 1
    }

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions()
    }

    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mousePosition, windowDimensions, colors, mounted, isReducedMotion])

  if (!mounted) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-20 dark:opacity-30 pointer-events-none"
      style={{ display: isReducedMotion ? "none" : "block" }}
    />
  )
}
