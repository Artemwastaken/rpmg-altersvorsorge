'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import Image from 'next/image'
import { Send, Phone, Mail, MapPin, Check, Calendar, Clock, Video } from 'lucide-react'
import CustomSelect from '@/components/ui/CustomSelect'

const formSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().min(10, 'Bitte geben Sie eine gültige Telefonnummer ein'),
  company: z.string().min(2, 'Firmenname muss mindestens 2 Zeichen haben'),
  annualProfit: z.string().min(1, 'Bitte wählen Sie einen Bereich'),
  message: z.string().optional(),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Sie müssen der Datenschutzerklärung zustimmen',
  }),
})

type FormData = z.infer<typeof formSchema>

const ConsultationForm = () => {
  const [showToast, setShowToast] = useState(false)
  const [annualProfit, setAnnualProfit] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false)
      }, 5000) // Toast disappears after 5 seconds
      return () => clearTimeout(timer)
    }
  }, [showToast])

  const onSubmit = async (data: FormData) => {
    try {
      // Web3Forms Integration
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          annual_profit: data.annualProfit,
          message: data.message || 'Keine Nachricht angegeben',
          subject: 'Neue Beratungsanfrage von ' + data.name,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setShowToast(true)
        reset()
        setAnnualProfit('')
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Es gab einen Fehler beim Absenden des Formulars. Bitte versuchen Sie es erneut.')
    }
  }

  return (
    <section id="beratung" className="section-padding bg-primary-50">
      <div className="container">
        {/* Section Header - Centered */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Kontakt &{' '}
            <span className="gradient-text">Beratung</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Vereinbaren Sie ein kostenloses Erstgespräch zur individuellen Vermögensplanung.
            Wir analysieren Ihre Situation und zeigen Ihnen konkrete Optimierungspotenziale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Team Photos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Ihr Beratungsteam
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    name: 'Marvin',
                    title: 'Geschäftsführer',
                    image: '/team/Marvin-1.2.jpg',
                  },
                  {
                    name: 'Robert',
                    title: 'Geschäftsführer',
                    image: '/team/Robert6.jpg',
                  },
                  {
                    name: 'Tarek',
                    title: 'Partner',
                    image: '/team/Tarek5.jpg',
                  },
                ].map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="relative w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">
                      {member.name}
                    </p>
                    <p className="text-xs text-gray-600">
                      {member.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What to Expect */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Was Sie erwartet:
              </h3>
              <ul className="space-y-3">
                {[
                  'Analyse Ihrer aktuellen Situation',
                  'Aufzeigen von Optimierungspotenzialen',
                  'Konkrete Handlungsempfehlungen',
                  'Individuelle Vermögensplanung',
                  'Alle Ihre Fragen werden beantwortet',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary-600" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 bg-gradient-to-r from-primary-50 to-accent-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-11 h-11 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Telefon</p>
                  <p className="text-base font-semibold text-gray-900">+49 (0) 221 / 92 42 80 30</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gradient-to-r from-primary-50 to-accent-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-11 h-11 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">E-Mail</p>
                  <p className="text-base font-semibold text-gray-900">info@rpmg.de</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gradient-to-r from-primary-50 to-accent-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-11 h-11 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Adresse</p>
                  <p className="text-base font-semibold text-gray-900">Lindenstraße 14, 50674 Köln</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gradient-to-r from-primary-50 to-accent-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-11 h-11 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Beratungszeiten</p>
                  <p className="text-base font-semibold text-gray-900">Mo-Fr: 10:00 - 20:00 Uhr</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-gradient-to-r from-primary-50 to-accent-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-11 h-11 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Video className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Telefonberatung oder Videoberatung</p>
                  <p className="text-base font-semibold text-gray-900">Nach Terminvereinbarung</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Kostenlose Analyse: Wie viel können <span className="gradient-text">SIE</span> sparen?
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors"
                    placeholder="Max Mustermann"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors"
                    placeholder="max@beispiel.de"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors"
                    placeholder="+49 123 456789"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Firma *
                  </label>
                  <input
                    type="text"
                    {...register('company')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors"
                    placeholder="Musterfirma GmbH"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                  )}
                </div>

                {/* Annual Profit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jährlicher Unternehmensgewinn *
                  </label>
                  <CustomSelect
                    options={[
                      { value: '50-100', label: '50.000 - 100.000 €' },
                      { value: '100-250', label: '100.000 - 250.000 €' },
                      { value: '250-500', label: '250.000 - 500.000 €' },
                      { value: '500-1000', label: '500.000 - 1.000.000 €' },
                      { value: '1000+', label: 'Über 1.000.000 €' },
                    ]}
                    value={annualProfit}
                    onChange={(value) => {
                      setAnnualProfit(value)
                      setValue('annualProfit', value, { shouldValidate: true })
                    }}
                    placeholder="Bitte wählen"
                    error={errors.annualProfit?.message}
                  />
                  {errors.annualProfit && (
                    <p className="mt-1 text-sm text-red-600">{errors.annualProfit.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nachricht (optional)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors"
                    placeholder="Gibt es etwas, das Sie uns mitteilen möchten?"
                  />
                </div>

                {/* Privacy */}
                <div>
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      {...register('privacy')}
                      className="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="text-sm text-gray-600">
                      Ich stimme der Verarbeitung meiner Daten gemäß der
                      Datenschutzerklärung zu. *
                    </span>
                  </label>
                  {errors.privacy && (
                    <p className="mt-1 text-sm text-red-600">{errors.privacy.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Wird gesendet...'
                  ) : (
                    <>
                      Kostenlose Beratung anfordern
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50 max-w-md"
          >
            <div className="bg-white rounded-xl shadow-2xl border-l-4 border-primary-600 p-6 flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-primary-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Anfrage erfolgreich gesendet!
                </h3>
                <p className="text-sm text-gray-600">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Schließen"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default ConsultationForm
