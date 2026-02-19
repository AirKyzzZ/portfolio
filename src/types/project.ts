export interface Project {
  slug: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  sourceUrl?: string
  demoUrl?: string
  image?: string
  featured: boolean
  year: number
}
