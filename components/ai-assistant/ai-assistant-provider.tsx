"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { resetTracking, trackScroll, updateAnimationVariables } from "@/utils/animation-utils"

type AssistantState = {
  isOpen: boolean
  isMuted: boolean
  hasInteracted: boolean
  lastInteraction: Date | null
  visitedPages: string[]
  currentPage: string
  suggestedTopics: string[]
  chatHistory: {
    sender: "ai" | "user"
    message: string
    timestamp: Date
  }[]
}

type AssistantContextType = {
  state: AssistantState
  openAssistant: () => void
  closeAssistant: () => void
  toggleAssistant: () => void
  muteAssistant: () => void
  unmuteAssistant: () => void
  sendMessage: (message: string) => void
  clearHistory: () => void
  dismissSuggestion: (topic: string) => void
}

const defaultState: AssistantState = {
  isOpen: false,
  isMuted: false,
  hasInteracted: false,
  lastInteraction: null,
  visitedPages: [],
  currentPage: "",
  suggestedTopics: [],
  chatHistory: [
    {
      sender: "ai",
      message: "Hi there! I'm your AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ],
}

const AssistantContext = createContext<AssistantContextType | undefined>(undefined)

export function useAssistant() {
  const context = useContext(AssistantContext)
  if (context === undefined) {
    throw new Error("useAssistant must be used within an AssistantProvider")
  }
  return context
}

export function AssistantProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AssistantState>(defaultState)
  const pathname = usePathname()

  // Update current page and track visited pages
  useEffect(() => {
    if (pathname) {
      setState((prev) => ({
        ...prev,
        currentPage: pathname,
        visitedPages: prev.visitedPages.includes(pathname) ? prev.visitedPages : [...prev.visitedPages, pathname],
      }))

      // Reset tracking when navigating to a new page
      resetTracking()
    }
  }, [pathname])

  // Track scroll events for engagement calculation
  useEffect(() => {
    const handleScroll = () => {
      trackScroll()
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Update animation variables periodically
  useEffect(() => {
    const interval = setInterval(() => {
      updateAnimationVariables()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Generate contextual suggestions based on current page
  useEffect(() => {
    if (!state.currentPage) return

    let suggestions: string[] = []

    if (state.currentPage === "/") {
      suggestions = ["Tell me about your services", "What products do you offer?", "How can I contact your team?"]
    } else if (state.currentPage.includes("/services")) {
      suggestions = [
        "What industries do you serve?",
        "Do you offer custom solutions?",
        "What's your development process?",
      ]
    } else if (state.currentPage.includes("/our-products")) {
      if (state.currentPage.includes("techsync-cloud")) {
        suggestions = [
          "How does TechSync Cloud compare to AWS?",
          "What's the pricing model?",
          "Can I migrate my existing cloud setup?",
        ]
      } else {
        suggestions = [
          "Which product is right for my business?",
          "Do you offer product demos?",
          "What support options are available?",
        ]
      }
    } else if (state.currentPage.includes("/about")) {
      suggestions = [
        "Tell me about your company history",
        "What are your core values?",
        "Who are your key team members?",
      ]
    } else if (state.currentPage.includes("/contact")) {
      suggestions = [
        "What's your response time?",
        "Do you have offices in my location?",
        "Can I schedule a consultation?",
      ]
    } else {
      suggestions = [
        "What services do you offer?",
        "Tell me about your products",
        "How can I get in touch with your team?",
      ]
    }

    setState((prev) => ({
      ...prev,
      suggestedTopics: suggestions,
    }))
  }, [state.currentPage])

  // Check if we should proactively offer help
  useEffect(() => {
    // Only show proactive suggestions if:
    // 1. The assistant is not already open
    // 2. The user hasn't interacted with the assistant recently
    // 3. The assistant is not muted
    const shouldOfferHelp =
      !state.isOpen &&
      !state.isMuted &&
      (!state.lastInteraction || new Date().getTime() - state.lastInteraction.getTime() > 60000) &&
      state.visitedPages.length > 2

    if (shouldOfferHelp) {
      // Wait 15 seconds before offering help
      const timer = setTimeout(() => {
        // Add a proactive message based on user behavior
        const newMessage = {
          sender: "ai" as const,
          message: `I noticed you've been exploring our site. Can I help you find something specific?`,
          timestamp: new Date(),
        }

        setState((prev) => ({
          ...prev,
          chatHistory: [...prev.chatHistory, newMessage],
          isOpen: true,
        }))
      }, 15000)

      return () => clearTimeout(timer)
    }
  }, [state.visitedPages, state.isOpen, state.isMuted, state.lastInteraction])

  // Assistant actions
  const openAssistant = () => {
    setState((prev) => ({
      ...prev,
      isOpen: true,
      lastInteraction: new Date(),
      hasInteracted: true,
    }))
  }

  const closeAssistant = () => {
    setState((prev) => ({
      ...prev,
      isOpen: false,
      lastInteraction: new Date(),
    }))
  }

  const toggleAssistant = () => {
    setState((prev) => ({
      ...prev,
      isOpen: !prev.isOpen,
      lastInteraction: new Date(),
      hasInteracted: true,
    }))
  }

  const muteAssistant = () => {
    setState((prev) => ({
      ...prev,
      isMuted: true,
      isOpen: false,
    }))
  }

  const unmuteAssistant = () => {
    setState((prev) => ({
      ...prev,
      isMuted: false,
    }))
  }

  const sendMessage = (message: string) => {
    if (!message.trim()) return

    // Add user message
    const userMessage = {
      sender: "user" as const,
      message,
      timestamp: new Date(),
    }

    setState((prev) => ({
      ...prev,
      chatHistory: [...prev.chatHistory, userMessage],
      lastInteraction: new Date(),
      hasInteracted: true,
    }))

    // Generate AI response based on user message and context
    setTimeout(() => {
      let response = ""
      const lowerMsg = message.toLowerCase()

      // Generate contextual response based on current page and message content
      if (state.currentPage.includes("/our-products")) {
        if (lowerMsg.includes("price") || lowerMsg.includes("cost")) {
          response =
            "Our products have flexible pricing based on your needs. The Professional plan for most products starts at $999/month with annual billing. Would you like to see a detailed pricing breakdown?"
        } else if (lowerMsg.includes("demo") || lowerMsg.includes("try")) {
          response =
            "I'd be happy to arrange a demo for you! You can also start a 14-day free trial with full access to all features. Would you like me to help you get started with a trial?"
        } else if (lowerMsg.includes("compare") || lowerMsg.includes("difference")) {
          response =
            "Our products are designed to work together but serve different needs. Would you like me to explain the key differences between specific products, or would you prefer a general overview?"
        } else {
          response =
            "Thanks for your interest in our products. I can provide detailed information about features, pricing, implementation, or technical specifications. What specific aspect would you like to know more about?"
        }
      } else if (state.currentPage.includes("/services")) {
        if (lowerMsg.includes("process") || lowerMsg.includes("methodology")) {
          response =
            "Our service delivery follows a proven 5-step methodology: Discovery, Design, Development, Testing, and Deployment. Each phase involves close collaboration with your team. Would you like me to explain any specific phase in more detail?"
        } else if (lowerMsg.includes("timeline") || lowerMsg.includes("how long")) {
          response =
            "Project timelines vary based on scope and complexity. Typical projects range from 2-3 months for smaller initiatives to 6-12 months for enterprise solutions. We'd be happy to provide a more specific estimate based on your requirements."
        } else {
          response =
            "Our services are tailored to meet your specific business needs. I can provide more information about our approach, technologies, or success stories. What would you like to know more about?"
        }
      } else if (state.currentPage === "/") {
        if (lowerMsg.includes("about") || lowerMsg.includes("company")) {
          response =
            "TechSync99 is a leading technology solutions provider founded in 2018. We specialize in custom software development, cloud solutions, and digital transformation. Would you like to learn more about our history or our team?"
        } else if (lowerMsg.includes("contact") || lowerMsg.includes("talk")) {
          response =
            "You can reach our team by phone at +1 (555) 123-4567, by email at info@techsync99.com, or by filling out the contact form on our Contact page. Would you like me to direct you there?"
        } else {
          response =
            "Welcome to TechSync99! We offer a range of technology solutions and products to help businesses thrive in the digital age. How can I assist you today?"
        }
      } else {
        response =
          "Thank you for your message. I'm here to help you navigate our website and find the information you need. What specific topic are you interested in learning more about?"
      }

      const aiMessage = {
        sender: "ai" as const,
        message: response,
        timestamp: new Date(),
      }

      setState((prev) => ({
        ...prev,
        chatHistory: [...prev.chatHistory, aiMessage],
      }))
    }, 1000)
  }

  const clearHistory = () => {
    setState((prev) => ({
      ...prev,
      chatHistory: [
        {
          sender: "ai",
          message: "Hi there! I'm your AI assistant. How can I help you today?",
          timestamp: new Date(),
        },
      ],
    }))
  }

  const dismissSuggestion = (topic: string) => {
    setState((prev) => ({
      ...prev,
      suggestedTopics: prev.suggestedTopics.filter((t) => t !== topic),
    }))
  }

  const value = {
    state,
    openAssistant,
    closeAssistant,
    toggleAssistant,
    muteAssistant,
    unmuteAssistant,
    sendMessage,
    clearHistory,
    dismissSuggestion,
  }

  return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>
}
