'use client'

import React from 'react'
import { Users, Star, Award, Handshake } from 'lucide-react'
import HeroCarouselCard from './HeroCarouselCard'

const HeroTrustCard = () => {
  const metrics = [
    {
      icon: Star,
      value: '4,9 / 5',
      label: 'Mandantenrating',
      detail: 'Höchste Zufriedenheit',
    },
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
      detail: 'Vertrauensbeweis',
    },
  ]

  return (
    <HeroCarouselCard>
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Vertrauen</p>
          <h3 className="mt-2 text-3xl font-semibold text-primary-950 leading-tight">
            Vertraut von Deutschlands erfolgreichsten Unternehmern
          </h3>
          <p className="mt-2 text-sm text-primary-700">
            Erfolgreiche Geschäftsführer in ganz Deutschland setzen auf RPMG für ihre steuerfreie Altersvorsorge
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-8">
          {/* Primary Metric - Hero Number */}
          <div className="mb-8">
            <div className="relative inline-flex flex-col items-center">
              <div className="absolute inset-0 bg-primary-200 rounded-full blur-3xl opacity-30" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 shadow-lg mb-3">
                <Users className="h-6 w-6 text-primary-600" />
              </div>
              <p className="text-4xl font-bold text-primary-900 mb-1">400+</p>
              <p className="text-sm font-semibold text-primary-900">Aktive Mandate</p>
              <p className="text-xs text-primary-600 mt-1">Geschäftsführer</p>
            </div>
          </div>

          {/* Supporting Metrics - Three Columns */}
          <div className="grid w-full max-w-2xl gap-8 sm:grid-cols-3">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col items-center gap-3 text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-200 rounded-full blur-xl opacity-40" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 shadow-md">
                    <metric.icon className="h-6 w-6 text-primary-600" />
                  </div>
                </div>
                <div>
                  <p className="text-base font-bold text-primary-900 mb-1">
                    {metric.value}
                  </p>
                  <p className="text-sm text-primary-700 font-medium">
                    {metric.label}
                  </p>
                  <p className="text-xs text-primary-600 mt-1">
                    {metric.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Star Rating Display */}
        <div className="pt-4 border-t border-primary-100">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent-500 text-accent-500" />
              ))}
            </div>
            <p className="text-xs text-primary-700 ml-2">
              <span className="font-semibold text-primary-900">Ausgezeichnet bewertet</span> auf ProvenExpert & Trustpilot
            </p>
          </div>
        </div>
      </div>
    </HeroCarouselCard>
  )
}

export default HeroTrustCard
