import Image from 'next/image'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

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
        <a href={SOCIAL_LINKS.orcid} target="_blank" rel="me noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="ORCID">
          <OrcidIcon size={18} />
        </a>
      </div>
    </aside>
  )
}
