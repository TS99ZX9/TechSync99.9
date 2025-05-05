import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import { AssistantProvider } from "@/components/ai-assistant/ai-assistant-provider"
import { AIAssistant } from "@/components/ai-assistant/ai-assistant"
import { AIPageGuide } from "@/components/ai-assistant/ai-page-guide"
import { MasterAnimation } from "@/components/animations/master-animation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { CursorFollower } from "@/components/animations/cursor-follower"
import { Toaster } from "@/components/ui/toaster"
import { NewsletterPopup } from "@/components/marketing/newsletter-popup"
import { CookieConsent } from "@/components/marketing/cookie-consent"
import { Analytics } from "@/components/analytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

// Loading fallback for Suspense
function LoadingFallback() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-950">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-cyan-400 border-r-transparent"></div>
        <p className="mt-4 text-white">Loading...</p>
      </div>
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AssistantProvider>
            <Suspense fallback={<LoadingFallback />}>
              <MasterAnimation />
              <CursorFollower />
              <Navbar />
              <main className="flex-1 relative z-10 overflow-hidden">{children}</main>
              <Footer />
              <AIAssistant />
              <AIPageGuide />
              <NewsletterPopup />
              <CookieConsent />
              <Toaster />
              <Analytics />
            </Suspense>
          </AssistantProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
