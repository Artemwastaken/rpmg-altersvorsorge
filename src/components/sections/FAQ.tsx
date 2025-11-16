'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Wie läuft die kostenlose Erstberatung ab?',
      answer: 'Nach Ihrer Terminbuchung erhalten Sie eine Bestätigung mit Zugangslink. Im 30–45-minütigen Gespräch erläutert einer unserer Spezialisten, wie sich das Konzept in Ihrem Fall umsetzen lässt – kostenlos und unverbindlich.',
    },
    {
      question: 'Wie wird das Kapital investiert?',
      answer: 'In breit gestreute ETF- und Investmentfondsstrategien mit attraktiven Renditechancen.',
    },
    {
      question: 'Für wen eignet sich das Konzept?',
      answer: 'Ideal für Geschäftsführer und Gesellschafter-Geschäftsführer mit ausreichenden Gewinnen. Empfohlene Laufzeit: 10–12 Jahre bis zum Ruhestand, um die Steuervorteile voll zu entfalten.',
    },
    {
      question: 'Wie sicher ist das Konzept?',
      answer: 'Rechtlich verbindlich, insolvenzsicher, im klar geregelten Rechtsrahmen.',
    },
    {
      question: 'Wie lange dauert die Einrichtung?',
      answer: '1–2 Wochen nach Erstberatung (reduziert von vormals 4–6 Wochen).',
    },
    {
      question: 'Handelt es sich um eine Steuerberatung?',
      answer: 'Nein, ausdrücklich keine Steuerberatung; Umsetzung in Koordination mit Ihrem Steuerberater möglich.',
    },
    {
      question: 'Bieten Sie Beratungen vor Ort an?',
      answer: 'Ja, im Umkreis von 75 km um Köln ist eine persönliche Geschäftsführerberatung möglich; empfohlen wird aus Zeiteffizienzgründen der Online-Termin.',
    },
  ]

  return (
    <section id="faq" className="section-padding bg-gray-50">
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
            Alle Antworten auf Ihre <span className="gradient-text">Fragen</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hier finden Sie detaillierte Informationen zu den häufigsten Fragen
            rund um die betriebliche Altersvorsorge für Geschäftsführer.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-left font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
