import { getProjects, getPublications } from '@/lib/content'
import { getAllBlogPosts } from '@/lib/mdx'
import { SITE_URL, SOCIAL_LINKS } from '@/lib/constants'

export const dynamic = 'force-static'

export async function GET() {
  const projects = getProjects('en')
  const publications = getPublications('en')
  const posts = await getAllBlogPosts('en')

  const lines = [
    '# Maxime Mansiet',
    '',
    '> Software engineer based in Bordeaux, France. Founder of Euthyne, an audit trail for AI coding agents that records what each agent was allowed to do next to what it did, verifiable by anyone. Software engineer at 2060.io on Verana, an open trust layer for digital identity. Co-founder and CIO of CiteMe, a generative engine optimization platform. Runs Klyx, a web and AI studio for startups.',
    '',
    'Available in English and French. Replace /en/ with /fr/ for the French version of any page.',
    '',
    '## Key facts',
    '',
    '- Full name: Maxime Mansiet. Based in Bordeaux, Nouvelle-Aquitaine, France. Age 20.',
    '- Founder of Euthyne (euthyne.com), an audit trail for AI coding agents: signed receipts per tool call, the agent permission settings captured as a signed mandate, a public append-only log, and account-free verification.',
    '- Software engineer and researcher at 2060.io since September 2025, working on Verana, an open-source trust layer for the internet.',
    '- Co-founder and CIO of CiteMe since June 2026, a generative engine optimization (GEO) platform measuring how brands appear inside AI search engines.',
    '- Co-author of the Verana trust specifications.',
    '- Integrated live Verana trust-registry resolution into third-party identity wallets and solutions, including the EUDI reference wallet, MOSIP Inji, Talao, Sphereon, Paradym and Procivis One, replacing their hardcoded issuer lists with a live fail-closed call.',
    '- Author of the Verana wallet conformance suite, which runs real OpenID4VC flows rather than asserting against a document.',
    '- Contributor to credo-ts at the OpenWallet Foundation, part of LF Decentralized Trust since September 2026.',
    '- Member of the W3C Credentials Community Group, the Trust over IP Foundation, the Agentic AI Foundation and the Linux Foundation.',
    '- Founder of Klyx, a web and AI studio for startups and tech teams in Bordeaux, since April 2025. Co-founder of PKBA, a parkour club near Arcachon, in July 2025, and its president since October 2026.',
    '- Competitive parkour athlete with the French Gymnastics Federation from 2017 to 2025.',
    `- Contact: ${SOCIAL_LINKS.email.replace('mailto:', '')}. GitHub: AirKyzzZ. ORCID: 0009-0000-5647-5281.`,
    '',
    '## Pages',
    '',
    `- [About](${SITE_URL}/en/): background, research interests, and recent news`,
    `- [Research](${SITE_URL}/en/research/): verifiable records of AI agents, trust registries and wallet interoperability, and how AI engines read the web`,
    `- [Projects](${SITE_URL}/en/projects/): selected work with detail pages`,
    `- [Publications](${SITE_URL}/en/publications/): conference and research output`,
    `- [Talks](${SITE_URL}/en/talks/): conference appearances`,
    `- [CV](${SITE_URL}/en/cv/): experience, education, skills, and community work`,
    `- [Blog](${SITE_URL}/en/blog/): essays on identity, AI agents and AI engines`,
    '',
    '## Projects',
    '',
    ...projects.map(
      (p) => `- [${p.title}](${SITE_URL}/en/projects/${p.slug}/): ${p.description}`
    ),
    '',
    '## Publications',
    '',
    ...publications.map(
      (p) =>
        `- [${p.title}](${p.url || (p.pdfUrl ? SITE_URL + p.pdfUrl : `${SITE_URL}/en/publications/`)}): ${p.venue}, ${p.year}`
    ),
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
