'use client'

import React from 'react'
import { XCircle, CheckCircle } from 'lucide-react'
import HeroCarouselCard from './HeroCarouselCard'

const Tower = ({
  label,
  total,
  segments,
  highlight: _highlight,
}: {
  label: string
  total: string
  highlight: string
  segments: Array<{
    height: number
    color: string
    title: string
    copy: string
  }>
}) => (
  <div className="flex flex-col items-center gap-4 text-center">
    <div className="flex flex-col items-center gap-1">
      <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary-500">{label}</span>
    </div>
    <div className="relative flex h-56 w-40 flex-col justify-end overflow-hidden rounded-3xl border border-white/60 bg-white/85 shadow-[0_28px_70px_-40px_rgba(15,23,42,0.65)]">
      {segments.map((segment) => (
        <div
          key={`${label}-${segment.title}`}
          style={{ height: `${segment.height}%`, backgroundColor: segment.color }}
          className="flex flex-col items-center justify-center px-2.5 text-center md:px-3.5"
        >
          <p className="text-xs font-semibold text-primary-900">{segment.title}</p>
          <p className="text-[11px] text-primary-700">{segment.copy}</p>
        </div>
      ))}
    </div>
  </div>
)

const HeroSavingsTowers = () => {
  return (
    <HeroCarouselCard>
      <div className="flex flex-col gap-4 h-full">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Vergleich</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-primary-950 leading-tight">
            €100.000 Gewinn: Was kommt wirklich bei Ihnen an?
          </h3>
          <p className="mt-2 text-sm text-primary-700">
            Sehen Sie den direkten Vergleich zwischen Normalbesteuerung und RPMG-Optimierung
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 py-4">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3 items-center justify-center md:gap-6">
            <Tower
              label="Normalbesteuerung"
              total="~€55.000 bleibt übrig"
              highlight="45 % Steuern & Abgaben"
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
            />

            <div className="hidden md:flex flex-col items-center gap-2 text-center text-primary-600">
              <span className="h-12 w-px bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-primary-500">Vorteil</span>
              <span className="text-sm font-semibold text-green-600">+€45.000</span>
              <span className="h-12 w-px bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200" aria-hidden="true" />
            </div>

            <Tower
              label="RPMG-Optimiert"
              total="€100.000 wirkt für Sie"
              highlight="100 % steuerfrei investierbar"
              segments={[
                {
                  height: 100,
                  color: '#EFE7DF',
                  title: 'Privates Vermögen',
                  copy: '+€100.000',
                },
              ]}
            />
          </div>
        </div>

        <div className="grid gap-2 text-xs text-primary-500 md:grid-cols-2">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex items-start gap-2">
              <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-primary-700">€45.000 ans Finanzamt</p>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-primary-700">Jedes Jahr aufs Neue</p>
            </div>
            <div className="flex items-start gap-2">
              <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-primary-700">Nur €55.000 bleiben übrig</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-primary-700">€100.000 steuerfrei investiert</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-primary-700">Sofort Renditechancen (Ø 7%)</p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-primary-700">Ihr volles Kapital arbeitet</p>
            </div>
          </div>
        </div>
      </div>
    </HeroCarouselCard>
  )
}

export default HeroSavingsTowers
