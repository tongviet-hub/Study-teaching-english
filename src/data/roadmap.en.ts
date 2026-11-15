// Bản tiếng Anh của các bài học, khớp theo id bài và thứ tự từng mục trong roadmap.ts.
export type LessonEn = {
  title: string
  objectives: string[]
  summary: string
  keyPoints: string[]
  example: string
  practice: string[]
}

export const lessonsEn: Record<string, LessonEn> = {
  'phonology-basics': {
    title: 'Phonology basics & the IPA chart',
    objectives: [
      'Read and write the IPA transcription of common words',
      'Distinguish monophthongs, diphthongs, and voiced/voiceless consonants',
      'Recognise word stress, sentence stress and weak forms',
    ],
    summary:
      'Teachers need to hear and pinpoint specific pronunciation errors. The phonemic chart (the 44 sounds of British English) is the main tool for making sounds "visible". Beyond individual sounds (segmental features), suprasegmental features such as stress, rhythm, intonation and linking affect listening comprehension even more.',
    keyPoints: [
      'The smallest unit of sound that changes meaning: /ʃɪp/ ship vs /ʃiːp/ sheep (a minimal pair).',
      'Pairs like /b/–/p/, /d/–/t/, /v/–/f/: put a hand on your throat to feel the vocal cords vibrate.',
      'PHOtograph – phoTOgrapher – photoGRAphic: stress moves with the suffix.',
      '"Can" in "I can swim" is usually /kən/. Schwa is the most common sound in English.',
      'Linking, elision and assimilation: "did you" → /dɪdʒu/.',
    ],
    example:
      'A student says "I live in a big sip". The teacher writes /ʃ/ and /s/ on the board, drills the minimal pairs "ship – sip, she – see, shoe – Sue", asks students to point to the sound they hear, then say it themselves.',
    practice: [
      'Transcribe 20 words from an A2 reading text into IPA.',
      'Record yourself speaking for 1 minute and mark the weak forms and linking you used.',
      'List 5 typical pronunciation errors of Vietnamese learners (e.g. dropping final consonants, /θ/ → /t/) and how to fix them.',
    ],
  },
  'pedagogical-grammar': {
    title: 'Pedagogical grammar: Form – Meaning – Use',
    objectives: [
      'Analyse a grammar structure in terms of form, meaning and use',
      'Predict learners\' anticipated problems',
      'Draw timelines and write CCQs for tenses',
    ],
    summary:
      'Pedagogical grammar differs from academic grammar: the goal is not to list every rule but to select what is needed, explain it simply and predict where learners will go wrong. Every language point should be analysed before the lesson (language analysis) – a required part of CELTA/TESOL lesson plans.',
    keyPoints: [
      'Structure: S + have/has + past participle. Includes positive, negative, question and contracted forms.',
      'Core meaning: a past action connected to, or with a result in, the present.',
      'Contexts: life experiences ("Have you ever…?"), recent news ("I\'ve lost my keys").',
      'Vietnamese has no tense inflection → learners say "I have seen him yesterday". Solution: timeline + CCQs.',
      'A drawing of a time line helps learners "see" the meaning of a tense.',
    ],
    example:
      'Teaching "used to": Context – a photo of grandpa smoking when he was young; he doesn\'t smoke now. CCQs: "Did he smoke in the past? (Yes) Does he smoke now? (No) Did he smoke once or many times? (Many times)".',
    practice: [
      'Complete a language analysis table (form/meaning/use/problems/solutions) for the present perfect.',
      'Write 3 CCQs for each of these: "should", "used to", "be going to".',
    ],
  },
  lexis: {
    title: 'Vocabulary: more than word meaning',
    objectives: [
      'Know what to teach about a word (form, meaning, collocation, register…)',
      'Distinguish productive and receptive vocabulary',
    ],
    summary:
      '"Knowing a word" involves many layers: spelling, pronunciation, meaning, part of speech, collocation, register and figurative meaning. The teacher selects which layers to teach depending on level and lesson aims.',
    keyPoints: [
      '"make a decision", "heavy rain" – natural word partnerships that cannot be predicted by rules.',
      '"By the way", "I was wondering if…" – teach the whole phrase as one unit.',
      '"kids" (informal) vs "children" (neutral) vs "offspring" (formal).',
      'Words learners need to use vs words they only need to understand when reading/listening.',
    ],
    example:
      'Teaching "commute": a picture of someone taking the train to work → CCQs "Is it a short trip? Do you do it every day? Is it for a holiday?" → pronunciation drill /kəˈmjuːt/ → collocations "a long commute", "commute to work".',
    practice: [
      'Choose 8 words from a reading text, classify them as productive/receptive and justify your choices.',
      'Design 3 ways to convey meaning without translation: pictures, realia, mime/context.',
    ],
  },
  'sla-theories': {
    title: 'Krashen, Input, Output & Interaction',
    objectives: [
      'Summarise Krashen\'s five hypotheses',
      'Explain the roles of comprehensible input, output and interaction',
      'Connect theory to classroom activities',
    ],
    summary:
      'No single theory fully explains second language learning, but together they suggest general principles: learners need plenty of comprehensible input, chances to produce meaningful output, interaction to "negotiate meaning" and attention to language form (noticing).',
    keyPoints: [
      'Input slightly above the learner\'s current level promotes progress.',
      'Anxiety and low confidence "close" the door to acquisition → the classroom must feel safe.',
      'When learners have to speak or write, they notice gaps in their knowledge.',
      'Asking for clarification and negotiating meaning in conversation drives acquisition.',
      'Learners must "notice" a form in order to learn it.',
    ],
    example:
      'Before students talk about their holidays, the teacher tells a story about their own holiday (input), students note down phrases they hear (noticing), then tell a partner and answer the partner\'s questions (output + interaction).',
    practice: [
      'Write a 200-word reflection: which hypothesis matches your own experience of learning English?',
      'For each hypothesis, suggest one classroom activity that illustrates it.',
    ],
  },
  'learner-differences': {
    title: 'Learners: motivation, age and CEFR levels',
    objectives: [
      'Describe CEFR levels A1–C2 using "can-do statements"',
      'Distinguish intrinsic and extrinsic motivation and how to foster it',
      'Explain differences in teaching children, teenagers and adults',
    ],
    summary:
      'The same lesson plan can succeed with one class and fail with another. Teachers need to analyse their learners – level (CEFR), goals, age, learning preferences, cultural background and motivation – and adapt content accordingly.',
    keyPoints: [
      'A six-level framework (A1–C2) describing ability in terms of what learners "can do".',
      'Learning out of interest or because it feels meaningful – more lasting than motivation from grades.',
      'A start-of-course survey: why are you learning, what is difficult, how do you like to learn?',
    ],
    example:
      'A class of working adults needs English for meetings: instead of a reading about animals, the teacher uses real work emails as material – while teaching the same grammar point.',
    practice: [
      'Write an 8-question needs analysis for an adult class.',
      'Read the B1 can-do statements and assess an imaginary learner against them.',
    ],
  },
  'traditional-methods': {
    title: 'GTM, the Direct Method & Audio-lingualism',
    objectives: [
      'Describe the features, strengths and weaknesses of three traditional methods',
      'Recognise traces of them in Vietnamese classrooms today',
    ],
    summary:
      'Grammar-Translation (GTM) focuses on translation and rules – useful for reading texts but weak for communication. The Direct Method bans the mother tongue and teaches through pictures and question-and-answer. Audio-lingualism is based on behaviourism: repetition, drills and habit formation – still useful for pronunciation and accuracy.',
    keyPoints: [
      'Translating sentences, memorising rules and word lists. Teacher-centred.',
      'Only the target language is used; grammar is learned inductively.',
      'Repetition drills, substitution drills, immediate error correction.',
    ],
    example:
      'Substitution drill: T: "I go to school by bus. – Train." S: "I go to school by train." T: "Bike." S: "I go to school by bike."',
    practice: [
      'Make a table comparing the three methods: aims, teacher role, learner role, skills emphasised.',
      'Write a 6-turn substitution drill for "There is/are".',
    ],
  },
  clt: {
    title: 'Communicative Language Teaching (CLT)',
    objectives: [
      'Explain the concept of communicative competence',
      'Design activities with an information gap',
      'Balance accuracy and fluency',
    ],
    summary:
      'CLT views language as a tool for communication. Good activities have a real purpose, an information gap and allow learners to choose their language. The teacher acts as a facilitator, reducing Teacher Talking Time (TTT) and increasing Student Talking Time (STT).',
    keyPoints: [
      'Includes grammatical, discourse, strategic and sociolinguistic competence.',
      'A has information B needs and vice versa → they must communicate.',
      'Accuracy activities (correct errors immediately) vs fluency activities (correct errors later).',
      'Teacher Talking Time / Student Talking Time.',
    ],
    example:
      'Spot the difference: A and B each have a picture of a living room with 6 differences. Without looking at each other\'s picture, they ask "Is there a lamp next to the sofa?" to find the differences.',
    practice: [
      'Turn a gap-fill exercise from a coursebook into an information-gap activity.',
      'Record 15 minutes of your teaching and estimate the TTT/STT ratio.',
    ],
  },
  'tblt-lexical-clil': {
    title: 'TBLT, the Lexical Approach & CLIL',
    objectives: [
      'Describe Jane Willis\'s TBL framework (pre-task, task cycle, language focus)',
      'Know when to use the Lexical Approach and CLIL',
    ],
    summary:
      'Task-Based Learning puts a task with a real outcome (planning a trip, solving a problem) at the centre; language is focused on after learners have tried to use it. The Lexical Approach (Michael Lewis) sees language as a collection of chunks. CLIL teaches subject content through English.',
    keyPoints: [
      'Introduce the topic, activate vocabulary, set the task.',
      'Task → Planning → Report: learners do the task, prepare, and present.',
      'Analysis + Practice: examine the language that came up during the task.',
      'Content, Communication, Cognition, Culture.',
    ],
    example:
      'Task: "Your group has 5 million VND to organise an end-of-year party – make a plan and persuade the class to choose it." After the reports, the teacher highlights "We could…", "How about…", "It would be better to…".',
    practice: [
      'Design a task using Willis\'s framework for B1 learners (state the outcome clearly).',
      'Compare PPP and TBL: write 5 differences.',
    ],
  },
  'ppp-ttt-esa': {
    title: 'PPP, TTT and ESA',
    objectives: [
      'Build lessons using PPP, TTT and ESA',
      'Choose a framework that suits the level and aims',
    ],
    summary:
      'PPP (Presentation – Practice – Production) is easy for new teachers and low-level classes. TTT (Test – Teach – Test) suits learners who already partly know the language – test first to teach exactly what is missing. ESA (Engage – Study – Activate, Jeremy Harmer) is flexible and can be re-ordered (boomerang, patchwork).',
    keyPoints: [
      'Context → clarify meaning (CCQs) → form → pronunciation.',
      'Controlled practice: drills, gap-fills, sentence matching.',
      'Freer practice: role-play, discussion, writing.',
      'Test 1 (task) → Teach (the gaps) → Test 2 (a similar task).',
      'Engage (create interest) – Study (focus on language) – Activate (free use).',
    ],
    example:
      'PPP – Comparatives: (P) Compare two phones in photos → "This phone is cheaper than that one" → CCQs + form. (P) A gap-fill with comparative forms. (P) Pairs compare two cities they have visited.',
    practice: [
      'Write a 45-minute outline for the same grammar point using PPP and then TTT.',
      'Watch a demo lesson on TeachingEnglish and identify its framework.',
    ],
  },
  'teaching-reading': {
    title: 'Teaching reading',
    objectives: [
      'Build a reading lesson using pre – while – post',
      'Distinguish gist, scanning, detail and inference',
      'Design questions of increasing difficulty',
    ],
    summary:
      'A reading lesson is not just "read and answer questions". Pre-reading activates background knowledge and deals with blocking vocabulary. While-reading moves from reading for gist to reading for detail. Post-reading shifts to a productive skill (speaking/writing) related to the topic.',
    keyPoints: [
      'Photos, personal questions, predicting from the title – 3–5 minutes.',
      'Read quickly within a time limit to choose a title or main idea.',
      'Find specific information: numbers, names, dates.',
      'True/False/Not given, open questions, inference.',
      'Let learners compare answers in pairs before whole-class feedback.',
    ],
    example:
      '"A day in the life of a nurse": Lead-in – "Would you like to be a nurse? Why?" → Pre-teach "shift, ward" → Gist: choose 1 of 3 titles (2 minutes) → Detail: 6 T/F questions → Post: pairs interview each other about a working day.',
    practice: [
      'Choose a B1 text and plan all three stages, with timings for each step.',
      'Write 2 gist questions and 5 detail questions for the same text.',
    ],
  },
  'teaching-listening': {
    title: 'Teaching listening',
    objectives: [
      'Build a listening lesson with several listens, each with a different purpose',
      'Support both bottom-up and top-down listening skills',
    ],
    summary:
      'Listening is the most anxiety-inducing skill because learners cannot "re-read". Each listen needs a clear task, given before listening. Besides understanding meaning (top-down), learners need practice decoding sound (bottom-up), such as recognising weak forms and word boundaries.',
    keyPoints: [
      'Use background knowledge and context to predict and understand.',
      'Recognise sounds, words and phrases in the stream of speech (dictation, gap-fill).',
      'After listening, show the script so learners can notice what they missed.',
    ],
    example:
      'A hotel booking conversation: listen 1 – "How many people? Do they get a room?" → listen 2 – complete the booking form → listen 3 – listen and read the script, underlining polite phrases.',
    practice: [
      'Design a 5-minute micro-listening (bottom-up) activity using 2 sentences from the audio.',
      'Write 3 tasks for 3 listens of the same 2-minute recording.',
    ],
  },
  'teaching-speaking': {
    title: 'Teaching speaking',
    objectives: [
      'Design purposeful speaking activities with preparation time',
      'Correct errors during fluency activities without interrupting',
    ],
    summary:
      'Learners need preparation (ideas + language) and thinking time before speaking. Tasks need a clear outcome. During fluency activities, the teacher monitors, notes errors and good language, and gives feedback at the end (delayed feedback).',
    keyPoints: [
      'Let learners speak a second or third time with a new partner – fluency improves noticeably.',
      'Write errors on the board anonymously and correct them as a class.',
      'Pairwork, groupwork, mingle, open pairs.',
    ],
    example:
      '"Find someone who…": each student has a sheet with 8 prompts ("…has been to Da Lat") and walks around asking "Have you ever…?" to find people. Afterwards, they share the most interesting thing they learned.',
    practice: [
      'Design a role-play with role cards for A2 learners.',
      'Create a monitoring sheet (good language / errors) to use while monitoring.',
    ],
  },
  'teaching-writing': {
    title: 'Teaching writing: product & process',
    objectives: [
      'Distinguish product writing and process writing',
      'Use model texts and clear assessment criteria',
    ],
    summary:
      'The product approach analyses a model text and then imitates it. The process approach focuses on the steps: brainstorm → outline → draft → peer review → revise → final draft. Combining both (the genre approach) is often effective: learn the features of a genre through a model, then write through a process.',
    keyPoints: [
      'A sample text for analysing the structure and typical language of a genre.',
      'Learners read a partner\'s draft using a checklist before submitting.',
      'Symbols like Sp (spelling), T (tense), WO (word order) so learners can self-correct.',
    ],
    example:
      'Writing a leave-request email: analyse a model email (greeting, reason, request, closing) → learners outline → write a draft → swap and check with a 5-point checklist → rewrite.',
    practice: [
      'Create a 10-symbol correction code and use it to mark a sample text.',
      'Write a peer-review checklist for an "opinion paragraph".',
    ],
  },
  'ccq-icq': {
    title: 'Eliciting, CCQs & ICQs',
    objectives: [
      'Elicit rather than explain',
      'Write short, easy-to-answer CCQs that avoid the target word',
      'Check instructions with ICQs',
    ],
    summary:
      'Eliciting means drawing knowledge out of learners through prompts instead of telling them. CCQs (Concept Checking Questions) check understanding of meaning – "Do you understand?" is not a CCQ. ICQs (Instruction Checking Questions) check that learners know what to do before they start.',
    keyPoints: [
      'Short, with Yes/No or either/or answers, in language simpler than the target item.',
      '"Are you writing or speaking?" "Alone or in pairs?" "How many minutes?"',
      'Keep it short – Demonstrate – Hand out materials AFTER instructions – ICQs.',
    ],
    example: 'For "borrow": "Is it mine or yours?" (yours) – "Will I give it back?" (yes) – "Do I pay money?" (no).',
    practice: [
      'Write CCQs for 10 items: rent, regret, crowded, should, might, used to, afford, late, almost, wish.',
      'Rewrite a 60-word set of instructions in 20 words or fewer + 3 ICQs.',
    ],
  },
  'pronunciation-teaching': {
    title: 'Teaching pronunciation & drilling',
    objectives: [
      'Integrate pronunciation into vocabulary and grammar lessons',
      'Carry out choral and individual drills with the right technique',
    ],
    summary:
      'Pronunciation should be taught continuously, linked to the language being learned. Drilling: the teacher models naturally → the whole class repeats (choral) → individuals repeat (individual). Use fingers, the board and tapping to show stress and linking.',
    keyPoints: [
      'Say it at natural speed – don\'t slow down and distort the sounds.',
      'Drill long sentences from the end: "…yesterday" → "…to the park yesterday" → "I went to the park yesterday".',
      'Each finger is a word; fold two fingers together to show a contraction "I am → I\'m".',
    ],
    example:
      'Teaching "What would you like to do?": the teacher marks the stress on the board, back-chains "…to do?" → "…like to do?" → "What would you like to do?", focusing on /wʊdʒə/.',
    practice: [
      'Mark sentence stress and linking in 5 lines of dialogue.',
      'Film yourself drilling one sentence using back-chaining.',
    ],
  },
  'lesson-plan-anatomy': {
    title: 'Anatomy of a good lesson plan',
    objectives: [
      'Write clear aims (main aim, subsidiary aim, personal aim)',
      'Divide the lesson into purposeful stages (stage aims) with timings',
      'Plan for anticipated problems & solutions',
    ],
    summary:
      'A TESOL/CELTA lesson plan usually includes: class profile, aims, assumptions, anticipated problems, language analysis, procedure (stage – aim – procedure – interaction – time) and materials. Every stage must answer the question "Why is this step here?".',
    keyPoints: [
      '"By the end of the lesson, SS will be able to…" – learner-focused and measurable.',
      'The purpose of each step: "to generate interest", "to check understanding".',
      'T–SS, SS–SS, S–S, S (individual).',
      'A backup activity in case you have extra or too little time.',
    ],
    example:
      'Main aim: "By the end of the lesson, SS will be able to use \'should/shouldn\'t\' to give advice about health problems in a role-play." – the language, context and evidence of success are all clear.',
    practice: [
      'Write a full 45-minute lesson plan for A2 learners (using PPP).',
      'Review your plan with the question: does every stage serve the main aim?',
    ],
  },
  'classroom-management-basics': {
    title: 'Classroom management: instructions, grouping, timing',
    objectives: [
      'Arrange seating and group learners flexibly',
      'Use voice, gesture and eye contact effectively',
      'Handle very quiet or dominant learners',
    ],
    summary:
      'Good classroom management maximises real learning time. It includes arranging seating for each activity, quick grouping, agreed signals to stop, monitoring while learners work, and building rapport.',
    keyPoints: [
      'Walk around and listen – don\'t intervene too early, take notes for feedback.',
      'Number off 1-2-3; mix or match levels depending on the purpose.',
      'Remember names, show interest in learners\' lives, give specific praise.',
      'Wait 3–5 seconds after a question before nominating someone.',
    ],
    example:
      'Student A always answers first: the teacher uses "Think – Pair – Share": think for 1 minute, discuss with a partner, then the teacher nominates pairs to share – everyone gets a chance.',
    practice: [
      'Write 5 difficult classroom situations (phone use, silence…) and how you would handle them.',
      'Draw 3 seating plans for 3 different types of activity.',
    ],
  },
  'error-correction': {
    title: 'Error correction & feedback',
    objectives: [
      'Distinguish errors from mistakes',
      'Use correction techniques: recasts, elicitation, finger correction',
      'Decide when, whom and how to correct',
    ],
    summary:
      'A mistake is a slip learners can self-correct; an error comes from not knowing yet. Not every error needs correcting immediately – it depends on the activity aim (accuracy or fluency). Prioritise self-correction, then peer correction, and teacher correction last.',
    keyPoints: [
      'Repeat the correct version naturally: "I goed" → "Oh, you went there?"',
      '"Yesterday I…?" – pause so the learner completes it themselves.',
      'The order of priority for correcting errors.',
    ],
    example:
      'S: "She don\'t like coffee." T holds up 4 fingers, touches the second one and frowns → S: "She doesn\'t like coffee."',
    practice: [
      'Classify 10 errors from a recorded speaking activity as errors or mistakes.',
      'For each one, choose a suitable correction technique and explain why.',
    ],
  },
  assessment: {
    title: 'Assessment: formative & summative',
    objectives: [
      'Distinguish formative and summative assessment',
      'Understand the qualities of a good test: validity, reliability, practicality',
      'Design a simple rubric for speaking/writing',
    ],
    summary:
      'Formative assessment happens continuously during learning to adjust teaching (exit tickets, observation, quick quizzes). Summative assessment evaluates results at the end of a period. A good test measures what it is meant to measure (validity), gives consistent results (reliability) and is feasible (practicality).',
    keyPoints: [
      'At the end of class, learners write 1 thing they learned + 1 question they still have.',
      'The effect of a test on teaching and learning (positive or negative).',
      'A criteria table: fluency, accuracy, range, pronunciation – each scored 0–5.',
    ],
    example:
      'At the end of a present perfect lesson, learners write 2 sentences about their experiences on sticky notes and put them on the door. The teacher reads them quickly to see what needs reviewing next lesson.',
    practice: [
      'Design a 4-criterion rubric for a 2-minute B1 speaking task.',
      'Write 5 quick formative questions for a "Comparatives" lesson.',
    ],
  },
  'young-learners-online': {
    title: 'Teaching young learners & teaching online',
    objectives: [
      'Adapt activities for children (TPR, games, songs)',
      'Run online classes: breakout rooms, interactive tools',
    ],
    summary:
      'Children have short attention spans and learn through movement and fun repetition. Total Physical Response (TPR) combines actions with language. Online classes need clearer instructions, frequent changes of activity and good use of chat, whiteboards and breakout rooms to increase STT.',
    keyPoints: [
      '"Stand up, touch your nose, jump!" – understanding through action, before being asked to speak.',
      'A hello song and fixed routines help children feel secure.',
      'Cameras on, reactions, polls, chat waterfall (everyone types, then sends at the same time).',
    ],
    example:
      'A class of 6-year-olds learning animals: the teacher says "Hop like a rabbit!" and everyone hops. Then a game of "Simon says" and colouring the animals they have just learned.',
    practice: [
      'Plan a 30-minute sequence for 7-year-olds with 4 activities that change the pace.',
      'Turn a classroom mingle activity into an online version.',
    ],
  },
  'choose-tesol': {
    title: 'Choosing the right TESOL course',
    objectives: [
      'Know the minimum standard employers accept (120 hours with teaching practice)',
      'Check the provider\'s accreditation',
      'Compare online, face-to-face and hybrid options',
    ],
    summary:
      'TESOL is not awarded by a single organisation, so quality varies widely. A common standard accepted by employers: at least 120 hours, teaching practice observed by a qualified trainer, and accreditation by an independent body. Decide on your goal (teaching at a local centre, abroad, or online) before choosing.',
    keyPoints: [
      'The minimum commonly seen in job advertisements.',
      '6–10 hours of real teaching observed and commented on – highly valued.',
      'Verify that the accrediting body is real and independent; avoid "certificate mills".',
      'Usually B2–C1 English; some courses include an interview or test.',
    ],
    example:
      'Goal: teach at a language centre in Vietnam within a year → choose a 120h+ hybrid TESOL course with teaching practice with real learners and trainers holding a DELTA/MA TESOL.',
    practice: [
      'Make a table comparing 3 TESOL courses you found by hours, practice, accreditation, price and schedule.',
      'Write 5 questions to ask the provider before enrolling.',
    ],
  },
  'teaching-practice': {
    title: 'Preparing for Teaching Practice (TP)',
    objectives: [
      'Know the criteria commonly used to assess TP',
      'Write an in-depth self-evaluation after each lesson',
    ],
    summary:
      'Teaching Practice is the most important part. Observers usually assess: whether the main aim was achieved, language clarification, instructions and ICQs, monitoring, error correction, the TTT/STT balance and time management. After each lesson, write a self-evaluation: what went well, what to improve, and concrete actions for next time.',
    keyPoints: [
      'Turn feedback into action: "Give instructions before handing out the worksheet".',
      'Use evidence: "SS completed the task in 4 minutes, showing the instructions were clear."',
      'Observe other trainees and take notes against the criteria.',
    ],
    example:
      'Tutor feedback: "Instructions were too long." → Action point for next time: script instructions in the plan beforehand, maximum 3 sentences + demo + 2 ICQs.',
    practice: [
      'Film a 20-minute practice lesson (with friends or family) and observe yourself with a checklist.',
      'Write a 300-word self-evaluation of that lesson.',
    ],
  },
  assignments: {
    title: 'Common written assignments',
    objectives: [
      'Know the 4 common types of assignment on TESOL/CELTA courses',
      'Plan your time for completing assignments',
    ],
    summary:
      'Intensive TESOL courses often have 4 written assignments: (1) Focus on the learner – analysing learners and their needs; (2) Language related tasks – analysing grammar/vocabulary/pronunciation; (3) Language skills related tasks – designing a skills lesson from authentic material; (4) Lessons from the classroom – reflecting on your learning and planning your development.',
    keyPoints: [
      'Usually 750–1000 words per assignment, closely following the course criteria.',
      'Real material (newspapers, videos, podcasts) not written for learners.',
      'Most courses allow one resubmission if the first attempt is not passed.',
    ],
    example:
      'Language related task: analyse form/meaning/use/pronunciation for 4 language items, writing CCQs and anticipated problems for each.',
    practice: [
      'Try a "Language related task" for any 2 structures.',
      'Make a 4-week study schedule for an intensive course.',
    ],
  },
  'professional-development': {
    title: 'Your development path after TESOL',
    objectives: [
      'Know the advanced qualifications and when to take them',
      'Plan 12 months of continuing professional development (CPD)',
    ],
    summary:
      'TESOL is a starting point. Depending on your goals, you can take the TKT (a knowledge test with no teaching), the CELTA (a widely recognised practical certificate), and later the DELTA or a master\'s in TESOL/Applied Linguistics after a few years of experience. CPD includes reading, attending conferences, peer observation and action research.',
    keyPoints: [
      'Independent modules testing core knowledge – good for revising theory.',
      '120 hours + 6 hours of TP, widely recognised internationally.',
      'An advanced level, usually requiring about a year or more of teaching experience.',
      'Keep a teaching journal after every lesson.',
    ],
    example:
      'Plan: months 1–3 complete TESOL → months 4–9 teach part-time + keep a journal → month 10 take TKT Module 1 → next year consider CELTA.',
    practice: [
      'Write a 12-month CPD plan with one goal per quarter.',
      'Choose 2 classic teaching books (e.g. by Harmer, Scrivener) and schedule your reading.',
    ],
  },
}
