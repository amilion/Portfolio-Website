import { SectionWrapper } from './SectionWrapper'
import { SectionHeading } from './SectionHeading'
import content from '../data/content'

const stats = [
  { label: 'GPA', value: '19.0/20' },
  { label: 'Semesters top-ranked', value: '7' },
  { label: 'Entrance exam rank', value: 'Top 0.3%' },
  { label: 'Production projects', value: '5+' },
]

export function About() {
  return (
    <SectionWrapper id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <SectionHeading index="01" title="About" />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <p className="lg:col-span-3 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            {content.about}
          </p>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50"
              >
                <div className="font-mono text-xl font-bold text-accent">{value}</div>
                <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
