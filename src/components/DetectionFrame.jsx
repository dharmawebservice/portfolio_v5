import { motion } from 'framer-motion'

/**
 * The portfolio's signature visual element: an object-detection style
 * bounding frame with animated corner brackets and an optional scanning
 * line, directly referencing Dharmendra's YOLOv3 computer-vision project.
 * Renders as a glowing mint frame in dark mode, clean ink lines in light.
 */
export default function DetectionFrame({ children, scanning = true, rounded = 'rounded-2xl' }) {
  return (
    <div className={`relative ${rounded} overflow-hidden group`}>
      {children}

      {/* Corner brackets */}
      <span className="bracket-corner bracket-tl group-hover:w-8 group-hover:h-8" />
      <span className="bracket-corner bracket-tr group-hover:w-8 group-hover:h-8" />
      <span className="bracket-corner bracket-bl group-hover:w-8 group-hover:h-8" />
      <span className="bracket-corner bracket-br group-hover:w-8 group-hover:h-8" />

      {/* Scanning line — dark mode only, mimics a CV model sweeping the frame */}
      {scanning && (
        <motion.span
          className="absolute left-3 right-3 h-px bg-gradient-to-r from-transparent via-signal to-transparent hidden dark:block pointer-events-none"
          animate={{ top: ['5%', '95%', '5%'], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.5, 0.9, 1] }}
        />
      )}
    </div>
  )
}
