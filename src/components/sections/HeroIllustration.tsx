'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSavingsTowers from './HeroSavingsTowers'
import HeroTrustCard from './HeroTrustCard'
import HeroOutcomeCard from './HeroOutcomeCard'

const ROTATION_INTERVAL = 5000

const HeroIllustration = () => {
  const [currentCard, setCurrentCard] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const [dragDirection, setDragDirection] = useState(0)

  const cards = [
    { component: HeroSavingsTowers, key: 'towers' },
    { component: HeroTrustCard, key: 'trust-security' },
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

  const goToNextCard = () => {
    setDragDirection(1)
    setCurrentCard((prev) => (prev + 1) % cards.length)
    setProgress(0)
  }

  const goToPrevCard = () => {
    setDragDirection(-1)
    setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length)
    setProgress(0)
  }

  const handleDragEnd = (_event: any, info: any) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      goToPrevCard()
    } else if (info.offset.x < -swipeThreshold) {
      goToNextCard()
    }
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
            initial={{ opacity: 0, x: dragDirection * 100, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: dragDirection * -100, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={handleDragEnd}
            className="cursor-grab active:cursor-grabbing"
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
