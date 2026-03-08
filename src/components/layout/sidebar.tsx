import Image from 'next/image'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

function MastodonIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.327 8.566c0-4.339-2.843-5.61-2.843-5.61-1.433-.658-3.894-.935-6.451-.956h-.063c-2.557.021-5.016.298-6.45.956 0 0-2.843 1.272-2.843 5.61 0 .993-.019 2.181.012 3.441.103 4.243.778 8.425 4.701 9.463 1.809.479 3.362.579 4.612.51 2.268-.126 3.541-.809 3.541-.809l-.075-1.646s-1.621.511-3.441.449c-1.804-.062-3.707-.194-3.999-2.409a4.523 4.523 0 0 1-.04-.621s1.77.432 4.014.535c1.372.063 2.658-.08 3.965-.236 2.506-.299 4.688-1.843 4.962-3.254.434-2.223.398-5.424.398-5.424zm-3.353 5.59h-2.081V9.057c0-1.075-.452-1.62-1.357-1.62-1 0-1.501.647-1.501 1.927v2.791h-2.069V9.364c0-1.28-.501-1.927-1.502-1.927-.904 0-1.357.545-1.357 1.62v5.099H6.026V8.903c0-1.074.273-1.927.823-2.558.566-.631 1.307-.955 2.228-.955 1.065 0 1.872.41 2.405 1.228l.518.869.519-.869c.533-.818 1.34-1.228 2.405-1.228.92 0 1.662.324 2.228.955.549.631.822 1.484.822 2.558v5.253z"/>
    </svg>
  )
}

function OrcidIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 256 256">
      <circle cx="128" cy="128" r="128" fill="#A6CE39"/>
      <g fill="#fff">
        <path d="M86.3 186.2H70.9V79.1h15.4v107.1z"/>
        <path d="M108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7 0-21.5-13.7-39.7-43-39.7h-24.4v79.4z"/>
        <circle cx="78.7" cy="56.8" r="10.1"/>
      </g>
    </svg>
  )
}

type SidebarProps = {
  locale: string
}

export function Sidebar({ locale }: SidebarProps) {
  return (
    <aside className="flex flex-col items-center md:items-start gap-4 md:sticky md:top-8 md:self-start">
      <Image
        src="/images/profile.jpg"
        alt="Maxime Mansiet"
        width={160}
        height={160}
        className="rounded-lg border border-border"
        priority
      />
      <div className="text-center md:text-left">
        <h2 className="font-serif text-lg font-semibold">Maxime Mansiet</h2>
        <p className="text-sm text-foreground-secondary mt-1">
          {locale === 'fr' ? 'Développeur Fullstack' : 'Fullstack Developer'}
        </p>
        <p className="text-sm text-foreground-tertiary">
          Verana
        </p>
      </div>
      <div className="flex items-center gap-3 text-foreground-secondary">
        <a href={SOCIAL_LINKS.email} className="hover:text-foreground transition-colors" aria-label="Email">
          <Mail size={18} />
        </a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="X / Twitter">
          <Twitter size={18} />
        </a>
        <a href={SOCIAL_LINKS.mastodon} target="_blank" rel="me noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="Mastodon">
          <MastodonIcon size={18} />
        </a>
        <a href={SOCIAL_LINKS.orcid} target="_blank" rel="me noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="ORCID">
          <OrcidIcon size={18} />
        </a>
      </div>
    </aside>
  )
}
