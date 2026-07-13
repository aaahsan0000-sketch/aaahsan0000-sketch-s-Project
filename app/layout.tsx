import React from "react"
import type { Metadata, Viewport } from 'next'
import { Jost, Playfair_Display, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: '--font-jost',
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: '--font-playfair',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: 'Fitness Republic — Premium Online Coaching',
  description: 'Personalized training, nutrition, and 1-on-1 coaching engineered for real transformation. Train with expert coaches from anywhere.',
  keywords: ['online fitness coaching', 'personal training', 'nutrition coaching', 'strength training', 'body transformation', 'workout programs'],
}

export const viewport: Viewport = {
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jost.variable} ${playfair.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
