'use client'

import React from 'react'
import { TrendingUp } from 'lucide-react'
import HeroCarouselCard from './HeroCarouselCard'

const HeroOutcomeCard = () => {
  return (
    <HeroCarouselCard>
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Kapitalwachstum</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-primary-950 leading-tight">
            Warum RPMG-Mandate durchschnittlich €845.000 mehr haben
          </h3>
          <p className="mt-2 text-sm text-primary-700">
            Der Unterschied zwischen 3% und 7% Rendite über 25 Jahre
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 py-4">
          <div className="w-full max-w-2xl rounded-xl border border-primary-100 bg-white p-6">
            <svg viewBox="0 0 400 200" className="h-auto w-full">
              <line x1="40" y1="20" x2="40" y2="160" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="40" y1="160" x2="380" y2="160" stroke="#E5E7EB" strokeWidth="1" />

              <text x="30" y="25" fontSize="10" fill="#6B7280" textAnchor="end">€2,5M</text>
              <text x="30" y="95" fontSize="10" fill="#6B7280" textAnchor="end">€1,25M</text>
              <text x="30" y="165" fontSize="10" fill="#6B7280" textAnchor="end">€0</text>

              <text x="40" y="180" fontSize="10" fill="#6B7280" textAnchor="middle">0</text>
              <text x="210" y="180" fontSize="10" fill="#6B7280" textAnchor="middle">12,5 Jahre</text>
              <text x="380" y="180" fontSize="10" fill="#6B7280" textAnchor="middle">25 Jahre</text>

              <path
                d="M 40 160 Q 120 140, 200 90 T 380 35"
                stroke="#10B981"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              <path
                d="M 40 160 Q 120 150, 200 120 T 380 85"
                stroke="#9CA3AF"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="5,3"
              />

              <circle cx="380" cy="35" r="4" fill="#10B981" />
              <text x="380" y="20" fontSize="11" fontWeight="bold" fill="#10B981" textAnchor="end">€2,18 Mio.</text>

              <circle cx="380" cy="85" r="4" fill="#9CA3AF" />
              <text x="380" y="100" fontSize="11" fontWeight="bold" fill="#9CA3AF" textAnchor="end">€1,34 Mio.</text>
            </svg>

            <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
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
        </div>

        <div className="grid gap-3 text-xs text-primary-600 md:grid-cols-2">
          <div className="flex items-start gap-2">
            <span className="mt-1 text-primary-600">→</span>
            <p>
              <span className="font-semibold text-primary-900">Bewährte Strategie:</span> 7% durchschnittliche Rendite über 25 Jahre – geprüft und bestätigt.
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="mt-1 text-primary-600">→</span>
            <p>
              <span className="font-semibold text-primary-900">Transparenz:</span> Volle Kontrolle über Ihre €2,18 Millionen Alterskapital.
            </p>
          </div>
        </div>
      </div>
    </HeroCarouselCard>
  )
}

export default HeroOutcomeCard
