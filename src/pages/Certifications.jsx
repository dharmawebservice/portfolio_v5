import { motion } from 'framer-motion'
import { Award, BookOpen } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import { certifications, training, continuousLearning } from '../data/content'

export default function Certifications() {
  return (
    <>
      <PageHero
        eyebrow="Verified learning"
        title="Certifications &"
        titleEm="Training"
        subtitle="Formal certifications, enterprise training, and the topics I'm actively deepening my expertise in right now."
      />

      <section className="py-12 md:py-20">
        <div className="container-px">
          {/* Certifications */}
          <div className="mb-24">
            <Reveal className="mb-10">
              <p className="section-label">Certified</p>
              <h2 className="heading-xl text-[clamp(1.7rem,3.4vw,2.5rem)]">Certifications</h2>
            </Reveal>

            {certifications.map((cert) => (
              <Reveal key={cert.title}>
                <div className="card-base p-8 md:p-10 relative overflow-hidden border-amber-light/30 dark:border-amber/20">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-amber-light/[0.06] dark:bg-amber/[0.06] rounded-full blur-2xl" />
                  <div className="relative z-10 flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-amber-light/10 dark:bg-amber/10 flex items-center justify-center shrink-0">
                      <Award size={24} className="text-amber-light dark:text-amber" />
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-amber-light dark:text-amber mb-2 block">
                        {cert.issuer}
                      </span>
                      <h3 className="font-display font-semibold text-xl text-paper-ink dark:text-carbon-ink mb-3">
                        {cert.title}
                      </h3>
                      <p className="text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed mb-5">{cert.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.topics.map((topic) => (
                          <span key={topic} className="pill !py-1 !px-2.5 !text-[0.68rem]">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Training */}
          <div className="mb-24">
            <Reveal className="mb-10">
              <p className="section-label">Enterprise</p>
              <h2 className="heading-xl text-[clamp(1.7rem,3.4vw,2.5rem)]">Professional Training</h2>
            </Reveal>

            {training.map((item) => (
              <Reveal key={item.title}>
                <div className="card-base p-8 md:p-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-cobalt-light/10 dark:bg-signal/10 flex items-center justify-center shrink-0">
                      <BookOpen size={24} className="text-cobalt-light dark:text-signal" />
                    </div>
                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-cobalt-light dark:text-signal mb-2 block">
                        {item.issuer}
                      </span>
                      <h3 className="font-display font-semibold text-xl text-paper-ink dark:text-carbon-ink mb-3">
                        {item.title}
                      </h3>
                      <p className="text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed mb-5">{item.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.topics.map((topic) => (
                          <span key={topic} className="pill !py-1 !px-2.5 !text-[0.68rem]">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Continuous learning */}
          <div>
            <Reveal className="mb-10">
              <p className="section-label">Right now</p>
              <h2 className="heading-xl text-[clamp(1.7rem,3.4vw,2.5rem)] mb-4">
                Currently <em className="italic dark:not-italic text-cobalt-light dark:text-signal">Learning</em>
              </h2>
              <p className="text-paper-ink-2 dark:text-carbon-ink-2 max-w-2xl">
                Growth never stops. Here's what I'm actively building expertise in.
              </p>
            </Reveal>

            <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
              {continuousLearning.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="card-base p-7 h-full">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="font-display font-semibold text-base text-paper-ink dark:text-carbon-ink mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed mb-5">{item.desc}</p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-paper-ink-3 dark:text-carbon-ink-3">
                        Progress
                      </span>
                      <span className="font-mono text-xs text-cobalt-light dark:text-signal font-semibold">
                        {item.progress}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-paper-border dark:bg-carbon-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="h-full rounded-full bg-gradient-to-r from-cobalt-light to-cobalt dark:from-signal dark:to-signal/70"
                      />
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <CTABand
        title="Always growing,"
        titleEm="always learning"
        subtitle="I believe in continuous improvement. Let's talk about how that mindset could benefit your team or project."
      />
    </>
  )
}
