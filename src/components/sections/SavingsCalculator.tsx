'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Calculator, TrendingUp, PiggyBank, Briefcase, Info, ChevronRight } from 'lucide-react'
import { cn } from '@/utils/cn'

const SavingsCalculator = () => {
  const [monthlyAmount, setMonthlyAmount] = useState(1500)
  const [taxRate, setTaxRate] = useState(42)

  const annualContribution = useMemo(() => monthlyAmount * 12, [monthlyAmount])
  const annualTaxSavings = useMemo(
    () => annualContribution * (taxRate / 100),
    [annualContribution, taxRate]
  )

  const futureValue = useMemo(() => {
    const monthlyReturn = 0.07 / 12
    const months = 25 * 12
    return (
      monthlyAmount *
      ((Math.pow(1 + monthlyReturn, months) - 1) / monthlyReturn) *
      (1 + monthlyReturn)
    )
  }, [monthlyAmount])

  const roiPercent = useMemo(() => {
    if (!annualContribution) return 0
    const totalInvested = annualContribution * 25
    return ((futureValue - totalInvested) / totalInvested) * 100
  }, [annualContribution, futureValue])

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)

  const getSnappedValue = (raw: number) => {
    if (raw <= 500) return Math.round(raw / 25) * 25
    if (raw <= 1000) return Math.round(raw / 50) * 50
    return Math.round(raw / 100) * 100
  }

  const tickMarks = [
    { value: 292, label: '292 €', description: 'SV-frei', accent: true },
    { value: 644, label: '644 €', description: 'Max. steuerfrei', accent: true }
  ]

  const monthlyMv = useMotionValue(annualTaxSavings)
  const futureMv = useMotionValue(futureValue)
  const roiMv = useMotionValue(roiPercent)

  const formattedTaxSavings = useTransform(monthlyMv, latest => formatCurrency(latest))
  const formattedFuture = useTransform(futureMv, latest => formatCurrency(latest))
  const formattedRoi = useTransform(roiMv, latest => `${latest.toFixed(1).replace('.', ',')} %`)

  useEffect(() => {
    const controls = [
      animate(monthlyMv, annualTaxSavings, { duration: 0.5, ease: 'easeOut' }),
      animate(futureMv, futureValue, { duration: 0.5, ease: 'easeOut' }),
      animate(roiMv, roiPercent, { duration: 0.5, ease: 'easeOut' })
    ]
    return () => controls.forEach(c => c.stop())
  }, [annualTaxSavings, futureValue, roiPercent, monthlyMv, futureMv, roiMv])

  const taxRatePresets = [
    { label: '30%', value: 30, description: 'Kleine GmbH' },
    { label: '35%', value: 35, description: 'Wachstum' },
    { label: '42%', value: 42, description: 'Top-Satz' },
    { label: '45%', value: 45, description: 'Spitzensteuersatz' }
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
            Berechnen Sie Ihre individuelle Steuerersparnis und Ihr Vermögen im Ruhestand.
            Passen Sie die Werte an Ihre Situation an – die Ergebnisse aktualisieren sich sofort.
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
                    <div className="relative pt-8">
                      <input
                        type="range"
                        min={50}
                        max={3000}
                        step={1}
                        value={monthlyAmount}
                        onChange={(e) => setMonthlyAmount(getSnappedValue(Number(e.target.value)))}
                        className="w-full appearance-none h-2 rounded-full bg-primary-100 outline-none"
                        style={{
                          background: `linear-gradient(to right, #8B6A3C 0%, #CDAA6D ${((monthlyAmount - 50) / (3000 - 50)) * 100}%, #E7DFD6 ${((monthlyAmount - 50) / (3000 - 50)) * 100}%, #E7DFD6 100%)`
                        }}
                      />
                      <motion.div
                        key={monthlyAmount}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -top-11"
                        style={{
                          left: `calc(${((monthlyAmount - 50) / (3000 - 50)) * 100}% + ${12 - ((monthlyAmount - 50) / (3000 - 50)) * 24}px)`,
                          transform: 'translateX(-50%)'
                        }}
                      >
                        <div className="px-3 py-1 rounded-full bg-primary-600 text-white text-xs font-semibold shadow">
                          {formatCurrency(monthlyAmount)}
                        </div>
                      </motion.div>
                      <div className="flex justify-between text-xs text-gray-500 mt-3">
                        <span>50 €</span>
                        <span>3.000 €</span>
                      </div>
                      <div className="relative w-full h-16 mt-4">
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
                        Berechnung basiert auf 7 % Nettorendite und 25 Jahren Laufzeit. Individualisierung im Gespräch.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-700 text-white p-8 lg:p-12 space-y-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_rgba(255,255,255,0))] pointer-events-none" />
                <div className="relative space-y-2">
                  <h3 className="text-2xl font-bold text-white">Ihre Ergebnisse</h3>
                  <p className="text-white/70 text-sm">
                    Zahlen aktualisieren sich, sobald Sie Regler oder Presets ändern.
                  </p>
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
                        <p className="text-xs uppercase tracking-wider text-white/70">Gesparte Steuern p.a.</p>
                        <motion.p className="text-3xl font-bold" key={annualTaxSavings}>
                          {formattedTaxSavings}
                        </motion.p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      {taxRate}% auf {formatCurrency(annualContribution)} Jahresbeitrag.
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
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/70">Vermögen nach 25 Jahren</p>
                        <motion.p className="text-3xl font-bold" key={futureValue}>
                          {formattedFuture}
                        </motion.p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      Reinvestition Ihrer monatlichen Einlage inklusive Steuerbonus bei 7 % Rendite.
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
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-white/70">Renditevorsprung</p>
                        <motion.p className="text-3xl font-bold" key={roiPercent}>
                          {formattedRoi}
                        </motion.p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70">
                      Verglichen mit einer klassischen Ausschüttung nach Steuern.
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
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SavingsCalculator
