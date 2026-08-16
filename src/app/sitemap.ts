import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { getProjects } from '@/lib/content'
import { getBlogSlugs } from '@/lib/mdx'
import { SITE_URL } from '@/lib/constants'

const SECTIONS = ['research', 'projects', 'blog', 'publications', 'talks', 'cv']

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of routing.locales) {
    entries.push({ url: `${SITE_URL}/${locale}/`, priority: 1 })

    for (const section of SECTIONS) {
      entries.push({ url: `${SITE_URL}/${locale}/${section}/`, priority: 0.8 })
    }

    for (const project of getProjects(locale)) {
      entries.push({ url: `${SITE_URL}/${locale}/projects/${project.slug}/`, priority: 0.6 })
    }

    for (const slug of getBlogSlugs(locale)) {
      entries.push({ url: `${SITE_URL}/${locale}/blog/${slug}/`, priority: 0.6 })
    }
  }

  return entries
}
