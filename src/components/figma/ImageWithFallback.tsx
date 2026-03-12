import React, { useState, useRef, useEffect } from 'react'
import { toFastImageUrl } from '../../utils/imageUrl'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

const shimmerStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(90deg, #f0ebe3 25%, #e8e0d5 50%, #f0ebe3 75%)',
  backgroundSize: '200% 100%',
  animation: 'imgShimmer 1.4s ease-in-out infinite',
  borderRadius: 'inherit',
}

// Inject keyframes once
if (typeof document !== 'undefined' && !document.getElementById('img-shimmer-style')) {
  const style = document.createElement('style')
  style.id = 'img-shimmer-style'
  style.textContent = `
    @keyframes imgShimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
  `
  document.head.appendChild(style)
}

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src: rawSrc, alt, style, className, ...rest } = props
  const src = toFastImageUrl(rawSrc)

  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading')
  const imgRef = useRef<HTMLImageElement>(null)

  // Use IntersectionObserver for lazy loading
  const [inView, setInView] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    // If IntersectionObserver not supported, just load immediately
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' } // start loading 200px before it enters view
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Reset status when src changes
  useEffect(() => {
    setStatus('loading')
    setInView(false)
    // Re-trigger IntersectionObserver logic is handled by the outer effect
    // Just re-check immediately if already in view
    const el = wrapRef.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [src])

  const wrapStyle: React.CSSProperties = {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '100%',
    ...(typeof style === 'object' && !Array.isArray(style) ? style : {}),
  }

  if (status === 'error') {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
        </div>
      </div>
    )
  }

  return (
    <div ref={wrapRef} style={wrapStyle} className={className}>
      {/* Skeleton shimmer shown while loading */}
      {status === 'loading' && <div style={shimmerStyle} />}

      {/* Image — only set src once in-view */}
      <img
        ref={imgRef}
        src={inView ? src : undefined}
        alt={alt}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'inherit',
          opacity: status === 'loaded' ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
        {...rest}
        className={undefined}
      />
    </div>
  )
}
