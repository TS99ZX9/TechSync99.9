"use client"

import { useState, useEffect } from "react"
import { AnimatedBackground } from "./animated-background"
import { GradientBackground } from "./gradient-background"
import { AnimatedShapes } from "./animated-shapes"
import { trackMouseMovement, trackClick, trackScroll, updateAnimationVariables } from "@/utils/animation-utils"

export function DynamicAnimations() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Set up event listeners for tracking user engagement
    const handleMouseMove = () => {
      trackMouseMovement()
      updateAnimationVariables()
    }

    const handleClick = () => {
      trackClick()
      updateAnimationVariables()
    }

    const handleScroll = () => {
      trackScroll()
      updateAnimationVariables()
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)
    window.addEventListener("scroll", handleScroll)

    // Initial update
    updateAnimationVariables()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!mounted) return null

  return (
    <>
      <AnimatedBackground />
      <GradientBackground />
      <AnimatedShapes />
    </>
  )
}
