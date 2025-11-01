'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, Clock, AlertCircle } from 'lucide-react'

const ProblemStatement = () => {
  const challenges = [
    {
      icon: TrendingDown,
      title: 'Hohe Steuerlast',
      description: 'Bis zu 45% Steuern + Soli schmälern Ihren Gewinn',
    },
    {
      icon: AlertCircle,
      title: 'Komplexe Vorsorgeoptionen',
      description: '§ 3 Nr. 63 und § 4d EStG, bAV, Rürup - welcher Weg ist richtig?',
    },
    {
      icon: Clock,
      title: 'Keine Zeit für Finanzplanung',
      description: 'Zwischen Tagesgeschäft und Unternehmensentwicklung fehlt die Zeit',
    },
  ]

  return (
    <section id="herausforderungen" className="section-padding bg-primary-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            3 Herausforderungen für <span className="gradient-text">Geschäftsführer</span>
          </h2>
          <p className="text-lg text-gray-600">
            Sie sind nicht allein: Diese Themen beschäftigen die meisten Unternehmer
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="bg-white rounded-xl p-6 shadow-md h-full border border-gray-100">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                  <challenge.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {challenge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bridge to Solution */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-10"
        >
          <p className="text-lg text-gray-700 font-medium">
            Wir lösen alle 3 Herausforderungen in einem <span className="text-primary-600 font-bold">30-Minuten-Gespräch</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemStatement
