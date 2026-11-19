import { ArrowDown, ArrowUp, Plus, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { BANDS, type Block, type BlockType } from '@/data/writing'
import { cn } from '@/lib/utils'

export const blockLabels: Record<BlockType, string> = {
  p: 'Đoạn văn',
  heading: 'Tiêu đề nhỏ',
  list: 'Danh sách',
  callout: 'Hộp lưu ý / bí quyết',
  template: 'Mẫu câu',
  bandTable: 'Bảng tiêu chí Band',
  paragraphPlan: 'Dàn ý một đoạn',
  phrases: 'Ngân hàng cụm từ',
  structure: 'Cấu trúc câu',
  prompt: 'Đề bài',
  bandSamples: 'Đoạn văn theo Band',
  essay: 'Bài mẫu',
  timeline: 'Quy trình thời gian',
  checklist: 'Checklist',
}

export const blankBlocks: Record<BlockType, () => Block> = {
  p: () => ({ type: 'p', text: '' }),
  heading: () => ({ type: 'heading', text: '' }),
  list: () => ({ type: 'list', ordered: false, items: [''] }),
  callout: () => ({ type: 'callout', tone: 'tip', title: '', text: '' }),
  template: () => ({ type: 'template', label: '', text: '' }),
  bandTable: () => ({ type: 'bandTable', rows: [{ criterion: '', cells: ['', '', '', ''] }] }),
  paragraphPlan: () => ({ type: 'paragraphPlan', name: '', meta: '', note: '', sentences: [{ label: '', detail: '', template: '' }] }),
  phrases: () => ({ type: 'phrases', title: '', items: [{ en: '', vi: '' }] }),
  structure: () => ({ type: 'structure', title: '', formula: '', example: '', before: '', after: '' }),
  prompt: () => ({ type: 'prompt', text: '' }),
  bandSamples: () => ({
    type: 'bandSamples',
    samples: BANDS.map((band) => ({ band, label: '', text: '', comments: [''] })),
  }),
  essay: () => ({
    type: 'essay',
    prompt: '',
    paragraphs: ['Introduction', 'Body 1', 'Body 2', 'Conclusion'].map((role) => ({ role, text: '' })),
  }),
  timeline: () => ({ type: 'timeline', steps: [{ time: '', minutes: 5, title: '', details: [''] }] }),
  checklist: () => ({ type: 'checklist', title: '', items: [{ label: '', text: '' }] }),
}

const fieldLabels: Record<string, string> = {
  text: 'Nội dung',
  title: 'Tiêu đề',
  items: 'Các mục',
  ordered: 'Đánh số thứ tự',
  tone: 'Kiểu hộp',
  label: 'Nhãn',
  rows: 'Các tiêu chí',
  criterion: 'Tiêu chí',
  cells: 'Mô tả theo Band',
  name: 'Tên đoạn',
  meta: 'Số câu · số từ · thời gian',
  note: 'Lưu ý (để trống nếu không có)',
  sentences: 'Các câu',
  detail: 'Giải thích',
  template: 'Mẫu câu khung',
  en: 'Tiếng Anh',
  vi: 'Nghĩa tiếng Việt',
  formula: 'Công thức',
  example: 'Ví dụ',
  before: 'Câu Band 6 (trước)',
  after: 'Câu nâng cấp (sau)',
  samples: 'Các mức Band',
  band: 'Band',
  comments: 'Nhận xét',
  prompt: 'Đề bài',
  paragraphs: 'Các đoạn',
  role: 'Vai trò đoạn',
  steps: 'Các bước',
  time: 'Mốc thời gian',
  minutes: 'Số phút',
  details: 'Chi tiết',
}

// Các trường ngắn dùng ô một dòng thay vì ô nhiều dòng.
const shortFields = new Set(['band', 'time', 'role', 'name', 'meta', 'criterion', 'label'])

type Json = string | number | boolean | Json[] | { [key: string]: Json } | undefined

function blankLike(value: Json): Json {
  if (typeof value === 'string') return ''
  if (typeof value === 'number') return 0
  if (typeof value === 'boolean') return false
  if (Array.isArray(value)) return value.length && typeof value[0] === 'string' ? [''] : []
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, blankLike(v)]))
  }
  return ''
}

function move<T>(list: T[], from: number, to: number) {
  const next = [...list]
  const [item] = next.splice(from, 1)
  next.splice(to, 0, item)
  return next
}

function ItemControls({ index, length, onMove, onRemove }: { index: number; length: number; onMove: (to: number) => void; onRemove?: () => void }) {
  return (
    <div className="flex shrink-0 gap-0.5">
      <Button type="button" size="icon" variant="ghost" className="size-7" disabled={index === 0} onClick={() => onMove(index - 1)} aria-label="Lên">
        <ArrowUp className="size-3.5" />
      </Button>
      <Button type="button" size="icon" variant="ghost" className="size-7" disabled={index === length - 1} onClick={() => onMove(index + 1)} aria-label="Xuống">
        <ArrowDown className="size-3.5" />
      </Button>
      {onRemove && (
        <Button type="button" size="icon" variant="ghost" className="size-7 text-destructive" onClick={onRemove} aria-label="Xoá">
          <Trash2 className="size-3.5" />
        </Button>
      )}
    </div>
  )
}

