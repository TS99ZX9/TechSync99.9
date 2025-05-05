"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CursorFollower() {
  const [mounted, setMounted] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Create springs for smooth cursor movement
  const springConfig = { damping: 25, stiffness: 300 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const updatePointerState = () => {
      const target = document.elementFromPoint(cursorX.get(), cursorY.get())
      if (!target) return

      // Check if the element or its parents have cursor: pointer
      let element = target as HTMLElement
      let isPointerElement = false

      while (element && !isPointerElement) {
        const cursor = window.getComputedStyle(element).cursor
        if (cursor === "pointer") {
          isPointerElement = true
          break
        }
        if (element.parentElement) {
          element = element.parentElement
        } else {
          break
        }
      }

      setIsPointer(isPointerElement)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mousemove", updatePointerState)

    setMounted(true)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mousemove", updatePointerState)
    }
  }, [cursorX, cursorY])

  if (!mounted) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-theme-red-500 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 25 },
        }}
      />

      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-theme-red-500 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  )
}
