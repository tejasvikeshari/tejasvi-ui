import { useMemo } from 'react'
import { motion } from 'framer-motion'

/**
 * Fixed full-page backdrop: animated gradient, floating blurred blobs,
 * a subtle radial "grid-glow" wash, and a light field of drifting
 * particles. Purely decorative — sits behind all content.
 */
export default function AnimatedBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 6,
      })),
    []
  )

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden animated-gradient-bg">
      <div className="absolute inset-0 bg-grid-glow" />

      {/* Floating blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] bg-accent-cyan/20 rounded-full blur-[120px] animate-blob [animation-delay:3s]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-accent-pink/20 rounded-full blur-[120px] animate-blob [animation-delay:6s]" />

      {/* Drifting particles */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/40"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Noise-like overlay for depth */}
      <div className="absolute inset-0 bg-base-950/40" />
    </div>
  )
}
