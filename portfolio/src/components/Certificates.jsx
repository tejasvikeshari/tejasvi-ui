import { motion } from 'framer-motion'
import { FaAward } from 'react-icons/fa'
import { certificates } from '../data/portfolioData'

export default function Certificates() {
  return (
    <section id="certificates" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">Proof of work</p>
          <h2 className="section-title">
            Certificates <span className="heading-gradient">& Courses</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-accent-pink flex items-center justify-center mb-5 shadow-glow group-hover:scale-105 transition-transform duration-300">
                <FaAward className="text-white" size={18} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1 leading-snug">
                {cert.name}
              </h3>
              <p className="text-xs text-accent-cyan">{cert.organization}</p>
              <p className="text-[11px] text-slate-500 font-mono mt-1">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
