import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { ArrowRight, Award, BookOpenCheck, ClipboardCheck, Map, PlayCircle, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { glossary } from '@/data/glossary'
import { allLessons, lessonById, stageLessonIds, stages } from '@/data/roadmap'
import { progressActions, useProgress } from '@/hooks/useProgress'

export function DashboardPage() {
  const progress = useProgress()
  const doneCount = allLessons.filter((r) => progress.completed[r.lesson.id]).length
  const percent = Math.round((doneCount / allLessons.length) * 100)
  const totalMinutes = allLessons
    .filter((r) => progress.completed[r.lesson.id])
    .reduce((n, r) => n + r.lesson.minutes, 0)

  const last = progress.lastLessonId ? lessonById.get(progress.lastLessonId) : undefined
  const continueRef =
    last && !progress.completed[last.lesson.id]
      ? last
      : allLessons.find((r) => !progress.completed[r.lesson.id])

  const test = progress.testResult
  const knownTerms = glossary.filter((term) => progress.knownTerms[term.id]).length

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-background p-6 md:p-10">
        <p className="text-sm font-medium text-primary">Góc tự học sư phạm</p>
        <h1 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
          Lộ trình trở thành giáo viên tiếng Anh & chứng chỉ TESOL
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {allLessons.length} bài học trong 5 giai đoạn: ngôn ngữ học, phương pháp giảng dạy, kỹ năng, quản lý lớp và
          chuẩn bị chứng chỉ.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {continueRef ? (
            <Button size="lg" asChild>
              <Link to={`/lesson/${continueRef.lesson.id}`}>
                <PlayCircle /> {doneCount === 0 ? 'Bắt đầu học' : 'Học tiếp'}
              </Link>
            </Button>
          ) : (
            <Button size="lg" asChild>
              <Link to="/certificates">
                <Award /> Sang bước chứng chỉ
              </Link>
            </Button>
          )}
          {!test && (
            <Button size="lg" variant="outline" asChild>
              <Link to="/test">
                <ClipboardCheck /> Làm bài test xếp trình độ
              </Link>
            </Button>
          )}
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat label="Bài đã học" value={`${doneCount}/${allLessons.length}`} />
        <Stat label="Hoàn thành" value={`${percent}%`} />
        <Stat label="Thời gian học" value={`${Math.floor(totalMinutes / 60)}h ${totalMinutes % 60}p`} />
        <Stat label="Thuật ngữ đã thuộc" value={`${knownTerms}/${glossary.length}`} />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Map className="size-4 text-primary" /> Tiến độ theo giai đoạn
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            {stages.map((stage) => {
              const ids = stageLessonIds(stage)
              const done = ids.filter((id) => progress.completed[id]).length
              return (
                <Link
                  key={stage.id}
                  to={`/roadmap?stage=${stage.id}`}
                  className="block rounded-lg px-2 py-2.5 hover:bg-muted"
                >
                  <div className="mb-1.5 flex justify-between gap-2 text-sm">
                    <span className="font-medium">
                      {stage.id}. {stage.title}
                    </span>
                    <span className="text-muted-foreground tabular-nums">
                      {done}/{ids.length}
                    </span>
                  </div>
                  <Progress value={(done / ids.length) * 100} className="h-1.5" aria-label={`Tiến độ ${stage.title}`} />
                </Link>
              )
            })}
          </CardContent>
        </Card>

        <div className="space-y-6">
          {continueRef && (
            <Card>
              <CardHeader>
                <CardDescription className="flex items-center gap-2">
                  <BookOpenCheck className="size-4" /> {doneCount === 0 ? 'Bài đầu tiên' : 'Học tiếp'}
                </CardDescription>
                <CardTitle>{continueRef.lesson.title}</CardTitle>
                <CardDescription>
                  Giai đoạn {continueRef.stage.id} · {continueRef.moduleTitle} · {continueRef.lesson.minutes} phút
                </CardDescription>
              </CardHeader>
              <CardFooter className="border-t pt-4">
                <Button variant="outline" asChild>
                  <Link to={`/lesson/${continueRef.lesson.id}`}>
                    Mở bài học <ArrowRight />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardDescription className="flex items-center gap-2">
                <ClipboardCheck className="size-4" /> Bài test xếp trình độ
              </CardDescription>
              {test ? (
                <>
                  <CardTitle>
                    Đúng {test.correct}/{test.total} · Gợi ý giai đoạn {test.recommendedStage}
                  </CardTitle>
                  <CardDescription>Làm ngày {new Date(test.date).toLocaleDateString('vi-VN')}</CardDescription>
                </>
              ) : (
                <CardTitle>Chưa làm bài test</CardTitle>
              )}
            </CardHeader>
            <CardFooter className="border-t pt-4">
              <Button variant="outline" asChild>
                <Link to="/test">
                  {test ? 'Xem kết quả' : 'Làm bài (10 phút)'} <ArrowRight />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <div className="flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Trash2 /> Xoá toàn bộ tiến độ
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Xoá toàn bộ tiến độ?</DialogTitle>
              <DialogDescription>
                Các bài đã đánh dấu, ghi chú, thuật ngữ đã thuộc, checklist chứng chỉ và kết quả bài test sẽ bị xoá khỏi trình duyệt này.
                Không thể hoàn tác.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Huỷ</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  variant="destructive"
                  onClick={() => {
                    progressActions.reset()
                    toast('Đã xoá tiến độ')
                  }}
                >
                  Xoá
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <Card size="sm">
      <CardContent>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-2xl font-semibold tabular-nums">{value}</p>
      </CardContent>
    </Card>
  )
}
