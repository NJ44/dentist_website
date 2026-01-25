import React from 'react'
import { motion } from 'framer-motion'
import { config } from '../config'
import { scrollToElement } from '../hooks/useLenis'
import { useTranslation } from '../hooks/useTranslation'

const OurPractice = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Image */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&h=600&fit=crop"
            alt="Our Practice"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t.practice.title}
        </motion.h1>

        {/* Content */}
        <motion.div
          className="prose prose-lg max-w-none text-black leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-4">
            {t.practice.p1_1}{config.BUSINESS_NAME}{t.practice.p1_2}
          </p>

          <p className="mb-4">
            {t.practice.p2}
          </p>

          <p className="mb-4">
            {t.practice.p3}
          </p>

          <p className="mb-4">
            {t.practice.p4}
          </p>

          <p className="mb-4">
            {t.practice.p5_1}{config.CITY}{t.practice.p5_2}
          </p>

          <p className="mb-6">
            {t.practice.p6}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement('#contact', { offset: -100 });
            }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            {t.practice.cta}
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default OurPractice

