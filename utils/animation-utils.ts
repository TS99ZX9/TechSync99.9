export type EngagementLevel = "low" | "medium" | "high"

// Track user engagement metrics
let lastInteractionTime = Date.now()
let mouseMovements = 0
let scrollEvents = 0
let clickEvents = 0

// Reset counters periodically
if (typeof window !== "undefined") {
  setInterval(() => {
    mouseMovements = Math.max(0, mouseMovements - 5)
    scrollEvents = Math.max(0, scrollEvents - 2)
    clickEvents = Math.max(0, clickEvents - 1)
  }, 5000)
}

// Update engagement metrics
export function trackMouseMovement() {
  mouseMovements = Math.min(mouseMovements + 1, 30)
  lastInteractionTime = Date.now()
}

export function trackScroll() {
  scrollEvents = Math.min(scrollEvents + 1, 20)
  lastInteractionTime = Date.now()
}

export function trackClick() {
  clickEvents = Math.min(clickEvents + 3, 15)
  lastInteractionTime = Date.now()
}

// Calculate current engagement level
export function getEngagementLevel(): EngagementLevel {
  const timeSinceLastInteraction = Date.now() - lastInteractionTime

  // If no interaction for 30 seconds, return low
  if (timeSinceLastInteraction > 30000) {
    return "low"
  }

  const totalEngagement = mouseMovements + scrollEvents * 2 + clickEvents * 3

  if (totalEngagement > 25) {
    return "high"
  } else if (totalEngagement > 10) {
    return "medium"
  } else {
    return "low"
  }
}

// Apply animation styles to an element
export function applyAnimationStyles(element: HTMLElement, animationConfig: any) {
  if (!element) return

  for (const key in animationConfig) {
    element.style[key] = animationConfig[key]
  }
}

// Reset tracking variables
export function resetTracking() {
  mouseMovements = 0
  scrollEvents = 0
  clickEvents = 0
  lastInteractionTime = Date.now()
}

// Update animation variables (currently a placeholder)
export function updateAnimationVariables() {
  // This function can be expanded to update other animation-related variables
  // based on user engagement or other factors.
}
