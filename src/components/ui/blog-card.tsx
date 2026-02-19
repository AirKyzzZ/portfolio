import Link from 'next/link'
import { Tag } from './tag'
import type { BlogFrontmatter } from '@/types/blog'

type BlogCardProps = {
  slug: string
  frontmatter: BlogFrontmatter
  locale: string
}

export function BlogCard({ slug, frontmatter, locale }: BlogCardProps) {
  return (
    <Link
      href={`/${locale}/blog/${slug}/`}
      className="block group py-4 border-b border-border last:border-0"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif font-semibold group-hover:text-accent transition-colors">
            {frontmatter.title}
          </h3>
          <p className="text-sm text-foreground-secondary mt-1 line-clamp-2">
            {frontmatter.description}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {frontmatter.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>
        <span className="text-xs text-foreground-tertiary font-mono shrink-0 mt-1">
          {frontmatter.date}
        </span>
      </div>
    </Link>
  )
}
