import { useMemo } from 'react'
import { sectionKey, writingChapters, type WritingChapter } from '@/data/writing'
import { useProgress } from '@/hooks/useProgress'

// Trộn bản sửa (lưu trong trình duyệt) vào nội dung gốc của giáo trình.
export function applyEdits(chapters: WritingChapter[], edits: Record<string, unknown>) {
  return chapters.map((c) => ({
    ...c,
    sections: c.sections.map((s) => {
      const edited = edits[sectionKey(c.id, s.id)]
      return Array.isArray(edited) ? { ...s, blocks: edited } : s
    }),
  })) as WritingChapter[]
}

export function useWritingChapters() {
  const { writingEdits } = useProgress()
  return useMemo(() => applyEdits(writingChapters, writingEdits), [writingEdits])
}
