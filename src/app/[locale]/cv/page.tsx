import { setRequestLocale, getTranslations } from 'next-intl/server'
import { SectionHeading } from '@/components/ui/section-heading'
import { routing } from '@/i18n/routing'
import type { CvEntry, EducationEntry, EngagementEntry } from '@/types/content'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function CVPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'cv' })

  const experiences = t.raw('experience') as CvEntry[]
  const education = t.raw('education') as EducationEntry[]
  const skills = t.raw('skills') as string[]
  const languages = t.raw('languages') as string[]
  const projects = t.raw('engagement') as EngagementEntry[]

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl font-semibold mb-8">{t('title')}</h1>

      {/* Experience */}
      <section className="mb-10">
        <SectionHeading>{t('experienceHeading')}</SectionHeading>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.title + exp.company}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-sm">{exp.title}</h3>
                  <p className="text-sm text-foreground-secondary">{exp.company}</p>
                </div>
                <span className="text-xs text-foreground-tertiary font-mono shrink-0">{exp.period}</span>
              </div>
              <p className="text-sm text-foreground-secondary mt-1">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-10">
        <SectionHeading>{t('educationHeading')}</SectionHeading>
        <div className="space-y-6">
          {education.map((edu) => (
            <div key={edu.title + edu.school}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-sm">{edu.title}</h3>
                  <p className="text-sm text-foreground-secondary">{edu.school}</p>
                </div>
                <span className="text-xs text-foreground-tertiary font-mono shrink-0">{edu.period}</span>
              </div>
              <p className="text-sm text-foreground-secondary mt-1">{edu.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-10">
        <SectionHeading>{t('skillsHeading')}</SectionHeading>
        <ul className="space-y-1.5 text-sm text-foreground-secondary">
          {skills.map((skill) => (
            <li key={skill}>• {skill}</li>
          ))}
        </ul>
      </section>

      {/* Languages */}
      <section className="mb-10">
        <SectionHeading>{t('languagesHeading')}</SectionHeading>
        <ul className="space-y-1.5 text-sm text-foreground-secondary">
          {languages.map((lang) => (
            <li key={lang}>• {lang}</li>
          ))}
        </ul>
      </section>

      {/* Projects & Community Engagement */}
      <section>
        <SectionHeading>{t('engagementHeading')}</SectionHeading>
        <div className="space-y-6">
          {projects.map((proj) => (
            <div key={proj.title}>
              <h3 className="font-semibold text-sm">{proj.title}</h3>
              <p className="text-sm text-foreground-secondary mt-1">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
