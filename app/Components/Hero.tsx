"use client";
import React from 'react'
import { BackgroundLines } from '@/components/ui/background-lines'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], when: 'beforeChildren', staggerChildren: 0.06, delayChildren: 0.15 },
  },
} as const

const childVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
} as const

const charVariants = {
  hidden: { y: 24, opacity: 0, filter: 'blur(6px)' },
  show: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 420, damping: 24 },
  },
} as const

const Hero = () => {
  const firstName = 'Bishal'
  const lastName = 'Rawal'

  return (
    <div className="hero min-h-screen">
      <BackgroundLines>
        <></>
      </BackgroundLines>
      <motion.div
        className='z-10 mt-10 px-6 md:px-10 max-w-5xl'
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight"
          variants={childVariants}
        >
          <motion.span className="inline-block">
            {firstName.split('').map((char, idx) => (
              <motion.span
                key={`fn-${idx}`}
                className="inline-block bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
                style={{ backgroundSize: '200% 200%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
          <br />
          <motion.span className="inline-block" variants={childVariants}>
            {lastName.split('').map((char, idx) => (
              <motion.span key={`ln-${idx}`} className="inline-block" variants={charVariants}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        <motion.p className="py-5 text-lg md:text-2xl" variants={childVariants}>
          Operations Manager | UI/UX Designer | Digital Marketing Strategist 
          <br />
          <span className='text-base'>+9779763607255</span>
        </motion.p>

        <motion.div className="flex flex-wrap justify-start gap-6 mb-8" variants={childVariants}>
          <motion.a
            href="https://www.instagram.com/bshalrawal/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-pink-500"
            aria-label="Instagram"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-10 h-10 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://ne.wikipedia.org/wiki/%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%AF%E0%A5%8B%E0%A4%97%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%BE:Rawal_Bishal"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-blue-600"
            aria-label="Wikipedia"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 md:w-10 md:h-10 bi bi-wikipedia"  fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.835 3.003c.828-.006 2.688 0 2.688 0l.033.03v.288q0 .12-.133.12c-.433.02-.522.063-.68.29-.087.126-.258.393-.435.694l-1.52 2.843-.043.089 1.858 3.801.113.031 2.926-6.946q.152-.42-.044-.595c-.132-.114-.224-.18-.563-.195l-.275-.014a.16.16 0 0 1-.096-.035.1.1 0 0 1-.046-.084v-.289l.042-.03h3.306l.034.03v.29q0 .117-.133.117-.65.03-.962.281a1.64 1.64 0 0 0-.488.704s-2.691 6.16-3.612 8.208c-.353.672-.7.61-1.004-.019A224 224 0 0 1 8.044 8.81c-.623 1.285-1.475 3.026-1.898 3.81-.411.715-.75.622-1.02.019-.45-1.065-1.131-2.519-1.817-3.982-.735-1.569-1.475-3.149-1.943-4.272-.167-.4-.293-.657-.412-.759q-.18-.15-.746-.18Q0 3.421 0 3.341v-.303l.034-.03c.615-.003 3.594 0 3.594 0l.034.03v.288q0 .119-.15.118l-.375.016q-.483.02-.483.288-.002.125.109.4c.72 1.753 3.207 6.998 3.207 6.998l.091.023 1.603-3.197-.32-.71L6.24 5.095s-.213-.433-.286-.577l-.098-.196c-.387-.77-.411-.82-.865-.88-.137-.017-.208-.035-.208-.102v-.304l.041-.03h2.853l.075.024v.303q0 .104-.15.104l-.206.03c-.523.04-.438.254-.09.946l1.057 2.163 1.17-2.332c.195-.427.155-.534.074-.633-.046-.055-.202-.144-.54-.158l-.133-.015a.16.16 0 0 1-.096-.034.1.1 0 0 1-.045-.085v-.288l.041-.03Z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://discord.gg/nD4zfKGR"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110 hover:text-indigo-500"
            aria-label="Discord"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-10 h-10 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.07.07 0 0 0-.073.035c-.211.375-.444.864-.608 1.249a18.524 18.524 0 0 0-5.487 0 12.51 12.51 0 0 0-.617-1.249.07.07 0 0 0-.073-.035 19.736 19.736 0 0 0-4.885 1.515.064.064 0 0 0-.03.027C.533 9.045-.32 13.579.099 18.057a.08.08 0 0 0 .028.056c2.052 1.507 4.041 2.422 5.992 3.029a.07.07 0 0 0 .078-.027c.461-.63.873-1.295 1.226-1.994a.07.07 0 0 0-.038-.098c-.652-.247-1.27-.549-1.872-.892a.07.07 0 0 1-.007-.117c.126-.094.252-.192.371-.291a.07.07 0 0 1 .073-.01c3.927 1.793 8.18 1.793 12.061 0a.07.07 0 0 1 .074.009c.12.099.245.197.372.291a.07.07 0 0 1-.006.117 12.298 12.298 0 0 1-1.873.892.07.07 0 0 0-.038.098c.36.699.772 1.364 1.226 1.994a.07.07 0 0 0 .078.028c1.961-.607 3.95-1.522 6.002-3.029a.07.07 0 0 0 .028-.055c.5-5.177-.838-9.673-3.548-13.661a.061.061 0 0 0-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z"/>
            </svg>
          </motion.a>

          <motion.a
            href="mailto:'YOUR_SERVICE_ID', "
            className="transition-transform transform hover:scale-125 hover:text-red-500"
            aria-label="Mail"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
            </svg>
          </motion.a>

          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-125 hover:text-gray-800"
            aria-label="GitHub"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              className="w-10 h-10 md:w-10 md:h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.135 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
            </svg>
          </motion.a>
        </motion.div>

        <motion.p className="text-lg md:text-2xl" variants={childVariants}>
          Turning clicks into customers and ideas into <br /> impact—one campaign at a time.
        </motion.p>

        <motion.a
          className='btn btn-accent hidden mt-8 p-7 text-lg md:text-xl'
          href="#"
          variants={childVariants}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Download Resume
        </motion.a>

        <motion.div
          className="mt-6 h-1 w-24 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </motion.div>
    </div>
  )
}

export default Hero
