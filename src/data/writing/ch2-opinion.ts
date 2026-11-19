import type { WritingChapter } from './types'

const prompt =
  'Some people believe that unpaid community service should be a compulsory part of high school programmes (for example, working for a charity, improving the neighbourhood or teaching sports to younger children). To what extent do you agree or disagree?'

export const ch2: WritingChapter = {
  id: 'opinion',
  number: 2,
  title: 'Dạng bài Opinion / Agree or Disagree',
  shortTitle: 'Opinion / Agree or Disagree',
  tagline: 'Một nhận định – một lập trường: chọn mức độ đồng ý, nói rõ từ câu đầu và giữ nguyên đến câu cuối.',
  status: 'Đã hoàn thiện',
  samplePrompt: prompt,
  sections: [
    {
      id: 's1',
      number: 1,
      title: 'Bản chất đề bài & các lỗi chí mạng',
      blocks: [
        { type: 'heading', text: '1.1. Nhận diện đề bài và yêu cầu cốt lõi' },
        {
          type: 'p',
          text: 'Đề đưa ra **một nhận định duy nhất (a single claim)** rồi hỏi mức độ đồng tình của bạn. Các biến thể thường gặp: **"To what extent do you agree or disagree?"**, **"Do you agree or disagree?"**, **"What is your opinion?"**, **"Is this a positive or negative development?"** (khi đứng một mình).',
        },
        {
          type: 'p',
          text: 'Khác với Chương 1, bạn **không bị bắt thảo luận hai phía cân bằng**. Toàn bộ bài viết là một lập luận một chiều (argument) bảo vệ lập trường của bạn. Yêu cầu bắt buộc theo Band Descriptors:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Xác định mức độ (extent):** đồng ý hoàn toàn, phản đối hoàn toàn, hay đồng ý một phần – và nói rõ ngay ở Mở bài.',
            '**Trả lời đúng nhận định gốc:** bám sát từng micro-keyword (compulsory, unpaid, only, always, the best way...) chứ không phải chủ đề chung.',
            '**Chứng minh lập trường bằng 2 luận điểm được mở rộng sâu** (Main idea → Explanation → Example), không phải 4–5 ý liệt kê.',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Ba kiểu lập trường hợp lệ (theo Simon Corcoran)',
          text: '**(A) Đồng ý/Phản đối hoàn toàn:** 2 Body cùng ủng hộ 1 phía – an toàn, dễ đạt 7.0. **(B) Đồng ý phần lớn (largely agree):** Body 1 là luận điểm ủng hộ chính, Body 2 là nhượng bộ có giới hạn. **(C) Đồng ý một phần có điều kiện (partly agree):** Body 1 phía đồng ý, Body 2 phía phản đối, nhưng thesis phải nói rõ **đồng ý ở điểm nào, phản đối ở điểm nào**.',
        },
        { type: 'heading', text: '1.2. Ba lỗi chí mạng khiến thí sinh kẹt ở Band 6.0 – 6.5' },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 1: Biến bài Opinion thành bài "Discuss both views" (Fence-sitting)',
          text: 'Thí sinh viết Body 1 "lợi ích", Body 2 "tác hại", Kết bài "it depends". Giám khảo không biết bạn đồng ý **đến mức nào** → Band Descriptor TR 6: **"presents a relevant position although the conclusions may become unclear or repetitive"**. Nếu chọn đồng ý một phần, bạn phải nêu rõ ranh giới của sự đồng ý.',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 2: Trả lời chủ đề thay vì trả lời nhận định (Off-target response)',
          text: 'Đề hỏi community service có nên **bắt buộc (compulsory)** và **không trả lương (unpaid)** không, nhưng thí sinh chỉ viết "community service is good for teenagers". Theo Pauline Cullen, đây là lỗi **"responds to the topic, not the task"** – bài chỉ đáp ứng một phần đề (addresses the task only partially), TR có thể tụt xuống 5.0.',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 3: Lập trường "đổi màu" giữa bài',
          text: 'Mở bài "I completely agree", Body 2 lại phân tích dài nhược điểm mà không nối về lập trường, Kết bài "however, there are some drawbacks". Câu Kết bài phải lặp lại **đúng mức độ** đã nêu ở Thesis.',
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
                'Có quan điểm nhưng mức độ đồng ý mơ hồ hoặc chỉ lộ ra ở Kết bài. Luận điểm có liên quan nhưng giải thích hời hợt, ví dụ chung chung.',
                'Lập trường rõ ràng xuyên suốt (clear position throughout). Hai luận điểm chính được mở rộng và chứng minh; trả lời đúng mọi micro-keyword của đề.',
                'Lập trường sắc nét, luận điểm được phát triển đầy đủ và thuyết phục; có thể thêm nhượng bộ ngắn và bác bỏ (rebuttal) để tăng sức nặng.',
                'Trả lời trọn vẹn mọi sắc thái của nhận định; lập trường tinh tế (ví dụ đồng ý với mục tiêu nhưng phản đối phương tiện) được phát triển hoàn hảo.',
              ],
            },
            {
              criterion: 'Coherence & Cohesion (CC)',
              cells: [
                'Có chia đoạn nhưng mỗi đoạn chứa nhiều ý rời rạc; từ nối lặp, máy móc (Firstly, Secondly, In addition).',
                'Mỗi Body có một luận điểm trung tâm, câu chủ đề nối thẳng về thesis; dùng phép quy chiếu (this requirement, such schemes).',
                'Dòng lập luận tiến triển logic từ câu đầu đến câu cuối; chuyển đoạn tinh tế bằng từ khóa thay vì từ nối.',
                'Liên kết vô hình, mạch lập luận tự dẫn người đọc đến kết luận.',
              ],
            },
            {
              criterion: 'Lexical Resource (LR)',
              cells: [
                'Lặp lại "agree, good, important"; hay dùng "I think" ở mọi câu.',
                'Đa dạng động từ lập trường (endorse, oppose, question the merit of) và collocation theo chủ đề; dùng hedging hợp lý (largely, to a certain extent).',
                'Từ vựng chính xác, chọn từ thể hiện thái độ tinh tế (misguided, counterproductive, laudable).',
                'Lựa chọn từ ngữ tự nhiên, uyển chuyển, sắc thái hoàn hảo.',
              ],
            },
            {
              criterion: 'Grammatical Range & Accuracy (GRA)',
              cells: [
                'Có câu phức nhưng sai mạo từ, chia động từ; câu điều kiện dùng sai thì.',
                'Câu điều kiện, mệnh đề nhượng bộ, mệnh đề quan hệ chính xác; nhiều câu không lỗi.',
                'Phần lớn câu không lỗi; dùng thành thạo cấu trúc giả định (It is essential that S + V nguyên mẫu), đảo ngữ, phân từ.',
                'Toàn bộ cấu trúc chính xác tuyệt đối, đa dạng tự nhiên.',
              ],
            },
          ],
        },
        { type: 'heading', text: '2.1. Bí quyết trọng tâm để cán mốc Band 7.0' },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Quy tắc "Thesis trả lời đúng câu hỏi bằng chính động từ của đề"',
          text: 'Đề hỏi "To what extent do you agree?" → Thesis phải chứa **I (completely / largely / partly) agree / disagree** + lý do tóm tắt. Giám khảo đọc 2 câu Mở bài là biết bạn đứng ở đâu – theo Simon Corcoran đây là điều kiện "đủ" để TR không bị kẹt ở 6.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Mỗi Body = 1 lý do bảo vệ lập trường (Reason-based paragraphing)',
          text: 'Thay vì Body 1 = ưu, Body 2 = nhược, hãy viết Body 1 = **Lý do 1 tôi đồng ý**, Body 2 = **Lý do 2 tôi đồng ý** (hoặc nhượng bộ + bác bỏ). Cách chia này tự động giữ lập trường nhất quán.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Linearthinking: mỗi luận điểm đi hết chuỗi 4 nấc',
          text: '**Claim** (Bắt buộc phục vụ cộng đồng giúp học sinh...) → **Mechanism** (vì khi trực tiếp làm việc với...) → **Outcome** (từ đó hình thành...) → **Example** (chẳng hạn chương trình ở Singapore/Canada...). Một luận điểm đi đủ 4 nấc giá trị hơn 3 luận điểm chỉ có 1 nấc.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Nhượng bộ – bác bỏ (Concession – Rebuttal) cho mục tiêu 7.5+',
          text: 'Thêm 1–2 câu thừa nhận phản biện rồi bác bỏ ngay: **"Admittedly, some argue that... However, this concern is largely unfounded because..."**. Giám khảo đánh giá cao vì đó là dấu hiệu tư duy phản biện (fully developed position).',
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
          text: 'Tổng độ dài: **270 – 310 từ**, 13 – 15 câu. Mẫu dưới đây dùng lập trường **(B) largely agree** – linh hoạt nhất và dễ đạt 7.0+. Với lập trường (A), Body 2 thay bằng Lý do 2 cùng phía.',
        },
        {
          type: 'paragraphPlan',
          name: 'Introduction',
          meta: '2 câu · ~40–50 từ · 5 phút',
          sentences: [
            {
              label: 'Câu 1 – Paraphrase nhận định',
              detail: 'Diễn đạt lại nhận định bằng từ đồng nghĩa, giữ nguyên các micro-keyword.',
              template: 'It is often argued that [paraphrase nhận định của đề].',
            },
            {
              label: 'Câu 2 – Thesis (mức độ + 2 lý do tóm tắt)',
              detail: 'Nêu mức độ đồng ý và báo trước 2 lý do.',
              template: 'I [completely / largely] agree with this view, since [lý do 1] and [lý do 2].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Body 1 – Lý do chính bảo vệ lập trường',
          meta: '5 câu · ~100–115 từ · 12 phút',
          sentences: [
            {
              label: 'Câu 1 – Topic sentence',
              detail: 'Lý do 1, nối trực tiếp về thesis.',
              template: 'The most compelling reason to support [nhận định] is that it [lợi ích/tác động chính].',
            },
            {
              label: 'Câu 2 – Explanation (cơ chế)',
              detail: 'Giải thích tại sao lý do này đúng.',
              template: 'When [chủ thể] [hành động], they are able to [kết quả trực tiếp].',
            },
            {
              label: 'Câu 3 – Development (hệ quả dài hạn)',
              detail: 'Đẩy lập luận thêm một nấc.',
              template: 'Over time, this [kết quả trực tiếp] translates into [hệ quả lâu dài], which [giá trị cho xã hội].',
            },
            {
              label: 'Câu 4 – Example',
              detail: 'Ví dụ cụ thể, có thể giả định hợp lý.',
              template: 'For example, in [quốc gia/trường hợp], [dẫn chứng cụ thể].',
            },
            {
              label: 'Câu 5 – Mini-conclusion',
              detail: 'Chốt lại vì sao điều này ủng hộ lập trường.',
              template: 'Clearly, such [danh từ quy chiếu] would be difficult to achieve without [nhận định của đề].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Body 2 – Lý do 2 hoặc Nhượng bộ + Bác bỏ',
          meta: '5–6 câu · ~100–115 từ · 13 phút',
          note: 'Nếu nhượng bộ, câu cuối đoạn bắt buộc quay về lập trường chính – nếu không bài sẽ "đổi màu".',
          sentences: [
            {
              label: 'Câu 1 – Concession (thừa nhận phản biện)',
              detail: 'Ghi nhận mối lo ngại hợp lý của phía bên kia.',
              template: 'Admittedly, critics may argue that [phản biện chính].',
            },
            {
              label: 'Câu 2 – Giải thích phản biện',
              detail: 'Ngắn gọn, khách quan.',
              template: 'This concern stems from the fact that [lý do của phía phản đối].',
            },
            {
              label: 'Câu 3 – Rebuttal',
              detail: 'Bác bỏ hoặc giới hạn phản biện.',
              template: 'However, this problem could easily be overcome if [giải pháp/điều kiện].',
            },
            {
              label: 'Câu 4 – Explanation + Example',
              detail: 'Chứng minh lời bác bỏ khả thi.',
              template: 'Schools could, for instance, [biện pháp cụ thể], thereby [lợi ích].',
            },
            {
              label: 'Câu 5 – Quay về lập trường',
              detail: 'Điểm chạm lập trường thứ 2.',
              template: 'Therefore, the potential drawbacks do not justify abandoning [nhận định].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Conclusion',
          meta: '1–2 câu · ~35–45 từ · 4 phút',
          sentences: [
            {
              label: 'Khẳng định lại mức độ + tóm tắt lý do',
              detail: 'Dùng đúng mức độ (completely/largely) như Thesis.',
              template: 'In conclusion, I [largely] agree that [nhận định], because [tóm tắt lý do 1], provided that [điều kiện từ Body 2].',
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
          title: '4.1. Nêu mức độ đồng ý (Thesis & Conclusion)',
          items: [
            { en: 'I wholeheartedly / fully endorse the view that...', vi: 'Tôi hoàn toàn tán thành quan điểm rằng...' },
            { en: 'I am firmly opposed to the idea that...', vi: 'Tôi kiên quyết phản đối ý kiến rằng...' },
            { en: 'I largely agree with this proposition, although...', vi: 'Tôi phần lớn đồng ý với đề xuất này, dù...' },
            { en: 'I agree with this statement only to a limited extent.', vi: 'Tôi chỉ đồng ý với nhận định này ở mức độ hạn chế.' },
            { en: 'While the goal is laudable, the means are questionable.', vi: 'Mục tiêu thì đáng khen, nhưng phương tiện thì đáng ngờ. (Band 8.0+)' },
          ],
        },
        {
          type: 'phrases',
          title: '4.2. Nhượng bộ & bác bỏ (Concession – Rebuttal)',
          items: [
            { en: 'Admittedly, / Granted, it could be argued that...', vi: 'Phải thừa nhận rằng, có thể lập luận rằng...' },
            { en: 'Opponents of this policy might contend that...', vi: 'Những người phản đối chính sách này có thể cho rằng...' },
            { en: 'However, this argument overlooks the fact that...', vi: 'Tuy nhiên, lập luận này bỏ qua thực tế rằng...' },
            { en: 'This concern, though valid, is largely outweighed by...', vi: 'Mối lo ngại này, dù hợp lý, phần lớn bị lấn át bởi...' },
            { en: 'Such objections are, in my view, largely unfounded.', vi: 'Theo tôi, những phản đối như vậy phần lớn là vô căn cứ.' },
          ],
        },
        {
          type: 'phrases',
          title: '4.3. Đánh giá tính đúng/sai của nhận định (Evaluative adjectives)',
          items: [
            { en: 'a sound / well-founded / compelling argument', vi: 'một lập luận vững chắc / có cơ sở / thuyết phục' },
            { en: 'a misguided / short-sighted / counterproductive policy', vi: 'chính sách sai lầm / thiển cận / phản tác dụng' },
            { en: 'an oversimplification of a complex issue', vi: 'sự đơn giản hóa quá mức một vấn đề phức tạp' },
            { en: 'to yield tangible benefits for...', vi: 'mang lại lợi ích hữu hình cho...' },
          ],
        },
        { type: 'heading', text: '4.4. Bốn cấu trúc câu "ăn điểm" cho dạng Opinion' },
        {
          type: 'structure',
          title: 'Thể giả định (Subjunctive) – thể hiện đề xuất mạnh',
          formula: 'It is essential / vital that [S] + V (nguyên mẫu)...',
          example: 'It is vital that every student be given the opportunity to contribute to their community.',
        },
        {
          type: 'structure',
          title: 'Câu điều kiện có điều kiện ràng buộc (Provided that)',
          formula: '[Mệnh đề lập trường], provided that / as long as [điều kiện].',
          example:
            'Compulsory volunteering would be highly beneficial, provided that schools allow students to choose the type of service.',
        },
        {
          type: 'structure',
          title: 'Not only... but also đảo ngữ (Inversion)',
          formula: 'Not only does [S] + V..., but [S] also + V...',
          example:
            'Not only does community service broaden teenagers’ horizons, but it also equips them with skills that classrooms rarely teach.',
        },
        {
          type: 'structure',
          title: 'Mệnh đề nhượng bộ rút gọn',
          formula: 'Although / While + V-ing / adj..., [mệnh đề chính].',
          before: 'Although it is true that the scheme is time-consuming, it is very useful.',
          after: 'While undeniably time-consuming, such a scheme offers returns that far exceed its costs.',
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
          text: 'Cùng triển khai **Body 1 – Lý do chính tôi đồng ý: phục vụ cộng đồng giúp học sinh phát triển kỹ năng sống và tinh thần trách nhiệm** ở 4 mức Band:',
        },
        {
          type: 'bandSamples',
          samples: [
            {
              band: '6.0',
              label: 'Ý đúng nhưng giải thích hời hợt, "I think" lặp lại',
              text: 'I think community service is very good for students. Firstly, students can learn many skills when they do volunteer work. For example, they can learn how to communicate with other people and work in a team. These skills are very important for their future job. In addition, I think students will become more responsible because they help other people. So I agree that students should do community service at school.',
              comments: [
                '"I think" và "very good/important" lặp lại; từ vựng đơn giản.',
                'Không chạm tới micro-keywords "compulsory" và "unpaid" – trả lời chủ đề chứ chưa trả lời nhận định.',
                'Hai ý (skills, responsible) chỉ được nêu, không được giải thích cơ chế.',
              ],
            },
            {
              band: '7.0',
              label: 'Một luận điểm trung tâm, chuỗi nhân quả rõ ràng',
              text: 'The main reason why I support compulsory community service is that it helps teenagers develop practical skills that are rarely taught in the classroom. When students organise a charity event or coach younger children in sport, they have to communicate with strangers, manage their time and solve unexpected problems. As a result, they gain confidence and become better prepared for university and the workplace. In Canada, for example, high school students in Ontario must complete forty hours of volunteering, and many of them report that this experience helped them choose a future career. Without such a requirement, many students would never step outside their comfort zone.',
              comments: [
                'Topic sentence nối thẳng về lập trường và chứa "compulsory".',
                'Chuỗi Linearthinking đầy đủ: hành động → kỹ năng → tự tin → sẵn sàng cho tương lai → ví dụ Ontario.',
                'Câu cuối dùng giả định ngược (Without such a requirement...) bảo vệ chữ "compulsory".',
              ],
            },
            {
              band: '8.0',
              label: 'Từ vựng tinh tế, liên kết ngầm, lập luận hai tầng',
              text: 'The most compelling argument for mandatory community service is that it cultivates competencies which conventional academic curricula largely neglect. Coordinating a fundraising drive or mentoring younger pupils compels teenagers to negotiate with adults, allocate limited resources and respond to setbacks in real time. These experiences foster a degree of maturity and self-reliance that no textbook can replicate. Crucially, making the scheme compulsory ensures that its benefits reach every student, not merely the already motivated minority who would volunteer anyway. Ontario’s forty-hour requirement illustrates this well: graduates frequently cite their placements as formative in shaping both their interpersonal skills and their career aspirations.',
              comments: [
                'Hai tầng lập luận: lợi ích cá nhân (competencies, maturity) và lợi ích công bằng (benefits reach every student).',
                'Bảo vệ trực tiếp micro-keyword "compulsory" bằng lập luận sắc sảo về nhóm thiểu số tự nguyện.',
                'Collocation học thuật: cultivate competencies, allocate limited resources, foster maturity, formative.',
              ],
            },
            {
              band: '9.0',
              label: 'Cô đọng, sắc thái tinh tế, kiểm soát ngôn ngữ hoàn hảo',
              text: 'Foremost among the merits of mandatory service is its capacity to cultivate the civic and interpersonal competencies that examination-driven curricula systematically overlook. Coordinating a neighbourhood clean-up or mentoring younger children obliges adolescents to negotiate, improvise and take ownership of outcomes that matter to someone other than themselves—an education in responsibility that no classroom simulation can approximate. Equally significant is the democratising effect of compulsion: whereas voluntary schemes tend to attract students who are already socially confident, a universal requirement extends these formative experiences to precisely those who stand to gain the most. Ontario’s forty-hour mandate, widely credited with nurturing a culture of lifelong civic participation, attests to this.',
              comments: [
                'Đảo cấu trúc mở đoạn (Foremost among the merits...) – nhấn mạnh tự nhiên.',
                'Ý tưởng tinh tế: "democratising effect of compulsion" – biến chữ "compulsory" thành lợi thế.',
                'Gạch nối dài (—) và mệnh đề "whereas" thể hiện kiểm soát dấu câu và cấu trúc tuyệt đối.',
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
              text: 'It is sometimes suggested that unpaid community work should become a mandatory element of the secondary school curriculum. I largely agree with this proposal, since such service equips teenagers with skills that classrooms seldom teach, and its potential drawbacks can be minimised through careful planning.',
            },
            {
              role: 'Body 1',
              text: 'The most compelling reason to support compulsory community service is that it cultivates practical and interpersonal competencies. When students organise a charity event or coach younger children, they must communicate with strangers, manage their time and solve problems in real situations. These experiences foster a maturity and self-reliance that no textbook can replicate, preparing young people for both higher education and the workplace. Crucially, making the scheme compulsory ensures that its benefits reach every student rather than only the already motivated minority. In Ontario, for instance, high school students must complete forty hours of volunteering, and many graduates describe their placements as formative in shaping their career choices.',
            },
            {
              role: 'Body 2',
              text: 'Admittedly, critics may argue that teenagers already face heavy academic workloads and that forced volunteering could breed resentment rather than civic spirit. These concerns are understandable, as examination pressure is intense in many countries. However, they could easily be addressed if schools integrated service into the timetable instead of adding it to students’ free time, and if pupils were allowed to choose projects that genuinely interest them. A student passionate about the environment, for example, could restore a local park, thereby turning an obligation into a meaningful personal project. Therefore, the potential disadvantages do not justify abandoning the idea altogether.',
            },
            {
              role: 'Conclusion',
              text: 'In conclusion, I largely agree that unpaid community service should be a required part of high school education, because it develops essential life skills in every student, provided that schools design these programmes flexibly and with students’ interests in mind.',
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
              title: 'Giải mã nhận định & chọn mức độ',
              details: [
                'Gạch chân micro-keywords (compulsory, unpaid, only, always, should).',
                'Hỏi nhanh: Tôi có 2 lý do mạnh + ví dụ cho phía nào? Chọn mức độ (A/B/C) dựa vào đó, không dựa vào cảm xúc.',
                'Nháp: Thesis 1 dòng → Body 1 (Lý do – Cơ chế – Hệ quả – Ví dụ) → Body 2 (Lý do 2 hoặc Nhượng bộ – Bác bỏ).',
              ],
            },
            { time: 'Phút 6–9', minutes: 4, title: 'Viết Introduction', details: ['Paraphrase nhận định + Thesis có mức độ và 2 lý do.'] },
            { time: 'Phút 10–21', minutes: 12, title: 'Viết Body 1', details: ['Luận điểm mạnh nhất, đủ 4 nấc Linearthinking.'] },
            {
              time: 'Phút 22–34',
              minutes: 13,
              title: 'Viết Body 2',
              details: ['Lý do 2 hoặc Concession → Rebuttal; câu cuối quay về lập trường.'],
            },
            { time: 'Phút 35–37', minutes: 3, title: 'Viết Conclusion', details: ['Lặp đúng mức độ đồng ý của Thesis.'] },
            { time: 'Phút 38–40', minutes: 3, title: 'Rà soát', details: ['Chạy Checklist bên dưới.'] },
          ],
        },
        {
          type: 'checklist',
          title: 'Checklist rà soát dạng Opinion',
          items: [
            { label: 'Extent', text: 'Thesis đã nói rõ đồng ý/phản đối ở mức độ nào chưa (completely / largely / partly)?' },
            { label: 'Micro-keywords', text: 'Bài đã trả lời đúng các từ giới hạn của đề (compulsory, unpaid, only...) chưa, hay chỉ bàn chủ đề chung?' },
            { label: 'Consistency', text: 'Thesis, câu cuối Body 2 và Kết bài có cùng một mức độ lập trường không?' },
            { label: 'Development', text: 'Mỗi Body có đủ Claim → Mechanism → Outcome → Example chưa?' },
            { label: 'Accuracy', text: 'Kiểm tra mạo từ, số ít/số nhiều, thì của câu điều kiện và cấu trúc "It is vital that S + V nguyên mẫu".' },
          ],
        },
      ],
    },
  ],
}
