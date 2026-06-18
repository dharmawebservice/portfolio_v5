import { motion } from 'framer-motion'

const variants = {
  up: { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

/**
 * Wraps children in a scroll-triggered reveal animation.
 * direction: 'up' | 'left' | 'right' | 'scale' | 'none'
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  as: Component = motion.div,
  once = true,
}) {
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
      className={className}
    >
      {children}
    </Component>
  )
}

/**
 * Wraps a list of children, staggering their entrance.
 * Use with Reveal children that have `variants={undefined}` removed,
 * or simply pass plain elements — they'll inherit stagger timing.
 */
export function StaggerGroup({ children, className = '', staggerDelay = 0.1, once = true }) {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay } },
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={container}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', direction = 'up' }) {
  return (
    <motion.div variants={variants[direction]} transition={{ duration: 0.55, ease: [0.2, 0.65, 0.3, 0.9] }} className={className}>
      {children}
    </motion.div>
  )
}
