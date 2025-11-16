'use client'

import React from 'react'
import { Users, Shield, Award, Handshake, Building2 } from 'lucide-react'
import HeroCarouselCard from './HeroCarouselCard'

const HeroTrustCard = () => {
  const metrics = [
    {
      icon: Award,
      value: '10+',
      label: 'Jahre Erfahrung',
      detail: 'Bewährte Expertise',
    },
    {
      icon: Handshake,
      value: '95 %',
      label: 'Weiterempfehlung',
      detail: 'Zufriedene Mandate',
    },
    {
      icon: Users,
      value: '1.500+',
      label: 'Kunden',
      detail: 'Vertrauen uns',
    },
    {
      icon: Building2,
      value: 'Staatlich',
      label: 'überwacht',
      detail: 'Gesetzliche Sicherheit',
    },
    {
      icon: Shield,
      value: 'Insolvenz',
      label: 'sicher',
      detail: 'Geschütztes Privatvermögen',
    },
  ]

  return (
    <HeroCarouselCard>
      <div className="flex flex-col gap-4 h-full">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Vertrauen & Sicherheit</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-primary-950 leading-tight">
            Erfahrung. Vertrauen. Sicherheit.
          </h3>
          <p className="mt-2 text-sm text-primary-700">
            Seit über einem Jahrzehnt bewährte Expertise für Ihre Altersvorsorge
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-4">
          {/* 5 Key Points Grid - First 3 in top row, last 2 centered in bottom */}
          <div className="w-full max-w-xl space-y-8 md:space-y-10">
            {/* Top Row: 3 items */}
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              {metrics.slice(0, 3).map((metric, index) => (
                <div key={index} className="flex flex-col items-center gap-3 md:gap-4 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-200 rounded-full blur-xl opacity-40" />
                    <div className="relative flex h-14 w-14 md:h-18 md:w-18 items-center justify-center rounded-full bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 shadow-md">
                      <metric.icon className="h-6 w-6 md:h-8 md:w-8 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-bold text-primary-900">
                      {metric.value}
                    </p>
                    <p className="text-[11px] md:text-xs text-primary-700 font-bold">
                      {metric.label}
                    </p>
                    <p className="text-[10px] md:text-[11px] text-primary-600 mt-0.5">
                      {metric.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row: 2 items centered */}
            <div className="grid grid-cols-2 gap-6 md:gap-10 max-w-md mx-auto">
              {metrics.slice(3, 5).map((metric, index) => (
                <div key={index + 3} className="flex flex-col items-center gap-3 md:gap-4 text-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-200 rounded-full blur-xl opacity-40" />
                    <div className="relative flex h-14 w-14 md:h-18 md:w-18 items-center justify-center rounded-full bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 shadow-md">
                      <metric.icon className="h-6 w-6 md:h-8 md:w-8 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm md:text-base font-bold text-primary-900">
                      {metric.value}
                    </p>
                    <p className="text-[11px] md:text-xs text-primary-700 font-bold">
                      {metric.label}
                    </p>
                    <p className="text-[10px] md:text-[11px] text-primary-600 mt-0.5">
                      {metric.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HeroCarouselCard>
  )
}

export default HeroTrustCard
