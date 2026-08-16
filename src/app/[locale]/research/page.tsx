import type { Metadata } from 'next'
import { alternatesFor } from '@/lib/metadata'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { SectionHeading } from '@/components/ui/section-heading'
import { routing } from '@/i18n/routing'
import type { ResearchArea } from '@/types/content'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'research' })

  return {
    title: t('title'),
    description: t('metaDescription'),
    alternates: alternatesFor(locale, '/research/'),
  }
}

export default async function ResearchPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'research' })

  const areas = t.raw('areas') as ResearchArea[]
  const questions = t.raw('questions') as string[]

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl font-semibold mb-6">{t('title')}</h1>
      <p className="text-sm leading-relaxed text-foreground-secondary mb-10">
        {t('intro')}
      </p>

      <div className="space-y-8">
        {areas.map((area) => (
          <section key={area.id} id={area.id} className="scroll-mt-8">
            <h3 className="font-serif font-semibold mb-2">{area.title}</h3>
            <p className="text-sm leading-relaxed text-foreground-secondary">
              {area.body}
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
