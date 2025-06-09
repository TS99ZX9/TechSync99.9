"use client"

import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 interactive-button",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white hover:bg-primary-600",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-600",
        outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
        ghost: "bg-transparent text-primary-500 hover:bg-primary-100/10",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        gradient:
          "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600",
        "gradient-cyan":
          "bg-gradient-to-r from-secondary-500 to-secondary-700 text-white hover:from-secondary-600 hover:to-secondary-800",
        subtle: "bg-primary-100 text-primary-700 hover:bg-primary-200",
        link: "text-primary-500 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 px-3 py-2 text-sm",
        lg: "h-12 px-7 py-3 text-lg",
        xl: "h-14 px-10 py-3.5 text-xl",
        icon: "h-10 w-10 p-2.5",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
      },
      glow: {
        true: "shadow-md hover:shadow-glow",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      glow: false,
    },
  },
)

export interface AdvancedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode
  rightIcon?: ReactNode
  leftIcon?: ReactNode
  iconAnimation?: "bounce" | "slide" | "none"
  loading?: boolean
}

const AdvancedButton = forwardRef<HTMLButtonElement, AdvancedButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      glow,
      children,
      rightIcon,
      leftIcon,
      iconAnimation = "none",
      loading = false,
      ...props
    },
    ref,
  ) => {
    // Icon animation variants
    const rightIconVariants = {
      initial: { x: 0 },
      hover: {
        x: iconAnimation === "slide" ? 5 : 0,
        y: iconAnimation === "bounce" ? -3 : 0,
      },
    }

    const leftIconVariants = {
      initial: { x: 0 },
      hover: {
        x: iconAnimation === "slide" ? -5 : 0,
        y: iconAnimation === "bounce" ? -3 : 0,
      },
    }

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, rounded, glow, className }))}
        ref={ref}
        initial="initial"
        whileHover="hover"
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white rounded-full border-t-transparent animate-spin mr-2" />
            <span>Loading...</span>
          </div>
        ) : (
          <>
            {leftIcon && (
              <motion.span className="mr-2" variants={leftIconVariants}>
                {leftIcon}
              </motion.span>
            )}
            {children}
            {rightIcon && (
              <motion.span className="ml-2" variants={rightIconVariants}>
                {rightIcon}
              </motion.span>
            )}
          </>
        )}
      </motion.button>
    )
  },
)
AdvancedButton.displayName = "AdvancedButton"

export { AdvancedButton }
