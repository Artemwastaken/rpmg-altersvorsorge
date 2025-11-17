import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import CookieConsentBanner from '@/components/layout/CookieConsent'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Betriebliche Altersvorsorge für Geschäftsführer | Bis zu 100.000 € pro Jahr steuerfrei | RP&MG',
  description: 'Betriebliche Altersvorsorge für GmbH & UG Geschäftsführer: Nutzen Sie §3 Nr. 63 und §4d EStG für bis zu 100.000 € pro Jahr steuerfrei. 100% absetzbar, 0% Steuerlast. Kostenlose Beratung.',
  keywords: 'betriebliche Altersvorsorge, Geschäftsführer, GmbH, UG, §3 Nr. 63 EStG, §4d EStG, Direktversicherung, Unterstützungskasse, Steueroptimierung, steuerfrei, Altersvorsorge Geschäftsführer, RPMG Consulting',
  authors: [{ name: 'RP&MG Consulting GmbH & Co. KG' }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Betriebliche Altersvorsorge für Geschäftsführer | Bis zu 100.000 € steuerfrei',
    description: 'Nutzen Sie §3 Nr. 63 und §4d EStG für maximale Steuervorteile. 100% absetzbar, 0% Steuerlast.',
    type: 'website',
    locale: 'de_DE',
    images: [
      {
        url: '/images/rpmg-logo-cropped.png',
        width: 1200,
        height: 630,
        alt: 'RP&MG Consulting - Betriebliche Altersvorsorge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Betriebliche Altersvorsorge für Geschäftsführer | RP&MG',
    description: 'Bis zu 100.000 € pro Jahr steuerfrei. 100% absetzbar, 0% Steuerlast.',
    images: ['/images/rpmg-logo-cropped.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
        <Analytics />
      </body>
    </html>
  )
}