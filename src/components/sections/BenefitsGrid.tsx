'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  PiggyBank,
  Shield,
  Zap,
  Target,
  BarChart3,
  Lock,
  Users,
  Calculator,
  Sparkles,
  TrendingUp,
} from 'lucide-react'

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Profitieren Sie z.B. von 15.120 € Steuerersparnis jährlich',
      description: 'Bei 42% Grenzsteuersatz und 3.000 € monatlich.',
      highlight: 'Unternehmenssteuern sparen',
    },
    {
      icon: PiggyBank,
      title: '100 % Betriebsausgabe – mindert Ihren Gewinn',
      description: 'Vollständig abzugsfähig, senkt steuerpflichtigen Gewinn.',
      highlight: 'Privatvermögen aufbauen mit Ihrem Gewinn',
    },
    {
      icon: Shield,
      title: 'Insolvenzsicher & rechtlich abgesichert',
      description: 'privater Wohlstand auch in Krisen gesichert',
      highlight: 'durch staatliche Vorgaben geschützt',
    },
    {
      icon: Users,
      title: 'Auch für Ehepartner & Familie nutzbar',
      description: 'Zusätzliche Steuervorteile für die ganze Familie.',
      highlight: 'Familienvermögen erhöhen',
    },
  ]

  return (
    <section id="vorteile" className="section-padding bg-white">
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
            Steuerliche{' '}
            <span className="gradient-text">Vorteile</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nutzen Sie die gesetzlichen Möglichkeiten optimal aus und profitieren Sie von
            erheblichen Steuervorteilen für Ihre Altersvorsorge.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-primary-200">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {benefit.description}
                </p>

                {/* Highlight Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 rounded-full">
                  <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-primary-700">
                    {benefit.highlight}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BenefitsGrid
