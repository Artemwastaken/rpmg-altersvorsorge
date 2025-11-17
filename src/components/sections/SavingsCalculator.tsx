'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Calculator, TrendingUp, PiggyBank, Briefcase, Info, ChevronRight, Percent, Euro } from 'lucide-react'
import { cn } from '@/utils/cn'

const SavingsCalculator = () => {
  const [monthlyAmount, setMonthlyAmount] = useState(1500)
  const [taxRate, setTaxRate] = useState(42)
  const [years, setYears] = useState(25)

  const annualContribution = useMemo(() => monthlyAmount * 12, [monthlyAmount])
  const annualTaxSavings = useMemo(
    () => annualContribution * (taxRate / 100),
    [annualContribution, taxRate]
  )
  const totalContributions = useMemo(() => annualContribution * years, [annualContribution, years])
  const totalTaxSavings = useMemo(
    () => totalContributions * (taxRate / 100),
    [totalContributions, taxRate]
  )

  const futureValue = useMemo(() => {
    const monthlyReturn = 0.07 / 12
    const months = years * 12
    return (
      monthlyAmount *
      ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn) *
      (1 + monthlyReturn)
    )
  }, [monthlyAmount, years])

  const interestEarnings = useMemo(
    () => futureValue - totalContributions,
    [futureValue, totalContributions]
  )

  const endkapital = useMemo(
    () => totalContributions + interestEarnings,
    [totalContributions, interestEarnings]
  )

  const roiPercent = useMemo(() => {
    if (!annualContribution) return 0
    const totalInvested = annualContribution * years
    return ((futureValue - totalInvested) / totalInvested) * 100
  }, [annualContribution, futureValue, years])

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)

  const getSnappedValue = (raw: number) => {
    const snapThreshold = 30

    // Magnetic snap to tick marks
    if (Math.abs(raw - 339) <= snapThreshold) return 339
    if (Math.abs(raw - 678) <= snapThreshold) return 678

    // Original snapping logic
    if (raw <= 500) return Math.round(raw / 25) * 25
    if (raw <= 1000) return Math.round(raw / 50) * 50
    return Math.round(raw / 100) * 100
  }

  const getSnappedYears = (raw: number) => {
    return Math.round(raw / 1) * 1
  }

  const tickMarks = [
    { value: 339, label: '339 €', description: '4% BBG', accent: true },
    { value: 678, label: '678 €', description: '8% BBG', accent: true }
  ]

  const yearTickMarks = [
    { value: 10, label: 'Kurz', description: '10 Jahre' },
    { value: 25, label: 'Standard', description: '25 Jahre' },
    { value: 35, label: 'Lang', description: '35 Jahre' }
  ]

  const totalMv = useMotionValue(totalContributions)
  const totalTaxMv = useMotionValue(totalTaxSavings)
  const interestMv = useMotionValue(interestEarnings)
  const endkapitalMv = useMotionValue(endkapital)
  const monthlyMv = useMotionValue(annualTaxSavings)
  const futureMv = useMotionValue(futureValue)
  const roiMv = useMotionValue(roiPercent)

  const formattedTotal = useTransform(totalMv, latest => formatCurrency(latest))
  const formattedTotalTax = useTransform(totalTaxMv, latest => formatCurrency(latest))
  const formattedInterest = useTransform(interestMv, latest => formatCurrency(latest))
  const formattedEndkapital = useTransform(endkapitalMv, latest => formatCurrency(latest))
  const formattedTaxSavings = useTransform(monthlyMv, latest => formatCurrency(latest))
  const formattedFuture = useTransform(futureMv, latest => formatCurrency(latest))
  const formattedRoi = useTransform(roiMv, latest => `${latest.toFixed(1).replace('.', ',')} %`)

  useEffect(() => {
    const controls = [
      animate(totalMv, totalContributions, { duration: 0.5, ease: 'easeOut' }),
      animate(totalTaxMv, totalTaxSavings, { duration: 0.5, ease: 'easeOut' }),
      animate(interestMv, interestEarnings, { duration: 0.5, ease: 'easeOut' }),
      animate(endkapitalMv, endkapital, { duration: 0.5, ease: 'easeOut' }),
      animate(monthlyMv, annualTaxSavings, { duration: 0.5, ease: 'easeOut' }),
      animate(futureMv, futureValue, { duration: 0.5, ease: 'easeOut' }),
      animate(roiMv, roiPercent, { duration: 0.5, ease: 'easeOut' })
    ]
    return () => controls.forEach(c => c.stop())
  }, [totalContributions, totalTaxSavings, interestEarnings, endkapital, annualTaxSavings, futureValue, roiPercent, totalMv, totalTaxMv, interestMv, endkapitalMv, monthlyMv, futureMv, roiMv])

  const taxRatePresets = [
    { label: '30%', value: 30, description: 'Kleine GmbH' },
    { label: '35%', value: 35, description: 'Wachstum' },
    { label: '42%', value: 42, description: 'Top-Satz' },
    { label: '45%', value: 45, description: 'Spitzen-Satz' }
  ]

  return (
    <section id="rechner" className="section-padding bg-gradient-to-br from-white via-primary-50 to-accent-50">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Was kann ich <span className="gradient-text">sparen?</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Berechnen Sie Ihre individuelle Steuerersparnis und Ihr Vermögen im Ruhestand. Passen Sie die Werte an Ihre Situation an – die Ergebnisse aktualisieren sich sofort.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-white/90 backdrop-blur-xl border border-primary-900/10 rounded-[32px] shadow-[0_30px_60px_rgba(139,106,60,0.08)] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/50 via-transparent to-primary-50" />

            <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 lg:p-12 border-r border-primary-900/10 space-y-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Ihre Angaben</h3>
                    <p className="text-sm text-gray-500">Stellen Sie Beitrag und Steuersatz nach Wunsch ein.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="flex items-center justify-between text-sm font-medium text-gray-700">
                      <span>Monatlicher Beitrag</span>
                      <span className="font-semibold text-primary-700 text-lg">{formatCurrency(monthlyAmount)}</span>
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min={50}
                        max={3000}
                        step={1}
                        value={monthlyAmount}
                        onChange={(e) => {
                          const newValue = getSnappedValue(Number(e.target.value))
                          if (newValue !== monthlyAmount) {
                            setMonthlyAmount(newValue)
                          }
                        }}
                        className="w-full appearance-none h-2 rounded-full bg-primary-100 outline-none"
                        style={{
                          background: `linear-gradient(to right, #8B6A3C 0%, #CDAA6D ${((monthlyAmount - 50) / (3000 - 50)) * 100}%, #E7DFD6 ${((monthlyAmount - 50) / (3000 - 50)) * 100}%, #E7DFD6 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-3">
                        <span>50 €</span>
                        <span>3.000 €</span>
                      </div>
                      <div className="relative w-full h-16 mt-2">
                        {tickMarks.map((tick, index) => {
                          const pct = (tick.value - 50) / (3000 - 50)
                          const left = `calc(${pct * 100}% + ${12 - pct * 24}px)`
                          return (
                            <div
                              key={tick.value}
                              className="absolute -translate-x-1/2 text-center"
                              style={{ left, top: index === 0 ? '0' : '26px' }}
                            >
                              <div className={cn('w-1 h-4 mx-auto rounded-full', tick.accent ? 'bg-accent-500' : 'bg-primary-400')} />
                              <div className={cn('mt-1 text-xs font-semibold', tick.accent ? 'text-accent-800' : 'text-gray-600')}>
                                {tick.label}
                              </div>
                              {tick.description && (
                                <div className="text-[10px] text-accent-700 font-semibold">{tick.description}</div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center justify-between text-sm font-medium text-gray-700">
                      <span>Laufzeit</span>
                      <span className="font-semibold text-primary-700 text-lg">{years} Jahre</span>
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min={5}
                        max={40}
                        step={1}
                        value={years}
                        onChange={(e) => {
                          const newValue = getSnappedYears(Number(e.target.value))
                          if (newValue !== years) {
                            setYears(newValue)
                          }
                        }}
                        className="w-full appearance-none h-2 rounded-full bg-primary-100 outline-none"
                        style={{
                          background: `linear-gradient(to right, #8B6A3C 0%, #CDAA6D ${((years - 5) / (40 - 5)) * 100}%, #E7DFD6 ${((years - 5) / (40 - 5)) * 100}%, #E7DFD6 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-3">
                        <span>5 Jahre</span>
                        <span>40 Jahre</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <span className="text-sm font-medium text-gray-700">Ihr Grenzsteuersatz</span>
                    <div className="grid sm:grid-cols-4 grid-cols-2 gap-3">
                      {taxRatePresets.map(({ label, value, description }) => (
                        <button
                          key={value}
                          onClick={() => setTaxRate(value)}
                          className={cn(
                            'rounded-2xl border px-4 py-3 text-left transition-all',
                            taxRate === value
                              ? 'bg-primary-600 text-white border-transparent shadow-xl scale-[1.02]'
                              : 'bg-white border-primary-900/10 text-primary-700 hover:border-primary-500/60 hover:shadow-md'
                          )}
                        >
                          <p className="text-base font-semibold">{label}</p>
                          <p className="text-xs opacity-70">{description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 rounded-xl bg-primary-50/80 border border-primary-100 px-6 py-4">
                  <div className="flex items-center gap-3 text-primary-800">
                    <Info className="w-5 h-5" />
                    <div className="text-sm">
                      <p className="font-semibold">Hinweis</p>
                      <p className="opacity-80">
                        Die Berechnung dient der Orientierung und berücksichtigt keine individuellen Steuerdaten. Eine verbindliche Berechnung erfolgt im persönlichen Beratungsgespräch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-700 text-white p-8 lg:p-12 space-y-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Ihre Ergebnisse</h3>
                  </div>
                </div>

                <div className="relative grid gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="rounded-3xl bg-white/15 border border-white/20 backdrop-blur-md p-6 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                        <PiggyBank className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/70">Gesamte Einzahlungen</p>
                        <motion.p className="text-3xl font-bold" key={totalContributions}>
                          {formattedTotal}
                        </motion.p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      Monatliche Einzahlungen über {years} Jahre
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="rounded-3xl bg-white/15 border border-white/20 backdrop-blur-md p-6 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                        <Calculator className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/70">Steuerersparnis auf Einzahlungen</p>
                        <motion.p className="text-3xl font-bold" key={totalTaxSavings}>
                          {formattedTotalTax}
                        </motion.p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      {taxRate}% Grenzsteuersatz über {years} Jahre
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="rounded-3xl bg-white/15 border border-white/20 backdrop-blur-md p-6 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                        <Percent className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/70">Zinsertrag</p>
                        <motion.p className="text-3xl font-bold" key={interestEarnings}>
                          {formattedInterest}
                        </motion.p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      Basierend auf 7% jährlicher Verzinsung
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="rounded-3xl bg-white/15 border border-white/20 backdrop-blur-md p-6 shadow-lg"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center">
                        <Euro className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/70">Endkapital</p>
                        <motion.p className="text-3xl font-bold" key={endkapital}>
                          {formattedEndkapital}
                        </motion.p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      Einzahlungen + Zinsen
                    </p>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative inline-flex w-full items-center justify-center gap-3 rounded-full bg-white text-primary-700 font-semibold py-3 mt-2 shadow-lg"
                >
                  Detaillierte Analyse anfordern
                  <ChevronRight className="w-4 h-4" />
                </motion.button>

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_rgba(255,255,255,0))] pointer-events-none -z-10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SavingsCalculator
