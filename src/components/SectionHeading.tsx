interface Props {
  index: string
  title: string
}

export function SectionHeading({ index, title }: Props) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="font-mono text-sm font-medium text-accent">{index}.</span>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
    </div>
  )
}
