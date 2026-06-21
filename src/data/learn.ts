// Контентные SEO-страницы /learn/<slug>/ — глубокие разборы по 10 блокам.
// Факты (история/создатели/рекорды) проверены по web-источникам (см. sources),
// доказательная база честная. EN+RU полные; остальные языки добавляются позже.
import type { Lang } from '../i18n/ui';

export interface Block { h: string; body: string; }
export interface FAQ { q: string; a: string; }
export interface TopicContent {
  title: string; metaTitle: string; metaDesc: string; lead: string;
  blocks: Block[]; faq: FAQ[]; sources: string[];
}
export interface LearnTopic { slug: string; icon: string; content: Partial<Record<Lang, TopicContent>>; }

export const TOPICS: LearnTopic[] = [
  {
    slug: 'touch-typing', icon: '⌨️',
    content: {
      en: {
        title: 'Touch typing', metaTitle: 'Touch Typing — What It Is, How It Works & How to Learn | TypeRIGHTing',
        metaDesc: 'Touch typing explained: history (Frank McGurrin, 1888), benefits, the ten-finger method, how long it takes to learn, what research says, tips and FAQ.',
        lead: 'Touch typing is the skill of typing without looking at the keyboard, using all ten fingers and muscle memory. Here is where it came from, why it’s worth it, and how to learn it properly.',
        blocks: [
          { h: 'What touch typing is', body: 'Touch typing means typing by feel — your fingers find the keys from the home row (ASDF–JKL;) without your eyes leaving the screen. Each finger owns a zone of keys, and the small bumps on F and J anchor your hands. The opposite is “hunt and peck”: looking down and using two fingers.' },
          { h: 'Why it’s worth learning', body: 'A touch typist keeps their eyes on the text, not the keys — so you read, think and write at the same time. Typical gains: 2–3× faster than two-finger typing, far fewer errors, and much less fatigue over a long day. For anyone who writes for a living, it pays back the practice within weeks.' },
          { h: 'History', body: 'Touch typing was popularised by Frank Edward McGurrin, a court stenographer who taught himself to type without looking. On 25 July 1888 he beat Louis Traub (an eight-finger typist on a Caligraph) in a public contest in Cincinnati, won $500 and made front pages nationwide. The all-finger system itself had been promoted from around 1878 by Mrs. L. V. Longley of a Cincinnati stenography school.' },
          { h: 'Who created it', body: 'Credit is shared. Mrs. L. V. Longley taught a ten-finger method by the late 1870s; Frank McGurrin (1861–1933) proved its speed publicly in 1888. Historians note a dispute: whether McGurrin was truly the first to touch type, or simply the first to be widely noticed — so the honest answer is “popularised by McGurrin, with Longley’s method behind it.”' },
          { h: 'The method', body: 'The core is the home row: left hand on ASDF, right hand on JKL;, thumbs on the space bar. Every key is reached and returned from this base, each finger to its own column. You learn the layout in stages — home row, then top and bottom rows, then numbers and symbols — building muscle memory by repetition, not by looking.' },
          { h: 'How long it takes', body: 'Most learners reach comfortable touch typing in 2–4 weeks of short daily practice (15–30 minutes). Speed keeps climbing for months. The key is consistency and never looking down — slow-but-correct beats fast-but-peeking, because you’re training the right habit.' },
          { h: 'What research says', body: 'Touch typing is a motor skill built on muscle memory, so progress follows a learning curve with plateaus — periods where speed stalls before the next jump. Accuracy first, speed second is the well-supported approach: errors cost more time than slow keystrokes. Honestly, exact “WPM in N days” numbers vary widely by person and study.' },
          { h: 'Tips that actually help', body: 'Cover your hands or dim the keyboard so you can’t peek. Fix the home-row anchor on F and J before anything else. Train your weakest keys specifically. Keep sessions short and daily. Aim for ~95%+ accuracy before pushing speed.' },
          { h: 'Variants', body: 'Touch typing adapts to any layout: QWERTY (most common), AZERTY (France), QWERTZ (Germany) and the speed-oriented Dvorak. The fingering principle is the same — only which letter sits under each finger changes. National layouts also add accented keys (é, ü, ç, ß).' },
        ],
        faq: [
          { q: 'How long does it take to learn touch typing?', a: 'Usually 2–4 weeks of 15–30 minutes daily to type comfortably without looking; speed keeps improving for months after.' },
          { q: 'Is touch typing faster than using two fingers?', a: 'Yes — typically 2–3× faster, with fewer errors and less fatigue, because your eyes stay on the text instead of the keys.' },
          { q: 'Who invented touch typing?', a: 'Frank McGurrin popularised it by winning a public contest in 1888; the ten-finger method was promoted earlier by Mrs. L. V. Longley (~1878). Who was strictly “first” is disputed.' },
          { q: 'Should I learn speed or accuracy first?', a: 'Accuracy first. Aim for ~95%+ correct before pushing speed — errors cost more time than slow, correct keystrokes.' },
        ],
        sources: ['en.wikipedia.org/wiki/Touch_typing', 'en.wikipedia.org/wiki/Frank_Edward_McGurrin'],
      },
      ru: {
        title: 'Слепая печать', metaTitle: 'Слепая печать — что это, как работает и как научиться | TypeRIGHTing',
        metaDesc: 'Слепая печать: история (Фрэнк Макгаррин, 1888), польза, десятипальцевый метод, сколько учиться, что говорят исследования, советы и FAQ.',
        lead: 'Слепая печать — навык печатать не глядя на клавиатуру, всеми десятью пальцами и за счёт мышечной памяти. Откуда она взялась, зачем нужна и как освоить её правильно.',
        blocks: [
          { h: 'Что такое слепая печать', body: 'Слепая печать — это печать на ощупь: пальцы находят клавиши от домашнего ряда (ФЫВА–ОЛДЖ), а глаза не отрываются от экрана. У каждого пальца своя зона, а бугорки на А и О (F и J) держат руки на месте. Противоположность — «зрячий» набор двумя пальцами с подглядыванием.' },
          { h: 'Зачем учиться', body: 'При слепой печати глаза смотрят в текст, а не на клавиши — вы читаете, думаете и пишете одновременно. Типичный выигрыш: в 2–3 раза быстрее набора двумя пальцами, гораздо меньше ошибок и усталости за длинный день. Для тех, кто пишет по работе, навык окупается за недели.' },
          { h: 'История', body: 'Слепую печать прославил Фрэнк Эдвард Макгаррин, судебный стенограф, научившийся печатать не глядя. 25 июля 1888 года он обыграл Луиса Трауба (печатал восемью пальцами на «Калиграфе») в публичном состязании в Цинциннати, выиграл $500 и попал на первые полосы газет. Сам десятипальцевый метод продвигала с ~1878 года миссис Л. В. Лонгли из цинциннатской школы стенографии.' },
          { h: 'Кто создал', body: 'Заслуга общая. Миссис Л. В. Лонгли учила десятипальцевому методу уже в конце 1870-х; Фрэнк Макгаррин (1861–1933) публично доказал его скорость в 1888-м. Историки отмечают спор: был ли Макгаррин действительно первым, кто печатал вслепую, или лишь первым, кого заметили. Честный ответ — «прославил Макгаррин, а в основе метод Лонгли».' },
          { h: 'Метод', body: 'Основа — домашний ряд: левая рука на ФЫВА, правая на ОЛДЖ, большие пальцы на пробеле. К любой клавише палец идёт и возвращается от этой базы, каждый — в свою колонку. Раскладку осваивают по этапам — домашний ряд, потом верхний и нижний, потом цифры и знаки — нарабатывая мышечную память повторением, а не подглядыванием.' },
          { h: 'Сколько учиться', body: 'Большинство осваивает комфортную слепую печать за 2–4 недели коротких ежедневных занятий (15–30 минут). Скорость растёт ещё месяцами. Главное — регулярность и не подглядывать: «медленно, но верно» лучше, чем «быстро, но с подглядыванием», потому что вы закрепляете правильную привычку.' },
          { h: 'Что говорят исследования', body: 'Слепая печать — моторный навык на мышечной памяти, поэтому прогресс идёт по кривой обучения с плато — периодами, когда скорость замирает перед новым скачком. Подход «сначала точность, потом скорость» хорошо обоснован: ошибки стоят дороже, чем медленные нажатия. Честно: точные цифры «WPM за N дней» сильно разнятся по людям и исследованиям.' },
          { h: 'Что реально помогает', body: 'Закройте руки или приглушите клавиатуру, чтобы не подглядывать. Сначала закрепите опору на А и О (F и J). Тренируйте именно слабые клавиши. Занимайтесь коротко и каждый день. Держите точность ~95%+ прежде чем гнать скорость.' },
          { h: 'Разновидности', body: 'Слепая печать подходит к любой раскладке: QWERTY (самая частая), AZERTY (Франция), QWERTZ (Германия) и скоростная Dvorak. Принцип аппликатуры один — меняется лишь, какая буква под каким пальцем. Национальные раскладки добавляют буквы с диакритикой (é, ü, ç, ß).' },
        ],
        faq: [
          { q: 'Сколько времени нужно, чтобы научиться слепой печати?', a: 'Обычно 2–4 недели по 15–30 минут в день, чтобы печатать не глядя; скорость растёт ещё месяцами.' },
          { q: 'Слепая печать быстрее, чем двумя пальцами?', a: 'Да — обычно в 2–3 раза быстрее, с меньшим числом ошибок и усталости, потому что глаза остаются на тексте.' },
          { q: 'Кто изобрёл слепую печать?', a: 'Фрэнк Макгаррин прославил её, выиграв публичное состязание в 1888-м; десятипальцевый метод раньше продвигала миссис Л. В. Лонгли (~1878). Кто был строго «первым» — спорно.' },
          { q: 'Что учить сначала — скорость или точность?', a: 'Сначала точность. Держите ~95%+ правильных нажатий, прежде чем гнать скорость: ошибки стоят дороже медленных, но верных нажатий.' },
        ],
        sources: ['ru.wikipedia.org/wiki/Слепой_метод_печати', 'en.wikipedia.org/wiki/Frank_Edward_McGurrin'],
      },
    },
  },
  {
    slug: 'typing-speed', icon: '⚡',
    content: {
      en: {
        title: 'Typing speed (WPM)', metaTitle: 'Typing Speed Explained — Average WPM, Records & How to Get Faster | TypeRIGHTing',
        metaDesc: 'What typing speed (WPM) means, the average and good speeds, world records (216 WPM, Stella Pajunas; 212 WPM, Barbara Blackburn), how it’s measured and how to improve.',
        lead: 'Typing speed is measured in words per minute (WPM), where one “word” is standardised as five characters. Here’s what’s average, what’s fast, the records, and how to actually get quicker.',
        blocks: [
          { h: 'What WPM means', body: 'WPM = words per minute, with a “word” defined as 5 characters (including spaces) so results are comparable across texts. Two figures matter: Gross WPM (all keystrokes) and Net WPM (Gross minus errors). Net WPM is the honest number, because mistakes you have to fix cost real time.' },
          { h: 'Why speed matters', body: 'Faster, accurate typing means less friction between thought and screen — useful for work, study and exams. But speed without accuracy is fake: a high Gross WPM with many errors is slower in practice than a steady, correct pace.' },
          { h: 'Average and good speeds', body: 'A rough scale: ~40 WPM is average for everyday users; 65–75 WPM is more than enough for most professionals, including writers and programmers; 80–100+ WPM is fast. Exam thresholds exist too — e.g. India’s SSC typing test commonly expects ~35 WPM in English.' },
          { h: 'World records', body: 'The fastest typing speed ever recorded is 216 WPM, set by Stella Pajunas in 1946 on an IBM electric typewriter. Barbara Blackburn holds the Guinness record at 212 WPM on a Dvorak keyboard, sustaining ~150 WPM over 50 minutes. These are outliers — not realistic targets for everyday typists.' },
          { h: 'How speed is measured', body: 'A timed test (commonly 1, 5 or 10 minutes) counts your characters, divides by five for “words”, divides by minutes for WPM, and subtracts errors for Net WPM. Accuracy is the share of correct keystrokes. A certificate or score records the result.' },
          { h: 'How long to improve', body: 'With short daily practice, most people add noticeable WPM within a few weeks, then improve more slowly over months. Speed gains come in steps with plateaus between them — that’s normal, not a wall.' },
          { h: 'What research and practice show', body: 'The reliable path is accuracy first: errors cost more time than slow keystrokes, so chasing raw speed early backfires. Targeted drills on your weakest keys move the needle faster than generic practice. Beyond a comfortable level (~70 WPM), extra speed has diminishing real-world value for most people.' },
          { h: 'How to get faster', body: 'Type for accuracy until ~95%+, then push pace gradually. Use timed tests to benchmark. Drill the specific keys and bigrams you miss. Keep a steady rhythm rather than bursts. Don’t look down — peeking caps your ceiling.' },
          { h: 'Speed vs. layout', body: 'Records like Blackburn’s used Dvorak, a layout designed for speed, but the gains over QWERTY are modest and disputed for most users — technique and practice matter far more than the layout you choose.' },
        ],
        faq: [
          { q: 'What is a good typing speed?', a: 'Around 40 WPM is average; 65–75 WPM is more than enough for most professionals; 80–100+ WPM is fast.' },
          { q: 'What is the fastest typing speed ever?', a: '216 WPM, set by Stella Pajunas in 1946. Barbara Blackburn holds the Guinness record at 212 WPM on a Dvorak keyboard.' },
          { q: 'What’s the difference between Gross and Net WPM?', a: 'Gross WPM counts all keystrokes; Net WPM subtracts errors. Net WPM is the honest measure because fixing mistakes costs time.' },
          { q: 'Does a Dvorak keyboard make you faster?', a: 'Slightly for some, but the advantage over QWERTY is modest and disputed. Technique and practice matter far more than the layout.' },
        ],
        sources: ['en.wikipedia.org/wiki/Words_per_minute', 'guinnessworldrecords.com'],
      },
      ru: {
        title: 'Скорость печати (WPM)', metaTitle: 'Скорость печати — средняя WPM, рекорды и как ускориться | TypeRIGHTing',
        metaDesc: 'Что такое скорость печати (WPM), средние и хорошие значения, мировые рекорды (216 WPM Стелла Паюнас; 212 WPM Барбара Блэкбёрн), как измеряют и как ускориться.',
        lead: 'Скорость печати измеряют в знаках в минуту — WPM, где «слово» стандартизировано как 5 символов. Что считается средним, что быстрым, какие рекорды и как реально ускориться.',
        blocks: [
          { h: 'Что такое WPM', body: 'WPM — слов в минуту, где «слово» = 5 символов (с пробелами), чтобы результаты были сравнимы на разных текстах. Важны две цифры: Gross WPM (все нажатия) и Net WPM (Gross минус ошибки). Net WPM — честное число, потому что ошибки, которые приходится исправлять, отнимают реальное время.' },
          { h: 'Зачем нужна скорость', body: 'Быстрая и точная печать убирает трение между мыслью и экраном — полезно для работы, учёбы и экзаменов. Но скорость без точности фальшива: высокий Gross WPM с кучей ошибок на практике медленнее ровного верного темпа.' },
          { h: 'Средние и хорошие значения', body: 'Грубая шкала: ~40 WPM — средне для обычных пользователей; 65–75 WPM с запасом хватает большинству профессионалов, включая писателей и программистов; 80–100+ WPM — быстро. Есть и экзаменационные пороги — например, печатный тест SSC в Индии обычно ждёт ~35 WPM по-английски.' },
          { h: 'Мировые рекорды', body: 'Самая высокая зафиксированная скорость — 216 WPM, поставлена Стеллой Паюнас в 1946 году на электрической пишущей машинке IBM. Барбара Блэкбёрн держит рекорд Гиннесса — 212 WPM на раскладке Dvorak, удерживая ~150 WPM в течение 50 минут. Это выбросы, а не реалистичные цели для обычных людей.' },
          { h: 'Как измеряют скорость', body: 'Тест на время (обычно 1, 5 или 10 минут) считает ваши символы, делит на пять для «слов», делит на минуты для WPM и вычитает ошибки для Net WPM. Точность — доля верных нажатий. Результат фиксируется сертификатом или счётом.' },
          { h: 'Сколько нужно, чтобы ускориться', body: 'При коротких ежедневных занятиях большинство заметно прибавляет в WPM за несколько недель, дальше растёт медленнее месяцами. Прирост идёт ступенями с плато между ними — это нормально, а не стена.' },
          { h: 'Что показывают практика и исследования', body: 'Надёжный путь — сначала точность: ошибки стоят дороже медленных нажатий, поэтому гнаться за скоростью рано вредно. Прицельные упражнения на ваши слабые клавиши двигают результат быстрее, чем общая практика. Выше комфортного уровня (~70 WPM) лишняя скорость для большинства даёт всё меньше реальной пользы.' },
          { h: 'Как ускориться', body: 'Печатайте на точность до ~95%+, потом плавно повышайте темп. Замеряйте себя тестами на время. Отрабатывайте конкретные клавиши и сочетания, где ошибаетесь. Держите ровный ритм, а не рывки. Не смотрите вниз — подглядывание ставит потолок.' },
          { h: 'Скорость и раскладка', body: 'Рекорды вроде Блэкбёрн ставили на Dvorak — раскладке «под скорость», но выигрыш над QWERTY для большинства скромен и спорен: техника и практика важнее, чем выбор раскладки.' },
        ],
        faq: [
          { q: 'Какая скорость печати хорошая?', a: 'Около 40 WPM — средне; 65–75 WPM с запасом хватает большинству профессионалов; 80–100+ WPM — быстро.' },
          { q: 'Какая самая высокая скорость печати?', a: '216 WPM, поставлена Стеллой Паюнас в 1946 году. Рекорд Гиннесса — 212 WPM у Барбары Блэкбёрн на раскладке Dvorak.' },
          { q: 'Чем отличаются Gross и Net WPM?', a: 'Gross WPM считает все нажатия; Net WPM вычитает ошибки. Net WPM честнее, потому что исправление ошибок отнимает время.' },
          { q: 'Раскладка Dvorak делает быстрее?', a: 'Немного для некоторых, но преимущество над QWERTY скромное и спорное. Техника и практика важнее раскладки.' },
        ],
        sources: ['en.wikipedia.org/wiki/Words_per_minute', 'guinnessworldrecords.com'],
      },
    },
  },
  {
    slug: 'how-to-learn-typing', icon: '📚',
    content: {
      en: {
        title: 'How to learn touch typing', metaTitle: 'How to Learn Touch Typing — A Step-by-Step Plan That Works | TypeRIGHTing',
        metaDesc: 'A practical, step-by-step plan to learn touch typing: start with the home row, build accuracy first, how long it takes, common mistakes and a daily routine.',
        lead: 'You don’t learn touch typing by typing more — you learn it by typing right. Here’s a step-by-step plan that builds the habit correctly from day one.',
        blocks: [
          { h: 'Start with the home row', body: 'Place left fingers on ASDF, right fingers on JKL;, and feel the bumps on F and J — that’s your anchor. Every key is reached from here and the fingers return. Master this before touching the rest of the keyboard.' },
          { h: 'Accuracy before speed', body: 'The single most important rule: type slowly and correctly. Aim for ~95%+ accuracy before you push pace. Errors you have to fix cost more time than slow, correct keystrokes — and sloppy practice trains the wrong habit.' },
          { h: 'Never look down', body: 'The whole point is muscle memory. Cover your hands, dim the keyboard, or use an on-screen layout instead of your real keys. Peeking feels faster today but caps your ceiling forever.' },
          { h: 'Build up in stages', body: 'Home row → top row → bottom row → capitals (Shift) → numbers → symbols → real words → sentences. Add a little each session so the previous layer is solid before the next.' },
          { h: 'Drill your weak keys', body: 'Everyone has problem keys. Don’t just retype easy text — spend time specifically on the letters and combinations you miss. Targeted practice moves the needle far faster than generic repetition.' },
          { h: 'Keep sessions short and daily', body: '15–30 minutes a day beats a two-hour marathon once a week. Muscle memory builds through frequent, spaced repetition. Consistency is the real secret.' },
          { h: 'How long it takes', body: 'Comfortable touch typing usually comes in 2–4 weeks of daily practice; real speed keeps growing for months. Expect plateaus — periods where you stall before the next jump. They’re normal; keep going.' },
          { h: 'Common mistakes', body: 'Looking at the keys; chasing speed before accuracy; skipping the home-row anchor; practising once a week instead of daily; ignoring weak keys. Avoid these five and progress takes care of itself.' },
          { h: 'A simple daily routine', body: 'Warm up on the home row, do one accuracy-focused exercise, drill your two weakest keys, then a short timed test to track progress. End while it’s still going well — finish on a win, not on fatigue.' },
        ],
        faq: [
          { q: 'What’s the first thing to learn?', a: 'The home row (ASDF–JKL;) and the anchor bumps on F and J. Master that before any other keys.' },
          { q: 'How long until I can touch type?', a: 'Usually 2–4 weeks of 15–30 minutes daily for comfortable typing; speed grows for months after.' },
          { q: 'Why shouldn’t I look at the keyboard?', a: 'Touch typing is muscle memory. Peeking feels faster now but permanently limits how fast you can get.' },
          { q: 'Should I practise a lot at once or a little daily?', a: 'A little daily. 15–30 minutes every day beats long, rare sessions — muscle memory builds through spaced repetition.' },
        ],
        sources: ['en.wikipedia.org/wiki/Touch_typing'],
      },
      ru: {
        title: 'Как научиться слепой печати', metaTitle: 'Как научиться слепой печати — пошаговый план, который работает | TypeRIGHTing',
        metaDesc: 'Практичный пошаговый план обучения слепой печати: домашний ряд, сначала точность, сколько займёт, частые ошибки и ежедневный режим занятий.',
        lead: 'Слепой печати учатся не тем, что печатают больше, — а тем, что печатают правильно. Вот пошаговый план, который с первого дня закладывает верную привычку.',
        blocks: [
          { h: 'Начните с домашнего ряда', body: 'Левые пальцы на ФЫВА, правые на ОЛДЖ, нащупайте бугорки на А и О (F и J) — это ваша опора. К любой клавише палец идёт отсюда и возвращается. Освойте это прежде, чем трогать остальную клавиатуру.' },
          { h: 'Точность раньше скорости', body: 'Самое важное правило: печатайте медленно и верно. Держите ~95%+ точности, прежде чем повышать темп. Ошибки, которые надо исправлять, стоят дороже медленных верных нажатий — а небрежная практика закрепляет неправильную привычку.' },
          { h: 'Никогда не смотрите вниз', body: 'Весь смысл — в мышечной памяти. Закройте руки, приглушите клавиатуру или используйте экранную раскладку вместо реальных клавиш. Подглядывать сегодня кажется быстрее, но навсегда ставит потолок.' },
          { h: 'Наращивайте по этапам', body: 'Домашний ряд → верхний → нижний → заглавные (Shift) → цифры → знаки → реальные слова → предложения. Добавляйте понемногу за занятие, чтобы предыдущий слой был твёрдым перед следующим.' },
          { h: 'Тренируйте слабые клавиши', body: 'У каждого есть проблемные клавиши. Не перепечатывайте лёгкий текст — уделяйте время именно тем буквам и сочетаниям, где ошибаетесь. Прицельная практика двигает результат куда быстрее общей.' },
          { h: 'Коротко и каждый день', body: '15–30 минут в день лучше двухчасового марафона раз в неделю. Мышечная память строится частым повторением с интервалами. Регулярность — настоящий секрет.' },
          { h: 'Сколько это займёт', body: 'Комфортная слепая печать обычно приходит за 2–4 недели ежедневных занятий; настоящая скорость растёт месяцами. Ждите плато — периодов застоя перед новым скачком. Это нормально, продолжайте.' },
          { h: 'Частые ошибки', body: 'Смотреть на клавиши; гнаться за скоростью раньше точности; пропускать опору домашнего ряда; заниматься раз в неделю вместо ежедневно; игнорировать слабые клавиши. Избегайте этих пяти — и прогресс пойдёт сам.' },
          { h: 'Простой ежедневный режим', body: 'Разомнитесь на домашнем ряду, сделайте одно упражнение на точность, отработайте две самые слабые клавиши, затем короткий тест на время для отслеживания прогресса. Заканчивайте на хорошем — на победе, а не на усталости.' },
        ],
        faq: [
          { q: 'Что учить в первую очередь?', a: 'Домашний ряд (ФЫВА–ОЛДЖ) и опорные бугорки на А и О (F и J). Освойте это прежде других клавиш.' },
          { q: 'Через сколько я смогу печатать вслепую?', a: 'Обычно 2–4 недели по 15–30 минут в день для комфортной печати; скорость растёт ещё месяцами.' },
          { q: 'Почему нельзя смотреть на клавиатуру?', a: 'Слепая печать — это мышечная память. Подглядывание сейчас кажется быстрее, но навсегда ограничивает вашу скорость.' },
          { q: 'Заниматься помногу сразу или понемногу каждый день?', a: 'Понемногу каждый день. 15–30 минут ежедневно лучше долгих редких занятий — память строится повторением с интервалами.' },
        ],
        sources: ['en.wikipedia.org/wiki/Touch_typing'],
      },
    },
  },
];

export const TOPIC_SLUGS = TOPICS.map((t) => t.slug);
