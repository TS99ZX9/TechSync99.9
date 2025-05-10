"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "lucide-react"

// Dynamically import the animated client component with no SSR
const AnimatedNotFound = dynamic(() => import("./not-found-client").then((mod) => mod.NotFoundClient), {
  ssr: false,
  loading: () => <StaticNotFound />,
})

// Static fallback component for SSR and loading state
function StaticNotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 z-0"></div>

      {/* Static elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="z-10 flex flex-col items-center justify-center space-y-8 text-center px-4">
        <div className="text-9xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          404
        </div>

        <h1 className="text-4xl font-bold text-white">Page Not Found</h1>

        <p className="max-w-md text-lg text-white/80">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="/">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-purple-500/20"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
            className="gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function NotFound() {
  return (
    <Suspense fallback={<StaticNotFound />}>
      <AnimatedNotFound />
    </Suspense>
  )
}
