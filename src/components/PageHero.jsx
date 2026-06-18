import Reveal from './Reveal'

export default function PageHero({ eyebrow, title, titleEm, subtitle }) {
  return (
    <div className="pt-44 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[length:32px_32px] opacity-40 dark:opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_75%)]" />
      <div className="container-px relative z-10">
        <Reveal>
          <p className="section-label">{eyebrow}</p>
          <h1 className="heading-xl text-[clamp(2.6rem,6vw,4.2rem)] mb-5">
            {title} <em className="italic dark:not-italic text-cobalt-light dark:text-signal">{titleEm}</em>
          </h1>
          <p className="text-lg text-paper-ink-2 dark:text-carbon-ink-2 max-w-2xl leading-relaxed">{subtitle}</p>
        </Reveal>
      </div>
    </div>
  )
}
