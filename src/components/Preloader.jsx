import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const BOOT_LINES = [
  'initializing portfolio...',
  'loading modules: react, framer-motion',
  'compiling assets...',
  'ready.',
]

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem('hasBooted')) {
      setVisible(false)
      return
    }

    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, BOOT_LINES.length))
    }, 280)

    const hideTimer = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('hasBooted', 'true')
    }, 1500)

    return () => {
      clearInterval(lineTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-carbon-bg flex items-center justify-center"
        >
          <div className="font-mono text-sm text-signal/90 w-[280px]">
            {BOOT_LINES.slice(0, lineIndex).map((line, i) => (
              <div key={i} className="flex items-center gap-2 mb-1.5">
                <span className="text-carbon-ink-3">$</span>
                <span>{line}</span>
              </div>
            ))}
            <span className="inline-block w-2 h-4 bg-signal animate-blink align-middle" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
