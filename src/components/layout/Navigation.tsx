'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] = useState(false)
  const [isBannerVisible, setIsBannerVisible] = useState(false)
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    function handleScroll() {
      const y = window.scrollY
      const pastThreshold = y > 200

      // Keep existing navbar background logic
      setIsScrolled(y > 10)

      // Track whether user is past threshold
      setHasScrolledPastThreshold(pastThreshold)

      if (!pastThreshold) {
        // If user goes back up near the top → hide banner immediately
        setIsBannerVisible(false)
        if (scrollTimerRef.current) {
          clearTimeout(scrollTimerRef.current)
        }
        return
      }

      // User is scrolling while past threshold → show banner immediately
      setIsBannerVisible(true)

      // Reset 2-second hide timer
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current)
      }
      scrollTimerRef.current = setTimeout(() => {
        setIsBannerVisible(false)
      }, 2000)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current)
      }
    }
  }, [])

  const navItems = [
    { name: 'Start', id: 'start' },
    { name: 'Vorteile', id: 'vorteile' },
    { name: 'Rechner', id: 'rechner' },
    { name: 'So funktioniert\'s', id: 'so-funktionierts' },
    { name: 'Vergleich', id: 'vergleich' },
    { name: 'FAQ', id: 'faq' },
  ]

  const handleSmoothScroll = (sectionId: string) => {
    if (typeof window === 'undefined') return
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      const { pathname, search } = window.location
      window.history.replaceState(null, '', `${pathname}${search}`)
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_12px_32px_rgba(106,83,52,0.08)] border-primary-900/10'
          : 'bg-gradient-to-b from-white/80 to-transparent border-transparent'
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 px-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/rpmg-logo-removebg-preview.png"
              alt="BRAMG Logo"
              width={120}
              height={67}
              className="h-18 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={`#${item.id}`}
                onClick={(event) => {
                  event.preventDefault()
                  handleSmoothScroll(item.id)
                }}
                className={cn(
                  'group relative inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium text-primary-800/80 transition-all duration-200',
                  'hover:text-primary-900 hover:bg-primary-100/30 hover:shadow-sm'
                )}
              >
                {item.name}
                <span className="pointer-events-none absolute inset-x-4 -bottom-2 h-[3px] rounded-full bg-gradient-to-r from-[#8B6A3C] to-[#CDAA6D] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.button
              type="button"
              onClick={() => handleSmoothScroll('beratung')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #CDAA6D 0%, #8B6A3C 100%)',
                border: '1px solid rgba(255,255,255,0.45)',
                backdropFilter: 'blur(10px)'
              }}
            >
              Kostenlose Erstberatung
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-primary-100/40 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary-950" />
            ) : (
              <Menu className="w-6 h-6 text-primary-950" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "hidden lg:block border-t border-white/20 transition-all duration-500 ease-in-out overflow-hidden",
          isBannerVisible ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-2">
          <p className="flex flex-col items-center justify-center gap-1 text-[11px] font-semibold tracking-[0.3em] uppercase text-primary-600/80 sm:flex-row">
            Verlässliche Beratung. Maßgeschneiderte Lösungen. Für Geschäftsführer, die vorausschauend handeln.
          </p>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-20 bg-white shadow-xl transition-transform duration-300 transform',
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className="p-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={`#${item.id}`}
              onClick={(event) => {
                event.preventDefault()
                handleSmoothScroll(item.id)
                setIsMobileMenuOpen(false)
              }}
              className="block py-3 px-4 rounded-full bg-primary-50/40 text-primary-900/80 hover:bg-primary-100/60 hover:text-primary-900 font-medium transition-all"
            >
              {item.name}
            </Link>
          ))}
          <motion.button
            type="button"
            onClick={() => {
              handleSmoothScroll('beratung')
              setIsMobileMenuOpen(false)
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 inline-flex w-full justify-center items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #CDAA6D 0%, #8B6A3C 100%)',
              border: '1px solid rgba(255,255,255,0.35)',
              backdropFilter: 'blur(10px)'
            }}
          >
            Kostenlose Erstberatung
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
