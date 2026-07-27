import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { navLinks, personal } from '../data/portfolioData'
import useScrollSpy from '../hooks/useScrollSpy'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, setDark] = useState(true)
  const activeId = useScrollSpy(navLinks.map((l) => l.href.replace('#', '')))

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const initials = personal.name
    .split(' ')
    .map((n) => n[0])
    .join('')

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-4 sm:mx-8 lg:mx-16 rounded-2xl transition-all duration-300 ${
            scrolled ? 'glass shadow-card' : ''
          }`}
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-3">
            <a href="#home" className="flex items-center gap-2 group">
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center font-display font-bold text-sm text-white shadow-glow group-hover:rotate-[20deg] transition-transform">
                {initials}
              </span>
              <span className="font-display font-semibold text-white hidden sm:inline">
                {personal.name.split(' ')[0]}
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeId === link.href.replace('#', '')
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                          transition={{ type: 'spring', duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <div className="flex items-center gap-3">
              <button
                aria-label="Toggle theme"
                onClick={() => setDark((d) => !d)}
                className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full glass text-accent-cyan hover:shadow-glow-cyan transition-shadow"
              >
                {dark ? <FaSun size={14} /> : <FaMoon size={14} />}
              </button>
              <a href="#contact" className="hidden lg:inline-flex btn-primary !py-2 !px-5 !text-xs">
                Let's Talk
              </a>
              <button
                aria-label="Open menu"
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full glass text-white"
                onClick={() => setOpen(true)}
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-base-950/95 backdrop-blur-xl flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex justify-end p-6">
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full glass text-white"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="flex-1 flex flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-display font-semibold text-slate-200 hover:heading-gradient hover:text-transparent"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
