# Sư phạm tiếng Anh

Website tự học kỹ năng giảng dạy tiếng Anh và chuẩn bị chứng chỉ TESOL.

## Chạy

```bash
npm install
npm run dev      # mở http://localhost:5173
npm run build    # build ra thư mục dist/
```

## Tính năng

- **Lộ trình** 5 giai đoạn (nền tảng → phương pháp → kỹ năng → quản lý lớp & giáo án → chứng chỉ TESOL), tick bài đã học.
- **Bài học**: mục tiêu, kiến thức chính, ví dụ lớp học, bài tập thực hành, tài liệu tham khảo, ghi chú cá nhân. Chuyển được **Tiếng Việt / English / Song ngữ**.
- **Thuật ngữ Anh – Việt**: 105 thuật ngữ sư phạm, tìm kiếm không dấu, lọc theo giai đoạn, đánh dấu đã thuộc, chế độ tự kiểm tra.
- **Bài test xếp trình độ** 15 câu, gợi ý giai đoạn nên bắt đầu.
- **Chứng chỉ**: so sánh TESOL / TEFL / CELTA / TKT / DELTA và checklist các bước lấy TESOL.

Tiến độ, ghi chú và kết quả test lưu trong `localStorage` của trình duyệt.

## Thêm / sửa nội dung

- Bài học: `src/data/roadmap.ts` (bản tiếng Anh: `src/data/roadmap.en.ts`)
- Thuật ngữ: `src/data/glossary.ts`
- Câu hỏi test: `src/data/placementTest.ts`
- Chứng chỉ & checklist: `src/data/certificates.ts`

Stack: Vite, React, TypeScript, Tailwind CSS v4, shadcn/ui (Radix), lucide-react, react-router (HashRouter).
