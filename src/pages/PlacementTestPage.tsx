import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, RotateCcw, XCircle } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { PASS_RATIO, questions, scoreTest } from '@/data/placementTest'
import { stages } from '@/data/roadmap'
import { progressActions, useProgress, type TestResult } from '@/hooks/useProgress'
import { cn } from '@/lib/utils'

type Phase = 'intro' | 'quiz' | 'result'

export function PlacementTestPage() {
  const { testResult } = useProgress()
  const [phase, setPhase] = useState<Phase>(testResult ? 'result' : 'intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [result, setResult] = useState<TestResult | null>(testResult)

  const start = () => {
    setAnswers({})
    setCurrent(0)
    setPhase('quiz')
  }

  const submit = () => {
    const scored = scoreTest(answers)
    const saved: TestResult = { ...scored, date: new Date().toISOString() }
    progressActions.saveTestResult(saved)
    setResult(saved)
    setPhase('result')
  }

  return (
    <>
      <PageHeader
        eyebrow="Bài test xếp trình độ"
        title="Mình nên bắt đầu từ giai đoạn nào?"
        description={`${questions.length} câu trắc nghiệm về kiến thức sư phạm, khoảng 10 phút. Kết quả gợi ý giai đoạn phù hợp trong lộ trình.`}
      />
      {phase === 'intro' && <Intro onStart={start} />}
      {phase === 'quiz' && (
        <Quiz
          current={current}
          answers={answers}
          onAnswer={(qid, value) => setAnswers((a) => ({ ...a, [qid]: value }))}
          onMove={setCurrent}
          onSubmit={submit}
        />
      )}
      {phase === 'result' && result && <Result result={result} answers={answers} onRetake={start} />}
    </>
  )
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardCheck className="size-5 text-primary" /> Trước khi bắt đầu
        </CardTitle>
        <CardDescription>Không cần ôn trước – hãy trả lời thật để có gợi ý chính xác.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 text-sm">
        <p>Bài test chia thành 4 nhóm tương ứng giai đoạn 1–4 của lộ trình (mỗi nhóm 3–4 câu).</p>
        <p>
          Giai đoạn gợi ý là nhóm đầu tiên bạn đạt dưới {Math.round(PASS_RATIO * 100)}%. Nếu đạt hết, bạn có thể đi thẳng
          tới giai đoạn 5 – chứng chỉ TESOL.
        </p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Button size="lg" onClick={onStart}>
          Bắt đầu làm bài <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  )
}

function Quiz({ current, answers, onAnswer, onMove, onSubmit }: {
  current: number
  answers: Record<string, number>
  onAnswer: (qid: string, value: number) => void
  onMove: (index: number) => void
  onSubmit: () => void
}) {
  const q = questions[current]
  const answeredCount = Object.keys(answers).length
  const isLast = current === questions.length - 1
  const selected = answers[q.id]

  return (
    <div className="max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <Progress value={((current + 1) / questions.length) * 100} className="h-1.5" aria-label="Tiến độ làm bài" />
        <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
          {current + 1}/{questions.length}
        </span>
      </div>
      <Card>
        <CardHeader>
          <Badge variant="secondary" className="mb-1">
            Nhóm {q.stage}: {stages[q.stage - 1].title}
          </Badge>
          <CardTitle className="text-lg leading-snug">{q.prompt}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            key={q.id}
            value={selected === undefined ? '' : String(selected)}
            onValueChange={(v) => onAnswer(q.id, Number(v))}
            className="gap-2"
          >
            {q.options.map((option, i) => (
              <Label
                key={option}
                htmlFor={`${q.id}-${i}`}
                className={cn(
                  'flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 font-normal transition-colors hover:bg-muted',
                  selected === i && 'border-primary bg-primary/5',
                )}
              >
                <RadioGroupItem id={`${q.id}-${i}`} value={String(i)} />
                {option}
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="justify-between border-t pt-4">
          <Button variant="ghost" disabled={current === 0} onClick={() => onMove(current - 1)}>
            <ArrowLeft /> Câu trước
          </Button>
          {isLast ? (
            <Button onClick={onSubmit} disabled={answeredCount < questions.length}>
              Nộp bài ({answeredCount}/{questions.length})
            </Button>
          ) : (
            <Button onClick={() => onMove(current + 1)} disabled={selected === undefined}>
              Câu tiếp <ArrowRight />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

function Result({ result, answers, onRetake }: {
  result: TestResult
  answers: Record<string, number>
  onRetake: () => void
}) {
  const stage = stages[result.recommendedStage - 1]
  const hasAnswers = Object.keys(answers).length > 0

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <Card className="h-fit">
        <CardHeader>
          <CardDescription>
            Làm ngày {new Date(result.date).toLocaleDateString('vi-VN')} · Đúng {result.correct}/{result.total} câu
          </CardDescription>
          <CardTitle className="text-xl">
            Gợi ý: bắt đầu từ Giai đoạn {stage.id} – {stage.title}
          </CardTitle>
          <CardDescription>{stage.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {result.scores.map((s) => {
            const pct = Math.round((s.correct / s.total) * 100)
            const pass = s.correct / s.total >= PASS_RATIO
            return (
              <div key={s.stage}>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span>
                    Nhóm {s.stage}: {stages[s.stage - 1].title}
                  </span>
                  <span className={cn('tabular-nums', pass ? 'text-primary' : 'text-muted-foreground')}>
                    {s.correct}/{s.total}
                  </span>
                </div>
                <Progress value={pct} className="h-2" aria-label={`Điểm nhóm ${s.stage}`} />
              </div>
            )
          })}
        </CardContent>
        <CardFooter className="flex-wrap gap-2 border-t pt-4">
          <Button asChild>
            <Link to={`/roadmap?stage=${stage.id}`}>
              Bắt đầu từ đây <ArrowRight />
            </Link>
          </Button>
          <Button variant="outline" onClick={onRetake}>
            <RotateCcw /> Làm lại
          </Button>
        </CardFooter>
      </Card>

      {hasAnswers ? (
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-base">Xem lại đáp án</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="multiple">
              {questions.map((q, i) => {
                const correct = answers[q.id] === q.answer
                return (
                  <AccordionItem key={q.id} value={q.id}>
                    <AccordionTrigger>
                      <span className="flex items-start gap-2 text-left">
                        {correct ? (
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        ) : (
                          <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                        )}
                        <span>
                          {i + 1}. {q.prompt}
                        </span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-1 pl-6 text-sm">
                      {!correct && (
                        <p className="text-muted-foreground">Bạn chọn: {q.options[answers[q.id]]}</p>
                      )}
                      <p>
                        Đáp án: <span className="font-medium">{q.options[q.answer]}</span>
                      </p>
                      <p className="text-muted-foreground">{q.explanation}</p>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </CardContent>
        </Card>
      ) : (
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-base">Xem lại đáp án</CardTitle>
            <CardDescription>Chi tiết từng câu chỉ hiện ngay sau khi làm bài. Làm lại để xem giải thích.</CardDescription>
          </CardHeader>
        </Card>
      )}
    </div>
  )
}
