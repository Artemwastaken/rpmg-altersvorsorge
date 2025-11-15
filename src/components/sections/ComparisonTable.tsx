'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, X, Info } from 'lucide-react'

const ComparisonTable = () => {
  const comparisonData = [
    {
      feature: 'Verfügbarkeit',
      direct: 'Ab Betriebsgründung',
      support: 'Nach 5 Jahren Betriebszugehörigkeit',
    },
    {
      feature: 'Monatl. Höchstbeitrag (2026)',
      direct: '678 €',
      support: 'unbegrenzt',
    },
    {
      feature: 'Jährl. Höchstbeitrag (2026)',
      direct: '8.136 €',
      support: 'unbegrenzt',
    },
    {
      feature: 'Steuerliche Behandlung',
      direct: 'Steuerfrei & sozialabgabenfrei',
      support: 'Voll als Betriebsausgabe abzugsfähig',
    },
    {
      feature: 'Versteuerung im Alter',
      direct: 'Nachgelagerte Besteuerung',
      support: 'Nachgelagerte Besteuerung',
    },
    {
      feature: 'Kombinierbar',
      direct: true,
      support: true,
    },
    {
      feature: 'Für Familienangehörige',
      direct: true,
      support: true,
    },
    {
      feature: 'Insolvenzschutz',
      direct: true,
      support: true,
    },
  ]

  return (
    <section id="vergleich" className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Direktversicherung vs. <span className="gradient-text">Unterstützungskasse</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Beide Vorsorgewege bieten erhebliche Steuervorteile und sind kombinierbar
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-primary-600 text-white">
              <div className="p-3 md:p-6 flex items-center justify-center">
                <h3 className="font-bold text-xs md:text-lg text-white break-words">Kriterium</h3>
              </div>
              <div className="p-3 md:p-6 bg-primary-700 border-l border-primary-500 flex flex-col items-center justify-center">
                <h3 className="font-bold text-xs md:text-lg text-white leading-tight">
                  <span className="md:hidden">Direkt-<br/>versicherung</span>
                  <span className="hidden md:inline">Direktversicherung</span>
                </h3>
                <p className="text-[10px] md:text-sm text-white/90 mt-1">§ 3 Nr. 63 EStG</p>
              </div>
              <div className="p-3 md:p-6 bg-primary-800 border-l border-primary-600 flex flex-col items-center justify-center">
                <h3 className="font-bold text-xs md:text-lg text-white leading-tight">
                  <span className="md:hidden">Unterstützungs-<br/>kasse</span>
                  <span className="hidden md:inline">Unterstützungskasse</span>
                </h3>
                <p className="text-[10px] md:text-sm text-white/90 mt-1">§ 4d EStG</p>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
                  <div className="p-3 md:p-6 flex items-center justify-center">
                    <p className="font-semibold text-[11px] md:text-base text-gray-900 break-words leading-tight text-center">{row.feature}</p>
                  </div>
                  <div className="p-3 md:p-6 border-l border-gray-200 flex items-center justify-center">
                    {typeof row.direct === 'boolean' ? (
                      row.direct ? (
                        <Check className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 md:w-6 md:h-6 text-red-400" />
                      )
                    ) : (
                      <p className="text-[10px] md:text-base text-gray-700 break-words leading-tight text-center">{row.direct}</p>
                    )}
                  </div>
                  <div className="p-3 md:p-6 border-l border-gray-200 flex items-center justify-center">
                    {typeof row.support === 'boolean' ? (
                      row.support ? (
                        <Check className="w-4 h-4 md:w-6 md:h-6 text-green-600" />
                      ) : (
                        <X className="w-4 h-4 md:w-6 md:h-6 text-red-400" />
                      )
                    ) : (
                      <p className="text-[10px] md:text-base text-gray-700 break-words leading-tight text-center">{row.support}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 md:p-6 text-white">
              <p className="text-center font-semibold text-xs md:text-base leading-tight">
                ✓ Beide Wege kombinierbar für eine Steuerersparnis bis zu 100.000 € pro Jahr
              </p>
            </div>
          </div>
        </motion.div>


        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-12"
        >
          <a
            href="#rechner"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            Jetzt Ihre Ersparnis berechnen
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonTable
