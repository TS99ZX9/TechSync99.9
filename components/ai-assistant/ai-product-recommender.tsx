"use client"

import { useState } from "react"
import { useAssistant } from "./ai-assistant-provider"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

type Question = {
  id: string
  text: string
  options: {
    value: string
    label: string
  }[]
}

type ProductRecommendation = {
  id: string
  name: string
  description: string
  url: string
}

const questions: Question[] = [
  {
    id: "business_size",
    text: "What is the size of your business?",
    options: [
      { value: "small", label: "Small (1-50 employees)" },
      { value: "medium", label: "Medium (51-500 employees)" },
      { value: "large", label: "Large (500+ employees)" },
      { value: "enterprise", label: "Enterprise" },
    ],
  },
  {
    id: "primary_need",
    text: "What is your primary need?",
    options: [
      { value: "cloud", label: "Cloud Infrastructure" },
      { value: "analytics", label: "Data Analytics" },
      { value: "automation", label: "Process Automation" },
      { value: "security", label: "Security Solutions" },
    ],
  },
  {
    id: "budget",
    text: "What is your budget range?",
    options: [
      { value: "low", label: "Under $10,000" },
      { value: "medium", label: "$10,000 - $50,000" },
      { value: "high", label: "$50,000 - $100,000" },
      { value: "enterprise", label: "$100,000+" },
    ],
  },
  {
    id: "timeline",
    text: "What is your implementation timeline?",
    options: [
      { value: "immediate", label: "Immediate (1-2 months)" },
      { value: "short", label: "Short-term (3-6 months)" },
      { value: "medium", label: "Medium-term (6-12 months)" },
      { value: "long", label: "Long-term (12+ months)" },
    ],
  },
]

const products: ProductRecommendation[] = [
  {
    id: "techsync-cloud",
    name: "TechSync Cloud",
    description: "Enterprise-grade cloud infrastructure with advanced security and scalability.",
    url: "/our-products/techsync-cloud",
  },
  {
    id: "techsync-analytics",
    name: "TechSync Analytics",
    description: "Powerful data analytics platform with AI-driven insights and visualization tools.",
    url: "/our-products/techsync-analytics",
  },
  {
    id: "techsync-automation",
    name: "TechSync Automation",
    description: "Streamline your business processes with our intelligent automation platform.",
    url: "/our-products/techsync-automation",
  },
  {
    id: "techsync-security",
    name: "TechSync Security",
    description: "Comprehensive security solutions to protect your business from threats.",
    url: "/our-products/techsync-security",
  },
]

export function AIProductRecommender({ onClose }: { onClose: () => void }) {
  const { openAssistant, sendMessage } = useAssistant()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [recommendation, setRecommendation] = useState<ProductRecommendation | null>(null)

  const handleAnswer = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      // Generate recommendation based on answers
      const recommendedProduct = getRecommendation(answers)
      setRecommendation(recommendedProduct)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleChat = () => {
    if (recommendation) {
      openAssistant()
      sendMessage(
        `I'm interested in learning more about ${recommendation.name}. Can you tell me more about its features and benefits?`,
      )
      onClose()
    }
  }

  const getRecommendation = (answers: Record<string, string>): ProductRecommendation => {
    // Simple recommendation logic based on primary need
    // In a real implementation, this would be more sophisticated
    const primaryNeed = answers.primary_need

    switch (primaryNeed) {
      case "cloud":
        return products.find((p) => p.id === "techsync-cloud")!
      case "analytics":
        return products.find((p) => p.id === "techsync-analytics")!
      case "automation":
        return products.find((p) => p.id === "techsync-automation")!
      case "security":
        return products.find((p) => p.id === "techsync-security")!
      default:
        // Default recommendation
        return products[0]
    }
  }

  const currentQuestion = questions[currentStep]
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center justify-between p-4 border-b">
        <h3 className="font-semibold">Product Finder</h3>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X size={16} />
        </Button>
      </CardHeader>
      <CardContent className="p-4">
        {recommendation ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Check className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-center">{recommendation.name}</h3>
            <p className="text-center text-muted-foreground">{recommendation.description}</p>
            <div className="flex flex-col gap-2 mt-4">
              <Link href={recommendation.url} passHref>
                <Button className="w-full">View Product Details</Button>
              </Link>
              <Button variant="outline" onClick={handleChat}>
                Chat with AI about this product
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-1">
                Step {currentStep + 1} of {questions.length}
              </p>
              <h3 className="text-lg font-semibold">{currentQuestion.text}</h3>
            </div>
            <RadioGroup value={currentAnswer || ""} onValueChange={(value) => handleAnswer(currentQuestion.id, value)}>
              <div className="space-y-2">
                {currentQuestion.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </>
        )}
      </CardContent>
      {!recommendation && (
        <CardFooter className="flex justify-between p-4 border-t">
          <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button onClick={handleNext} disabled={!currentAnswer}>
            {currentStep < questions.length - 1 ? (
              <>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Get Recommendation"
            )}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
