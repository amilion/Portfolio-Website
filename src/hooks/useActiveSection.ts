import { useState, useEffect, useRef } from 'react'

export function useActiveSection(sectionIds: string[]): string {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '')
  // Stable mutable ref so the observer callback always sees current state
  const visibleRef = useRef(new Set<string>())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleRef.current.add(entry.target.id)
          } else {
            visibleRef.current.delete(entry.target.id)
          }
        })
        // Pick the topmost visible section in document order
        const first = sectionIds.find((id) => visibleRef.current.has(id)) ?? ''
        setActive(first)
      },
      // Trigger when the section occupies the upper-middle portion of the viewport
      { rootMargin: '-20% 0px -60% 0px' },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
