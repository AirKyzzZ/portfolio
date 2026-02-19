type NewsItemProps = {
  date: string
  children: React.ReactNode
}

export function NewsItem({ date, children }: NewsItemProps) {
  return (
    <div className="flex gap-3 text-sm">
      <span className="text-foreground-tertiary font-mono shrink-0">{date}</span>
      <span className="text-foreground-secondary">{children}</span>
    </div>
  )
}
