import type { ReactNode } from 'react'

export function PageHeader({ eyebrow, title, description, children }: {
  eyebrow?: string
  title: string
  description?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow && <p className="mb-1 text-sm font-medium text-primary">{eyebrow}</p>}
        <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h1>
        {description && <p className="mt-2 text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  )
}
