import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export function alternatesFor(locale: string, path: string): Metadata['alternates'] {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `/${l}${path}`])
  )

  return {
    canonical: `/${locale}${path}`,
    languages: { ...languages, 'x-default': `/${routing.defaultLocale}${path}` },
  }
}

export function openGraphFor(
  locale: string,
  path: string,
  title: string,
  description: string
): Metadata['openGraph'] {
  return {
    title: `${title} · ${SITE_NAME}`,
    description,
    url: `${SITE_URL}/${locale}${path}`,
    siteName: SITE_NAME,
    locale: locale === 'fr' ? 'fr_FR' : 'en_US',
    type: 'website',
    images: [{ url: `${SITE_URL}/banner.png`, width: 1200, height: 630 }],
  }
}
