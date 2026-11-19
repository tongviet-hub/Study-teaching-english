import { useSyncExternalStore } from 'react'
import type { StageScore } from '@/data/placementTest'
import type { Block } from '@/data/writing/types'

export type TestResult = {
  date: string
  scores: StageScore[]
  recommendedStage: number
  correct: number
  total: number
}

export type LessonLang = 'vi' | 'en' | 'both'

export type ProgressState = {
  completed: Record<string, string>
  notes: Record<string, string>
  certSteps: Record<string, boolean>
  knownTerms: Record<string, boolean>
  lessonLang: LessonLang
  lastLessonId: string | null
  testResult: TestResult | null
  // Giáo trình Writing Task 2: bản sửa ghi đè theo từng phần, phần đã đọc, ô checklist đã tick.
  writingEdits: Record<string, Block[]>
  writingRead: Record<string, string>
  writingChecks: Record<string, boolean>
}

const STORAGE_KEY = 'su-pham-tieng-anh:progress:v1'

const emptyState: ProgressState = {
  completed: {},
  notes: {},
  certSteps: {},
  knownTerms: {},
  lessonLang: 'vi',
  lastLessonId: null,
  testResult: null,
  writingEdits: {},
  writingRead: {},
  writingChecks: {},
}

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? { ...emptyState, ...JSON.parse(raw) } : emptyState
  } catch {
    return emptyState
  }
}

let state = load()
const listeners = new Set<() => void>()

function setState(update: (prev: ProgressState) => ProgressState) {
  state = update(state)
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // Bộ nhớ trình duyệt bị chặn: vẫn giữ trạng thái trong phiên hiện tại.
  }
  listeners.forEach((l) => l())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export const progressActions = {
  toggleLesson(id: string, done: boolean) {
    setState((s) => {
      const completed = { ...s.completed }
      if (done) completed[id] = new Date().toISOString()
      else delete completed[id]
      return { ...s, completed }
    })
  },
  setNote(id: string, text: string) {
    setState((s) => ({ ...s, notes: { ...s.notes, [id]: text } }))
  },
  visitLesson(id: string) {
    if (state.lastLessonId !== id) setState((s) => ({ ...s, lastLessonId: id }))
  },
  toggleCertStep(id: string, done: boolean) {
    setState((s) => ({ ...s, certSteps: { ...s.certSteps, [id]: done } }))
  },
  toggleTerm(id: string, known: boolean) {
    setState((s) => ({ ...s, knownTerms: { ...s.knownTerms, [id]: known } }))
  },
  setLessonLang(lang: LessonLang) {
    setState((s) => ({ ...s, lessonLang: lang }))
  },
  saveTestResult(result: TestResult) {
    setState((s) => ({ ...s, testResult: result }))
  },
  saveWritingSection(key: string, blocks: Block[]) {
    setState((s) => ({ ...s, writingEdits: { ...s.writingEdits, [key]: blocks } }))
  },
  resetWritingSection(key: string) {
    setState((s) => {
      const writingEdits = { ...s.writingEdits }
      delete writingEdits[key]
      return { ...s, writingEdits }
    })
  },
  importWritingEdits(edits: Record<string, Block[]>) {
    setState((s) => ({ ...s, writingEdits: edits }))
  },
  toggleWritingRead(key: string, done: boolean) {
    setState((s) => {
      const writingRead = { ...s.writingRead }
      if (done) writingRead[key] = new Date().toISOString()
      else delete writingRead[key]
      return { ...s, writingRead }
    })
  },
  toggleWritingCheck(key: string, done: boolean) {
    setState((s) => ({ ...s, writingChecks: { ...s.writingChecks, [key]: done } }))
  },
  reset() {
    // Bản sửa giáo trình là nội dung chứ không phải tiến độ, nên được giữ lại.
    setState((s) => ({ ...emptyState, writingEdits: s.writingEdits }))
  },
}

export function useProgress() {
  return useSyncExternalStore(subscribe, () => state)
}
