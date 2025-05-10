"use client"

import { useEffect, useState } from "react"
import { useAnimation } from "./animation-context"

export function AnimatedBackground() {
  const { colors, isReducedMotion } = useAnimation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || isReducedMotion) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] animate-pulse"
        style={{
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
          animation: "pulse 8s infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] animate-pulse"
        style={{
          background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
          animation: "pulse 12s infinite 2s",
        }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-[100px] animate-pulse"
        style={{
          background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`,
          animation: "pulse 10s infinite 1s",
        }}
      />
    </div>
  )
}
