"use client"

import type { ReactNode } from "react"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface ContainerProps extends MotionProps {
  children: ReactNode
  className?: string
  id?: string
  as?: "div" | "section" | "main"
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  paddingX?: "none" | "sm" | "md" | "lg" | "xl"
  paddingY?: "none" | "sm" | "md" | "lg" | "xl"
  animate?: boolean
  animateDelay?: number
}

export function Container({
  children,
  className,
  id,
  as = "div",
  maxWidth = "xl",
  paddingX = "md",
  paddingY = "md",
  animate = true,
  animateDelay = 0,
  ...motionProps
}: ContainerProps) {
  const Component = motion[as] as any

  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full",
  }

  const paddingXClasses = {
    none: "px-0",
    sm: "px-4",
    md: "px-6 md:px-8",
    lg: "px-8 md:px-12",
    xl: "px-10 md:px-16",
  }

  const paddingYClasses = {
    none: "py-0",
    sm: "py-4",
    md: "py-6 md:py-8",
    lg: "py-8 md:py-12",
    xl: "py-10 md:py-16",
  }

  const defaultMotionProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: animateDelay },
      }
    : {}

  return (
    <Component
      id={id}
      className={cn(
        "mx-auto w-full",
        maxWidthClasses[maxWidth],
        paddingXClasses[paddingX],
        paddingYClasses[paddingY],
        className,
      )}
      {...defaultMotionProps}
      {...motionProps}
    >
      {children}
    </Component>
  )
}
