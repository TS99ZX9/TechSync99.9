"use client"

import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react"
import { type VariantProps, cva } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 interactive-button",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl",
        secondary: "bg-secondary-500 text-white hover:bg-secondary-600 shadow-lg hover:shadow-xl",
        outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
        ghost: "bg-transparent text-primary-500 hover:bg-primary-100/10",
        destructive: "bg-destructive text-white hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        gradient:
          "bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:from-primary-600 hover:to-accent-600 shadow-lg hover:shadow-xl",
        "gradient-cyan":
          "bg-gradient-to-r from-secondary-500 to-secondary-700 text-white hover:from-secondary-600 hover:to-secondary-800 shadow-lg hover:shadow-xl",
        subtle: "bg-primary-100 text-primary-700 hover:bg-primary-200",
        link: "text-primary-500 underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        xs: "h-10 px-4 py-2 text-sm min-w-[6rem]",
        sm: "h-12 px-6 py-3 text-base min-w-[8rem]",
        default: "h-14 px-8 py-3.5 text-lg min-w-[10rem]",
        lg: "h-16 px-10 py-4 text-xl min-w-[12rem]",
        xl: "h-18 px-12 py-5 text-2xl min-w-[14rem]",
        icon: "h-14 w-14 p-3",
      },
      rounded: {
        default: "rounded-xl",
        full: "rounded-full",
        none: "rounded-none",
        lg: "rounded-2xl",
      },
      glow: {
        true: "shadow-lg hover:shadow-glow-large",
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
      iconAnimation = "slide",
      loading = false,
      ...props
    },
    ref,
  ) => {
    // Icon animation variants
    const rightIconVariants = {
      initial: { x: 0, y: 0 },
      hover: {
        x: iconAnimation === "slide" ? 6 : 0,
        y: iconAnimation === "bounce" ? -4 : 0,
      },
    }

    const leftIconVariants = {
      initial: { x: 0, y: 0 },
      hover: {
        x: iconAnimation === "slide" ? -6 : 0,
        y: iconAnimation === "bounce" ? -4 : 0,
      },
    }

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, rounded, glow, className }))}
        ref={ref}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        disabled={loading || props.disabled}
        {...props}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="w-6 h-6 border-3 border-white rounded-full border-t-transparent animate-spin mr-3" />
            <span className="font-medium">Loading...</span>
          </div>
        ) : (
          <>
            {leftIcon && (
              <motion.span className="mr-3 flex items-center" variants={leftIconVariants}>
                {leftIcon}
              </motion.span>
            )}
            <span className="font-semibold">{children}</span>
            {rightIcon && (
              <motion.span className="ml-3 flex items-center" variants={rightIconVariants}>
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
