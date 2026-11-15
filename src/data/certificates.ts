export type Certificate = {
  id: string
  name: string
  fullName: string
  provider: string
  hours: string
  practice: string
  cost: string
  entry: string
  bestFor: string
}

// Chi phí là ước tính tham khảo, thay đổi theo trung tâm, quốc gia và thời điểm.
export const certificates: Certificate[] = [
  {
    id: 'tesol',
    name: 'TESOL',
    fullName: 'Teaching English to Speakers of Other Languages',
    provider: 'Nhiều tổ chức/trường (không có đơn vị cấp duy nhất)',
    hours: '120–150 giờ',
    practice: 'Tùy khóa; nên chọn khóa có 6–10 giờ dạy thực',
    cost: '~ 5–40 triệu VNĐ',
    entry: 'Thường B2–C1, có thể phỏng vấn',
    bestFor: 'Bắt đầu dạy tại trung tâm trong nước hoặc nước ngoài',
  },
  {
    id: 'tefl',
    name: 'TEFL',
    fullName: 'Teaching English as a Foreign Language',
    provider: 'Nhiều tổ chức, phổ biến dạng online',
    hours: '120 giờ (phổ biến)',
    practice: 'Nhiều khóa online không có thực hành',
    cost: '~ 3–15 triệu VNĐ',
    entry: 'Thường B2 trở lên',
    bestFor: 'Dạy online, đi dạy ở nước không yêu cầu cao',
  },
  {
    id: 'celta',
    name: 'CELTA',
    fullName: 'Certificate in Teaching English to Speakers of Other Languages',
    provider: 'Cambridge English (qua trung tâm được ủy quyền)',
    hours: '120 giờ (4–5 tuần full-time)',
    practice: 'Bắt buộc 6 giờ dạy thực có chấm điểm',
    cost: '~ 45–70 triệu VNĐ',
    entry: 'Khoảng C1, có phỏng vấn & bài tập đầu vào',
    bestFor: 'Muốn chứng chỉ được công nhận rộng nhất toàn cầu',
  },
  {
    id: 'tkt',
    name: 'TKT',
    fullName: 'Teaching Knowledge Test',
    provider: 'Cambridge English',
    hours: 'Tự ôn; thi theo module độc lập',
    practice: 'Không có (chỉ thi lý thuyết)',
    cost: '~ 1–2 triệu VNĐ/module',
    entry: 'Khuyến nghị từ B1',
    bestFor: 'Kiểm tra kiến thức nền, bổ trợ hồ sơ',
  },
  {
    id: 'delta',
    name: 'DELTA',
    fullName: 'Diploma in Teaching English to Speakers of Other Languages',
    provider: 'Cambridge English',
    hours: '3 module, vài tháng đến 1–2 năm',
    practice: 'Có (Module 2 – dạy và quan sát)',
    cost: '~ 80–150 triệu VNĐ (cả 3 module)',
    entry: 'Thường yêu cầu khoảng 1 năm kinh nghiệm dạy trở lên',
    bestFor: 'Giáo viên có kinh nghiệm, hướng tới quản lý/đào tạo GV',
  },
]

export type CertStep = {
  id: string
  title: string
  detail: string
}

export const tesolSteps: CertStep[] = [
  { id: 'goal', title: 'Xác định mục tiêu', detail: 'Dạy ở đâu, đối tượng nào, khi nào bắt đầu? Mục tiêu quyết định loại chứng chỉ.' },
  { id: 'english', title: 'Kiểm tra trình độ tiếng Anh', detail: 'Đảm bảo đạt B2–C1 (IELTS ~6.5+). Nếu chưa, ưu tiên nâng trình độ trước.' },
  { id: 'research', title: 'So sánh & chọn khóa học', detail: 'Tiêu chí: ≥120 giờ, có teaching practice, giảng viên đủ chuẩn, kiểm định minh bạch.' },
  { id: 'prepare', title: 'Ôn kiến thức nền', detail: 'Hoàn thành giai đoạn 1–4 của lộ trình này: thuật ngữ, phương pháp, giáo án.' },
  { id: 'apply', title: 'Nộp hồ sơ & phỏng vấn', detail: 'Chuẩn bị CV, bài tập đầu vào (thường về ngữ pháp & phát âm), phỏng vấn ngắn.' },
  { id: 'course', title: 'Học & làm bài tập', detail: 'Tham gia đầy đủ, nộp assignment đúng hạn, đọc kỹ tiêu chí chấm.' },
  { id: 'tp', title: 'Teaching practice', detail: 'Soạn giáo án chi tiết, dạy, nhận feedback, viết self-evaluation, áp dụng action points.' },
  { id: 'certificate', title: 'Nhận chứng chỉ & xây hồ sơ', detail: 'Cập nhật CV, quay video dạy mẫu, xin thư giới thiệu từ tutor.' },
  { id: 'job', title: 'Ứng tuyển & tiếp tục phát triển', detail: 'Bắt đầu dạy, ghi nhật ký giảng dạy, lên kế hoạch TKT/CELTA/DELTA.' },
]
