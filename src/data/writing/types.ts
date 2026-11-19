// Inline markup dùng trong mọi chuỗi: **đậm** và [chỗ trống] (ô điền trong mẫu câu).

export type Tone = 'warn' | 'tip' | 'note'

export type Block =
  | { type: 'p'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; ordered?: boolean; items: string[] }
  | { type: 'callout'; tone: Tone; title: string; text: string }
  | { type: 'template'; label: string; text: string }
  | { type: 'bandTable'; rows: { criterion: string; cells: string[] }[] }
  | {
      type: 'paragraphPlan'
      name: string
      meta: string
      note?: string
      sentences: { label: string; detail: string; template: string }[]
    }
  | { type: 'phrases'; title: string; items: { en: string; vi: string }[] }
  | { type: 'structure'; title: string; formula: string; example?: string; before?: string; after?: string }
  | { type: 'prompt'; text: string }
  | { type: 'bandSamples'; samples: { band: string; label: string; text: string; comments: string[] }[] }
  | { type: 'essay'; prompt: string; paragraphs: { role: string; text: string }[] }
  | { type: 'timeline'; steps: { time: string; minutes: number; title: string; details: string[] }[] }
  | { type: 'checklist'; title: string; items: { label: string; text: string }[] }

export type BlockType = Block['type']

export type WritingSection = {
  id: string
  number: number
  title: string
  blocks: Block[]
}

export type WritingChapter = {
  id: string
  number: number
  title: string
  shortTitle: string
  tagline: string
  status: string
  samplePrompt: string
  sections: WritingSection[]
}
