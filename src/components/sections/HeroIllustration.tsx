'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Card1Vergleich from './HeroSavingsTowers'
import Card2Vertrauen from './HeroTrustCard'
import Card3Kapital from './HeroOutcomeCard'

const ROTATION_INTERVAL = 10000

const HeroIllustration = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [dragDirection, setDragDirection] = useState(0)

  // Fixed order: Vergleich → Vertrauen → Kapitalwachstum
  const cards = [
    { component: Card1Vergleich, key: 'vergleich' },
    { component: Card2Vertrauen, key: 'vertrauen' },
    { component: Card3Kapital, key: 'kapital' },
  ]

  useEffect(() => {
    if (isPaused) return

    const step = 100 / (ROTATION_INTERVAL / 100)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setDragDirection(1)
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
    const direction = index > currentCard ? 1 : index < currentCard ? -1 : 0
    setDragDirection(direction)
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
        <AnimatePresence mode="wait" custom={dragDirection}>
          <motion.div
            key={cards[currentCard].key}
            custom={dragDirection}
            initial={{ opacity: 0, x: -dragDirection * 100, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: dragDirection * 100, scale: 0.96 }}
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
