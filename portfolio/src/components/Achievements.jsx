import { motion } from 'framer-motion'
import { FaTrophy, FaMedal, FaCertificate, FaRunning, FaAward } from 'react-icons/fa'
import { achievements } from '../data/portfolioData'

const iconColorPairs = [
  { icon: FaTrophy, color: 'from-accent-gold to-accent-pink' },
  { icon: FaCertificate, color: 'from-accent to-accent-cyan' },
  { icon: FaMedal, color: 'from-accent-cyan to-accent' },
  { icon: FaRunning, color: 'from-accent-pink to-accent-gold' },
  { icon: FaMedal, color: 'from-accent-gold to-accent' },
  { icon: FaAward, color: 'from-accent to-accent-pink' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">Milestones</p>
          <h2 className="section-title">
            Achievement <span className="heading-gradient">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, i) => {
            const { icon: Icon, color } = iconColorPairs[i % iconColorPairs.length]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 6) * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-glow group-hover:scale-105 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={18} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                <p className="text-[11px] text-accent-cyan font-mono mt-2">{item.date}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
