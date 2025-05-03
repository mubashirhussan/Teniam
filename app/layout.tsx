import type { Metadata, Viewport } from "next"
import "./globals.css"
import type * as React from "react"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "Tech Directory",
    template: "%s | Tech Directory",
  },
  description: "Discover and explore the latest tech tools and resources",
  generator: "v0.dev",
  metadataBase: new URL("https://tech-directory.vercel.app"),
  openGraph: {
    title: "Tech Directory",
    description: "Discover and explore the latest tech tools and resources",
    url: "https://tech-directory.vercel.app",
    siteName: "Tech Directory",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Directory",
    description: "Discover and explore the latest tech tools and resources",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
