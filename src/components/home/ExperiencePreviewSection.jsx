import { Link } from 'react-router-dom'
import Reveal, { StaggerGroup, StaggerItem } from '../Reveal'
import { experience } from '../../data/content'

export default function ExperiencePreviewSection() {
  return (
    <section className="py-24 md:py-32 bg-paper-surface/50 dark:bg-carbon-surface/30">
      <div className="container-px">
        <Reveal className="mb-14">
          <p className="section-label">Career</p>
          <h2 className="heading-xl text-[clamp(1.9rem,3.6vw,2.8rem)] mb-4">
            Work <em className="italic dark:not-italic text-cobalt-light dark:text-signal">Experience</em>
          </h2>
          <p className="text-lg text-paper-ink-2 dark:text-carbon-ink-2 max-w-2xl">
            From AI internships to enterprise engineering — a journey of continuous growth.
          </p>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {experience.map((job) => (
            <StaggerItem key={job.role}>
              <div
                className={`card-base h-full p-6 relative ${
                  job.current ? 'border-cobalt-light/40 dark:border-signal/40 ring-1 ring-cobalt-light/10 dark:ring-signal/10' : ''
                }`}
              >
                {job.current && (
                  <span className="absolute -top-3 left-6 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cobalt-light dark:bg-signal text-white dark:text-carbon-bg text-[0.65rem] font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-carbon-bg animate-pulse" />
                    Current
                  </span>
                )}
                <div className="text-2xl mb-3 mt-2">{job.icon}</div>
                <h3 className="font-display font-semibold text-lg text-paper-ink dark:text-carbon-ink mb-1">{job.role}</h3>
                <div className="text-sm text-cobalt-light dark:text-signal font-medium mb-1">{job.company}</div>
                <div className="font-mono text-xs text-paper-ink-3 dark:text-carbon-ink-3 mb-4">
                  {job.period} · {job.location.split(',')[0]}
                </div>
                <p className="text-sm text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed mb-5">{job.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="pill !py-1 !px-2.5 !text-[0.68rem]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="text-center mt-14">
          <Link to="/experience" className="btn-outline">
            Full Timeline →
          </Link>
        </div>
      </div>
    </section>
  )
}
