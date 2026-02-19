import Image from 'next/image'
import { Mail, Github, Linkedin, Twitter } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

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
          Verana / 2060.io
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
      </div>
    </aside>
  )
}
