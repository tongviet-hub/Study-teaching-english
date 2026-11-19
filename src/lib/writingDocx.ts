// Dựng file Word cho giáo trình Writing Task 2. Import tương đối để script Node cũng dùng được.
import {
  AlignmentType,
  BorderStyle,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
  type ParagraphChild,
} from 'docx'
import { BANDS, countWords, writingBook, type Block, type WritingChapter } from '../data/writing'

const FONT = 'Times New Roman'

function runs(text: string, base: { italics?: boolean; bold?: boolean; color?: string } = {}): ParagraphChild[] {
  return text
    .split(/(\*\*[^*]+\*\*|\[[^\]]+\])/g)
    .filter(Boolean)
    .map((part) => {
      if (part.startsWith('**') && part.endsWith('**')) return new TextRun({ text: part.slice(2, -2), ...base, bold: true })
      if (part.startsWith('[') && part.endsWith(']')) return new TextRun({ text: part, ...base, color: '1F4E99' })
      return new TextRun({ text: part, ...base })
    })
}

const para = (text: string, opts: { italics?: boolean; bold?: boolean; indent?: number } = {}) =>
  new Paragraph({
    children: runs(text, { italics: opts.italics, bold: opts.bold }),
    spacing: { after: 120 },
    indent: opts.indent ? { left: opts.indent } : undefined,
  })

const bullet = (text: string, level = 0, base: { italics?: boolean } = {}) =>
  new Paragraph({ children: runs(text, base), bullet: { level }, spacing: { after: 60 } })

const numbered = (text: string, ref: string) =>
  new Paragraph({ children: runs(text), numbering: { reference: ref, level: 0 }, spacing: { after: 60 } })

const label = (text: string) =>
  new Paragraph({ children: [new TextRun({ text, bold: true })], spacing: { before: 120, after: 60 } })

function cell(text: string, header = false) {
  return new TableCell({
    children: [new Paragraph({ children: runs(text, { bold: header }) })],
    shading: header ? { type: ShadingType.CLEAR, color: 'auto', fill: 'D9E2F3' } : undefined,
    margins: { top: 60, bottom: 60, left: 80, right: 80 },
  })
}

let numberingCount = 0

