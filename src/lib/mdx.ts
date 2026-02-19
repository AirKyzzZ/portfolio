import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import type { BlogFrontmatter } from '@/types/blog'

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog')

export function getBlogSlugs(locale: string): string[] {
  const dir = path.join(BLOG_DIR, locale)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export async function getBlogPost(locale: string, slug: string) {
  const filePath = path.join(BLOG_DIR, locale, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const source = fs.readFileSync(filePath, 'utf-8')

  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeKatex, rehypeHighlight],
      },
    },
  })

  return { content, frontmatter, slug }
}

export async function getAllBlogPosts(locale: string) {
  const slugs = getBlogSlugs(locale)
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getBlogPost(locale, slug)
      if (!post) return null
      return { slug, frontmatter: post.frontmatter }
    })
  )

  return posts
    .filter((p): p is NonNullable<typeof p> => p !== null && !p.frontmatter.draft)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
}
