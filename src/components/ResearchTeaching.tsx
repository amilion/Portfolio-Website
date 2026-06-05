import { ExternalLink } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'
import { SectionHeading } from './SectionHeading'
import content from '../data/content'

export function ResearchTeaching() {
  return (
    <SectionWrapper id="research" className="py-24 bg-slate-50/60 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <SectionHeading index="04" title="Research & Teaching" />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Research */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
              Research
            </h3>
            <ol className="relative border-l border-slate-200 dark:border-slate-700 space-y-10" aria-label="Research history">
              {content.research.map((entry) => (
                <li key={`${entry.org}-${entry.period}`} className="pl-6 relative">
                  {/* Timeline dot */}
                  <span
                    className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-accent bg-white dark:bg-slate-950"
                    aria-hidden="true"
                  />

                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-slate-400 dark:text-slate-500">
                      {entry.period}
                    </span>
                    <span className="text-xs px-1.5 py-0.5 rounded bg-accent/10 text-accent font-medium">
                      {entry.location}
                    </span>
                  </div>

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-0.5">
                    {entry.role}
                  </h4>
                  <p className="text-sm text-accent mb-2">{entry.org}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {entry.description}
                  </p>

                  {entry.repo && (
                    <a
                      href={entry.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-accent hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                    >
                      View repository
                      <ExternalLink size={11} />
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Teaching */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
              Teaching
            </h3>
            <ol className="relative border-l border-slate-200 dark:border-slate-700 space-y-10" aria-label="Teaching history">
              {content.teaching.map((entry) => (
                <li key={`${entry.org}-${entry.period}`} className="pl-6 relative">
                  <span
                    className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-accent bg-white dark:bg-slate-950"
                    aria-hidden="true"
                  />

                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500 mb-1 block">
                    {entry.period}
                  </span>

                  <h4 className="font-semibold text-slate-900 dark:text-white mb-0.5">
                    {entry.role}
                  </h4>
                  <p className="text-sm text-accent mb-3">{entry.org}</p>

                  <ul className="space-y-1.5" aria-label="Courses">
                    {entry.courses.map((course) => (
                      <li
                        key={course}
                        className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                      >
                        <span className="text-accent mt-1 leading-none" aria-hidden="true">
                          ›
                        </span>
                        {course}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
