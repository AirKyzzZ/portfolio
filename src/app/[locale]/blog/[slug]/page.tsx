import { notFound } from 'next/navigation'
import Link from 'next/link'
import { setRequestLocale, getTranslations } from 'next-intl/server'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import fs from 'fs'
import path from 'path'
import { getBlogSlugs } from '@/lib/mdx'
import { mdxComponents } from '@/components/mdx/mdx-components'
import { Tag } from '@/components/ui/tag'
import { routing } from '@/i18n/routing'
import { ArrowLeft } from 'lucide-react'
import { BlogPostSchema } from '@/components/seo/structured-data'
import type { BlogFrontmatter } from '@/types/blog'

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const locale of routing.locales) {
    const slugs = getBlogSlugs(locale)
    for (const slug of slugs) {
      params.push({ locale, slug })
    }
  }
  return params
}

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'common' })

  const filePath = path.join(process.cwd(), 'content', 'blog', locale, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const source = fs.readFileSync(filePath, 'utf-8')
  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeKatex, rehypeHighlight],
      },
    },
  })

  return (
    <>
      <BlogPostSchema
        title={frontmatter.title}
        description={frontmatter.description}
        date={frontmatter.date}
        slug={slug}
        locale={locale}
        tags={frontmatter.tags}
      />
    <div className="max-w-prose mx-auto px-6 py-10">
      <Link
        href={`/${locale}/blog/`}
        className="inline-flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        {t('backToList')}
      </Link>

      <header className="mb-8">
        <h1 className="font-serif text-2xl font-semibold mb-2">{frontmatter.title}</h1>
        <div className="flex items-center gap-3 text-sm text-foreground-tertiary">
          <time className="font-mono">{frontmatter.date}</time>
        </div>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {frontmatter.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>

      <article className="prose">
        {content}
      </article>
    </div>
    </>
  )
}
