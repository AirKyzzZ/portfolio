import { setRequestLocale, getTranslations } from 'next-intl/server'
import { SectionHeading } from '@/components/ui/section-heading'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function ResearchPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'research' })

  const areas = [
    { title: t('area1title'), desc: t('area1desc') },
    { title: t('area2title'), desc: t('area2desc') },
    { title: t('area3title'), desc: t('area3desc') },
    { title: t('area4title'), desc: t('area4desc') },
  ]

  const questions = [
    t('question1'),
    t('question2'),
    t('question3'),
    t('question4'),
  ]

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl font-semibold mb-6">{t('title')}</h1>
      <p className="text-sm leading-relaxed text-foreground-secondary mb-10">
        {t('intro')}
      </p>

      <div className="space-y-8">
        {areas.map((area) => (
          <section key={area.title}>
            <h3 className="font-serif font-semibold mb-2">{area.title}</h3>
            <p className="text-sm leading-relaxed text-foreground-secondary">
              {area.desc}
            </p>
          </section>
        ))}
      </div>

      <hr className="my-10 border-border" />

      <section>
        <SectionHeading>{t('openQuestions')}</SectionHeading>
        <ul className="space-y-3 text-sm text-foreground-secondary">
          {questions.map((q, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-foreground-tertiary shrink-0">{i + 1}.</span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
