import type { WritingChapter } from './types'

const prompt =
  'In many countries, an increasing number of people are choosing to live alone. Why is this the case? Is this a positive or negative development?'

export const ch5: WritingChapter = {
  id: 'two-part-question',
  number: 5,
  title: 'Dạng bài Two-Part Question / Direct Questions',
  shortTitle: 'Two-Part Question',
  tagline: 'Hai câu hỏi – hai câu trả lời trực diện: mỗi Body trả lời trọn một câu, không bỏ sót, không lạc đề.',
  status: 'Đã hoàn thiện',
  samplePrompt: prompt,
  sections: [
    {
      id: 's1',
      number: 1,
      title: 'Bản chất đề bài & các lỗi chí mạng',
      blocks: [
        { type: 'heading', text: '1.1. Nhận diện đề bài' },
        {
          type: 'p',
          text: 'Đề nêu một hiện tượng rồi đặt **hai câu hỏi trực tiếp (direct questions)** có thể hoàn toàn khác loại. Các tổ hợp thường gặp:',
        },
        {
          type: 'list',
          items: [
            '**Why + Positive/Negative:** "Why is this the case? Is this a positive or negative development?"',
            '**Why + Opinion:** "Why do people...? Do you think this is a good idea?"',
            '**What + How:** "What are the reasons...? How can people be encouraged to...?"',
            '**What + Should:** "What problems might this cause? Should governments...?"',
          ],
        },
        {
          type: 'p',
          text: 'Đây là dạng **"lai"**: mỗi câu hỏi kéo theo một kiểu tư duy khác (giải thích, đánh giá, đề xuất). Theo Band Descriptors, Task Response yêu cầu **"addresses all parts of the task"** – bỏ sót hoặc trả lời mờ nhạt một câu là không thể vượt Band 6.0 TR.',
        },
        { type: 'heading', text: '1.2. Các lỗi chí mạng khiến thí sinh kẹt ở Band 6.0 – 6.5' },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 1: Trả lời lệch – câu hỏi 1 dài, câu hỏi 2 vài dòng (Unbalanced coverage)',
          text: 'Nhiều thí sinh viết 180 từ cho "Why?" rồi hết giờ, câu hỏi 2 chỉ có 2 câu trong Kết bài. Giám khảo ghi nhận câu hỏi 2 **"inadequately covered"** → TR 5.0–6.0 dù ngôn ngữ tốt.',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 2: Trả lời câu hỏi mình muốn chứ không phải câu hỏi được hỏi',
          text: 'Đề hỏi "Why are people living alone?" nhưng thí sinh viết về "advantages of living alone". Pauline Cullen gọi đây là **lỗi chuyển dạng (task shifting)**: lý do (reasons) ≠ lợi ích (benefits). Một người sống một mình **vì** thu nhập tăng, chứ không phải **vì** "họ có tự do" (đó là lợi ích).',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 3: Né câu hỏi đánh giá (Avoiding the evaluative question)',
          text: 'Với "Is this positive or negative?", câu "it has both positive and negative sides" mà không phán quyết là không trả lời câu hỏi. Bạn có thể nhìn hai mặt, nhưng phải kết luận **nhìn chung là tích cực hay tiêu cực**.',
        },
      ],
    },
    {
      id: 's2',
      number: 2,
      title: 'Chiến thuật phân hóa theo từng Band (6.0 – 9.0)',
      blocks: [
        {
          type: 'bandTable',
          rows: [
            {
              criterion: 'Task Response (TR)',
              cells: [
                'Trả lời cả hai câu nhưng một câu sơ sài; có thể nhầm lý do với lợi ích; câu trả lời câu hỏi 2 không rõ ràng.',
                'Trả lời trực tiếp, cân đối cả hai câu hỏi; mỗi câu trả lời có luận điểm được mở rộng; quan điểm rõ ở câu hỏi đánh giá.',
                'Câu trả lời sâu sắc, có phân tầng (kinh tế – xã hội – văn hóa); câu hỏi 2 có đánh giá kèm điều kiện.',
                'Hai câu trả lời được phát triển trọn vẹn, liên kết chặt chẽ với nhau (lý do ở câu 1 làm nền cho đánh giá ở câu 2).',
              ],
            },
            {
              criterion: 'Coherence & Cohesion (CC)',
              cells: [
                'Có chia đoạn nhưng ranh giới giữa hai câu trả lời mờ; từ nối cơ học.',
                'Một Body = một câu hỏi; câu chủ đề nhắc lại chính câu hỏi; liên kết mạch lạc.',
                'Hai đoạn thân bài nối logic, câu chuyển đoạn quy chiếu lý do sang đánh giá.',
                'Cấu trúc hoàn toàn vô hình, người đọc thấy câu trả lời ngay mà không cần tìm.',
              ],
            },
            {
              criterion: 'Lexical Resource (LR)',
              cells: [
                'Lặp từ khóa của đề (live alone, reason, good, bad).',
                'Paraphrase linh hoạt (single-person households, solo living); từ vựng đánh giá (beneficial, detrimental, a welcome shift).',
                'Từ vựng xã hội học chính xác (demographic shift, financial independence, social fragmentation).',
                'Lựa chọn từ ngữ tự nhiên, sắc thái chính xác tuyệt đối.',
              ],
            },
            {
              criterion: 'Grammatical Range & Accuracy (GRA)',
              cells: [
                'Câu phức có lỗi; hay dùng câu đơn "This is because...".',
                'Mệnh đề quan hệ, cấu trúc nguyên nhân (due to, owing to), so sánh chính xác.',
                'Câu chẻ (It is ... that...), mệnh đề phân từ, danh từ hóa thành thạo.',
                'Toàn bộ chính xác, đa dạng tự nhiên.',
              ],
            },
          ],
        },
        { type: 'heading', text: '2.1. Bí quyết trọng tâm để cán mốc Band 7.0' },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Quy tắc "1 câu hỏi = 1 Body = ~110 từ"',
          text: 'Chia thời gian và chữ đều cho hai câu hỏi. Simon Corcoran khuyên: **Body 1 trả lời câu hỏi 1, Body 2 trả lời câu hỏi 2** – không trộn lẫn. Giám khảo tìm thấy câu trả lời ngay câu đầu của mỗi đoạn.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Mở bài trả lời luôn cả hai câu hỏi (Direct Answer Thesis)',
          text: 'Thesis nên trả lời ngắn gọn cả hai: **"This trend is driven mainly by [lý do 1] and [lý do 2], and I believe it is a largely positive development because [lý do]."** – giám khảo chỉ cần đọc Mở bài đã thấy đủ hai câu trả lời.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Phân biệt "Reason" vs "Benefit" bằng phép thử "Because"',
          text: 'Đặt câu: "People live alone **because** ___." Nếu điền được (because they earn more / because they marry later) → là lý do. Nếu chỉ điền được "because they enjoy freedom" → đó là lợi ích, để dành cho Body 2.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Linearthinking: nối Body 1 với Body 2',
          text: 'Lý do ở Body 1 (độc lập tài chính, kết hôn muộn) có thể là nền cho đánh giá ở Body 2 (thể hiện xã hội phát triển, quyền tự chủ của cá nhân). Sự nối kết này là dấu hiệu Band 8–9.',
        },
      ],
    },
    {
      id: 's3',
      number: 3,
      title: 'Cấu trúc bài viết chuẩn học thuật (Blueprint 4 đoạn)',
      blocks: [
        {
          type: 'p',
          text: 'Tổng độ dài: **270 – 310 từ**. Blueprint cho tổ hợp **Why + Positive/Negative**; với các tổ hợp khác, thay câu hỏi tương ứng vào từng Body.',
        },
        {
          type: 'paragraphPlan',
          name: 'Introduction',
          meta: '2 câu · ~45–55 từ · 4 phút',
          sentences: [
            {
              label: 'Câu 1 – Paraphrase hiện tượng',
              detail: 'Diễn đạt lại xu hướng.',
              template: 'The number of people [paraphrase hiện tượng] has risen considerably in many parts of the world.',
            },
            {
              label: 'Câu 2 – Thesis trả lời cả hai câu hỏi',
              detail: 'Trả lời ngắn câu hỏi 1 + quan điểm câu hỏi 2.',
              template: 'This trend is largely driven by [lý do 1] and [lý do 2], and I believe it is a [mostly positive / negative] development.',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Body 1 – Trả lời câu hỏi 1 (Why?)',
          meta: '5 câu · ~105–115 từ · 12 phút',
          sentences: [
            {
              label: 'Câu 1 – Topic sentence trả lời trực tiếp',
              detail: 'Nhắc lại câu hỏi bằng cấu trúc trả lời.',
              template: 'There are two main reasons why [hiện tượng].',
            },
            {
              label: 'Câu 2 – Lý do 1',
              detail: 'Nêu lý do quan trọng nhất.',
              template: 'The first is [lý do 1].',
            },
            {
              label: 'Câu 3 – Giải thích + ví dụ',
              detail: 'Cơ chế dẫn đến hiện tượng.',
              template: 'As [diễn biến], [chủ thể] can now afford to [hành vi], which was [không khả thi] for previous generations.',
            },
            {
              label: 'Câu 4 – Lý do 2',
              detail: 'Lý do thứ hai (khác bản chất: văn hóa/xã hội).',
              template: 'Another factor is the shift in [giá trị/chuẩn mực xã hội].',
            },
            {
              label: 'Câu 5 – Giải thích lý do 2',
              detail: 'Hệ quả dẫn đến hiện tượng.',
              template: 'Because [chủ thể] now [thay đổi], they increasingly [hành vi], as is evident in [ví dụ].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Body 2 – Trả lời câu hỏi 2 (Positive/Negative?)',
          meta: '5–6 câu · ~110–120 từ · 13 phút',
          note: 'Câu đầu tiên phải là câu trả lời. Có thể thừa nhận mặt trái, nhưng phải chốt lại phán quyết.',
          sentences: [
            {
              label: 'Câu 1 – Topic sentence (phán quyết)',
              detail: 'Trả lời thẳng câu hỏi 2.',
              template: 'In my view, this is a largely positive development.',
            },
            {
              label: 'Câu 2 – Lý do chính',
              detail: 'Vì sao tích cực.',
              template: 'Above all, [lý do], which [kết quả trực tiếp].',
            },
            {
              label: 'Câu 3 – Mở rộng + ví dụ',
              detail: 'Hệ quả dài hạn.',
              template: 'This in turn allows people to [hệ quả], as seen in [ví dụ].',
            },
            {
              label: 'Câu 4 – Nhượng bộ',
              detail: 'Thừa nhận mặt tiêu cực.',
              template: 'Admittedly, [mặt tiêu cực] is a genuine concern.',
            },
            {
              label: 'Câu 5 – Bác bỏ & chốt',
              detail: 'Quay về phán quyết.',
              template: 'However, this risk can be reduced by [giải pháp], so it does not outweigh [lợi ích].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Conclusion',
          meta: '1–2 câu · ~35–45 từ · 4 phút',
          sentences: [
            {
              label: 'Tóm tắt hai câu trả lời',
              detail: 'Một vế cho mỗi câu hỏi.',
              template: 'In conclusion, [hiện tượng] mainly reflects [lý do 1] and [lý do 2], and despite [rủi ro], I consider it a [positive] development overall.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      number: 4,
      title: 'Ngân hàng từ vựng & cấu trúc đặc thù',
      blocks: [
        {
          type: 'phrases',
          title: '4.1. Trả lời câu hỏi "Why?" (Explaining reasons)',
          items: [
            { en: 'This trend is largely driven by / attributable to...', vi: 'Xu hướng này phần lớn được thúc đẩy bởi / do...' },
            { en: 'One key factor behind this is...', vi: 'Một yếu tố then chốt đằng sau điều này là...' },
            { en: 'This can be explained by...', vi: 'Điều này có thể được giải thích bởi...' },
            { en: 'owing to / due to / as a result of + N', vi: 'do / bởi vì / là kết quả của + danh từ' },
          ],
        },
        {
          type: 'phrases',
          title: '4.2. Trả lời câu hỏi đánh giá (Positive / Negative / Good idea?)',
          items: [
            { en: 'I regard this as a largely positive / welcome development.', vi: 'Tôi coi đây là một sự phát triển phần lớn tích cực / đáng hoan nghênh.' },
            { en: 'This shift is, on balance, more beneficial than harmful.', vi: 'Xét tổng thể, sự thay đổi này có lợi nhiều hơn có hại.' },
            { en: 'This is a worrying trend that may have detrimental consequences.', vi: 'Đây là xu hướng đáng lo ngại có thể gây hậu quả tiêu cực.' },
            { en: 'The benefits are tempered by the risk of...', vi: 'Lợi ích bị giảm bớt bởi nguy cơ...' },
          ],
        },
        {
          type: 'phrases',
          title: '4.3. Collocation chủ đề sống một mình (ví dụ)',
          items: [
            { en: 'single-person households', vi: 'hộ gia đình một người' },
            { en: 'to gain financial independence', vi: 'đạt được sự độc lập tài chính' },
            { en: 'to delay marriage and parenthood', vi: 'trì hoãn kết hôn và sinh con' },
            { en: 'social isolation / loneliness epidemic', vi: 'sự cô lập xã hội / "đại dịch" cô đơn' },
            { en: 'personal autonomy and privacy', vi: 'quyền tự chủ cá nhân và sự riêng tư' },
          ],
        },
        { type: 'heading', text: '4.4. Bốn cấu trúc câu "ăn điểm" cho dạng Two-Part Question' },
        {
          type: 'structure',
          title: 'Câu chẻ nhấn mạnh lý do (Cleft sentence)',
          formula: 'It is [lý do] that [hiện tượng].',
          example: 'It is the growing financial independence of young professionals that has made solo living possible.',
        },
        {
          type: 'structure',
          title: 'Mệnh đề quan hệ không xác định nối ý',
          formula: '[Mệnh đề], which [hệ quả / bình luận].',
          example: 'Many people now marry in their thirties, which leaves a longer period of adult life spent alone.',
        },
        {
          type: 'structure',
          title: 'So sánh thế hệ (Generational contrast)',
          formula: 'Whereas previous generations + V..., young adults today + V...',
          example: 'Whereas previous generations moved straight from the family home into marriage, young adults today often enjoy a decade of independent living in between.',
        },
        {
          type: 'structure',
          title: 'Danh từ hóa lý do',
          formula: 'Biến câu "because S + V" thành cụm danh từ + động từ nhân quả.',
          before: 'Because people earn more money, they can pay for their own flat.',
          after: 'Rising incomes have made independent living financially viable for millions.',
        },
      ],
    },
    {
      id: 's5',
      number: 5,
      title: 'Phân tích thực chiến: 1 đoạn Body ở 4 mức Band',
      blocks: [
        { type: 'prompt', text: prompt },
        {
          type: 'p',
          text: 'Cùng triển khai **Body 1 – Trả lời câu hỏi "Why is this the case?"** ở 4 mức Band:',
        },
        {
          type: 'bandSamples',
          samples: [
            {
              band: '6.0',
              label: 'Nhầm lý do với lợi ích, liệt kê',
              text: 'There are many reasons why people live alone. Firstly, living alone gives people freedom because they can do what they want. They do not need to share the bathroom or the kitchen with anyone. Secondly, people have more money now so they can rent an apartment. Thirdly, some people do not like to live with their family because they have different opinions. So that is why many people choose to live alone.',
              comments: [
                'Ý 1 ("freedom") là lợi ích chứ không phải lý do – lỗi task shifting.',
                'Ý 2 đúng hướng nhưng chỉ có 1 câu, không giải thích.',
                'Firstly / Secondly / Thirdly + câu kết "So that is why" rất cơ học.',
              ],
            },
            {
              band: '7.0',
              label: 'Hai lý do đúng bản chất, được giải thích rõ',
              text: 'There are two main reasons why more people are living on their own. The first is economic. As incomes have risen in many countries, young professionals can now afford to rent or buy their own homes, which was difficult for previous generations. In cities such as Stockholm, for example, more than half of all households now consist of a single person. Another factor is the change in social attitudes towards marriage. Because many people now focus on their careers and get married later in life, they often spend their twenties and thirties living independently rather than with a partner or family.',
              comments: [
                'Topic sentence trả lời thẳng câu hỏi Why.',
                'Hai lý do khác bản chất (kinh tế – xã hội), mỗi lý do có cơ chế + ví dụ Stockholm.',
                'Không lẫn lợi ích vào phần lý do.',
              ],
            },
            {
              band: '8.0',
              label: 'Phân tầng nguyên nhân, collocation xã hội học',
              text: 'The rise in single-person households can be attributed to both economic and cultural shifts. Economically, rising incomes and the expansion of the urban rental market have made independent living financially viable for a far larger share of the population than ever before. This is particularly evident in Scandinavian capitals, where solo households now outnumber family ones. Culturally, the traditional life script of moving directly from the parental home into marriage has weakened considerably. As people prioritise education and career development, they increasingly delay marriage and parenthood, leaving a prolonged period of adulthood that is often spent living alone by choice rather than circumstance.',
              comments: [
                'Khung "economic – cultural" tạo phân tầng rõ ràng.',
                'Collocation chính xác: financially viable, life script, delay marriage and parenthood.',
                'Cụm kết "by choice rather than circumstance" chuẩn bị nền cho câu hỏi đánh giá ở Body 2.',
              ],
            },
            {
              band: '9.0',
              label: 'Cô đọng, nhân quả nhiều lớp, liên kết với Body 2',
              text: 'This demographic shift reflects the convergence of economic capability and changing cultural expectations. Rising real incomes, coupled with a more fluid urban housing market, have turned solo living from an unaffordable luxury into a realistic option for millions of young professionals. At the same time, the conventional trajectory from parental home to marital home has lost much of its normative force: as education is prolonged and careers take precedence, marriage is deferred, opening up an extended phase of independent adulthood. Tellingly, in cities such as Stockholm, where both conditions are most pronounced, single-person households have become the norm rather than the exception.',
              comments: [
                'Câu chủ đề trừu tượng hóa hai lý do thành "convergence of economic capability and changing cultural expectations".',
                'Danh từ hóa và cụm học thuật: normative force, careers take precedence, extended phase of independent adulthood.',
                'Ví dụ đặt cuối như bằng chứng hội tụ cả hai điều kiện – logic khép kín.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      number: 6,
      title: 'Bài mẫu hoàn chỉnh Band 8.0+',
      blocks: [
        {
          type: 'essay',
          prompt,
          paragraphs: [
            {
              role: 'Introduction',
              text: 'The number of people living on their own has risen considerably in many parts of the world. This trend is largely driven by greater financial independence and changing attitudes towards marriage, and I believe it is a mostly positive development, despite some risk of social isolation.',
            },
            {
              role: 'Body 1',
              text: 'There are two main reasons why single-person households are becoming more common. The first is economic. As incomes have risen and urban rental markets have expanded, young professionals can now afford to rent or buy their own homes, which was rarely possible for previous generations. In Stockholm, for instance, more than half of all households consist of a single person. Another factor is a shift in social attitudes towards marriage. Because many people now prioritise education and careers, they tend to marry later, leaving a longer period of adult life that is often spent living independently by choice rather than necessity.',
            },
            {
              role: 'Body 2',
              text: 'In my view, this is a largely positive development. Above all, living alone gives individuals the space to become self-reliant, as they must manage their own finances, household and daily routines without depending on others. This independence allows people to make life decisions, such as when to marry or where to work, based on their own priorities rather than social pressure. Admittedly, some people who live alone, especially the elderly, may suffer from loneliness, which can harm their mental health. However, this risk can be reduced through community centres and shared activities, so it does not outweigh the personal growth and freedom that solo living offers.',
            },
            {
              role: 'Conclusion',
              text: 'In conclusion, the growing popularity of living alone mainly reflects rising incomes and later marriage, and although it can occasionally lead to isolation, I consider it a beneficial trend overall, as it fosters independence and personal autonomy.',
            },
          ],
        },
      ],
    },
    {
      id: 's7',
      number: 7,
      title: 'Quy trình 40 phút & Checklist tự rà soát',
      blocks: [
        {
          type: 'timeline',
          steps: [
            {
              time: 'Phút 1–5',
              minutes: 5,
              title: 'Tách câu hỏi & phân loại tư duy',
              details: [
                'Đánh số Q1, Q2. Ghi loại tư duy của từng câu: Why = giải thích, Positive/Negative = đánh giá, How = đề xuất.',
                'Áp phép thử "Because" để loại các ý thực chất là lợi ích ra khỏi phần lý do.',
                'Nháp Thesis trả lời ngắn cả Q1 và Q2 trong một câu.',
              ],
            },
            { time: 'Phút 6–9', minutes: 4, title: 'Viết Introduction', details: ['Paraphrase hiện tượng + Direct Answer Thesis.'] },
            { time: 'Phút 10–21', minutes: 12, title: 'Viết Body 1 (Q1)', details: ['Câu đầu trả lời thẳng Q1; 2 lý do khác bản chất.'] },
            {
              time: 'Phút 22–34',
              minutes: 13,
              title: 'Viết Body 2 (Q2)',
              details: ['Câu đầu là phán quyết/câu trả lời Q2; nhượng bộ ngắn rồi chốt lại.'],
            },
            { time: 'Phút 35–37', minutes: 3, title: 'Viết Conclusion', details: ['Một vế tóm tắt cho mỗi câu hỏi.'] },
            { time: 'Phút 38–40', minutes: 3, title: 'Rà soát', details: ['Chạy Checklist bên dưới.'] },
          ],
        },
        {
          type: 'checklist',
          title: 'Checklist rà soát dạng Two-Part Question',
          items: [
            { label: 'All parts', text: 'Cả hai câu hỏi đều được trả lời trực tiếp với độ dài tương đương chưa?' },
            { label: 'Direct answer', text: 'Câu đầu mỗi Body có phải là câu trả lời cho câu hỏi tương ứng không?' },
            { label: 'Reason ≠ Benefit', text: 'Phần "Why" có lẫn lợi ích/hậu quả vào không (phép thử Because)?' },
            { label: 'Verdict', text: 'Câu hỏi đánh giá đã có phán quyết rõ (positive / negative / good idea) chưa?' },
            { label: 'Accuracy', text: 'Kiểm tra thì hiện tại hoàn thành cho xu hướng (has risen), mạo từ, số ít/số nhiều.' },
          ],
        },
      ],
    },
  ],
}
