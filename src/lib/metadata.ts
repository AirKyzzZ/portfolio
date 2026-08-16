import type { Metadata } from 'next'
import { routing } from '@/i18n/routing'

export function alternatesFor(locale: string, path: string): Metadata['alternates'] {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `/${l}${path}`])
  )

  return {
    canonical: `/${locale}${path}`,
    languages: { ...languages, 'x-default': `/${routing.defaultLocale}${path}` },
  }
}
