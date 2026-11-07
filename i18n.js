/* Nomad Gate Tour — extra languages (RU / KO / JA / DE / ES). Merged into window.NGT after data.js. */
(function () {
  var D = window.NGT;
  D.langs = [
    { id: 'en', short: 'EN', name: 'English' },
    { id: 'mn', short: 'MN', name: 'Монгол' },
    { id: 'ru', short: 'RU', name: 'Русский' },
    { id: 'ko', short: 'KO', name: '한국어' },
    { id: 'ja', short: 'JA', name: '日本語' },
    { id: 'de', short: 'DE', name: 'Deutsch' },
    { id: 'es', short: 'ES', name: 'Español' }
  ];

  /* keys that used to be hard-coded in app.js */
  var common = {
    en: { 'map.aria': 'Map of tour routes across Mongolia', 'b.datepre': 'Start date: ', 'b.staypre': 'Stay: ', 'st.brand': 'Nomad Gate Tour opens that door for you.', 'lang': 'Language' },
    mn: { 'map.aria': 'Монгол орон даяарх аяллын маршрутын газрын зураг', 'b.datepre': 'Эхлэх өдөр: ', 'b.staypre': 'Байр: ', 'st.brand': 'Nomad Gate Tour тэр хаалгыг танд нээнэ.', 'lang': 'Хэл' }
  };
  Object.keys(common).forEach(function (l) { Object.keys(common[l]).forEach(function (k) { D.t[l][k] = common[l][k]; }); });

  var X = {
    ru: {
      tours: {}, places: {},
      experiences: [
        ['Ночь в юрте', 'Деревянная решётка, жерди, сходящиеся к куполу-тооно, и толстые войлочные стены: юрта веками укрывает кочевые семьи и хранит тепло в суровом монгольском климате.'],
        ['Радушный приём', 'Гостей встречают чаем с молоком, молочными угощениями и настоящим монгольским гостеприимством. У каждой части юрты свой обычай — мы покажем, где сесть.'],
        ['Верхом со скотоводами', 'Переходите реки и широкие долины на выносливых монгольских лошадях в удобном для вас темпе.'],
        ['Дюны посреди степи', 'В полупустыне золотой песок поднимается из зелёной травы. Пройдите по гребням босиком или пересеките их на верблюде.'],
        ['Ночное небо', 'На сотни километров ни одного городского огня — над юртой встаёт Млечный Путь. Возьмите тёплую одежду и не ложитесь рано.']
      ],
      faq: [
        ['Когда лучше всего ехать?', 'Июнь – сентябрь — основной сезон: тёплые дни и зелёная степь. С середины сентября до начала октября лиственничные леса становятся золотыми. Зимние поездки возможны для тех, кто любит холод.'],
        ['Каково жить в юрте?', 'В юрточных лагерях есть нормальные кровати и дровяная печь, обычно общие санузлы в отдельном здании. В семье скотоводов всё проще и ближе к настоящей кочевой жизни.'],
        ['Нужна ли виза?', 'Зависит от вашего паспорта. Когда вы отправите заявку, мы проверим актуальные правила для вашего гражданства и подскажем, что подготовить.'],
        ['Можно ли изменить маршрут или собрать частный тур?', 'Да. Каждый маршрут здесь — лишь отправная точка: мы изменим число дней, места и уровень комфорта под вашу группу.'],
        ['Как забронировать?', 'Отправьте заявку с датами и размером группы. Мы ответим планом по дням и ценой для вашей группы.']
      ],
      months: ['Гибко', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      t: {
        'nav.journeys': 'Туры', 'nav.map': 'Карта', 'nav.exp': 'Впечатления', 'nav.road': 'Истории', 'nav.faq': 'Вопросы', 'nav.cta': 'Спланировать', 'menu': 'Меню',
        'hero.kicker': 'Частные путешествия по Монголии', 'hero.h1': 'Создайте незабываемые|воспоминания',
        'hero.sub': 'Ночи в юртах, семьи кочевников, дюны и дикие лошади — маршруты от монгольской команды, которая сама ездит этими дорогами.',
        'hero.cta1': 'Смотреть туры', 'hero.cta2': 'Частная поездка', 'scroll': 'Вниз',
        'statement': 'За каждой дверью монгольской юрты вас ждёт радушный приём: чай с молоком на печи, место у огня и семья, которая поколениями кочует вместе со стадами. Nomad Gate Tour открывает эту дверь для вас.',
        'st.brand': 'Nomad Gate Tour открывает эту дверь для вас.',
        'j.title': 'Авторские маршруты', 'j.lead': 'Восемь индивидуальных туров из Улан-Батора — от одного дня до тринадцати. Любой можно изменить под вашу группу.',
        'j.note': 'Каждый тур — индивидуальный для вашей группы, начинается и заканчивается в Улан-Баторе.',
        'j.day': 'день', 'j.days': 'дн.', 'j.view': 'Смотреть маршрут', 'j.drag': 'Листайте, чтобы ехать',
        'd.overview': 'Маршрут', 'd.included': 'Включено', 'd.inc': ['Частный автомобиль с водителем', 'Англоговорящий гид', 'Юрточный лагерь или проживание в семье', 'Питание в дороге', 'Входные билеты в парки'],
        'd.notinc': 'Не включено', 'd.exc': ['Международные перелёты', 'Туристическая страховка', 'Личные расходы'],
        'd.season': 'Сезон', 'd.style': 'Формат', 'd.duration': 'Длительность', 'd.route': 'Маршрут',
        'b.title': 'Запросить этот тур', 'b.date': 'Дата начала', 'b.who': 'Путешественники', 'b.stay': 'Проживание', 'b.stay1': 'Общая юрта', 'b.stay2': 'Отдельная юрта',
        'b.send': 'Перейти к заявке', 'b.note': 'Оплата сейчас не нужна. Мы пришлём план и цену.', 'close': 'Закрыть',
        'm.title': 'Куда ведут ворота', 'm.lead': 'Из Улан-Батора наши маршруты ведут на юг, в Гоби, и на север, к Хубсугулу. Выберите тур, чтобы увидеть его путь.',
        'x.title': 'Впечатления', 'x.lead': 'Каким бывает один день в дороге с нами.',
        'r.title': 'С дороги', 'r.lead': 'Настоящие видео из наших поездок, опубликованные в Instagram.', 'r.follow': 'Мы в Instagram', 'g.title': 'Наши путешественники', 'g.lead': 'Гости со всего мира в поездках с Nomad Gate Tour.', 'g.close': 'Закрыть', 'g.prev': 'Предыдущее фото', 'g.next': 'Следующее фото',
        'f.title': 'Перед поездкой',
        'c.title': 'Откройте ворота в своё путешествие', 'c.lead': 'Напишите, когда хотите поехать и кто едет. Мы выстроим маршрут под вас.',
        'c.call': 'Звонок или WhatsApp', 'c.mail': 'Эл. почта', 'c.copy': 'Копировать', 'c.copied': 'Скопировано',
        'p.name': 'Ваше имя', 'p.contact': 'Эл. почта или WhatsApp', 'p.journey': 'Тур', 'p.any': 'Пока не решил(а)', 'p.month': 'Месяц', 'p.who': 'Путешественники', 'p.msg': 'Что нам стоит знать?',
        'p.send': 'Отправить заявку', 'p.req': 'Укажите имя и способ связи.',
        'p.done': 'Заявка готова и скопирована. Отправьте её по почте или в WhatsApp кнопками ниже.', 'p.mailbtn': 'Открыть почту', 'p.wabtn': 'Открыть WhatsApp',
        'foot.rights': 'Все права защищены', 'foot.top': 'Наверх', 'person': 'человек', 'people': 'человек',
        'map.aria': 'Карта маршрутов туров по Монголии', 'b.datepre': 'Дата начала: ', 'b.staypre': 'Проживание: ', 'lang': 'Язык'
      }
    },

    ko: {
      tours: {}, places: {},
      experiences: [
        ['게르에서 하룻밤', '나무 격자 벽, 천창 토오노로 모이는 서까래, 두꺼운 펠트 벽. 게르는 수백 년 동안 유목민 가족의 집이었고 몽골의 혹독한 기후에서도 따뜻합니다.'],
        ['따뜻한 환대', '손님은 수테차와 유제품 간식, 진심 어린 몽골식 환대로 맞이합니다. 게르의 모든 자리에는 풍습이 있어요 — 어디에 앉는지 알려 드릴게요.'],
        ['유목민과 함께 승마', '튼튼한 몽골 말을 타고 강을 건너 넓은 계곡을 달립니다. 속도는 여러분에게 맞춥니다.'],
        ['초원 속의 사구', '세미고비에서는 초록 초원 위로 황금빛 모래가 솟아 있습니다. 맨발로 능선을 걷거나 낙타로 건너 보세요.'],
        ['밤하늘', '수백 킬로미터 안에 도시 불빛이 없어 게르 위로 은하수가 떠오릅니다. 따뜻한 옷을 챙기고 늦게까지 깨어 있어 보세요.']
      ],
      faq: [
        ['여행하기 가장 좋은 때는 언제인가요?', '6월부터 9월이 성수기로 날씨가 따뜻하고 초원이 푸릅니다. 9월 중순부터 10월 초에는 낙엽송 숲이 금빛으로 물듭니다. 추위를 좋아하신다면 겨울 여행도 가능합니다.'],
        ['게르 숙박은 어떤가요?', '게르 캠프에는 제대로 된 침대와 장작 난로가 있고, 보통 별도 건물에 공용 욕실이 있습니다. 유목민 가족 숙박은 더 소박하고 실제 유목 생활에 가깝습니다.'],
        ['비자가 필요한가요?', '여권 국적에 따라 다릅니다. 요청을 보내 주시면 해당 국적의 최신 규정을 확인해 준비할 것을 알려 드립니다.'],
        ['일정을 바꾸거나 프라이빗 여행을 만들 수 있나요?', '네. 여기 있는 모든 일정은 출발점일 뿐입니다. 일수, 장소, 편의 수준을 일행에 맞게 바꿔 드립니다.'],
        ['어떻게 예약하나요?', '날짜와 인원을 적어 요청을 보내 주세요. 일별 일정과 일행 기준 가격을 보내 드립니다.']
      ],
      months: ['유동적', '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
      t: {
        'nav.journeys': '여행', 'nav.map': '지도', 'nav.exp': '체험', 'nav.road': '이야기', 'nav.faq': 'FAQ', 'nav.cta': '여행 계획', 'menu': '메뉴',
        'hero.kicker': '몽골 프라이빗 여행', 'hero.h1': '잊지 못할|추억을 만드세요',
        'hero.sub': '게르 숙박, 유목민 가족, 사구와 야생마 — 이 길을 직접 다니는 몽골 팀이 계획합니다.',
        'hero.cta1': '여행 둘러보기', 'hero.cta2': '프라이빗 여행 계획', 'scroll': '스크롤',
        'statement': '몽골의 모든 게르 문 뒤에는 환대가 기다립니다. 난로 위의 수테차, 불가의 자리, 그리고 대대로 가축과 함께 이동해 온 가족. Nomad Gate Tour가 그 문을 열어 드립니다.',
        'st.brand': 'Nomad Gate Tour가 그 문을 열어 드립니다.',
        'j.title': '대표 여행', 'j.lead': '울란바토르에서 출발하는 8가지 프라이빗 투어 — 당일부터 13일까지. 모두 일행에 맞게 바꿀 수 있습니다.',
        'j.note': '모든 투어는 일행만을 위한 프라이빗 투어이며 울란바토르에서 시작하고 끝납니다.',
        'j.day': '일', 'j.days': '일', 'j.view': '일정 보기', 'j.drag': '스크롤하며 여행하기',
        'd.overview': '여정', 'd.included': '포함', 'd.inc': ['전용 차량과 기사', '영어 가이드', '게르 캠프 또는 가정 숙박', '여행 중 식사', '공원 입장료'],
        'd.notinc': '불포함', 'd.exc': ['국제선 항공', '여행자 보험', '개인 경비'],
        'd.season': '시즌', 'd.style': '스타일', 'd.duration': '기간', 'd.route': '경로',
        'b.title': '이 여행 문의하기', 'b.date': '출발일', 'b.who': '인원', 'b.stay': '숙소', 'b.stay1': '공용 게르', 'b.stay2': '단독 게르',
        'b.send': '문의 계속하기', 'b.note': '지금 결제하지 않습니다. 일정과 가격을 보내 드립니다.', 'close': '닫기',
        'm.title': '문 너머의 길', 'm.lead': '우리의 코스는 울란바토르에서 남쪽 고비, 북쪽 홉스골까지 이어집니다. 투어를 골라 경로를 확인하세요.',
        'x.title': '체험', 'x.lead': '우리와 함께 길 위에서 보내는 하루.',
        'r.title': '길 위에서', 'r.lead': '여행 중 촬영해 인스타그램에 올린 실제 영상입니다.', 'r.follow': '인스타그램 팔로우', 'g.title': '우리의 여행자들', 'g.lead': '전 세계에서 온 여행자들이 Nomad Gate Tour와 함께한 순간.', 'g.close': '닫기', 'g.prev': '이전 사진', 'g.next': '다음 사진',
        'f.title': '떠나기 전에',
        'c.title': '여행의 문을 여세요', 'c.lead': '언제, 누구와 여행하고 싶은지 알려 주세요. 경로를 여러분에게 맞춰 드립니다.',
        'c.call': '전화 또는 WhatsApp', 'c.mail': '이메일', 'c.copy': '복사', 'c.copied': '복사됨',
        'p.name': '이름', 'p.contact': '이메일 또는 WhatsApp', 'p.journey': '여행', 'p.any': '아직 미정', 'p.month': '월', 'p.who': '인원', 'p.msg': '알려 주실 내용이 있나요?',
        'p.send': '문의 보내기', 'p.req': '이름과 연락처를 입력해 주세요.',
        'p.done': '요청이 준비되어 복사되었습니다. 아래 버튼으로 이메일이나 WhatsApp으로 보내 주세요.', 'p.mailbtn': '이메일 열기', 'p.wabtn': 'WhatsApp 열기',
        'foot.rights': 'All rights reserved', 'foot.top': '맨 위로', 'person': '명', 'people': '명',
        'map.aria': '몽골 전역 투어 경로 지도', 'b.datepre': '출발일: ', 'b.staypre': '숙소: ', 'lang': '언어'
      }
    },

    ja: {
      tours: {}, places: {},
      experiences: [
        ['ゲルに泊まる', '木の格子壁、天窓トーノに集まる垂木、厚いフェルトの壁。ゲルは何世紀にもわたり遊牧民の家族を守り、モンゴルの厳しい気候でも暖かさを保ちます。'],
        ['温かいおもてなし', 'お客様はミルクティーと乳製品、心からのモンゴル流のおもてなしで迎えられます。ゲルの中にはそれぞれ習わしがあります — どこに座るかお教えします。'],
        ['遊牧民と乗馬', '足腰の強いモンゴル馬で川を渡り、広い谷を進みます。ペースはあなたに合わせて。'],
        ['草原の中の砂丘', 'セミゴビでは緑の草原から黄金の砂が立ち上がります。裸足で稜線を歩くか、ラクダで越えてみてください。'],
        ['夜空', '数百キロ先まで街の灯りがなく、ゲルの上に天の川が昇ります。暖かい上着を持って、夜更かししてください。']
      ],
      faq: [
        ['旅行のベストシーズンはいつですか？', '6月〜9月がメインシーズンで、暖かく草原も緑です。9月中旬〜10月上旬はカラマツの森が金色に。寒さが好きな方には冬の旅も可能です。'],
        ['ゲル泊はどんな感じですか？', 'ゲルキャンプにはきちんとしたベッドと薪ストーブがあり、通常は別棟に共用のシャワー・トイレがあります。遊牧民一家での滞在はより素朴で、本当の遊牧生活に近いものです。'],
        ['ビザは必要ですか？', 'パスポートの国籍によります。リクエストをいただければ、国籍ごとの最新ルールを確認し、準備するものをお知らせします。'],
        ['ルート変更やプライベートツアーはできますか？', 'はい。ここにある旅はどれも出発点です。日数、訪問地、快適さのレベルをグループに合わせて変更します。'],
        ['予約方法は？', '日程と人数を書いてリクエストを送ってください。日ごとのプランとグループ料金をお送りします。']
      ],
      months: ['未定', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      t: {
        'nav.journeys': 'ツアー', 'nav.map': '地図', 'nav.exp': '体験', 'nav.road': 'ストーリー', 'nav.faq': 'FAQ', 'nav.cta': '旅を計画', 'menu': 'メニュー',
        'hero.kicker': 'モンゴルのプライベート旅行', 'hero.h1': '忘れられない|思い出をつくろう',
        'hero.sub': 'ゲル泊、遊牧民の家族、砂丘と野生馬 — この道を自ら旅するモンゴル人チームが計画します。',
        'hero.cta1': 'ツアーを見る', 'hero.cta2': 'プライベート旅行を相談', 'scroll': 'スクロール',
        'statement': 'モンゴルのゲルの扉の向こうには、いつも歓迎が待っています。ストーブで沸くミルクティー、火のそばの席、そして何世代も家畜とともに移動してきた家族。Nomad Gate Tour がその扉をあなたのために開きます。',
        'st.brand': 'Nomad Gate Tour がその扉をあなたのために開きます。',
        'j.title': '代表的な旅', 'j.lead': 'ウランバートル発のプライベートツアー8本 — 日帰りから13日間まで。どれもグループに合わせて変更できます。',
        'j.note': 'すべてのツアーはお客様グループ専用で、ウランバートル発着です。',
        'j.day': '日', 'j.days': '日間', 'j.view': '旅の詳細', 'j.drag': 'スクロールで旅する',
        'd.overview': '旅程', 'd.included': '含まれるもの', 'd.inc': ['専用車とドライバー', '英語ガイド', 'ゲルキャンプまたは家庭滞在', '旅行中の食事', '公園入場料'],
        'd.notinc': '含まれないもの', 'd.exc': ['国際線航空券', '旅行保険', '個人的な費用'],
        'd.season': 'シーズン', 'd.style': 'スタイル', 'd.duration': '期間', 'd.route': 'ルート',
        'b.title': 'この旅をリクエスト', 'b.date': '出発日', 'b.who': '人数', 'b.stay': '宿泊', 'b.stay1': '相部屋ゲル', 'b.stay2': '貸切ゲル',
        'b.send': 'リクエストへ進む', 'b.note': '今お支払いは不要です。プランと料金をお送りします。', 'close': '閉じる',
        'm.title': '扉の先へ', 'm.lead': 'ウランバートルから南はゴビ、北はフブスグル湖まで。ツアーを選ぶとルートが表示されます。',
        'x.title': '体験', 'x.lead': '私たちと過ごす旅の一日。',
        'r.title': '旅の記録', 'r.lead': '旅の途中で撮影し、Instagramで公開している実際の動画です。', 'r.follow': 'Instagramをフォロー', 'g.title': '旅の仲間たち', 'g.lead': '世界中から訪れたゲストとNomad Gate Tourの旅の一コマ。', 'g.close': '閉じる', 'g.prev': '前の写真', 'g.next': '次の写真',
        'f.title': '出発の前に',
        'c.title': '旅の扉を開こう', 'c.lead': 'いつ、どなたと旅したいかお知らせください。あなたに合わせてルートをつくります。',
        'c.call': '電話 / WhatsApp', 'c.mail': 'メール', 'c.copy': 'コピー', 'c.copied': 'コピーしました',
        'p.name': 'お名前', 'p.contact': 'メールまたはWhatsApp', 'p.journey': 'ツアー', 'p.any': '未定', 'p.month': '月', 'p.who': '人数', 'p.msg': 'ご要望など',
        'p.send': 'リクエストを送る', 'p.req': 'お名前と連絡先を入力してください。',
        'p.done': 'リクエストの準備ができ、コピーされました。下のボタンからメールまたはWhatsAppで送信してください。', 'p.mailbtn': 'メールを開く', 'p.wabtn': 'WhatsAppを開く',
        'foot.rights': 'All rights reserved', 'foot.top': 'トップへ', 'person': '名', 'people': '名',
        'map.aria': 'モンゴル各地のツアールート地図', 'b.datepre': '出発日: ', 'b.staypre': '宿泊: ', 'lang': '言語'
      }
    },

    de: {
      tours: {}, places: {},
      experiences: [
        ['In der Jurte schlafen', 'Ein Holzgitter, Dachstangen, die im Toono-Kranz zusammenlaufen, und dicke Filzwände: Die Jurte schützt Nomadenfamilien seit Jahrhunderten und bleibt im extremen Klima der Mongolei warm.'],
        ['Herzlicher Empfang', 'Gäste werden mit Milchtee, Milchspezialitäten und echter mongolischer Gastfreundschaft empfangen. Jeder Platz in der Jurte hat seinen Brauch – wir zeigen Ihnen, wo Sie sitzen.'],
        ['Reiten mit Hirten', 'Durchqueren Sie Flüsse und weite Täler auf trittsicheren mongolischen Pferden, in Ihrem eigenen Tempo.'],
        ['Dünen in der Steppe', 'In der Halbwüste steigt goldener Sand aus grünem Grasland auf. Laufen Sie barfuß über die Kämme oder überqueren Sie sie auf dem Kamel.'],
        ['Nachthimmel', 'Hunderte Kilometer ohne Stadtlicht – die Milchstraße steigt über der Jurte auf. Nehmen Sie eine warme Schicht mit und bleiben Sie lange wach.']
      ],
      faq: [
        ['Wann ist die beste Reisezeit?', 'Juni bis September ist die Hauptsaison mit warmen Tagen und grüner Steppe. Von Mitte September bis Anfang Oktober leuchten die Lärchenwälder golden. Winterreisen sind für Kälteliebhaber möglich.'],
        ['Wie ist es, in einer Jurte zu übernachten?', 'Jurtencamps haben richtige Betten und einen Holzofen, meist mit Gemeinschaftsbädern in einem separaten Gebäude. Bei einer Hirtenfamilie ist es einfacher und näher am echten Nomadenleben.'],
        ['Brauche ich ein Visum?', 'Das hängt von Ihrem Reisepass ab. Wenn Sie eine Anfrage senden, prüfen wir die aktuellen Regeln für Ihre Staatsangehörigkeit und sagen Ihnen, was Sie vorbereiten müssen.'],
        ['Kann man eine Route ändern oder eine Privatreise planen?', 'Ja. Jede Reise hier ist ein Ausgangspunkt – wir passen Anzahl der Tage, Orte und Komfortniveau an Ihre Gruppe an.'],
        ['Wie buche ich?', 'Senden Sie eine Anfrage mit Reisedaten und Gruppengröße. Wir antworten mit einem Tagesplan und einem Preis für Ihre Gruppe.']
      ],
      months: ['Flexibel', 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
      t: {
        'nav.journeys': 'Reisen', 'nav.map': 'Karte', 'nav.exp': 'Erlebnisse', 'nav.road': 'Geschichten', 'nav.faq': 'FAQ', 'nav.cta': 'Reise planen', 'menu': 'Menü',
        'hero.kicker': 'Private Reisen in der Mongolei', 'hero.h1': 'Schaffen Sie|unvergessliche Erinnerungen',
        'hero.sub': 'Jurtennächte, Hirtenfamilien, Dünen und Wildpferde – geplant von einem mongolischen Team, das diese Wege selbst bereist.',
        'hero.cta1': 'Reisen entdecken', 'hero.cta2': 'Privatreise planen', 'scroll': 'Scrollen',
        'statement': 'Hinter jeder Jurtentür in der Mongolei wartet ein herzlicher Empfang: Milchtee auf dem Ofen, ein Platz am Feuer und eine Familie, die seit Generationen mit ihren Herden zieht. Nomad Gate Tour öffnet diese Tür für Sie.',
        'st.brand': 'Nomad Gate Tour öffnet diese Tür für Sie.',
        'j.title': 'Unsere Reisen', 'j.lead': 'Acht private Reisen ab Ulaanbaatar, von einem Tag bis zu dreizehn. Jede lässt sich an Ihre Gruppe anpassen.',
        'j.note': 'Jede Reise ist privat für Ihre Gruppe und beginnt und endet in Ulaanbaatar.',
        'j.day': 'Tag', 'j.days': 'Tage', 'j.view': 'Reise ansehen', 'j.drag': 'Scrollen zum Reisen',
        'd.overview': 'Reiseverlauf', 'd.included': 'Inklusive', 'd.inc': ['Privatfahrzeug mit Fahrer', 'Englischsprachiger Guide', 'Jurtencamp oder Familienunterkunft', 'Mahlzeiten unterwegs', 'Parkeintritte'],
        'd.notinc': 'Nicht inklusive', 'd.exc': ['Internationale Flüge', 'Reiseversicherung', 'Persönliche Ausgaben'],
        'd.season': 'Saison', 'd.style': 'Stil', 'd.duration': 'Dauer', 'd.route': 'Route',
        'b.title': 'Diese Reise anfragen', 'b.date': 'Startdatum', 'b.who': 'Reisende', 'b.stay': 'Unterkunft', 'b.stay1': 'Geteilte Jurte', 'b.stay2': 'Eigene Jurte',
        'b.send': 'Weiter zur Anfrage', 'b.note': 'Jetzt keine Zahlung. Wir senden Ihnen Plan und Preis.', 'close': 'Schließen',
        'm.title': 'Wohin das Tor führt', 'm.lead': 'Von Ulaanbaatar führen unsere Routen nach Süden in die Gobi und nach Norden zum Khuvsgul-See. Wählen Sie eine Reise, um sie zu verfolgen.',
        'x.title': 'Erlebnisse', 'x.lead': 'So fühlt sich ein Tag mit uns unterwegs an.',
        'r.title': 'Von unterwegs', 'r.lead': 'Echte Clips von unseren Reisen, geteilt auf Instagram.', 'r.follow': 'Auf Instagram folgen', 'g.title': 'Unsere Reisenden', 'g.lead': 'Gäste aus aller Welt auf Reisen mit Nomad Gate Tour.', 'g.close': 'Schließen', 'g.prev': 'Vorheriges Foto', 'g.next': 'Nächstes Foto',
        'f.title': 'Vor der Reise',
        'c.title': 'Öffnen Sie das Tor zu Ihrer Reise', 'c.lead': 'Sagen Sie uns, wann Sie reisen möchten und wer mitkommt. Wir gestalten die Route um Sie herum.',
        'c.call': 'Anruf oder WhatsApp', 'c.mail': 'E-Mail', 'c.copy': 'Kopieren', 'c.copied': 'Kopiert',
        'p.name': 'Ihr Name', 'p.contact': 'E-Mail oder WhatsApp', 'p.journey': 'Reise', 'p.any': 'Noch unentschieden', 'p.month': 'Monat', 'p.who': 'Reisende', 'p.msg': 'Was sollten wir wissen?',
        'p.send': 'Anfrage senden', 'p.req': 'Bitte geben Sie Ihren Namen und eine Kontaktmöglichkeit an.',
        'p.done': 'Ihre Anfrage ist fertig und kopiert. Senden Sie sie mit den Buttons unten per E-Mail oder WhatsApp.', 'p.mailbtn': 'E-Mail öffnen', 'p.wabtn': 'WhatsApp öffnen',
        'foot.rights': 'Alle Rechte vorbehalten', 'foot.top': 'Nach oben', 'person': 'Person', 'people': 'Personen',
        'map.aria': 'Karte der Reiserouten in der Mongolei', 'b.datepre': 'Startdatum: ', 'b.staypre': 'Unterkunft: ', 'lang': 'Sprache'
      }
    },

    es: {
      tours: {}, places: {},
      experiences: [
        ['Dormir en un ger', 'Un enrejado de madera, varas que se unen en la corona toono y gruesas paredes de fieltro: el ger ha protegido a las familias nómadas durante siglos y se mantiene cálido en el clima extremo de Mongolia.'],
        ['Una cálida bienvenida', 'A los huéspedes se les recibe con té con leche, lácteos y auténtica hospitalidad mongola. Cada parte del ger tiene su costumbre: le mostraremos dónde sentarse.'],
        ['Cabalgar con pastores', 'Cruce ríos y amplios valles a lomos de caballos mongoles de paso firme, al ritmo que le convenga.'],
        ['Dunas en la estepa', 'En el semidesierto, la arena dorada surge de la pradera verde. Camine descalzo por las crestas o crúcelas en camello.'],
        ['Cielos nocturnos', 'Sin luz urbana en cientos de kilómetros, la Vía Láctea se alza sobre el ger. Lleve ropa de abrigo y quédese despierto hasta tarde.']
      ],
      faq: [
        ['¿Cuál es la mejor época para viajar?', 'De junio a septiembre es la temporada principal, con días cálidos y estepa verde. De mediados de septiembre a principios de octubre los bosques de alerces se vuelven dorados. Los viajes de invierno son posibles para quienes disfrutan del frío.'],
        ['¿Cómo es alojarse en un ger?', 'Los campamentos de gers tienen camas de verdad y estufa de leña, normalmente con baños compartidos en un edificio aparte. Con una familia de pastores es más sencillo y más cercano a la vida nómada real.'],
        ['¿Necesito visado?', 'Depende de su pasaporte. Cuando envíe una solicitud, revisaremos las normas vigentes para su nacionalidad y le diremos qué preparar.'],
        ['¿Se puede cambiar una ruta o crear un viaje privado?', 'Sí. Cada viaje aquí es un punto de partida: adaptamos los días, los lugares y el nivel de comodidad a su grupo.'],
        ['¿Cómo reservo?', 'Envíe una solicitud con sus fechas y el tamaño del grupo. Le responderemos con un plan día a día y un precio para su grupo.']
      ],
      months: ['Flexible', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      t: {
        'nav.journeys': 'Viajes', 'nav.map': 'Mapa', 'nav.exp': 'Experiencias', 'nav.road': 'Historias', 'nav.faq': 'Preguntas', 'nav.cta': 'Planear viaje', 'menu': 'Menú',
        'hero.kicker': 'Viajes privados por Mongolia', 'hero.h1': 'Crea recuerdos|inolvidables',
        'hero.sub': 'Noches en ger, familias de pastores, dunas y caballos salvajes, planificados por un equipo mongol que recorre estos caminos.',
        'hero.cta1': 'Ver viajes', 'hero.cta2': 'Planear viaje privado', 'scroll': 'Desliza',
        'statement': 'Tras cada puerta de un ger en Mongolia le espera una bienvenida: té con leche en la estufa, un sitio junto al fuego y una familia que se ha desplazado con sus rebaños durante generaciones. Nomad Gate Tour le abre esa puerta.',
        'st.brand': 'Nomad Gate Tour le abre esa puerta.',
        'j.title': 'Viajes destacados', 'j.lead': 'Ocho viajes privados desde Ulán Bator, de un día a trece. Todos se pueden adaptar a su grupo.',
        'j.note': 'Cada viaje es privado para su grupo y empieza y termina en Ulán Bator.',
        'j.day': 'día', 'j.days': 'días', 'j.view': 'Ver el viaje', 'j.drag': 'Desliza para viajar',
        'd.overview': 'El viaje', 'd.included': 'Incluido', 'd.inc': ['Vehículo privado con conductor', 'Guía de habla inglesa', 'Campamento de gers o estancia con familia', 'Comidas durante el viaje', 'Entradas a los parques'],
        'd.notinc': 'No incluido', 'd.exc': ['Vuelos internacionales', 'Seguro de viaje', 'Gastos personales'],
        'd.season': 'Temporada', 'd.style': 'Estilo', 'd.duration': 'Duración', 'd.route': 'Ruta',
        'b.title': 'Solicitar este viaje', 'b.date': 'Fecha de inicio', 'b.who': 'Viajeros', 'b.stay': 'Alojamiento', 'b.stay1': 'Ger compartido', 'b.stay2': 'Ger privado',
        'b.send': 'Continuar con la solicitud', 'b.note': 'Sin pago ahora. Le enviaremos un plan y un precio.', 'close': 'Cerrar',
        'm.title': 'Adónde lleva la puerta', 'm.lead': 'Desde Ulán Bator, nuestras rutas llegan al Gobi en el sur y al lago Khuvsgul en el norte. Elija un viaje para ver su recorrido.',
        'x.title': 'Experiencias', 'x.lead': 'Así es un día de viaje con nosotros.',
        'r.title': 'Desde el camino', 'r.lead': 'Clips reales grabados en nuestros viajes y compartidos en Instagram.', 'r.follow': 'Seguir en Instagram', 'g.title': 'Nuestros viajeros', 'g.lead': 'Viajeros de todo el mundo en las rutas de Nomad Gate Tour.', 'g.close': 'Cerrar', 'g.prev': 'Foto anterior', 'g.next': 'Foto siguiente',
        'f.title': 'Antes de viajar',
        'c.title': 'Abra la puerta a su viaje', 'c.lead': 'Cuéntenos cuándo quiere viajar y quién viene. Diseñaremos la ruta a su medida.',
        'c.call': 'Llamada o WhatsApp', 'c.mail': 'Correo', 'c.copy': 'Copiar', 'c.copied': 'Copiado',
        'p.name': 'Su nombre', 'p.contact': 'Correo o WhatsApp', 'p.journey': 'Viaje', 'p.any': 'Aún no lo sé', 'p.month': 'Mes', 'p.who': 'Viajeros', 'p.msg': '¿Algo que debamos saber?',
        'p.send': 'Enviar solicitud', 'p.req': 'Indique su nombre y una forma de contacto.',
        'p.done': 'Su solicitud está lista y copiada. Envíela por correo o WhatsApp con los botones de abajo.', 'p.mailbtn': 'Abrir correo', 'p.wabtn': 'Abrir WhatsApp',
        'foot.rights': 'Todos los derechos reservados', 'foot.top': 'Volver arriba', 'person': 'viajero', 'people': 'viajeros',
        'map.aria': 'Mapa de las rutas por Mongolia', 'b.datepre': 'Fecha de inicio: ', 'b.staypre': 'Alojamiento: ', 'lang': 'Idioma'
      }
    }
  };

  var tourById = {}; D.tours.forEach(function (tr) { tourById[tr.id] = tr; });
  Object.keys(X).forEach(function (l) {
    var x = X[l];
    Object.keys(x.tours).forEach(function (id) {
      var src = x.tours[id], tr = tourById[id]; if (!tr) return;
      ['name', 'season', 'style', 'lead'].forEach(function (k) { tr[k][l] = src[k]; });
      src.plan.forEach(function (p, i) { if (tr.plan[i]) tr.plan[i][l] = p; });
    });
    Object.keys(x.places).forEach(function (p) { if (D.places[p]) D.places[p][l] = x.places[p]; });
    x.experiences.forEach(function (e, i) { var o = D.experiences[i]; if (o) { o.t[l] = e[0]; o.d[l] = e[1]; } });
    x.faq.forEach(function (f, i) { var o = D.faq[i]; if (o) { o.q[l] = f[0]; o.a[l] = f[1]; } });
    D.months[l] = x.months;
    D.t[l] = x.t;
  });

  /* booking + deposit payment strings */
  var PAY = {
    en: { 'pay.title': 'Book this journey', 'pay.from': 'From', 'pay.pp': 'per person', 'pay.currency': 'Currency', 'pay.total': 'Trip total', 'pay.deposit': 'Deposit now · {p}%', 'pay.balance': 'Balance before departure',
      'pay.book': 'Book & pay deposit', 'pay.reqonly': 'Just send a request', 'pay.sample': 'Price per person — lower for bigger groups.', 'pay.back': 'Back', 'pay.details': 'Your details', 'pay.email': 'Email', 'pay.phone': 'Phone / WhatsApp',
      'pay.paybtn': 'Pay {amt} deposit', 'pay.secure': 'You pay on the bank’s secure page. Visa, Mastercard, UnionPay, JCB and Amex accepted.', 'pay.req': 'Please enter your name and a valid email.', 'pay.err': 'Something went wrong. Please try again or contact us.', 'pay.wait': 'Connecting to the bank…',
      'res.ok.t': 'Deposit received', 'res.ok.d': 'Your booking is confirmed. We will email your day-by-day plan within 24 hours.', 'res.fail.t': 'Payment not completed', 'res.fail.d': 'No money was taken. You can try again or contact us.', 'res.retry': 'Try again', 'res.ref': 'Booking reference', 'res.paid': 'Deposit paid',
      'test.badge': 'Test payment', 'test.h': 'Pay the deposit', 'test.note': 'This is a test page — no card is charged. In live mode this step happens on Golomt Bank’s secure payment page.', 'test.ok': 'Simulate successful payment', 'test.fail': 'Simulate failed payment', 'test.amount': 'Amount', 'test.tour': 'Journey' },
    mn: { 'pay.title': 'Энэ аяллыг захиалах', 'pay.from': 'Үнэ', 'pay.pp': 'нэг хүнд', 'pay.currency': 'Валют', 'pay.total': 'Аяллын нийт үнэ', 'pay.deposit': 'Одоо төлөх урьдчилгаа · {p}%', 'pay.balance': 'Аяллын өмнө төлөх үлдэгдэл',
      'pay.book': 'Захиалж урьдчилгаа төлөх', 'pay.reqonly': 'Зөвхөн хүсэлт илгээх', 'pay.sample': 'Нэг хүний үнэ — хүн олон байх тусам хямдарна.', 'pay.back': 'Буцах', 'pay.details': 'Таны мэдээлэл', 'pay.email': 'Имэйл', 'pay.phone': 'Утас / WhatsApp',
      'pay.paybtn': '{amt} урьдчилгаа төлөх', 'pay.secure': 'Төлбөрийг банкны аюулгүй хуудсан дээр хийнэ. Visa, Mastercard, UnionPay, JCB, Amex хүлээн авна.', 'pay.req': 'Нэр болон зөв имэйл хаягаа оруулна уу.', 'pay.err': 'Алдаа гарлаа. Дахин оролдох эсвэл бидэнтэй холбогдоно уу.', 'pay.wait': 'Банк руу холбогдож байна…',
      'res.ok.t': 'Урьдчилгаа хүлээн авлаа', 'res.ok.d': 'Таны захиалга баталгаажлаа. Өдөр бүрийн төлөвлөгөөг 24 цагийн дотор имэйлээр илгээнэ.', 'res.fail.t': 'Төлбөр хийгдсэнгүй', 'res.fail.d': 'Таны данснаас мөнгө хасагдаагүй. Дахин оролдох эсвэл бидэнтэй холбогдоно уу.', 'res.retry': 'Дахин оролдох', 'res.ref': 'Захиалгын дугаар', 'res.paid': 'Төлсөн урьдчилгаа',
      'test.badge': 'Тест төлбөр', 'test.h': 'Урьдчилгаа төлөх', 'test.note': 'Энэ бол тест хуудас — картаас мөнгө хасагдахгүй. Жинхэнэ горимд энэ алхам Голомт банкны аюулгүй төлбөрийн хуудсан дээр хийгдэнэ.', 'test.ok': 'Амжилттай төлбөр дуурайх', 'test.fail': 'Амжилтгүй төлбөр дуурайх', 'test.amount': 'Дүн', 'test.tour': 'Аялал' },
    ru: { 'pay.title': 'Забронировать тур', 'pay.from': 'От', 'pay.pp': 'за человека', 'pay.currency': 'Валюта', 'pay.total': 'Стоимость тура', 'pay.deposit': 'Предоплата сейчас · {p}%', 'pay.balance': 'Остаток до начала тура',
      'pay.book': 'Забронировать и внести предоплату', 'pay.reqonly': 'Просто отправить заявку', 'pay.sample': 'Цена за человека — чем больше группа, тем ниже.', 'pay.back': 'Назад', 'pay.details': 'Ваши данные', 'pay.email': 'Эл. почта', 'pay.phone': 'Телефон / WhatsApp',
      'pay.paybtn': 'Внести предоплату {amt}', 'pay.secure': 'Оплата проходит на защищённой странице банка. Принимаем Visa, Mastercard, UnionPay, JCB и Amex.', 'pay.req': 'Укажите имя и корректный адрес эл. почты.', 'pay.err': 'Что-то пошло не так. Попробуйте ещё раз или свяжитесь с нами.', 'pay.wait': 'Подключаемся к банку…',
      'res.ok.t': 'Предоплата получена', 'res.ok.d': 'Ваше бронирование подтверждено. В течение 24 часов мы пришлём план по дням.', 'res.fail.t': 'Оплата не завершена', 'res.fail.d': 'Деньги не списаны. Попробуйте ещё раз или свяжитесь с нами.', 'res.retry': 'Попробовать снова', 'res.ref': 'Номер бронирования', 'res.paid': 'Внесённая предоплата',
      'test.badge': 'Тестовый платёж', 'test.h': 'Внести предоплату', 'test.note': 'Это тестовая страница — деньги с карты не списываются. В рабочем режиме этот шаг проходит на защищённой странице оплаты Golomt Bank.', 'test.ok': 'Имитировать успешную оплату', 'test.fail': 'Имитировать неудачную оплату', 'test.amount': 'Сумма', 'test.tour': 'Тур' },
    ko: { 'pay.title': '이 여행 예약하기', 'pay.from': '1인', 'pay.pp': '부터', 'pay.currency': '통화', 'pay.total': '총 여행 요금', 'pay.deposit': '지금 결제할 예약금 · {p}%', 'pay.balance': '출발 전 잔금',
      'pay.book': '예약하고 예약금 결제', 'pay.reqonly': '문의만 보내기', 'pay.sample': '1인 요금 — 인원이 많을수록 저렴해집니다.', 'pay.back': '뒤로', 'pay.details': '예약자 정보', 'pay.email': '이메일', 'pay.phone': '전화 / WhatsApp',
      'pay.paybtn': '예약금 {amt} 결제', 'pay.secure': '결제는 은행의 보안 결제 페이지에서 진행됩니다. Visa, Mastercard, UnionPay, JCB, Amex 사용 가능.', 'pay.req': '이름과 올바른 이메일을 입력해 주세요.', 'pay.err': '문제가 발생했습니다. 다시 시도하거나 문의해 주세요.', 'pay.wait': '은행에 연결 중…',
      'res.ok.t': '예약금이 결제되었습니다', 'res.ok.d': '예약이 확정되었습니다. 24시간 이내에 일별 일정을 이메일로 보내 드립니다.', 'res.fail.t': '결제가 완료되지 않았습니다', 'res.fail.d': '결제된 금액은 없습니다. 다시 시도하거나 문의해 주세요.', 'res.retry': '다시 시도', 'res.ref': '예약 번호', 'res.paid': '결제한 예약금',
      'test.badge': '테스트 결제', 'test.h': '예약금 결제', 'test.note': '테스트 페이지입니다 — 카드에서 결제되지 않습니다. 실제 운영 시 이 단계는 골롬트 은행의 보안 결제 페이지에서 진행됩니다.', 'test.ok': '결제 성공 시뮬레이션', 'test.fail': '결제 실패 시뮬레이션', 'test.amount': '금액', 'test.tour': '여행' },
    ja: { 'pay.title': 'この旅を予約', 'pay.from': '1名', 'pay.pp': '〜', 'pay.currency': '通貨', 'pay.total': '旅行代金合計', 'pay.deposit': '今お支払いの予約金 · {p}%', 'pay.balance': '出発前にお支払いの残金',
      'pay.book': '予約して予約金を支払う', 'pay.reqonly': 'リクエストだけ送る', 'pay.sample': '1人あたりの料金です。人数が多いほどお得になります。', 'pay.back': '戻る', 'pay.details': 'お客様情報', 'pay.email': 'メール', 'pay.phone': '電話 / WhatsApp',
      'pay.paybtn': '予約金 {amt} を支払う', 'pay.secure': 'お支払いは銀行の安全な決済ページで行われます。Visa、Mastercard、UnionPay、JCB、Amexがご利用いただけます。', 'pay.req': 'お名前と正しいメールアドレスを入力してください。', 'pay.err': '問題が発生しました。もう一度お試しいただくか、お問い合わせください。', 'pay.wait': '銀行に接続しています…',
      'res.ok.t': '予約金を受け付けました', 'res.ok.d': 'ご予約が確定しました。24時間以内に日ごとのプランをメールでお送りします。', 'res.fail.t': 'お支払いが完了しませんでした', 'res.fail.d': '料金は引き落とされていません。もう一度お試しいただくか、お問い合わせください。', 'res.retry': 'もう一度試す', 'res.ref': '予約番号', 'res.paid': 'お支払い済みの予約金',
      'test.badge': 'テスト決済', 'test.h': '予約金のお支払い', 'test.note': 'これはテストページです — カードには請求されません。本番ではこの手順はゴロムト銀行の安全な決済ページで行われます。', 'test.ok': '決済成功をシミュレート', 'test.fail': '決済失敗をシミュレート', 'test.amount': '金額', 'test.tour': 'ツアー' },
    de: { 'pay.title': 'Diese Reise buchen', 'pay.from': 'Ab', 'pay.pp': 'pro Person', 'pay.currency': 'Währung', 'pay.total': 'Reisepreis gesamt', 'pay.deposit': 'Anzahlung jetzt · {p} %', 'pay.balance': 'Restbetrag vor Abreise',
      'pay.book': 'Buchen & anzahlen', 'pay.reqonly': 'Nur Anfrage senden', 'pay.sample': 'Preis pro Person — für größere Gruppen günstiger.', 'pay.back': 'Zurück', 'pay.details': 'Ihre Angaben', 'pay.email': 'E-Mail', 'pay.phone': 'Telefon / WhatsApp',
      'pay.paybtn': '{amt} anzahlen', 'pay.secure': 'Sie zahlen auf der sicheren Zahlungsseite der Bank. Visa, Mastercard, UnionPay, JCB und Amex werden akzeptiert.', 'pay.req': 'Bitte geben Sie Ihren Namen und eine gültige E-Mail-Adresse ein.', 'pay.err': 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns.', 'pay.wait': 'Verbindung zur Bank…',
      'res.ok.t': 'Anzahlung erhalten', 'res.ok.d': 'Ihre Buchung ist bestätigt. Wir senden Ihnen den Tagesplan innerhalb von 24 Stunden per E-Mail.', 'res.fail.t': 'Zahlung nicht abgeschlossen', 'res.fail.d': 'Es wurde nichts abgebucht. Sie können es erneut versuchen oder uns kontaktieren.', 'res.retry': 'Erneut versuchen', 'res.ref': 'Buchungsnummer', 'res.paid': 'Bezahlte Anzahlung',
      'test.badge': 'Testzahlung', 'test.h': 'Anzahlung leisten', 'test.note': 'Dies ist eine Testseite — die Karte wird nicht belastet. Im Live-Betrieb erfolgt dieser Schritt auf der sicheren Zahlungsseite der Golomt Bank.', 'test.ok': 'Erfolgreiche Zahlung simulieren', 'test.fail': 'Fehlgeschlagene Zahlung simulieren', 'test.amount': 'Betrag', 'test.tour': 'Reise' },
    es: { 'pay.title': 'Reservar este viaje', 'pay.from': 'Desde', 'pay.pp': 'por persona', 'pay.currency': 'Moneda', 'pay.total': 'Total del viaje', 'pay.deposit': 'Depósito ahora · {p} %', 'pay.balance': 'Saldo antes de la salida',
      'pay.book': 'Reservar y pagar depósito', 'pay.reqonly': 'Solo enviar solicitud', 'pay.sample': 'Precio por persona: más bajo cuanto mayor es el grupo.', 'pay.back': 'Volver', 'pay.details': 'Sus datos', 'pay.email': 'Correo', 'pay.phone': 'Teléfono / WhatsApp',
      'pay.paybtn': 'Pagar depósito de {amt}', 'pay.secure': 'Pagará en la página segura del banco. Se aceptan Visa, Mastercard, UnionPay, JCB y Amex.', 'pay.req': 'Indique su nombre y un correo válido.', 'pay.err': 'Algo salió mal. Inténtelo de nuevo o contáctenos.', 'pay.wait': 'Conectando con el banco…',
      'res.ok.t': 'Depósito recibido', 'res.ok.d': 'Su reserva está confirmada. Le enviaremos el plan día a día por correo en 24 horas.', 'res.fail.t': 'Pago no completado', 'res.fail.d': 'No se ha cobrado nada. Puede intentarlo de nuevo o contactarnos.', 'res.retry': 'Intentar de nuevo', 'res.ref': 'Número de reserva', 'res.paid': 'Depósito pagado',
      'test.badge': 'Pago de prueba', 'test.h': 'Pagar el depósito', 'test.note': 'Esta es una página de prueba: no se cobra ninguna tarjeta. En modo real, este paso se realiza en la página de pago segura de Golomt Bank.', 'test.ok': 'Simular pago correcto', 'test.fail': 'Simular pago fallido', 'test.amount': 'Importe', 'test.tour': 'Viaje' }
  };
  Object.keys(PAY).forEach(function (l) { Object.keys(PAY[l]).forEach(function (k) { D.t[l][k] = PAY[l][k]; }); });

  /* pay-later mode + terms links */
  var PAY2 = {
    en: { 'pay.bookreq': 'Book now, pay later', 'pay.sendreq': 'Send booking request', 'pay.laternote': 'No payment now. We confirm availability and email you the invoice for the deposit within 24 hours.', 'res.req.t': 'Booking request received', 'res.req.d': 'We will check availability and email you the deposit invoice within 24 hours.', 'res.due': 'Deposit to pay', 'pay.terms': 'Booking terms & privacy policy', 'foot.terms': 'Booking terms', 'foot.privacy': 'Privacy' },
    mn: { 'pay.bookreq': 'Одоо захиалж, дараа төлөх', 'pay.sendreq': 'Захиалгын хүсэлт илгээх', 'pay.laternote': 'Одоо төлбөр төлөхгүй. Бид боломжтой эсэхийг шалгаад урьдчилгааны нэхэмжлэхийг 24 цагийн дотор имэйлээр илгээнэ.', 'res.req.t': 'Захиалгын хүсэлт хүлээн авлаа', 'res.req.d': 'Бид боломжтой эсэхийг шалгаад урьдчилгааны нэхэмжлэхийг 24 цагийн дотор имэйлээр илгээнэ.', 'res.due': 'Төлөх урьдчилгаа', 'pay.terms': 'Захиалгын нөхцөл ба нууцлалын бодлого', 'foot.terms': 'Захиалгын нөхцөл', 'foot.privacy': 'Нууцлал' },
    ru: { 'pay.bookreq': 'Забронировать, оплатить позже', 'pay.sendreq': 'Отправить заявку на бронирование', 'pay.laternote': 'Оплата сейчас не нужна. Мы проверим наличие мест и в течение 24 часов пришлём счёт на предоплату.', 'res.req.t': 'Заявка на бронирование получена', 'res.req.d': 'Мы проверим наличие мест и в течение 24 часов пришлём счёт на предоплату.', 'res.due': 'Предоплата к оплате', 'pay.terms': 'Условия бронирования и конфиденциальность', 'foot.terms': 'Условия бронирования', 'foot.privacy': 'Конфиденциальность' },
    ko: { 'pay.bookreq': '지금 예약, 결제는 나중에', 'pay.sendreq': '예약 요청 보내기', 'pay.laternote': '지금은 결제하지 않습니다. 예약 가능 여부를 확인한 뒤 24시간 이내에 예약금 청구서를 이메일로 보내 드립니다.', 'res.req.t': '예약 요청이 접수되었습니다', 'res.req.d': '예약 가능 여부를 확인한 뒤 24시간 이내에 예약금 청구서를 이메일로 보내 드립니다.', 'res.due': '결제할 예약금', 'pay.terms': '예약 약관 및 개인정보 처리방침', 'foot.terms': '예약 약관', 'foot.privacy': '개인정보' },
    ja: { 'pay.bookreq': '今すぐ予約、支払いは後で', 'pay.sendreq': '予約リクエストを送る', 'pay.laternote': '今お支払いは不要です。空き状況を確認し、24時間以内に予約金の請求書をメールでお送りします。', 'res.req.t': '予約リクエストを受け付けました', 'res.req.d': '空き状況を確認し、24時間以内に予約金の請求書をメールでお送りします。', 'res.due': 'お支払いいただく予約金', 'pay.terms': '予約規約とプライバシーポリシー', 'foot.terms': '予約規約', 'foot.privacy': 'プライバシー' },
    de: { 'pay.bookreq': 'Jetzt buchen, später zahlen', 'pay.sendreq': 'Buchungsanfrage senden', 'pay.laternote': 'Jetzt keine Zahlung. Wir prüfen die Verfügbarkeit und senden Ihnen innerhalb von 24 Stunden die Rechnung für die Anzahlung.', 'res.req.t': 'Buchungsanfrage erhalten', 'res.req.d': 'Wir prüfen die Verfügbarkeit und senden Ihnen innerhalb von 24 Stunden die Rechnung für die Anzahlung.', 'res.due': 'Fällige Anzahlung', 'pay.terms': 'Buchungsbedingungen & Datenschutz', 'foot.terms': 'Buchungsbedingungen', 'foot.privacy': 'Datenschutz' },
    es: { 'pay.bookreq': 'Reserve ahora, pague después', 'pay.sendreq': 'Enviar solicitud de reserva', 'pay.laternote': 'Sin pago ahora. Comprobamos la disponibilidad y le enviamos la factura del depósito por correo en 24 horas.', 'res.req.t': 'Solicitud de reserva recibida', 'res.req.d': 'Comprobaremos la disponibilidad y le enviaremos la factura del depósito por correo en 24 horas.', 'res.due': 'Depósito a pagar', 'pay.terms': 'Condiciones de reserva y privacidad', 'foot.terms': 'Condiciones de reserva', 'foot.privacy': 'Privacidad' }
  };
  Object.keys(PAY2).forEach(function (l) { Object.keys(PAY2[l]).forEach(function (k) { D.t[l][k] = PAY2[l][k]; }); });

  /* floating WhatsApp button */
  var WA = {
    en: ['Chat on WhatsApp', 'Hello Nomad Gate Tour! I would like to ask about a trip in Mongolia.'],
    mn: ['WhatsApp-аар асуух', 'Сайн байна уу, Nomad Gate Tour! Аяллын талаар асуух зүйл байна.'],
    ru: ['Написать в WhatsApp', 'Здравствуйте, Nomad Gate Tour! Хочу узнать о поездке по Монголии.'],
    ko: ['WhatsApp으로 문의', '안녕하세요, Nomad Gate Tour! 몽골 여행에 대해 문의하고 싶습니다.'],
    ja: ['WhatsAppで相談', 'こんにちは、Nomad Gate Tour！モンゴル旅行について相談したいです。'],
    de: ['Auf WhatsApp schreiben', 'Hallo Nomad Gate Tour! Ich möchte mich nach einer Reise in die Mongolei erkundigen.'],
    es: ['Escríbenos por WhatsApp', '¡Hola, Nomad Gate Tour! Quisiera preguntar por un viaje a Mongolia.']
  };
  Object.keys(WA).forEach(function (l) { D.t[l]['wa.label'] = WA[l][0]; D.t[l]['wa.msg'] = WA[l][1]; });
  var STEP = { en: ['Fewer travellers', 'More travellers'], mn: ['Хүний тоог хасах', 'Хүний тоог нэмэх'], ru: ['Меньше путешественников', 'Больше путешественников'],
    ko: ['인원 줄이기', '인원 늘리기'], ja: ['人数を減らす', '人数を増やす'], de: ['Weniger Reisende', 'Mehr Reisende'], es: ['Menos viajeros', 'Más viajeros'] };
  Object.keys(STEP).forEach(function (l) { D.t[l]['pay.less'] = STEP[l][0]; D.t[l]['pay.more'] = STEP[l][1]; });
  var COUNTRY = { en: 'MONGOLIA', mn: 'МОНГОЛ УЛС', ru: 'МОНГОЛИЯ', ko: '몽골', ja: 'モンゴル', de: 'MONGOLEI', es: 'MONGOLIA' };
  Object.keys(COUNTRY).forEach(function (l) { D.t[l]['map.country'] = COUNTRY[l]; });
  ['en','ko','ja','de','es'].forEach(function (l) { D.t[l]['map.km'] = 'km'; }); D.t.mn['map.km'] = 'км'; D.t.ru['map.km'] = 'км';

  /* theme, mobile menu, stories viewer, reviews, team (2026-11) */
  var K = ['theme.toLight', 'theme.toDark', 'theme.light', 'theme.dark', 'nav.guests', 'nav.team', 'menu.close', 'menu.lang', 'menu.theme', 'menu.follow',
    'menu.d.journeys', 'menu.d.map', 'menu.d.exp', 'menu.d.road', 'menu.d.guests', 'menu.d.team', 'menu.d.faq', 'r.lead', 'r.open', 'sv.prev', 'sv.next',
    'rv.btn', 'rv.title', 'rv.lead', 'rv.name', 'rv.country', 'rv.rating', 'rv.tour', 'rv.any', 'rv.text', 'rv.email', 'rv.send', 'rv.thanks', 'rv.err', 'rv.later', 'rv.fail', 'rv.stars',
    'team.title', 'team.lead', 'g.view'];
  var NEW = {
    en: ['Switch to light mode', 'Switch to dark mode', 'Light', 'Dark', 'Travellers', 'Team', 'Close menu', 'Language', 'Theme', 'Follow us',
      'Private routes from Ulaanbaatar', 'Every route on the map', 'A day on the road with us', 'Clips and memories from our trips', 'Photos and reviews', 'The people behind your trip', 'Visas, seasons, ger stays',
      'Real moments from our journeys. Tap a clip to watch it large and read the story behind it.', 'Watch clip', 'Previous clip', 'Next clip',
      'Leave a review', 'Leave a review', 'Travelled with us? Tell future travellers how it was. Reviews appear on the site after we check them.', 'Your name', 'Country', 'Your rating', 'Journey', 'Other', 'Your review', 'Email (optional, never shown)', 'Send review',
      'Thank you! Your review will appear once we have checked it.', 'Please add your name, a rating and a few words.', 'Too many reviews from this connection. Please try again later.', 'Could not send. Please try again.', '{n} out of 5',
      'Our team', 'The people who plan, drive and guide your journey.', 'Open photo'],
    mn: ['Цайвар горимд шилжих', 'Бараан горимд шилжих', 'Цайвар', 'Бараан', 'Аялагчид', 'Хамт олон', 'Цэс хаах', 'Хэл', 'Өнгө', 'Биднийг дагаарай',
      'Улаанбаатараас эхлэх хувийн аяллууд', 'Маршрут бүрийг газрын зураг дээр', 'Бидэнтэй замд гарсан нэг өдөр', 'Аяллын бичлэг, дурсамж', 'Зураг, сэтгэгдэл', 'Таны аяллыг зохион байгуулагчид', 'Виз, улирал, гэрт хоноглох',
      'Аяллаас үлдсэн жинхэнэ бичлэгүүд. Дээр нь дарж томоор үзэн, тухайн мөчийн дурсамжийг уншаарай.', 'Бичлэг үзэх', 'Өмнөх бичлэг', 'Дараах бичлэг',
      'Сэтгэгдэл үлдээх', 'Сэтгэгдэл үлдээх', 'Бидэнтэй аялсан уу? Аялал тань ямар байсныг ирээдүйн аялагчдад хуваалцаарай. Бид шалгасны дараа сэтгэгдэл сайтад гарна.', 'Таны нэр', 'Улс', 'Үнэлгээ', 'Аялал', 'Бусад', 'Таны сэтгэгдэл', 'Имэйл (заавал биш, нийтлэгдэхгүй)', 'Илгээх',
      'Баярлалаа! Бид шалгасны дараа таны сэтгэгдэл сайтад гарна.', 'Нэр, үнэлгээ болон хэдэн үг бичнэ үү.', 'Энэ сүлжээнээс олон сэтгэгдэл ирсэн байна. Хэсэг хугацааны дараа дахин оролдоно уу.', 'Илгээж чадсангүй. Дахин оролдоно уу.', '5-аас {n}',
      'Манай хамт олон', 'Таны аяллыг төлөвлөж, жолоодож, хөтлөх хүмүүс.', 'Зураг нээх'],
    ru: ['Светлая тема', 'Тёмная тема', 'Светлая', 'Тёмная', 'Путешественники', 'Команда', 'Закрыть меню', 'Язык', 'Тема', 'Мы в соцсетях',
      'Индивидуальные туры из Улан-Батора', 'Все маршруты на карте', 'Один день в дороге с нами', 'Видео и истории из поездок', 'Фото и отзывы', 'Люди, которые готовят вашу поездку', 'Визы, сезоны, ночёвки в юрте',
      'Настоящие моменты из наших поездок. Нажмите на видео, чтобы посмотреть его крупно и прочитать историю.', 'Смотреть видео', 'Предыдущее видео', 'Следующее видео',
      'Оставить отзыв', 'Оставить отзыв', 'Путешествовали с нами? Расскажите будущим гостям, как всё прошло. Отзыв появится на сайте после проверки.', 'Ваше имя', 'Страна', 'Ваша оценка', 'Тур', 'Другое', 'Ваш отзыв', 'Эл. почта (необязательно, не публикуется)', 'Отправить отзыв',
      'Спасибо! Ваш отзыв появится после проверки.', 'Укажите имя, оценку и напишите несколько слов.', 'Слишком много отзывов с этого подключения. Попробуйте позже.', 'Не удалось отправить. Попробуйте ещё раз.', '{n} из 5',
      'Наша команда', 'Люди, которые планируют, ведут машину и сопровождают вас в пути.', 'Открыть фото'],
    ko: ['라이트 모드로 전환', '다크 모드로 전환', '라이트', '다크', '여행자', '팀', '메뉴 닫기', '언어', '테마', '팔로우하기',
      '울란바토르 출발 프라이빗 투어', '지도에서 보는 모든 경로', '우리와 함께하는 길 위의 하루', '여행 영상과 추억', '사진과 후기', '여행을 만드는 사람들', '비자, 계절, 게르 숙박',
      '여행에서 담은 진짜 순간들. 영상을 누르면 크게 보고 그 순간의 이야기를 읽을 수 있습니다.', '영상 보기', '이전 영상', '다음 영상',
      '후기 남기기', '후기 남기기', '저희와 여행하셨나요? 다음 여행자에게 여행이 어땠는지 알려 주세요. 후기는 확인 후 사이트에 게시됩니다.', '이름', '국가', '평점', '투어', '기타', '후기', '이메일 (선택, 공개되지 않음)', '후기 보내기',
      '감사합니다! 확인 후 후기가 게시됩니다.', '이름, 평점, 짧은 후기를 입력해 주세요.', '이 연결에서 후기가 너무 많이 전송되었습니다. 잠시 후 다시 시도해 주세요.', '전송하지 못했습니다. 다시 시도해 주세요.', '5점 만점에 {n}점',
      '우리 팀', '여행을 계획하고, 운전하고, 안내하는 사람들.', '사진 열기'],
    ja: ['ライトモードに切り替え', 'ダークモードに切り替え', 'ライト', 'ダーク', '旅行者', 'チーム', 'メニューを閉じる', '言語', 'テーマ', 'フォローする',
      'ウランバートル発のプライベートツアー', 'すべてのルートを地図で', '私たちと過ごす旅の一日', '旅の動画と思い出', '写真とレビュー', '旅をつくる人たち', 'ビザ、季節、ゲル泊',
      '旅で出会った本物の瞬間。動画をタップすると大きく再生され、その時の物語を読めます。', '動画を見る', '前の動画', '次の動画',
      'レビューを書く', 'レビューを書く', '私たちと旅をしましたか？これから旅する人に、旅の感想を伝えてください。レビューは確認後にサイトに掲載されます。', 'お名前', '国', '評価', 'ツアー', 'その他', 'レビュー', 'メール（任意・公開されません）', 'レビューを送信',
      'ありがとうございます！確認後にレビューが掲載されます。', 'お名前、評価、短いコメントを入力してください。', 'この接続からのレビューが多すぎます。しばらくしてからお試しください。', '送信できませんでした。もう一度お試しください。', '5つ星中{n}つ星',
      '私たちのチーム', '旅を計画し、運転し、案内する人たち。', '写真を開く'],
    de: ['Zum hellen Modus wechseln', 'Zum dunklen Modus wechseln', 'Hell', 'Dunkel', 'Reisende', 'Team', 'Menü schließen', 'Sprache', 'Darstellung', 'Folgen Sie uns',
      'Private Reisen ab Ulaanbaatar', 'Alle Routen auf der Karte', 'Ein Tag unterwegs mit uns', 'Clips und Erinnerungen unserer Reisen', 'Fotos und Bewertungen', 'Die Menschen hinter Ihrer Reise', 'Visum, Reisezeit, Jurten',
      'Echte Momente von unseren Reisen. Tippen Sie auf einen Clip, um ihn groß zu sehen und die Geschichte dazu zu lesen.', 'Clip ansehen', 'Vorheriger Clip', 'Nächster Clip',
      'Bewertung schreiben', 'Bewertung schreiben', 'Sind Sie mit uns gereist? Erzählen Sie künftigen Reisenden, wie es war. Bewertungen erscheinen, nachdem wir sie geprüft haben.', 'Ihr Name', 'Land', 'Ihre Bewertung', 'Reise', 'Andere', 'Ihr Erfahrungsbericht', 'E-Mail (optional, wird nicht angezeigt)', 'Bewertung senden',
      'Vielen Dank! Ihre Bewertung erscheint, sobald wir sie geprüft haben.', 'Bitte geben Sie Ihren Namen, eine Bewertung und ein paar Worte an.', 'Zu viele Bewertungen von dieser Verbindung. Bitte versuchen Sie es später erneut.', 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.', '{n} von 5',
      'Unser Team', 'Die Menschen, die Ihre Reise planen, fahren und begleiten.', 'Foto öffnen'],
    es: ['Cambiar a modo claro', 'Cambiar a modo oscuro', 'Claro', 'Oscuro', 'Viajeros', 'Equipo', 'Cerrar menú', 'Idioma', 'Tema', 'Síguenos',
      'Viajes privados desde Ulán Bator', 'Todas las rutas en el mapa', 'Un día en el camino con nosotros', 'Vídeos y recuerdos de nuestros viajes', 'Fotos y reseñas', 'Las personas detrás de tu viaje', 'Visados, temporadas, noches en ger',
      'Momentos reales de nuestros viajes. Toca un vídeo para verlo en grande y leer la historia que hay detrás.', 'Ver vídeo', 'Vídeo anterior', 'Vídeo siguiente',
      'Dejar una reseña', 'Dejar una reseña', '¿Viajaste con nosotros? Cuéntales a los futuros viajeros cómo fue. Las reseñas se publican después de revisarlas.', 'Tu nombre', 'País', 'Tu valoración', 'Viaje', 'Otro', 'Tu reseña', 'Correo (opcional, no se publica)', 'Enviar reseña',
      '¡Gracias! Tu reseña aparecerá cuando la hayamos revisado.', 'Añade tu nombre, una valoración y unas palabras.', 'Demasiadas reseñas desde esta conexión. Inténtalo más tarde.', 'No se pudo enviar. Inténtalo de nuevo.', '{n} de 5',
      'Nuestro equipo', 'Las personas que planifican, conducen y guían tu viaje.', 'Abrir foto']
  };
  Object.keys(NEW).forEach(function (l) { if (NEW[l].length !== K.length) throw new Error('i18n ' + l); K.forEach(function (k, i) { D.t[l][k] = NEW[l][i]; }); });

  var PH = { en: ['Trip photo (optional)', 'Add a photo', 'Remove photo', 'Could not read this photo. Please try another one.'],
    mn: ['Аяллын зураг (заавал биш)', 'Зураг нэмэх', 'Зураг хасах', 'Энэ зургийг уншиж чадсангүй. Өөр зураг сонгоно уу.'],
    ru: ['Фото из поездки (необязательно)', 'Добавить фото', 'Убрать фото', 'Не удалось прочитать фото. Попробуйте другое.'],
    ko: ['여행 사진 (선택)', '사진 추가', '사진 삭제', '이 사진을 읽을 수 없습니다. 다른 사진을 선택해 주세요.'],
    ja: ['旅の写真（任意）', '写真を追加', '写真を削除', 'この写真を読み込めませんでした。別の写真をお試しください。'],
    de: ['Reisefoto (optional)', 'Foto hinzufügen', 'Foto entfernen', 'Dieses Foto konnte nicht gelesen werden. Bitte wählen Sie ein anderes.'],
    es: ['Foto del viaje (opcional)', 'Añadir una foto', 'Quitar la foto', 'No se pudo leer esta foto. Prueba con otra.'] };
  Object.keys(PH).forEach(function (l) { ['rv.photo', 'rv.photoAdd', 'rv.photoRemove', 'rv.photoErr'].forEach(function (k, i) { D.t[l][k] = PH[l][i]; }); });
})();
