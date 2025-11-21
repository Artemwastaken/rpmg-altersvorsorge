'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Users, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import HeroIllustration from './HeroIllustration'

const Hero = () => {
  const handleScroll = (sectionId: string) => {
    if (typeof window === 'undefined') return
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="start" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-accent-50 via-white to-accent-100 -z-10"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-40 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20 -z-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent-200 rounded-full blur-3xl opacity-20 -z-10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.div
        className="container relative mx-auto max-w-7xl min-h-[620px] pt-32 pb-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* === LEFT: HERO TEXT === */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 space-y-8 max-w-xl lg:-mt-[10%]"
        >
          <div className="space-y-3">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary-800 tracking-wide">
              RP&MG UNTERNEHMERPLAN
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-primary-300 via-primary-400 to-transparent" />
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">
              Für Unternehmer, Geschäftsführer & Vorstände
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-950 leading-tight">
              Betriebsvermögen in <span className="gradient-text">Privatvermögen</span> umwandeln
            </h1>

            <div className="space-y-3">
              <p className="text-lg lg:text-xl text-primary-700 leading-relaxed">
                Mit Ihrer GmbH Steuern sparen & Privatvermögen aufbauen
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => handleScroll('rechner')}
              className="btn-primary group whitespace-nowrap"
            >
              Ersparnis berechnen
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => handleScroll('beratung')}
              className="btn-secondary whitespace-nowrap"
            >
              Kostenlose Erstberatung
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* === RIGHT: HERO ILLUSTRATION === */}
        <div className="relative z-10 flex justify-center items-center mt-8">
          <HeroIllustration />
        </div>

      </motion.div>
    </section>
  )
}

export default Hero
