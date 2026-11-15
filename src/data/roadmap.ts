import type { Lesson, Resource, Stage } from './types'

const R = {
  teachingEnglish: { label: 'British Council – TeachingEnglish', url: 'https://www.teachingenglish.org.uk/' },
  cambridgeTeaching: { label: 'Cambridge English – Teaching English', url: 'https://www.cambridgeenglish.org/teaching-english/' },
  tkt: { label: 'Cambridge TKT (Teaching Knowledge Test)', url: 'https://www.cambridgeenglish.org/teaching-english/teaching-qualifications/tkt/' },
  celta: { label: 'Cambridge CELTA', url: 'https://www.cambridgeenglish.org/teaching-english/teaching-qualifications/celta/' },
  delta: { label: 'Cambridge DELTA', url: 'https://www.cambridgeenglish.org/teaching-english/teaching-qualifications/delta/' },
  cefr: { label: 'Council of Europe – CEFR', url: 'https://www.coe.int/en/web/common-european-framework-reference-languages' },
  englishProfile: { label: 'English Vocabulary/Grammar Profile', url: 'https://www.englishprofile.org/' },
  tesolOrg: { label: 'TESOL International Association', url: 'https://www.tesol.org/' },
  ipa: { label: 'Interactive IPA chart', url: 'https://www.ipachart.com/' },
  youglish: { label: 'YouGlish – nghe phát âm trong ngữ cảnh', url: 'https://youglish.com/' },
} satisfies Record<string, Resource>

