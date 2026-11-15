export type Question = {
  id: string
  stage: 1 | 2 | 3 | 4
  prompt: string
  options: string[]
  answer: number
  explanation: string
}

export const questions: Question[] = [
  // Giai đoạn 1 – Nền tảng
  {
    id: 'q1',
    stage: 1,
    prompt: 'Từ nào có nguyên âm KHÁC với các từ còn lại?',
    options: ['ship', 'sit', 'seat', 'bit'],
    answer: 2,
    explanation: '"seat" có nguyên âm dài /iː/, các từ còn lại là /ɪ/. Đây là một minimal pair điển hình (sit – seat).',
  },
  {
    id: 'q2',
    stage: 1,
    prompt: 'Trong câu "I can swim", từ "can" thường được phát âm thế nào?',
    options: ['/kæn/', '/kən/', '/kɑːn/', '/kein/'],
    answer: 1,
    explanation: 'Ở dạng khẳng định không nhấn, "can" dùng weak form với âm schwa: /kən/.',
  },
  {
    id: 'q3',
    stage: 1,
    prompt: '"make a decision", "heavy rain" là ví dụ của…',
    options: ['Idiom', 'Collocation', 'Phrasal verb', 'Compound noun'],
    answer: 1,
    explanation: 'Collocation là kết hợp từ thường đi cùng nhau một cách tự nhiên.',
  },
  {
    id: 'q4',
    stage: 1,
    prompt: 'Theo Krashen, "affective filter" cao có nghĩa là…',
    options: [
      'Người học tiếp nhận input tốt hơn',
      'Người học lo âu, khó tiếp nhận ngôn ngữ',
      'Input quá dễ so với trình độ',
      'Người học chú ý nhiều tới ngữ pháp',
    ],
    answer: 1,
    explanation: 'Lo âu, thiếu động lực làm "bộ lọc cảm xúc" tăng lên, cản trở việc tiếp nhận input.',
  },
  // Giai đoạn 2 – Phương pháp
  {
    id: 'q5',
    stage: 2,
    prompt: 'Hoạt động nào đặc trưng cho Audio-lingual Method?',
    options: ['Dịch đoạn văn sang tiếng mẹ đẻ', 'Substitution drill', 'Thảo luận nhóm tự do', 'Dự án nghiên cứu'],
    answer: 1,
    explanation: 'Audio-lingual dựa trên thuyết hành vi, dùng drill lặp lại và thay thế để hình thành thói quen.',
  },
  {
    id: 'q6',
    stage: 2,
    prompt: 'Một hoạt động "information gap" là hoạt động trong đó…',
    options: [
      'Giáo viên giải thích thông tin còn thiếu',
      'Mỗi học viên có thông tin mà người kia cần',
      'Học viên điền từ còn thiếu vào câu',
      'Học viên tìm thông tin trên Internet',
    ],
    answer: 1,
    explanation: 'Information gap tạo nhu cầu giao tiếp thật: phải hỏi – đáp để lấy thông tin bạn có.',
  },
  {
    id: 'q7',
    stage: 2,
    prompt: 'Thứ tự đúng của khung TTT là…',
    options: ['Teach – Test – Test', 'Test – Teach – Test', 'Task – Teach – Task', 'Teach – Task – Test'],
    answer: 1,
    explanation: 'Test – Teach – Test: kiểm tra trước, dạy phần còn thiếu, rồi kiểm tra lại bằng nhiệm vụ tương tự.',
  },
  {
    id: 'q8',
    stage: 2,
    prompt: 'Trong Task-Based Learning (Willis), phần tập trung vào ngôn ngữ (language focus) diễn ra…',
    options: ['Đầu tiên, trước khi làm task', 'Sau task cycle', 'Không có', 'Xen giữa mỗi câu học viên nói'],
    answer: 1,
    explanation: 'TBL: pre-task → task cycle (task, planning, report) → language focus.',
  },
  // Giai đoạn 3 – Kỹ năng
  {
    id: 'q9',
    stage: 3,
    prompt: 'Câu nào là CCQ tốt cho từ "borrow"?',
    options: [
      'Do you understand "borrow"?',
      'What does "borrow" mean?',
      'Will you give it back?',
      'Can you borrow a pen?',
    ],
    answer: 2,
    explanation: 'CCQ tốt ngắn, dễ trả lời và kiểm tra nét nghĩa cốt lõi (phải trả lại).',
  },
  {
    id: 'q10',
    stage: 3,
    prompt: 'Nhiệm vụ "đọc nhanh trong 2 phút và chọn tiêu đề phù hợp" luyện kỹ năng…',
    options: ['Scanning', 'Gist reading (skimming)', 'Inference', 'Intensive reading'],
    answer: 1,
    explanation: 'Gist/skimming: nắm ý chính toàn bài trong thời gian ngắn.',
  },
  {
    id: 'q11',
    stage: 3,
    prompt: 'Thời điểm thích hợp để phát tài liệu (handout) là…',
    options: [
      'Trước khi hướng dẫn, để học viên đọc trước',
      'Sau khi hướng dẫn và kiểm tra bằng ICQs',
      'Giữa lúc đang hướng dẫn',
      'Không quan trọng',
    ],
    answer: 1,
    explanation: 'Phát trước khi hướng dẫn khiến học viên mải đọc, không nghe. Hướng dẫn → demo → ICQs → phát tài liệu.',
  },
  {
    id: 'q12',
    stage: 3,
    prompt: 'Process writing khác product writing chủ yếu ở chỗ…',
    options: [
      'Chỉ chấm sản phẩm cuối cùng',
      'Chú trọng các bước: lên ý, nháp, góp ý, chỉnh sửa',
      'Không dùng bài mẫu',
      'Chỉ dành cho trình độ cao',
    ],
    answer: 1,
    explanation: 'Process writing nhấn mạnh quá trình viết nhiều bước và chỉnh sửa.',
  },
  // Giai đoạn 4 – Quản lý lớp & giáo án
  {
    id: 'q13',
    stage: 4,
    prompt: 'Main aim nào được viết tốt nhất?',
    options: [
      'To teach the present perfect.',
      'SS will learn grammar.',
      'By the end of the lesson, SS will be able to use the present perfect to talk about life experiences in a class survey.',
      'To finish page 34 of the book.',
    ],
    answer: 2,
    explanation: 'Aim tốt hướng tới học viên, cụ thể về ngôn ngữ, ngữ cảnh và có thể quan sát được.',
  },
  {
    id: 'q14',
    stage: 4,
    prompt: 'Trong hoạt động fluency, cách xử lý lỗi phù hợp nhất là…',
    options: [
      'Ngắt lời sửa ngay mỗi lỗi',
      'Ghi lại lỗi và phản hồi sau hoạt động',
      'Bỏ qua tất cả lỗi',
      'Yêu cầu học viên nói lại từ đầu',
    ],
    answer: 1,
    explanation: 'Delayed feedback giữ dòng giao tiếp mà vẫn giúp học viên cải thiện độ chính xác.',
  },
  {
    id: 'q15',
    stage: 4,
    prompt: '"Exit ticket" cuối giờ là ví dụ của…',
    options: ['Summative assessment', 'Formative assessment', 'Placement test', 'Proficiency test'],
    answer: 1,
    explanation: 'Exit ticket giúp giáo viên biết nhanh mức độ hiểu bài để điều chỉnh buổi sau – formative assessment.',
  },
]

export const PASS_RATIO = 0.75

export type StageScore = { stage: number; correct: number; total: number }

export function scoreTest(answers: Record<string, number>) {
  const byStage = new Map<number, StageScore>()
  for (const q of questions) {
    const s = byStage.get(q.stage) ?? { stage: q.stage, correct: 0, total: 0 }
    s.total += 1
    if (answers[q.id] === q.answer) s.correct += 1
    byStage.set(q.stage, s)
  }
  const scores = [...byStage.values()].sort((a, b) => a.stage - b.stage)
  // Giai đoạn gợi ý: giai đoạn đầu tiên chưa đạt ngưỡng; nếu đạt hết → giai đoạn 5 (chứng chỉ).
  const weak = scores.find((s) => s.correct / s.total < PASS_RATIO)
  const recommendedStage = weak ? weak.stage : 5
  const correct = scores.reduce((n, s) => n + s.correct, 0)
  return { scores, recommendedStage, correct, total: questions.length }
}
