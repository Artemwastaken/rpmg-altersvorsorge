import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const legalLinks = [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'Erstinformation', href: '/Docs/RPMG-Erstinformationen.pdf', isExternal: true },
  ]

  return (
    <footer className="bg-primary-950 text-primary-100">
      {/* Main Footer Content */}
      <div className="container py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Column 1: Logo */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/rpmg-logo-removebg-preview.png"
                alt="RPMG Logo"
                width={120}
                height={67}
                className="h-28 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex items-center gap-4 justify-end text-sm">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Phone className="w-4 h-4 text-primary-500" />
              <a href="tel:+49221924280030" className="hover:text-white transition-colors">
                +49 (0) 221 / 92 42 80 30
              </a>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Mail className="w-4 h-4 text-primary-500" />
              <a href="mailto:info@rpmg.de" className="hover:text-white transition-colors">
                info@rpmg.de
              </a>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <MapPin className="w-4 h-4 text-primary-500" />
              <span>
                Lindenstraße 14, 50674 Köln
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-3">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center">
            <p className="text-sm text-gray-400">
              © {currentYear} RP&MG Consulting GmbH & Co. KG. Alle Rechte vorbehalten.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-2 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  {index > 0 && <span className="text-gray-600">|</span>}
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer