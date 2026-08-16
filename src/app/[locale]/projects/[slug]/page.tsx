import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { getProjects, getProject } from '@/lib/content'
import { alternatesFor } from '@/lib/metadata'
import { SITE_URL } from '@/lib/constants'
import { ProjectSchema } from '@/components/seo/structured-data'
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const project = getProject(locale, slug)

  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
    alternates: alternatesFor(locale, `/projects/${slug}/`),
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      url: `${SITE_URL}/${locale}/projects/${slug}/`,
    },
  }
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
      <ProjectSchema
        name={project.title}
        description={project.description}
        slug={project.slug}
        locale={locale}
        technologies={project.technologies}
        year={project.year}
        sourceUrl={project.sourceUrl}
      />
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
