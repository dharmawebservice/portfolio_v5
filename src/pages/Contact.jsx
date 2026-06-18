import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Send, ChevronDown, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { personal, faqs } from '../data/content'

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="card-base overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-medium text-sm text-paper-ink dark:text-carbon-ink">{q}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
          <ChevronDown size={16} className="text-paper-ink-3 dark:text-carbon-ink-3" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.65, 0.3, 0.9] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm text-paper-ink-2 dark:text-carbon-ink-2 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null)
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const handleChange = (e) => setFormState((s) => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    // No backend wired up — this simulates submission and opens a pre-filled
    // mail client as a reliable fallback so messages are never lost.
    const mailBody = `Name: ${formState.name}%0AEmail: ${formState.email}%0A%0A${formState.message}`
    setTimeout(() => {
      setStatus('sent')
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
        formState.subject || 'Portfolio Inquiry'
      )}&body=${mailBody}`
      setTimeout(() => {
        setStatus('idle')
        setFormState({ name: '', email: '', subject: '', message: '' })
      }, 2500)
    }, 700)
  }

  const contactCards = [
    { Icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { Icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phoneRaw}` },
    { Icon: MapPin, label: 'Location', value: personal.location, href: null },
    { Icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', href: personal.linkedin },
    { Icon: Github, label: 'GitHub', value: 'View my code', href: personal.github },
  ]

  return (
    <>
      <PageHero
        eyebrow="Let's talk"
        title="Get in"
        titleEm="Touch"
        subtitle="Have a project, an opportunity, or just want to say hi? My inbox is always open."
      />

      <section className="py-12 md:py-20">
        <div className="container-px">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 mb-24">
            {/* Contact cards */}
            <Reveal direction="left">
              <div className="space-y-4">
                {contactCards.map((card) => {
                  const content = (
                    <div className="card-base p-5 flex items-center gap-4 hover:border-cobalt-light/40 dark:hover:border-signal/40 transition-colors duration-300 h-full">
                      <div className="w-11 h-11 rounded-xl bg-cobalt-light/10 dark:bg-signal/10 flex items-center justify-center shrink-0">
                        <card.Icon size={17} className="text-cobalt-light dark:text-signal" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-[0.65rem] uppercase tracking-wider text-paper-ink-3 dark:text-carbon-ink-3 mb-0.5">
                          {card.label}
                        </div>
                        <div className="font-medium text-sm text-paper-ink dark:text-carbon-ink truncate">
                          {card.value}
                        </div>
                      </div>
                    </div>
                  )
                  return card.href ? (
                    <a
                      key={card.label}
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={card.label}>{content}</div>
                  )
                })}

                <div className="card-base p-5 flex items-center gap-3 bg-cobalt-light/5 dark:bg-signal/5 border-cobalt-light/20 dark:border-signal/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
                  <span className="text-sm font-medium text-paper-ink dark:text-carbon-ink">
                    Currently available for new opportunities
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal direction="right">
              <div className="card-base p-7 md:p-10">
                <h3 className="font-display font-semibold text-xl text-paper-ink dark:text-carbon-ink mb-1.5">
                  Send a message
                </h3>
                <p className="text-sm text-paper-ink-3 dark:text-carbon-ink-3 mb-7">
                  I'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-paper-ink-2 dark:text-carbon-ink-2 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-paper-bg dark:bg-carbon-bg border border-paper-border dark:border-carbon-border text-sm text-paper-ink dark:text-carbon-ink placeholder:text-paper-ink-3 dark:placeholder:text-carbon-ink-3 focus:border-cobalt-light dark:focus:border-signal transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-paper-ink-2 dark:text-carbon-ink-2 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-paper-bg dark:bg-carbon-bg border border-paper-border dark:border-carbon-border text-sm text-paper-ink dark:text-carbon-ink placeholder:text-paper-ink-3 dark:placeholder:text-carbon-ink-3 focus:border-cobalt-light dark:focus:border-signal transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-paper-ink-2 dark:text-carbon-ink-2 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, job opportunity, etc."
                      className="w-full px-4 py-3 rounded-lg bg-paper-bg dark:bg-carbon-bg border border-paper-border dark:border-carbon-border text-sm text-paper-ink dark:text-carbon-ink placeholder:text-paper-ink-3 dark:placeholder:text-carbon-ink-3 focus:border-cobalt-light dark:focus:border-signal transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-paper-ink-2 dark:text-carbon-ink-2 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-lg bg-paper-bg dark:bg-carbon-bg border border-paper-border dark:border-carbon-border text-sm text-paper-ink dark:text-carbon-ink placeholder:text-paper-ink-3 dark:placeholder:text-carbon-ink-3 focus:border-cobalt-light dark:focus:border-signal transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status !== 'idle'}
                    className="btn-primary w-full sm:w-auto justify-center disabled:opacity-70"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {status === 'idle' && (
                        <motion.span key="idle" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <Send size={15} /> Send Message
                        </motion.span>
                      )}
                      {status === 'sending' && (
                        <motion.span key="sending" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <motion.span
                            className="w-3.5 h-3.5 rounded-full border-2 border-white/40 dark:border-carbon-bg/40 border-t-white dark:border-t-carbon-bg"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                          />
                          Sending...
                        </motion.span>
                      )}
                      {status === 'sent' && (
                        <motion.span key="sent" className="flex items-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <CheckCircle2 size={15} /> Opening your mail client...
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                  <p className="text-xs text-paper-ink-3 dark:text-carbon-ink-3 pt-1">
                    This opens your default email app with the message pre-filled, since this static site has no backend.
                  </p>
                </form>
              </div>
            </Reveal>
          </div>

          {/* FAQ */}
          <div className="max-w-2xl mx-auto">
            <Reveal className="text-center mb-10">
              <p className="section-label !justify-center">Common questions</p>
              <h2 className="heading-xl text-[clamp(1.7rem,3.4vw,2.3rem)]">Frequently Asked</h2>
            </Reveal>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 0.05}>
                  <FAQItem
                    q={faq.q}
                    a={faq.a}
                    isOpen={openFaq === i}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
