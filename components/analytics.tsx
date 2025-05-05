"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would typically initialize your analytics
    // For example, Google Analytics, Mixpanel, etc.

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // Track page view
    console.log(`Page view: ${url}`)

    // Example of how you might initialize Google Analytics
    // if (typeof window.gtag === 'function') {
    //   window.gtag('config', 'YOUR-GA-ID', {
    //     page_path: url,
    //   })
    // }
  }, [pathname, searchParams])

  return null
}
