import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import type { TalkEntry } from '@/types/content'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function TalksPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'talks' })

  const talks = t.raw('items') as TalkEntry[]

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl font-semibold mb-8">{t('title')}</h1>

      <div className="space-y-6">
        {talks.map((talk) => (
          <div key={talk.title} className="border-b border-border pb-6 last:border-0">
            <h3 className="font-serif font-semibold">{talk.title}</h3>
            <p className="text-sm text-foreground-secondary mt-1">{talk.venue}</p>
            <p className="text-xs text-foreground-tertiary font-mono mt-0.5">{talk.date}</p>
            <p className="text-sm text-foreground-secondary mt-2">{talk.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
