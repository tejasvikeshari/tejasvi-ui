import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope, FaHeart } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personal, socials, navLinks } from '../data/portfolioData'

const iconMap = { FaGithub, FaLinkedin, SiLeetcode, FaHackerrank, FaEnvelope }

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto section-padding !py-14">
        <div className="grid sm:grid-cols-3 gap-10 items-start">
          <div>
            <p className="font-display text-xl font-bold text-white mb-2">
              {personal.name.split(' ')[0]}
              <span className="heading-gradient">.</span>
            </p>
            <p className="text-sm text-slate-500 max-w-xs">{personal.tagline}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">
              Quick Navigation
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-accent-cyan transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">Connect</p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = iconMap[s.icon]
                if (!Icon) return null
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:shadow-glow transition-shadow"
                  >
                    <Icon size={15} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© {year} {personal.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart className="text-accent-pink" size={11} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
