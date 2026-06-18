import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import { projects, projectFilters } from '../data/content'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category.includes(activeFilter))

  return (
    <>
      <PageHero
        eyebrow="Things I've built"
        title="My"
        titleEm="Projects"
        subtitle="From production-ready web platforms to AI systems running on edge devices — a look at what I've shipped."
      />

      <section className="py-12 md:py-20">
        <div className="container-px">
          {/* Filter bar */}
          <Reveal className="flex flex-wrap gap-3 mb-14">
            {projectFilters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium font-mono transition-all duration-300 border ${
                  activeFilter === filter.key
                    ? 'bg-cobalt-light dark:bg-signal text-white dark:text-carbon-bg border-cobalt-light dark:border-signal'
                    : 'border-paper-border dark:border-carbon-border text-paper-ink-2 dark:text-carbon-ink-2 hover:border-cobalt-light dark:hover:border-signal'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </Reveal>

          {/* Project grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-7">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className={`card-base overflow-hidden hover:shadow-xl hover:border-cobalt-light/40 dark:hover:border-signal/40 transition-shadow duration-300 ${
                    project.featured ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className={`${project.featured ? 'md:grid md:grid-cols-[0.9fr_1.1fr]' : ''}`}>
                    <div
                      className={`flex items-center justify-center text-5xl bg-gradient-to-br ${project.gradient} ${
                        project.featured ? 'h-48 md:h-full' : 'h-40'
                      }`}
                    >
                      {project.emoji}
                    </div>
                    <div className="p-7">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-[0.68rem] uppercase tracking-wider text-cobalt-light dark:text-signal">
                          {project.tagline}
                        </span>
                        {project.featured && (
                          <span className="pill !py-1 !px-2.5 !text-[0.65rem] !border-amber-light/40 dark:!border-amber/40 !text-amber-light dark:!text-amber">
                            ★ Featured
                          </span>
                        )}
                      </div>
                      <h3 className="font-display font-semibold text-xl text-paper-ink dark:text-carbon-ink mb-3">
                        {project.name}
                      </h3>
                      <p className="text-sm text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed mb-5">
                        {project.desc}
                      </p>

                      <div className="flex gap-6 mb-5">
                        {project.metrics.map((metric) => (
                          <div key={metric.label}>
                            <div className="font-display font-bold text-xl text-paper-ink dark:text-carbon-ink">
                              {metric.num}
                            </div>
                            <div className="font-mono text-[0.65rem] uppercase tracking-wider text-paper-ink-3 dark:text-carbon-ink-3">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.stack.map((tech) => (
                          <span key={tech} className="pill !py-1 !px-2.5 !text-[0.68rem]">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-5 text-sm font-semibold">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            className="flex items-center gap-1.5 text-cobalt-light dark:text-signal hover:underline"
                          >
                            <ExternalLink size={14} /> Live Demo
                          </a>
                        ) : (
                          <span className="flex items-center gap-1.5 text-paper-ink-3 dark:text-carbon-ink-3 cursor-not-allowed">
                            <ExternalLink size={14} /> No Demo
                          </span>
                        )}
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-1.5 text-paper-ink-2 dark:text-carbon-ink-2 hover:text-paper-ink dark:hover:text-carbon-ink"
                        >
                          <Github size={14} /> Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTABand
        title="Have a project"
        titleEm="in mind?"
        subtitle="Whether it's a web app, an AI tool, or something entirely new — I'd love to help bring it to life."
      />
    </>
  )
}
