import { Link } from 'react-router-dom'
import { Code2, Eye, Building2, Users } from 'lucide-react'
import Reveal from '../Reveal'
import DetectionFrame from '../DetectionFrame'
import FloatingTag from '../FloatingTag'
import { aboutSnapshot, personal } from '../../data/content'

const bulletIcons = [Code2, Eye, Building2, Users]

export default function AboutSnapshotSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-px">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center">
          <Reveal direction="left">
            <div className="relative aspect-[1/1.1] max-w-[380px] mx-auto">
              <DetectionFrame scanning={false} rounded="rounded-2xl">
                <img
                  src="/photo.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top dark:grayscale-[15%]"
                />
              </DetectionFrame>
              <FloatingTag label="Education" value="B.E. CS & AI · 7.66" className="-top-4 -right-6 md:-right-10" delay={0} />
              <FloatingTag label="Company" value="TCS · Apr 2026" className="-bottom-4 -left-4 md:-left-10" delay={0.3} />
            </div>
          </Reveal>

          <Reveal direction="right">
            <p className="section-label">Who I am</p>
            <h2 className="heading-xl text-[clamp(1.9rem,3.6vw,2.8rem)] mb-6">
              Crafting intelligent software, one line at a{' '}
              <em className="italic dark:not-italic text-cobalt-light dark:text-signal">time</em>
            </h2>
            <p className="text-lg text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed mb-8">{aboutSnapshot.intro}</p>

            <div className="space-y-4 mb-9">
              {aboutSnapshot.bullets.map((bullet, i) => {
                const Icon = bulletIcons[i]
                return (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-lg bg-cobalt-light/10 dark:bg-signal/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={14} className="text-cobalt-light dark:text-signal" />
                    </div>
                    <span className="text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed">{bullet}</span>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="btn-primary">
                Read Full Story
              </Link>
              <Link to="/projects" className="btn-outline">
                See My Work
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
