import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[length:32px_32px] opacity-30 dark:opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_25%,transparent_75%)]" />
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="font-mono text-sm text-cobalt-light dark:text-signal mb-4 flex items-center justify-center gap-2">
            <span className="text-paper-ink-3 dark:text-carbon-ink-3">$</span> 404: route_not_found
          </div>
          <h1 className="heading-xl text-[clamp(4rem,12vw,8rem)] mb-4">404</h1>
          <p className="text-lg text-paper-ink-2 dark:text-carbon-ink-2 mb-10">
            This page doesn't exist — or it hasn't been built yet.
          </p>
          <Link to="/" className="btn-primary">
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
