import { setRequestLocale, getTranslations } from 'next-intl/server'
import { SectionHeading } from '@/components/ui/section-heading'
import { routing } from '@/i18n/routing'

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

  const experiences = [
    { title: t('exp1title'), company: t('exp1company'), period: t('exp1period'), desc: t('exp1desc') },
    { title: t('exp2title'), company: t('exp2company'), period: t('exp2period'), desc: t('exp2desc') },
    { title: t('exp3title'), company: t('exp3company'), period: t('exp3period'), desc: t('exp3desc') },
  ]

  const education = [
    { title: t('edu1title'), school: t('edu1school'), period: t('edu1period'), desc: t('edu1desc') },
    { title: t('edu2title'), school: t('edu2school'), period: t('edu2period'), desc: t('edu2desc') },
  ]

  const skills = [t('skill1'), t('skill2'), t('skill3'), t('skill4'), t('skill5')]
  const languages = [t('lang1'), t('lang2')]

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl font-semibold mb-8">{t('title')}</h1>

      {/* Experience */}
      <section className="mb-10">
        <SectionHeading>{t('experience')}</SectionHeading>
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
        <SectionHeading>{t('education')}</SectionHeading>
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
        <SectionHeading>{t('skills')}</SectionHeading>
        <ul className="space-y-1.5 text-sm text-foreground-secondary">
          {skills.map((skill) => (
            <li key={skill}>• {skill}</li>
          ))}
        </ul>
      </section>

      {/* Languages */}
      <section>
        <SectionHeading>{t('languages')}</SectionHeading>
        <ul className="space-y-1.5 text-sm text-foreground-secondary">
          {languages.map((lang) => (
            <li key={lang}>• {lang}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}
