'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Search, FileText, Rocket, ArrowRight, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Analyse',
      description: 'Kostenlose Beratung + Potenzialanalyse',
      features: [],
    },
    {
      number: '02',
      icon: FileText,
      title: 'Konzept',
      description: 'Maßgeschneiderte Strategie',
      features: [],
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Umsetzung',
      description: 'Rechtssichere Implementierung + laufende Betreuung',
      features: [],
    },
  ]

  return (
    <section id="so-funktionierts" className="section-padding bg-primary-50">
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
            In 3 Schritten zu Ihrer{' '}
            <span className="gradient-text">Versorgung</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Wir begleiten Sie von der ersten Analyse bis zur vollständigen Umsetzung
            und darüber hinaus – transparent, professionell und auf Ihre Bedürfnisse zugeschnitten.
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-primary-200 hidden md:block" />

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Timeline Dot - Centered with card */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary-600 border-4 border-white shadow-lg transform -translate-x-1/2 hidden md:block z-10" />

                {/* Card */}
                <div className="md:ml-16 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative">
                  {/* Icon - Vertically Centered */}
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>

                  {/* Content with left margin for icon */}
                  <div className="ml-16">
                    {/* Title, Number */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                      <span className="text-primary-500">{step.number}</span> • {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6">
                      {step.description}
                    </p>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
                              i <= index ? 'bg-primary-600' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">
                        Schritt {index + 1} von 3
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-white max-w-3xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Bereit für den ersten Schritt?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              Vereinbaren Sie jetzt Ihre kostenlose Erstberatung und erfahren Sie, wie viel Sie sparen können.
            </p>
            <a
              href="#beratung"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Jetzt kostenlos beraten lassen
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
