export type Resource = {
  label: string
  url: string
}

export type KeyPoint = {
  term: string
  detail: string
}

export type Lesson = {
  id: string
  title: string
  minutes: number
  objectives: string[]
  summary: string
  keyPoints: KeyPoint[]
  example: string
  practice: string[]
  resources: Resource[]
}

export type Module = {
  id: string
  title: string
  description: string
  lessons: Lesson[]
}

export type Stage = {
  id: number
  title: string
  subtitle: string
  description: string
  weeks: string
  modules: Module[]
}
