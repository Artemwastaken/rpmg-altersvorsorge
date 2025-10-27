'use client'

import React from 'react'

const BAR_HEIGHT = 'h-4'

type Segment = {
  label: string
  value: number
  color: string
  description: string
  amount: string
}

const normalSegments: Segment[] = [
  {
    label: 'Steuern & Abgaben',
    value: 62,
    color: '#7A6A5C',
    description: 'Abgeführt an Körperschaft- & Einkommensteuer',
    amount: '€62.000',
  },
  {
    label: 'Privates Vermögen',
    value: 38,
    color: '#F3EDE7',
    description: 'Bleibt nach Steuern übrig',
    amount: '€38.000',
  },
]

const rpmgSegments: Segment[] = [
  {
    label: 'Direkter Transfer in Vorsorge',
    value: 100,
    color: '#CDAA6D',
    description: 'Steuerfrei in die beitragsorientierte Zusage',
    amount: '€100.000',
  },
]

const renderBar = (segments: Segment[], id: string) => (
  <div className="w-full">
    <div
      className={`relative w-full overflow-hidden rounded-full ${BAR_HEIGHT} bg-primary-50 border border-primary-100`}
      aria-hidden="true"
    >
      {segments.map((segment) => (
        <div
          key={`${id}-${segment.label}`}
          className={`inline-block ${BAR_HEIGHT}`}
          style={{ width: `${segment.value}%`, backgroundColor: segment.color }}
        />
      ))}
    </div>
    <div className="mt-3 grid gap-2 text-xs text-primary-700 sm:grid-cols-2">
      {segments.map((segment) => (
        <div key={`${id}-legend-${segment.label}`} className="flex items-start gap-2">
          <span
            className="mt-1 inline-flex h-2 w-6 rounded-full"
            style={{ backgroundColor: segment.color }}
          />
          <p className="leading-snug">
            <span className="font-semibold text-primary-900">{segment.amount}</span>{' '}
            · {segment.label}{' '}
            <span className="block text-primary-600">{segment.description}</span>
          </p>
        </div>
      ))}
    </div>
  </div>
)

const HeroCashflowComparison = () => {
  return (
    <div className="mt-10 w-full max-w-xl rounded-2xl border border-primary-200 bg-white/90 p-6 shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-500">Cashflow-Vergleich</p>
          <h3 className="mt-1 text-lg font-semibold text-primary-900">
            Was passiert mit €100.000 Unternehmensgewinn?
          </h3>
        </div>
        <p className="text-xs font-medium text-primary-600">Alle Werte gerundet</p>
      </div>

      <div className="mt-6 grid gap-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-primary-800">Normalbesteuerung</p>
            <span className="text-xs font-medium text-primary-600">~€38.000 Netto-Vermögen</span>
          </div>
          {renderBar(normalSegments, 'normal')}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-primary-800">RPMG-Optimiert</p>
            <span className="text-xs font-medium text-green-600">€100.000 in Altersvorsorge</span>
          </div>
          {renderBar(rpmgSegments, 'rpmg')}
        </div>
      </div>
    </div>
  )
}

export default HeroCashflowComparison
