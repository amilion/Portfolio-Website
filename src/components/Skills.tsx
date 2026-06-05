import { SectionWrapper } from './SectionWrapper'
import { SectionHeading } from './SectionHeading'
import content from '../data/content'

export function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24 bg-slate-50/60 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <SectionHeading index="02" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.skills.map(({ label, items }) => (
            <div key={label}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-3">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 leading-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
