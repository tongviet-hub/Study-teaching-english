import type { WritingChapter } from './types'

const prompt =
  'In many countries, a growing number of people are choosing to work from home rather than commute to an office. Do the advantages of this trend outweigh the disadvantages?'

export const ch3: WritingChapter = {
  id: 'advantages-disadvantages',
  number: 3,
  title: 'Dạng bài Advantages and Disadvantages / Outweigh',
  shortTitle: 'Advantages & Disadvantages',
  tagline: 'Cân hai đĩa cân lợi – hại; với đề "outweigh" phải tuyên bố đĩa nào nặng hơn và chứng minh vì sao.',
  status: 'Đã hoàn thiện',
  samplePrompt: prompt,
  sections: [
    {
      id: 's1',
      number: 1,
      title: 'Bản chất đề bài & các lỗi chí mạng',
      blocks: [
        { type: 'heading', text: '1.1. Nhận diện đề bài – hai biến thể bắt buộc phân biệt' },
        {
          type: 'p',
          text: 'Đề mô tả một **xu hướng, chính sách hoặc hiện tượng** (làm việc từ xa, du học, mua sắm online, sống ở đô thị...) rồi yêu cầu đánh giá mặt lợi – mặt hại. Có hai biến thể với yêu cầu khác nhau hoàn toàn:',
        },
        {
          type: 'list',
          items: [
            '**Biến thể 1 – "Discuss the advantages and disadvantages":** Trình bày cân bằng cả hai mặt. Không bắt buộc nêu ý kiến, nhưng một nhận xét đánh giá ngắn ở Kết bài giúp bài sắc nét hơn.',
            '**Biến thể 2 – "Do the advantages outweigh the disadvantages?":** Đây thực chất là **câu hỏi Opinion**. Bắt buộc tuyên bố rõ mặt nào lớn hơn ngay từ Mở bài và chứng minh **sự chênh lệch trọng số**, không chỉ liệt kê hai bên.',
          ],
        },
        {
          type: 'p',
          text: 'Yêu cầu cốt lõi của đề "outweigh" gồm 3 phần: **(1)** phân tích lợi ích, **(2)** phân tích bất lợi, **(3)** so sánh và phán quyết (verdict) bên nào nặng hơn – kèm lý do tại sao.',
        },
        { type: 'heading', text: '1.2. Các lỗi chí mạng khiến thí sinh kẹt ở Band 6.0 – 6.5' },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 1: Liệt kê hai danh sách mà không cân (Listing without weighing)',
          text: 'Body 1 có 3 lợi ích, Body 2 có 3 bất lợi, Kết bài "the advantages outweigh the disadvantages" mà **không có câu nào giải thích vì sao**. Theo Simon Corcoran, đây là lỗi phổ biến nhất của dạng này: giám khảo chấm "the position is not fully supported" → TR khó vượt 6.0.',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 2: Lợi ích và bất lợi mô tả cho "ai"? (Missing stakeholders)',
          text: 'Thí sinh viết chung chung "it is convenient / it has some problems". Pauline Cullen nhấn mạnh: lợi – hại phải gắn với **đối tượng cụ thể** (người lao động, doanh nghiệp, thành phố, môi trường). Không có đối tượng thì không thể so sánh trọng số.',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 3: Dùng biến thể 1 cho đề biến thể 2 (và ngược lại)',
          text: 'Đề hỏi "outweigh" nhưng thí sinh viết 50/50 và kết "both have pros and cons" → không trả lời câu hỏi (TR tối đa 5.0–6.0). Ngược lại, đề "discuss advantages and disadvantages" mà chỉ viết một phía → bỏ sót một nửa yêu cầu.',
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
                'Đề cập cả lợi và hại nhưng lệch, liệt kê nhiều ý ngắn. Phán quyết "outweigh" xuất hiện cuối bài, không được chứng minh.',
                'Phán quyết rõ từ Mở bài; mỗi mặt có luận điểm được mở rộng; có ít nhất 1 câu so sánh trực tiếp trọng số giữa hai bên.',
                'Phân tích theo đối tượng và thời hạn (ngắn hạn/dài hạn); lập luận thuyết phục vì sao một bên vượt trội.',
                'Đánh giá tinh tế: bất lợi được chứng minh là tạm thời / có thể khắc phục, lợi ích mang tính cấu trúc; phán quyết sắc bén, không kẽ hở.',
              ],
            },
            {
              criterion: 'Coherence & Cohesion (CC)',
              cells: [
                '"The first advantage... The second advantage... The first disadvantage..." – khung liệt kê cơ học.',
                'Mỗi đoạn có nhóm ý thống nhất; dùng từ quy chiếu và từ nối tương phản (whereas, by contrast) hợp lý.',
                'Mạch so sánh xuyên suốt; câu chuyển đoạn nhấn mạnh sự chênh lệch trọng số.',
                'Liên kết vô hình, lập luận cân – so – phán quyết diễn ra liền mạch.',
              ],
            },
            {
              criterion: 'Lexical Resource (LR)',
              cells: [
                'Lặp "advantage / disadvantage / good / bad"; ít từ đánh giá.',
                'Đa dạng danh từ đánh giá (benefit, merit, drawback, downside, pitfall) và collocation chủ đề (flexible working arrangements, cut commuting time).',
                'Ngôn ngữ đo lường chính xác (marginal, substantial, far-reaching, short-lived).',
                'Từ vựng chính xác, tinh tế như văn bản phân tích chính sách.',
              ],
            },
            {
              criterion: 'Grammatical Range & Accuracy (GRA)',
              cells: [
                'Dùng câu so sánh đơn giản, còn lỗi so sánh hơn/kém và mạo từ.',
                'So sánh hơn kép, mệnh đề nhượng bộ, mệnh đề quan hệ chính xác; nhiều câu không lỗi.',
                'Thành thạo cấu trúc so sánh nâng cao (far more ... than, not so much ... as), phân từ, danh từ hóa.',
                'Đa dạng tuyệt đối, chính xác hoàn hảo.',
              ],
            },
          ],
        },
        { type: 'heading', text: '2.1. Bí quyết trọng tâm để cán mốc Band 7.0' },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Quy tắc "Đĩa cân nhẹ trước – đĩa cân nặng sau"',
          text: 'Giống nguyên tắc nhượng bộ ở Chương 1: Body 1 trình bày **mặt bạn cho là nhẹ hơn**, Body 2 trình bày **mặt nặng hơn** và kết thúc bằng câu so sánh. Mạch bài chảy thẳng xuống Kết bài.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Ba tiêu chí "cân" để chứng minh outweigh',
          text: 'Một lợi ích/bất lợi nặng hơn khi nó: **(1) ảnh hưởng nhiều người hơn** (scale), **(2) kéo dài lâu hơn** (duration), hoặc **(3) khó khắc phục hơn** (reversibility). Chỉ cần 1 câu dùng một trong ba tiêu chí này, bài đã có "weighing" thật sự.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Linearthinking: mỗi mặt chỉ 1–2 ý nhưng đi đủ chuỗi',
          text: '**Lợi ích:** Không phải đi lại → tiết kiệm 1–2 giờ/ngày → thời gian cho gia đình, sức khỏe → năng suất và giữ chân nhân viên. Một chuỗi như vậy thuyết phục hơn danh sách "convenient, cheap, flexible, comfortable".',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Câu "verdict" bắt buộc trong Body 2',
          text: 'Chèn câu so sánh trực tiếp: **"These drawbacks, however, are largely manageable, whereas the benefits are both widespread and long-lasting."** – đây là câu giám khảo tìm để cho TR 7.',
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
          text: 'Tổng độ dài: **270 – 310 từ**. Blueprint dưới đây cho đề **"outweigh"** với phán quyết **lợi ích lớn hơn**. Nếu đề là biến thể 1, giữ nguyên cấu trúc, đổi Thesis thành câu định hướng và Kết bài thành nhận xét cân bằng.',
        },
        {
          type: 'paragraphPlan',
          name: 'Introduction',
          meta: '2 câu · ~40–50 từ · 4 phút',
          sentences: [
            {
              label: 'Câu 1 – Paraphrase xu hướng',
              detail: 'Diễn đạt lại hiện tượng/xu hướng của đề.',
              template: 'In recent years, [paraphrase xu hướng] has become increasingly common in [phạm vi].',
            },
            {
              label: 'Câu 2 – Thesis (phán quyết + lý do)',
              detail: 'Nói thẳng bên nào nặng hơn và vì sao.',
              template: 'Although this development brings certain [drawbacks], I believe these are outweighed by [lợi ích cốt lõi] for [đối tượng].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Body 1 – Mặt "nhẹ" (bất lợi)',
          meta: '5 câu · ~100–110 từ · 12 phút',
          sentences: [
            {
              label: 'Câu 1 – Topic sentence',
              detail: 'Thừa nhận bất lợi một cách khách quan.',
              template: 'Admittedly, [xu hướng] is not without its drawbacks, particularly for [đối tượng].',
            },
            {
              label: 'Câu 2 – Bất lợi 1',
              detail: 'Nêu vấn đề chính.',
              template: 'The most significant downside is that [bất lợi 1].',
            },
            {
              label: 'Câu 3 – Giải thích',
              detail: 'Cơ chế gây hại.',
              template: 'Without [yếu tố bị mất], [đối tượng] may [hậu quả trực tiếp], which can lead to [hậu quả dài hạn].',
            },
            {
              label: 'Câu 4 – Bất lợi 2 / ví dụ',
              detail: 'Bổ sung khía cạnh thứ hai hoặc ví dụ.',
              template: 'In addition, [bất lợi 2], as [ví dụ / số liệu hợp lý] suggests.',
            },
            {
              label: 'Câu 5 – Câu "hạ trọng số"',
              detail: 'Gợi ý vì sao bất lợi này có giới hạn.',
              template: 'Nevertheless, these problems are often [temporary / manageable] if [điều kiện].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Body 2 – Mặt "nặng" (lợi ích) + Verdict',
          meta: '5–6 câu · ~110–120 từ · 13 phút',
          sentences: [
            {
              label: 'Câu 1 – Topic sentence',
              detail: 'Chuyển hướng + báo hiệu đây là mặt quan trọng hơn.',
              template: 'However, the benefits of [xu hướng] are far more substantial.',
            },
            {
              label: 'Câu 2 – Lợi ích 1',
              detail: 'Luận điểm mạnh nhất.',
              template: 'First and foremost, [lợi ích 1], which [kết quả trực tiếp].',
            },
            {
              label: 'Câu 3 – Linear explanation + ví dụ',
              detail: 'Đẩy lợi ích đến hệ quả dài hạn.',
              template: 'This in turn [hệ quả dài hạn]; for example, [ví dụ cụ thể].',
            },
            {
              label: 'Câu 4 – Lợi ích 2 (đối tượng khác)',
              detail: 'Mở rộng sang đối tượng thứ hai (doanh nghiệp, xã hội, môi trường).',
              template: 'On a broader scale, [lợi ích 2 cho xã hội/môi trường].',
            },
            {
              label: 'Câu 5 – Verdict sentence',
              detail: 'So sánh trực tiếp hai đĩa cân.',
              template: 'Unlike the drawbacks mentioned above, these advantages are [lasting / widespread] and [khó thay thế].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Conclusion',
          meta: '1–2 câu · ~35–45 từ · 4 phút',
          sentences: [
            {
              label: 'Nhắc lại phán quyết + tiêu chí cân',
              detail: 'Không thêm ý mới.',
              template: 'In conclusion, although [xu hướng] may [tóm tắt bất lợi], I believe its benefits for [đối tượng] clearly outweigh these [manageable] drawbacks.',
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
          title: '4.1. Danh từ & động từ "lợi – hại"',
          items: [
            { en: 'a major benefit / merit / upside of...', vi: 'một lợi ích / ưu điểm lớn của...' },
            { en: 'a considerable drawback / downside / pitfall', vi: 'một nhược điểm / mặt trái / cạm bẫy đáng kể' },
            { en: 'to reap the benefits of...', vi: 'gặt hái lợi ích từ...' },
            { en: 'to pose a threat / challenge to...', vi: 'gây ra mối đe dọa / thách thức cho...' },
            { en: 'to come at a cost / at the expense of...', vi: 'phải trả giá / đánh đổi bằng...' },
          ],
        },
        {
          type: 'phrases',
          title: '4.2. Ngôn ngữ cân trọng số (Weighing language)',
          items: [
            { en: 'The benefits far outweigh the drawbacks.', vi: 'Lợi ích vượt xa bất lợi.' },
            { en: 'These disadvantages are relatively minor / short-lived.', vi: 'Những bất lợi này tương đối nhỏ / ngắn hạn.' },
            { en: 'The advantages are more far-reaching / enduring.', vi: 'Lợi ích có tầm ảnh hưởng sâu rộng / lâu dài hơn.' },
            { en: 'On balance, ... / All things considered, ...', vi: 'Xét tổng thể, ... (dùng trong kết bài)' },
            { en: 'Such drawbacks can be mitigated through...', vi: 'Những bất lợi như vậy có thể được giảm thiểu nhờ...' },
          ],
        },
        {
          type: 'phrases',
          title: '4.3. Collocation chủ đề làm việc từ xa (ví dụ)',
          items: [
            { en: 'flexible working arrangements', vi: 'chế độ làm việc linh hoạt' },
            { en: 'to eliminate the daily commute', vi: 'loại bỏ việc đi lại hằng ngày' },
            { en: 'a sense of isolation / professional isolation', vi: 'cảm giác cô lập / cô lập trong công việc' },
            { en: 'to blur the boundaries between work and home life', vi: 'làm mờ ranh giới giữa công việc và đời sống gia đình' },
            { en: 'to reduce office overheads', vi: 'giảm chi phí vận hành văn phòng' },
          ],
        },
        { type: 'heading', text: '4.4. Bốn cấu trúc câu "ăn điểm" cho dạng Advantages – Disadvantages' },
        {
          type: 'structure',
          title: 'So sánh mức độ với "far / considerably"',
          formula: '[Lợi ích] is far / considerably more [adj] than [bất lợi].',
          example: 'The long-term gains in well-being are considerably more significant than the occasional loss of team spirit.',
        },
        {
          type: 'structure',
          title: 'Mệnh đề tương phản "whereas"',
          formula: '[Bất lợi] tends to be [tạm thời], whereas [lợi ích] is [lâu dài].',
          example: 'Feelings of isolation can be addressed through regular team meetings, whereas the hours saved on commuting accumulate every single day.',
        },
        {
          type: 'structure',
          title: 'Not so much... as... (tinh chỉnh nhận định)',
          formula: 'The problem lies not so much in [A] as in [B].',
          example: 'The problem lies not so much in remote work itself as in the lack of clear communication policies.',
        },
        {
          type: 'structure',
          title: 'Danh từ hóa để cô đọng lợi ích',
          formula: 'Biến chuỗi "because people do X, Y happens" thành chủ ngữ danh từ.',
          before: 'Because people do not have to travel to work, there is less traffic and pollution.',
          after: 'The elimination of the daily commute translates into lighter traffic and cleaner urban air.',
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
          text: 'Cùng triển khai **Body 2 – Lợi ích (mặt nặng hơn) + câu Verdict** ở 4 mức Band:',
        },
        {
          type: 'bandSamples',
          samples: [
            {
              band: '6.0',
              label: 'Liệt kê lợi ích, không có so sánh trọng số',
              text: 'On the other hand, working from home has many advantages. Firstly, people do not need to go to the office, so they can save time and money. Secondly, they can work in a comfortable place and they can wear what they want. Thirdly, companies can save money because they do not need a big office. Finally, it is good for the environment because there are fewer cars on the road. So working from home has more advantages than disadvantages.',
              comments: [
                'Bốn ý liệt kê bằng Firstly–Finally, không ý nào được giải thích sâu.',
                'Câu cuối khẳng định "more advantages" nhưng không chứng minh vì sao nặng hơn – thiếu weighing.',
                'Lặp "save money", "do not need"; ý "wear what they want" thiếu tính học thuật.',
              ],
            },
            {
              band: '7.0',
              label: 'Hai lợi ích được mở rộng + câu verdict rõ ràng',
              text: 'However, the benefits of remote working are far more significant. The most important advantage is that employees no longer have to commute, which can save them up to two hours every day. This extra time can be spent on exercise, family or rest, so workers are often healthier and more productive. For example, many technology companies have reported higher job satisfaction among staff who work from home. In addition, fewer people travelling to offices means less traffic congestion and air pollution in big cities. Unlike the drawbacks mentioned above, which can be reduced by regular online meetings, these benefits affect millions of people every day.',
              comments: [
                'Topic sentence báo hiệu ngay đây là mặt nặng hơn (far more significant).',
                'Chuỗi nhân quả: không đi lại → tiết kiệm 2 giờ → sức khỏe, năng suất → ví dụ.',
                'Câu cuối là verdict thật sự, dùng tiêu chí "khắc phục được" vs "ảnh hưởng hàng triệu người".',
              ],
            },
            {
              band: '8.0',
              label: 'Cân theo đối tượng và quy mô, collocation tinh tế',
              text: 'These drawbacks, however, pale in comparison with the advantages. For employees, the elimination of the daily commute frees up a substantial amount of time and energy that can be redirected towards family, exercise or professional development, which in turn tends to boost both well-being and output. Employers also stand to gain, as flexible arrangements allow them to reduce office overheads and recruit talent regardless of geographical location. On a wider scale, fewer cars on the road translate into lighter congestion and cleaner urban air. Crucially, whereas isolation can be mitigated through deliberate team-building, these gains accrue every working day to individuals, businesses and cities alike.',
              comments: [
                'Lợi ích được sắp theo ba đối tượng: người lao động → doanh nghiệp → thành phố.',
                'Verdict dùng hai tiêu chí cân: khả năng khắc phục (mitigated) và quy mô (individuals, businesses and cities alike).',
                'Collocation: pale in comparison, free up time, stand to gain, accrue.',
              ],
            },
            {
              band: '9.0',
              label: 'Phán quyết tinh tế: bất lợi mang tính tình huống, lợi ích mang tính cấu trúc',
              text: 'Yet such drawbacks are largely circumstantial, whereas the benefits are structural. Freed from the daily commute, employees reclaim hours that would otherwise be lost to congested roads, and this reclaimed time tends to resurface as improved health, stronger family ties and sustained productivity. Organisations, meanwhile, can shed costly office space and draw on a talent pool no longer confined by geography—an advantage that compounds over time. The environmental dividend is equally tangible: each remote working day removes vehicles from already saturated urban networks. Isolation and blurred boundaries, by contrast, are problems of management rather than of the model itself, and thoughtful policies can resolve them.',
              comments: [
                'Câu mở đoạn đặt khung phán quyết bằng cặp đối lập circumstantial vs structural.',
                'Câu cuối chuyển trọng tâm: bất lợi là vấn đề "quản lý" chứ không phải bản chất mô hình – lập luận gần như không kẽ hở.',
                'Ngôn ngữ cô đọng: reclaim hours, compound over time, environmental dividend, saturated urban networks.',
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
              text: 'Over the past decade, working from home has shifted from a rare privilege to a mainstream arrangement in many countries. Although this trend presents certain challenges, I believe they are clearly outweighed by the benefits it brings to employees, employers and cities as a whole.',
            },
            {
              role: 'Body 1',
              text: 'Admittedly, remote working is not without its drawbacks, particularly for employees’ social and mental well-being. The most significant downside is the sense of isolation that can arise when colleagues no longer share a physical space. Without casual conversations and face-to-face collaboration, workers may feel disconnected from their teams, which can gradually erode motivation and loyalty. In addition, the boundary between professional and private life often becomes blurred, as many people find themselves answering emails late into the evening. Nevertheless, these problems are largely manageable if companies schedule regular team meetings and set clear expectations about working hours.',
            },
            {
              role: 'Body 2',
              text: 'The advantages, by contrast, are far more substantial and enduring. For employees, eliminating the daily commute frees up a considerable amount of time that can be devoted to family, exercise or further study, which tends to boost both well-being and productivity. Employers also stand to gain, since flexible arrangements allow them to reduce office overheads and recruit talented staff regardless of where they live. On a wider scale, fewer vehicles on the road translate into lighter congestion and cleaner air in major cities. Crucially, whereas isolation can be mitigated through deliberate team-building, these gains accrue every working day to individuals, businesses and urban communities alike.',
            },
            {
              role: 'Conclusion',
              text: 'In conclusion, although working from home may leave some employees feeling isolated and overworked, I firmly believe that its widespread benefits for personal well-being, business efficiency and the environment far outweigh these largely manageable drawbacks.',
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
              title: 'Xác định biến thể & lập bảng cân',
              details: [
                'Đề là "discuss advantages and disadvantages" hay "outweigh"? Khoanh tròn câu hỏi.',
                'Nháp bảng 2 cột Lợi | Hại, ghi kèm đối tượng (cá nhân / doanh nghiệp / xã hội) cho từng ý.',
                'Chọn 1–2 ý mạnh nhất mỗi cột; quyết định đĩa nào nặng hơn bằng 3 tiêu chí: quy mô – thời hạn – khả năng khắc phục.',
              ],
            },
            { time: 'Phút 6–9', minutes: 4, title: 'Viết Introduction', details: ['Paraphrase xu hướng + Thesis có phán quyết.'] },
            { time: 'Phút 10–21', minutes: 12, title: 'Viết Body 1 (mặt nhẹ)', details: ['Thừa nhận khách quan, câu cuối "hạ trọng số".'] },
            {
              time: 'Phút 22–34',
              minutes: 13,
              title: 'Viết Body 2 (mặt nặng)',
              details: ['Lợi ích theo nhiều đối tượng; kết đoạn bằng verdict sentence.'],
            },
            { time: 'Phút 35–37', minutes: 3, title: 'Viết Conclusion', details: ['Nhắc lại phán quyết + tiêu chí cân.'] },
            { time: 'Phút 38–40', minutes: 3, title: 'Rà soát', details: ['Chạy Checklist bên dưới.'] },
          ],
        },
        {
          type: 'checklist',
          title: 'Checklist rà soát dạng Advantages – Disadvantages',
          items: [
            { label: 'Task type', text: 'Đã trả lời đúng biến thể chưa (outweigh → phải có phán quyết rõ ngay Mở bài)?' },
            { label: 'Weighing', text: 'Có ít nhất 1 câu so sánh trực tiếp hai đĩa cân (whereas / unlike / far more ... than) chưa?' },
            { label: 'Stakeholders', text: 'Mỗi lợi ích/bất lợi đã gắn với đối tượng cụ thể chưa?' },
            { label: 'Consistency', text: 'Phán quyết ở Mở bài, câu verdict Body 2 và Kết bài có thống nhất không?' },
            { label: 'Accuracy', text: 'Kiểm tra cấu trúc so sánh (more ... than, far + so sánh hơn), mạo từ và số ít/số nhiều.' },
          ],
        },
      ],
    },
  ],
}
