import { cn } from '@/lib/utils'

type TagProps = {
  children: React.ReactNode
  className?: string
}

export function Tag({ children, className }: TagProps) {
  return (
    <span className={cn(
      'inline-block px-2.5 py-0.5 text-xs font-medium rounded-full',
      'bg-background-alt text-foreground-secondary border border-border',
      className
    )}>
      {children}
    </span>
  )
}
