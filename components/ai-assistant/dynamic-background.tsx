"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { getEngagementLevel } from "@/utils/animation-utils"

export function DynamicBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calculate position relative to the center of the screen
      const xPos = (clientX / innerWidth - 0.5) * 2
      const yPos = (clientY / innerHeight - 0.5) * 2

      // Get current engagement level to adjust intensity
      const engagementLevel = getEngagementLevel()
      const intensityFactor = engagementLevel === "high" ? 1 : engagementLevel === "medium" ? 0.7 : 0.4

      // Apply transform based on mouse position with intensity factor
      containerRef.current.style.transform = `
        translate3d(${xPos * -15 * intensityFactor}px, ${yPos * -15 * intensityFactor}px, 0)
        rotate3d(${yPos * intensityFactor}, ${xPos * intensityFactor}, 0, ${Math.sqrt(xPos * xPos + yPos * yPos) * 5 * intensityFactor}deg)
      `
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        ref={containerRef}
        className="w-full h-full dynamic-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

        {/* Red accent gradients */}
        <div className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] rounded-full bg-gradient-to-r from-[#e63946]/10 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] rounded-full bg-gradient-to-r from-[#dc2626]/10 to-transparent blur-[60px]"></div>
        <div className="absolute top-[40%] right-[20%] w-[20vw] h-[20vw] rounded-full bg-gradient-to-r from-[#ff4d5e]/5 to-transparent blur-[70px]"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
      </motion.div>
    </div>
  )
}
