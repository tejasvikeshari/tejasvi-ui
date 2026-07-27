import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

export default function ImageModal({ item, onClose, titleKey = 'title', subtitleKey }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 22, stiffness: 220 }}
            className="relative max-w-3xl w-full glass-card p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-base-900 border border-white/15 flex items-center justify-center text-white hover:border-accent hover:shadow-glow transition-all z-10"
            >
              <FaTimes />
            </button>
            <img
              src={item.image}
              alt={item[titleKey]}
              className="w-full max-h-[70vh] object-contain rounded-xl bg-black/30"
            />
            <div className="p-4">
              <h3 className="text-lg font-display font-semibold text-white">{item[titleKey]}</h3>
              {subtitleKey && item[subtitleKey] && (
                <p className="text-sm text-accent-cyan mt-1">{item[subtitleKey]}</p>
              )}
              {item.description && (
                <p className="text-sm text-slate-400 mt-2">{item.description}</p>
              )}
              {item.date && <p className="text-xs text-slate-500 mt-2 font-mono">{item.date}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
