import { setRequestLocale, getTranslations } from 'next-intl/server'
import { getAllBlogPosts } from '@/lib/mdx'
import { BlogCard } from '@/components/ui/blog-card'
import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'nav' })
  const posts = await getAllBlogPosts(locale)

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-serif text-2xl font-semibold mb-8">{t('blog')}</h1>

      {posts.length === 0 ? (
        <p className="text-sm text-foreground-secondary">
          No posts yet — check back soon.
        </p>
      ) : (
        <div>
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              frontmatter={post.frontmatter}
              locale={locale}
            />
          ))}
        </div>
      )}
    </div>
  )
}
