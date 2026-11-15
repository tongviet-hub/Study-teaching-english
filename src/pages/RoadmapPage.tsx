import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle2, Clock, Sparkles } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { stageLessonIds, stages } from '@/data/roadmap'
import { progressActions, useProgress } from '@/hooks/useProgress'
import { cn } from '@/lib/utils'

export function RoadmapPage() {
  const progress = useProgress()
  const [params] = useSearchParams()
  const focusStage = Number(params.get('stage')) || null
  const recommended = progress.testResult?.recommendedStage ?? null

  useEffect(() => {
    if (focusStage) document.getElementById(`stage-${focusStage}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [focusStage])

  return (
    <>
      <PageHeader
        eyebrow="Lộ trình tự học"
        title="5 giai đoạn trở thành giáo viên tiếng Anh"
        description="Đi lần lượt từ nền tảng ngôn ngữ đến chứng chỉ TESOL. Tick vào bài đã học để theo dõi tiến độ."
      />

      <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-4 before:w-px before:bg-border md:before:left-5">
        {stages.map((stage) => {
          const ids = stageLessonIds(stage)
          const done = ids.filter((id) => progress.completed[id]).length
          const percent = Math.round((done / ids.length) * 100)
          const isRecommended = recommended === stage.id
          const isComplete = done === ids.length

          return (
            <li key={stage.id} id={`stage-${stage.id}`} className="relative scroll-mt-20 pl-12 md:pl-16">
              <span
                className={cn(
                  'absolute top-4 left-0 flex size-8 items-center justify-center rounded-full border bg-background text-sm font-semibold md:size-10',
                  isComplete && 'border-primary bg-primary text-primary-foreground',
                  isRecommended && !isComplete && 'border-primary text-primary ring-4 ring-primary/15',
                )}
              >
                {isComplete ? <CheckCircle2 className="size-4" /> : stage.id}
              </span>

              <Card className={cn(isRecommended && 'ring-2 ring-primary/40')}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle className="text-lg">
                      Giai đoạn {stage.id}: {stage.title}
                    </CardTitle>
                    <Badge variant="secondary">
                      <Clock /> {stage.weeks}
                    </Badge>
                    {isRecommended && (
                      <Badge>
                        <Sparkles /> Gợi ý từ bài test
                      </Badge>
                    )}
                  </div>
                  <CardDescription>
                    <span className="font-medium text-foreground">{stage.subtitle}.</span> {stage.description}
                  </CardDescription>
                  <div className="mt-2 flex items-center gap-3">
                    <Progress value={percent} className="h-1.5" aria-label={`Tiến độ giai đoạn ${stage.id}`} />
                    <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                      {done}/{ids.length} bài
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion
                    type="multiple"
                    defaultValue={focusStage === stage.id || isRecommended ? stage.modules.map((m) => m.id) : []}
                  >
                    {stage.modules.map((module) => {
                      const moduleDone = module.lessons.filter((l) => progress.completed[l.id]).length
                      return (
                        <AccordionItem key={module.id} value={module.id}>
                          <AccordionTrigger>
                            <span className="flex flex-1 flex-col gap-0.5 text-left">
                              <span>{module.title}</span>
                              <span className="text-xs font-normal text-muted-foreground">{module.description}</span>
                            </span>
                            <span className="mr-2 self-center text-xs font-normal text-muted-foreground tabular-nums">
                              {moduleDone}/{module.lessons.length}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <ul className="divide-y rounded-lg border">
                              {module.lessons.map((lesson) => {
                                const checked = Boolean(progress.completed[lesson.id])
                                return (
                                  <li key={lesson.id} className="flex items-center gap-3 px-3 py-2.5">
                                    <Checkbox
                                      checked={checked}
                                      onCheckedChange={(v) => progressActions.toggleLesson(lesson.id, v === true)}
                                      aria-label={`Đánh dấu đã học: ${lesson.title}`}
                                    />
                                    <Link
                                      to={`/lesson/${lesson.id}`}
                                      className={cn(
                                        'flex-1 text-sm font-medium hover:text-primary hover:underline',
                                        checked && 'text-muted-foreground line-through decoration-muted-foreground/50',
                                      )}
                                    >
                                      {lesson.title}
                                    </Link>
                                    <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                                      {lesson.minutes} phút
                                    </span>
                                  </li>
                                )
                              })}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      )
                    })}
                  </Accordion>
                </CardContent>
              </Card>
            </li>
          )
        })}
      </ol>
    </>
  )
}
