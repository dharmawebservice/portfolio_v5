import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <>
      <PageHero
        eyebrow="Career timeline"
        title="Work"
        titleEm="Experience"
        subtitle="A journey from AI/ML internships through full-stack engineering to enterprise systems work — building real skills on real projects."
      />

      <section className="py-12 md:py-24">
        <div className="container-px">
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[27px] md:left-[31px] top-2 bottom-2 w-px bg-paper-border dark:bg-carbon-border" />

            <div className="space-y-12">
              {experience.map((job, idx) => (
                <Reveal key={job.role} direction="up" delay={idx * 0.05}>
                  <div className="relative flex gap-6 md:gap-8">
                    {/* Node */}
                    <div className="relative shrink-0">
                      <div
                        className={`w-14 md:w-16 h-14 md:h-16 rounded-2xl flex items-center justify-center text-2xl border-2 ${
                          job.current
                            ? 'bg-cobalt-light/10 dark:bg-signal/10 border-cobalt-light dark:border-signal'
                            : 'bg-paper-surface dark:bg-carbon-surface border-paper-border dark:border-carbon-border'
                        }`}
                      >
                        {job.icon}
                      </div>
                      {job.current && (
                        <motion.span
                          className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-cobalt-light dark:bg-signal border-2 border-paper-bg dark:border-carbon-bg"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>

                    {/* Card */}
                    <div className="card-base p-6 md:p-8 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-display font-semibold text-xl text-paper-ink dark:text-carbon-ink mb-1">
                            {job.role}
                          </h3>
                          <div className="text-cobalt-light dark:text-signal font-medium text-sm">{job.company}</div>
                        </div>
                        {job.current && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cobalt-light dark:bg-signal text-white dark:text-carbon-bg text-[0.65rem] font-semibold uppercase tracking-wider shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-carbon-bg animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>

                      <div className="font-mono text-xs text-paper-ink-3 dark:text-carbon-ink-3 mb-5">
                        {job.period} · {job.location}
                      </div>

                      <p className="text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed mb-5">{job.summary}</p>

                      <ul className="space-y-2.5 mb-6">
                        {job.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-paper-ink-2 dark:text-carbon-ink-2">
                            <CheckCircle2 size={15} className="text-cobalt-light dark:text-signal shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span key={tag} className="pill !py-1 !px-2.5 !text-[0.68rem]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Curious about my"
        titleEm="growth?"
        subtitle="Every role has taught me something new. Let's talk about how my experience could fit your next project or team."
      />
    </>
  )
}
