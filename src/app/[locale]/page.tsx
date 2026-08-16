import { setRequestLocale, getTranslations } from 'next-intl/server'
import { Sidebar } from '@/components/layout/sidebar'
import { SectionHeading } from '@/components/ui/section-heading'
import { NewsItem } from '@/components/ui/news-item'
import { BlogCard } from '@/components/ui/blog-card'
import { getAllBlogPosts } from '@/lib/mdx'
import type { NewsEntry } from '@/types/content'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'home' })
  const ct = await getTranslations({ locale, namespace: 'common' })

  const interests = t.raw('interests') as string[]
  const newsItems = t.raw('newsItems') as NewsEntry[]

  let posts: Awaited<ReturnType<typeof getAllBlogPosts>> = []
  try {
    posts = await getAllBlogPosts(locale)
  } catch {
    // Blog not set up yet
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-[200px_1fr] gap-10">
        <Sidebar locale={locale} />

        <div className="space-y-10">
          {/* About */}
          <section>
            <SectionHeading id="about">{t('about')}</SectionHeading>
            <div className="space-y-4 text-sm leading-relaxed text-foreground-secondary">
              <p>{t('bio1')}</p>
              <p>{t('bio2')}</p>
              <p>{t('bio3')}</p>
              <p>{t('bio4')}</p>
            </div>
          </section>

          {/* Research Interests */}
          <section>
            <SectionHeading id="interests">{t('researchInterests')}</SectionHeading>
            <ul className="space-y-1.5 text-sm text-foreground-secondary">
              {interests.map((interest) => (
                <li key={interest}>• {interest}</li>
              ))}
            </ul>
          </section>

          {/* News */}
          <section>
            <SectionHeading id="news">{t('news')}</SectionHeading>
            <div className="space-y-2">
              {newsItems.map((item) => (
                <NewsItem key={item.text} date={item.date}>{item.text}</NewsItem>
              ))}
            </div>
          </section>

          {/* Latest Blog Posts */}
          {posts.length > 0 && (
            <section>
              <SectionHeading id="posts">{ct('latestPosts')}</SectionHeading>
              <div>
                {posts.slice(0, 3).map((post) => (
                  <BlogCard
                    key={post.slug}
                    slug={post.slug}
                    frontmatter={post.frontmatter}
                    locale={locale}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
