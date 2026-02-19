import type { MDXComponents } from 'mdx/types'
import { CodeBlock } from './code-block'

export const mdxComponents: MDXComponents = {
  h1: (props) => <h1 className="font-serif text-2xl font-semibold mt-8 mb-4" {...props} />,
  h2: (props) => <h2 className="font-serif text-xl font-semibold mt-8 mb-3" {...props} />,
  h3: (props) => <h3 className="font-serif text-lg font-semibold mt-6 mb-2" {...props} />,
  p: (props) => <p className="text-sm leading-relaxed text-foreground-secondary mb-4" {...props} />,
  a: (props) => (
    <a
      className="text-accent hover:text-accent-hover underline underline-offset-2 transition-colors"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    />
  ),
  ul: (props) => <ul className="list-disc list-inside text-sm text-foreground-secondary mb-4 space-y-1" {...props} />,
  ol: (props) => <ol className="list-decimal list-inside text-sm text-foreground-secondary mb-4 space-y-1" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-3 border-border pl-4 italic text-foreground-secondary my-4" {...props} />
  ),
  code: (props) => {
    // Inline code (not inside pre)
    return (
      <code className="bg-code-bg px-1.5 py-0.5 rounded text-[0.875em] font-mono" {...props} />
    )
  },
  pre: ({ children, ...props }) => <CodeBlock {...props}>{children}</CodeBlock>,
  hr: () => <hr className="border-border my-8" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-lg border border-border my-4 max-w-full" alt={props.alt || ''} {...props} />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-4">
      <table className="text-sm w-full border-collapse" {...props} />
    </div>
  ),
  th: (props) => <th className="border border-border px-3 py-2 bg-background-alt text-left font-semibold" {...props} />,
  td: (props) => <td className="border border-border px-3 py-2" {...props} />,
}
