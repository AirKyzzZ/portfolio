import Link from 'next/link'
import { Tag } from './tag'
import type { Project } from '@/types/project'

type ProjectCardProps = {
  project: Project
  locale: string
}

export function ProjectCard({ project, locale }: ProjectCardProps) {
  return (
    <Link
      href={`/${locale}/projects/${project.slug}/`}
      className="block group border border-border rounded-lg p-5 hover:border-accent/30 hover:bg-background-alt transition-colors"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-serif font-semibold group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <span className="text-xs text-foreground-tertiary font-mono shrink-0">{project.year}</span>
      </div>
      <p className="text-sm text-foreground-secondary mb-3 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 5).map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </Link>
  )
}
