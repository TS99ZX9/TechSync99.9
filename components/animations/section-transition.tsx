"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView, type Variants } from "framer-motion"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

export function SectionTransition({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  once = true,
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" })

  const getVariants = (): Variants => {
    switch (direction) {
      case "up":
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "down":
        return {
          hidden: { y: -50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      case "left":
        return {
          hidden: { x: 50, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: -50, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }
      default:
        return {
          hidden: { y: 50, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={getVariants()}
      transition={{
        duration,
        delay,
        ease: [0.19, 1, 0.22, 1], // Cubic bezier for smooth animation
      }}
    >
      {children}
    </motion.div>
  )
}
