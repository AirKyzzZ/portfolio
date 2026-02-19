import { notFound } from 'next/navigation'
import Link from 'next/link'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { getProjects, getProject } from '@/lib/content'
import { Tag } from '@/components/ui/tag'
import { routing } from '@/i18n/routing'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of routing.locales) {
    const projects = getProjects(locale)
    for (const project of projects) {
      params.push({ locale, slug: project.slug })
    }
  }
  return params
}

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export default async function ProjectDetailPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'common' })
  const project = getProject(locale, slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <Link
        href={`/${locale}/projects/`}
        className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        {t('backToList')}
      </Link>

      <h1 className="font-serif text-2xl font-semibold mb-2">{project.title}</h1>
      <p className="text-sm text-foreground-tertiary font-mono mb-6">{project.year}</p>

      <p className="text-sm leading-relaxed text-foreground-secondary mb-6">
        {project.longDescription || project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-8">
        {project.technologies.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            <ExternalLink size={14} />
            {t('liveDemo')}
          </a>
        )}
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            <Github size={14} />
            {t('sourceCode')}
          </a>
        )}
      </div>
    </div>
  )
}
