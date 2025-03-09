/**
 * Cloned By Sahilpreet Singh
 * 24BMM0084
 */

import { type ReactNode } from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Rocket Air (cloned by Sahilpreet Singh 24BMM0084) - Digital Agency",
  description: "Creating exceptional digital experiences that drive business growth.",
  openGraph: {
    title: "Rocket Air (cloned by Sahilpreet Singh 24BMM0084) - Digital Agency",
    description: "Creating exceptional digital experiences that drive business growth.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rocket Air (cloned by Sahilpreet Singh 24BMM0084) - Digital Agency",
    description: "Creating exceptional digital experiences that drive business growth.",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem 
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}