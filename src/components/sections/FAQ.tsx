'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Wie wird das Kapital investiert?',
      answer: 'typischerweise in intelligente ETF- und in Investmentfondsstrategien, um eine breite Streuung und attraktive Renditechancen zu erzielen.',
    },
    {
      question: 'Für wen eignet sich das Konzept?',
      answer: 'Ideal für Geschäftsführer und Gesellschafter-Geschäftsführer von GmbHs oder UGs mit ausreichenden Gewinnen. Besonders lohnenswert ab 50.000 € Jahresgewinn. Um Ihnen eine optimale Beratung anbieten zu können, empfehlen wir eine Laufzeit von mindestens 12-15 Jahren bis zum Ruhestand. So können Sie das volle Potenzial der Steuervorteile ausschöpfen.',
    },
    {
      question: 'Wie hoch ist die tatsächliche Steuerersparnis?',
      answer: 'Diese Antwort ist sehr individuell. Bei einem Beispiel von 3.000 € monatlichem Aufwand und 42% Grenzsteuersatz sparen Sie 15.120 € jährlich.',
    },
    {
      question: 'Wie sicher ist das Konzept?',
      answer: 'Da wir uns hier im geregelten Rechtsrahmen bewegen brauchen Sie sich keine Sorgen zu machen. Das Konzept ist rechtlich verbindlich und Ihr Vermögen am Ende insolvenzgeschützt.',
    },
    {
      question: 'Wie lange dauert die Einrichtung?',
      answer: '4-6 Wochen nach Erstberatung',
    },
    {
      question: 'Handelt es sich bei der Beratung um eine Steuerberatung?',
      answer: 'Nein, wir selbst sind ausdrücklich keine Steuerberatung. Unsere Konzepte und die Umsetzung kann in Koordination mit Ihrem Steuerberater erfolgen.',
    },
    {
      question: 'Bieten Sie auch Beratungen vor Ort an?',
      answer: 'Nein! Da wir deutschlandweit beraten liegt unser Fokus auf einer modernen onlinebasierten Beratung.',
    },
    {
      question: 'Wie läuft die kostenlose Erstberatung ab?',
      answer: 'Sobald Sie einen Termin zur kostenlosen Erstberatung buchen, bekommen Sie eine Bestätigung und einen Link zu Ihrem Onlinetermin. Im Termin wird Ihnen das Konzept erläutert. Einer unserer Spezialisten erklärt in rund 30-45 Minuten, ob und wie sich das Konzept in Ihrem Fall umsetzen lässt. Kostenlos und unverbindlich.',
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
