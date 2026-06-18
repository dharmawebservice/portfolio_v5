import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { navLinks, personal } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change-ish (click on a link)
  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-paper-bg/85 dark:bg-carbon-bg/85 backdrop-blur-md border-b border-paper-border dark:border-carbon-border'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="container-px h-[72px] flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-xl text-paper-ink dark:text-carbon-ink tracking-tight">
            {personal.initials}
            <span className="text-cobalt-light dark:text-signal">.</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'text-cobalt-light dark:text-signal'
                        : 'text-paper-ink-2 dark:text-carbon-ink-2 hover:text-paper-ink dark:hover:text-carbon-ink'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-paper-border dark:border-carbon-border"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-paper-bg dark:bg-carbon-bg lg:hidden"
          >
            <div className="h-[72px]" />
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col items-center justify-center gap-2 pt-12"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.path}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  className="w-full"
                >
                  <NavLink
                    to={link.path}
                    onClick={closeMobile}
                    className={({ isActive }) =>
                      `block text-center py-4 text-2xl font-serif dark:font-display ${
                        isActive ? 'text-cobalt-light dark:text-signal' : 'text-paper-ink dark:text-carbon-ink'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
