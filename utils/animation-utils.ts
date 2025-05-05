// Animation utility functions based on user engagement
export type EngagementLevel = "low" | "medium" | "high"

interface AnimationSettings {
  duration: number
  easing: string
  delay: number
  intensity: number
}

const animationPresets: Record<EngagementLevel, AnimationSettings> = {
  low: {
    duration: 0.8,
    easing: "ease-out",
    delay: 0.2,
    intensity: 0.5,
  },
  medium: {
    duration: 0.5,
    easing: "ease-in-out",
    delay: 0.1,
    intensity: 0.75,
  },
  high: {
    duration: 0.3,
    easing: "cubic-bezier(0.19, 1, 0.22, 1)",
    delay: 0,
    intensity: 1,
  },
}

// Track user interactions to determine engagement level
let mouseMovements = 0
let clicks = 0
let scrollEvents = 0
let lastInteractionTime = Date.now()

// Calculate engagement score based on interaction metrics
export function calculateEngagementScore(): number {
  const timeSinceLastInteraction = (Date.now() - lastInteractionTime) / 1000
  const recencyFactor = Math.max(0, 1 - timeSinceLastInteraction / 60) // Decay over 60 seconds

  // Normalize each metric
  const normalizedMouse = Math.min(mouseMovements / 100, 1)
  const normalizedClicks = Math.min(clicks / 10, 1)
  const normalizedScroll = Math.min(scrollEvents / 20, 1)

  // Weighted average
  return (normalizedMouse * 0.3 + normalizedClicks * 0.5 + normalizedScroll * 0.2) * recencyFactor
}

// Determine engagement level based on score
export function getEngagementLevel(): EngagementLevel {
  const score = calculateEngagementScore()
  if (score < 0.3) return "low"
  if (score < 0.7) return "medium"
  return "high"
}

// Get animation settings based on current engagement
export function getAnimationSettings(): AnimationSettings {
  return animationPresets[getEngagementLevel()]
}

// Track user interactions
export function trackMouseMovement(): void {
  mouseMovements++
  lastInteractionTime = Date.now()
}

export function trackClick(): void {
  clicks++
  lastInteractionTime = Date.now()
}

export function trackScroll(): void {
  scrollEvents++
  lastInteractionTime = Date.now()
}

// Reset tracking data (e.g., on page navigation)
export function resetTracking(): void {
  mouseMovements = 0
  clicks = 0
  scrollEvents = 0
}

// Apply animation settings to CSS variables
export function updateAnimationVariables(): void {
  const settings = getAnimationSettings()

  if (typeof document !== "undefined") {
    document.documentElement.style.setProperty("--animation-duration", `${settings.duration}s`)
    document.documentElement.style.setProperty("--animation-easing", settings.easing)
    document.documentElement.style.setProperty("--animation-delay", `${settings.delay}s`)
    document.documentElement.style.setProperty("--animation-intensity", settings.intensity.toString())
  }
}

// Apply animation styles to a specific element
export function applyAnimationStyles(
  element: HTMLElement,
  options: {
    animation: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scale" | "pulse"
    duration?: number
    delay?: number
    easing?: string
  },
): void {
  const settings = getAnimationSettings()
  const duration = options.duration || settings.duration
  const delay = options.delay || settings.delay
  const easing = options.easing || settings.easing

  // Base styles
  element.style.transition = `all ${duration}s ${easing}`
  element.style.transitionDelay = `${delay}s`

  // Apply specific animation
  switch (options.animation) {
    case "fadeIn":
      element.style.opacity = "1"
      break
    case "fadeInUp":
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
      break
    case "fadeInDown":
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
      break
    case "fadeInLeft":
      element.style.opacity = "1"
      element.style.transform = "translateX(0)"
      break
    case "fadeInRight":
      element.style.opacity = "1"
      element.style.transform = "translateX(0)"
      break
    case "scale":
      element.style.opacity = "1"
      element.style.transform = "scale(1)"
      break
    case "pulse":
      element.style.animation = `pulse ${duration}s ${easing} ${delay}s`
      break
  }

  // Set initial styles before animation starts
  if (options.animation.includes("fadeIn") && !element.style.opacity) {
    element.style.opacity = "0"

    if (options.animation === "fadeInUp") {
      element.style.transform = "translateY(20px)"
    } else if (options.animation === "fadeInDown") {
      element.style.transform = "translateY(-20px)"
    } else if (options.animation === "fadeInLeft") {
      element.style.transform = "translateX(20px)"
    } else if (options.animation === "fadeInRight") {
      element.style.transform = "translateX(-20px)"
    }
  } else if (options.animation === "scale" && !element.style.opacity) {
    element.style.opacity = "0"
    element.style.transform = "scale(0.95)"
  }
}
