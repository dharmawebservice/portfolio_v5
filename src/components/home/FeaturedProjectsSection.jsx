import { Link } from 'react-router-dom'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal, { StaggerGroup, StaggerItem } from '../Reveal'
import { projects } from '../../data/content'

const featuredIds = ['cravecart', 'object-detection', 'ai-recipe-generator']

export default function FeaturedProjectsSection() {
  const featured = featuredIds.map((id) => projects.find((p) => p.id === id))

  return (
    <section className="py-24 md:py-32 bg-paper-surface/50 dark:bg-carbon-surface/30">
      <div className="container-px">
        <Reveal className="mb-14">
          <p className="section-label">Selected work</p>
          <h2 className="heading-xl text-[clamp(1.9rem,3.6vw,2.8rem)] mb-4">
            Featured <em className="italic dark:not-italic text-cobalt-light dark:text-signal">Projects</em>
          </h2>
          <p className="text-lg text-paper-ink-2 dark:text-carbon-ink-2 max-w-2xl">
            A selection of my best work spanning full-stack development, AI/ML systems, and IoT applications.
          </p>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-3 gap-6" staggerDelay={0.12}>
          {featured.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
                className="card-base h-full flex flex-col overflow-hidden hover:border-cobalt-light/40 dark:hover:border-signal/40 hover:shadow-xl"
              >
                <div className={`h-32 flex items-center justify-center text-4xl bg-gradient-to-br ${project.gradient}`}>
                  {project.emoji}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-mono text-[0.68rem] uppercase tracking-wider text-cobalt-light dark:text-signal mb-2">
                    {project.tagline.split('·')[0].trim()}
                  </span>
                  <h3 className="font-display font-semibold text-lg text-paper-ink dark:text-carbon-ink mb-2.5">
                    {project.name}
                  </h3>
                  <p className="text-sm text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed mb-4 flex-1">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="pill !py-1 !px-2.5 !text-[0.68rem]">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-sm font-semibold">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-1.5 text-cobalt-light dark:text-signal hover:underline"
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1.5 text-paper-ink-2 dark:text-carbon-ink-2 hover:text-paper-ink dark:hover:text-carbon-ink"
                      >
                        <Github size={13} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="text-center mt-14">
          <Link to="/projects" className="btn-outline">
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  )
}
