"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, RefreshCw } from "lucide-react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html>
      <body>
        <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-red-900/30 to-slate-900">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
          </div>

          <div className="z-10 flex flex-col items-center justify-center space-y-8 text-center px-4">
            <div className="text-7xl font-bold text-red-500">Critical Error</div>

            <h1 className="text-3xl font-bold text-white">Something went seriously wrong</h1>

            <p className="max-w-md text-lg text-white/80">
              We apologize for the inconvenience. The application encountered a critical error.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" onClick={() => reset()} className="gap-2 bg-red-600 hover:bg-red-700 text-white">
                <RefreshCw className="h-5 w-5" />
                Try Again
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                >
                  <Home className="h-5 w-5" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
