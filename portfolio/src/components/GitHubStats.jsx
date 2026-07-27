import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaUsers, FaUserFriends, FaCodeBranch, FaBook } from 'react-icons/fa'
import { github } from '../data/portfolioData'

const statIcons = [FaBook, FaUsers, FaUserFriends, FaCodeBranch]

export default function GitHubStats() {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ok | error

  useEffect(() => {
    let mounted = true
    fetch(`https://api.github.com/users/${github.username}`)
      .then((res) => {
        if (!res.ok) throw new Error('GitHub user not found')
        return res.json()
      })
      .then((json) => {
        if (mounted) {
          setData(json)
          setStatus('ok')
        }
      })
      .catch(() => mounted && setStatus('error'))
    return () => {
      mounted = false
    }
  }, [])

  const stats = data
    ? [
        { label: 'Repositories', value: data.public_repos ?? '—' },
        { label: 'Followers', value: data.followers ?? '—' },
        { label: 'Following', value: data.following ?? '—' },
        { label: 'Gists', value: data.public_gists ?? '—' },
      ]
    : [
        { label: 'Repositories', value: '—' },
        { label: 'Followers', value: '—' },
        { label: 'Following', value: '—' },
        { label: 'Gists', value: '—' },
      ]

  return (
    <section id="github" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">Open source activity</p>
          <h2 className="section-title">
            GitHub <span className="heading-gradient">Stats</span>
          </h2>
        </motion.div>

        <motion.a
          href={`https://github.com/${github.username}`}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 flex flex-wrap items-center justify-between gap-4 mb-8 hover:shadow-glow-cyan transition-shadow"
        >
          <div className="flex items-center gap-3">
            <FaGithub className="text-2xl text-white" />
            <div>
              <p className="text-white font-semibold">@{github.username}</p>
              {status === 'error' && (
                <p className="text-xs text-slate-500">
                  Set your real GitHub username in <code>src/data/portfolioData.js</code>
                </p>
              )}
            </div>
          </div>
        </motion.a>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => {
            const Icon = statIcons[i]
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 text-center"
              >
                <Icon className="mx-auto text-accent-cyan mb-3" size={20} />
                <p className="text-2xl font-display font-bold text-white">
                  {status === 'loading' ? (
                    <span className="inline-block w-8 h-6 rounded bg-white/10 animate-pulse" />
                  ) : (
                    s.value
                  )}
                </p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Contribution graph + top languages via public image services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 overflow-x-auto"
        >
          <img
            src={`https://ghchart.rshah.org/7c5cff/${github.username}`}
            alt="GitHub contribution graph"
            className="w-full min-w-[600px]"
            loading="lazy"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${github.username}&show_icons=true&theme=transparent&hide_border=true&title_color=3cf0ff&icon_color=7c5cff&text_color=cbd5e1`}
              alt="GitHub stats card"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-4"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${github.username}&layout=compact&theme=transparent&hide_border=true&title_color=3cf0ff&text_color=cbd5e1`}
              alt="Most used languages"
              className="w-full"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
