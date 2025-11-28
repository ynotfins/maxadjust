import './globals.css'

import { Playfair_Display, Roboto } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react'
import { AppInjection } from '@/components/app-injection'
import type { Metadata } from 'next'

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MAX ADJUST - Licensed Public Adjusters | Maximize Your Insurance Settlement',
  description: 'Licensed public adjusters fighting for your rights. We handle property damage claims from water, fire, storm, and more. Get 500% higher settlements. 24/7 emergency support. Call (888) 999-5740.',
  keywords: 'public adjuster, insurance claims, property damage, water damage, fire damage, storm damage, insurance settlement, claim assistance, New Jersey public adjuster',
  openGraph: {
    title: 'MAX ADJUST - Maximize Your Insurance Settlement',
    description: 'Licensed public adjusters getting you 500% higher settlements. 24/7 emergency support for all property damage claims.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${playfairDisplay.variable} ${roboto.variable} antialiased`}
      >
        <AppInjection />
        <Analytics />
        {children}
      </body>
    </html>
  )
}