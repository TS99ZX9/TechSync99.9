"use client"

import { AnimationProvider } from "./animation-context"
import { AnimatedBackground } from "./animated-background"
import { ThreeDBackground } from "./3d-background"
import { useEffect, useState } from "react"

export function MasterAnimation() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimationProvider>
      <ThreeDBackground />
      <AnimatedBackground />
    </AnimationProvider>
  )
}
