import { motion } from 'framer-motion'
import * as SiIcons from 'react-icons/si'
import { FaJava, FaCode, FaLayerGroup, FaServer, FaDatabase, FaTools } from 'react-icons/fa'
import { skillCategories } from '../data/portfolioData'

const iconMap = { ...SiIcons, FaJava }

const categoryMeta = {
  'Programming Languages': { icon: FaCode, color: 'from-accent to-accent-pink' },
  Frontend: { icon: FaLayerGroup, color: 'from-accent-cyan to-accent' },
  Backend: { icon: FaServer, color: 'from-accent-gold to-accent-pink' },
  Database: { icon: FaDatabase, color: 'from-accent to-accent-cyan' },
  Tools: { icon: FaTools, color: 'from-accent-pink to-accent-gold' },
}
const defaultMeta = { icon: FaTools, color: 'from-accent to-accent-cyan' }

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
}

function SkillCard({ skill, color }) {
  const Icon = iconMap[skill.icon]
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.05 }}
      className="group relative glass-card p-6 flex flex-col items-center gap-3 cursor-default overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/20 via-transparent to-accent-cyan/20" />
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-4/5 rounded-full bg-gradient-to-r ${color} transition-all duration-300`}
      />
      <div className="relative z-10 w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
        {Icon ? (
          <Icon className="text-3xl text-slate-300 group-hover:text-accent-cyan transition-colors" />
        ) : (
          <span className="text-xs text-slate-500">{skill.name[0]}</span>
        )}
      </div>
      <p className="relative z-10 text-sm font-medium text-slate-300 group-hover:text-white transition-colors text-center">
        {skill.name}
      </p>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">What I work with</p>
          <h2 className="section-title">
            Tech <span className="heading-gradient">Stack</span>
          </h2>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category) => {
            const meta = categoryMeta[category.title] || defaultMeta
            const Icon = meta.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${meta.color} flex items-center justify-center shadow-glow flex-shrink-0`}
                  >
                    <Icon className="text-white" size={16} />
                  </div>
                  <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-accent-cyan">
                    {category.title}
                  </h3>
                  <span className="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent" />
                </div>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} color={meta.color} />
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
