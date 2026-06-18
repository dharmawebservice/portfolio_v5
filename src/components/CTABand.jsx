import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CTABand({ title, titleEm, subtitle, primaryLabel = 'Get in Touch', primaryTo = '/contact', secondaryLabel = 'See My Work', secondaryTo = '/projects' }) {
  return (
    <section className="container-px py-24">
      <Reveal>
        <div className="relative card-base !border-0 bg-paper-ink dark:bg-carbon-surface-2 rounded-[28px] px-8 md:px-16 py-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-grid-dark bg-[length:32px_32px] opacity-20 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_75%)]" />
          <div className="relative z-10">
            <h2 className="font-serif dark:font-display font-medium dark:font-semibold text-[clamp(1.8rem,4vw,2.8rem)] text-white mb-4">
              {title} <em className="italic dark:not-italic text-signal">{titleEm}</em>
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-9 leading-relaxed">{subtitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to={primaryTo}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm bg-white text-paper-ink hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              >
                {primaryLabel}
              </Link>
              <Link
                to={secondaryTo}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              >
                {secondaryLabel} →
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
