import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Reveal from '../Reveal'
import { languages, skillTagCloud } from '../../data/content'

function SkillBar({ name, level, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-sm text-paper-ink dark:text-carbon-ink">{name}</span>
        <span className="font-mono text-xs text-paper-ink-3 dark:text-carbon-ink-3">{level}%</span>
      </div>
      <div className="h-1.5 bg-paper-border dark:bg-carbon-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cobalt-light to-cobalt dark:from-signal dark:to-signal/70"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
        />
      </div>
    </div>
  )
}

export default function SkillsPreviewSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-px">
        <Reveal className="mb-14">
          <p className="section-label">Technical Stack</p>
          <h2 className="heading-xl text-[clamp(1.9rem,3.6vw,2.8rem)]">
            Skills & <em className="italic dark:not-italic text-cobalt-light dark:text-signal">Expertise</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16">
          <Reveal direction="left">
            <div className="space-y-6">
              {languages.map((lang, i) => (
                <SkillBar key={lang.name} name={lang.name} level={lang.level} delay={i * 0.08} />
              ))}
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="flex flex-wrap gap-3">
              {skillTagCloud.map((tag) => (
                <span
                  key={tag.name}
                  className="pill flex items-center gap-2 hover:border-cobalt-light dark:hover:border-signal hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>{tag.icon}</span> {tag.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="text-center mt-14">
          <Link to="/skills" className="btn-outline">
            View Full Skills →
          </Link>
        </div>
      </div>
    </section>
  )
}
