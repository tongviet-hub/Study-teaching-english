import type { WritingChapter } from './types'

const prompt =
  'Some people think that universities should provide graduates with the knowledge and skills needed in the workplace. Others think that the true function of a university should be to give access to knowledge for its own sake, regardless of whether the course is useful to an employer. Discuss both views and give your opinion.'

export const ch1: WritingChapter = {
  id: 'discuss-both-views',
  number: 1,
  title: 'Dạng bài "Discuss Both Views and Give Your Opinion"',
  shortTitle: 'Discuss Both Views',
  tagline: 'Hai quan điểm đối lập + ý kiến cá nhân: thảo luận khách quan View A, nghiêng rõ về View B.',
  status: 'Đã hoàn thiện',
  samplePrompt: prompt,
  sections: [
    {
      id: 's1',
      number: 1,
      title: 'Bản chất học thuật & tiêu chí khảo thí chuẩn',
      blocks: [
        { type: 'heading', text: '1.1. Nhận diện đề bài và yêu cầu cốt lõi' },
        {
          type: 'p',
          text: 'Đề bài luôn đưa ra hai luồng quan điểm đối lập (View A và View B) về cùng một vấn đề xã hội, giáo dục, công nghệ hoặc chính sách, theo sau bởi mệnh lệnh: **"Discuss both these views and give your own opinion."**',
        },
        {
          type: 'p',
          text: 'Theo IELTS Writing Task 2 Band Descriptors chính thức, đề bài này gồm 3 yêu cầu bắt buộc (3-part prompt):',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            '**Discuss View A:** Giải thích tại sao một nhóm người lại ủng hộ quan điểm thứ nhất (họ có lý lẽ gì hợp lý?).',
            '**Discuss View B:** Giải thích tại sao nhóm người còn lại lại ủng hộ quan điểm thứ hai.',
            '**Give Your Own Opinion:** Nêu rõ lập trường cá nhân của người viết (nghiêng hẳn về một bên, hoặc dung hòa có trọng tâm).',
          ],
        },
        { type: 'heading', text: '1.2. Hai lỗi chí mạng khiến 80% thí sinh kẹt ở Band 6.0 – 6.5' },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 1: Không phân tách "giọng người khác" (Third-party Attribution) và "giọng tác giả" (Authorial Voice)',
          text: 'Theo Pauline Cullen (The Key to IELTS), nếu ở Body 1 bạn viết "University should only focus on job skills because..." và sang Body 2 lại viết "University must teach pure academic knowledge because...", cả hai đoạn đều mang giọng khẳng định của chính bạn. Kết quả là bài viết **tự mâu thuẫn (self-contradictory)**, giám khảo không xác định được lập trường xuyên suốt (clear position throughout the response – điều kiện tiên quyết của Band 7.0+).',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 2: Giấu quan điểm đến câu cuối hoặc "ba phải" (Unclear / Delayed Position)',
          text: 'Nhiều thí sinh coi bài viết như một màn trinh thám: Mở bài chỉ nói "bài viết này sẽ thảo luận cả hai chiều", thân bài phân tích 50-50, đến câu cuối mới chốt "Tôi đồng ý với ý kiến thứ hai". Theo Band Descriptors, cách viết này rơi vào mục **"presents a relevant position, although the conclusions may become unclear"** – tối đa Band 6.0 cho Task Response.',
        },
      ],
    },
    {
      id: 's2',
      number: 2,
      title: 'Chiến thuật phân hóa theo từng Band (6.0 – 9.0)',
      blocks: [
        {
          type: 'p',
          text: 'Để đạt đúng mục tiêu và không lãng phí công sức nhồi nhét từ vựng sáo rỗng, cần hiểu giám khảo chấm sự khác biệt giữa các Band như thế nào:',
        },
        {
          type: 'bandTable',
          rows: [
            {
              criterion: 'Task Response (TR)',
              cells: [
                'Đề cập được cả 2 views nhưng phát triển ý chưa đều. Quan điểm cá nhân chỉ xuất hiện ở kết bài hoặc mâu thuẫn với thân bài. Ý tưởng chung chung, thiếu giải thích sâu.',
                'Giải quyết đầy đủ cả 3 phần (View 1, View 2, Opinion). Quan điểm rõ ràng xuyên suốt từ Mở bài đến Kết bài. Luận điểm được mở rộng có chiều sâu (Cause → Effect → Example).',
                'Phân tích thấu đáo, toàn diện cả hai góc nhìn. Lập trường sắc bén, giải thích thuyết phục vì sao View mình chọn vượt trội hơn View kia.',
                'Xử lý tinh tế mọi sắc thái của đề. Luận điểm sâu sắc, lập luận phản biện (counter-argument / concession) chặt chẽ không kẽ hở.',
              ],
            },
            {
              criterion: 'Coherence & Cohesion (CC)',
              cells: [
                'Có bố cục nhưng lạm dụng từ nối máy móc (Firstly, Secondly, Moreover, In conclusion) ở đầu mọi câu. Đôi khi câu sau không nối mạch với câu trước.',
                'Mỗi đoạn có 1 chủ đề trung tâm rõ ràng. Từ nối vừa phải, kết hợp phép quy chiếu (this, such, these measures) giúp mạch văn trôi chảy.',
                'Chia đoạn và dẫn dắt hoàn toàn mượt mà. Liên kết dựa trên logic nội tại của ý tưởng thay vì từ nối hình thức.',
                'Mạch liên kết vô hình (invisible cohesion) hoàn hảo; người đọc bị cuốn theo lập luận mà không nhận ra công cụ nối câu.',
              ],
            },
            {
              criterion: 'Lexical Resource (LR)',
              cells: [
                'Đủ từ để diễn đạt nhưng hay lặp từ hoặc cố dùng từ "khó/hiếm" sai ngữ cảnh, sai collocation.',
                'Vốn từ học thuật rộng, dùng đúng collocations và từ thể hiện thái độ (valid, short-sighted, indispensable). Có thể có vài lỗi nhỏ không cản trở nghĩa.',
                'Từ vựng tinh tế, chuẩn xác theo chủ đề (topic-specific) và cụm ít phổ biến một cách tự nhiên. Hầu như không lỗi dùng từ.',
                'Kiểm soát từ vựng hoàn toàn tự nhiên và chuẩn xác như học giả bản xứ.',
              ],
            },
            {
              criterion: 'Grammatical Range & Accuracy (GRA)',
              cells: [
                'Kết hợp câu đơn và câu phức nhưng còn nhiều lỗi (mạo từ, chia động từ, câu cụt). Lỗi không làm mất nghĩa hoàn toàn.',
                'Đa dạng câu phức (mệnh đề quan hệ, điều kiện, nhượng bộ). Nhiều câu hoàn toàn không lỗi (frequent error-free sentences).',
                'Phần lớn tuyệt đối các câu không lỗi. Linh hoạt dùng đảo ngữ nhẹ, phân từ, danh từ hóa.',
                'Toàn diện các cấu trúc học thuật với độ chính xác tuyệt đối; dấu câu chuẩn mực.',
              ],
            },
          ],
        },
        { type: 'heading', text: '2.1. Chiến thuật trọng tâm để cán mốc Band 7.0' },
        {
          type: 'p',
          text: 'Nhiều người lầm tưởng muốn được 7.0 phải viết từ C2 siêu hiếm hoặc câu dài 3–4 dòng. Thực tế, theo cựu giám khảo Simon Corcoran, chìa khóa của Band 7.0 nằm ở **Sự rõ ràng (Clarity)**, **Logic tuyến tính (Linear Progression)** và **Độ chính xác (Accuracy)**.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Quy tắc "Lập trường 3 điểm chạm" (3-Touchpoint Position)',
          text: 'Giám khảo phải thấy Opinion của bạn ở 3 vị trí: **(1) Thesis ở Mở bài** – While both views have some validity, I side with the latter... **(2) Topic sentence Body 2** – On the other hand, I agree with those who contend that... **(3) Kết bài** – In conclusion, although [View 1], I believe that [View 2]...',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'View không đồng tình lên Body 1, View đồng tình xuống Body 2',
          text: 'Đây là nguyên tắc Nhượng bộ (Concession): thừa nhận điểm hợp lý của đối phương trước (Body 1), sau đó đưa ra góc nhìn thuyết phục hơn của mình (Body 2), rồi nối thẳng xuống Kết bài. Mạch bài thuận chiều, không "gãy khúc".',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Linearthinking trị bệnh "nói chung chung"',
          text: 'Thí sinh 6.0 thường liệt kê 3–4 ý rời rạc. Để đạt 7.0, mỗi Body chỉ cần 1–2 luận điểm, đẩy đi theo chuỗi **Action → Direct Effect → Ultimate Outcome → Concrete Example**.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Ưu tiên câu phức không lỗi + collocation chuẩn',
          text: 'GRA Band 7 yêu cầu "produces frequent error-free sentences". Câu có 2–3 mệnh đề với while, although, because, which, if đúng 100% ăn điểm hơn nhiều so với câu phức tạp nhưng sai.',
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
          text: 'Tổng độ dài lý tưởng: **270 – 310 từ**, 13 – 15 câu (35 phút viết + 5 phút kiểm tra).',
        },
        {
          type: 'paragraphPlan',
          name: 'Introduction',
          meta: '2 câu · ~45–55 từ · 5 phút',
          sentences: [
            {
              label: 'Câu 1 – Background (paraphrase 2 views)',
              detail: 'Giới thiệu hai luồng ý kiến bằng từ vựng tương đương và cấu trúc đối lập.',
              template: 'While some people argue that [View 1], others hold the view that [View 2].',
            },
            {
              label: 'Câu 2 – Thesis (định hướng + Opinion)',
              detail: 'Khẳng định bài sẽ bàn cả hai chiều nhưng nghiêng về chiều nào.',
              template: 'Although there are valid arguments on both sides, I personally believe that [Opinion – thường nghiêng về View 2].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Body 1 – View 1 (ít ủng hộ hơn)',
          meta: '5 câu · ~100–110 từ · 12 phút',
          note: 'Bắt buộc dùng Attributive Language để giám khảo biết bạn đang khách quan phân tích góc nhìn của nhóm 1.',
          sentences: [
            {
              label: 'Câu 1 – Topic sentence (khách quan)',
              detail: 'Nêu lý do cốt lõi của người ủng hộ View 1.',
              template: 'On the one hand, there are understandable reasons why some people advocate [View 1].',
            },
            {
              label: 'Câu 2 – Main point 1',
              detail: 'Luận điểm chính đầu tiên của nhóm này.',
              template: 'The primary argument is that [Lý do 1].',
            },
            {
              label: 'Câu 3 – Linear explanation',
              detail: 'Giải thích tại sao lý do 1 dẫn đến lợi ích nhóm 1 mong muốn.',
              template: 'When [hành động xảy ra], it allows individuals to [kết quả trực tiếp], thereby [hệ quả tích cực].',
            },
            {
              label: 'Câu 4 – Example',
              detail: 'Một trường hợp cụ thể để chứng minh.',
              template: 'For instance, [ví dụ về một ngành nghề / quốc gia / tình huống thực tế].',
            },
            {
              label: 'Câu 5 – Main point 2 / mở rộng',
              detail: 'Bổ sung khía cạnh thứ hai.',
              template: 'Furthermore, proponents of this view often point out that [Lý do 2 + giải thích ngắn].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Body 2 – View 2 + Opinion (ủng hộ)',
          meta: '5–6 câu · ~110–120 từ · 13 phút',
          note: 'Chuyển sang Authorial Voice kết hợp phân tích View 2 để làm nổi bật lập trường.',
          sentences: [
            {
              label: 'Câu 1 – Topic sentence (chuyển hướng + Opinion)',
              detail: 'Đánh dấu điểm chạm thứ 2 của lập trường.',
              template: 'On the other hand, I side with those who contend that [View 2] is of greater significance.',
            },
            {
              label: 'Câu 2 – Main point 1',
              detail: 'Luận điểm sắc bén đầu tiên ủng hộ View 2.',
              template: 'First and foremost, [Luận điểm 1].',
            },
            {
              label: 'Câu 3 – Linear explanation',
              detail: 'Giải thích cơ chế tác động của luận điểm 1.',
              template: 'This is because [cơ chế nhân quả].',
            },
            {
              label: 'Câu 4 – Main point 2 / phản biện View 1',
              detail: 'Luận điểm 2 hoặc chỉ ra giới hạn của View 1.',
              template: 'More importantly, [Luận điểm 2].',
            },
            {
              label: 'Câu 5 – Explanation & example',
              detail: 'Giả định ngược + ví dụ.',
              template: 'Without [View 2], [hậu quả], as evidenced by [ví dụ thực tế].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Conclusion',
          meta: '1–2 câu · ~35–45 từ · 5 phút',
          note: 'Tuyệt đối không đưa thêm luận điểm mới.',
          sentences: [
            {
              label: 'Tóm tắt 2 views + chốt Opinion bằng nhượng bộ',
              detail: 'Điểm chạm thứ 3 của lập trường.',
              template: 'In conclusion, while there are valid reasons to believe that [tóm tắt View 1], I firmly hold the view that [View 2 + lý do cốt lõi].',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      number: 4,
      title: 'Ngân hàng ngôn ngữ học thuật',
      blocks: [
        {
          type: 'phrases',
          title: '4.1. Distancing & Attribution Markers – giọng người khác (Body 1)',
          items: [
            { en: 'Proponents / Advocates of [X] argue / contend / maintain that...', vi: 'Những người ủng hộ [X] lập luận rằng...' },
            { en: 'Those who argue in favour of [X] often point to the fact that...', vi: 'Những người biện hộ cho [X] thường chỉ ra thực tế rằng...' },
            { en: 'From an economic / practical standpoint, it is understandable why some believe...', vi: 'Từ góc độ kinh tế/thực tiễn, có thể hiểu được tại sao một số người tin rằng...' },
            { en: 'This perspective is largely predicated on the assumption that...', vi: 'Góc nhìn này phần lớn dựa trên giả định rằng... (Band 8.0+)' },
          ],
        },
        {
          type: 'phrases',
          title: '4.2. Authorial Stance Markers – giọng tác giả (Mở bài, Body 2, Kết bài)',
          items: [
            { en: 'Nevertheless, I am more convinced by the argument that...', vi: 'Tuy nhiên, tôi bị thuyết phục hơn bởi lập luận rằng...' },
            { en: 'On the other hand, I align myself with those who believe that...', vi: 'Mặt khác, tôi đứng về phía những người tin rằng...' },
            { en: 'In my view, the latter approach is far more sustainable / realistic because...', vi: 'Theo tôi, cách tiếp cận thứ hai bền vững/thực tế hơn nhiều vì...' },
          ],
        },
        { type: 'heading', text: '4.3. Bốn cấu trúc câu "ăn điểm" cho Band 7.0 – 8.5+' },
        {
          type: 'structure',
          title: 'Nhượng bộ kép (Concessive Clause) – dùng cho Thesis & Conclusion',
          formula: 'While it is true that [công nhận View 1], I believe that [khẳng định View 2].',
        },
        {
          type: 'structure',
          title: 'Nhân – quả với mệnh đề phân từ (thay cho "so")',
          formula: '[Mệnh đề chính], thereby + V-ing [kết quả tất yếu].',
          example:
            'Universities equip students with critical thinking skills, thereby enabling them to adapt to rapidly changing job markets.',
        },
        {
          type: 'structure',
          title: 'Giả định ngược (Counterfactual)',
          formula: 'Without [N / V-ing], [S] would struggle to [V] / would be vulnerable to [N].',
        },
        {
          type: 'structure',
          title: 'Danh từ hóa (Nominalization)',
          formula: 'Biến mệnh đề "Because S + V" thành cụm danh từ làm chủ ngữ.',
          before: 'Because technology develops fast, workers have to learn new skills.',
          after: 'The rapid advancement of technology necessitates continuous skill acquisition among the workforce.',
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
          text: 'Cùng triển khai **Body 1 (View 1: Đại học nên dạy kỹ năng thực tiễn cho công việc)** ở 4 mức Band để thấy sự khác biệt bản chất:',
        },
        {
          type: 'bandSamples',
          samples: [
            {
              band: '6.0',
              label: 'Ý liệt kê, từ nối máy móc, lặp từ, thiếu chiều sâu',
              text: 'Firstly, many people think universities should teach job skills. Nowadays, the job market is very competitive. If students learn practical skills at university, they can find a good job easily after graduation and earn a lot of money. Secondly, companies also want employees who can work immediately because they do not want to spend time and money training new staff. For example, IT students need to know how to code to work in software companies. Therefore, teaching practical skills is very good for students and the economy.',
              comments: [
                'Firstly, Secondly, Therefore đầu câu rất cơ học.',
                'Từ vựng đơn giản và lặp lại (job, work, skills, good); câu ngắn, đứt đoạn.',
                'Câu kết đoạn nghe như chính người viết đồng tình hoàn toàn → mâu thuẫn nếu Body 2 đổi ý.',
              ],
            },
            {
              band: '7.0',
              label: 'Mạch lạc, Linear connection chuẩn, câu phức không lỗi',
              text: 'On the one hand, there are clear practical reasons why many people believe higher education should prioritize career preparation. Firstly, the primary goal of most university students is to secure stable employment after graduation. By equipping undergraduates with job-specific skills and industry knowledge, universities can significantly enhance their employability and help them transition smoothly into the workforce. Furthermore, businesses also benefit when graduates are work-ready, as companies can reduce the time and financial resources spent on training new recruits. For example, professions such as engineering, medicine, or software development require intensive practical training at university so that graduates can perform their duties safely and effectively from their first day at work.',
              comments: [
                'Câu mở đoạn "there are clear practical reasons why many people believe..." giữ đúng vai trò thảo luận khách quan.',
                'Chuỗi nhân quả rõ: sinh viên muốn có việc → đại học dạy kỹ năng → tăng employability → chuyển tiếp mượt vào thị trường lao động.',
                'Collocations chuẩn: secure stable employment, job-specific skills, enhance employability, work-ready, new recruits.',
                'Ngữ pháp đa dạng, chính xác 100%.',
              ],
            },
            {
              band: '8.0',
              label: 'Từ vựng tinh tế, liên kết ngầm, lập luận sắc sảo',
              text: 'On the one hand, the argument that tertiary education should function primarily as a stepping stone to employment is grounded in economic reality. For the vast majority of students, enrolling in a degree program represents a substantial financial investment made with the expectation of lucrative career prospects. If curricula are tailored to meet the demands of the contemporary labor market, graduates are far more likely to secure gainful employment and recoup their tuition costs. From a macroeconomic perspective, an education system that produces a job-ready workforce directly fuels national productivity. In technical fields such as software engineering or clinical medicine, for instance, rigorous vocational training is indispensable, as employers require recruits who possess immediate operational competence rather than purely abstract theories.',
              comments: [
                'Không còn Firstly / Furthermore – liên kết bằng logic nội tại.',
                'Hai tầng góc độ: cá nhân sinh viên (For the vast majority of students...) và kinh tế vĩ mô (From a macroeconomic perspective...).',
                'Từ vựng học thuật cao: grounded in economic reality, lucrative career prospects, recoup their tuition costs, immediate operational competence.',
              ],
            },
            {
              band: '9.0',
              label: 'Phong thái học giả bản xứ – sâu sắc, cô đọng',
              text: 'Admittedly, the utilitarian view of higher education as a catalyst for career readiness rests on compelling socio-economic grounds. Given soaring tuition fees and a fiercely competitive global labor market, students understandably regard a university degree as a pragmatic investment designed to yield tangible professional returns. Aligning academic curricula with industry demands not only insulates graduates from structural unemployment but also supplies the economy with human capital capable of driving immediate innovation. This vocational imperative is particularly pronounced in applied disciplines—ranging from software architecture to jurisprudence—where theoretical literacy must be paired with technical proficiency for practitioners to function competently.',
              comments: [
                '"Admittedly" định hình toàn bộ Body 1 là một sự nhượng bộ học thuật (academic concession).',
                'Danh từ hóa cô đọng: the utilitarian view, socio-economic grounds, structural unemployment, vocational imperative.',
                'Truyền tải lượng thông tin lớn trong số câu tối ưu.',
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
              text: 'While some people contend that the primary purpose of tertiary education is to equip students with practical skills for the workplace, others argue that universities should function as centers of pure learning, independent of commercial demands. Although a purely academic approach fosters intellectual growth, I believe that higher education must prioritize career readiness while still nurturing critical thinking.',
            },
            {
              role: 'Body 1',
              text: 'On the one hand, there are valid reasons why some scholars advocate pursuing knowledge for its own sake. Historically, universities were established not as vocational training centers, but as institutions dedicated to philosophical inquiry, scientific discovery, and cultural preservation. If universities only taught courses that generated immediate profits for employers, foundational disciplines such as history, literature, and theoretical physics might be neglected. Yet, it is precisely this curiosity-driven research that often leads to groundbreaking innovations in the long run. For instance, many modern computing technologies originated from abstract mathematical theories that initially had no obvious commercial application.',
            },
            {
              role: 'Body 2',
              text: 'On the other hand, I side with those who believe that universities have a fundamental obligation to prepare graduates for the professional world. For the vast majority of young people, higher education requires a substantial investment of time and tuition fees, made with the reasonable expectation of securing stable employment afterward. Failing to provide students with marketable skills—such as data analysis, project management, or technical expertise—leaves them ill-prepared for a fiercely competitive labor market. Furthermore, practical training and academic depth do not have to be mutually exclusive; a well-designed university curriculum can teach students the theoretical foundations of their field while simultaneously showing them how to apply that knowledge in real-world industry settings.',
            },
            {
              role: 'Conclusion',
              text: 'In conclusion, while preserving pure academic inquiry is undeniably valuable for human progress, I firmly believe that the core mission of modern universities should be to empower graduates with the competencies required to thrive in their future careers.',
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
              title: 'Phân tích đề & lập dàn ý theo Linearthinking',
              details: [
                'Xác định chính xác View 1, View 2; gạch chân micro-keywords (only, the best way, regardless of).',
                'Chọn nghiêng về View dễ lấy ví dụ và giải thích nhân quả hơn – giám khảo chấm cách lập luận, không chấm đúng/sai đạo đức.',
                'Nháp: Body 1 (View A): Ý 1 → Giải thích → Ví dụ | Body 2 (View B + Opinion): Ý 1 → Giải thích → Ý 2 → Ví dụ.',
              ],
            },
            { time: 'Phút 6–10', minutes: 5, title: 'Viết Introduction', details: ['2 câu: Paraphrase + Thesis có Opinion.'] },
            {
              time: 'Phút 11–22',
              minutes: 12,
              title: 'Viết Body 1',
              details: ['Dùng ngôn ngữ khách quan: Some people argue / Proponents of this view...'],
            },
            {
              time: 'Phút 23–35',
              minutes: 13,
              title: 'Viết Body 2',
              details: ['Dùng ngôn ngữ cá nhân: On the other hand, I agree with those who...'],
            },
            { time: 'Phút 36–38', minutes: 3, title: 'Viết Conclusion', details: ['1–2 câu dùng While / Although.'] },
            { time: 'Phút 39–40', minutes: 2, title: 'Rà soát', details: ['Chạy Checklist 5 điểm bên dưới.'] },
          ],
        },
        {
          type: 'checklist',
          title: 'Checklist 5 điểm rà soát cuối giờ (nâng ngay 0.5 Band GRA & TR)',
          items: [
            { label: 'Position', text: 'Câu cuối Mở bài, câu đầu Body 2 và câu Kết bài đã đồng nhất một quan điểm chưa?' },
            { label: 'Voice', text: 'Body 1 đã có cụm từ chỉ "quan điểm của người khác" chưa, hay đang viết như ý của chính mình?' },
            {
              label: 'S-V Agreement & số ít/nhiều',
              text: 'Danh từ đếm được số ít đã có mạo từ (a/an/the) hoặc chuyển sang số nhiều chưa? (Thiếu "s" hoặc thiếu mạo từ là kẻ thù số 1 của GRA 7.0.)',
            },
            { label: 'Linear explanation', text: 'Có nhận định nào chưa có câu giải thích Why / How hoặc For example đi kèm không?' },
            {
              label: 'Word choice',
              text: 'Có từ nối dùng sai bản chất ngữ pháp không (Besides thay cho Furthermore, hoặc Although ... but ... trong cùng một câu)?',
            },
          ],
        },
      ],
    },
  ],
}
