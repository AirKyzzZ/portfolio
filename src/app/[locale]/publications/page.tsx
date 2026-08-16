import type { Metadata } from 'next'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { getPublications } from '@/lib/content'
import { PublicationEntry } from '@/components/ui/publication-entry'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'publications' })

  return {
    title: t('title'),
    description: t('metaDescription'),
    alternates: { canonical: `/${locale}/publications/` },
  }
}

export default async function PublicationsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'publications' })
  const publications = getPublications(locale)

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl font-semibold mb-8">{t('title')}</h1>

      {publications.length === 0 ? (
        <p className="text-sm text-foreground-secondary">{t('empty')}</p>
      ) : (
        <div>
          {publications.map((pub) => (
            <PublicationEntry key={pub.title} publication={pub} />
          ))}
        </div>
      )}
    </div>
  )
}
