import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, GraduationCap, Building2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTABand from '../components/CTABand'
import Reveal, { StaggerGroup, StaggerItem } from '../components/Reveal'
import DetectionFrame from '../components/DetectionFrame'
import AnimatedCounter from '../components/AnimatedCounter'
import { personal, aboutSnapshot, fullBio, values, education, achievements } from '../data/content'

const factIcons = { MapPin, Phone, Mail, GraduationCap, Building2 }
const facts = [
  { icon: 'MapPin', text: personal.location },
  { icon: 'Phone', text: personal.phone },
  { icon: 'Mail', text: personal.email },
  { icon: 'GraduationCap', text: 'B.E. CS & AI — CGPA 7.66' },
  { icon: 'Building2', text: 'Systems Engineer @ TCS' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Get to know me"
        title="About"
        titleEm="Me"
        subtitle="Computer Science & AI graduate. Systems Engineer. Developer. Community builder."
      />

      <section className="py-12 md:py-20">
        <div className="container-px">
          {/* Main bio grid */}
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-16 mb-28">
            <Reveal direction="left">
              <div className="relative max-w-[380px] mx-auto lg:mx-0">
                <DetectionFrame scanning={false} rounded="rounded-2xl">
                  <div className="aspect-[1/1.05]">
                    <img src="/photo.jpg" alt={personal.name} className="w-full h-full object-cover object-top dark:grayscale-[15%]" />
                  </div>
                </DetectionFrame>

                <div className="card-base p-4 flex items-center gap-3 mt-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
                  <div>
                    <div className="font-semibold text-sm text-paper-ink dark:text-carbon-ink">Available for Opportunities</div>
                    <div className="text-xs text-paper-ink-3 dark:text-carbon-ink-3">Open to new projects & roles</div>
                  </div>
                </div>

                <div className="space-y-3 mt-5">
                  {facts.map((fact, i) => {
                    const Icon = factIcons[fact.icon]
                    return (
                      <div key={i} className="flex items-center gap-3 text-sm text-paper-ink-2 dark:text-carbon-ink-2">
                        <Icon size={15} className="text-cobalt-light dark:text-signal shrink-0" />
                        {fact.text}
                      </div>
                    )
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <p className="section-label">My story</p>
              <h2 className="heading-xl text-[clamp(1.7rem,3.4vw,2.5rem)] mb-6">
                Passionate about building things that{' '}
                <em className="italic dark:not-italic text-cobalt-light dark:text-signal">matter</em>
              </h2>
              {fullBio.map((para, i) => (
                <p key={i} className="text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed mb-5">
                  {para}
                </p>
              ))}

              <div className="flex flex-wrap gap-2.5 mb-9 mt-2">
                {values.map((value) => (
                  <span key={value} className="pill">
                    {value}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn-primary">
                  View My Projects
                </Link>
                <Link to="/contact" className="btn-outline">
                  Let's Connect
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Education */}
          <div className="mb-28">
            <Reveal className="mb-10">
              <p className="section-label">Academic background</p>
              <h2 className="heading-xl text-[clamp(1.7rem,3.4vw,2.5rem)]">Education</h2>
            </Reveal>

            <StaggerGroup className="grid md:grid-cols-2 gap-6" staggerDelay={0.12}>
              {education.map((edu) => (
                <StaggerItem key={edu.degree}>
                  <div className="card-base p-7 h-full">
                    <div className="text-3xl mb-4">{edu.icon}</div>
                    <h3 className="font-display font-semibold text-base text-paper-ink dark:text-carbon-ink mb-2 leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-paper-ink-3 dark:text-carbon-ink-3 mb-4">{edu.school}</p>
                    <div className="flex gap-2.5 mb-4">
                      <span className="pill !py-1 !px-2.5 !text-[0.7rem]">{edu.period}</span>
                      <span className="pill !py-1 !px-2.5 !text-[0.7rem] !text-cobalt-light dark:!text-signal">{edu.grade}</span>
                    </div>
                    <p className="text-sm text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed">{edu.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>

          {/* Achievements */}
          <div>
            <Reveal className="mb-10">
              <p className="section-label">Impact</p>
              <h2 className="heading-xl text-[clamp(1.7rem,3.4vw,2.5rem)]">Achievements & Contributions</h2>
            </Reveal>

            <StaggerGroup className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
              {achievements.map((ach) => (
                <StaggerItem key={ach.title}>
                  <div className="card-base p-8 h-full">
                    <div className="font-display font-bold text-4xl text-cobalt-light dark:text-signal mb-3">
                      <AnimatedCounter value={ach.value} suffix={ach.suffix} />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-paper-ink dark:text-carbon-ink mb-3">{ach.title}</h3>
                    <p className="text-sm text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed">{ach.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <CTABand
        title="Want to work"
        titleEm="together?"
        subtitle="I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great."
      />
    </>
  )
}
