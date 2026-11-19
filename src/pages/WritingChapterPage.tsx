import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { SectionCard } from '@/components/writing/SectionCard'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { sectionKey } from '@/data/writing'
import { useProgress } from '@/hooks/useProgress'
import { useWritingChapters } from '@/hooks/useWriting'
import { cn } from '@/lib/utils'

export function WritingChapterPage() {
  const { chapterId = '' } = useParams()
  const chapters = useWritingChapters()
  const progress = useProgress()
  const index = chapters.findIndex((c) => c.id === chapterId)
  const chapter = chapters[index]
  const [active, setActive] = useState('s1')

  // Tô sáng mục đang xem trong thanh mục lục.
  useEffect(() => {
    if (!chapter) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-140px 0px -55% 0px' },
    )
    chapter.sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [chapter])

  if (!chapter) return <NotFoundPage />

  const prev = chapters[index - 1]
  const next = chapters[index + 1]
  const keys = chapter.sections.map((s) => sectionKey(chapter.id, s.id))
  const read = keys.filter((k) => progress.writingRead[k]).length

  return (
    <div className="mx-auto max-w-4xl">
      <Link to="/writing" className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> Giáo trình Writing Task 2
      </Link>

      <header className="mb-6">
        <p className="text-sm font-medium text-primary">Chương {chapter.number}</p>
        <h1 className="mt-1 text-2xl font-semibold tracking-tight text-balance md:text-3xl">{chapter.title}</h1>
        <p className="mt-2 text-muted-foreground">{chapter.tagline}</p>
        <div className="mt-4 flex items-center gap-3">
          <Progress value={(read / keys.length) * 100} className="max-w-xs" />
          <span className="text-sm text-muted-foreground">
            {read}/{keys.length} phần đã đọc
          </span>
        </div>
      </header>

      <nav
        aria-label="Các phần của chương"
        className="sticky top-14 z-30 -mx-4 mb-6 border-b bg-background/90 px-4 py-2 backdrop-blur md:mx-0 md:rounded-2xl md:border md:px-2"
      >
        <ol className="flex gap-1 overflow-x-auto [scrollbar-width:none]">
          {chapter.sections.map((s, i) => {
            const isRead = Boolean(progress.writingRead[keys[i]])
            return (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={cn(
                    'flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm whitespace-nowrap text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                    active === s.id && 'bg-primary/10 font-medium text-primary',
                  )}
                  title={s.title}
                >
                  <span
                    className={cn(
                      'flex size-5 items-center justify-center rounded-full text-[0.7rem] font-semibold',
                      isRead ? 'bg-emerald-600 text-white' : 'bg-muted',
                    )}
                  >
                    {isRead ? <Check className="size-3" /> : s.number}
                  </span>
                  <span className="hidden max-w-36 truncate lg:inline">{s.title}</span>
                </a>
              </li>
            )
          })}
        </ol>
      </nav>

      <div className="space-y-6">
        {chapter.sections.map((s) => (
          <SectionCard key={s.id} chapterId={chapter.id} section={s} />
        ))}
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {prev ? (
          <Button variant="outline" className="h-auto justify-start py-3 text-left whitespace-normal" asChild>
            <Link to={`/writing/${prev.id}`}>
              <ArrowLeft />
              <span>
                <span className="block text-xs text-muted-foreground">Chương {prev.number}</span>
                {prev.shortTitle}
              </span>
            </Link>
          </Button>
        ) : (
          <span />
        )}
        {next && (
          <Button variant="outline" className="h-auto justify-end py-3 text-right whitespace-normal" asChild>
            <Link to={`/writing/${next.id}`}>
              <span>
                <span className="block text-xs text-muted-foreground">Chương {next.number}</span>
                {next.shortTitle}
              </span>
              <ArrowRight />
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}
