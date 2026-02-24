import { SITE_URL, SOCIAL_LINKS } from '@/lib/constants'

type PersonSchemaProps = {
  locale: string
}

export function PersonSchema({ locale }: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Maxime Mansiet',
    url: `${SITE_URL}/${locale}/`,
    jobTitle: 'Fullstack Developer & Researcher',
    worksFor: [
      { '@type': 'Organization', name: 'Verana' },
      { '@type': 'Organization', name: '2060.io' },
    ],
    knowsAbout: [
      'Decentralized Identity',
      'Self-Sovereign Identity',
      'Verifiable Credentials',
      'DIDComm',
      'Applied Cryptography',
    ],
    sameAs: [
      SOCIAL_LINKS.github,
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.orcid,
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bordeaux',
      addressCountry: 'FR',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

type BlogPostSchemaProps = {
  title: string
  description: string
  date: string
  slug: string
  locale: string
  tags: string[]
}

export function BlogPostSchema({ title, description, date, slug, locale, tags }: BlogPostSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    datePublished: date,
    author: {
      '@type': 'Person',
      name: 'Maxime Mansiet',
      url: `${SITE_URL}/${locale}/`,
    },
    url: `${SITE_URL}/${locale}/blog/${slug}/`,
    keywords: tags.join(', '),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
