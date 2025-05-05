"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, X, Send, Volume2, VolumeX, Minimize, MessageSquare } from "lucide-react"
import { useAssistant } from "./ai-assistant-provider"
import { trackMouseMovement, trackClick, getEngagementLevel, updateAnimationVariables } from "@/utils/animation-utils"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar } from "@/components/ui/avatar"

export function AIAssistant() {
  const { state, openAssistant, closeAssistant, toggleAssistant, muteAssistant, unmuteAssistant, sendMessage } =
    useAssistant()

  const [inputValue, setInputValue] = useState("")
  const [isMinimized, setIsMinimized] = useState(false)
  const [engagementLevel, setEngagementLevel] = useState("medium")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Track mouse movements for engagement calculation
  useEffect(() => {
    const handleMouseMove = () => {
      trackMouseMovement()
    }

    const handleClick = () => {
      trackClick()
    }

    // Update engagement level every 2 seconds
    const engagementInterval = setInterval(() => {
      const level = getEngagementLevel()
      setEngagementLevel(level)
      updateAnimationVariables()
    }, 2000)

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("click", handleClick)
      clearInterval(engagementInterval)
    }
  }, [])

  // Scroll to bottom of messages when chat history updates
  useEffect(() => {
    if (messagesEndRef.current && state.isOpen) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [state.chatHistory, state.isOpen])

  // Focus input when chat opens
  useEffect(() => {
    if (state.isOpen && inputRef.current && !isMinimized) {
      inputRef.current.focus()
    }
  }, [state.isOpen, isMinimized])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      sendMessage(inputValue)
      setInputValue("")
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  // Animation variants based on engagement level
  const getAnimationVariants = () => {
    const baseTransition = {
      type: "spring",
      stiffness: engagementLevel === "high" ? 400 : engagementLevel === "medium" ? 300 : 200,
      damping: engagementLevel === "high" ? 15 : engagementLevel === "medium" ? 20 : 25,
    }

    return {
      initial: {
        opacity: 0,
        y: 20,
        scale: 0.95,
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: baseTransition,
      },
      exit: {
        opacity: 0,
        y: 20,
        scale: 0.95,
        transition: { ...baseTransition, duration: 0.2 },
      },
    }
  }

  // Get message animation variants
  const getMessageAnimationVariants = () => {
    return {
      initial: {
        opacity: 0,
        y: 10,
        scale: 0.95,
      },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: engagementLevel === "high" ? 0.3 : engagementLevel === "medium" ? 0.5 : 0.7,
        },
      },
    }
  }

  // Get button hover animation
  const getButtonHoverAnimation = () => {
    return {
      scale: 1.05,
      backgroundColor: "var(--accent-red)",
      transition: { duration: 0.2 },
    }
  }

  if (state.isMuted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          onClick={unmuteAssistant}
          className="rounded-full p-3 shadow-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0"
          aria-label="Enable AI Assistant"
        >
          <MessageSquare size={24} />
        </Button>
      </motion.div>
    )
  }

  return (
    <>
      {/* Chat button (visible when chat is closed) */}
      {!state.isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <Button
            onClick={openAssistant}
            className="rounded-full p-3 shadow-lg bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0"
            aria-label="Open AI Assistant"
          >
            <MessageSquare size={24} />
          </Button>
        </motion.div>
      )}

      {/* Chat window (visible when chat is open) */}
      <AnimatePresence>
        {state.isOpen && (
          <motion.div
            className="fixed z-50 bottom-4 right-4"
            variants={getAnimationVariants()}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Card
              className={`shadow-xl border border-red-500/20 ${
                isMinimized ? "w-auto h-auto" : "w-[350px] md:w-[400px] h-[500px] max-h-[80vh]"
              }`}
              style={{
                background: "linear-gradient(to bottom, #1a1a1a, #121212)",
              }}
            >
              {isMinimized ? (
                <Button
                  onClick={toggleMinimize}
                  className="p-3 rounded-md bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0"
                >
                  <MessageSquare size={24} />
                </Button>
              ) : (
                <>
                  <CardHeader
                    className="flex flex-row items-center justify-between p-4 border-b border-gray-800"
                    style={{
                      background: "linear-gradient(to right, rgba(230, 57, 70, 0.1), rgba(230, 57, 70, 0.05))",
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8 bg-gradient-to-r from-red-500 to-red-600">
                        <Bot className="h-4 w-4 text-white" />
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-white">AI Assistant</h3>
                        <p className="text-xs text-gray-400">How can I help you today?</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleMinimize}
                        className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                        aria-label="Minimize"
                        whileHover={getButtonHoverAnimation()}
                      >
                        <Minimize size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={state.isMuted ? unmuteAssistant : muteAssistant}
                        className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                        aria-label={state.isMuted ? "Unmute" : "Mute"}
                        whileHover={getButtonHoverAnimation()}
                      >
                        {state.isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={closeAssistant}
                        className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
                        aria-label="Close"
                        whileHover={getButtonHoverAnimation()}
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0 flex flex-col h-[calc(100%-120px)]" ref={chatContainerRef}>
                    <ScrollArea className="flex-1 p-4">
                      <div className="space-y-4">
                        {state.chatHistory.map((msg, i) => (
                          <motion.div
                            key={i}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            variants={getMessageAnimationVariants()}
                            initial="initial"
                            animate="animate"
                          >
                            <div
                              className={`max-w-[80%] rounded-lg p-3 ${
                                msg.sender === "user"
                                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white"
                                  : "bg-gray-800 text-gray-200"
                              }`}
                            >
                              {msg.message}
                            </div>
                          </motion.div>
                        ))}
                        <div ref={messagesEndRef} />
                      </div>
                    </ScrollArea>

                    {/* Suggested topics */}
                    {state.suggestedTopics.length > 0 && (
                      <div className="p-2 border-t border-gray-800 bg-gray-900/50">
                        <p className="text-xs text-gray-400 mb-2">Suggested topics:</p>
                        <div className="flex flex-wrap gap-2">
                          {state.suggestedTopics.slice(0, 3).map((topic, i) => (
                            <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-xs border-red-500/30 text-gray-300 hover:bg-red-500/10 hover:text-white"
                                onClick={() => handleSuggestionClick(topic)}
                              >
                                {topic}
                              </Button>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="p-2 border-t border-gray-800">
                    <form onSubmit={handleSubmit} className="flex w-full gap-2">
                      <Input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Type your message..."
                        className="flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-red-500/50 focus:ring-red-500/20"
                      />
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          type="submit"
                          size="icon"
                          disabled={!inputValue.trim()}
                          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                        >
                          <Send size={16} />
                        </Button>
                      </motion.div>
                    </form>
                  </CardFooter>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
