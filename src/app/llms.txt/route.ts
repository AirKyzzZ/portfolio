import { getProjects, getPublications } from '@/lib/content'
import { getAllBlogPosts } from '@/lib/mdx'
import { SITE_URL } from '@/lib/constants'

export const dynamic = 'force-static'

export async function GET() {
  const projects = getProjects('en')
  const publications = getPublications('en')
  const posts = await getAllBlogPosts('en')

  const lines = [
    '# Maxime Mansiet',
    '',
    '> Self-sovereign identity engineer at 2060.io, working on Verana, an open trust layer for the internet. Based in Bordeaux, France. Works on trust registries, verifiable credentials, cross-ecosystem wallet interoperability, and identity for AI agents.',
    '',
    'Available in English and French. Replace /en/ with /fr/ for the French version of any page.',
    '',
    '## Pages',
    '',
    `- [About](${SITE_URL}/en/): background, research interests, and recent news`,
    `- [Research](${SITE_URL}/en/research/): shipped work on wallet interoperability, trust registries, and agent identity, with the open questions each raised`,
    `- [Projects](${SITE_URL}/en/projects/): selected work with detail pages`,
    `- [Publications](${SITE_URL}/en/publications/): conference and research output`,
    `- [Talks](${SITE_URL}/en/talks/): conference appearances`,
    `- [CV](${SITE_URL}/en/cv/): experience, education, skills, and community work`,
    `- [Blog](${SITE_URL}/en/blog/): essays on decentralized identity and AI agents`,
    '',
    '## Projects',
    '',
    ...projects.map(
      (p) => `- [${p.title}](${SITE_URL}/en/projects/${p.slug}/): ${p.description}`
    ),
    '',
    '## Publications',
    '',
    ...publications.map((p) => `- [${p.title}](${p.url}): ${p.venue}, ${p.year}`),
    '',
    '## Writing',
    '',
    ...posts.map(
      (p) =>
        `- [${p.frontmatter.title}](${SITE_URL}/en/blog/${p.slug}/): ${p.frontmatter.description}`
    ),
    '',
  ]

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
