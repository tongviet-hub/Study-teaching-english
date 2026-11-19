import { useState } from 'react'
import { toast } from 'sonner'
import { AlertTriangle, ArrowDown, Copy, Info, Lightbulb, Quote } from 'lucide-react'
import { RichText } from '@/components/writing/RichText'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { BANDS, countWords, type Block, type Tone } from '@/data/writing'
import { progressActions, useProgress } from '@/hooks/useProgress'
import { cn } from '@/lib/utils'

// Màu theo band: càng cao càng "đậm" để người học thấy được bậc thang.
export const bandStyle: Record<string, { chip: string; soft: string; bar: string }> = {
  '6.0': {
    chip: 'bg-amber-500 text-white',
    soft: 'border-amber-500/30 bg-amber-500/5',
    bar: 'bg-amber-500',
  },
  '7.0': {
    chip: 'bg-sky-600 text-white',
    soft: 'border-sky-600/30 bg-sky-600/5',
    bar: 'bg-sky-600',
  },
  '8.0': {
    chip: 'bg-violet-600 text-white',
    soft: 'border-violet-600/30 bg-violet-600/5',
    bar: 'bg-violet-600',
  },
  '9.0': {
    chip: 'bg-emerald-600 text-white',
    soft: 'border-emerald-600/30 bg-emerald-600/5',
    bar: 'bg-emerald-600',
  },
}

const fallbackBand = bandStyle['7.0']

// Màu theo vai trò đoạn văn trong bài 4 đoạn.
export function roleStyle(role: string) {
  const r = role.toLowerCase()
  if (r.startsWith('intro'))
    return { border: 'border-sky-500', bg: 'bg-sky-500/5', text: 'text-sky-700 dark:text-sky-300' }
  if (r.includes('body 1'))
    return { border: 'border-amber-500', bg: 'bg-amber-500/5', text: 'text-amber-700 dark:text-amber-300' }
  if (r.includes('body 2'))
    return { border: 'border-violet-500', bg: 'bg-violet-500/5', text: 'text-violet-700 dark:text-violet-300' }
  if (r.startsWith('conclu'))
    return { border: 'border-emerald-500', bg: 'bg-emerald-500/5', text: 'text-emerald-700 dark:text-emerald-300' }
  return { border: 'border-primary', bg: 'bg-primary/5', text: 'text-primary' }
}

const toneStyle: Record<Tone, { box: string; icon: typeof Info }> = {
  warn: { box: 'border-rose-500/40 bg-rose-500/5 [&_svg]:text-rose-500', icon: AlertTriangle },
  tip: { box: 'border-emerald-500/40 bg-emerald-500/5 [&_svg]:text-emerald-600', icon: Lightbulb },
  note: { box: 'border-sky-500/40 bg-sky-500/5 [&_svg]:text-sky-600', icon: Info },
}

function copy(text: string) {
  navigator.clipboard
    ?.writeText(text)
    .then(() => toast.success('Đã sao chép'))
    .catch(() => toast.error('Không sao chép được'))
}

