import type { Publication } from '@/types/publication'

type PublicationEntryProps = {
  publication: Publication
}

export function PublicationEntry({ publication }: PublicationEntryProps) {
  return (
    <div className="py-4 border-b border-border last:border-0">
      <h3 className="font-serif font-semibold">
        {publication.url ? (
          <a href={publication.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            {publication.title}
          </a>
        ) : (
          publication.title
        )}
      </h3>
      <p className="text-sm text-foreground-secondary mt-1">
        {publication.authors.join(', ')}
      </p>
      <p className="text-sm text-foreground-tertiary mt-0.5">
        {publication.venue}, {publication.year}
      </p>
      {publication.pdfUrl && (
        <a
          href={publication.pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-xs text-accent hover:text-accent-hover mt-1 transition-colors"
        >
          [PDF]
        </a>
      )}
    </div>
  )
}
