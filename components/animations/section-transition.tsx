"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useAnimation } from "./animation-context"

interface SectionTransitionProps {
  children: React.ReactNode
}

export function SectionTransition({ children }: SectionTransitionProps) {
  const { isReducedMotion } = useAnimation()

  return (
    <motion.div
      initial={{ opacity: 0, y: isReducedMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
