import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import { personal, heroStats } from '../../data/content'
import { useTypedText } from '../../hooks/useTypedText'
import DetectionFrame from '../DetectionFrame'
import FloatingTag from '../FloatingTag'
import AnimatedCounter from '../AnimatedCounter'
import Reveal from '../Reveal'

export default function HeroSection() {
  const typedRole = useTypedText(personal.typedRoles)

  return (
    <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {/* Background grid + glow, theme-aware */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark bg-[length:32px_32px] opacity-40 dark:opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_25%,transparent_75%)]" />
      <div className="absolute -top-40 -right-32 w-[560px] h-[560px] rounded-full bg-cobalt-light/10 dark:bg-signal/[0.08] blur-3xl" />
      <div className="absolute -bottom-40 -left-32 w-[480px] h-[480px] rounded-full bg-amber-light/[0.06] dark:bg-amber/[0.06] blur-3xl" />

      <div className="container-px relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
          {/* Text column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-sm text-paper-ink-3 dark:text-carbon-ink-3 mb-6 flex items-center gap-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-cobalt-light dark:bg-signal animate-pulse-ring" />
              Based in {personal.location.split(',')[0]}, India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="heading-xl text-[clamp(2.8rem,6.5vw,5.2rem)] mb-7"
            >
              {personal.firstName}
              <br />
              <span className="italic dark:not-italic text-cobalt-light dark:text-signal">{personal.lastName}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-mono text-base md:text-lg text-paper-ink-2 dark:text-carbon-ink-2 mb-8 flex items-center gap-2.5 h-7"
            >
              <span className="text-cobalt-light dark:text-signal">&gt;</span>
              <span>{typedRole}</span>
              <span className="inline-block w-0.5 h-5 bg-cobalt-light dark:bg-signal animate-blink" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed max-w-lg mb-10"
            >
              {personal.tagline} Currently a{' '}
              <strong className="text-paper-ink dark:text-carbon-ink font-semibold">
                Systems Engineer at Tata Consultancy Services
              </strong>
              , Hyderabad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link to="/projects" className="btn-primary">
                View My Work →
              </Link>
              <Link to="/contact" className="btn-outline">
                Get in Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center gap-4"
            >
              {[
                { Icon: Mail, href: `mailto:${personal.email}` },
                { Icon: Linkedin, href: personal.linkedin },
                { Icon: Github, href: personal.github },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-paper-border dark:border-carbon-border flex items-center justify-center text-paper-ink-2 dark:text-carbon-ink-2 hover:border-cobalt-light dark:hover:border-signal hover:text-cobalt-light dark:hover:text-signal transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="relative aspect-[1/1.08] max-w-[420px] mx-auto w-full"
          >
            <DetectionFrame rounded="rounded-[20px]">
              <div className="w-full h-full bg-gradient-to-br from-paper-surface to-paper-bg dark:from-carbon-surface-2 dark:to-carbon-bg">
                <img
                  src="/photo.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top opacity-95 dark:opacity-90 dark:grayscale-[15%] dark:contrast-[1.05]"
                />
              </div>
            </DetectionFrame>

            <FloatingTag label="Current Role" value="Systems Eng @ TCS" className="-top-4 -left-6 md:-left-10" delay={0} />
            <FloatingTag label="Detected" value="developer · 0.98" className="-bottom-4 -right-4 md:-right-10" delay={0.6} />
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-12 border-t border-paper-border dark:border-carbon-border">
          {heroStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} direction="up">
              <div className="text-center md:text-left">
                <div className="font-display font-bold text-3xl md:text-4xl text-paper-ink dark:text-carbon-ink mb-1.5">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-mono text-xs uppercase tracking-wider text-paper-ink-3 dark:text-carbon-ink-3">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
