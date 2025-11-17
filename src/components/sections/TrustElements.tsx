'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Users, Award, Building2, Quote } from 'lucide-react'

const TrustElements = () => {
  const testimonials = [
    {
      name: 'Geschäftsführer',
      role: 'Engineering-Unternehmen',
      content: 'Das Team hat mir geholfen, jährlich erhebliche Steuerersparnisse zu realisieren. Die persönliche Betreuung und fachliche Expertise sind außergewöhnlich.',
      rating: 5,
    },
    {
      name: 'CEO',
      role: 'IT-Dienstleistungsunternehmen',
      content: 'Dank der professionellen Beratung konnte ich mein Privatvermögen über mehrere Jahre hinweg steueroptimiert aufbauen. Ein verlässlicher Partner für langfristige Vermögensplanung.',
      rating: 5,
    },
    {
      name: 'Geschäftsführer',
      role: 'Beratungsunternehmen',
      content: 'Die entwickelte Strategie überzeugt durch Transparenz, Flexibilität und solide Renditeaussichten. Ich fühle mich gut aufgehoben.',
      rating: 5,
    },
  ]

  const stats = [
    { value: '1.500+', label: 'zufriedene Kunden' },
    { value: '95%', label: 'Weiterempfehlungsrate' },
  ]

  const partnerLogos = [
    { name: 'Morgan Stanley', file: 'morgan-stanley.svg' },
    { name: 'Bit Capital Global', file: 'bit-capital-global.png' },
    { name: 'Vanguard', file: 'vanguard.svg' },
    { name: 'Janus Henderson', file: 'janus-henderson.svg' },
    { name: 'Fidelity', file: 'fidelity.svg' },
    { name: 'Xtrackers', file: 'xtrackers-dws.png' },
  ]

  return (
    <section id="warum-rpmg" className="section-padding bg-gray-50">
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
            Partner & <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Seit über 10 Jahren helfen wir erfolgreichen Unternehmern dabei,
            ihr Vermögen intelligent und steuersparend aufzubauen.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg h-full relative">
                <Quote className="w-8 h-8 text-primary-200 absolute top-4 right-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-500 text-accent-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 mb-6 relative z-10">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-xl font-bold text-center text-gray-900 mb-8">
            Unsere Partner und Auszeichnungen
          </h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {partnerLogos.map((logo, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300"
              >
                {logo.file ? (
                  <Image
                    src={`/logos/${logo.file}`}
                    alt={`${logo.name} Logo`}
                    width={140}
                    height={50}
                    className="object-contain"
                  />
                ) : (
                  <div className="text-gray-400 hover:text-gray-700 font-semibold text-sm text-center">
                    {logo.name}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustElements
