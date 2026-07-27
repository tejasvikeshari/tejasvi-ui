import { useState } from 'react'

/**
 * Lazy-loading image that keeps the photo's PROPER aspect ratio —
 * never stretched, never cropped, never oddly cropped. The parent
 * container should set an aspect ratio (e.g. `aspect-[4/3]`); this
 * component just centers the image inside it at its natural shape.
 * Use `fit="cover"` only where cropping-to-fill is actually wanted
 * (e.g. small circular avatars, square logos).
 */
export default function LazyImage({ src, alt = '', className = '', imgClassName = '', fit = 'contain' }) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-black/30 ${className}`}>
      {!loaded && !errored && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/5 via-white/10 to-white/5" />
      )}
      {errored ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/20 via-base-800 to-accent-cyan/10 text-xs text-slate-400">
          Add image
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          data-loaded={loaded}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`w-full h-full ${fit === 'cover' ? 'object-cover' : 'object-contain'} ${imgClassName}`}
        />
      )}
    </div>
  )
}
