import { Fragment } from 'react'
import { cn } from '@/lib/utils'

// Hiển thị markup nhẹ của giáo trình: **đậm** và [chỗ trống] trong mẫu câu.
export function RichText({ text, className }: { text: string; className?: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\])/g)
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          )
        }
        if (part.startsWith('[') && part.endsWith(']')) {
          return (
            <span
              key={i}
              className={cn(
                'mx-0.5 inline rounded-md border border-dashed border-primary/50 bg-primary/10 px-1.5 py-px text-[0.92em] font-medium text-primary not-italic',
              )}
            >
              {part.slice(1, -1)}
            </span>
          )
        }
        return <Fragment key={i}>{part}</Fragment>
      })}
    </span>
  )
}
