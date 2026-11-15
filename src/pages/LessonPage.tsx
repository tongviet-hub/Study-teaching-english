import { useEffect, type ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'sonner'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  Clock,
  ExternalLink,
  NotebookPen,
  PencilRuler,
  Presentation,
  Target,
} from 'lucide-react'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { allLessons, lessonById } from '@/data/roadmap'
import { lessonsEn } from '@/data/roadmap.en'
import { progressActions, useProgress, type LessonLang } from '@/hooks/useProgress'
import { cn } from '@/lib/utils'

// Hiển thị một đoạn theo chế độ ngôn ngữ; song ngữ thì bản tiếng Anh nằm ngay dưới bản tiếng Việt.
function Bi({ lang, vi, en, className }: { lang: LessonLang; vi: ReactNode; en?: ReactNode; className?: string }) {
  if (lang === 'vi' || en === undefined || en === vi) return <span className={className}>{vi}</span>
  if (lang === 'en') return <span lang="en" className={className}>{en}</span>
  return (
    <span className={cn('block', className)}>
      <span className="block">{vi}</span>
      <span lang="en" className="mt-1 block border-l-2 border-primary/40 pl-3 text-muted-foreground italic">
        {en}
      </span>
    </span>
  )
}

export function LessonPage() {
  const { id = '' } = useParams()
  const progress = useProgress()
  const ref = lessonById.get(id)

  useEffect(() => {
    if (ref) progressActions.visitLesson(ref.lesson.id)
  }, [ref])

  if (!ref) return <NotFoundPage />

  const { lesson, stage, moduleTitle, index } = ref
  const prev = allLessons[index - 1]
  const next = allLessons[index + 1]
  const done = Boolean(progress.completed[lesson.id])
  const en = lessonsEn[lesson.id]
  const lang = progress.lessonLang

  const toggleDone = () => {
    progressActions.toggleLesson(lesson.id, !done)
    if (!done) toast.success('Đã hoàn thành bài học', { description: lesson.title })
  }

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        to={`/roadmap?stage=${stage.id}`}
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Giai đoạn {stage.id}: {stage.title}
      </Link>

      <p className="text-sm font-medium text-primary">{moduleTitle}</p>
      <h1 className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl" lang={lang === 'en' ? 'en' : undefined}>
        {lang === 'en' && en ? en.title : lesson.title}
      </h1>
      {lang === 'both' && en && en.title !== lesson.title && (
        <p lang="en" className="mt-1 text-lg text-muted-foreground italic">
          {en.title}
        </p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge variant="secondary">
          <Clock /> {lesson.minutes} phút
        </Badge>
        <Badge variant="outline">
          Bài {index + 1}/{allLessons.length}
        </Badge>
        {done && (
          <Badge>
            <Check /> Đã học
          </Badge>
        )}
        <ToggleGroup
          type="single"
          variant="outline"
          size="sm"
          value={lang}
          onValueChange={(v) => v && progressActions.setLessonLang(v as LessonLang)}
          className="sm:ml-auto"
          aria-label="Ngôn ngữ bài học"
        >
          <ToggleGroupItem value="vi">Tiếng Việt</ToggleGroupItem>
          <ToggleGroupItem value="en">English</ToggleGroupItem>
          <ToggleGroupItem value="both">Song ngữ</ToggleGroupItem>
        </ToggleGroup>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Target className="size-4 text-primary" /> Mục tiêu bài học
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {lesson.objectives.map((o, i) => (
              <li key={o}>
                <Bi lang={lang} vi={o} en={en?.objectives[i]} />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-6 leading-7">
        <Bi lang={lang} vi={lesson.summary} en={en?.summary} />
      </div>

      <Tabs defaultValue="concepts" className="mt-6">
        <TabsList className="w-full sm:w-fit">
          <TabsTrigger value="concepts">
            <BookOpen className="max-sm:hidden" /> Kiến thức
          </TabsTrigger>
          <TabsTrigger value="example">
            <Presentation className="max-sm:hidden" /> Ví dụ
          </TabsTrigger>
          <TabsTrigger value="practice">
            <PencilRuler className="max-sm:hidden" /> Thực hành
          </TabsTrigger>
          <TabsTrigger value="resources">
            <ExternalLink className="max-sm:hidden" /> Tài liệu
          </TabsTrigger>
        </TabsList>

        <TabsContent value="concepts" className="mt-4">
          <dl className="divide-y rounded-xl border">
            {lesson.keyPoints.map((k, i) => (
              <div key={k.term} className="grid gap-1 px-4 py-3 sm:grid-cols-[180px_1fr] sm:gap-4">
                <dt className="text-sm font-semibold">{k.term}</dt>
                <dd className="text-sm text-muted-foreground">
                  <Bi lang={lang} vi={k.detail} en={en?.keyPoints[i]} />
                </dd>
              </div>
            ))}
          </dl>
        </TabsContent>

        <TabsContent value="example" className="mt-4">
          <blockquote className="rounded-xl border-l-4 border-primary bg-primary/5 px-5 py-4 text-sm leading-6">
            <Bi lang={lang} vi={lesson.example} en={en?.example} />
          </blockquote>
        </TabsContent>

        <TabsContent value="practice" className="mt-4">
          <ol className="space-y-2">
            {lesson.practice.map((p, i) => (
              <li key={p} className="flex gap-3 rounded-xl border px-4 py-3 text-sm">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                  {i + 1}
                </span>
                <Bi lang={lang} vi={p} en={en?.practice[i]} />
              </li>
            ))}
          </ol>
        </TabsContent>

        <TabsContent value="resources" className="mt-4">
          <ul className="space-y-2">
            {lesson.resources.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-medium hover:bg-muted"
                >
                  {r.label}
                  <ExternalLink className="size-4 shrink-0 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <NotebookPen className="size-4 text-primary" /> Ghi chú cá nhân
          </CardTitle>
          <CardDescription>Tự động lưu trong trình duyệt này.</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={progress.notes[lesson.id] ?? ''}
            onChange={(e) => progressActions.setNote(lesson.id, e.target.value)}
            placeholder="Điều mình rút ra, câu hỏi còn thắc mắc, ý tưởng áp dụng vào lớp học…"
            className="min-h-32"
          />
        </CardContent>
      </Card>

      <div className="mt-8 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Button variant={done ? 'outline' : 'default'} size="lg" onClick={toggleDone}>
          <Check /> {done ? 'Bỏ đánh dấu đã học' : 'Đánh dấu đã học'}
        </Button>
        <div className="flex gap-2">
          {prev && (
            <Button variant="outline" size="lg" asChild>
              <Link to={`/lesson/${prev.lesson.id}`} title={prev.lesson.title}>
                <ArrowLeft /> Bài trước
              </Link>
            </Button>
          )}
          {next && (
            <Button variant="outline" size="lg" asChild>
              <Link to={`/lesson/${next.lesson.id}`} title={next.lesson.title}>
                Bài tiếp <ArrowRight />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}
