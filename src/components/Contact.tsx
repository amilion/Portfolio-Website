import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import { SectionWrapper } from './SectionWrapper'
import content from '../data/content'

const { person } = content

interface ContactLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  value: string
  external?: boolean
}

function ContactLink({ href, icon, label, value, external = false }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-accent dark:hover:border-accent text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <span className="flex-shrink-0 text-slate-400 dark:text-slate-500 group-hover:text-accent transition-colors">
        {icon}
      </span>
      <span className="text-sm font-medium">{value}</span>
    </a>
  )
}

export function Contact() {
  return (
    <SectionWrapper id="contact" className="py-24 bg-slate-50/60 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm font-medium text-accent">06.</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Get in touch</h2>
            <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            I'm open to software engineering roles, research collaborations, and interesting
            conversations. Feel free to reach out.
          </p>

          <div className="flex flex-col gap-3">
            <ContactLink
              href={`mailto:${person.email}`}
              icon={<Mail size={16} />}
              label="Send an email"
              value={person.email}
            />
            <ContactLink
              href={`tel:${person.phone.replace(/\s/g, '')}`}
              icon={<Phone size={16} />}
              label="Call or WhatsApp"
              value={person.phone}
            />
            <ContactLink
              href={person.github}
              icon={<Github size={16} />}
              label="GitHub profile"
              value="github.com/amilion"
              external
            />
            {/* LinkedIn — add your URL to content.ts to show this link */}
            {person.linkedin && (
              <ContactLink
                href={person.linkedin}
                icon={<Linkedin size={16} />}
                label="LinkedIn profile"
                value="LinkedIn"
                external
              />
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-8 mt-20 pt-8 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 dark:text-slate-600">
          <span>© {new Date().getFullYear()} {person.name}</span>
          <span className="font-mono">Built with React · TypeScript · Tailwind</span>
        </div>
      </footer>
    </SectionWrapper>
  )
}
