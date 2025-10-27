'use client'

import React from 'react'

const RPMGVerticalFlow = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-4 py-12">
      {/* Main Container */}
      <div className="w-full max-w-4xl">

        {/* Top Source Node: Unternehmensgewinn */}
        <div className="flex justify-center mb-12">
          <div className="w-[280px] h-[90px] bg-primary-50 border-2 border-primary-200 rounded-xl flex items-center justify-center shadow-sm">
            <div className="text-center">
              <p className="text-sm font-medium text-primary-600">Start</p>
              <p className="text-lg font-bold text-primary-800">Unternehmensgewinn</p>
              <p className="text-xl font-bold gradient-text">€100.000</p>
            </div>
          </div>
        </div>

        {/* Branching Arrows */}
        <div className="flex justify-center mb-8">
          <svg width="600" height="60" className="overflow-visible">
            {/* Left diagonal arrow to Normalbesteuerung */}
            <path
              d="M 300 0 L 150 60"
              stroke="#7A6A5C"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            {/* Right diagonal arrow to RPMG-Optimiert */}
            <path
              d="M 300 0 L 450 60"
              stroke="#7A6A5C"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
            />
            {/* Arrow marker definition */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#7A6A5C" />
              </marker>
            </defs>
          </svg>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* LEFT COLUMN: Normalbesteuerung */}
          <div className="space-y-8">
            {/* Column Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-primary-700">Normalbesteuerung</h3>
            </div>

            {/* Step 1: Steuern & Abgaben */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full max-w-[240px] h-[80px] bg-[#DC2626] rounded-xl flex items-center justify-center shadow-md">
                <div className="text-center">
                  <p className="text-base font-bold text-white">Steuern & Abgaben</p>
                  <p className="text-sm text-white/90">~€30.000 - €50.000</p>
                </div>
              </div>

              {/* Arrow down */}
              <svg width="4" height="40" className="overflow-visible">
                <path
                  d="M 2 0 L 2 40"
                  stroke="#7A6A5C"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>

            {/* Step 2: Privates Vermögen */}
            <div className="flex justify-center">
              <div className="w-full max-w-[240px] h-[80px] bg-primary-50 border-2 border-primary-200 rounded-xl flex items-center justify-center shadow-sm">
                <div className="text-center">
                  <p className="text-base font-bold text-primary-800">Privates Vermögen</p>
                  <p className="text-sm text-primary-600">~€50.000 - €70.000</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: RPMG-Optimiert */}
          <div className="space-y-8">
            {/* Column Header */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-primary-700">RPMG-Optimiert</h3>
            </div>

            {/* Step 1: RPMG Lösung */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full max-w-[240px] h-[80px] bg-[#CDAA6D] rounded-xl flex items-center justify-center shadow-md">
                <div className="text-center">
                  <p className="text-base font-bold text-white">RPMG Lösung</p>
                  <p className="text-sm text-white/90">§3 Nr. 63 & §4d EStG</p>
                </div>
              </div>

              {/* Arrow down */}
              <svg width="4" height="40" className="overflow-visible">
                <path
                  d="M 2 0 L 2 40"
                  stroke="#7A6A5C"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                />
              </svg>
            </div>

            {/* Step 2: Altersvorsorge */}
            <div className="flex justify-center">
              <div className="w-full max-w-[240px] h-[80px] bg-[#3BA66B] rounded-xl flex items-center justify-center shadow-md">
                <div className="text-center">
                  <p className="text-base font-bold text-white">Altersvorsorge</p>
                  <p className="text-sm text-white/90">€100.000+ steuerfrei</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default RPMGVerticalFlow
