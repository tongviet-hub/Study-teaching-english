import { useMemo, useState } from 'react'
import { Check, Eye, EyeOff, Search } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { glossary, type Term } from '@/data/glossary'
import { stages } from '@/data/roadmap'
import { progressActions, useProgress } from '@/hooks/useProgress'
import { cn } from '@/lib/utils'

type StatusFilter = 'all' | 'learning' | 'known'

// Bỏ dấu tiếng Việt để gõ "ky nang" vẫn tìm được "kỹ năng".
const normalize = (s: string) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D').toLowerCase()

const searchIndex = new Map(
  glossary.map((term) => [term.id, normalize(`${term.en} ${term.vi} ${term.definition} ${term.example}`)]),
)

export function GlossaryPage() {
  const { knownTerms } = useProgress()
  const [query, setQuery] = useState('')
  const [stage, setStage] = useState('all')
  const [status, setStatus] = useState<StatusFilter>('all')
  const [quizMode, setQuizMode] = useState(false)
  const [revealed, setRevealed] = useState<Record<string, boolean>>({})

  const knownCount = glossary.filter((term) => knownTerms[term.id]).length

  const filtered = useMemo(() => {
    const q = normalize(query.trim())
    return glossary.filter((term) => {
      if (stage !== 'all' && term.stage !== Number(stage)) return false
      if (status === 'known' && !knownTerms[term.id]) return false
      if (status === 'learning' && knownTerms[term.id]) return false
      return !q || searchIndex.get(term.id)!.includes(q)
    })
  }, [query, stage, status, knownTerms])

  const toggleQuiz = () => {
    setQuizMode((v) => !v)
    setRevealed({})
  }

  return (
    <>
      <PageHeader
        eyebrow="Từ điển Anh – Việt"
        title="Thuật ngữ sư phạm tiếng Anh"
        description="Các thuật ngữ bạn sẽ gặp trong khóa TESOL, kèm nghĩa tiếng Việt, giải thích và ví dụ bằng tiếng Anh."
      >
        <Card size="sm" className="w-full md:w-64">
          <CardContent>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Đã thuộc</span>
              <span className="font-medium tabular-nums">
                {knownCount}/{glossary.length}
              </span>
            </div>
            <Progress
              value={(knownCount / glossary.length) * 100}
              className="mt-2 h-1.5"
              aria-label="Tiến độ học thuật ngữ"
            />
          </CardContent>
        </Card>
      </PageHeader>

      <div className="mb-6 space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm bằng tiếng Anh hoặc tiếng Việt (có thể gõ không dấu)…"
              className="h-9 pl-9"
              aria-label="Tìm thuật ngữ"
            />
          </div>
          <Button variant={quizMode ? 'default' : 'outline'} size="lg" onClick={toggleQuiz}>
            {quizMode ? <EyeOff /> : <Eye />}
            {quizMode ? 'Đang tự kiểm tra' : 'Chế độ tự kiểm tra'}
          </Button>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            value={stage}
            onValueChange={(v) => v && setStage(v)}
            className="flex-wrap"
            aria-label="Lọc theo giai đoạn"
          >
            <ToggleGroupItem value="all">Tất cả</ToggleGroupItem>
            {stages.map((s) => (
              <ToggleGroupItem key={s.id} value={String(s.id)} title={s.title}>
                <span>
                  GĐ {s.id}
                  <span className="hidden sm:inline">: {s.title}</span>
                </span>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            value={status}
            onValueChange={(v) => v && setStatus(v as StatusFilter)}
            aria-label="Lọc theo trạng thái"
          >
            <ToggleGroupItem value="all">Tất cả</ToggleGroupItem>
            <ToggleGroupItem value="learning">Chưa thuộc</ToggleGroupItem>
            <ToggleGroupItem value="known">Đã thuộc</ToggleGroupItem>
          </ToggleGroup>
        </div>

        {quizMode && (
          <p className="rounded-lg bg-primary/5 px-4 py-3 text-sm text-muted-foreground">
            Nhìn thuật ngữ tiếng Anh, tự nhớ nghĩa rồi bấm vào thẻ để xem đáp án. Nhớ đúng thì tick "Đã thuộc".
          </p>
        )}
      </div>

      <p className="mb-3 text-sm text-muted-foreground">{filtered.length} thuật ngữ</p>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed py-16 text-center text-muted-foreground">
          Không tìm thấy thuật ngữ phù hợp.
        </div>
      ) : (
        <ul className="grid gap-3 md:grid-cols-2">
          {filtered.map((term) => (
            <TermCard
              key={term.id}
              term={term}
              known={Boolean(knownTerms[term.id])}
              hidden={quizMode && !revealed[term.id]}
              onReveal={() => setRevealed((r) => ({ ...r, [term.id]: true }))}
            />
          ))}
        </ul>
      )}
    </>
  )
}

function TermCard({ term, known, hidden, onReveal }: {
  term: Term
  known: boolean
  hidden: boolean
  onReveal: () => void
}) {
  return (
    <li className={cn('flex flex-col rounded-xl border bg-card p-4', known && 'border-primary/40')}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold" lang="en">
            {term.en}
          </p>
          {!hidden && <p className="text-sm font-medium text-primary">{term.vi}</p>}
        </div>
        <Badge variant="secondary" className="shrink-0">
          GĐ {term.stage}
        </Badge>
      </div>

      {hidden ? (
        <button
          type="button"
          onClick={onReveal}
          className="mt-3 flex flex-1 items-center justify-center gap-2 rounded-lg border border-dashed py-6 text-sm text-muted-foreground hover:bg-muted"
        >
          <Eye className="size-4" /> Bấm để xem nghĩa
        </button>
      ) : (
        <div className="mt-2 flex-1 space-y-2 text-sm">
          <p>{term.definition}</p>
          <p className="text-muted-foreground italic" lang="en">
            e.g. {term.example}
          </p>
        </div>
      )}

      <label className="mt-3 flex w-fit cursor-pointer items-center gap-2 text-sm text-muted-foreground">
        <Checkbox checked={known} onCheckedChange={(v) => progressActions.toggleTerm(term.id, v === true)} />
        {known ? (
          <span className="flex items-center gap-1 text-primary">
            <Check className="size-3.5" /> Đã thuộc
          </span>
        ) : (
          'Đánh dấu đã thuộc'
        )}
      </label>
    </li>
  )
}
