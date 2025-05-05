"use client"

import type React from "react"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  children: React.ReactNode
  hoverEffect?: "shine" | "lift" | "pulse" | "none"
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant = "default", size = "default", children, hoverEffect = "shine", ...props }, ref) => {
    const getHoverClass = () => {
      switch (hoverEffect) {
        case "shine":
          return "btn-hover-effect"
        case "lift":
          return "hover-lift"
        case "pulse":
          return "group"
        case "none":
        default:
          return ""
      }
    }

    const getVariantClass = () => {
      if (variant === "gradient") {
        return "bg-gradient-to-r from-[#e63946] to-[#dc2626] text-white border-0 hover:from-[#dc2626] hover:to-[#991b1b]"
      }
      return ""
    }

    return (
      <Button
        ref={ref}
        variant={variant === "gradient" ? "default" : variant}
        size={size}
        className={cn(getHoverClass(), getVariantClass(), className)}
        {...props}
      >
        {hoverEffect === "pulse" ? (
          <>
            <span className="relative z-10">{children}</span>
            <motion.span
              className="absolute inset-0 rounded-md bg-white/10 z-0"
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </>
        ) : (
          children
        )}
      </Button>
    )
  },
)

AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton }
