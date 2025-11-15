'use client'

import React from 'react'
import { TrendingUp, PiggyBank } from 'lucide-react'
import HeroCarouselCard from './HeroCarouselCard'

const HeroOutcomeCard = () => {
  return (
    <HeroCarouselCard>
      <div className="flex flex-col gap-2 h-full">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Kapitalwachstum</p>
          <h3 className="mt-1.5 text-2xl md:text-3xl font-bold text-primary-950 leading-tight">
            Warum Geschäftsführer mit dem RPMG-Unternehmerplan mehr haben
          </h3>
          <p className="mt-1.5 text-sm text-primary-700">
            Der Unterschied zwischen 3% und 7% Rendite über 25 Jahre
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <div className="w-full max-w-2xl rounded-xl border border-primary-100 bg-white p-2 md:p-3">
            <svg viewBox="0 0 400 180" className="h-auto w-full">
              <line x1="40" y1="20" x2="40" y2="160" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="40" y1="160" x2="380" y2="160" stroke="#E5E7EB" strokeWidth="1" />

              <text x="30" y="25" fontSize="10" fill="#6B7280" textAnchor="end">€2,5M</text>
              <text x="30" y="95" fontSize="10" fill="#6B7280" textAnchor="end">€1,25M</text>
              <text x="30" y="165" fontSize="10" fill="#6B7280" textAnchor="end">€0</text>

              <text x="40" y="180" fontSize="10" fill="#6B7280" textAnchor="middle">0</text>
              <text x="210" y="180" fontSize="10" fill="#6B7280" textAnchor="middle">12,5 Jahre</text>
              <text x="380" y="180" fontSize="10" fill="#6B7280" textAnchor="middle">25 Jahre</text>

              {/* 7% exponential curve - more dramatic compound interest effect */}
              <path
                d="M 40 160 C 80 155, 120 145, 160 125 C 200 100, 240 65, 280 45 C 320 30, 350 25, 380 22"
                stroke="#10B981"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              {/* 3% exponential curve - less dramatic but still curved */}
              <path
                d="M 40 160 C 80 158, 120 153, 160 143 C 200 130, 240 115, 280 100 C 320 90, 350 85, 380 82"
                stroke="#9CA3AF"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="5,3"
              />

              <circle cx="380" cy="22" r="4" fill="#10B981" />
              <text x="375" y="15" fontSize="11" fontWeight="bold" fill="#10B981" textAnchor="end">€2,18 Mio.</text>

              <circle cx="380" cy="82" r="4" fill="#9CA3AF" />
              <text x="375" y="98" fontSize="11" fontWeight="bold" fill="#9CA3AF" textAnchor="end">€1,34 Mio.</text>
            </svg>

            <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-6 bg-green-500" />
                <span className="font-semibold text-primary-700">RPMG (Ø 7% p.a.)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-6 border-t-2 border-dashed border-gray-400" />
                <span className="text-primary-600">Klassische Anbieter (Ø 3% p.a.)</span>
              </div>
            </div>
          </div>

          {/* Contribution vs Result Example */}
          <div className="w-full max-w-2xl rounded-xl border border-primary-100 bg-white p-2 md:p-3 shadow-lg">
            <div className="grid md:grid-cols-[1fr,auto,1fr] gap-3 items-center">
              {/* Left Section: Contributions */}
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-200 rounded-full blur-lg opacity-30" />
                  <div className="relative flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-50 border border-primary-200 shadow-sm">
                    <PiggyBank className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-primary-600 mb-0.5">Ihre Einzahlungen</p>
                  <p className="text-base md:text-lg font-bold text-primary-900 mb-0.5">450.000 €</p>
                  <p className="text-[11px] text-primary-700">1.500 € × 25 Jahre</p>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden md:flex flex-col items-center">
                <div className="h-12 w-px bg-gradient-to-b from-primary-200 via-accent-300 to-primary-200" />
              </div>

              {/* Right Section: Final Capital */}
              <div className="flex flex-col items-center text-center gap-1.5">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-200 rounded-full blur-lg opacity-30" />
                  <div className="relative flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-primary-50 border border-primary-200 shadow-sm">
                    <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-primary-600" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-primary-600 mb-0.5">Ihr Endkapital</p>
                  <p className="text-base md:text-lg font-bold text-primary-900 mb-0.5">≈ 1.222.196 €</p>
                  <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-primary-50 rounded-full">
                    <div className="w-1 h-1 bg-primary-600 rounded-full animate-pulse" />
                    <span className="text-[10px] font-semibold text-primary-700">Zinseszinseffekt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-1.5 text-[11px] text-primary-600 md:grid-cols-2">
          <div className="flex items-start gap-1.5">
            <span className="mt-0.5 text-primary-600">→</span>
            <p>
              <span className="font-semibold text-primary-900">Bewährte Strategie:</span> 7% durchschnittliche Rendite über 25 Jahre.
            </p>
          </div>
          <div className="flex items-start gap-1.5">
            <span className="mt-0.5 text-primary-600">→</span>
            <p>
              <span className="font-semibold text-primary-900">Transparenz:</span> Volle Kontrolle über Ihr Vermögen im Alter.
            </p>
          </div>
        </div>
      </div>
    </HeroCarouselCard>
  )
}

export default HeroOutcomeCard
