import type { Project } from '@/types/project'
import type { Publication } from '@/types/publication'

export function getProjects(locale: string): Project[] {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const projects = require(`../../content/projects/${locale}.json`) as Project[]
  return projects.sort((a, b) => b.year - a.year)
}

export function getProject(locale: string, slug: string): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug)
}

export function getPublications(locale: string): Publication[] {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require(`../../content/publications/${locale}.json`) as Publication[]
}
