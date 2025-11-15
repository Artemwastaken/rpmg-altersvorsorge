'use client'

import React from 'react'
import { XCircle, CheckCircle } from 'lucide-react'
import HeroCarouselCard from './HeroCarouselCard'

// Tower component now includes bullets!
const TowerWithBullets = ({
  label,
  segments,
  bullets,
  bulletType,
}: {
  label: string
  segments: Array<{
    height: number
    color: string
    title: string
    copy: string
  }>
  bullets: string[]
  bulletType: 'negative' | 'positive'
}) => {
  const BulletIcon = bulletType === 'negative' ? XCircle : CheckCircle
  const iconColor = bulletType === 'negative' ? 'text-red-900' : 'text-emerald-800'
  
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* Tower Label */}
      <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary-500">
        {label}
      </span>
      
      {/* Tower Visual */}
      <div className="relative flex h-64 md:h-72 w-32 md:w-40 flex-col justify-end overflow-hidden rounded-2xl md:rounded-3xl border border-white/60 bg-white/85 shadow-[0_28px_70px_-40px_rgba(15,23,42,0.65)]">
        {segments.map((segment, index) => (
          <div
            key={`${label}-${index}`}
            style={{ height: `${segment.height}%`, backgroundColor: segment.color }}
            className="flex flex-col items-center justify-center px-2 md:px-3.5 text-center"
          >
            <p className="text-[10px] md:text-xs font-semibold text-primary-900">{segment.title}</p>
            <p className={`text-sm md:text-lg font-bold ${segment.copy.startsWith('-') ? 'text-red-900' : 'text-emerald-800'}`}>
              {segment.copy}
            </p>
          </div>
        ))}
      </div>
      
      {/* Bullet Points - NOW INTEGRATED! */}
      <div className="flex flex-col gap-2">
        {bullets.map((bullet, index) => (
          <div key={index} className="flex items-start gap-1.5 text-left">
            <BulletIcon className={`h-3.5 w-3.5 md:h-4 md:w-4 ${iconColor} mt-0.5 flex-shrink-0`} />
            <p className="text-[10px] md:text-xs text-primary-700 leading-snug whitespace-nowrap">{bullet}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const HeroSavingsTowers = () => {
  return (
    <HeroCarouselCard>
      <div className="flex flex-col gap-4 h-full pb-2">
        {/* Header Section */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Vergleich</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-primary-950 leading-tight">
            €100.000 Gewinn: Was kommt wirklich bei Ihnen an?
          </h3>
          <p className="mt-2 text-sm text-primary-700">
            Sehen Sie den direkten Vergleich zwischen Normalbesteuerung und RP&MG-Optimierung
          </p>
        </div>

        {/* Towers Container with Integrated Bullets */}
        <div className="flex flex-1 flex-col items-center justify-center py-2">
          <div className="flex items-start justify-center gap-4 md:gap-6">
            {/* Tower 1 - Normalbesteuerung (with negative bullets) */}
            <TowerWithBullets
              label="Normalbesteuerung"
              segments={[
                {
                  height: 45,
                  color: '#D9C8B5',
                  title: 'Steuern & Abgaben',
                  copy: '-€45.000',
                },
                {
                  height: 55,
                  color: '#EFE7DF',
                  title: 'Privates Vermögen',
                  copy: '+€55.000',
                },
              ]}
              bullets={[
                '€45.000 ans Finanzamt',
                'Jedes Jahr aufs Neue',
                'Nur €55.000 bleiben übrig',
              ]}
              bulletType="negative"
            />

            {/* Advantage Divider */}
            <div className="hidden md:flex flex-col items-center gap-2 text-center text-primary-600 self-start mt-16">
              <span className="h-12 w-px bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200" aria-hidden="true" />
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-800">Vorteil</span>
                <span className="text-lg font-bold text-emerald-900">+€45.000</span>
              </div>
              <span className="h-12 w-px bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200" aria-hidden="true" />
            </div>

            {/* Tower 2 - RP&MG-Optimiert (with positive bullets) */}
            <TowerWithBullets
              label="RP&MG-Optimiert"
              segments={[
                {
                  height: 100,
                  color: '#EFE7DF',
                  title: 'Privates Vermögen',
                  copy: '+€100.000',
                },
              ]}
              bullets={[
                '€100.000 steuerfrei investiert',
                'Sofort Renditechancen (Ø 7%)',
                'Ihr volles Kapital arbeitet',
              ]}
              bulletType="positive"
            />
          </div>
        </div>
      </div>
    </HeroCarouselCard>
  )
}

export default HeroSavingsTowers