export const stages: Stage[] = [
  {
    id: 1,
    title: 'Nền tảng',
    subtitle: 'Ngôn ngữ học & thụ đắc ngôn ngữ',
    description:
      'Hiểu tiếng Anh dưới góc nhìn của người dạy: âm, ngữ pháp, từ vựng và cách người học tiếp nhận ngôn ngữ thứ hai.',
    weeks: '3–4 tuần',
    modules: [
      {
        id: 'language-awareness',
        title: 'Language awareness cho giáo viên',
        description: 'Phân tích ngôn ngữ theo form – meaning – use thay vì chỉ "biết dùng".',
        lessons: [
          {
            id: 'phonology-basics',
            title: 'Ngữ âm học cơ bản & bảng IPA',
            minutes: 60,
            objectives: [
              'Đọc và ghi được phiên âm IPA của từ thông dụng',
              'Phân biệt nguyên âm đơn, nguyên âm đôi, phụ âm hữu thanh/vô thanh',
              'Nhận biết trọng âm từ, trọng âm câu và weak forms',
            ],
            summary:
              'Giáo viên cần nghe ra và chỉ ra được lỗi phát âm cụ thể của học viên. Bảng phonemic chart (44 âm của Anh-Anh) là công cụ chính để "nhìn thấy" âm thanh. Bên cạnh từng âm riêng lẻ (segmental), các yếu tố siêu đoạn (suprasegmental) như trọng âm, nhịp điệu, ngữ điệu và nối âm ảnh hưởng đến khả năng nghe hiểu nhiều hơn.',
            keyPoints: [
              { term: 'Phoneme', detail: 'Đơn vị âm nhỏ nhất phân biệt nghĩa: /ʃɪp/ ship vs /ʃiːp/ sheep (minimal pair).' },
              { term: 'Voiced / Voiceless', detail: 'Cặp /b/–/p/, /d/–/t/, /v/–/f/: đặt tay lên cổ họng để cảm nhận dây thanh rung.' },
              { term: 'Word stress', detail: 'PHOtograph – phoTOgrapher – photoGRAphic: trọng âm đổi theo hậu tố.' },
              { term: 'Weak forms & schwa /ə/', detail: '"Can" trong "I can swim" thường đọc là /kən/. Schwa là âm phổ biến nhất tiếng Anh.' },
              { term: 'Connected speech', detail: 'Nối âm (linking), nuốt âm (elision), đồng hóa (assimilation): "did you" → /dɪdʒu/.' },
            ],
            example:
              'Học viên nói "I live in a big sip". Giáo viên viết /ʃ/ và /s/ lên bảng, làm minimal pair drill "ship – sip, she – see, shoe – Sue", cho học viên chỉ vào âm nghe được rồi tự phát âm.',
            practice: [
              'Ghi phiên âm IPA cho 20 từ trong một bài đọc trình độ A2.',
              'Tự ghi âm đoạn 1 phút, đánh dấu weak forms và linking bạn đã dùng.',
              'Liệt kê 5 lỗi phát âm điển hình của người Việt (ví dụ: bỏ âm cuối, /θ/ → /t/) và cách sửa.',
            ],
            resources: [R.ipa, R.youglish, R.teachingEnglish],
          },
          {
            id: 'pedagogical-grammar',
            title: 'Ngữ pháp sư phạm: Form – Meaning – Use',
            minutes: 60,
            objectives: [
              'Phân tích một cấu trúc ngữ pháp theo 3 khía cạnh form, meaning, use',
              'Dự đoán khó khăn (anticipated problems) của học viên',
              'Viết timeline và CCQs cho các thì',
            ],
            summary:
              'Ngữ pháp sư phạm khác ngữ pháp học thuật: mục tiêu không phải liệt kê quy tắc mà là chọn phần cần thiết, diễn đạt đơn giản và dự đoán chỗ học viên sẽ sai. Mỗi điểm ngữ pháp nên được phân tích trước giờ dạy (language analysis) – đây là phần bắt buộc trong giáo án CELTA/TESOL.',
            keyPoints: [
              { term: 'Form', detail: 'Cấu tạo: S + have/has + V3. Gồm khẳng định, phủ định, câu hỏi, dạng rút gọn.' },
              { term: 'Meaning', detail: 'Ý nghĩa cốt lõi: hành động quá khứ có liên hệ/kết quả ở hiện tại.' },
              { term: 'Use', detail: 'Ngữ cảnh dùng: kể trải nghiệm ("Have you ever…?"), tin tức mới ("I\'ve lost my keys").' },
              { term: 'Anticipated problems', detail: 'Tiếng Việt không chia thì → học viên dùng "I have seen him yesterday". Giải pháp: timeline + CCQ.' },
              { term: 'Timeline', detail: 'Hình vẽ trục thời gian giúp học viên "thấy" nghĩa của thì.' },
            ],
            example:
              'Dạy "used to": Ngữ cảnh – ảnh ông nội hồi trẻ hút thuốc, giờ thì không. CCQs: "Did he smoke in the past? (Yes) Does he smoke now? (No) Did he smoke once or many times? (Many times)".',
            practice: [
              'Viết bảng language analysis (form/meaning/use/problems/solutions) cho Present Perfect.',
              'Viết 3 CCQs cho mỗi cấu trúc: "should", "used to", "be going to".',
            ],
            resources: [R.englishProfile, R.teachingEnglish],
          },
          {
            id: 'lexis',
            title: 'Từ vựng: hơn cả nghĩa của từ',
            minutes: 45,
            objectives: [
              'Biết các thông tin cần dạy về một từ (form, meaning, collocation, register…)',
              'Phân biệt từ dạy chủ động (productive) và thụ động (receptive)',
            ],
            summary:
              '"Biết một từ" bao gồm nhiều lớp: cách viết, phát âm, nghĩa, từ loại, collocation, mức độ trang trọng và nghĩa bóng. Giáo viên chọn lọc lớp nào cần dạy tùy trình độ và mục tiêu bài.',
            keyPoints: [
              { term: 'Collocation', detail: '"make a decision", "heavy rain" – kết hợp từ tự nhiên, không đoán được từ quy tắc.' },
              { term: 'Chunks / lexical phrases', detail: '"By the way", "I was wondering if…" – dạy cả cụm như một khối.' },
              { term: 'Register', detail: '"kids" (informal) vs "children" (neutral) vs "offspring" (formal).' },
              { term: 'Productive vs receptive', detail: 'Từ học viên cần dùng được vs chỉ cần hiểu khi đọc/nghe.' },
            ],
            example:
              'Dạy "commute": hình ảnh người đi tàu đến công ty → CCQ "Is it a short trip? Do you do it every day? Is it for holiday?" → drill phát âm /kəˈmjuːt/ → collocation "a long commute", "commute to work".',
            practice: [
              'Chọn 8 từ trong một bài đọc, phân loại productive/receptive và lý giải.',
              'Thiết kế 3 cách truyền đạt nghĩa không cần dịch: tranh, realia, mime/ngữ cảnh.',
            ],
            resources: [R.englishProfile, R.teachingEnglish],
          },
        ],
      },
      {
        id: 'sla',
        title: 'Thụ đắc ngôn ngữ thứ hai (SLA)',
        description: 'Người học tiếp nhận ngôn ngữ như thế nào – cơ sở để chọn phương pháp.',
        lessons: [
          {
            id: 'sla-theories',
            title: 'Krashen, Input, Output & Interaction',
            minutes: 60,
            objectives: [
              'Tóm tắt 5 giả thuyết của Krashen',
              'Giải thích vai trò của comprehensible input, output và tương tác',
              'Liên hệ lý thuyết với hoạt động trên lớp',
            ],
            summary:
              'Không có lý thuyết nào giải thích trọn vẹn việc học ngoại ngữ, nhưng chúng gợi ý những nguyên tắc chung: người học cần nhiều input dễ hiểu, cơ hội tạo output có ý nghĩa, tương tác để "thương lượng nghĩa" và sự chú ý tới hình thức ngôn ngữ (noticing).',
            keyPoints: [
              { term: 'i + 1 (Krashen)', detail: 'Input hơi cao hơn trình độ hiện tại một chút giúp tiến bộ.' },
              { term: 'Affective filter', detail: 'Lo âu, thiếu tự tin làm "đóng" khả năng tiếp nhận → lớp học cần an toàn.' },
              { term: 'Output hypothesis (Swain)', detail: 'Khi phải nói/viết, người học nhận ra lỗ hổng của mình.' },
              { term: 'Interaction hypothesis (Long)', detail: 'Hỏi lại, làm rõ nghĩa trong hội thoại thúc đẩy tiếp thu.' },
              { term: 'Noticing (Schmidt)', detail: 'Phải "để ý" một hình thức thì mới học được nó.' },
            ],
            example:
              'Trước khi cho học viên nói về kỳ nghỉ, giáo viên kể chuyện kỳ nghỉ của mình (input), học viên ghi lại các cụm từ nghe được (noticing), sau đó kể cho bạn và trả lời câu hỏi của bạn (output + interaction).',
            practice: [
              'Viết 1 đoạn (200 từ) phản tỉnh: việc học tiếng Anh của bạn khớp với giả thuyết nào?',
              'Với mỗi giả thuyết, đề xuất 1 hoạt động lớp học minh họa.',
            ],
            resources: [R.teachingEnglish, R.tesolOrg],
          },
          {
            id: 'learner-differences',
            title: 'Người học: động lực, độ tuổi, trình độ CEFR',
            minutes: 45,
            objectives: [
              'Mô tả các cấp độ CEFR A1–C2 bằng "can-do statements"',
              'Phân biệt động lực nội tại/ngoại tại và cách nuôi dưỡng',
              'Nêu khác biệt khi dạy trẻ em, thiếu niên và người lớn',
            ],
            summary:
              'Cùng một giáo án có thể thành công ở lớp này và thất bại ở lớp khác. Giáo viên cần phân tích người học: trình độ (CEFR), mục tiêu, độ tuổi, phong cách học, nền văn hóa và động lực để điều chỉnh nội dung.',
            keyPoints: [
              { term: 'CEFR', detail: 'Khung 6 bậc A1–C2 mô tả năng lực bằng điều người học "có thể làm".' },
              { term: 'Intrinsic motivation', detail: 'Học vì thích, vì thấy ý nghĩa – bền vững hơn động lực điểm số.' },
              { term: 'Needs analysis', detail: 'Khảo sát đầu khóa: học để làm gì, khó khăn gì, thích học thế nào.' },
            ],
            example:
              'Lớp người đi làm cần tiếng Anh để họp: thay vì bài đọc về động vật, giáo viên dùng email công việc thật làm ngữ liệu – vẫn dạy cùng điểm ngữ pháp.',
            practice: [
              'Soạn bảng needs analysis 8 câu hỏi cho một lớp người lớn.',
              'Đọc can-do statements của B1 và tự đánh giá một học viên giả định.',
            ],
            resources: [R.cefr, R.englishProfile],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Phương pháp giảng dạy',
    subtitle: 'Từ GTM đến CLT & TBLT',
    description:
      'Nắm lịch sử và đặc điểm các phương pháp chính để chọn khung bài học phù hợp với mục tiêu.',
    weeks: '3 tuần',
    modules: [
      {
        id: 'methods-overview',
        title: 'Lịch sử các phương pháp',
        description: 'Mỗi phương pháp ra đời để giải quyết hạn chế của phương pháp trước.',
        lessons: [
          {
            id: 'traditional-methods',
            title: 'GTM, Direct Method & Audio-lingual',
            minutes: 45,
            objectives: [
              'Mô tả đặc điểm, ưu – nhược điểm của 3 phương pháp truyền thống',
              'Nhận ra dấu vết của chúng trong lớp học Việt Nam hiện nay',
            ],
            summary:
              'Grammar-Translation (GTM) tập trung dịch và quy tắc, phù hợp đọc hiểu văn bản nhưng yếu về giao tiếp. Direct Method cấm tiếng mẹ đẻ, dạy qua hình ảnh và hỏi đáp. Audio-lingual dựa trên thuyết hành vi: lặp lại, drill, hình thành thói quen – còn hữu ích cho phát âm và độ chính xác.',
            keyPoints: [
              { term: 'GTM', detail: 'Dịch câu, học thuộc quy tắc và danh sách từ. Giáo viên là trung tâm.' },
              { term: 'Direct Method', detail: 'Chỉ dùng ngôn ngữ đích, ngữ pháp học quy nạp.' },
              { term: 'Audio-lingual', detail: 'Drill lặp lại, thay thế (substitution drill), sửa lỗi ngay lập tức.' },
            ],
            example:
              'Substitution drill: GV: "I go to school by bus. – Train." HV: "I go to school by train." GV: "Bike." HV: "I go to school by bike."',
            practice: [
              'Lập bảng so sánh 3 phương pháp: mục tiêu, vai trò GV, vai trò HV, kỹ năng chú trọng.',
              'Viết 1 substitution drill 6 lượt cho cấu trúc "There is/are".',
            ],
            resources: [R.teachingEnglish],
          },
          {
            id: 'clt',
            title: 'Communicative Language Teaching (CLT)',
            minutes: 60,
            objectives: [
              'Giải thích khái niệm communicative competence',
              'Thiết kế hoạt động có information gap',
              'Cân bằng accuracy và fluency',
            ],
            summary:
              'CLT coi ngôn ngữ là công cụ giao tiếp. Hoạt động tốt có mục đích thật, có khoảng trống thông tin (information gap) và cho phép học viên chọn ngôn ngữ. Giáo viên là người hướng dẫn (facilitator), giảm thời gian mình nói (TTT) và tăng thời gian học viên nói (STT).',
            keyPoints: [
              { term: 'Communicative competence', detail: 'Gồm năng lực ngữ pháp, ngôn bản, chiến lược và ngôn ngữ xã hội.' },
              { term: 'Information gap', detail: 'A có thông tin B cần và ngược lại → buộc phải giao tiếp.' },
              { term: 'Accuracy vs Fluency', detail: 'Hoạt động độ chính xác (sửa lỗi ngay) vs độ trôi chảy (sửa lỗi sau).' },
              { term: 'TTT / STT', detail: 'Teacher Talking Time / Student Talking Time.' },
            ],
            example:
              'Spot the difference: A và B mỗi người có một bức tranh phòng khách khác nhau 6 chi tiết, không được xem tranh của nhau, phải hỏi "Is there a lamp next to the sofa?" để tìm điểm khác.',
            practice: [
              'Chuyển một bài tập điền từ trong sách thành hoạt động information gap.',
              'Ghi âm 15 phút dạy thử, ước tính tỉ lệ TTT/STT.',
            ],
            resources: [R.teachingEnglish, R.cambridgeTeaching],
          },
          {
            id: 'tblt-lexical-clil',
            title: 'TBLT, Lexical Approach & CLIL',
            minutes: 60,
            objectives: [
              'Mô tả khung TBL của Jane Willis (pre-task, task cycle, language focus)',
              'Biết khi nào nên dùng Lexical Approach, CLIL',
            ],
            summary:
              'Task-Based Learning đặt nhiệm vụ có kết quả thật (lên kế hoạch chuyến đi, giải quyết vấn đề) làm trung tâm; ngôn ngữ được tập trung sau khi học viên đã thử dùng. Lexical Approach (Michael Lewis) coi ngôn ngữ là tập hợp chunks. CLIL dạy nội dung môn học bằng tiếng Anh.',
            keyPoints: [
              { term: 'Pre-task', detail: 'Giới thiệu chủ đề, kích hoạt từ vựng, nêu nhiệm vụ.' },
              { term: 'Task cycle', detail: 'Task → Planning → Report: học viên làm, chuẩn bị, trình bày.' },
              { term: 'Language focus', detail: 'Analysis + Practice: phân tích ngôn ngữ xuất hiện trong task.' },
              { term: 'CLIL 4Cs', detail: 'Content, Communication, Cognition, Culture.' },
            ],
            example:
              'Task: "Nhóm bạn có 5 triệu đồng tổ chức tiệc cuối năm – lên kế hoạch và thuyết phục cả lớp chọn kế hoạch của nhóm". Sau báo cáo, GV đưa các cụm "We could…", "How about…", "It would be better to…".',
            practice: [
              'Thiết kế 1 task theo khung Willis cho trình độ B1 (ghi rõ outcome).',
              'So sánh PPP và TBL: viết 5 điểm khác biệt.',
            ],
            resources: [R.teachingEnglish, R.tkt],
          },
        ],
      },
      {
        id: 'lesson-frameworks',
        title: 'Khung bài học',
        description: 'Các "bộ khung" giúp bài học có trình tự logic.',
        lessons: [
          {
            id: 'ppp-ttt-esa',
            title: 'PPP, TTT và ESA',
            minutes: 60,
            objectives: [
              'Dựng bài học theo PPP, TTT và ESA',
              'Chọn khung phù hợp với trình độ và mục tiêu',
            ],
            summary:
              'PPP (Presentation – Practice – Production) dễ áp dụng cho người mới dạy và lớp trình độ thấp. TTT (Test – Teach – Test) phù hợp khi học viên đã biết một phần – kiểm tra trước để dạy đúng chỗ thiếu. ESA (Engage – Study – Activate, Jeremy Harmer) linh hoạt, có thể đảo thứ tự (boomerang, patchwork).',
            keyPoints: [
              { term: 'Presentation', detail: 'Ngữ cảnh → làm rõ nghĩa (CCQ) → form → phát âm.' },
              { term: 'Practice', detail: 'Luyện có kiểm soát (controlled): drill, điền từ, ghép câu.' },
              { term: 'Production', detail: 'Luyện tự do (freer): roleplay, thảo luận, viết.' },
              { term: 'TTT', detail: 'Test 1 (task) → Teach (chỗ sai) → Test 2 (task tương tự).' },
              { term: 'ESA', detail: 'Engage (gây hứng thú) – Study (học ngôn ngữ) – Activate (dùng tự do).' },
            ],
            example:
              'PPP – Comparatives: (P) So sánh 2 chiếc điện thoại qua ảnh → "This phone is cheaper than that one" → CCQ + form. (P) Bài tập điền dạng so sánh. (P) Cặp đôi so sánh 2 thành phố họ từng đến.',
            practice: [
              'Viết dàn ý 45 phút cho cùng một điểm ngữ pháp theo PPP và theo TTT.',
              'Xem một video dạy mẫu trên TeachingEnglish và xác định khung bài học.',
            ],
            resources: [R.teachingEnglish, R.celta],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Dạy kỹ năng & hệ thống ngôn ngữ',
    subtitle: '4 kỹ năng + ngữ pháp, từ vựng, phát âm',
    description:
      'Cấu trúc bài dạy Listening, Reading, Speaking, Writing và kỹ thuật làm rõ nghĩa, kiểm tra hiểu.',
    weeks: '4–5 tuần',
    modules: [
      {
        id: 'receptive-skills',
        title: 'Kỹ năng tiếp nhận',
        description: 'Listening & Reading theo khung pre – while – post.',
        lessons: [
          {
            id: 'teaching-reading',
            title: 'Dạy Reading',
            minutes: 60,
            objectives: [
              'Dựng bài Reading theo pre – while – post',
              'Phân biệt gist, scanning, detail, inference',
              'Thiết kế câu hỏi theo độ khó tăng dần',
            ],
            summary:
              'Bài Reading không phải "đọc rồi trả lời câu hỏi". Pre-reading kích hoạt kiến thức nền và xử lý từ vựng chặn đường (blocking vocabulary). While-reading đi từ đọc lướt lấy ý chính (gist) đến đọc chi tiết. Post-reading chuyển sang kỹ năng sản sinh (nói/viết) liên quan đến chủ đề.',
            keyPoints: [
              { term: 'Lead-in', detail: 'Ảnh, câu hỏi cá nhân, dự đoán từ tiêu đề – 3–5 phút.' },
              { term: 'Gist / Skimming', detail: 'Đọc nhanh có giới hạn thời gian để chọn tiêu đề/ý chính.' },
              { term: 'Scanning', detail: 'Tìm thông tin cụ thể: số, tên, ngày.' },
              { term: 'Detailed reading', detail: 'True/False/Not given, câu hỏi mở, inference.' },
              { term: 'Peer check', detail: 'Cho học viên so đáp án theo cặp trước khi chữa cả lớp.' },
            ],
            example:
              'Bài "A day in the life of a nurse": Lead-in – "Would you like to be a nurse? Why?" → Pre-teach "shift, ward" → Gist: chọn 1/3 tiêu đề (2 phút) → Detail: 6 câu T/F → Post: cặp đôi phỏng vấn nhau về một ngày làm việc.',
            practice: [
              'Chọn một bài đọc B1 và soạn đủ 3 giai đoạn, ghi thời gian từng bước.',
              'Viết 2 câu hỏi gist và 5 câu hỏi detail cho cùng bài đọc.',
            ],
            resources: [R.teachingEnglish],
          },
          {
            id: 'teaching-listening',
            title: 'Dạy Listening',
            minutes: 60,
            objectives: [
              'Dựng bài Listening với nhiều lần nghe có mục đích khác nhau',
              'Hỗ trợ kỹ năng nghe từ dưới lên (bottom-up) và trên xuống (top-down)',
            ],
            summary:
              'Listening là kỹ năng gây lo lắng nhất vì không thể "đọc lại". Mỗi lần nghe cần có nhiệm vụ rõ ràng, đưa câu hỏi trước khi nghe. Ngoài hiểu ý (top-down), cần luyện giải mã âm thanh (bottom-up) như nhận diện weak forms, ranh giới từ.',
            keyPoints: [
              { term: 'Top-down', detail: 'Dùng kiến thức nền, ngữ cảnh để dự đoán và hiểu.' },
              { term: 'Bottom-up', detail: 'Nhận diện âm, từ, cụm trong dòng lời nói (dictation, gap-fill).' },
              { term: 'Tapescript', detail: 'Sau khi nghe, cho xem script để học viên "noticing" chỗ không nghe được.' },
            ],
            example:
              'Nghe hội thoại đặt phòng khách sạn: nghe 1 – "Có bao nhiêu người? Họ có đặt được phòng không?" → nghe 2 – điền form đặt phòng → nghe 3 vừa nghe vừa đọc script, gạch chân các cụm lịch sự.',
            practice: [
              'Thiết kế 1 hoạt động micro-listening (bottom-up) 5 phút từ 2 câu trong audio.',
              'Viết 3 nhiệm vụ cho 3 lần nghe của cùng một đoạn audio 2 phút.',
            ],
            resources: [R.teachingEnglish, R.youglish],
          },
        ],
      },
      {
        id: 'productive-skills',
        title: 'Kỹ năng sản sinh',
        description: 'Speaking & Writing – từ có hỗ trợ đến tự do.',
        lessons: [
          {
            id: 'teaching-speaking',
            title: 'Dạy Speaking',
            minutes: 60,
            objectives: [
              'Thiết kế hoạt động nói có mục đích và sự chuẩn bị',
              'Sửa lỗi trong hoạt động fluency mà không làm gián đoạn',
            ],
            summary:
              'Học viên cần được chuẩn bị (ý tưởng + ngôn ngữ) và có thời gian suy nghĩ trước khi nói. Nhiệm vụ cần rõ ràng về kết quả. Trong hoạt động fluency, giáo viên đi quanh lớp, ghi lại lỗi và câu hay rồi phản hồi ở cuối (delayed feedback).',
            keyPoints: [
              { term: 'Rehearsal', detail: 'Cho nói lần 2, lần 3 với bạn khác – độ trôi chảy tăng rõ rệt.' },
              { term: 'Delayed error correction', detail: 'Ghi lỗi lên bảng không nêu tên, cả lớp cùng sửa.' },
              { term: 'Interaction patterns', detail: 'Pairwork, groupwork, mingle, open pairs.' },
            ],
            example:
              'Hoạt động "Find someone who…": mỗi học viên có phiếu 8 câu ("…has been to Da Lat"), đi quanh lớp hỏi "Have you ever…?" để tìm người. Sau đó chia sẻ điều thú vị nhất.',
            practice: [
              'Thiết kế 1 roleplay có role card cho trình độ A2.',
              'Lập mẫu phiếu ghi lỗi (good language / errors) dùng khi monitor.',
            ],
            resources: [R.teachingEnglish],
          },
          {
            id: 'teaching-writing',
            title: 'Dạy Writing: Product & Process',
            minutes: 60,
            objectives: [
              'Phân biệt product writing và process writing',
              'Dùng model text và tiêu chí chấm rõ ràng',
            ],
            summary:
              'Product approach phân tích bài mẫu rồi bắt chước. Process approach chú trọng quá trình: brainstorm → outline → draft → peer review → chỉnh sửa → bản cuối. Kết hợp cả hai (genre approach) thường hiệu quả: học đặc điểm thể loại qua mẫu, rồi viết theo quy trình.',
            keyPoints: [
              { term: 'Model text', detail: 'Bài mẫu để phân tích bố cục, ngôn ngữ đặc trưng thể loại.' },
              { term: 'Peer review', detail: 'Học viên đọc bài bạn theo checklist trước khi nộp.' },
              { term: 'Correction code', detail: 'Ký hiệu như Sp (spelling), T (tense), WO (word order) để học viên tự sửa.' },
            ],
            example:
              'Viết email xin nghỉ phép: phân tích email mẫu (lời chào, lý do, đề nghị, kết thư) → học viên lập dàn ý → viết nháp → đổi bài check theo checklist 5 mục → viết lại.',
            practice: [
              'Tạo bảng correction code 10 ký hiệu và sửa 1 bài viết mẫu bằng nó.',
              'Viết checklist peer review cho thể loại "opinion paragraph".',
            ],
            resources: [R.teachingEnglish, R.cambridgeTeaching],
          },
        ],
      },
      {
        id: 'clarifying-language',
        title: 'Làm rõ ngôn ngữ',
        description: 'Kỹ thuật elicit, CCQs, ICQs, drill.',
        lessons: [
          {
            id: 'ccq-icq',
            title: 'Eliciting, CCQs & ICQs',
            minutes: 45,
            objectives: [
              'Elicit thay vì giải thích',
              'Viết CCQs ngắn, dễ trả lời, không dùng chính từ đang dạy',
              'Kiểm tra hướng dẫn bằng ICQs',
            ],
            summary:
              'Eliciting là kéo kiến thức ra từ học viên bằng gợi ý thay vì tự nói. CCQs (Concept Checking Questions) kiểm tra hiểu nghĩa – "Do you understand?" không phải CCQ. ICQs (Instruction Checking Questions) kiểm tra học viên biết phải làm gì trước khi bắt đầu.',
            keyPoints: [
              { term: 'CCQ tốt', detail: 'Ngắn, đáp án Yes/No hoặc lựa chọn, ngôn ngữ đơn giản hơn từ đang dạy.' },
              { term: 'ICQ', detail: '"Are you writing or speaking?" "Alone or in pairs?" "How many minutes?"' },
              { term: 'Instructions', detail: 'Ngắn – Demo – Phát tài liệu SAU khi hướng dẫn – ICQs.' },
            ],
            example:
              'Từ "borrow": "Is it mine or yours?" (yours) – "Will I give it back?" (yes) – "Do I pay money?" (no).',
            practice: [
              'Viết CCQs cho 10 từ: rent, regret, crowded, should, might, used to, afford, late, almost, wish.',
              'Viết lại một đoạn hướng dẫn dài 60 từ thành ≤ 20 từ + 3 ICQs.',
            ],
            resources: [R.teachingEnglish, R.celta],
          },
          {
            id: 'pronunciation-teaching',
            title: 'Dạy phát âm & drilling',
            minutes: 45,
            objectives: [
              'Tích hợp phát âm vào bài từ vựng/ngữ pháp',
              'Thực hiện choral & individual drill đúng kỹ thuật',
            ],
            summary:
              'Phát âm nên được dạy liên tục, gắn với ngôn ngữ đang học. Drill: GV làm mẫu tự nhiên → cả lớp lặp (choral) → từng cá nhân (individual). Dùng ngón tay, bảng, gõ nhịp để thể hiện trọng âm và nối âm.',
            keyPoints: [
              { term: 'Model naturally', detail: 'Đọc tốc độ tự nhiên, không đọc chậm méo âm.' },
              { term: 'Back-chaining', detail: 'Drill câu dài từ cuối lên: "…yesterday" → "…to the park yesterday" → "I went to the park yesterday".' },
              { term: 'Finger highlighting', detail: 'Mỗi ngón tay là một từ, gập 2 ngón để thể hiện rút gọn "I am → I\'m".' },
            ],
            example:
              'Dạy "What would you like to do?": GV đánh dấu trọng âm trên bảng, back-chain "…to do?" → "…like to do?" → "What would you like to do?", chú ý /wʊdʒə/.',
            practice: [
              'Đánh dấu trọng âm câu và linking cho 5 câu hội thoại.',
              'Quay video tự drill 1 câu bằng back-chaining.',
            ],
            resources: [R.ipa, R.youglish],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Quản lý lớp & soạn giáo án',
    subtitle: 'Từ kế hoạch đến đánh giá',
    description:
      'Soạn giáo án chuẩn, quản lý thời gian, sửa lỗi, đánh giá và thích ứng với từng loại lớp học.',
    weeks: '3–4 tuần',
    modules: [
      {
        id: 'lesson-planning',
        title: 'Soạn giáo án',
        description: 'Mục tiêu SMART, staging, timing, dự trù vấn đề.',
        lessons: [
          {
            id: 'lesson-plan-anatomy',
            title: 'Cấu trúc một giáo án chuẩn',
            minutes: 75,
            objectives: [
              'Viết aims rõ ràng (main aim, subsidiary aim, personal aim)',
              'Chia stage có mục đích (stage aim) và thời gian',
              'Dự trù anticipated problems & solutions',
            ],
            summary:
              'Giáo án TESOL/CELTA thường gồm: thông tin lớp, aims, assumptions, anticipated problems, language analysis, procedure (stage – aim – procedure – interaction – time) và tài liệu. Mỗi stage phải trả lời câu hỏi "Tại sao có bước này?".',
            keyPoints: [
              { term: 'Main aim', detail: '"By the end of the lesson, SS will be able to…" – hướng tới học viên, đo được.' },
              { term: 'Stage aim', detail: 'Mục đích từng bước: "to generate interest", "to check understanding".' },
              { term: 'Interaction', detail: 'T–SS, SS–SS, S–S, S (cá nhân).' },
              { term: 'Flexi-stage', detail: 'Hoạt động dự phòng nếu dư/thiếu thời gian.' },
            ],
            example:
              'Main aim: "By the end of the lesson, SS will be able to use \'should/shouldn\'t\' to give advice about health problems in a roleplay." – rõ ngôn ngữ, ngữ cảnh, và cách chứng minh đạt mục tiêu.',
            practice: [
              'Viết giáo án đầy đủ 45 phút cho trình độ A2 (dùng khung PPP).',
              'Tự rà giáo án bằng câu hỏi: mỗi stage có phục vụ main aim không?',
            ],
            resources: [R.teachingEnglish, R.celta],
          },
        ],
      },
      {
        id: 'classroom-management',
        title: 'Quản lý lớp học',
        description: 'Hướng dẫn, chia nhóm, sửa lỗi và tạo không khí học tập.',
        lessons: [
          {
            id: 'classroom-management-basics',
            title: 'Quản lý lớp: hướng dẫn, nhóm, thời gian',
            minutes: 60,
            objectives: [
              'Sắp xếp chỗ ngồi và chia nhóm linh hoạt',
              'Dùng giọng nói, cử chỉ, ánh mắt hiệu quả',
              'Xử lý học viên quá trầm hoặc lấn át',
            ],
            summary:
              'Quản lý lớp tốt giúp tối đa thời gian học thật. Bao gồm: bố trí chỗ ngồi theo hoạt động, lệnh chia nhóm nhanh, quy ước tín hiệu dừng, monitoring khi học viên làm việc và xây dựng rapport (mối quan hệ tích cực).',
            keyPoints: [
              { term: 'Monitoring', detail: 'Đi quanh lớp, nghe – không can thiệp quá sớm, ghi chú để phản hồi.' },
              { term: 'Grouping', detail: 'Đánh số 1-2-3, ghép trình độ ngang/chênh lệch tùy mục đích.' },
              { term: 'Rapport', detail: 'Nhớ tên, quan tâm đời sống học viên, khen cụ thể.' },
              { term: 'Wait time', detail: 'Đợi 3–5 giây sau câu hỏi trước khi gọi người trả lời.' },
            ],
            example:
              'Học viên A luôn trả lời trước: GV dùng "Think – Pair – Share": nghĩ 1 phút, bàn với bạn, rồi GV chỉ định cặp trình bày – mọi người đều có cơ hội.',
            practice: [
              'Viết 5 tình huống khó trong lớp (dùng điện thoại, im lặng…) và cách xử lý.',
              'Vẽ 3 sơ đồ chỗ ngồi cho 3 loại hoạt động khác nhau.',
            ],
            resources: [R.teachingEnglish],
          },
          {
            id: 'error-correction',
            title: 'Sửa lỗi & phản hồi',
            minutes: 45,
            objectives: [
              'Phân biệt error và mistake',
              'Dùng các kỹ thuật sửa lỗi: recast, elicitation, finger correction',
              'Quyết định khi nào sửa, sửa ai, sửa thế nào',
            ],
            summary:
              'Mistake là lỗi sơ suất học viên tự sửa được; error là lỗi do chưa biết. Không phải lỗi nào cũng cần sửa ngay – phụ thuộc mục tiêu hoạt động (accuracy hay fluency). Ưu tiên để học viên tự sửa, rồi bạn sửa, cuối cùng mới đến giáo viên.',
            keyPoints: [
              { term: 'Recast', detail: 'Nhắc lại câu đúng một cách tự nhiên: "I goed" → "Oh, you went there?"' },
              { term: 'Elicitation', detail: '"Yesterday I…?" – dừng lại để học viên tự hoàn thành.' },
              { term: 'Self → Peer → Teacher', detail: 'Thứ tự ưu tiên sửa lỗi.' },
            ],
            example:
              'HV: "She don\'t like coffee." GV giơ 4 ngón tay, chạm ngón 2 và nhíu mày → HV: "She doesn\'t like coffee."',
            practice: [
              'Phân loại 10 lỗi trong bài nói ghi âm thành error/mistake.',
              'Với mỗi lỗi, chọn kỹ thuật sửa phù hợp và giải thích.',
            ],
            resources: [R.teachingEnglish],
          },
        ],
      },
      {
        id: 'assessment-contexts',
        title: 'Đánh giá & bối cảnh dạy',
        description: 'Kiểm tra – đánh giá và dạy các nhóm người học khác nhau.',
        lessons: [
          {
            id: 'assessment',
            title: 'Đánh giá: formative & summative',
            minutes: 45,
            objectives: [
              'Phân biệt formative và summative assessment',
              'Hiểu các tiêu chí của bài kiểm tra tốt: validity, reliability, practicality',
              'Thiết kế rubric đơn giản cho Speaking/Writing',
            ],
            summary:
              'Formative assessment diễn ra liên tục trong quá trình học để điều chỉnh việc dạy (exit ticket, quan sát, quiz nhanh). Summative đánh giá kết quả cuối giai đoạn. Một bài kiểm tra tốt cần đo đúng thứ cần đo (validity), cho kết quả ổn định (reliability) và khả thi (practicality).',
            keyPoints: [
              { term: 'Exit ticket', detail: 'Cuối giờ học viên viết 1 điều đã học + 1 câu hỏi còn thắc mắc.' },
              { term: 'Washback', detail: 'Ảnh hưởng của bài thi lên việc dạy và học (tích cực hoặc tiêu cực).' },
              { term: 'Rubric', detail: 'Bảng tiêu chí: fluency, accuracy, range, pronunciation – mỗi mục 0–5 điểm.' },
            ],
            example:
              'Cuối bài Present Perfect, học viên viết 2 câu về trải nghiệm của mình lên giấy nhớ dán lên cửa. GV đọc nhanh để biết bài sau cần ôn lại chỗ nào.',
            practice: [
              'Thiết kế rubric 4 tiêu chí cho bài nói 2 phút trình độ B1.',
              'Viết 5 câu hỏi formative nhanh cho bài "Comparatives".',
            ],
            resources: [R.tkt, R.cambridgeTeaching],
          },
          {
            id: 'young-learners-online',
            title: 'Dạy trẻ em & dạy online',
            minutes: 60,
            objectives: [
              'Điều chỉnh hoạt động cho trẻ em (TPR, game, bài hát)',
              'Tổ chức lớp online: breakout rooms, công cụ tương tác',
            ],
            summary:
              'Trẻ em tập trung ngắn, học qua vận động và lặp lại có vui. Total Physical Response (TPR) kết hợp hành động với lời nói. Lớp online cần hướng dẫn rõ hơn, đổi hoạt động thường xuyên và tận dụng chat, bảng trắng, breakout rooms để tăng STT.',
            keyPoints: [
              { term: 'TPR', detail: '"Stand up, touch your nose, jump!" – hiểu qua hành động, chưa bắt nói.' },
              { term: 'Routines', detail: 'Bài hát chào, quy trình cố định giúp trẻ an tâm.' },
              { term: 'Online engagement', detail: 'Bật camera, reaction, poll, chat waterfall (cùng gõ rồi cùng gửi).' },
            ],
            example:
              'Lớp 6 tuổi học con vật: GV nói "Hop like a rabbit!", cả lớp nhảy. Sau đó trò "Simon says" và tô màu tranh con vật vừa học.',
            practice: [
              'Soạn chuỗi 30 phút cho trẻ 7 tuổi với 4 hoạt động đổi nhịp.',
              'Chuyển 1 hoạt động mingle trong lớp thành phiên bản online.',
            ],
            resources: [R.teachingEnglish, R.tkt],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Chứng chỉ TESOL',
    subtitle: 'Chọn khóa, chuẩn bị hồ sơ & teaching practice',
    description:
      'Chọn chương trình phù hợp, chuẩn bị bài tập, dạy thực hành và định hướng phát triển nghề nghiệp.',
    weeks: '4–12 tuần (tùy khóa)',
    modules: [
      {
        id: 'choose-course',
        title: 'Chọn khóa học',
        description: 'Tiêu chí đánh giá một chương trình TESOL đáng tin cậy.',
        lessons: [
          {
            id: 'choose-tesol',
            title: 'Chọn chương trình TESOL phù hợp',
            minutes: 45,
            objectives: [
              'Biết tiêu chuẩn tối thiểu được nhà tuyển dụng chấp nhận (120 giờ, có thực hành)',
              'Kiểm tra kiểm định (accreditation) của nhà cung cấp',
              'So sánh online, offline và hybrid',
            ],
            summary:
              'TESOL không do một tổ chức duy nhất cấp, nên chất lượng dao động lớn. Chuẩn phổ biến được nhà tuyển dụng chấp nhận: tối thiểu 120 giờ, có teaching practice quan sát bởi giảng viên có trình độ, và được kiểm định bởi đơn vị độc lập. Hãy xác định mục tiêu (dạy trung tâm trong nước, đi nước ngoài, dạy online) trước khi chọn.',
            keyPoints: [
              { term: '120 giờ', detail: 'Ngưỡng tối thiểu phổ biến trong tin tuyển dụng.' },
              { term: 'Teaching practice', detail: '6–10 giờ dạy thực có người quan sát và nhận xét – rất được coi trọng.' },
              { term: 'Accreditation', detail: 'Xác minh đơn vị kiểm định là có thật, độc lập; tránh "chứng chỉ mua bán".' },
              { term: 'Yêu cầu đầu vào', detail: 'Thường từ B2–C1 tiếng Anh; một số khóa có phỏng vấn/bài test.' },
            ],
            example:
              'Mục tiêu dạy trung tâm tại Việt Nam trong 1 năm tới → chọn khóa TESOL 120h+ hybrid có teaching practice với học viên thật, giảng viên có DELTA/MA TESOL.',
            practice: [
              'Lập bảng so sánh 3 khóa TESOL bạn tìm được theo: giờ học, thực hành, kiểm định, giá, lịch học.',
              'Viết 5 câu hỏi cần hỏi trung tâm trước khi đăng ký.',
            ],
            resources: [R.tesolOrg, R.celta],
          },
        ],
      },
      {
        id: 'course-success',
        title: 'Hoàn thành khóa học',
        description: 'Bài tập viết, teaching practice và phản tỉnh.',
        lessons: [
          {
            id: 'teaching-practice',
            title: 'Chuẩn bị Teaching Practice (TP)',
            minutes: 60,
            objectives: [
              'Biết tiêu chí quan sát thường dùng khi chấm TP',
              'Viết self-evaluation có chiều sâu sau mỗi buổi',
            ],
            summary:
              'Teaching Practice là phần quan trọng nhất. Người quan sát thường đánh giá: đạt main aim chưa, làm rõ ngôn ngữ, hướng dẫn và ICQs, monitoring, sửa lỗi, cân bằng TTT/STT, quản lý thời gian. Sau mỗi buổi, bạn viết tự đánh giá: điều làm tốt, điều cần cải thiện, hành động cụ thể cho buổi sau.',
            keyPoints: [
              { term: 'Action points', detail: 'Biến góp ý thành hành động: "Give instructions before handing out the worksheet".' },
              { term: 'Self-evaluation', detail: 'Có bằng chứng: "SS completed the task in 4 minutes, showing the instructions were clear."' },
              { term: 'Peer observation', detail: 'Quan sát giáo sinh khác và ghi chép theo tiêu chí.' },
            ],
            example:
              'Feedback từ tutor: "Instructions were too long." → Action point buổi sau: viết hướng dẫn ra giáo án trước, tối đa 3 câu + demo + 2 ICQs.',
            practice: [
              'Quay video 20 phút dạy thử (với bạn bè/người thân), tự quan sát theo checklist.',
              'Viết self-evaluation 300 từ cho buổi dạy thử đó.',
            ],
            resources: [R.celta, R.teachingEnglish],
          },
          {
            id: 'assignments',
            title: 'Các bài tập viết thường gặp',
            minutes: 45,
            objectives: [
              'Biết 4 dạng assignment phổ biến của khóa TESOL/CELTA',
              'Lập kế hoạch thời gian hoàn thành bài tập',
            ],
            summary:
              'Các khóa TESOL chuyên sâu thường có 4 bài viết: (1) Focus on the learner – phân tích người học và nhu cầu; (2) Language related tasks – phân tích ngữ pháp/từ vựng/phát âm; (3) Language skills related tasks – thiết kế bài dạy kỹ năng từ tài liệu thật; (4) Lessons from the classroom – phản tỉnh quá trình học và kế hoạch phát triển.',
            keyPoints: [
              { term: 'Word count', detail: 'Thường 750–1000 từ/bài, bám sát tiêu chí của khóa.' },
              { term: 'Authentic material', detail: 'Tài liệu thật (báo, video, podcast) không viết cho người học.' },
              { term: 'Resubmission', detail: 'Hầu hết khóa cho nộp lại 1 lần nếu chưa đạt.' },
            ],
            example:
              'Language related task: phân tích form/meaning/use/phát âm cho 4 mục ngôn ngữ, mỗi mục viết CCQs và anticipated problems.',
            practice: [
              'Thực hiện thử bài "Language related task" cho 2 cấu trúc bất kỳ.',
              'Lập lịch học 4 tuần cho một khóa intensive.',
            ],
            resources: [R.celta],
          },
        ],
      },
      {
        id: 'career',
        title: 'Phát triển nghề nghiệp',
        description: 'Sau TESOL: TKT, CELTA, DELTA, MA TESOL.',
        lessons: [
          {
            id: 'professional-development',
            title: 'Lộ trình phát triển sau TESOL',
            minutes: 30,
            objectives: [
              'Biết các chứng chỉ nâng cao và thời điểm nên học',
              'Lập kế hoạch phát triển chuyên môn (CPD) 12 tháng',
            ],
            summary:
              'TESOL là điểm khởi đầu. Tùy mục tiêu, bạn có thể thi TKT (kiểm tra kiến thức, không cần dạy thực), học CELTA (chứng chỉ thực hành được công nhận rộng), rồi DELTA hoặc thạc sĩ TESOL/Applied Linguistics sau vài năm kinh nghiệm. CPD gồm đọc sách, dự hội thảo, quan sát đồng nghiệp, nghiên cứu hành động.',
            keyPoints: [
              { term: 'TKT', detail: 'Các module độc lập, kiểm tra kiến thức nền – tốt để ôn lý thuyết.' },
              { term: 'CELTA', detail: '120 giờ + 6 giờ TP, được công nhận rộng rãi quốc tế.' },
              { term: 'DELTA', detail: 'Cấp độ nâng cao, thường yêu cầu khoảng 1 năm kinh nghiệm trở lên.' },
              { term: 'Reflective practice', detail: 'Ghi nhật ký giảng dạy sau mỗi buổi.' },
            ],
            example:
              'Kế hoạch: Tháng 1–3 hoàn thành TESOL → tháng 4–9 dạy part-time + ghi nhật ký → tháng 10 thi TKT Module 1 → năm sau cân nhắc CELTA.',
            practice: [
              'Viết kế hoạch CPD 12 tháng với 1 mục tiêu/quý.',
              'Chọn 2 cuốn sách sư phạm kinh điển (ví dụ của Harmer, Scrivener) và lên lịch đọc.',
            ],
            resources: [R.tkt, R.celta, R.delta],
          },
        ],
      },
    ],
  },
]

export type LessonRef = {
  lesson: Lesson
  stage: Stage
  moduleTitle: string
  index: number
}

export const allLessons: LessonRef[] = stages.flatMap((stage) =>
  stage.modules.flatMap((m) => m.lessons.map((lesson) => ({ lesson, stage, moduleTitle: m.title }))),
).map((ref, index) => ({ ...ref, index }))

export const lessonById = new Map(allLessons.map((ref) => [ref.lesson.id, ref]))

export const stageLessonIds = (stage: Stage) => stage.modules.flatMap((m) => m.lessons.map((l) => l.id))
