"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { ParticleNetwork } from "./particle-network"
import { GlowingOrbs } from "./glowing-orbs"
import { BackgroundGrid } from "./background-grid"
import { FloatingShapes } from "./floating-shapes"
import { useTheme } from "next-themes"

export function MasterAnimation() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const { theme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [scrollSpeed, setScrollSpeed] = useState(0)
  const lastScrollY = useRef(0)
  const lastScrollTime = useRef(Date.now())

  // Transform values based on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  // Calculate scroll speed
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      const currentTime = Date.now()
      const deltaY = Math.abs(currentY - lastScrollY.current)
      const deltaTime = currentTime - lastScrollTime.current

      if (deltaTime > 0) {
        // Calculate pixels per second
        const speed = (deltaY / deltaTime) * 1000
        setScrollSpeed(Math.min(speed / 10, 10)) // Normalize and cap
      }

      lastScrollY.current = currentY
      lastScrollTime.current = currentTime
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    // Update dimensions on resize
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    handleResize()
    setMounted(true)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  if (!mounted) return null

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
      {/* Base gradient background */}
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-b",
          theme === "dark" ? "from-black via-slate-950 to-slate-900" : "from-white via-slate-50 to-slate-100",
        )}
        style={{
          opacity: backgroundOpacity,
          y: backgroundY,
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <BackgroundGrid scrollSpeed={scrollSpeed} />
        <ParticleNetwork mousePosition={mousePosition} dimensions={dimensions} scrollSpeed={scrollSpeed} />
        <GlowingOrbs count={5} mousePosition={mousePosition} scrollSpeed={scrollSpeed} />
        <FloatingShapes count={8} mousePosition={mousePosition} scrollSpeed={scrollSpeed} />
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
    </div>
  )
}
