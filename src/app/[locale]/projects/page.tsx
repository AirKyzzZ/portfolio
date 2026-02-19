import { setRequestLocale, getTranslations } from 'next-intl/server'
import { getProjects } from '@/lib/content'
import { ProjectCard } from '@/components/ui/project-card'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'projects' })
  const projects = getProjects(locale)
  const featured = projects.filter((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl font-semibold mb-8">{t('title')}</h1>

      {featured.length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-medium text-foreground-tertiary uppercase tracking-wide mb-4">
            {t('featured')}
          </h2>
          <div className="grid gap-4">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section>
          <h2 className="text-sm font-medium text-foreground-tertiary uppercase tracking-wide mb-4">
            {t('all')}
          </h2>
          <div className="grid gap-4">
            {others.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
