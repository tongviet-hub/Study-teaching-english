import { ch1 } from './ch1-discuss-both-views'
import { ch2 } from './ch2-opinion'
import { ch3 } from './ch3-adv-disadv'
import { ch4 } from './ch4-causes-solutions'
import { ch5 } from './ch5-two-part'
import type { WritingChapter } from './types'

export * from './types'

export const writingBook = {
  title: 'Giáo trình IELTS Writing Task 2 Toàn diện: Từ nền tảng đến bậc thầy học thuật (Band 6.0 – 9.0)',
  subtitle:
    'Biên soạn theo chuẩn chấm thi chính thức của Cambridge Assessment English, IDP & British Council, kết hợp tư duy của cựu giám khảo Simon Corcoran, chuyên gia khảo thí Pauline Cullen (The Key to IELTS) và Phương pháp Tư duy Tuyến tính (Linearthinking).',
  sourceUrl: 'https://docs.google.com/document/d/1OPNbNJ9s7vWpxvM2L_Qsk0tPRtAULmWWb3_Kc4eJW58/edit',
}

export const writingChapters: WritingChapter[] = [ch1, ch2, ch3, ch4, ch5]

export const chapterById = new Map(writingChapters.map((c) => [c.id, c]))

export const sectionKey = (chapterId: string, sectionId: string) => `${chapterId}:${sectionId}`

export const BANDS = ['6.0', '7.0', '8.0', '9.0'] as const

export function countWords(text: string) {
  return text.trim().split(/\s+/).filter((w) => /[A-Za-zÀ-ỹ0-9]/.test(w)).length
}
