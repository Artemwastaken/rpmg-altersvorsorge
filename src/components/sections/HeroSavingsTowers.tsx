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
  <div className="flex flex-col items-center gap-2 text-center">
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary-500">{label}</span>
    </div>
    <div className="relative flex h-48 md:h-56 w-32 md:w-40 flex-col justify-end overflow-hidden rounded-2xl md:rounded-3xl border border-white/60 bg-white/85 shadow-[0_28px_70px_-40px_rgba(15,23,42,0.65)]">
      {segments.map((segment) => (
        <div
          key={`${label}-${segment.title}`}
          style={{ height: `${segment.height}%`, backgroundColor: segment.color }}
          className="flex flex-col items-center justify-center px-2 md:px-3.5 text-center"
        >
          <p className="text-[10px] md:text-xs font-semibold text-primary-900">{segment.title}</p>
          <p className={`text-sm md:text-lg font-bold ${segment.copy.startsWith('-') ? 'text-red-900' : 'text-emerald-800'}`}>{segment.copy}</p>
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
            Sehen Sie den direkten Vergleich zwischen Normalbesteuerung und RP&MG-Optimierung
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-3 py-3">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 items-center justify-center md:gap-6">
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
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-800">Vorteil</span>
                <span className="text-lg font-bold text-emerald-900">+€45.000</span>
              </div>
              <span className="h-12 w-px bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200" aria-hidden="true" />
            </div>

            <Tower
              label="RP&MG-Optimiert"
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

        <div className="flex flex-col gap-1 text-xs text-primary-500">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-1">
            <div className="flex items-start gap-1">
              <XCircle className="h-3 w-3 md:h-4 md:w-4 text-red-900 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] md:text-xs text-primary-700">€45.000 ans Finanzamt</p>
            </div>
            <div className="flex items-start gap-1">
              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-emerald-800 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] md:text-xs text-primary-700">€100.000 steuerfrei investiert</p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-1">
            <div className="flex items-start gap-1">
              <XCircle className="h-3 w-3 md:h-4 md:w-4 text-red-900 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] md:text-xs text-primary-700">Jedes Jahr aufs Neue</p>
            </div>
            <div className="flex items-start gap-1">
              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-emerald-800 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] md:text-xs text-primary-700">Sofort Renditechancen (Ø 7%)</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-1">
            <div className="flex items-start gap-1">
              <XCircle className="h-3 w-3 md:h-4 md:w-4 text-red-900 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] md:text-xs text-primary-700">Nur €55.000 bleiben übrig</p>
            </div>
            <div className="flex items-start gap-1">
              <CheckCircle className="h-3 w-3 md:h-4 md:w-4 text-emerald-800 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] md:text-xs text-primary-700">Ihr volles Kapital arbeitet</p>
            </div>
          </div>
        </div>
      </div>
    </HeroCarouselCard>
  )
}

export default HeroSavingsTowers
