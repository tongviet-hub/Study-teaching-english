import { useState } from 'react'
import { toast } from 'sonner'
import { Check, Pencil, RotateCcw, Save, X } from 'lucide-react'
import { BlockView } from '@/components/writing/BlockView'
import { BlocksEditor, blankBlocks } from '@/components/writing/BlockEditor'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { chapterById, sectionKey, type Block, type WritingSection } from '@/data/writing'
import { progressActions, useProgress } from '@/hooks/useProgress'
import { cn } from '@/lib/utils'

// Bổ sung các trường tuỳ chọn còn thiếu để form sửa luôn có đủ ô.
function withDefaults(blocks: Block[]) {
  return blocks.map((b) => ({ ...blankBlocks[b.type](), ...b }) as Block)
}

export function SectionCard({ chapterId, section }: { chapterId: string; section: WritingSection }) {
  const progress = useProgress()
  const key = sectionKey(chapterId, section.id)
  const [draft, setDraft] = useState<Block[] | null>(null)
  const edited = key in progress.writingEdits
  const read = Boolean(progress.writingRead[key])

  const startEdit = () => setDraft(withDefaults(structuredClone(section.blocks)))

  const save = () => {
    if (!draft) return
    progressActions.saveWritingSection(key, draft)
    setDraft(null)
    toast.success('Đã lưu bản sửa', { description: `Phần ${section.number}: ${section.title}` })
  }

  const restore = () => {
    const original = chapterById.get(chapterId)?.sections.find((s) => s.id === section.id)
    progressActions.resetWritingSection(key)
    setDraft(original ? withDefaults(structuredClone(original.blocks)) : null)
    toast('Đã khôi phục nội dung gốc của phần này')
  }

  return (
    <section
      id={section.id}
      className={cn(
        'scroll-mt-32 rounded-3xl border bg-card p-4 shadow-xs transition-colors md:p-7',
        draft && 'border-primary/50 ring-2 ring-primary/15',
      )}
    >
      <header className="mb-5 flex flex-wrap items-start gap-3">
        <span
          className={cn(
            'flex size-10 shrink-0 items-center justify-center rounded-2xl text-lg font-bold',
            read ? 'bg-emerald-600 text-white' : 'bg-primary/10 text-primary',
          )}
        >
          {read ? <Check className="size-5" /> : section.number}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Phần {section.number}</p>
          <h2 className="text-xl font-semibold tracking-tight text-balance">{section.title}</h2>
          {edited && !draft && (
            <Badge variant="outline" className="mt-1 border-amber-500/50 text-amber-700 dark:text-amber-300">
              Đã chỉnh sửa
            </Badge>
          )}
        </div>
        {!draft && (
          <Button size="sm" variant="outline" onClick={startEdit}>
            <Pencil /> Chỉnh sửa
          </Button>
        )}
      </header>

      {draft ? (
        <div className="space-y-4">
          <p className="rounded-lg bg-muted/50 px-3 py-2 text-xs text-muted-foreground">
            Mẹo định dạng: <code className="font-mono">**chữ đậm**</code> · <code className="font-mono">[chỗ trống]</code> để
            tô nổi ô cần điền trong mẫu câu.
          </p>
          <BlocksEditor blocks={draft} onChange={setDraft} />
          <div className="sticky bottom-3 z-10 flex flex-wrap gap-2 rounded-xl border bg-background/95 p-2 shadow-lg backdrop-blur">
            <Button onClick={save}>
              <Save /> Lưu
            </Button>
            <Button variant="ghost" onClick={() => setDraft(null)}>
              <X /> Huỷ
            </Button>
            {edited && (
              <Button variant="ghost" className="ml-auto text-destructive" onClick={restore}>
                <RotateCcw /> Khôi phục bản gốc
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {section.blocks.map((block, i) => (
            <BlockView key={i} block={block} stateKey={`${key}:${i}`} />
          ))}
          <div className="flex justify-end pt-2">
            <Button
              variant={read ? 'secondary' : 'default'}
              size="sm"
              onClick={() => progressActions.toggleWritingRead(key, !read)}
            >
              <Check /> {read ? 'Đã đọc xong' : 'Đánh dấu đã đọc'}
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}
