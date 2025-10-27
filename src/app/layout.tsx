import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
  openGraph: {
    title: 'Betriebliche Altersvorsorge für Geschäftsführer | Bis zu 100.000 € steuerfrei',
    description: 'Nutzen Sie §3 Nr. 63 und §4d EStG für maximale Steuervorteile. 100% absetzbar, 0% Steuerlast.',
    type: 'website',
    locale: 'de_DE',
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
        {children}
      </body>
    </html>
  )
}