'use client'

import React from 'react'
import { TrendingUp, PiggyBank, Sparkles } from 'lucide-react'
import HeroCarouselCard from './HeroCarouselCard'

// ============================================================================
// Data-Driven Graph System
// ============================================================================

type Point = { year: number; value: number }

const YEARS = 25
const MONTHLY_PAYMENT = 3000

// SVG coordinate system (matching existing graph layout)
const X_MIN = 40
const X_MAX = 380
const Y_BOTTOM = 160
const Y_TOP = 20
const MAX_VALUE = 2_500_000

/**
 * Calculate compound interest growth over time
 * Formula: FV = PMT × [((1 + r)^n - 1) / r]
 */
function buildSeries(annualRate: number): Point[] {
  const monthlyRate = annualRate / 12
  const series: Point[] = []

  for (let year = 0; year <= YEARS; year++) {
    const months = year * 12
    const futureValue =
      months === 0
        ? 0
        : MONTHLY_PAYMENT * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)

    series.push({ year, value: futureValue })
  }

  return series
}

/**
 * Map year (0-25) to SVG x-coordinate (40-380)
 */
function scaleX(year: number): number {
  return X_MIN + (year / YEARS) * (X_MAX - X_MIN)
}

/**
 * Map value (€0-2.5M) to SVG y-coordinate (160-20)
 * Note: SVG y increases downward, so higher values = lower y
 */
function scaleY(value: number): number {
  const ratio = Math.min(value / MAX_VALUE, 1)
  return Y_BOTTOM - ratio * (Y_BOTTOM - Y_TOP)
}

/**
 * Generate smooth Bezier curve through data points
 * Uses Catmull-Rom to Bezier conversion for natural exponential curve
 */
