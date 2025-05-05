"use client"

import { useState, useEffect } from "react"
import { useAssistant } from "./ai-assistant-provider"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, MessageSquare, ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"

export function AIPageGuide() {
  const { state, openAssistant, sendMessage } = useAssistant()
  const [isVisible, setIsVisible] = useState(false)
  const [guideContent, setGuideContent] = useState({
    title: "",
    description: "",
    cta: "",
  })
  const pathname = usePathname()

  // Show guide after a delay when user visits a new page
  useEffect(() => {
    if (state.isMuted || state.isOpen) return

    // Only show guide if user hasn't interacted with assistant recently
    const shouldShowGuide = !state.lastInteraction || new Date().getTime() - state.lastInteraction.getTime() > 30000

    if (shouldShowGuide) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [pathname, state.isMuted, state.isOpen, state.lastInteraction])

  // Set guide content based on current page
  useEffect(() => {
    if (!pathname) return

    let content = {
      title: "",
      description: "",
      cta: "",
    }

    if (pathname === "/") {
      content = {
        title: "Welcome to TechSync99",
        description: "I can help you explore our services, products, or answer any questions you might have.",
        cta: "What would you like to know?",
      }
    } else if (pathname.includes("/services")) {
      content = {
        title: "Exploring Our Services",
        description: "Looking for a specific service? I can help you find the right solution for your business needs.",
        cta: "Ask me about our service offerings",
      }
    } else if (pathname.includes("/our-products")) {
      content = {
        title: "Discover Our Products",
        description:
          "Not sure which product is right for you? I can help you compare features and find the perfect fit.",
        cta: "Help me find the right product",
      }
    } else if (pathname.includes("/about")) {
      content = {
        title: "About TechSync99",
        description: "Want to learn more about our company, mission, or team? I can provide all the details.",
        cta: "Tell me more about TechSync99",
      }
    } else if (pathname.includes("/contact")) {
      content = {
        title: "Get in Touch",
        description: "Need help reaching the right department? I can guide you to the right contact person.",
        cta: "Help me contact the right person",
      }
    } else {
      content = {
        title: "Need Assistance?",
        description: "I can help you navigate our website and find the information you need.",
        cta: "How can I help you today?",
      }
    }

    setGuideContent(content)
  }, [pathname])

  const handleDismiss = () => {
    setIsVisible(false)
  }

  const handleCTA = () => {
    openAssistant()
    sendMessage(guideContent.cta)
    setIsVisible(false)
  }

  if (!isVisible || state.isMuted || state.isOpen) return null

  return (
    <Card className="fixed bottom-20 right-4 w-[300px] shadow-lg z-40 animate-in slide-in-from-right-10 duration-300">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{guideContent.title}</h3>
          <Button variant="ghost" size="icon" onClick={handleDismiss} className="h-6 w-6 -mt-1 -mr-1">
            <X size={14} />
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">{guideContent.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button variant="ghost" size="sm" onClick={handleDismiss}>
          Dismiss
        </Button>
        <Button size="sm" onClick={handleCTA} className="gap-1">
          <MessageSquare size={14} />
          <span>Chat Now</span>
          <ArrowRight size={14} />
        </Button>
      </CardFooter>
    </Card>
  )
}
