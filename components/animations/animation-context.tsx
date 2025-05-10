"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect, useCallback } from "react"

type AnimationContextType = {
  mousePosition: { x: number; y: number }
  windowDimensions: { width: number; height: number }
  colors: {
    primary: string
    secondary: string
    accent: string
    primaryGradient: string
    accentGradient: string
  }
  parallax: (depth?: number) => { x: number; y: number; rotate: number }
  isReducedMotion: boolean
}

const defaultColors = {
  primary: "rgb(239, 68, 68)",
  secondary: "rgb(168, 85, 247)",
  accent: "rgb(59, 130, 246)",
  primaryGradient: "linear-gradient(to right, rgb(239, 68, 68), rgb(168, 85, 247))",
  accentGradient: "linear-gradient(to right, rgb(59, 130, 246), rgb(168, 85, 247))",
}

const AnimationContext = createContext<AnimationContextType>({
  mousePosition: { x: 0, y: 0 },
  windowDimensions: { width: 0, height: 0 },
  colors: defaultColors,
  parallax: () => ({ x: 0, y: 0, rotate: 0 }),
  isReducedMotion: false,
})

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 })
  const [colors, setColors] = useState(defaultColors)
  const [isReducedMotion, setIsReducedMotion] = useState(false)

  // Check for reduced motion preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setIsReducedMotion(mediaQuery.matches)

      const handleChange = (e: MediaQueryListEvent) => {
        setIsReducedMotion(e.matches)
      }

      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  // Track window dimensions
  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set initial dimensions
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Track mouse movement and update colors
  useEffect(() => {
    if (typeof window === "undefined") return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Update dynamic colors based on mouse position
      if (!isReducedMotion) {
        const newColors = getDynamicColors(e.clientX, e.clientY, window.innerWidth, window.innerHeight)
        setColors(newColors)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isReducedMotion])

  // Parallax calculation function
  const parallax = useCallback(
    (depth = 1) => {
      if (isReducedMotion) return { x: 0, y: 0, rotate: 0 }

      const centerX = windowDimensions.width / 2
      const centerY = windowDimensions.height / 2

      const x = (mousePosition.x - centerX) * 0.01 * depth
      const y = (mousePosition.y - centerY) * 0.01 * depth
      const rotate = ((mousePosition.x - centerX) * 0.02 + (mousePosition.y - centerY) * 0.02) * depth * 0.1

      return { x, y, rotate }
    },
    [mousePosition, windowDimensions, isReducedMotion],
  )

  return (
    <AnimationContext.Provider
      value={{
        mousePosition,
        windowDimensions,
        colors,
        parallax,
        isReducedMotion,
      }}
    >
      {children}
    </AnimationContext.Provider>
  )
}

export const useAnimation = () => useContext(AnimationContext)

// Helper function to generate dynamic colors based on mouse position
function getDynamicColors(mouseX: number, mouseY: number, screenWidth: number, screenHeight: number) {
  // Calculate normalized position (0-1)
  const normalizedX = mouseX / screenWidth
  const normalizedY = mouseY / screenHeight

  // Generate primary color (red-based)
  const r = Math.floor(220 + normalizedX * 35)
  const g = Math.floor(40 + normalizedY * 40)
  const b = Math.floor(40 + normalizedX * normalizedY * 40)

  // Generate secondary color (purple-based)
  const r2 = Math.floor(120 + normalizedY * 60)
  const g2 = Math.floor(40 + normalizedX * 60)
  const b2 = Math.floor(200 + normalizedX * 55)

  // Generate accent color (blue-based)
  const r3 = Math.floor(20 + normalizedX * 40)
  const g3 = Math.floor(100 + normalizedY * 60)
  const b3 = Math.floor(200 + normalizedX * normalizedY * 55)

  return {
    primary: `rgb(${r}, ${g}, ${b})`,
    secondary: `rgb(${r2}, ${g2}, ${b2})`,
    accent: `rgb(${r3}, ${g3}, ${b3})`,
    primaryGradient: `linear-gradient(to right, rgb(${r}, ${g}, ${b}), rgb(${r2}, ${g2}, ${b2}))`,
    accentGradient: `linear-gradient(to right, rgb(${r3}, ${g3}, ${b3}), rgb(${r2}, ${g2}, ${b2}))`,
  }
}
