import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'
import { experience } from '../data/portfolioData'

function companyInitials(name) {
  const words = name.split(' ').filter(Boolean)
  if (words.length === 1 && words[0] === words[0].toUpperCase() && words[0].length <= 5) {
    return words[0]
  }
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  const initials = words
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .join('')
  return (initials || words.map((w) => w[0]).join('')).slice(0, 4).toUpperCase()
}

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">My journey so far</p>
          <h2 className="section-title">
            Experience & <span className="heading-gradient">Training</span>
          </h2>
        </motion.div>

        <div className="relative pl-10 sm:pl-14">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-pink to-accent-cyan" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company + exp.position}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-10 sm:-left-14 top-1 w-8 h-8 rounded-full glass flex items-center justify-center shadow-glow">
                  <FaBriefcase className="text-accent-cyan" size={12} />
                </span>

                <div className="glass-card p-6 flex flex-col sm:flex-row gap-5">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center shadow-glow">
                    <span className="font-display font-bold text-white text-sm tracking-tight">
                      {companyInitials(exp.company)}
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-mono text-accent-cyan mb-1">{exp.duration}</p>
                    <h3 className="text-white font-display font-semibold">{exp.position}</h3>
                    <p className="text-sm text-slate-400 mb-2">{exp.company}</p>
                    <p className="text-sm text-slate-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
