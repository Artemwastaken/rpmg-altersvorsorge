'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSavingsTowers from './HeroSavingsTowers'
import HeroTrustCard from './HeroTrustCard'
import HeroLegalCard from './HeroLegalCard'
import HeroOutcomeCard from './HeroOutcomeCard'

const ROTATION_INTERVAL = 5000

const HeroIllustration = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)

  const cards = [
    { component: HeroSavingsTowers, key: 'towers' },
    { component: HeroTrustCard, key: 'trust' },
    { component: HeroLegalCard, key: 'legal' },
    { component: HeroOutcomeCard, key: 'outcome' },
  ]

  useEffect(() => {
    if (isPaused) return

    const step = 100 / (ROTATION_INTERVAL / 100)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentCard((prevCard) => (prevCard + 1) % cards.length)
          return 0
        }
        return prev + step
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [isPaused, cards.length])

  useEffect(() => {
    setProgress(0)
  }, [currentCard])

  const CurrentCardComponent = cards[currentCard].component

  const goToCard = (index: number) => {
    setCurrentCard(index)
    setProgress(0)
  }

  return (
    <div
      className="relative flex w-full flex-col items-center gap-6 pr-4 md:pr-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full min-h-[620px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={cards[currentCard].key}
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <CurrentCardComponent />
          </motion.div>
        </AnimatePresence>

      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="relative h-1 w-32 overflow-hidden rounded-full bg-primary-100">
          <div
            className="absolute left-0 top-0 h-full bg-primary-600 transition-all duration-100"
            style={{ width: `${progress}%` }}
            aria-hidden
          />
        </div>

        <div className="flex gap-2">
          {cards.map((card, index) => (
            <button
              key={card.key}
              onClick={() => goToCard(index)}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                index === currentCard
                  ? 'bg-primary-600'
                  : 'bg-primary-300 hover:bg-primary-400'
              }`}
              aria-label={`Zur Karte ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroIllustration
