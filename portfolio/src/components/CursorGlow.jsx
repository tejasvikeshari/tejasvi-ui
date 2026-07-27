import { useEffect, useRef } from 'react'

/**
 * A soft radial glow that follows the mouse, plus a small dot that
 * trails slightly behind for a premium "mouse follower" feel.
 * Automatically disabled on touch devices.
 */
export default function CursorGlow() {
  const glowRef = useRef(null)
  const dotRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let dotX = mouseX
    let dotY = mouseY

    const handleMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${mouseX - 200}px, ${mouseY - 200}px)`
      }
    }

    let raf
    const animateDot = () => {
      dotX += (mouseX - dotX) * 0.18
      dotY += (mouseY - dotY) * 0.18
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX - 6}px, ${dotY - 6}px)`
      }
      raf = requestAnimationFrame(animateDot)
    }

    window.addEventListener('mousemove', handleMove)
    raf = requestAnimationFrame(animateDot)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden sm:block">
      <div
        ref={glowRef}
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(124,92,255,0.6), rgba(60,240,255,0.2) 40%, transparent 70%)',
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        className="absolute w-3 h-3 rounded-full bg-white/80 shadow-glow"
        style={{ willChange: 'transform' }}
      />
    </div>
  )
}