function BandTable({ rows }: Extract<Block, { type: 'bandTable' }>) {
  if (rows.length === 0) return null
  return (
    <Tabs defaultValue="0" className="gap-4">
      <TabsList className="h-auto w-full flex-wrap justify-start">
        {rows.map((row, i) => (
          <TabsTrigger key={i} value={String(i)} className="flex-none">
            {row.criterion.match(/\(([^)]+)\)/)?.[1] ?? row.criterion}
          </TabsTrigger>
        ))}
      </TabsList>
      {rows.map((row, i) => (
        <TabsContent key={i} value={String(i)} className="space-y-3">
          <p className="text-sm font-medium text-muted-foreground">{row.criterion}</p>
          <div className="grid gap-3 md:grid-cols-4">
            {BANDS.map((band, b) => {
              const style = bandStyle[band]
              return (
                <div key={band} className={cn('flex flex-col rounded-xl border p-3', style.soft)}>
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className={cn('rounded-md px-2 py-0.5 text-xs font-semibold', style.chip)}>Band {band}</span>
                    <span className="flex gap-0.5" aria-hidden>
                      {BANDS.map((_, k) => (
                        <span key={k} className={cn('h-3 w-1.5 rounded-full', k <= b ? style.bar : 'bg-muted')} />
                      ))}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    <RichText text={row.cells[b] ?? ''} />
                  </p>
                </div>
              )
            })}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

function BandSamples({ samples }: Extract<Block, { type: 'bandSamples' }>) {
  const [band, setBand] = useState(samples.find((s) => s.band === '7.0')?.band ?? samples[0]?.band ?? '')
  const current = samples.find((s) => s.band === band) ?? samples[0]
  if (!current) return null
  const style = bandStyle[current.band] ?? fallbackBand
  return (
    <div className="space-y-4">
      <ToggleGroup
        type="single"
        value={current.band}
        onValueChange={(v) => v && setBand(v)}
        variant="outline"
        className="w-full"
      >
        {samples.map((s) => (
          <ToggleGroupItem key={s.band} value={s.band} className="flex-1 font-semibold">
            Band {s.band}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <div className={cn('rounded-2xl border p-4 md:p-5', style.soft)}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className={cn('rounded-md px-2 py-0.5 text-sm font-semibold', style.chip)}>Band {current.band}</span>
          <span className="text-sm font-medium">{current.label}</span>
          <Badge variant="outline" className="ml-auto">
            {countWords(current.text)} từ
          </Badge>
        </div>
        <p lang="en" className="font-serif text-[1.02rem] leading-relaxed">
          {current.text}
        </p>
      </div>
      {current.comments.length > 0 && (
        <div className="rounded-xl border bg-muted/40 p-4">
          <p className="mb-2 text-sm font-semibold">Nhận xét của Giáo sư</p>
          <ul className="space-y-1.5 text-sm">
            {current.comments.map((c, i) => (
              <li key={i} className="flex gap-2">
                <span className={cn('mt-1.5 size-1.5 shrink-0 rounded-full', style.bar)} />
                <RichText text={c} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function Timeline({ steps }: Extract<Block, { type: 'timeline' }>) {
  const total = steps.reduce((n, s) => n + (s.minutes || 0), 0) || 1
  const colors = ['bg-sky-500', 'bg-cyan-500', 'bg-amber-500', 'bg-violet-500', 'bg-emerald-500', 'bg-rose-500']
  return (
    <div className="space-y-4">
      <div className="flex h-9 overflow-hidden rounded-xl border" role="img" aria-label="Phân bổ 40 phút">
        {steps.map((s, i) => (
          <div
            key={i}
            className={cn('flex items-center justify-center text-xs font-semibold text-white', colors[i % colors.length])}
            style={{ flexGrow: s.minutes || 0, flexBasis: 0 }}
            title={`${s.time}: ${s.title}`}
          >
            {(s.minutes || 0) / total > 0.07 ? `${s.minutes}′` : ''}
          </div>
        ))}
      </div>
      <ol className="relative space-y-4 border-l-2 border-dashed border-muted pl-5">
        {steps.map((s, i) => (
          <li key={i} className="relative">
            <span
              className={cn('absolute top-1 -left-[27px] size-3 rounded-full ring-4 ring-background', colors[i % colors.length])}
            />
            <p className="text-sm">
              <span className="font-semibold text-primary">{s.time}</span> · <span className="font-semibold">{s.title}</span>
            </p>
            {s.details.length > 0 && (
              <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                {s.details.map((d, k) => (
                  <li key={k}>
                    <RichText text={d} />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}

function Checklist({ title, items, stateKey }: Extract<Block, { type: 'checklist' }> & { stateKey: string }) {
  const progress = useProgress()
  const done = items.filter((_, i) => progress.writingChecks[`${stateKey}:${i}`]).length
  return (
    <div className="rounded-2xl border bg-card p-4 md:p-5">
      <div className="mb-3 flex items-center gap-2">
        <p className="font-semibold">{title}</p>
        <Badge variant={done === items.length && items.length > 0 ? 'default' : 'secondary'} className="ml-auto">
          {done}/{items.length}
        </Badge>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => {
          const key = `${stateKey}:${i}`
          const checked = Boolean(progress.writingChecks[key])
          return (
            <li key={i}>
              <label
                className={cn(
                  'flex cursor-pointer gap-3 rounded-lg border p-3 transition-colors hover:bg-muted/50',
                  checked && 'border-emerald-500/40 bg-emerald-500/5',
                )}
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={(v) => progressActions.toggleWritingCheck(key, v === true)}
                  className="mt-0.5"
                />
                <span className={cn('text-sm', checked && 'text-muted-foreground line-through')}>
                  <strong className="font-semibold text-foreground">{item.label}:</strong> <RichText text={item.text} />
                </span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function BlockView({ block, stateKey }: { block: Block; stateKey: string }) {
  switch (block.type) {
    case 'heading':
      return <h3 className="pt-2 text-lg font-semibold tracking-tight">{block.text}</h3>
    case 'p':
      return (
        <p className="leading-relaxed text-foreground/90">
          <RichText text={block.text} />
        </p>
      )
    case 'list': {
      const Tag = block.ordered ? 'ol' : 'ul'
      return (
        <Tag className={cn('space-y-2 pl-5 leading-relaxed', block.ordered ? 'list-decimal' : 'list-disc')}>
          {block.items.map((item, i) => (
            <li key={i} className="pl-1 marker:text-primary">
              <RichText text={item} />
            </li>
          ))}
        </Tag>
      )
    }
    case 'callout': {
      const { box, icon: Icon } = toneStyle[block.tone] ?? toneStyle.note
      return (
        <div className={cn('flex gap-3 rounded-xl border p-4', box)}>
          <Icon className="mt-0.5 size-5 shrink-0" />
          <div className="space-y-1">
            <p className="font-semibold">
              <RichText text={block.title} />
            </p>
            <p className="text-sm leading-relaxed text-foreground/85">
              <RichText text={block.text} />
            </p>
          </div>
        </div>
      )
    }
    case 'template':
      return (
        <div className="rounded-xl border bg-muted/40 p-3">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{block.label}</p>
          <p lang="en" className="mt-1 italic">
            <RichText text={block.text} />
          </p>
        </div>
      )
    case 'bandTable':
      return <BandTable {...block} />
    case 'paragraphPlan': {
      const color = roleStyle(block.name)
      return (
        <div className={cn('rounded-2xl border-l-4 bg-card p-4 shadow-xs md:p-5', color.border)}>
          <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className={cn('text-base font-semibold', color.text)}>{block.name}</p>
            <span className="text-xs text-muted-foreground">{block.meta}</span>
          </div>
          {block.note && (
            <p className="mb-3 rounded-lg bg-rose-500/5 px-3 py-2 text-sm text-rose-700 dark:text-rose-300">
              ⚠ <RichText text={block.note} />
            </p>
          )}
          <ol className="space-y-3">
            {block.sentences.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1 space-y-1">
                  <p className="text-sm font-semibold">{s.label}</p>
                  {s.detail && <p className="text-sm text-muted-foreground">{s.detail}</p>}
                  <button
                    type="button"
                    onClick={() => copy(s.template.replace(/\[|\]/g, ''))}
                    title="Bấm để sao chép mẫu câu"
                    className="group flex w-full items-start gap-2 rounded-lg border border-dashed bg-muted/30 px-3 py-2 text-left text-sm italic transition-colors hover:bg-muted/60"
                    lang="en"
                  >
                    <Quote className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                    <RichText text={s.template} />
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )
    }
    case 'phrases':
      return (
        <div className="space-y-2">
          <p className="font-semibold">{block.title}</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {block.items.map((item, i) => (
              <button
                key={i}
                type="button"
                onClick={() => copy(item.en)}
                title="Bấm để sao chép"
                className="rounded-xl border bg-card p-3 text-left transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <p lang="en" className="text-sm font-medium">
                  <RichText text={item.en} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  <RichText text={item.vi} />
                </p>
              </button>
            ))}
          </div>
        </div>
      )
    case 'structure':
      return (
        <div className="rounded-2xl border bg-card p-4">
          <p className="font-semibold">{block.title}</p>
          <p lang="en" className="mt-2 rounded-lg bg-primary/5 px-3 py-2 font-mono text-sm text-primary">
            <RichText text={block.formula} />
          </p>
          {block.example && (
            <p lang="en" className="mt-2 text-sm italic text-foreground/85">
              <span className="font-medium not-italic text-muted-foreground">Ví dụ: </span>
              {block.example}
            </p>
          )}
          {(block.before || block.after) && (
            <div className="mt-3 grid gap-2 text-sm">
              {block.before && (
                <p lang="en" className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-3 py-2">
                  <span className="mr-1 font-semibold text-amber-600">Band 6:</span> {block.before}
                </p>
              )}
              {block.before && block.after && <ArrowDown className="mx-auto size-4 text-muted-foreground" />}
              {block.after && (
                <p lang="en" className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
                  <span className="mr-1 font-semibold text-emerald-600">Band 7.5+:</span> {block.after}
                </p>
              )}
            </div>
          )}
        </div>
      )
    case 'prompt':
      return (
        <figure className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-4 md:p-5">
          <figcaption className="mb-2 text-xs font-semibold tracking-wide text-primary uppercase">Đề bài</figcaption>
          <blockquote lang="en" className="font-serif text-[1.02rem] leading-relaxed italic">
            {block.text}
          </blockquote>
        </figure>
      )
    case 'bandSamples':
      return <BandSamples {...block} />
    case 'essay': {
      const words = block.paragraphs.reduce((n, p) => n + countWords(p.text), 0)
      return (
        <div className="space-y-4">
          <figure className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-4">
            <figcaption className="mb-2 text-xs font-semibold tracking-wide text-primary uppercase">Đề bài</figcaption>
            <blockquote lang="en" className="font-serif italic">
              {block.prompt}
            </blockquote>
          </figure>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className={cn(words >= 280 && words <= 310 ? 'bg-emerald-600' : 'bg-amber-500', 'text-white')}>
              {words} từ
            </Badge>
            <span className="text-xs text-muted-foreground">Mục tiêu 280 – 310 từ</span>
            <Button
              size="sm"
              variant="outline"
              className="ml-auto"
              onClick={() => copy(block.paragraphs.map((p) => p.text).join('\n\n'))}
            >
              <Copy /> Sao chép bài
            </Button>
          </div>
          <article className="space-y-3 rounded-2xl border bg-card p-4 md:p-6">
            {block.paragraphs.map((p, i) => {
              const color = roleStyle(p.role)
              return (
                <div key={i} className={cn('rounded-r-lg border-l-4 py-1 pr-2 pl-4', color.border, color.bg)}>
                  <p className={cn('mb-1 text-xs font-semibold tracking-wide uppercase', color.text)}>
                    {p.role} · {countWords(p.text)} từ
                  </p>
                  <p lang="en" className="font-serif text-[1.02rem] leading-relaxed">
                    {p.text}
                  </p>
                </div>
              )
            })}
          </article>
        </div>
      )
    }
    case 'timeline':
      return <Timeline {...block} />
    case 'checklist':
      return <Checklist {...block} stateKey={stateKey} />
    default:
      return null
  }
}
