type SectionHeadingProps = {
  id?: string
  children: React.ReactNode
}

export function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2 id={id} className="font-serif text-xl font-semibold mb-4 scroll-mt-20">
      {id ? (
        <a href={`#${id}`} className="hover:text-accent transition-colors">
          {children}
        </a>
      ) : (
        children
      )}
    </h2>
  )
}
