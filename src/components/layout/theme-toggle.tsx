'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Moon, Sun } from 'lucide-react'

type Theme = 'light' | 'dark'

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem('theme')
    return stored === 'dark' || stored === 'light' ? stored : null
  } catch {
    return null
  }
}

export function ThemeToggle() {
  const t = useTranslations('common')
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const stored = readStoredTheme()
    if (stored) {
      setTheme(stored)
      return
    }
    setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('theme', next)
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label={t('toggleTheme')}
      title={t('toggleTheme')}
      className="p-1.5 rounded-md text-foreground-secondary hover:text-foreground hover:bg-background-alt transition-colors"
    >
      {theme === null ? (
        <span className="block w-4 h-4" />
      ) : theme === 'dark' ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
    </button>
  )
}
