"use client"

import { useRef } from "react"
import { motion, useInView, type Variants } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  type?: "words" | "chars" | "lines"
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  once = true,
  type = "words",
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: "-10% 0px -10% 0px" })

  const getAnimationItems = () => {
    switch (type) {
      case "chars":
        return text.split("")
      case "lines":
        return text.split("\n")
      case "words":
      default:
        return text.split(" ")
    }
  }

  const items = getAnimationItems()

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay },
    }),
  }

  const child: Variants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          variants={child}
          className="inline-block"
          style={{
            whiteSpace: type === "chars" ? "pre" : type === "lines" ? "pre-line" : "normal",
            marginRight: type === "chars" ? "0" : "0.25em",
          }}
        >
          {item}
        </motion.span>
      ))}
    </motion.div>
  )
}
