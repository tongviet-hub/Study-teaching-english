import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { ArrowRight, Download, ExternalLink, FileDown, FileUp, PenLine, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { bandStyle } from '@/components/writing/BlockView'
import { BANDS, sectionKey, writingBook } from '@/data/writing'
import { progressActions, useProgress } from '@/hooks/useProgress'
import { useWritingChapters } from '@/hooks/useWriting'
import { cn } from '@/lib/utils'

const chapterColors = [
  'from-sky-500/15',
  'from-amber-500/15',
  'from-violet-500/15',
  'from-rose-500/15',
  'from-emerald-500/15',
]

export function WritingPage() {
  const progress = useProgress()
  const chapters = useWritingChapters()
  const fileRef = useRef<HTMLInputElement>(null)
  const [exporting, setExporting] = useState(false)

  const allKeys = chapters.flatMap((c) => c.sections.map((s) => sectionKey(c.id, s.id)))
  const readCount = allKeys.filter((k) => progress.writingRead[k]).length
  const editCount = Object.keys(progress.writingEdits).length

  const downloadDocx = async () => {
    setExporting(true)
    try {
      const { downloadWritingDocx } = await import('@/lib/writingDocx')
      await downloadWritingDocx(chapters)
      toast.success('Đã tạo file .docx', { description: 'Mở bằng Google Docs hoặc Word để chỉnh tiếp.' })
    } catch {
      toast.error('Không tạo được file .docx')
    } finally {
      setExporting(false)
    }
  }

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(progress.writingEdits, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'writing-task2-ban-sua.json'
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const importJson = async (file: File) => {
    try {
      const data = JSON.parse(await file.text())
      const valid =
        data && typeof data === 'object' && !Array.isArray(data) && Object.values(data).every((v) => Array.isArray(v))
      if (!valid) throw new Error('invalid')
      progressActions.importWritingEdits({ ...progress.writingEdits, ...data })
      toast.success(`Đã nhập ${Object.keys(data).length} phần đã sửa`)
    } catch {
      toast.error('File không đúng định dạng bản sửa giáo trình')
    }
  }

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-br from-violet-500/15 via-sky-500/10 to-background p-6 md:p-10">
        <div className="pointer-events-none absolute -top-10 -right-10 hidden size-56 rounded-full bg-primary/10 blur-3xl md:block" />
        <p className="flex items-center gap-2 text-sm font-medium text-primary">
          <PenLine className="size-4" /> IELTS Writing Task 2
        </p>
        <h1 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          Giáo trình toàn diện: từ nền tảng đến bậc thầy học thuật
        </h1>
        <p className="mt-3 max-w-3xl text-muted-foreground">{writingBook.subtitle}</p>

        <div className="mt-5 flex flex-wrap items-center gap-2" aria-label="Thang band">
          {BANDS.map((b) => (
            <span key={b} className={cn('rounded-lg px-3 py-1 text-sm font-semibold', bandStyle[b].chip)}>
              Band {b}
            </span>
          ))}
        </div>

        <div className="mt-6 max-w-md space-y-2">
          <div className="flex justify-between text-sm">
            <span>Tiến độ đọc</span>
            <span className="font-medium">
              {readCount}/{allKeys.length} phần
            </span>
          </div>
          <Progress value={(readCount / allKeys.length) * 100} />
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <Button size="lg" asChild>
            <Link to={`/writing/${chapters[0].id}`}>
              <Sparkles /> Bắt đầu Chương 1
            </Link>
          </Button>
          <Button size="lg" variant="outline" onClick={downloadDocx} disabled={exporting}>
            <Download /> {exporting ? 'Đang tạo...' : 'Tải giáo trình .docx'}
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {chapters.map((c, i) => {
          const keys = c.sections.map((s) => sectionKey(c.id, s.id))
          const read = keys.filter((k) => progress.writingRead[k]).length
          const edited = keys.filter((k) => k in progress.writingEdits).length
          return (
            <Card
              key={c.id}
              className={cn('group flex flex-col bg-gradient-to-br to-card transition-shadow hover:shadow-md', chapterColors[i % chapterColors.length])}
            >
              <CardHeader>
                <div className="flex items-center gap-2">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-background text-lg font-bold text-primary shadow-xs">
                    {c.number}
                  </span>
                  <Badge variant="secondary" className="ml-auto">
                    {c.status}
                  </Badge>
                  {edited > 0 && (
                    <Badge variant="outline" className="border-amber-500/50 text-amber-700 dark:text-amber-300">
                      {edited} phần đã sửa
                    </Badge>
                  )}
                </div>
                <CardTitle className="mt-2 text-lg">{c.shortTitle}</CardTitle>
                <CardDescription>{c.tagline}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-3">
                <p lang="en" className="line-clamp-3 rounded-lg border bg-background/60 p-3 text-sm italic text-muted-foreground">
                  “{c.samplePrompt}”
                </p>
                <div className="flex gap-1" aria-label={`${read}/${keys.length} phần đã đọc`}>
                  {keys.map((k) => (
                    <span key={k} className={cn('h-1.5 flex-1 rounded-full', progress.writingRead[k] ? 'bg-emerald-500' : 'bg-muted')} />
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="ml-auto" asChild>
                  <Link to={`/writing/${c.id}`}>
                    {read === 0 ? 'Học chương này' : read === keys.length ? 'Ôn lại' : 'Học tiếp'} <ArrowRight />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )
        })}

        <Card className="flex flex-col border-dashed">
          <CardHeader>
            <CardTitle className="text-lg">Bản sửa của cậu</CardTitle>
            <CardDescription>
              Bấm “Chỉnh sửa” ở mỗi phần để sửa nội dung. Bản sửa lưu trong trình duyệt này; xuất JSON để sao lưu hoặc chuyển
              sang máy khác.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-3xl font-semibold">{editCount}</p>
            <p className="text-sm text-muted-foreground">phần đang có bản sửa</p>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={exportJson} disabled={editCount === 0}>
              <FileDown /> Xuất JSON
            </Button>
            <Button variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
              <FileUp /> Nhập JSON
            </Button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) importJson(file)
                e.target.value = ''
              }}
            />
            <Button variant="link" size="sm" asChild>
              <a href={writingBook.sourceUrl} target="_blank" rel="noreferrer">
                Google Doc gốc <ExternalLink />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}
