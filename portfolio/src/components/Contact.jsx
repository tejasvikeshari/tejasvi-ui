import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { personal, contact, socials } from '../data/portfolioData'

const iconMap = { FaGithub, FaLinkedin, SiLeetcode, FaHackerrank, FaEnvelope }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const { serviceId, templateId, publicKey } = contact.emailjs
    const isConfigured =
      serviceId && !serviceId.includes('YOUR_') && templateId && !templateId.includes('YOUR_')

    if (!isConfigured) {
      // EmailJS not configured yet — show a friendly hint instead of failing silently.
      console.warn(
        'EmailJS is not configured. Add your serviceId, templateId, and publicKey in src/data/portfolioData.js'
      )
      setStatus('error')
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        { from_name: form.name, from_email: form.email, message: form.message },
        publicKey
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">Let's connect</p>
          <h2 className="section-title">
            Get In <span className="heading-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm">
            Have a role, project, or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-pink flex items-center justify-center shadow-glow">
                <FaEnvelope className="text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <a href={`mailto:${personal.email}`} className="text-slate-100 hover:text-accent-cyan">
                  {personal.email}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan to-accent flex items-center justify-center shadow-glow">
                <FaPhoneAlt className="text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Phone</p>
                <a href={`tel:${personal.phone}`} className="text-slate-100 hover:text-accent-cyan">
                  {personal.phone}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-accent-pink flex items-center justify-center shadow-glow">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="text-slate-100">{contact.address}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
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
                    className="w-11 h-11 rounded-full glass flex items-center justify-center text-slate-300 hover:text-white hover:shadow-glow transition-shadow"
                  >
                    <Icon size={16} />
                  </a>
                )
              })}
            </div>

            <div className="glass-card overflow-hidden h-56">
              <iframe
                title="Location map"
                src={contact.mapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form side */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 space-y-5"
          >
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Name</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent focus:shadow-glow transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Email</label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent focus:shadow-glow transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 mb-1.5 block">Message</label>
              <textarea
                required
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about the opportunity or idea..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent focus:shadow-glow transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full justify-center disabled:opacity-60"
            >
              <FaPaperPlane />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-emerald-400 text-center">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-amber-400 text-center">
                EmailJS isn't configured yet — add your serviceId / templateId / publicKey in{' '}
                <code>src/data/portfolioData.js</code>, or email me directly at {personal.email}.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
