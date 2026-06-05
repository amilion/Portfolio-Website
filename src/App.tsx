import { useTheme } from './hooks/useTheme'
import { useActiveSection } from './hooks/useActiveSection'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { ResearchTeaching } from './components/ResearchTeaching'
import { Education } from './components/Education'
import { Contact } from './components/Contact'

const SECTION_IDS = ['hero', 'about', 'skills', 'projects', 'research', 'education', 'contact']

export default function App() {
  const [theme, toggleTheme] = useTheme()
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <div className="min-h-screen">
      <Nav activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResearchTeaching />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