function blockToDocx(block: Block, numberingRefs: string[]): (Paragraph | Table)[] {
  switch (block.type) {
    case 'heading':
      return [new Paragraph({ text: block.text, heading: HeadingLevel.HEADING_3, spacing: { before: 200, after: 100 } })]
    case 'p':
      return [para(block.text)]
    case 'list': {
      if (!block.ordered) return block.items.map((i) => bullet(i))
      const ref = `num-${numberingCount++}`
      numberingRefs.push(ref)
      return block.items.map((i) => numbered(i, ref))
    }
    case 'callout': {
      const prefix = block.tone === 'warn' ? '⚠ ' : block.tone === 'tip' ? '★ ' : 'ℹ '
      return [
        new Paragraph({
          children: [...runs(prefix + block.title, { bold: true })],
          spacing: { before: 120, after: 60 },
          border: { left: { style: BorderStyle.SINGLE, size: 18, color: block.tone === 'warn' ? 'C0392B' : '2E8B57', space: 8 } },
        }),
        new Paragraph({
          children: runs(block.text),
          spacing: { after: 120 },
          border: { left: { style: BorderStyle.SINGLE, size: 18, color: block.tone === 'warn' ? 'C0392B' : '2E8B57', space: 8 } },
        }),
      ]
    }
    case 'template':
      return [label(block.label), para(block.text, { italics: true, indent: 360 })]
    case 'bandTable':
      return [
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({ tableHeader: true, children: [cell('Tiêu chí chấm', true), ...BANDS.map((b) => cell(`Band ${b}`, true))] }),
            ...block.rows.map(
              (r) => new TableRow({ children: [cell(`**${r.criterion}**`), ...BANDS.map((_, i) => cell(r.cells[i] ?? ''))] }),
            ),
          ],
        }),
        new Paragraph({ text: '' }),
      ]
    case 'paragraphPlan':
      return [
        new Paragraph({
          text: `${block.name.toUpperCase()} (${block.meta})`,
          heading: HeadingLevel.HEADING_3,
          spacing: { before: 200, after: 80 },
        }),
        ...(block.note ? [para(`Lưu ý sống còn: ${block.note}`, { italics: true })] : []),
        ...block.sentences.flatMap((s) => [
          bullet(`**${s.label}:** ${s.detail}`),
          bullet(`Mẫu: ${s.template}`, 1, { italics: true }),
        ]),
      ]
    case 'phrases':
      return [label(block.title), ...block.items.map((i) => bullet(`${i.en} (${i.vi})`))]
    case 'structure':
      return [
        label(block.title),
        bullet(`Công thức: ${block.formula}`),
        ...(block.example ? [bullet(`Ví dụ: ${block.example}`, 0, { italics: true })] : []),
        ...(block.before ? [bullet(`Thay vì viết (Band 6.0): ${block.before}`)] : []),
        ...(block.after ? [bullet(`Chuyển thành (Band 7.5+): ${block.after}`)] : []),
      ]
    case 'prompt':
      return [label('Đề bài:'), para(`"${block.text}"`, { italics: true, indent: 360 })]
    case 'bandSamples':
      return block.samples.flatMap((s) => [
        new Paragraph({
          children: [new TextRun({ text: `Mức Band ${s.band} (${s.label}):`, bold: true, color: '1F4E99' })],
          spacing: { before: 200, after: 80 },
        }),
        para(s.text, { indent: 360 }),
        label('Nhận xét của Giáo sư:'),
        ...s.comments.map((c) => bullet(c)),
      ])
    case 'essay': {
      const words = block.paragraphs.reduce((n, p) => n + countWords(p.text), 0)
      return [
        label('Đề bài:'),
        para(block.prompt, { italics: true }),
        label(`Bài viết hoàn chỉnh (${words} từ):`),
        ...block.paragraphs.map(
          (p) => new Paragraph({ children: [new TextRun(p.text)], spacing: { after: 160 }, alignment: AlignmentType.JUSTIFIED }),
        ),
      ]
    }
    case 'timeline':
      return [
        label('Phân bổ thời gian vàng (40 phút):'),
        ...block.steps.flatMap((s) => [bullet(`**${s.time} – ${s.title}**`), ...s.details.map((d) => bullet(d, 1))]),
      ]
    case 'checklist':
      return [label(block.title), ...block.items.map((i) => bullet(`☐ **${i.label}:** ${i.text}`))]
    default:
      return []
  }
}

export function buildWritingDocument(chapters: WritingChapter[]) {
  numberingCount = 0
  const refs: string[] = []
  const body: (Paragraph | Table)[] = [
    new Paragraph({ text: writingBook.title.toUpperCase(), heading: HeadingLevel.TITLE, alignment: AlignmentType.CENTER }),
    new Paragraph({ children: [new TextRun({ text: writingBook.subtitle, italics: true })], alignment: AlignmentType.CENTER, spacing: { after: 240 } }),
    new Paragraph({ text: 'MỤC LỤC HỆ THỐNG GIÁO TRÌNH (MASTER SYLLABUS)', heading: HeadingLevel.HEADING_1 }),
    para('(Tài liệu được thiết kế theo cấu trúc mở để tích hợp toàn bộ các dạng bài IELTS Writing Task 2)', { italics: true }),
    ...chapters.map((c) => bullet(`**CHƯƠNG ${c.number}:** ${c.title} (${c.status})`)),
  ]

  for (const c of chapters) {
    body.push(
      new Paragraph({
        text: `CHƯƠNG ${c.number}: ${c.title.toUpperCase()}`,
        heading: HeadingLevel.HEADING_1,
        pageBreakBefore: true,
      }),
    )
    for (const s of c.sections) {
      body.push(new Paragraph({ text: `${s.number}. ${s.title.toUpperCase()}`, heading: HeadingLevel.HEADING_2, spacing: { before: 240 } }))
      for (const b of s.blocks) body.push(...blockToDocx(b, refs))
    }
  }

  return new Document({
    creator: 'Sư phạm tiếng Anh',
    title: writingBook.title,
    styles: { default: { document: { run: { font: FONT, size: 24 } } } },
    numbering: {
      config: refs.map((reference) => ({
        reference,
        levels: [{ level: 0, format: 'decimal', text: '%1.', alignment: AlignmentType.START }],
      })),
    },
    sections: [{ children: body }],
  })
}

export async function downloadWritingDocx(chapters: WritingChapter[]) {
  const blob = await Packer.toBlob(buildWritingDocument(chapters))
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Giao-trinh-IELTS-Writing-Task-2.docx'
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
