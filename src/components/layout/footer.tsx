import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="border-t border-border py-8 mt-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground-tertiary">
        <p>{t('copyright')}</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/airkyzzz" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/maxime-mansiet" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href="https://x.com/maximecodes" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            X
          </a>
          <a href="https://orcid.org/0009-0000-5647-5281" target="_blank" rel="me noopener noreferrer" className="hover:text-foreground transition-colors">
            ORCID
          </a>
        </div>
      </div>
    </footer>
  )
}
