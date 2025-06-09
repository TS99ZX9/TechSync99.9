import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { EnhancedNavbar } from "@/components/layout/enhanced-navbar"
import { Footer } from "@/components/layout/footer"
import { EnhancedBackground } from "@/components/animations/enhanced-background"
import { CookieConsent } from "@/components/marketing/cookie-consent"
import { NewsletterPopup } from "@/components/marketing/newsletter-popup"
import { Analytics } from "@/components/analytics"
import { METADATA } from "@/lib/constants"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: METADATA.title,
  description: METADATA.description,
  keywords: [
    "software development",
    "enterprise solutions",
    "digital transformation",
    "cloud computing",
    "AI solutions",
    "cybersecurity",
    "data analytics",
    "custom software",
    "technology consulting",
    "web development",
    "mobile apps",
    "DevOps",
    "API development",
    "microservices",
    "blockchain",
  ],
  authors: [{ name: METADATA.companyName }],
  creator: METADATA.companyName,
  publisher: METADATA.companyName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://techsync99.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techsync99.com",
    title: METADATA.title,
    description: METADATA.description,
    siteName: METADATA.companyName,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: METADATA.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: METADATA.title,
    description: METADATA.description,
    images: ["/og-image.jpg"],
    creator: "@techsync99",
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
          {/* Enhanced background animation */}
          <EnhancedBackground density={25} color="rgba(230, 57, 70, 0.15)" speed={0.5} interactive={true} />

          {/* Main layout structure */}
          <Suspense>
            <div className="relative min-h-screen flex flex-col">
              <EnhancedNavbar />

              <main className="flex-1 relative z-10">{children}</main>

              <Footer />
            </div>
          </Suspense>

          {/* Marketing components */}
          <Suspense>
            <CookieConsent />
            <NewsletterPopup />
          </Suspense>

          {/* Analytics */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
