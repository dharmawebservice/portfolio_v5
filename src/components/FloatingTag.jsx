import { motion } from 'framer-motion'

export default function FloatingTag({ label, value, className = '', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 + delay }}
      className={`absolute card-base px-3.5 py-2.5 shadow-lg backdrop-blur-sm animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="font-mono text-[0.62rem] uppercase tracking-wider text-paper-ink-3 dark:text-carbon-ink-3">
        {label}
      </div>
      <div className="font-mono text-[0.82rem] font-semibold text-cobalt-light dark:text-signal">
        {value}
      </div>
    </motion.div>
  )
}
