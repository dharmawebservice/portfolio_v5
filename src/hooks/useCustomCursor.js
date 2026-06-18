import { useEffect, useRef } from 'react'

/**
 * Renders a custom dot + lagging ring cursor on desktop viewports.
 * The ring eases toward the pointer position and scales up over
 * interactive elements (links, buttons, cards).
 */
export function useCustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768) return

    const dot = document.createElement('div')
    dot.className =
      'fixed top-0 left-0 w-2 h-2 rounded-full bg-cobalt-light dark:bg-signal pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2'
    const ring = document.createElement('div')
    ring.className =
      'fixed top-0 left-0 w-9 h-9 rounded-full border border-cobalt-light/50 dark:border-signal/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-200'
    document.body.append(dot, ring)
    dotRef.current = dot
    ringRef.current = ring

    let mx = 0, my = 0, rx = 0, ry = 0

    const handleMove = (e) => {
      mx = e.clientX
      my = e.clientY
    }
    document.addEventListener('mousemove', handleMove)

    let rafId
    const animate = () => {
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`
      rx += (mx - rx) * 0.15
      ry += (my - ry) * 0.15
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`
      rafId = requestAnimationFrame(animate)
    }
    animate()

    const interactiveEls = document.querySelectorAll('a, button, [data-cursor-hover]')
    const onEnter = () => {
      ring.style.transform += ' scale(1.6)'
      ring.style.opacity = '0.8'
    }
    const onLeave = () => {
      ring.style.opacity = '0.5'
    }
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(rafId)
      dot.remove()
      ring.remove()
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])
}
