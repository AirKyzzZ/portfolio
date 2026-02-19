import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { Source_Serif_4, Inter, JetBrains_Mono } from 'next/font/google'
import { routing } from '@/i18n/routing'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { PersonSchema } from '@/components/seo/structured-data'
import '../globals.css'

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'metadata' })

  return {
    title: {
      default: 'Maxime Mansiet',
      template: '%s — Maxime Mansiet',
    },
    description: t('description'),
    metadataBase: new URL('https://maximemansiet.fr'),
    alternates: {
      canonical: `/${locale}/`,
      languages: {
        en: '/en/',
        fr: '/fr/',
      },
    },
    openGraph: {
      title: 'Maxime Mansiet',
      description: t('description'),
      url: `https://maximemansiet.fr/${locale}/`,
      siteName: 'Maxime Mansiet',
      locale: locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://maximemansiet.fr/banner.png',
          width: 1200,
          height: 630,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: '/favicon.ico',
    },
  }
}

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale} className={`${sourceSerif.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <PersonSchema locale={locale} />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
