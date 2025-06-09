import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { AssistantProvider } from "@/components/ai-assistant/ai-assistant-provider"
import { AIAssistant } from "@/components/ai-assistant/ai-assistant"
import { CookieConsent } from "@/components/marketing/cookie-consent"
import { NewsletterPopup } from "@/components/marketing/newsletter-popup"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "TechSync99 - Advanced Technology Solutions",
    template: "%s | TechSync99",
  },
  description:
    "Leading technology company providing innovative software development, AI solutions, and digital transformation services.",
  keywords: ["technology", "software development", "AI solutions", "digital transformation", "web development"],
  authors: [{ name: "TechSync99" }],
  creator: "TechSync99",
  publisher: "TechSync99",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techsync99.com",
    title: "TechSync99 - Advanced Technology Solutions",
    description:
      "Leading technology company providing innovative software development, AI solutions, and digital transformation services.",
    siteName: "TechSync99",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechSync99 - Advanced Technology Solutions",
    description:
      "Leading technology company providing innovative software development, AI solutions, and digital transformation services.",
    creator: "@techsync99",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <AssistantProvider>
            <div className="relative min-h-screen bg-background">
              <Suspense fallback={<div>Loading navigation...</div>}>
                <Navbar />
              </Suspense>

              <main className="relative">{children}</main>

              <Footer />

              <Suspense fallback={null}>
                <AIAssistant />
                <CookieConsent />
                <NewsletterPopup />
                <Analytics />
              </Suspense>
            </div>
          </AssistantProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
