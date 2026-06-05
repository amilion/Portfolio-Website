import { Award } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'
import { SectionHeading } from './SectionHeading'
import content from '../data/content'

export function Education() {
  return (
    <SectionWrapper id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <SectionHeading index="05" title="Education & Honors" />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
              Education
            </h3>
            <div className="space-y-6">
              {content.education.map((entry) => (
                <div
                  key={entry.degree}
                  className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40"
                >
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h4 className="font-semibold text-slate-900 dark:text-white">{entry.degree}</h4>
                    {entry.gpa && (
                      <span className="flex-shrink-0 font-mono text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded">
                        GPA {entry.gpa}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-accent mb-1">{entry.institution}</p>
                  <p className="font-mono text-xs text-slate-400 dark:text-slate-500">
                    {entry.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Honors */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-8">
              Honors & Awards
            </h3>
            <ul className="space-y-4" aria-label="Honors and awards">
              {content.honors.map((honor) => (
                <li
                  key={honor}
                  className="flex gap-3 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40"
                >
                  <Award
                    size={16}
                    className="flex-shrink-0 mt-0.5 text-accent"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {honor}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
