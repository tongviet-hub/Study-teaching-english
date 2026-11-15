import { useSyncExternalStore } from 'react'
import type { StageScore } from '@/data/placementTest'

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
  reset() {
    setState(() => emptyState)
  },
}

export function useProgress() {
  return useSyncExternalStore(subscribe, () => state)
}
