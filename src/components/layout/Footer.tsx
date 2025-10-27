import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    unternehmen: [
      { name: 'Über uns', href: '#' },
      { name: 'Team', href: '#' },
      { name: 'Karriere', href: '#' },
      { name: 'Partner werden', href: '#' },
    ],
    service: [
      { name: 'Betriebliche Altersvorsorge', href: '#altersvorsorge' },
      { name: 'Beratung', href: '#beratung' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Downloads', href: '#' },
    ],
    rechtliches: [
      { name: 'Impressum', href: '/impressum' },
      { name: 'Datenschutz', href: '#' },
      { name: 'AGB', href: '#' },
      { name: 'Cookie-Einstellungen', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-primary-950 text-primary-100">
      {/* Main Footer Content */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/images/rpmg-logo.png"
                alt="BRAMG Logo"
                width={140}
                height={78}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-primary-200 mb-6 max-w-sm">
              Ihr Partner für betriebliche Altersvorsorge. Wir helfen Geschäftsführern
              dabei, bis zu 100.000 € pro Jahr steuerfrei für den Ruhestand anzusparen.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-500" />
                <a href="tel:+49221924280030" className="hover:text-white transition-colors">
                  +49 (0) 221 / 92 42 80 30
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-500" />
                <a href="mailto:info@rpmg.de" className="hover:text-white transition-colors">
                  info@rpmg.de
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-500 mt-1" />
                <span>
                  Lindenstraße 14<br />
                  50674 Köln
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Service</h3>
            <ul className="space-y-2">
              {footerLinks.service.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-semibold mb-2">Newsletter</h3>
              <p className="text-gray-400">
                Erhalten Sie regelmäßig Tipps zur Steueroptimierung und Altersvorsorge.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="flex-1 px-4 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-400">
              © {currentYear} RP&MG Consulting GmbH & Co. KG. Alle Rechte vorbehalten.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-950 py-4">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
            <span>BaFin registriert</span>
            <span>•</span>
            <span>ISO 9001 zertifiziert</span>
            <span>•</span>
            <span>Mitglied im BVI</span>
            <span>•</span>
            <span>SSL verschlüsselt</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer