import React, { useState } from 'react'
import LeadForm from './LeadForm'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'
import { useTranslation } from '../hooks/useTranslation'

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay - lighter for black text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-white/60"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-black space-y-4 animate-fade-in">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-black">
              {t.hero.mainTitle}
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl text-black font-normal">
              {t.hero.mainSubtitle}
            </h2>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-opacity-90 transition-colors text-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#contact', { offset: -100 });
                }}
              >
                {t.hero.requestAppointment}
              </a>
              <a
                href="#services"
                className="bg-white text-primary px-6 py-3 rounded-full font-semibold text-base hover:bg-opacity-90 transition-colors text-center"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#services', { offset: -100 });
                }}
              >
                {t.hero.ourServices}
              </a>
            </div>
          </div>

          {/* Right Column - Lead Form */}
          <div className="animate-fade-in-delay">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

