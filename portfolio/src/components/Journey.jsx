import { useEffect, useMemo, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaImages, FaTimes, FaChevronLeft, FaChevronRight, FaFolderOpen } from 'react-icons/fa'

// Auto-import every photo dropped into src/assets/images/journey/ —
// no code changes needed, just add files to that one folder.
const modules = import.meta.glob(
  '/src/assets/images/journey/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
)

function titleFromFilename(path) {
  const file = path.split('/').pop().replace(/\.[^/.]+$/, '')
  return file
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

export default function Journey() {
  const photos = useMemo(
    () =>
      Object.entries(modules)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([path, src]) => ({ src, title: titleFromFilename(path) })),
    []
  )

  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(
    (e) => {
      e?.stopPropagation()
      setActiveIndex((i) => (i - 1 + photos.length) % photos.length)
    },
    [photos.length]
  )
  const showNext = useCallback(
    (e) => {
      e?.stopPropagation()
      setActiveIndex((i) => (i + 1) % photos.length)
    },
    [photos.length]
  )

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close, showPrev, showNext])

  return (
    <section id="journey" className="relative section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-tag">All the moments, captured</p>
          <h2 className="section-title">
            My <span className="heading-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm">
            NCC, college events, internships, sports, trips and everything in
            between — drop new photos into{' '}
            <code className="text-accent-cyan">src/assets/images/journey/</code> and they
            show up here automatically.
          </p>
        </motion.div>

        {photos.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card border-2 border-dashed border-white/10 p-14 text-center max-w-xl mx-auto"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-accent to-accent-cyan flex items-center justify-center mb-5 shadow-glow">
              <FaFolderOpen className="text-white" size={22} />
            </div>
            <h3 className="text-white font-display font-semibold mb-2">
              Your gallery is ready and waiting
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Add photos to <code className="text-accent-cyan">src/assets/images/journey/</code>{' '}
              — every image in that folder appears here automatically, no code edits required.
            </p>
          </motion.div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {photos.map((photo, i) => (
              <motion.button
                key={photo.src}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: (i % 6) * 0.06, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="mb-5 w-full break-inside-avoid glass-card group text-left cursor-zoom-in block overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="flex items-center gap-2 text-white text-sm font-medium">
                      <FaImages className="text-accent-cyan" size={13} />
                      {photo.title}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              aria-label="Close"
              onClick={close}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 w-10 h-10 rounded-full bg-base-900 border border-white/15 flex items-center justify-center text-white hover:border-accent hover:shadow-glow transition-all z-10"
            >
              <FaTimes />
            </button>

            {photos.length > 1 && (
              <>
                <button
                  aria-label="Previous photo"
                  onClick={showPrev}
                  className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-base-900 border border-white/15 flex items-center justify-center text-white hover:border-accent hover:shadow-glow transition-all z-10"
                >
                  <FaChevronLeft />
                </button>
                <button
                  aria-label="Next photo"
                  onClick={showNext}
                  className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-base-900 border border-white/15 flex items-center justify-center text-white hover:border-accent hover:shadow-glow transition-all z-10"
                >
                  <FaChevronRight />
                </button>
              </>
            )}

            <motion.div
              key={photos[activeIndex]?.src}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 24, stiffness: 240 }}
              className="relative max-w-3xl w-full glass-card p-3"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[activeIndex]?.src}
                alt={photos[activeIndex]?.title}
                className="w-full max-h-[70vh] object-contain rounded-xl bg-black/30"
              />
              <div className="p-4">
                <h3 className="text-lg font-display font-semibold text-white">
                  {photos[activeIndex]?.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
