import type { Config } from "tailwindcss"
import { COLORS } from "./lib/constants"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: COLORS.primary[50],
          100: COLORS.primary[100],
          200: COLORS.primary[200],
          300: COLORS.primary[300],
          400: COLORS.primary[400],
          500: COLORS.primary[500],
          600: COLORS.primary[600],
          700: COLORS.primary[700],
          800: COLORS.primary[800],
          900: COLORS.primary[900],
          DEFAULT: COLORS.primary[500],
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          50: COLORS.secondary[50],
          100: COLORS.secondary[100],
          200: COLORS.secondary[200],
          300: COLORS.secondary[300],
          400: COLORS.secondary[400],
          500: COLORS.secondary[500],
          600: COLORS.secondary[600],
          700: COLORS.secondary[700],
          800: COLORS.secondary[800],
          900: COLORS.secondary[900],
          DEFAULT: COLORS.secondary[500],
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          50: COLORS.accent[50],
          100: COLORS.accent[100],
          200: COLORS.accent[200],
          300: COLORS.accent[300],
          400: COLORS.accent[400],
          500: COLORS.accent[500],
          600: COLORS.accent[600],
          700: COLORS.accent[700],
          800: COLORS.accent[800],
          900: COLORS.accent[900],
          DEFAULT: COLORS.accent[500],
        },
        gray: {
          50: COLORS.gray[50],
          100: COLORS.gray[100],
          200: COLORS.gray[200],
          300: COLORS.gray[300],
          400: COLORS.gray[400],
          500: COLORS.gray[500],
          600: COLORS.gray[600],
          700: COLORS.gray[700],
          800: COLORS.gray[800],
          900: COLORS.gray[900],
          950: COLORS.gray[950],
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        shine: {
          "0%": { left: "-100%", opacity: "0" },
          "100%": { left: "100%", opacity: "0.2" },
        },
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px rgb(230 57 70 / 0.5)" },
          "50%": { boxShadow: "0 0 20px rgb(230 57 70 / 0.8), 0 0 30px rgb(230 57 70 / 0.4)" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "morph-bg": {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        "ping-slow": {
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 10s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        shine: "shine 1.5s ease-in-out infinite",
        spinner: "spinner 1s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 4s ease-in-out infinite",
        "morph-bg": "morph-bg 10s ease-in-out infinite",
        "ping-slow": "ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-grid":
          "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(230, 57, 70, 0.5)",
        "glow-cyan": "0 0 20px rgba(6, 182, 212, 0.5)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
