import { motion } from 'framer-motion'
import { FaHackerrank, FaExternalLinkAlt } from 'react-icons/fa'
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si'
import { codingProfiles } from '../data/portfolioData'

const iconMap = {
  SiLeetcode,
  FaHackerrank,
  SiCodechef,
  SiCodeforces,
}

const colorMap = {
  LeetCode: 'from-[#FFA116] to-[#FFA116]/40',
  HackerRank: 'from-[#00EA64] to-[#00EA64]/40',
  CodeChef: 'from-[#5B4638] to-[#5B4638]/60',
  Codeforces: 'from-[#1F8ACB] to-[#1F8ACB]/40',
}

export default function CodingProfiles() {
  return (
    <section id="coding" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">Competitive programming</p>
          <h2 className="section-title">
            Coding <span className="heading-gradient">Profiles</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile, i) => {
            const Icon = iconMap[profile.icon]
            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 text-center flex flex-col items-center"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorMap[profile.platform]} flex items-center justify-center mb-4 shadow-glow`}
                >
                  {Icon && <Icon className="text-white" size={22} />}
                </div>
                <h3 className="text-white font-display font-semibold mb-1">{profile.platform}</h3>
                <p className="text-xs text-slate-500 font-mono mb-1">@{profile.username}</p>
                {profile.rating && (
                  <p className="text-sm text-accent-cyan font-semibold mb-3">{profile.rating}</p>
                )}
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-white/15 text-slate-200 hover:border-accent hover:shadow-glow transition-all"
                >
                  View Profile <FaExternalLinkAlt size={10} />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
