export interface Publication {
  title: string
  authors: string[]
  venue: string
  year: number
  url?: string
  pdfUrl?: string
  abstract?: string
  bibtex?: string
  type: 'conference' | 'journal' | 'preprint' | 'thesis'
}
