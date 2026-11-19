import type { WritingChapter } from './types'

const prompt =
  'In many cities around the world, traffic congestion is becoming an increasingly serious problem. What are the main causes of this problem, and what measures could be taken to solve it?'

export const ch4: WritingChapter = {
  id: 'causes-effects-solutions',
  number: 4,
  title: 'Dạng bài Causes – Effects – Solutions',
  shortTitle: 'Causes – Effects – Solutions',
  tagline: 'Chẩn đoán trước, kê đơn sau: mỗi giải pháp phải "khớp khóa" với một nguyên nhân hoặc hậu quả đã nêu.',
  status: 'Đã hoàn thiện',
  samplePrompt: prompt,
  sections: [
    {
      id: 's1',
      number: 1,
      title: 'Bản chất đề bài & các lỗi chí mạng',
      blocks: [
        { type: 'heading', text: '1.1. Nhận diện đề bài và các tổ hợp câu hỏi' },
        {
          type: 'p',
          text: 'Đề nêu một **vấn đề xã hội/môi trường** (ùn tắc giao thông, béo phì trẻ em, rác thải nhựa, tội phạm vị thành niên...) và hỏi **hai trong ba** khía cạnh sau. Hãy xác định chính xác tổ hợp vì mỗi tổ hợp là một "bản hợp đồng" khác nhau với giám khảo:',
        },
        {
          type: 'list',
          items: [
            '**Causes + Solutions:** "What are the causes? What measures could be taken?" – phổ biến nhất.',
            '**Problems/Effects + Solutions:** "What problems does this cause? How can they be solved?"',
            '**Causes + Effects:** "Why is this happening? What are the effects on individuals and society?"',
          ],
        },
        {
          type: 'p',
          text: 'Đây là dạng **giải thích – giải quyết (explanatory / problem-solving)**, không phải tranh luận. Bạn không cần đồng ý/phản đối, nhưng phải chứng minh hiểu biết về **cơ chế nhân quả** – đúng địa hạt mạnh nhất của Linearthinking.',
        },
        { type: 'heading', text: '1.2. Các lỗi chí mạng khiến thí sinh kẹt ở Band 6.0 – 6.5' },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 1: Giải pháp "lệch khóa" với nguyên nhân (Mismatched solutions)',
          text: 'Body 1 nêu nguyên nhân "dân số đô thị tăng nhanh, giao thông công cộng kém", Body 2 lại đề xuất "tuyên truyền ý thức lái xe an toàn". Theo Pauline Cullen, giám khảo đánh giá cao nhất khi **mỗi giải pháp xử lý trực tiếp một nguyên nhân đã nêu** – đây là bằng chứng của tư duy logic (CC + TR).',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 2: Liệt kê nguyên nhân như danh sách mua sắm (Shopping-list causes)',
          text: '"Firstly, there are many cars. Secondly, roads are small. Thirdly, people are lazy." – ba nguyên nhân, không cái nào được giải thích **tại sao** nó gây ra vấn đề. Simon Corcoran: "two well-explained ideas are worth more than five listed ones".',
        },
        {
          type: 'callout',
          tone: 'warn',
          title: 'Lỗi 3: Giải pháp chung chung, không có tác nhân và cơ chế',
          text: '"The government should solve this problem" là câu vô nghĩa với giám khảo. Một giải pháp Band 7+ phải có **Ai (agent) – Làm gì (action) – Cơ chế tác động (how it works) – Kết quả kỳ vọng (expected result)**.',
        },
        {
          type: 'callout',
          tone: 'note',
          title: 'Lưu ý: Có cần nêu ý kiến không?',
          text: 'Không bắt buộc. Nhưng nếu đề hỏi "To what extent can this problem be solved?" hoặc "Which solution is the most effective?", bạn phải đưa ra đánh giá rõ ràng – lúc đó đề đã chuyển thành dạng lai Opinion.',
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
                'Trả lời cả hai câu hỏi nhưng một phần mỏng hơn hẳn; nguyên nhân/giải pháp liệt kê, thiếu giải thích; giải pháp chung chung.',
                'Trả lời đầy đủ hai câu hỏi; 2 nguyên nhân được giải thích cơ chế; giải pháp cụ thể, có tác nhân và khớp với nguyên nhân.',
                'Phân tích nhân quả nhiều tầng (gốc rễ vs trực tiếp); giải pháp khả thi, có lý giải vì sao hiệu quả.',
                'Chẩn đoán sắc sảo bản chất hệ thống của vấn đề; giải pháp tinh tế, có xét đến giới hạn và đánh đổi.',
              ],
            },
            {
              criterion: 'Coherence & Cohesion (CC)',
              cells: [
                'Đoạn văn có cấu trúc nhưng nối ý cơ học (Firstly, Secondly, Lastly); nguyên nhân và giải pháp tách rời.',
                'Body 2 quy chiếu ngược về Body 1 (To address the first cause...); dùng từ nối nhân quả chính xác.',
                'Liên kết nguyên nhân – giải pháp chặt chẽ như hai nửa của một hệ thống.',
                'Mạch "chẩn đoán → điều trị" liền mạch tự nhiên, không cần từ nối hình thức.',
              ],
            },
            {
              criterion: 'Lexical Resource (LR)',
              cells: [
                'Lặp "cause, problem, solve, reason"; ít động từ nhân quả.',
                'Đa dạng động từ nhân quả (stem from, give rise to, fuel, exacerbate) và động từ giải pháp (tackle, curb, alleviate).',
                'Từ vựng chính sách chính xác (congestion charge, incentivise, infrastructure investment).',
                'Từ vựng chuyên ngành dùng tự nhiên, sắc thái chính xác.',
              ],
            },
            {
              criterion: 'Grammatical Range & Accuracy (GRA)',
              cells: [
                'Câu điều kiện và câu bị động còn lỗi; nhiều câu đơn.',
                'Câu bị động, câu điều kiện loại 1–2, mệnh đề quan hệ chính xác; nhiều câu không lỗi.',
                'Mệnh đề phân từ, cấu trúc "By + V-ing", danh từ hóa nguyên nhân thành thạo.',
                'Toàn bộ chính xác; cấu trúc đa dạng mà vẫn tự nhiên.',
              ],
            },
          ],
        },
        { type: 'heading', text: '2.1. Bí quyết trọng tâm để cán mốc Band 7.0' },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Quy tắc "Khóa – Chìa" (Lock & Key Matching)',
          text: 'Nguyên nhân 1 ↔ Giải pháp 1, Nguyên nhân 2 ↔ Giải pháp 2. Khi viết Body 2, mở mỗi giải pháp bằng cụm quy chiếu: **"To tackle the first cause, ..."**, **"As for the shortage of..., ..."**. Giám khảo thấy ngay sự liên kết logic.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Linearthinking: chuỗi nhân quả 3 mắt xích',
          text: 'Không viết "There are too many cars." mà viết: **Gốc rễ** (đô thị hóa nhanh, người dân đổ về thành phố) → **Cơ chế** (nhu cầu đi lại vượt quá năng lực đường sá) → **Biểu hiện** (ùn tắc giờ cao điểm). Đi đủ 3 mắt xích là đủ "explained" cho Band 7.',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Công thức giải pháp 4 thành phần: A – A – M – R',
          text: '**Agent** (chính quyền thành phố) + **Action** (đầu tư mở rộng metro) + **Mechanism** (tạo lựa chọn thay thế nhanh, rẻ hơn xe cá nhân) + **Result** (giảm số xe trên đường giờ cao điểm). Một câu đủ 4 thành phần = một giải pháp "cụ thể và khả thi".',
        },
        {
          type: 'callout',
          tone: 'tip',
          title: 'Ví dụ thực tế có tên riêng tăng độ thuyết phục',
          text: 'Phí vào trung tâm ở London/Singapore, mạng metro ở Tokyo, làn xe buýt nhanh (BRT) ở Bogotá – một ví dụ có tên địa danh làm luận điểm "có thật" trong mắt giám khảo.',
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
          text: 'Tổng độ dài: **270 – 310 từ**. Blueprint cho tổ hợp **Causes + Solutions**; với Effects + Solutions chỉ cần thay "cause" bằng "effect/problem".',
        },
        {
          type: 'paragraphPlan',
          name: 'Introduction',
          meta: '2 câu · ~40–50 từ · 4 phút',
          sentences: [
            {
              label: 'Câu 1 – Paraphrase vấn đề',
              detail: 'Nêu vấn đề và mức độ nghiêm trọng.',
              template: '[Vấn đề] has become a pressing issue in [phạm vi] in recent years.',
            },
            {
              label: 'Câu 2 – Outline (báo trước nguyên nhân + giải pháp)',
              detail: 'Gọi tên luôn 2 nguyên nhân và hướng giải quyết.',
              template: 'This essay will argue that it stems mainly from [nguyên nhân 1] and [nguyên nhân 2], and that [tác nhân] could address it by [hướng giải pháp].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Body 1 – Causes (chẩn đoán)',
          meta: '5 câu · ~100–115 từ · 12 phút',
          sentences: [
            {
              label: 'Câu 1 – Topic sentence',
              detail: 'Giới thiệu đoạn nguyên nhân.',
              template: 'There are two principal reasons why [vấn đề] has worsened.',
            },
            {
              label: 'Câu 2 – Nguyên nhân 1 (gốc rễ)',
              detail: 'Nêu nguyên nhân sâu xa.',
              template: 'The most fundamental cause is [nguyên nhân 1].',
            },
            {
              label: 'Câu 3 – Cơ chế + ví dụ',
              detail: 'Giải thích chuỗi nhân quả.',
              template: 'As [diễn biến], [hệ quả trung gian], which inevitably leads to [vấn đề]. In [ví dụ], ...',
            },
            {
              label: 'Câu 4 – Nguyên nhân 2',
              detail: 'Nguyên nhân thứ hai.',
              template: 'This problem is further exacerbated by [nguyên nhân 2].',
            },
            {
              label: 'Câu 5 – Giải thích nguyên nhân 2',
              detail: 'Cơ chế gây ra vấn đề.',
              template: 'When [điều kiện], people have little choice but to [hành vi], thereby [hậu quả].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Body 2 – Solutions (kê đơn, khớp khóa)',
          meta: '5–6 câu · ~110–120 từ · 13 phút',
          note: 'Thứ tự giải pháp nên khớp thứ tự nguyên nhân ở Body 1.',
          sentences: [
            {
              label: 'Câu 1 – Topic sentence',
              detail: 'Chuyển sang giải pháp.',
              template: 'Fortunately, several measures could be taken to alleviate this problem.',
            },
            {
              label: 'Câu 2 – Giải pháp 1 (khớp nguyên nhân 1)',
              detail: 'Agent + Action.',
              template: 'To tackle [nguyên nhân 1], [tác nhân] should [hành động cụ thể].',
            },
            {
              label: 'Câu 3 – Mechanism + Result + ví dụ',
              detail: 'Vì sao giải pháp hiệu quả.',
              template: 'By [V-ing], they would [cơ chế], which would [kết quả]. [Ví dụ thành phố], for instance, ...',
            },
            {
              label: 'Câu 4 – Giải pháp 2 (khớp nguyên nhân 2)',
              detail: 'Agent + Action.',
              template: 'As for [nguyên nhân 2], [tác nhân] could [hành động].',
            },
            {
              label: 'Câu 5 – Kết quả kỳ vọng',
              detail: 'Hiệu quả của giải pháp 2.',
              template: 'This would [cơ chế], thereby encouraging [hành vi mong muốn].',
            },
          ],
        },
        {
          type: 'paragraphPlan',
          name: 'Conclusion',
          meta: '1–2 câu · ~35–45 từ · 4 phút',
          sentences: [
            {
              label: 'Tóm tắt nguyên nhân + giải pháp',
              detail: 'Có thể thêm đánh giá ngắn về tính khả thi.',
              template: 'In conclusion, [vấn đề] is largely the result of [nguyên nhân 1] and [nguyên nhân 2], but it can be significantly reduced if [tóm tắt giải pháp].',
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
          title: '4.1. Ngôn ngữ nguyên nhân (Cause language)',
          items: [
            { en: '[Problem] stems from / arises from / can be attributed to...', vi: '[Vấn đề] bắt nguồn từ / có thể quy cho...' },
            { en: '[Cause] gives rise to / fuels / triggers...', vi: '[Nguyên nhân] làm phát sinh / thúc đẩy / châm ngòi cho...' },
            { en: 'The root cause of ... lies in...', vi: 'Nguyên nhân gốc rễ của ... nằm ở...' },
            { en: 'This problem is exacerbated / compounded by...', vi: 'Vấn đề này càng trầm trọng thêm bởi...' },
            { en: 'A key contributing factor is...', vi: 'Một yếu tố góp phần quan trọng là...' },
          ],
        },
        {
          type: 'phrases',
          title: '4.2. Ngôn ngữ hậu quả (Effect language)',
          items: [
            { en: 'to have a detrimental / far-reaching impact on...', vi: 'có tác động tiêu cực / sâu rộng lên...' },
            { en: 'to take a heavy toll on...', vi: 'gây tổn hại nặng nề cho...' },
            { en: 'to result in / lead to / culminate in...', vi: 'dẫn đến / cuối cùng dẫn tới...' },
            { en: 'a knock-on effect on...', vi: 'hiệu ứng dây chuyền lên...' },
          ],
        },
        {
          type: 'phrases',
          title: '4.3. Ngôn ngữ giải pháp (Solution language)',
          items: [
            { en: 'to tackle / address / combat the problem of...', vi: 'giải quyết / xử lý / đấu tranh với vấn đề...' },
            { en: 'to alleviate / mitigate / curb...', vi: 'làm giảm bớt / hạn chế...' },
            { en: 'to incentivise / discourage people from + V-ing', vi: 'khuyến khích / ngăn cản người dân làm gì' },
            { en: 'to invest heavily in public infrastructure', vi: 'đầu tư mạnh vào cơ sở hạ tầng công cộng' },
            { en: 'to impose a congestion charge / levy on...', vi: 'áp phí ùn tắc / thu phí đối với...' },
          ],
        },
        { type: 'heading', text: '4.4. Bốn cấu trúc câu "ăn điểm" cho dạng Causes – Solutions' },
        {
          type: 'structure',
          title: 'By + V-ing (cơ chế của giải pháp)',
          formula: 'By + V-ing [hành động], [tác nhân] could [kết quả].',
          example: 'By expanding metro networks, city authorities could offer commuters a faster alternative to private cars.',
        },
        {
          type: 'structure',
          title: 'Câu điều kiện loại 2 (giải pháp giả định)',
          formula: 'If [tác nhân] + V2/ed..., [kết quả] would + V...',
          example: 'If governments imposed a charge on vehicles entering city centres during rush hour, many drivers would switch to public transport.',
        },
        {
          type: 'structure',
          title: 'Mệnh đề phân từ chỉ nguyên nhân',
          formula: 'Having + V3 / V-ing ..., [S] + V...',
          example: 'Lacking reliable public transport, many suburban residents have little choice but to drive to work.',
        },
        {
          type: 'structure',
          title: 'Danh từ hóa nguyên nhân',
          formula: 'Biến mệnh đề nguyên nhân thành chủ ngữ danh từ + động từ nhân quả.',
          before: 'Because more and more people move to cities, there are more cars on the roads.',
          after: 'Rapid urbanisation has fuelled a dramatic rise in private car ownership.',
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
          text: 'Cùng triển khai **Body 2 – Solutions (khớp với 2 nguyên nhân: giao thông công cộng kém & phụ thuộc xe cá nhân)** ở 4 mức Band:',
        },
        {
          type: 'bandSamples',
          samples: [
            {
              band: '6.0',
              label: 'Giải pháp chung chung, không khớp nguyên nhân',
              text: 'There are some solutions to this problem. Firstly, the government should do something to reduce traffic jams. For example, they can build more roads and bridges. Secondly, people should use public transport more because it is cheaper and better for the environment. Thirdly, people should go to work at different times. If we do these things, traffic congestion will be reduced.',
              comments: [
                '"The government should do something" không có hành động cụ thể.',
                'Ba giải pháp liệt kê, không quy chiếu về nguyên nhân ở Body 1.',
                'Không có cơ chế: vì sao xây đường lại giảm ùn tắc? (thực tế có thể gây "induced demand").',
              ],
            },
            {
              band: '7.0',
              label: 'Giải pháp cụ thể, khớp khóa nguyên nhân, có kết quả',
              text: 'Fortunately, several measures could be taken to tackle this problem. To address the poor quality of public transport, city authorities should invest in modern metro and bus rapid transit systems. If these services were fast, frequent and affordable, many commuters would choose them instead of driving. Singapore, for example, has developed an efficient metro network that carries millions of passengers every day. As for the over-reliance on private cars, governments could introduce a congestion charge for vehicles entering the city centre at peak times. This would discourage unnecessary journeys and encourage drivers to share cars or use public transport.',
              comments: [
                'Mỗi giải pháp mở đầu bằng cụm quy chiếu nguyên nhân (To address..., As for...).',
                'Có đủ Agent – Action – Result và ví dụ Singapore.',
                'Câu điều kiện loại 2 chính xác.',
              ],
            },
            {
              band: '8.0',
              label: 'Cơ chế rõ, ngôn ngữ chính sách chính xác',
              text: 'These causes, however, are far from insurmountable. Since inadequate public transport lies at the heart of the problem, the most effective remedy would be sustained investment in high-capacity systems such as metro lines and dedicated bus lanes. By offering a journey that is quicker and cheaper than driving, such networks would draw commuters away from private vehicles voluntarily rather than by force. Complementing this, authorities could impose a congestion charge on cars entering central districts during rush hour, a policy that has reduced traffic in London by around a third since its introduction. Crucially, the revenue generated could be reinvested in public transport, creating a self-reinforcing cycle.',
              comments: [
                'Giải pháp có thứ tự ưu tiên (most effective remedy → complementing this).',
                'Ý tưởng sắc sảo: doanh thu phí tái đầu tư → vòng lặp tự củng cố.',
                'Collocation chính sách: sustained investment, dedicated bus lanes, impose a congestion charge.',
              ],
            },
            {
              band: '9.0',
              label: 'Tư duy hệ thống: "củ cà rốt và cây gậy"',
              text: 'Addressing congestion, therefore, requires a combination of incentive and deterrent. The incentive must come first: unless public transport offers a genuinely competitive alternative, any attempt to restrict driving will merely penalise commuters who have no other option. Sustained investment in high-frequency metro lines and segregated bus corridors would make leaving the car at home a rational choice rather than a sacrifice. Only then should deterrents such as peak-hour congestion pricing be introduced—a measure that, in London and Stockholm, has cut central traffic substantially while generating revenue that can be ploughed back into the network. In this way, each measure reinforces the other.',
              comments: [
                'Khung "incentive vs deterrent" thể hiện tư duy hệ thống, có xét thứ tự triển khai.',
                'Xét đến giới hạn của giải pháp (penalise commuters who have no other option) – dấu hiệu Band 9 TR.',
                'Đảo ngữ "Only then should..." tự nhiên; collocation: segregated bus corridors, ploughed back into.',
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
              text: 'Traffic congestion has become a pressing issue in many of the world’s major cities. This essay will argue that it stems mainly from rapid urbanisation and inadequate public transport, and that a combination of infrastructure investment and road pricing could significantly ease the problem.',
            },
            {
              role: 'Body 1',
              text: 'There are two principal reasons why urban traffic has worsened. The most fundamental cause is rapid urbanisation. As people migrate to cities in search of work, the demand for daily travel grows far faster than the capacity of existing road networks, which inevitably results in gridlock during rush hours. This problem is further exacerbated by the poor quality of public transport in many cities. When buses are slow, crowded and unreliable, commuters have little choice but to rely on private cars or motorbikes, thereby putting even more vehicles on already saturated roads. In Jakarta and Manila, for instance, commuters routinely spend several hours a day in traffic.',
            },
            {
              role: 'Body 2',
              text: 'Fortunately, several measures could be taken to alleviate this problem. To tackle the shortage of reliable public transport, city authorities should invest heavily in high-capacity systems such as metro lines and dedicated bus lanes. By offering journeys that are quicker and cheaper than driving, these networks would encourage commuters to leave their cars at home voluntarily. Singapore’s efficient metro system demonstrates how effective this approach can be. Complementing this, governments could impose a congestion charge on vehicles entering city centres at peak times. This would discourage unnecessary journeys, and the revenue generated could be reinvested in public transport, creating a self-reinforcing cycle of improvement.',
            },
            {
              role: 'Conclusion',
              text: 'In conclusion, urban congestion is largely the result of rapid population growth and inadequate public transport, but it can be substantially reduced if cities combine investment in modern transit networks with carefully designed road pricing schemes.',
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
              title: 'Xác định tổ hợp câu hỏi & vẽ sơ đồ khóa – chìa',
              details: [
                'Gạch chân 2 câu hỏi: causes / effects / problems / solutions?',
                'Nháp 2 nguyên nhân theo chuỗi Gốc rễ → Cơ chế → Biểu hiện.',
                'Viết giải pháp đối diện từng nguyên nhân theo công thức Agent – Action – Mechanism – Result; chuẩn bị 1–2 ví dụ có tên địa danh.',
              ],
            },
            { time: 'Phút 6–9', minutes: 4, title: 'Viết Introduction', details: ['Paraphrase vấn đề + Outline gọi tên nguyên nhân & giải pháp.'] },
            { time: 'Phút 10–21', minutes: 12, title: 'Viết Body 1 (nguyên nhân)', details: ['2 nguyên nhân, mỗi cái đủ cơ chế nhân quả.'] },
            {
              time: 'Phút 22–34',
              minutes: 13,
              title: 'Viết Body 2 (giải pháp)',
              details: ['Giải pháp khớp đúng thứ tự nguyên nhân, mở bằng cụm quy chiếu.'],
            },
            { time: 'Phút 35–37', minutes: 3, title: 'Viết Conclusion', details: ['Tóm tắt nguyên nhân + giải pháp, không thêm ý mới.'] },
            { time: 'Phút 38–40', minutes: 3, title: 'Rà soát', details: ['Chạy Checklist bên dưới.'] },
          ],
        },
        {
          type: 'checklist',
          title: 'Checklist rà soát dạng Causes – Effects – Solutions',
          items: [
            { label: 'Both questions', text: 'Đã trả lời đủ cả hai câu hỏi với độ dài tương đương chưa?' },
            { label: 'Lock & Key', text: 'Mỗi giải pháp có xử lý trực tiếp một nguyên nhân/hậu quả đã nêu không?' },
            { label: 'A–A–M–R', text: 'Giải pháp đã có tác nhân, hành động cụ thể, cơ chế và kết quả chưa?' },
            { label: 'Causal chain', text: 'Mỗi nguyên nhân có ít nhất một câu giải thích "vì sao nó gây ra vấn đề" không?' },
            { label: 'Accuracy', text: 'Kiểm tra câu điều kiện loại 2 (would + V), câu bị động và mạo từ trước danh từ số ít.' },
          ],
        },
      ],
    },
  ],
}
