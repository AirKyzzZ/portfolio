type CodeBlockProps = {
  children: React.ReactNode
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  return (
    <pre
      className="bg-code-bg border border-border rounded-lg p-4 overflow-x-auto text-sm leading-7 my-4 font-mono"
      {...props}
    >
      {children}
    </pre>
  )
}
