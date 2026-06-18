import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animates a number from 0 to `target` when the element scrolls into view.
 * Uses a cubic ease-out curve, matching the feel of the original site's
 * counter animation but driven by Framer Motion's viewport detection.
 */
export function useAnimatedCounter(target, { duration = 1600, decimals = 0 } = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start
    let raf

    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = target * eased
      setValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.round(current))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [isInView, target, duration, decimals])

  return { ref, value }
}
