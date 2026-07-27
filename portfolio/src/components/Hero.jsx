import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaEnvelope,
  FaDownload,
  FaPaperPlane,
  FaChevronDown,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personal, socials } from '../data/portfolioData'
import LazyImage from '../utils/LazyImage'

const iconMap = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  SiLeetcode: SiLeetcode,
  FaHackerrank: FaHackerrank,
  FaEnvelope: FaEnvelope,
}

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: personal.titles,
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-32 lg:pt-24"
    >
      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — profile image */}
        <motion.div
          className="flex justify-center lg:justify-start order-2 lg:order-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Glowing rotating ring */}
            <motion.div
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent via-accent-pink to-accent-cyan opacity-70 blur-md"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />
            <div className="absolute -inset-1 rounded-full bg-base-950" />

            <motion.div
              className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-glow"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <LazyImage
                src={personal.avatar}
                alt={personal.name}
                className="w-full h-full"
                fit="cover"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 sm:bottom-2 sm:right-0 glass-card px-4 py-2 flex items-center gap-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-slate-200">Open to work</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — text content */}
        <motion.div
          className="order-1 lg:order-2 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <motion.p
            className="section-tag inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="font-cursive text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight">
            Hello, I'm <span className="heading-gradient">{personal.name}</span>
          </h1>

          <div className="mt-3 text-xl sm:text-2xl font-mono text-accent-cyan h-9">
            <span ref={typedRef} />
            <span className="animate-pulse">|</span>
          </div>

          <p className="mt-6 text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href={personal.resumeFile} download className="btn-primary">
              <FaDownload /> Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              <FaPaperPlane /> Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
            {socials.map((s, i) => {
              const Icon = iconMap[s.icon]
              if (!Icon) return null
              return (
                <motion.a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:shadow-glow transition-shadow"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-accent-cyan transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <FaChevronDown />
      </motion.a>
    </section>
  )
}
