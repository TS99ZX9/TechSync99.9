"use client"

import { motion } from "framer-motion"
import { useAnimation } from "./animation-context"

interface AnimatedTextProps {
  text: string
  type?: "words" | "characters" | "lines"
  className?: string
  delay?: number
}

export function AnimatedText({ text, type = "lines", className, delay = 0 }: AnimatedTextProps) {
  const { isReducedMotion } = useAnimation()

  if (isReducedMotion) {
    return <span className={className}>{text}</span>
  }

  const getAnimationVariants = () => {
    switch (type) {
      case "words":
        return {
          hidden: {},
          visible: {},
        }
      case "characters":
        return {
          hidden: {},
          visible: {},
        }
      case "lines":
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay,
              duration: 0.5,
            },
          },
        }
    }
  }

  const renderText = () => {
    switch (type) {
      case "words":
        return (
          <motion.span
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: delay,
                },
              },
            }}
            className={className}
          >
            {text.split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                    },
                  },
                }}
              >
                {word}
                {i !== text.split(" ").length - 1 && " "}
              </motion.span>
            ))}
          </motion.span>
        )
      case "characters":
        return (
          <motion.span
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.03,
                  delayChildren: delay,
                },
              },
            }}
            className={className}
          >
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                    },
                  },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>
        )
      case "lines":
      default:
        return (
          <motion.span initial="hidden" animate="visible" variants={getAnimationVariants()} className={className}>
            {text}
          </motion.span>
        )
    }
  }

  return renderText()
}
