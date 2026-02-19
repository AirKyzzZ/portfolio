'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Menu, X } from 'lucide-react'

export function Header() {
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations('nav')
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { href: `/${locale}/`, label: t('home') },
    { href: `/${locale}/research/`, label: t('research') },
    { href: `/${locale}/projects/`, label: t('projects') },
    { href: `/${locale}/blog/`, label: t('blog') },
    { href: `/${locale}/publications/`, label: t('publications') },
    { href: `/${locale}/talks/`, label: t('talks') },
    { href: `/${locale}/cv/`, label: t('cv') },
  ]

  const otherLocale = locale === 'en' ? 'fr' : 'en'
  const switchedPath = pathname.replace(`/${locale}`, `/${otherLocale}`)

  return (
    <header className="border-b border-border bg-background">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${locale}/`} className="font-serif text-lg font-semibold text-foreground hover:text-accent transition-colors">
          Maxime Mansiet
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                    pathname === item.href
                      ? 'text-foreground bg-background-alt'
                      : 'text-foreground-secondary hover:text-foreground hover:bg-background-alt'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <span className="mx-2 text-border">|</span>
          <Link
            href={switchedPath}
            className="px-2 py-1 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </nav>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href={switchedPath}
            className="px-2 py-1 text-sm font-medium text-foreground-secondary hover:text-foreground transition-colors"
          >
            {otherLocale.toUpperCase()}
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1 text-foreground-secondary hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-background">
          <ul className="px-6 py-3 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                    pathname === item.href
                      ? 'text-foreground bg-background-alt'
                      : 'text-foreground-secondary hover:text-foreground hover:bg-background-alt'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
