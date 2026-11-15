import { Info } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { certificates, tesolSteps } from '@/data/certificates'
import { progressActions, useProgress } from '@/hooks/useProgress'
import { cn } from '@/lib/utils'

const rows = [
  { key: 'provider', label: 'Đơn vị cấp' },
  { key: 'hours', label: 'Thời lượng' },
  { key: 'practice', label: 'Dạy thực hành' },
  { key: 'cost', label: 'Chi phí ước tính' },
  { key: 'entry', label: 'Yêu cầu đầu vào' },
  { key: 'bestFor', label: 'Phù hợp khi' },
] as const

export function CertificatesPage() {
  const { certSteps } = useProgress()
  const doneCount = tesolSteps.filter((s) => certSteps[s.id]).length

  return (
    <>
      <PageHeader
        eyebrow="Chứng chỉ"
        title="TESOL và các chứng chỉ giảng dạy tiếng Anh"
        description="So sánh nhanh các lựa chọn và checklist từng bước để lấy chứng chỉ TESOL."
      />

      <Tabs defaultValue="steps">
        <TabsList>
          <TabsTrigger value="steps">Các bước lấy TESOL</TabsTrigger>
          <TabsTrigger value="compare">So sánh chứng chỉ</TabsTrigger>
        </TabsList>

        <TabsContent value="steps" className="mt-6">
          <Card className="max-w-3xl">
            <CardHeader>
              <CardTitle>Checklist hành trình TESOL</CardTitle>
              <CardDescription>Tick từng bước khi hoàn thành.</CardDescription>
              <div className="mt-2 flex items-center gap-3">
                <Progress value={(doneCount / tesolSteps.length) * 100} className="h-1.5" aria-label="Tiến độ checklist" />
                <span className="shrink-0 text-xs text-muted-foreground tabular-nums">
                  {doneCount}/{tesolSteps.length}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <ol className="space-y-1">
                {tesolSteps.map((step, i) => {
                  const done = Boolean(certSteps[step.id])
                  return (
                    <li key={step.id}>
                      <label className="flex cursor-pointer gap-3 rounded-lg px-2 py-3 hover:bg-muted">
                        <Checkbox
                          checked={done}
                          onCheckedChange={(v) => progressActions.toggleCertStep(step.id, v === true)}
                          className="mt-0.5"
                        />
                        <span>
                          <span className={cn('text-sm font-medium', done && 'text-muted-foreground line-through')}>
                            {i + 1}. {step.title}
                          </span>
                          <span className="mt-0.5 block text-sm text-muted-foreground">{step.detail}</span>
                        </span>
                      </label>
                    </li>
                  )
                })}
              </ol>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compare" className="mt-6 space-y-4">
          <div className="overflow-x-auto rounded-xl border">
            <Table className="min-w-[860px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-36" />
                  {certificates.map((c) => (
                    <TableHead key={c.id} className="align-top whitespace-normal">
                      <span className="block py-2 text-base font-semibold text-foreground">{c.name}</span>
                      <span className="block pb-2 text-xs font-normal">{c.fullName}</span>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.key}>
                    <TableCell className="font-medium">{row.label}</TableCell>
                    {certificates.map((c) => (
                      <TableCell key={c.id} className="align-top whitespace-normal text-muted-foreground">
                        {c[row.key]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="flex items-start gap-2 text-sm text-muted-foreground">
            <Info className="mt-0.5 size-4 shrink-0" />
            Chi phí và yêu cầu chỉ mang tính tham khảo, thay đổi theo trung tâm và thời điểm – hãy kiểm tra với đơn vị
            tổ chức trước khi đăng ký.
          </p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Mẹo: tin tuyển dụng thường ghi "TESOL/TEFL/CELTA 120h+"</Badge>
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
