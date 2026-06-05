import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props {
  id: string
  className?: string
  children: React.ReactNode
  delay?: number
}

export function SectionWrapper({ id, className = '', children, delay = 0 }: Props) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}
