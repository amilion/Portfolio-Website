import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { SectionWrapper } from './SectionWrapper'
import { SectionHeading } from './SectionHeading'
import content from '../data/content'

export function Projects() {
  return (
    <SectionWrapper id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <SectionHeading index="03" title="Projects" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: i * 0.07 }}
              className="group flex flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-200/60 dark:hover:shadow-slate-950/60 transition-all duration-200"
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-semibold text-slate-900 dark:text-white leading-snug">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="flex-shrink-0 mt-0.5 text-slate-400 hover:text-accent dark:text-slate-500 dark:hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  <ExternalLink size={15} />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
