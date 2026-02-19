'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

export function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const otherLocale = locale === 'en' ? 'fr' : 'en'
  const switchedPath = pathname.replace(`/${locale}`, `/${otherLocale}`)

  return (
    <Link
      href={switchedPath}
      className="px-2 py-1 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
    >
      {locale === 'en' ? 'FR' : 'EN'}
    </Link>
  )
}
