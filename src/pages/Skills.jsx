import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import { languages, frameworks, aiml, devTools, concepts } from '../data/content'

function LanguageBar({ name, icon, level, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <div ref={ref} className="card-base p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="flex items-center gap-2.5 font-medium text-sm text-paper-ink dark:text-carbon-ink">
          <span className="text-lg">{icon}</span> {name}
        </span>
        <span className="font-mono text-xs text-paper-ink-3 dark:text-carbon-ink-3">{level}%</span>
      </div>
      <div className="h-2 bg-paper-border dark:bg-carbon-border rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cobalt-light to-cobalt dark:from-signal dark:to-signal/70"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.2, 0.65, 0.3, 0.9] }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <>
      <PageHero
        eyebrow="What I work with"
        title="Skills &"
        titleEm="Expertise"
        subtitle="A technical toolkit spanning full-stack development, AI/ML systems, databases, and enterprise software engineering."
      />

      <section className="py-12 md:py-20">
        <div className="container-px">
          {/* Languages */}
          <div className="mb-24">
            <Reveal className="mb-10">
              <p className="section-label">Core Languages</p>
              <h2 className="heading-xl text-[clamp(1.7rem,3.4vw,2.5rem)]">Programming Languages</h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-4">
              {languages.map((lang, i) => (
                <LanguageBar key={lang.name} {...lang} delay={i * 0.07} />
              ))}
            </div>
          </div>

          {/* Frameworks & Tools */}
          <div className="mb-24">
            <Reveal className="mb-10">
              <p className="section-label">Frameworks & Databases</p>
              <h2 className="heading-xl text-[clamp(1.7rem,3.4vw,2.5rem)]">Tools & Technologies</h2>
            </Reveal>
            <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.06}>
              {frameworks.map((fw) => (
                <StaggerItem key={fw.name}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="card-base p-5 text-center hover:border-cobalt-light/40 dark:hover:border-signal/40 h-full flex flex-col items-center justify-center"
                  >
                    <span className="text-2xl mb-2.5 block">{fw.icon}</span>
                    <h3 className="font-semibold text-sm text-paper-ink dark:text-carbon-ink mb-1">{fw.name}</h3>
                    <p className="text-xs text-paper-ink-3 dark:text-carbon-ink-3">{fw.level}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* AI/ML Showcase — the centerpiece */}
          <div className="mb-24">
            <Reveal className="mb-10">
              <p className="section-label">Specialization</p>
              <h2 className="heading-xl text-[clamp(1.7rem,3.4vw,2.5rem)] mb-4">
                AI / ML & <em className="italic dark:not-italic text-cobalt-light dark:text-signal">Computer Vision</em>
              </h2>
              <p className="text-paper-ink-2 dark:text-carbon-ink-2 max-w-2xl">
                Where I spend most of my curiosity — from real-time object detection to generative AI applications.
              </p>
            </Reveal>
            <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {aiml.map((item) => (
                <StaggerItem key={item.name}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="card-base p-7 h-full relative overflow-hidden group hover:border-cobalt-light/40 dark:hover:border-signal/40 hover:shadow-xl"
                  >
                    <span className="bracket-corner bracket-tl !w-4 !h-4 opacity-0 group-hover:opacity-100 group-hover:!w-6 group-hover:!h-6" />
                    <span className="bracket-corner bracket-br !w-4 !h-4 opacity-0 group-hover:opacity-100 group-hover:!w-6 group-hover:!h-6" />
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="font-display font-semibold text-lg text-paper-ink dark:text-carbon-ink mb-2.5">
                      {item.name}
                    </h3>
                    <p className="text-sm text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* Dev tools + concepts */}
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal direction="left">
              <h3 className="font-display font-semibold text-lg text-paper-ink dark:text-carbon-ink mb-5">
                Development Tools
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {devTools.map((tool) => (
                  <span key={tool} className="pill hover:border-cobalt-light dark:hover:border-signal hover:-translate-y-0.5 transition-all duration-200">
                    {tool}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal direction="right">
              <h3 className="font-display font-semibold text-lg text-paper-ink dark:text-carbon-ink mb-5">
                Concepts & Methodologies
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {concepts.map((concept) => (
                  <span key={concept} className="pill hover:border-cobalt-light dark:hover:border-signal hover:-translate-y-0.5 transition-all duration-200">
                    {concept}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        title="Like what you"
        titleEm="see?"
        subtitle="These skills come together in real projects. Take a look at what I've built, or reach out to discuss working together."
        secondaryLabel="See Projects"
        secondaryTo="/projects"
      />
    </>
  )
}
