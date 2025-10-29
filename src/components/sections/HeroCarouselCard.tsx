'use client'

import React, { ReactNode } from 'react'

interface HeroCarouselCardProps {
  children: ReactNode
  className?: string
}

const HeroCarouselCard = ({ children, className = '' }: HeroCarouselCardProps) => {
  return (
    <div className={`relative w-full max-w-3xl pointer-events-auto ${className}`}>
      <div className="relative flex h-[580px] sm:h-[600px] lg:h-[620px] flex-col rounded-[32px] border border-white/20 bg-gradient-to-br from-white/92 via-white/80 to-accent-50/70 p-4 md:p-6 shadow-[0_30px_80px_-45px_rgba(15,23,42,0.45)] backdrop-blur-xl overflow-auto">
        <div className="absolute -inset-3 rounded-[36px] bg-white/10 blur-3xl" aria-hidden="true" />
        <div className="relative z-10 flex h-full flex-col gap-6">
          {children}
        </div>
      </div>
    </div>
  )
}

export default HeroCarouselCard
