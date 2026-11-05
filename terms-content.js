/* Nomad Gate Tour — booking terms + privacy policy text in 7 languages.
   Placeholders are filled from window.NGT.terms / NGT.contact:
   {company} {address} {email} {phone} {dep} {bal} {full} {half} {late} */
window.NGT_TERMS = {
  en: {
    title: 'Booking terms', privacy: 'Privacy policy', back: 'Back to the site', updated: 'Last updated',
    draft: 'Draft: these terms are a template and will be confirmed by Nomad Gate Tour before launch.',
    terms: [
      ['Who we are', 'These terms apply to trips booked with {company}, {address}. Contact: {email}, {phone}.'],
      ['Booking', 'Your booking is confirmed when we receive your deposit and send you a written confirmation by email. Prices are per person, in US dollars (USD) or Mongolian tögrög (MNT), as shown when you book.'],
      ['Payment', 'A deposit of {dep}% of the trip price is due at booking. The balance is due {bal} days before the trip starts. Card payments are made on the bank’s secure payment page: we never see or store your card details. Bank transfer is also possible; transfer fees are paid by the sender.'],
      ['If you cancel', 'Please cancel by email. {full} days or more before the start: your deposit is refunded. {half}–{full} days before: half of the deposit is refunded. Fewer than {half} days: the deposit is not refunded. Fewer than {late} days: 100% of the trip price is charged. Refunds are made to the original payment method; bank fees are deducted.'],
      ['If we change or cancel', 'If we must cancel a trip (for example because of weather, safety or too few travellers), you choose between a full refund and another date. On the road, the guide may change the route or timing for safety or weather.'],
      ['Insurance and health', 'We strongly recommend travel insurance that covers medical treatment and evacuation. Please tell us about any health conditions, allergies or dietary needs when you book.'],
      ['Responsibility', 'We plan and run every trip with care and work with experienced drivers, guides and local families. We are not responsible for events beyond our control, such as natural disasters, flight delays or government restrictions.'],
      ['Questions and complaints', 'Write to {email}. We reply within two working days.']
    ],
    privacyItems: [
      ['What we collect', 'Your name, email, phone or WhatsApp number and booking details (trip, dates, number of travellers and any notes you add).'],
      ['Why', 'To handle your booking, contact you about it and send invoices. We do not sell your data and do not use it for advertising.'],
      ['Card payments', 'Cards are processed by the bank. We only receive the payment result and a masked card number.'],
      ['Where it is stored', 'In a secure cloud database (Supabase, Seoul region). Only our staff can access it.'],
      ['How long', 'As long as needed for your trip and for accounting rules, then it is deleted.'],
      ['Your rights', 'You can ask for a copy of your data, a correction or deletion by writing to {email}.'],
      ['Cookies', 'This site only remembers your language and currency in your browser. We use no tracking or advertising cookies.']
    ]
  },
  mn: {
    title: 'Захиалгын нөхцөл', privacy: 'Нууцлалын бодлого', back: 'Сайт руу буцах', updated: 'Сүүлд шинэчилсэн',
    draft: 'Ноорог: энэ нөхцөл загвар бөгөөд сайт нээгдэхээс өмнө Nomad Gate Tour баталгаажуулна.',
    terms: [
      ['Бидний тухай', 'Энэ нөхцөл {company}-аар дамжуулан захиалсан аялалд хамаарна. Хаяг: {address}. Холбоо барих: {email}, {phone}.'],
      ['Захиалга', 'Бид таны урьдчилгааг хүлээн авч, имэйлээр бичгээр баталгаажуулсны дараа захиалга баталгаажна. Үнэ нь нэг хүний, захиалах үед харуулсан ам.доллар (USD) эсвэл төгрөгөөр (MNT) байна.'],
      ['Төлбөр', 'Захиалах үед аяллын үнийн {dep}%-ийг урьдчилгаа болгон төлнө. Үлдэгдлийг аялал эхлэхээс {bal} хоногийн өмнө төлнө. Картын төлбөрийг банкны аюулгүй хуудсан дээр хийх тул бид таны картын мэдээллийг харахгүй, хадгалахгүй. Банкны шилжүүлгээр төлж болно; шилжүүлгийн шимтгэлийг илгээгч төлнө.'],
      ['Та цуцлах бол', 'Цуцлахдаа имэйлээр мэдэгдэнэ үү. Аялал эхлэхээс {full} ба түүнээс дээш хоногийн өмнө: урьдчилгааг буцаана. {half}–{full} хоногийн өмнө: урьдчилгааны талыг буцаана. {half}-аас цөөн хоног: урьдчилгааг буцаахгүй. {late}-аас цөөн хоног: аяллын үнийг 100% төлнө. Буцаалтыг төлсөн аргаар нь хийж, банкны шимтгэлийг хасна.'],
      ['Бид өөрчлөх, цуцлах бол', 'Цаг агаар, аюулгүй байдал эсвэл хүн цөөн гэх мэт шалтгаанаар бид аяллыг цуцлах бол та бүтэн буцаалт эсвэл өөр огноог сонгоно. Замд аюулгүй байдал, цаг агаараас шалтгаалан хөтөч маршрут, цагийг өөрчилж болно.'],
      ['Даатгал ба эрүүл мэнд', 'Эмчилгээ болон яаралтай тээвэрлэлтийг хамардаг аяллын даатгал авахыг зөвлөж байна. Эрүүл мэндийн байдал, харшил, хоолны онцгой хэрэгцээгээ захиалахдаа бидэнд мэдэгдэнэ үү.'],
      ['Хариуцлага', 'Бид аялал бүрийг анхааралтай төлөвлөж, туршлагатай жолооч, хөтөч, нутгийн айлуудтай хамтран зохион байгуулдаг. Байгалийн гамшиг, нислэгийн саатал, төрийн хязгаарлалт зэрэг бидний хяналтаас гадуурх үйл явдлыг хариуцахгүй.'],
      ['Асуулт, гомдол', '{email} хаягаар бичнэ үү. Бид ажлын хоёр өдрийн дотор хариулна.']
    ],
    privacyItems: [
      ['Ямар мэдээлэл цуглуулдаг', 'Таны нэр, имэйл, утас эсвэл WhatsApp дугаар, захиалгын мэдээлэл (аялал, огноо, хүний тоо, таны бичсэн тэмдэглэл).'],
      ['Юунд ашигладаг', 'Захиалгыг тань шийдвэрлэх, тантай холбогдох, нэхэмжлэх илгээхэд. Бид таны мэдээллийг зарахгүй, сурталчилгаанд ашиглахгүй.'],
      ['Картын төлбөр', 'Картыг банк боловсруулна. Бид зөвхөн төлбөрийн үр дүн болон далдалсан картын дугаарыг хүлээн авна.'],
      ['Хаана хадгалдаг', 'Аюулгүй үүлэн өгөгдлийн санд (Supabase, Сөүлийн бүс). Зөвхөн манай ажилтнууд хандана.'],
      ['Хэр удаан', 'Аялал болон нягтлан бодох бүртгэлийн журамд шаардлагатай хугацаанд хадгалаад устгана.'],
      ['Таны эрх', '{email} хаягаар бичээд мэдээллийнхээ хуулбар авах, засуулах, устгуулах хүсэлт гаргаж болно.'],
      ['Күүки', 'Энэ сайт зөвхөн таны сонгосон хэл, валютыг browser-тань хадгална. Хянах болон сурталчилгааны күүки ашигладаггүй.']
    ]
  },
  ru: {
    title: 'Условия бронирования', privacy: 'Политика конфиденциальности', back: 'Вернуться на сайт', updated: 'Обновлено',
    draft: 'Черновик: эти условия — шаблон, Nomad Gate Tour подтвердит их до запуска сайта.',
    terms: [
      ['Кто мы', 'Эти условия действуют для туров, забронированных у {company}, {address}. Контакты: {email}, {phone}.'],
      ['Бронирование', 'Бронирование подтверждается, когда мы получаем предоплату и присылаем письменное подтверждение по эл. почте. Цены указаны за человека в долларах США (USD) или монгольских тугриках (MNT), как показано при бронировании.'],
      ['Оплата', 'При бронировании вносится предоплата {dep}% стоимости тура. Остаток оплачивается за {bal} дней до начала тура. Оплата картой проходит на защищённой странице банка: мы не видим и не храним данные вашей карты. Возможен банковский перевод; комиссию оплачивает отправитель.'],
      ['Если вы отменяете', 'Сообщите об отмене по эл. почте. За {full} дней и более до начала: предоплата возвращается. За {half}–{full} дней: возвращается половина предоплаты. Менее чем за {half} дней: предоплата не возвращается. Менее чем за {late} дней: удерживается 100% стоимости тура. Возврат — тем же способом оплаты, за вычетом банковских комиссий.'],
      ['Если мы меняем или отменяем', 'Если мы вынуждены отменить тур (из-за погоды, безопасности или слишком малой группы), вы выбираете полный возврат или другую дату. В пути гид может изменить маршрут или время ради безопасности или из-за погоды.'],
      ['Страховка и здоровье', 'Настоятельно рекомендуем страховку, покрывающую лечение и медицинскую эвакуацию. Сообщите нам о состоянии здоровья, аллергиях или особенностях питания при бронировании.'],
      ['Ответственность', 'Мы тщательно планируем и проводим каждый тур, работаем с опытными водителями, гидами и местными семьями. Мы не отвечаем за события вне нашего контроля: стихийные бедствия, задержки рейсов или ограничения властей.'],
      ['Вопросы и жалобы', 'Пишите на {email}. Мы отвечаем в течение двух рабочих дней.']
    ],
    privacyItems: [
      ['Что мы собираем', 'Ваше имя, эл. почту, телефон или WhatsApp и данные бронирования (тур, даты, число путешественников и ваши заметки).'],
      ['Зачем', 'Чтобы обработать бронирование, связаться с вами и выставить счета. Мы не продаём ваши данные и не используем их для рекламы.'],
      ['Оплата картой', 'Карты обрабатывает банк. Мы получаем только результат платежа и маскированный номер карты.'],
      ['Где хранятся', 'В защищённой облачной базе данных (Supabase, регион Сеул). Доступ есть только у наших сотрудников.'],
      ['Как долго', 'Столько, сколько нужно для тура и бухгалтерского учёта, затем данные удаляются.'],
      ['Ваши права', 'Вы можете запросить копию, исправление или удаление данных, написав на {email}.'],
      ['Файлы cookie', 'Сайт запоминает только выбранный язык и валюту в вашем браузере. Мы не используем трекинговые и рекламные cookie.']
    ]
  },
  ko: {
    title: '예약 약관', privacy: '개인정보 처리방침', back: '사이트로 돌아가기', updated: '최종 수정일',
    draft: '초안: 이 약관은 견본이며 사이트 오픈 전에 Nomad Gate Tour가 확정합니다.',
    terms: [
      ['회사 소개', '이 약관은 {company}({address})를 통해 예약한 여행에 적용됩니다. 연락처: {email}, {phone}.'],
      ['예약', '예약금을 받고 이메일로 서면 확인을 보내 드리면 예약이 확정됩니다. 요금은 1인 기준이며, 예약 시 표시된 미국 달러(USD) 또는 몽골 투그릭(MNT)으로 결제합니다.'],
      ['결제', '예약 시 여행 요금의 {dep}%를 예약금으로 결제합니다. 잔금은 여행 시작 {bal}일 전까지 결제합니다. 카드 결제는 은행의 보안 결제 페이지에서 진행되며, 저희는 카드 정보를 보거나 저장하지 않습니다. 계좌 이체도 가능하며 송금 수수료는 송금인이 부담합니다.'],
      ['고객 취소', '취소는 이메일로 알려 주세요. 출발 {full}일 이상 전: 예약금 환불. {half}–{full}일 전: 예약금의 절반 환불. {half}일 미만: 예약금 환불 불가. {late}일 미만: 여행 요금 100% 부과. 환불은 결제한 수단으로 하며 은행 수수료를 공제합니다.'],
      ['당사의 변경·취소', '날씨, 안전, 인원 부족 등으로 여행을 취소해야 할 경우 전액 환불 또는 다른 날짜 중에서 선택하실 수 있습니다. 여행 중에는 안전이나 날씨에 따라 가이드가 경로나 일정을 변경할 수 있습니다.'],
      ['보험 및 건강', '치료와 응급 후송을 보장하는 여행자 보험 가입을 강력히 권합니다. 건강 상태, 알레르기, 식이 요구 사항은 예약 시 알려 주세요.'],
      ['책임', '모든 여행을 세심하게 계획·운영하며 경험 많은 기사, 가이드, 현지 가족과 함께합니다. 자연재해, 항공편 지연, 정부 제한 등 당사가 통제할 수 없는 사건에 대해서는 책임지지 않습니다.'],
      ['문의 및 불만', '{email}로 연락해 주세요. 영업일 기준 2일 이내에 답변 드립니다.']
    ],
    privacyItems: [
      ['수집 항목', '이름, 이메일, 전화번호 또는 WhatsApp, 예약 정보(여행, 날짜, 인원, 남기신 메모).'],
      ['이용 목적', '예약 처리, 예약 관련 연락, 청구서 발송. 개인정보를 판매하거나 광고에 사용하지 않습니다.'],
      ['카드 결제', '카드는 은행이 처리합니다. 저희는 결제 결과와 일부 가려진 카드 번호만 받습니다.'],
      ['보관 장소', '보안 클라우드 데이터베이스(Supabase, 서울 리전). 당사 직원만 접근할 수 있습니다.'],
      ['보관 기간', '여행 및 회계 규정상 필요한 기간 동안 보관한 뒤 삭제합니다.'],
      ['이용자의 권리', '{email}로 요청하시면 개인정보 사본 제공, 정정, 삭제가 가능합니다.'],
      ['쿠키', '이 사이트는 브라우저에 선택한 언어와 통화만 저장합니다. 추적·광고 쿠키는 사용하지 않습니다.']
    ]
  },
  ja: {
    title: '予約規約', privacy: 'プライバシーポリシー', back: 'サイトに戻る', updated: '最終更新日',
    draft: '草案：この規約はひな形であり、公開前に Nomad Gate Tour が確定します。',
    terms: [
      ['会社について', 'この規約は {company}（{address}）で予約された旅行に適用されます。連絡先：{email}、{phone}。'],
      ['予約', '予約金を受領し、メールで書面の確認をお送りした時点で予約が確定します。料金は1名あたりで、予約時に表示された米ドル（USD）またはモンゴル・トゥグルグ（MNT）です。'],
      ['お支払い', '予約時に旅行代金の{dep}%を予約金としてお支払いいただきます。残金は旅行開始の{bal}日前までにお支払いください。カード決済は銀行の安全な決済ページで行われ、当社がカード情報を見たり保存したりすることはありません。銀行振込も可能で、振込手数料は送金者負担です。'],
      ['お客様による取消', '取消はメールでご連絡ください。出発{full}日以上前：予約金を返金。{half}〜{full}日前：予約金の半額を返金。{half}日未満：予約金は返金不可。{late}日未満：旅行代金の100%を申し受けます。返金は元の支払方法で行い、銀行手数料を差し引きます。'],
      ['当社による変更・取消', '天候、安全、最少催行人数などの理由で当社が旅行を中止する場合、全額返金または別日程からお選びいただけます。旅行中は安全や天候のためにガイドがルートや時間を変更することがあります。'],
      ['保険と健康', '治療と救援搬送をカバーする旅行保険への加入を強くおすすめします。健康状態、アレルギー、食事制限は予約時にお知らせください。'],
      ['責任', 'すべての旅行を丁寧に計画・運営し、経験豊富なドライバー、ガイド、地元の家族と協力しています。自然災害、航空便の遅延、政府による制限など当社の管理を超える事象については責任を負いません。'],
      ['お問い合わせ・苦情', '{email} までご連絡ください。2営業日以内にお返事します。']
    ],
    privacyItems: [
      ['収集する情報', 'お名前、メールアドレス、電話番号またはWhatsApp、予約内容（ツアー、日程、人数、ご記入のメモ）。'],
      ['利用目的', '予約の手配、予約に関するご連絡、請求書の送付のため。個人情報を販売したり広告に使用したりすることはありません。'],
      ['カード決済', 'カードは銀行が処理します。当社が受け取るのは決済結果と一部を伏せたカード番号のみです。'],
      ['保存場所', '安全なクラウドデータベース（Supabase、ソウルリージョン）。アクセスできるのは当社スタッフのみです。'],
      ['保存期間', '旅行と会計上の規則に必要な期間保存し、その後削除します。'],
      ['お客様の権利', '{email} にご連絡いただければ、個人情報の写しの提供、訂正、削除に対応します。'],
      ['Cookie', '当サイトはブラウザに言語と通貨の選択のみを保存します。追跡・広告用のCookieは使用していません。']
    ]
  },
  de: {
    title: 'Buchungsbedingungen', privacy: 'Datenschutzerklärung', back: 'Zurück zur Website', updated: 'Zuletzt aktualisiert',
    draft: 'Entwurf: Diese Bedingungen sind eine Vorlage und werden vor dem Start von Nomad Gate Tour bestätigt.',
    terms: [
      ['Wer wir sind', 'Diese Bedingungen gelten für Reisen, die bei {company}, {address}, gebucht werden. Kontakt: {email}, {phone}.'],
      ['Buchung', 'Ihre Buchung ist bestätigt, sobald wir Ihre Anzahlung erhalten und Ihnen eine schriftliche Bestätigung per E-Mail senden. Die Preise gelten pro Person in US-Dollar (USD) oder mongolischen Tögrög (MNT), wie bei der Buchung angezeigt.'],
      ['Zahlung', 'Bei der Buchung ist eine Anzahlung von {dep} % des Reisepreises fällig. Der Restbetrag ist {bal} Tage vor Reisebeginn fällig. Kartenzahlungen erfolgen auf der sicheren Zahlungsseite der Bank: Wir sehen und speichern Ihre Kartendaten nie. Banküberweisung ist ebenfalls möglich; die Überweisungsgebühren trägt der Absender.'],
      ['Stornierung durch Sie', 'Bitte stornieren Sie per E-Mail. {full} Tage oder mehr vor Beginn: Die Anzahlung wird erstattet. {half}–{full} Tage vorher: Die Hälfte der Anzahlung wird erstattet. Weniger als {half} Tage: Die Anzahlung wird nicht erstattet. Weniger als {late} Tage: 100 % des Reisepreises werden berechnet. Erstattungen erfolgen auf das ursprüngliche Zahlungsmittel abzüglich Bankgebühren.'],
      ['Änderung oder Absage durch uns', 'Müssen wir eine Reise absagen (z. B. wegen Wetter, Sicherheit oder zu wenigen Teilnehmern), wählen Sie zwischen voller Erstattung und einem anderen Termin. Unterwegs kann der Guide Route oder Zeitplan aus Sicherheits- oder Wettergründen ändern.'],
      ['Versicherung und Gesundheit', 'Wir empfehlen dringend eine Reiseversicherung, die medizinische Behandlung und Rücktransport abdeckt. Bitte teilen Sie uns bei der Buchung Gesundheitszustand, Allergien oder Ernährungswünsche mit.'],
      ['Haftung', 'Wir planen und führen jede Reise mit Sorgfalt durch und arbeiten mit erfahrenen Fahrern, Guides und einheimischen Familien. Für Ereignisse außerhalb unserer Kontrolle, etwa Naturkatastrophen, Flugverspätungen oder behördliche Einschränkungen, haften wir nicht.'],
      ['Fragen und Beschwerden', 'Schreiben Sie an {email}. Wir antworten innerhalb von zwei Werktagen.']
    ],
    privacyItems: [
      ['Welche Daten wir erheben', 'Ihren Namen, Ihre E-Mail-Adresse, Telefon- oder WhatsApp-Nummer und Buchungsdaten (Reise, Termine, Anzahl der Reisenden und Ihre Anmerkungen).'],
      ['Wozu', 'Um Ihre Buchung zu bearbeiten, Sie dazu zu kontaktieren und Rechnungen zu senden. Wir verkaufen Ihre Daten nicht und nutzen sie nicht für Werbung.'],
      ['Kartenzahlungen', 'Karten werden von der Bank verarbeitet. Wir erhalten nur das Zahlungsergebnis und eine maskierte Kartennummer.'],
      ['Speicherort', 'In einer gesicherten Cloud-Datenbank (Supabase, Region Seoul). Zugriff haben nur unsere Mitarbeitenden.'],
      ['Speicherdauer', 'So lange, wie es für Ihre Reise und für Buchhaltungsvorschriften nötig ist; danach werden die Daten gelöscht.'],
      ['Ihre Rechte', 'Sie können Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen, indem Sie an {email} schreiben.'],
      ['Cookies', 'Diese Website speichert in Ihrem Browser nur Ihre Sprache und Währung. Wir verwenden keine Tracking- oder Werbe-Cookies.']
    ]
  },
  es: {
    title: 'Condiciones de reserva', privacy: 'Política de privacidad', back: 'Volver al sitio', updated: 'Última actualización',
    draft: 'Borrador: estas condiciones son una plantilla y Nomad Gate Tour las confirmará antes del lanzamiento.',
    terms: [
      ['Quiénes somos', 'Estas condiciones se aplican a los viajes reservados con {company}, {address}. Contacto: {email}, {phone}.'],
      ['Reserva', 'Su reserva queda confirmada cuando recibimos su depósito y le enviamos una confirmación por escrito por correo. Los precios son por persona, en dólares estadounidenses (USD) o tögrög mongoles (MNT), según se muestre al reservar.'],
      ['Pago', 'Al reservar se paga un depósito del {dep} % del precio del viaje. El saldo se paga {bal} días antes del inicio. Los pagos con tarjeta se hacen en la página de pago segura del banco: nunca vemos ni guardamos los datos de su tarjeta. También es posible la transferencia bancaria; las comisiones las paga quien envía.'],
      ['Si usted cancela', 'Cancele por correo, por favor. {full} días o más antes del inicio: se reembolsa el depósito. Entre {half} y {full} días antes: se reembolsa la mitad del depósito. Menos de {half} días: el depósito no se reembolsa. Menos de {late} días: se cobra el 100 % del precio del viaje. Los reembolsos se hacen al medio de pago original, descontando las comisiones bancarias.'],
      ['Si cambiamos o cancelamos', 'Si debemos cancelar un viaje (por ejemplo, por clima, seguridad o falta de viajeros), usted elige entre el reembolso total y otra fecha. Durante el viaje, el guía puede cambiar la ruta o los horarios por seguridad o clima.'],
      ['Seguro y salud', 'Recomendamos encarecidamente un seguro de viaje que cubra tratamiento médico y evacuación. Indíquenos al reservar cualquier condición de salud, alergia o necesidad alimentaria.'],
      ['Responsabilidad', 'Planificamos y realizamos cada viaje con cuidado y trabajamos con conductores, guías y familias locales con experiencia. No somos responsables de hechos fuera de nuestro control, como desastres naturales, retrasos de vuelos o restricciones gubernamentales.'],
      ['Preguntas y reclamaciones', 'Escriba a {email}. Respondemos en un plazo de dos días hábiles.']
    ],
    privacyItems: [
      ['Qué datos recogemos', 'Su nombre, correo, teléfono o WhatsApp y los datos de la reserva (viaje, fechas, número de viajeros y las notas que añada).'],
      ['Para qué', 'Para gestionar su reserva, contactarle sobre ella y enviar facturas. No vendemos sus datos ni los usamos para publicidad.'],
      ['Pagos con tarjeta', 'Las tarjetas las procesa el banco. Solo recibimos el resultado del pago y un número de tarjeta enmascarado.'],
      ['Dónde se guardan', 'En una base de datos segura en la nube (Supabase, región de Seúl). Solo nuestro personal tiene acceso.'],
      ['Cuánto tiempo', 'El necesario para su viaje y las normas contables; después se eliminan.'],
      ['Sus derechos', 'Puede pedir una copia, la corrección o la eliminación de sus datos escribiendo a {email}.'],
      ['Cookies', 'Este sitio solo recuerda su idioma y moneda en su navegador. No usamos cookies de seguimiento ni de publicidad.']
    ]
  }
};
