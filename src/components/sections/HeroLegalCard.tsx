'use client'

import React from 'react'
import { Shield, Building2, CheckCircle, Award } from 'lucide-react'
import HeroCarouselCard from './HeroCarouselCard'

const HeroLegalCard = () => {
  const protections = [
    {
      icon: Building2,
      title: 'Staatlich überwacht',
      subtitle: 'BaFin-Aufsicht',
      detail: 'D-H9DS-JA2R-92',
    },
    {
      icon: Shield,
      title: 'Insolvenzsicher',
      subtitle: 'PSVaG-Schutz',
      detail: 'Gesetzlich geschützt',
    },
    {
      icon: Award,
      title: '10+ Jahre bewährt',
      subtitle: '400+ Mandate',
      detail: 'Ohne Beanstandung',
    },
  ]

  return (
    <HeroCarouselCard>
      <div className="flex flex-col gap-4 h-full">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Rechtssicherheit</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-primary-950 leading-tight">
            Dreifach gesichert – für Ihren Seelenfrieden
          </h3>
          <p className="mt-2 text-sm text-primary-700">
            Rechtlich fundiert, staatlich überwacht und seit über einem Jahrzehnt erfolgreich umgesetzt.
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-3">
          {/* Three Pillars of Security */}
          <div className="grid w-full max-w-2xl gap-4 grid-cols-2 lg:grid-cols-3">
            {protections.map((protection, index) => (
              <div key={index} className={`flex flex-col items-center gap-2 text-center ${index === 2 ? 'col-span-2 lg:col-span-1' : ''}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-200 rounded-full blur-xl opacity-40" />
                  <div className="relative flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 shadow-md">
                    <protection.icon className="h-5 w-5 md:h-7 md:w-7 text-primary-600" />
                  </div>
                </div>
                <div>
                  <p className="text-sm md:text-base font-bold text-primary-900 mb-1">
                    {protection.title}
                  </p>
                  <p className="text-xs md:text-sm text-primary-700 font-medium">
                    {protection.subtitle}
                  </p>
                  <p className="text-[10px] md:text-xs text-primary-600 mt-1">
                    {protection.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Footer */}
        <div className="pt-4 border-t border-primary-100 mt-auto">
          <div className="flex items-center justify-center gap-2 text-center">
            <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-green-600 flex-shrink-0" />
            <p className="text-[10px] md:text-xs text-primary-700">
              <span className="font-semibold text-primary-900">Geprüft und bestätigt</span> durch unabhängige Wirtschaftsprüfer
            </p>
          </div>
        </div>
      </div>
    </HeroCarouselCard>
  )
}

export default HeroLegalCard
