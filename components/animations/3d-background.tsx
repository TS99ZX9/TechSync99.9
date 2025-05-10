"use client"

import { useRef, useEffect, useState } from "react"
import { useAnimation } from "./animation-context"

export function ThreeDBackground() {
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

    // Create particles
    const particlesArray: Particle[] = []
    const numberOfParticles = Math.min(100, Math.floor((windowDimensions.width * windowDimensions.height) / 15000))

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor(color: string) {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = color
      }

      update(mouseX: number, mouseY: number) {
        // Move particles
        this.x += this.speedX
        this.y += this.speedY

        // Boundary check
        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height

        // Mouse interaction - subtle attraction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 200) {
          const angle = Math.atan2(dy, dx)
          const force = 0.1
          this.speedX += Math.cos(angle) * force
          this.speedY += Math.sin(angle) * force
        }

        // Limit speed
        const maxSpeed = 1.5
        const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY)
        if (currentSpeed > maxSpeed) {
          this.speedX = (this.speedX / currentSpeed) * maxSpeed
          this.speedY = (this.speedY / currentSpeed) * maxSpeed
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    for (let i = 0; i < numberOfParticles; i++) {
      const color = i % 2 === 0 ? colors.primary : colors.secondary
      particlesArray.push(new Particle(color))
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mousePosition.x, mousePosition.y)
        particlesArray[i].draw(ctx)
      }

      // Connect particles with lines
      connectParticles(ctx)

      animationFrameId = requestAnimationFrame(animate)
    }

    // Connect nearby particles with lines
    function connectParticles(ctx: CanvasRenderingContext2D) {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = 1 - distance / 100
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.1})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
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
      className="fixed inset-0 z-0 opacity-30 dark:opacity-40 pointer-events-none"
      style={{ display: isReducedMotion ? "none" : "block" }}
    />
  )
}