function FieldEditor({ fieldKey, value, onChange }: { fieldKey: string; value: Json; onChange: (v: Json) => void }) {
  const label = fieldLabels[fieldKey] ?? fieldKey

  if (fieldKey === 'tone') {
    return (
      <label className="block space-y-1">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <select
          value={String(value)}
          onChange={(e) => onChange(e.target.value)}
          className="h-9 w-full rounded-md border bg-background px-2 text-sm"
        >
          <option value="warn">Lỗi chí mạng (đỏ)</option>
          <option value="tip">Bí quyết (xanh lá)</option>
          <option value="note">Ghi chú (xanh dương)</option>
        </select>
      </label>
    )
  }

  if (typeof value === 'boolean') {
    return (
      <label className="flex items-center gap-2 text-sm">
        <Checkbox checked={value} onCheckedChange={(v) => onChange(v === true)} />
        {label}
      </label>
    )
  }

  if (typeof value === 'number') {
    return (
      <label className="block space-y-1">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        <Input type="number" min={0} value={value} onChange={(e) => onChange(Number(e.target.value) || 0)} />
      </label>
    )
  }

  if (typeof value === 'string' || value === undefined) {
    const text = value ?? ''
    return (
      <label className="block space-y-1">
        <span className="text-xs font-medium text-muted-foreground">{label}</span>
        {shortFields.has(fieldKey) ? (
          <Input value={text} onChange={(e) => onChange(e.target.value)} />
        ) : (
          <Textarea
            value={text}
            onChange={(e) => onChange(e.target.value)}
            rows={text.length > 240 ? 7 : text.length > 90 ? 4 : 2}
            className="text-sm"
          />
        )}
      </label>
    )
  }

  if (Array.isArray(value)) {
    const fixed = fieldKey === 'cells'
    return (
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">{label}</p>
        {value.map((item, i) => {
          const setItem = (v: Json) => onChange(value.map((x, k) => (k === i ? v : x)))
          const isObject = item !== null && typeof item === 'object' && !Array.isArray(item)
          return (
            <div key={i} className={cn('flex gap-2', isObject && 'rounded-lg border bg-muted/30 p-3')}>
              <div className="min-w-0 flex-1 space-y-2">
                {isObject ? (
                  Object.entries(item as Record<string, Json>).map(([k, v]) => (
                    <FieldEditor key={k} fieldKey={k} value={v} onChange={(nv) => setItem({ ...(item as object), [k]: nv })} />
                  ))
                ) : (
                  <Textarea
                    value={String(item ?? '')}
                    onChange={(e) => setItem(e.target.value)}
                    rows={String(item ?? '').length > 120 ? 4 : 2}
                    className="text-sm"
                    placeholder={fixed ? `Band ${BANDS[i] ?? ''}` : undefined}
                    aria-label={fixed ? `Band ${BANDS[i] ?? ''}` : `${label} ${i + 1}`}
                  />
                )}
              </div>
              {!fixed && (
                <ItemControls
                  index={i}
                  length={value.length}
                  onMove={(to) => onChange(move(value, i, to))}
                  onRemove={() => onChange(value.filter((_, k) => k !== i))}
                />
              )}
            </div>
          )
        })}
        {!fixed && (
          <Button
            type="button"
            size="sm"
            variant="outline"
            onClick={() => onChange([...value, value.length ? blankLike(value[0]) : ''])}
          >
            <Plus /> Thêm
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-2">
      {Object.entries(value).map(([k, v]) => (
        <FieldEditor key={k} fieldKey={k} value={v} onChange={(nv) => onChange({ ...value, [k]: nv })} />
      ))}
    </div>
  )
}

export function BlocksEditor({ blocks, onChange }: { blocks: Block[]; onChange: (blocks: Block[]) => void }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        const { type, ...fields } = block
        return (
          <div key={i} className="rounded-xl border-2 border-dashed border-primary/30 bg-background p-3 md:p-4">
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-md bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                {blockLabels[type] ?? type}
              </span>
              <div className="ml-auto">
                <ItemControls
                  index={i}
                  length={blocks.length}
                  onMove={(to) => onChange(move(blocks, i, to))}
                  onRemove={() => onChange(blocks.filter((_, k) => k !== i))}
                />
              </div>
            </div>
            <div className="space-y-3">
              {Object.entries(fields as Record<string, Json>).map(([k, v]) => (
                <FieldEditor
                  key={k}
                  fieldKey={k}
                  value={v}
                  onChange={(nv) => onChange(blocks.map((b, idx) => (idx === i ? ({ ...b, [k]: nv } as Block) : b)))}
                />
              ))}
            </div>
          </div>
        )
      })}
      <div className="rounded-xl border bg-muted/30 p-3">
        <p className="mb-2 text-xs font-medium text-muted-foreground">Thêm khối nội dung</p>
        <div className="flex flex-wrap gap-1.5">
          {(Object.keys(blankBlocks) as BlockType[]).map((t) => (
            <Button key={t} type="button" size="sm" variant="secondary" onClick={() => onChange([...blocks, blankBlocks[t]()])}>
              <Plus /> {blockLabels[t]}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
