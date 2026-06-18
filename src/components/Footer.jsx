import { Link } from 'react-router-dom'
import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react'
import { personal, navLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-paper-border dark:border-carbon-border bg-paper-surface dark:bg-carbon-surface mt-32">
      <div className="container-px py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-display font-bold text-xl text-paper-ink dark:text-carbon-ink mb-4">
              {personal.initials}
              <span className="text-cobalt-light dark:text-signal">.</span>
            </div>
            <p className="text-sm text-paper-ink-3 dark:text-carbon-ink-3 leading-relaxed max-w-xs">
              CS & AI engineer building scalable software and intelligent systems. Currently at TCS, Hyderabad.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-paper-ink dark:text-carbon-ink mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.slice(1).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-paper-ink-3 dark:text-carbon-ink-3 hover:text-cobalt-light dark:hover:text-signal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm text-paper-ink dark:text-carbon-ink mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-paper-ink-3 dark:text-carbon-ink-3">
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a href={`mailto:${personal.email}`} className="hover:text-cobalt-light dark:hover:text-signal transition-colors">
                  {personal.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a href={`tel:${personal.phoneRaw}`} className="hover:text-cobalt-light dark:hover:text-signal transition-colors">
                  {personal.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{personal.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-paper-border dark:border-carbon-border">
          <p className="text-xs text-paper-ink-3 dark:text-carbon-ink-3">
            © {new Date().getFullYear()} {personal.name}. Built with passion.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="w-8 h-8 rounded-full border border-paper-border dark:border-carbon-border flex items-center justify-center hover:border-cobalt-light dark:hover:border-signal hover:text-cobalt-light dark:hover:text-signal transition-colors"
            >
              <Mail size={14} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-paper-border dark:border-carbon-border flex items-center justify-center hover:border-cobalt-light dark:hover:border-signal hover:text-cobalt-light dark:hover:text-signal transition-colors"
            >
              <Linkedin size={14} />
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-paper-border dark:border-carbon-border flex items-center justify-center hover:border-cobalt-light dark:hover:border-signal hover:text-cobalt-light dark:hover:text-signal transition-colors"
            >
              <Github size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
