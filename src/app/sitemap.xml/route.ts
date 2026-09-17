import { routing } from '@/i18n/routing'
import { getProjects } from '@/lib/content'
import { getBlogSlugs } from '@/lib/mdx'
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

const SECTIONS = ['research', 'projects', 'blog', 'publications', 'talks', 'cv']

type Entry = { url: string; priority: string }

function alternates(path: string): string {
  const links = routing.locales.map(
    (l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}/${l}${path}"/>`
  )
  links.push(
    `<xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/${routing.defaultLocale}${path}"/>`
  )
  return links.join('')
}

export function GET() {
  const lastmod = new Date().toISOString().slice(0, 10)
  const entries: (Entry & { path: string })[] = []

  for (const locale of routing.locales) {
    entries.push({ path: '/', url: `${SITE_URL}/${locale}/`, priority: '1.0' })

    for (const section of SECTIONS) {
      entries.push({
        path: `/${section}/`,
        url: `${SITE_URL}/${locale}/${section}/`,
        priority: '0.8',
      })
    }

    for (const project of getProjects(locale)) {
      entries.push({
        path: `/projects/${project.slug}/`,
        url: `${SITE_URL}/${locale}/projects/${project.slug}/`,
        priority: '0.6',
      })
    }

    for (const slug of getBlogSlugs(locale)) {
      entries.push({
        path: `/blog/${slug}/`,
        url: `${SITE_URL}/${locale}/blog/${slug}/`,
        priority: '0.6',
      })
    }
  }

  const body = entries
    .map(
      (e) =>
        `<url><loc>${e.url}</loc><lastmod>${lastmod}</lastmod><priority>${e.priority}</priority>${alternates(e.path)}</url>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${body}
</urlset>
`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
