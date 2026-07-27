import { motion } from 'framer-motion'
import {
  FaGraduationCap,
  FaBullseye,
  FaLightbulb,
  FaHeart,
} from 'react-icons/fa'
import { personal, education, interests } from '../data/portfolioData'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

const cards = [
  {
    icon: FaLightbulb,
    title: 'Professional Summary',
    body: personal.summary,
    color: 'from-accent to-accent-pink',
  },
  {
    icon: FaBullseye,
    title: 'Career Objective',
    body: personal.objective,
    color: 'from-accent-cyan to-accent',
  },
]

export default function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="section-tag">Get to know me</p>
          <h2 className="section-title">
            About <span className="heading-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="glass-card p-8"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-5 shadow-glow`}
              >
                <c.icon className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-display font-semibold text-white mb-3">{c.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-accent-pink flex items-center justify-center mb-5 shadow-glow">
              <FaGraduationCap className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.degree} className="border-l-2 border-accent/40 pl-4">
                  <p className="text-slate-100 font-medium text-sm">{e.degree}</p>
                  <p className="text-slate-400 text-sm">{e.institution}</p>
                  <p className="text-accent-cyan text-xs font-mono mt-1">{e.duration}</p>
                  <p className="text-slate-500 text-xs mt-1">{e.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="glass-card p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent flex items-center justify-center mb-5 shadow-glow">
              <FaHeart className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-display font-semibold text-white mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, i) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ scale: 1.08 }}
                  className="px-4 py-2 rounded-full text-xs font-medium text-slate-200 bg-white/5 border border-white/10 hover:border-accent hover:text-white transition-colors"
                >
                  {interest}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
