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
  {
    slug: 'history-of-typewriting', icon: '📜',
    content: {
      en: {
        title: 'History of typewriting', metaTitle: 'History of Typewriting — From the 1874 Typewriter to Touch Typing | TypeRIGHTing',
        metaDesc: 'How typewriting began: the first commercial typewriter (Sholes & Glidden, 1874), the QWERTY layout, the rise of the ten-finger touch method and its path to the computer age.',
        lead: 'Typewriting is barely 150 years old. From a noisy machine that only typed capitals to the silent skill of touch typing — here is how it happened, with the dates and people that matter.',
        blocks: [
          { h: 'Where it began', body: 'The story starts in Milwaukee in 1867, when Christopher Latham Sholes and Carlos Glidden began building a writing machine, with James Densmore backing it financially. They filed a patent in 1868 and refined the design for years before it was ready to sell.' },
          { h: 'The first commercial typewriter (1874)', body: 'On 1 July 1874 the “Sholes & Glidden Type Writer” went on sale, built by gunsmiths E. Remington & Sons — the first commercially successful typewriter. It cost $125 (over $3,000 today), typed only capital letters, and was a “blind-writer”: you couldn’t see the text as you typed it.' },
          { h: 'Why QWERTY', body: 'From the start the keys were arranged in the QWERTY pattern. The common story is that Sholes spread out frequent letter pairs so the metal type bars, arranged in a circle, wouldn’t clash and jam when a typist went fast. Whatever the exact reason, QWERTY stuck for 150 years.' },
          { h: 'From two fingers to ten', body: 'Early typists hunted and pecked. Around 1878 Mrs. L. V. Longley, who ran a Cincinnati stenography school, promoted an all-finger method — the seed of touch typing.' },
          { h: 'Typing without looking', body: 'On 25 July 1888 Frank McGurrin, a stenographer who had taught himself to type without looking, beat eight-finger typist Louis Traub in a public contest in Cincinnati. He won $500 and the newspapers — and touch typing went mainstream.' },
          { h: 'Into the office and the home', body: 'Within a decade over 100,000 typewriters were in use in the United States. Typing became a profession, then a basic skill, reshaping offices and opening clerical work to a new workforce.' },
          { h: 'To the computer age', body: 'The mechanical keys became electric, then digital. The QWERTY layout and the ten-finger touch method carried straight over to computer keyboards — which is why a skill invented for 1880s machines still matters today.' },
          { h: 'What stayed and what changed', body: 'The layout and fingering survived; the rest transformed. Modern trainers add what the typewriter never could: instant feedback, weak-key analysis, adaptive AI generation, gamified courses for kids — turning a century-old skill into a guided, measurable practice.' },
          { h: 'Where TypeRIGHTing fits', body: 'TypeRIGHTing carries the classic method forward — the same home row and finger zones McGurrin proved in 1888 — and adds the modern layer: 7 languages, national layouts, AI drills on your weak keys, a children’s method and live competition. *Author: Denis Onosov (ODV999).*' },
        ],
        faq: [
          { q: 'When was the typewriter invented?', a: 'Development began in 1867; the first commercially successful typewriter, the Sholes & Glidden, went on sale on 1 July 1874.' },
          { q: 'Who invented the QWERTY layout?', a: 'Christopher Latham Sholes, in the early 1870s — arranged to keep the mechanical type bars from clashing at speed.' },
          { q: 'When did touch typing appear?', a: 'The ten-finger method spread from ~1878 (Mrs. L. V. Longley); Frank McGurrin popularised typing without looking by winning a contest in 1888.' },
        ],
        sources: ['en.wikipedia.org/wiki/Sholes_and_Glidden_typewriter', 'en.wikipedia.org/wiki/Typewriter', 'en.wikipedia.org/wiki/Touch_typing'],
      },
      ru: {
        title: 'История машинописи', metaTitle: 'История машинописи — от машинки 1874 года до слепой печати | TypeRIGHTing',
        metaDesc: 'Как появилась машинопись: первая коммерческая пишущая машинка (Sholes & Glidden, 1874), раскладка QWERTY, десятипальцевый слепой метод и путь к компьютерной эпохе.',
        lead: 'Машинописи едва 150 лет. От шумной машинки, печатавшей только заглавными, до бесшумного навыка слепой печати — вот как это было, с датами и людьми, которые важны.',
        blocks: [
          { h: 'С чего началось', body: 'История стартует в Милуоки в 1867 году, когда Кристофер Лэтэм Шоулз и Карлос Глидден начали строить пишущую машину при финансовой поддержке Джеймса Денсмора. Патент подали в 1868-м и годами дорабатывали конструкцию, прежде чем она пошла в продажу.' },
          { h: 'Первая коммерческая машинка (1874)', body: '1 июля 1874 года в продажу поступила «Sholes & Glidden Type Writer», собранная оружейниками E. Remington & Sons, — первая коммерчески успешная пишущая машинка. Стоила $125 (более $3000 сегодня), печатала только заглавными и была «слепой»: текст не было видно во время набора.' },
          { h: 'Почему QWERTY', body: 'С самого начала клавиши шли в раскладке QWERTY. Расхожая версия: Шоулз развёл частые пары букв, чтобы металлические рычаги-литеры, стоящие по кругу, не сцеплялись и не заклинивали при быстрой печати. Какова бы ни была точная причина, QWERTY держится 150 лет.' },
          { h: 'От двух пальцев к десяти', body: 'Ранние машинистки печатали двумя пальцами с подглядыванием. Около 1878 года миссис Л. В. Лонгли, руководившая школой стенографии в Цинциннати, начала продвигать метод всеми пальцами — зерно слепой печати.' },
          { h: 'Печать не глядя', body: '25 июля 1888 года Фрэнк Макгаррин, стенограф, научившийся печатать не глядя, обыграл печатавшего восемью пальцами Луиса Трауба в публичном состязании в Цинциннати. Выиграл $500 и газеты — и слепая печать пошла в массы.' },
          { h: 'В офис и в дом', body: 'За десятилетие в США использовалось более 100 000 машинок. Печать стала профессией, затем базовым навыком, перестроив офисы и открыв конторскую работу новой рабочей силе.' },
          { h: 'К компьютерной эпохе', body: 'Механические клавиши стали электрическими, затем цифровыми. Раскладка QWERTY и десятипальцевый слепой метод перешли прямо на компьютерные клавиатуры — поэтому навык, придуманный для машин 1880-х, важен и сегодня.' },
          { h: 'Что осталось, а что изменилось', body: 'Раскладка и аппликатура выжили; остальное преобразилось. Современные тренажёры добавляют то, чего машинка не могла: мгновенную обратную связь, анализ слабых клавиш, адаптивную AI-генерацию, игровые курсы для детей — превращая вековой навык в управляемую, измеримую практику.' },
          { h: 'Где здесь TypeRIGHTing', body: 'TypeRIGHTing продолжает классический метод — тот же домашний ряд и зоны пальцев, что Макгаррин доказал в 1888-м, — и добавляет современный слой: 7 языков, нац. раскладки, AI-упражнения по слабым клавишам, детскую методику и живое соревнование. *Автор: Denis Onosov (ODV999).*' },
        ],
        faq: [
          { q: 'Когда изобрели пишущую машинку?', a: 'Разработка началась в 1867 году; первая коммерчески успешная машинка Sholes & Glidden поступила в продажу 1 июля 1874 года.' },
          { q: 'Кто придумал раскладку QWERTY?', a: 'Кристофер Лэтэм Шоулз в начале 1870-х — расположил клавиши так, чтобы рычаги-литеры не сцеплялись при быстрой печати.' },
          { q: 'Когда появилась слепая печать?', a: 'Десятипальцевый метод распространялся с ~1878 (миссис Л. В. Лонгли); Фрэнк Макгаррин прославил печать не глядя, выиграв состязание в 1888-м.' },
        ],
        sources: ['ru.wikipedia.org/wiki/Пишущая_машинка', 'en.wikipedia.org/wiki/Sholes_and_Glidden_typewriter', 'en.wikipedia.org/wiki/Touch_typing'],
      },
    },
  },
  {
    slug: 'dvorak-layout', icon: '🔤',
    content: {
      en: {
        title: 'Dvorak keyboard layout', metaTitle: 'Dvorak Keyboard Layout — History, Dvorak vs QWERTY & Is It Worth It | TypeRIGHTing',
        metaDesc: 'The Dvorak Simplified Keyboard explained: history (August Dvorak, patented 1936), how it differs from QWERTY, what research says about speed, and whether it’s worth switching.',
        lead: 'Dvorak is an alternative keyboard layout built for speed and comfort, not for 1870s machinery. Here’s where it came from, how it compares to QWERTY, and the honest answer on whether to switch.',
        blocks: [
          { h: 'What Dvorak is', body: 'The Dvorak Simplified Keyboard rearranges the letters so the most common ones sit under your fingers on the home row. Where QWERTY scatters frequent letters, Dvorak concentrates them — the goal is less finger travel and a smoother rhythm.' },
          { h: 'Why it exists', body: 'QWERTY was designed to stop mechanical type bars from jamming, not to help the typist. Dvorak set out to fix that: put the work where the strong, fast fingers are, and balance the load between hands.' },
          { h: 'History', body: 'The layout was completed in 1932 and granted U.S. Patent 2,040,248 in 1936. It came from years of studying how people actually type and which letter combinations are most frequent in English.' },
          { h: 'Who created it', body: 'August Dvorak (1894–1975), an educational psychologist and professor at the University of Washington, together with his brother-in-law William Dealey. Dvorak studied typing behaviour scientifically — unusual for a keyboard designer.' },
          { h: 'Dvorak vs QWERTY', body: 'Dvorak places 10 of the 13 most common letters on the home row; QWERTY manages about 32%. In theory that means less finger motion and more typing from the resting position. Common letters t, h, e fall right under the fingers.' },
          { h: 'What research says — honestly', body: 'Dvorak supporters claim higher speed and fewer errors, but independent studies are mixed and the real-world advantage over a well-practised QWERTY typist is modest and disputed. The honest takeaway: technique and practice matter far more than the layout.' },
          { h: 'Is it worth switching', body: 'For most people, no — you’d lose weeks relearning for a small, uncertain gain, and every other keyboard in your life is QWERTY. Dvorak makes sense if you type all day, have hand-strain concerns, and enjoy the project. Otherwise, master touch typing on QWERTY first.' },
          { h: 'How to learn it', body: 'Switch your OS layout (Dvorak ships with Windows, macOS, Linux), relabel or hide the keys, and start from the home row as if learning from scratch. Expect a few slow weeks; your old QWERTY speed returns and then some only after sustained practice.' },
          { h: 'Variants', body: 'Beyond the original there are programmer-Dvorak, one-handed Dvorak variants, and the popular Colemak — a layout that keeps more of QWERTY while moving frequent letters home, making the switch easier.' },
        ],
        faq: [
          { q: 'Who invented the Dvorak keyboard?', a: 'August Dvorak, an educational psychologist, with William Dealey. Completed in 1932, patented in 1936 (US Patent 2,040,248).' },
          { q: 'Is Dvorak really faster than QWERTY?', a: 'It places more common letters on the home row, but independent evidence is mixed and the real-world gain over a practised QWERTY typist is modest and disputed.' },
          { q: 'Should I switch to Dvorak?', a: 'For most people it’s not worth the weeks of relearning. Master touch typing on QWERTY first; consider Dvorak only if you type all day and want the project.' },
        ],
        sources: ['en.wikipedia.org/wiki/Dvorak_keyboard_layout', 'historyofinformation.com'],
      },
      ru: {
        title: 'Раскладка Dvorak', metaTitle: 'Раскладка Dvorak — история, Dvorak против QWERTY и стоит ли переходить | TypeRIGHTing',
        metaDesc: 'Раскладка Dvorak: история (Август Дворак, патент 1936), чем отличается от QWERTY, что говорят исследования о скорости и стоит ли переходить.',
        lead: 'Dvorak — альтернативная раскладка, созданная ради скорости и удобства, а не под механику 1870-х. Откуда она, как сравнивается с QWERTY и честный ответ — стоит ли переходить.',
        blocks: [
          { h: 'Что такое Dvorak', body: 'Упрощённая раскладка Dvorak переставляет буквы так, чтобы самые частые оказались под пальцами на домашнем ряду. Там, где QWERTY разбрасывает частые буквы, Dvorak их собирает — цель в меньшем ходе пальцев и более ровном ритме.' },
          { h: 'Зачем она нужна', body: 'QWERTY придумали, чтобы рычаги машинки не заклинивали, а не чтобы помочь машинистке. Dvorak взялся это исправить: дать работу сильным и быстрым пальцам и сбалансировать нагрузку между руками.' },
          { h: 'История', body: 'Раскладку завершили в 1932 году и выдали патент США 2 040 248 в 1936-м. Она выросла из многолетнего изучения того, как люди реально печатают и какие сочетания букв в английском самые частые.' },
          { h: 'Кто создал', body: 'Август Дворак (1894–1975), психолог образования и профессор Вашингтонского университета, вместе со своим шурином Уильямом Дили. Дворак изучал печать научно — редкость для создателя раскладки.' },
          { h: 'Dvorak против QWERTY', body: 'Dvorak размещает 10 из 13 самых частых букв на домашнем ряду; QWERTY — около 32%. В теории это меньше движений пальцев и больше печати из исходной позиции. Частые t, h, e ложатся прямо под пальцы.' },
          { h: 'Что говорят исследования — честно', body: 'Сторонники Dvorak заявляют о большей скорости и меньшем числе ошибок, но независимые исследования противоречивы, а реальное преимущество над опытным QWERTY-печатником скромное и спорное. Честный вывод: техника и практика важнее раскладки.' },
          { h: 'Стоит ли переходить', body: 'Большинству — нет: потеряете недели на переучивание ради малого и неопределённого выигрыша, а все остальные клавиатуры вокруг — QWERTY. Dvorak оправдан, если печатаете весь день, есть забота о нагрузке на кисти и нравится сам проект. Иначе сначала освойте слепую печать на QWERTY.' },
          { h: 'Как освоить', body: 'Переключите раскладку ОС (Dvorak есть в Windows, macOS, Linux), переклейте или спрячьте клавиши и начните с домашнего ряда как с нуля. Несколько медленных недель неизбежны; прежняя скорость QWERTY и выше вернётся лишь после устойчивой практики.' },
          { h: 'Разновидности', body: 'Кроме оригинала есть программистский Dvorak, однорукие варианты Dvorak и популярный Colemak — раскладка, которая сохраняет больше от QWERTY, перенося частые буквы на домашний ряд, что упрощает переход.' },
        ],
        faq: [
          { q: 'Кто изобрёл раскладку Dvorak?', a: 'Август Дворак, психолог образования, вместе с Уильямом Дили. Завершена в 1932-м, запатентована в 1936-м (патент США 2 040 248).' },
          { q: 'Dvorak правда быстрее QWERTY?', a: 'Она размещает больше частых букв на домашнем ряду, но независимые данные противоречивы, а реальный выигрыш над опытным QWERTY-печатником скромный и спорный.' },
          { q: 'Стоит ли переходить на Dvorak?', a: 'Большинству недели переучивания того не стоят. Сначала освойте слепую печать на QWERTY; Dvorak — только если печатаете весь день и хотите проект.' },
        ],
        sources: ['ru.wikipedia.org/wiki/Раскладка_Дворака', 'en.wikipedia.org/wiki/Dvorak_keyboard_layout'],
      },
    },
  },
  {
    slug: 'one-hand-typing', icon: '✋',
    content: {
      en: {
        title: 'One-handed touch typing', metaTitle: 'One-Handed Touch Typing — How to Type Fast with One Hand | TypeRIGHTing',
        metaDesc: 'How to learn one-handed touch typing: the Half-QWERTY method (Matias, 1996), TypeRIGHTing’s central-placement approach, training the left or right hand, and how fast you can get.',
        lead: 'You can touch type fast with a single hand — for rehab, injury, or freeing the other hand. Here are the two main approaches, including TypeRIGHTing’s own, and how to train each hand.',
        blocks: [
          { h: 'What one-handed typing is', body: 'Typing all the letters with one hand, by touch. It matters for people with hemiplegia, an injury or amputation, occupational therapy, or anyone who needs a hand free (holding a phone, reading braille, operating something else).' },
          { h: 'The Half-QWERTY method', body: 'The best-known approach is Half-QWERTY, published by Matias, MacKenzie and Buxton in 1996. It uses one half of the keyboard; holding the space bar mirrors the missing half onto the same keys, so the typing hand reuses movements the other hand already knew.' },
          { h: 'How fast Half-QWERTY gets', body: 'A trained touch typist can pick up Half-QWERTY in minutes and reach 40+ WPM with one hand in under 10 hours of practice — about 2–3× faster than typing on compact one-handed keyboards.' },
          { h: 'TypeRIGHTing’s approach — central placement', body: 'TypeRIGHTing uses a different, simpler method: central placement. One hand covers the whole keyboard from a central resting position — index and little fingers (the strong ones) take the edges, the middle and ring fingers the centre — rather than mirroring halves. *Author: Denis Onosov (ODV999).*' },
          { h: 'Why central placement', body: 'No space-bar modifier to learn and no mental mirroring — you simply stretch one hand across all the keys with a clear finger map. For learning and rehab it’s gentler: the trainer colours each finger’s zone so you see exactly which finger goes where.' },
          { h: 'Left hand vs right hand', body: 'Both work; TypeRIGHTing trains either. The fingering is mirror-symmetric: the right hand’s index anchors on the left-centre, its little finger on the right edge; the left hand does the opposite. Pick the hand you’re rehabbing or the one you want to free up.' },
          { h: 'How long it takes', body: 'With short daily practice, one-handed touch typing becomes comfortable in a few weeks. As with two hands, accuracy comes before speed — and a clear finger map matters more than raw effort.' },
          { h: 'What the evidence shows', body: 'Half-QWERTY’s ~40 WPM in <10 hours is well documented for trained typists. Central-placement speeds are lower than two-handed typing by nature (one hand, more travel), but it’s a practical, learnable skill — and far faster than hunt-and-peck with one hand.' },
          { h: 'Who it’s for', body: 'One-handed typing is used by occupational therapists, insurers and schools for hemiplegia, hand injuries and similar conditions — and by anyone temporarily one-handed (a cast) or who simply wants a hand free while typing.' },
        ],
        faq: [
          { q: 'Can you really touch type with one hand?', a: 'Yes. Trained typists reach 40+ WPM one-handed with Half-QWERTY in under 10 hours; central-placement methods are also practical and learnable in weeks.' },
          { q: 'What is Half-QWERTY?', a: 'A one-handed method (Matias, MacKenzie, Buxton, 1996) that uses one half of the keyboard and mirrors the other half via the space bar, reusing two-handed muscle memory.' },
          { q: 'How is TypeRIGHTing’s method different?', a: 'It uses central placement — one hand covers the whole keyboard from a central resting position with a clear finger map, no space-bar mirroring. Author: Denis Onosov (ODV999).' },
        ],
        sources: ['en.wikipedia.org/wiki/One-hand_typing', 'edgarmatias.com/papers/hci96'],
      },
      ru: {
        title: 'Печать одной рукой', metaTitle: 'Слепая печать одной рукой — как быстро печатать одной рукой | TypeRIGHTing',
        metaDesc: 'Как научиться слепой печати одной рукой: метод Half-QWERTY (Matias, 1996), подход TypeRIGHTing с центральной постановкой, тренировка левой или правой руки и какой скорости можно достичь.',
        lead: 'Печатать вслепую можно и одной рукой — для реабилитации, при травме или чтобы освободить вторую руку. Вот два основных подхода, включая наш, и как тренировать каждую руку.',
        blocks: [
          { h: 'Что такое печать одной рукой', body: 'Набор всех букв одной рукой, на ощупь. Важно при гемиплегии, травме или ампутации, в эрготерапии, а также всем, кому нужна свободная рука (держать телефон, читать Брайля, управлять чем-то ещё).' },
          { h: 'Метод Half-QWERTY', body: 'Самый известный подход — Half-QWERTY, опубликован Matias, MacKenzie и Buxton в 1996 году. Использует половину клавиатуры; удержание пробела зеркалит недостающую половину на те же клавиши, и печатающая рука повторяет движения, которые знала вторая.' },
          { h: 'Какая скорость у Half-QWERTY', body: 'Тренированный слепой печатник осваивает Half-QWERTY за минуты и достигает 40+ WPM одной рукой менее чем за 10 часов практики — примерно в 2–3 раза быстрее, чем на компактных одноручных клавиатурах.' },
          { h: 'Подход TypeRIGHTing — центральная постановка', body: 'TypeRIGHTing использует другой, более простой метод: центральную постановку. Одна рука покрывает всю клавиатуру из центрального исходного положения — указательный и мизинец (сильные) берут края, средний и безымянный — центр, — а не зеркалит половины. *Автор: Denis Onosov (ODV999).*' },
          { h: 'Почему центральная постановка', body: 'Не нужно учить модификатор-пробел и держать зеркало в голове — вы просто растягиваете одну руку на все клавиши по понятной карте пальцев. Для обучения и реабилитации это мягче: тренажёр раскрашивает зону каждого пальца, чтобы видеть, какой палец куда идёт.' },
          { h: 'Левая рука против правой', body: 'Работают обе; TypeRIGHTing тренирует любую. Аппликатура зеркально-симметрична: указательный правой опирается на центр-лево, мизинец — на правый край; левая делает наоборот. Выбирайте руку, которую реабилитируете, или ту, что хотите освободить.' },
          { h: 'Сколько учиться', body: 'При коротких ежедневных занятиях слепая печать одной рукой становится комфортной за несколько недель. Как и с двумя руками, точность раньше скорости — а понятная карта пальцев важнее грубого усилия.' },
          { h: 'Что показывают данные', body: '~40 WPM за <10 часов у Half-QWERTY хорошо задокументированы для тренированных печатников. Скорость при центральной постановке ниже двуручной по природе (одна рука, больше ход), но это практичный, осваиваемый навык — и куда быстрее набора одной рукой с подглядыванием.' },
          { h: 'Кому это нужно', body: 'Печать одной рукой используют эрготерапевты, страховые и школы при гемиплегии, травмах кисти и схожих состояниях — и все, кто временно однорук (гипс) или просто хочет освободить руку при наборе.' },
        ],
        faq: [
          { q: 'Реально ли печатать вслепую одной рукой?', a: 'Да. Тренированные печатники достигают 40+ WPM одной рукой с Half-QWERTY менее чем за 10 часов; методы центральной постановки тоже практичны и осваиваются за недели.' },
          { q: 'Что такое Half-QWERTY?', a: 'Одноручный метод (Matias, MacKenzie, Buxton, 1996): использует половину клавиатуры и зеркалит вторую половину через пробел, переиспользуя двуручную мышечную память.' },
          { q: 'Чем отличается метод TypeRIGHTing?', a: 'Он использует центральную постановку — одна рука покрывает всю клавиатуру из центрального положения по понятной карте пальцев, без зеркала через пробел. Автор: Denis Onosov (ODV999).' },
        ],
        sources: ['en.wikipedia.org/wiki/One-hand_typing', 'edgarmatias.com/papers/hci96'],
      },
    },
  },
];

export const TOPIC_SLUGS = TOPICS.map((t) => t.slug);
