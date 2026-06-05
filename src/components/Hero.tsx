import { motion } from 'framer-motion'
import { MapPin, Mail, Github, Download } from 'lucide-react'
import content from '../data/content'

const { person } = content

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 -z-10 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgb(var(--color-accent) / 0.18) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      {/* Radial fade so dots vanish toward edges */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,white_100%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_40%,rgb(2_6_23)_100%)]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-24 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="font-mono text-sm font-medium text-accent mb-4 tracking-wider"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight mb-3"
          >
            {person.name}
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-xl sm:text-2xl font-medium text-slate-500 dark:text-slate-400 mb-6"
          >
            {person.title}
            <span className="mx-2 text-slate-300 dark:text-slate-700">·</span>
            {person.subtitle}
          </motion.h2>

          <motion.p
            variants={item}
            className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed"
          >
            {person.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-500 mb-10"
          >
            <MapPin size={14} className="text-accent flex-shrink-0" />
            <span>{person.location}</span>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <Mail size={15} />
              Email me
            </a>

            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <Github size={15} />
              GitHub
            </a>

            <a
              href={person.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <Download size={15} />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