function buildSmoothPath(annualRate: number): string {
  const points = buildSeries(annualRate)

  if (points.length === 0) return ''
  if (points.length === 1) {
    const x = scaleX(points[0].year)
    const y = scaleY(points[0].value)
    return `M ${x} ${y}`
  }

  // Start with MoveTo
  let path = `M ${scaleX(points[0].year)} ${scaleY(points[0].value)}`

  // Create smooth curve through all points using cubic Bezier
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = i > 0 ? points[i - 1] : points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = i < points.length - 2 ? points[i + 2] : p2

    // Calculate control points for smooth curve
    const tension = 0.3 // Controls curve tightness (0 = straight, 1 = very curved)

    const x1 = scaleX(p1.year)
    const y1 = scaleY(p1.value)
    const x2 = scaleX(p2.year)
    const y2 = scaleY(p2.value)

    // Calculate tangent slopes
    const dx1 = (scaleX(p2.year) - scaleX(p0.year)) * tension
    const dy1 = (scaleY(p2.value) - scaleY(p0.value)) * tension
    const dx2 = (scaleX(p3.year) - scaleX(p1.year)) * tension
    const dy2 = (scaleY(p3.value) - scaleY(p1.value)) * tension

    // Control points
    const cp1x = x1 + dx1
    const cp1y = y1 + dy1
    const cp2x = x2 - dx2
    const cp2y = y2 - dy2

    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`
  }

  return path
}

// ============================================================================
// Component
// ============================================================================

const HeroOutcomeCard = () => {
  // Calculate final values for each rate
  const finalValue7 = buildSeries(0.07)[YEARS].value
  const finalValue2 = buildSeries(0.02)[YEARS].value

  // Calculate endpoint coordinates
  const endpoint7Y = scaleY(finalValue7)
  const endpoint2Y = scaleY(finalValue2)

  // Format values for display
  const format7 = `€${(finalValue7 / 1_000_000).toFixed(2)} Mio.`
  const format2 = `€${(finalValue2 / 1_000_000).toFixed(2)} Mio.`

  // Calculate compound interest gain
  const totalContributions = MONTHLY_PAYMENT * 12 * YEARS
  const gewinn = finalValue7 - totalContributions
  const formatGewinn = `€${(gewinn / 1_000_000).toFixed(2)} Mio.`

  return (
    <HeroCarouselCard>
      <div className="flex flex-col gap-6 h-full">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Kapitalwachstum</p>
          <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-primary-950 leading-tight">
            Warum Geschäftsführer mit dem RP&MG-Unternehmerplan mehr haben
          </h3>
          <p className="mt-2 text-sm text-primary-700">
            Der Unterschied zwischen 2% und 7% Rendite über 25 Jahre
          </p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <div className="w-full max-w-2xl rounded-xl border border-primary-100 bg-white p-2 md:p-3">
            <svg viewBox="0 0 400 180" className="h-56 md:h-64 w-full">
              <line x1="40" y1="20" x2="40" y2="160" stroke="#E5E7EB" strokeWidth="1" />
              <line x1="40" y1="160" x2="380" y2="160" stroke="#E5E7EB" strokeWidth="1" />

              <text x="30" y="25" fontSize="10" fill="#6B7280" textAnchor="end">€2,5M</text>
              <text x="30" y="95" fontSize="10" fill="#6B7280" textAnchor="end">€1,25M</text>
              <text x="30" y="165" fontSize="10" fill="#6B7280" textAnchor="end">€0</text>

              <text x="40" y="180" fontSize="10" fill="#6B7280" textAnchor="middle">0</text>
              <text x="210" y="180" fontSize="10" fill="#6B7280" textAnchor="middle">12,5 Jahre</text>
              <text x="380" y="180" fontSize="10" fill="#6B7280" textAnchor="middle">25 Jahre</text>

              {/* 7% exponential curve - mathematically accurate compound interest growth */}
              <path
                d={buildSmoothPath(0.07)}
                stroke="#047857"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />

              {/* 2% exponential curve - mathematically accurate compound interest growth */}
              <path
                d={buildSmoothPath(0.02)}
                stroke="#9CA3AF"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="5,3"
              />

              <circle cx="380" cy={endpoint7Y} r="4" fill="#047857" />
              <text x="375" y={endpoint7Y - 7} fontSize="11" fontWeight="bold" fill="#047857" textAnchor="end">{format7}</text>

              <circle cx="380" cy={endpoint2Y} r="4" fill="#9CA3AF" />
              <text x="375" y={endpoint2Y + 26} fontSize="11" fontWeight="bold" fill="#9CA3AF" textAnchor="end">{format2}</text>
            </svg>

            <div className="mt-3 flex flex-wrap justify-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-6 bg-emerald-800" />
                <span className="font-semibold text-primary-700">RP&MG (Ø 7% p.a.)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-0.5 w-6 border-t-2 border-dashed border-gray-400" />
                <span className="text-primary-600">Klassische Anbieter (Ø 2% p.a.)</span>
              </div>
            </div>
          </div>

          {/* 3-Column Breakdown: Einzahlungen | Gewinn | Endkapital */}
          <div className="w-full max-w-3xl">
            <div className="overflow-hidden">
              <div className="grid grid-cols-3 divide-x divide-primary-100">

                {/* Column 1: Einzahlungen */}
                <div className="p-2 md:p-5 text-center">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-primary-600 mb-1 md:mb-1.5">Einzahlungen</p>
                  <p className="text-sm md:text-xl font-bold text-primary-900 mb-0.5 md:mb-1">900.000 €</p>
                  <p className="text-[9px] md:text-[11px] text-primary-700">3.000 € × 25 Jahre</p>
                </div>

                {/* Column 2: Gewinn (Subtle Emphasis) */}
                <div className="p-2 md:p-5 text-center">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-primary-600 mb-1 md:mb-1.5">Gewinn</p>
                  <p className="text-sm md:text-xl font-bold text-emerald-700 mb-0.5 md:mb-1">{formatGewinn}</p>
                  <p className="text-[9px] md:text-[11px] text-primary-700">Zinseszins</p>
                </div>

                {/* Column 3: Endkapital */}
                <div className="p-2 md:p-5 text-center">
                  <p className="text-[9px] md:text-[10px] uppercase tracking-wider text-primary-600 mb-1 md:mb-1.5">Endkapital</p>
                  <p className="text-sm md:text-xl font-bold text-primary-900 mb-0.5 md:mb-1">≈ {format7}</p>
                  <p className="text-[9px] md:text-[11px] text-primary-700 leading-tight">Einzahl. + Gewinn</p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroCarouselCard>
  )
}

export default HeroOutcomeCard
