"use client";
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.08 },
  },
} as const;

const childVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
} as const;

const AboutMe = () => {
  return (
    <section className="relative mx-auto max-w-5xl py-16 px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-16 -left-10 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-500/25 to-cyan-400/20 blur-3xl"
          initial={{ opacity: 0, x: -20, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute -bottom-10 -right-8 h-56 w-56 rounded-full bg-gradient-to-tr from-yellow-400/20 to-pink-500/20 blur-3xl"
          initial={{ opacity: 0, x: 20, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
      </div>

      <motion.div
        className="relative rounded-2xl p-[1px] bg-gradient-to-r from-cyan-500/40 via-pink-500/40 to-yellow-400/40"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="rounded-2xl bg-[#1a1a1a]/80 backdrop-blur p-8 md:p-12">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
            variants={childVariants}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent">About Me</span>
            <motion.span
              className="block h-1 w-0 mt-3 rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400"
              initial={{ width: 0 }}
              animate={{ width: '6rem' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            />
          </motion.h2>

          <motion.p
            className="mt-6 text-base md:text-lg leading-relaxed text-white/90"
            variants={childVariants}
          >
I’m Bishal Rawal, currently working as a Web Developer and Graphic Designer at Simjung Tech. With a strong background in Digital Marketing from Karu Learning and Rapid Software Technologies, I bring together design, coding, and branding expertise to create impactful digital solutions. Passionate about combining creativity with technology, I’m always eager to learn, adapt, and explore new platforms.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            variants={childVariants}
          >
            {['UI/UX', 'Branding', 'Graphic Design', 'Digital Marketing'].map((tag) => (
              <motion.span
                key={tag}
                className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
