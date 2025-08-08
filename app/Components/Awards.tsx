"use client";
import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08 } },
} as const

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
} as const

const cards = [
  { icon: '🏆', title: 'National UCMAS Competition 2016', note: 'Champion' },
  { icon: '🚀', title: 'Cubes in Space Astronomy Competition, NASO 2021', note: 'Finalist' },
  { icon: '📊', title: 'PowerPoint Presentation Competition 2024', note: 'Finalist' },
  { icon: '🥉', title: 'Wikipedia Asian Month 2019', note: 'Third' },
  { icon: '🎤', title: 'Slam Poetry Competition', note: 'First' },
]

const Awards = () => {
  return (
    <section className='relative mx-auto max-w-6xl py-16 px-6'>
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">Awards</span>
      </motion.h2>

      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {cards.map(({ icon, title, note }, idx) => (
          <motion.div
            key={idx}
            className="relative rounded-xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-pink-500/40 to-yellow-400/40"
            variants={item}
            whileHover={{ y: -6 }}
          >
            <div className="rounded-xl bg-[#1a1a1a]/80 backdrop-blur p-5 h-full">
              <div className="flex items-center gap-3">
                <div className="text-3xl" aria-hidden>{icon}</div>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">{title}</h3>
                  <p className="text-sm text-white/70">{note}</p>
                </div>
              </div>

              <motion.div
                className="pointer-events-none absolute -top-1 -right-1 h-16 w-16 rounded-full bg-white/10 blur-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * idx }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Awards