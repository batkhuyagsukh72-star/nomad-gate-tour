/* Nomad Gate Tour — content (EN / MN). Tours are SAMPLE routes built from the places in the company's own videos; replace with their real programme. */
window.NGT = {
  contact: { phone: '+976 9917 1048', phoneRaw: '+97699171048', email: 'nomadgatetour@gmail.com',
    instagram: 'https://www.instagram.com/nomad_gate_tour', facebook: 'https://www.facebook.com/profile.php?id=61594082454178' },

  tours: [
    { id: 'terelj', img: 't_terelj', days: 1, route: ['ub', 'terelj', 'ub'],
      name: { en: 'Terelj Day Escape', mn: 'Тэрэлжийн нэг өдөр' },
      season: { en: 'All year', mn: 'Жилийн турш' },
      style: { en: 'Nature · Easy', mn: 'Байгаль · Хөнгөн' },
      lead: { en: 'Granite towers, larch forest and a nomad family’s welcome, an easy drive from Ulaanbaatar.',
              mn: 'Боржин хад, шинэсэн ой, нүүдэлчин айлын дулаан угтлага — Улаанбаатараас ойрхон.' },
      plan: [
        { en: ['Into Gorkhi-Terelj', 'Morning drive into Gorkhi-Terelj National Park. Walk up to Turtle Rock and among the granite outcrops and larch slopes.'],
          mn: ['Горхи-Тэрэлж рүү', 'Өглөө Горхи-Тэрэлжийн байгалийн цогцолборт газар руу хөдөлнө. Мэлхий хад болон боржин хадан цохио, шинэсэн энгэрээр алхана.'] },
        { en: ['Lunch with a herder family', 'Milk tea, dairy treats and a home-cooked lunch in a family ger, then an easy horse ride along the Tuul river valley.'],
          mn: ['Малчин айлд үдийн хоол', 'Айлын гэрт сүүтэй цай, цагаан идээ, гэрийн хоол. Дараа нь Туул голын хөндийгөөр морь унана.'] },
        { en: ['Back by evening', 'Return to Ulaanbaatar in the early evening. On request, stop at the Chinggis Khaan Equestrian Statue on the way.'],
          mn: ['Орой буцна', 'Оройн эхээр Улаанбаатарт буцаж ирнэ. Хүсвэл замдаа Чингис хааны морьт хөшөөнд саатна.'] }
      ] },
    { id: 'central', img: 't_semigobi', img2: 't_erdenezuu', days: 5, route: ['ub', 'khustai', 'elsen', 'kharkhorin', 'orkhon', 'ub'],
      name: { en: 'Semi-Gobi & the Old Capital', mn: 'Сэми Говь ба эртний нийслэл' },
      season: { en: 'May – Oct', mn: '5–10 сар' },
      style: { en: 'Classic · Moderate', mn: 'Сонгодог · Дунд' },
      lead: { en: 'Wild horses, singing sand, the walls of Erdene Zuu and the waterfall of the Orkhon — central Mongolia in five days.',
              mn: 'Тахь, элсэн манхан, Эрдэнэ Зуугийн хэрэм, Орхоны хүрхрээ — Төв Монголыг таван өдөрт.' },
      plan: [
        { en: ['Khustai and the takhi', 'Drive west to Khustain Nuruu National Park and watch the Przewalski’s horses come down to drink at dusk.'],
          mn: ['Хустай ба тахь', 'Баруун тийш Хустайн нуруу руу явж, орой ус уухаар бууж ирэх тахийн сүргийг харна.'] },
        { en: ['Elsen Tasarkhai dunes', 'Continue to the Semi-Gobi: a strip of golden dunes in the middle of the green steppe. Camel ride and sunset on the sand.'],
          mn: ['Элсэн Тасархай', 'Сэми Говь руу үргэлжлүүлнэ: ногоон талын дундах алтан шаргал элсэн манхан. Тэмээ унаж, элсэн дээр нар жаргахыг харна.'] },
        { en: ['Kharkhorin & Erdene Zuu', 'The old imperial capital and Erdene Zuu Monastery, founded in 1585, with its long wall of white stupas.'],
          mn: ['Хархорин ба Эрдэнэ Зуу', 'Их Монгол улсын эртний нийслэл, 1585 онд байгуулагдсан Эрдэнэ Зуу хийд, цагаан суврагатай урт хэрэм.'] },
        { en: ['Orkhon Valley', 'Into the Orkhon Valley to the Ulaan Tsutgalan waterfall. Evening with a herding family in the valley.'],
          mn: ['Орхоны хөндий', 'Орхоны хөндийгөөр Улаан цутгалан хүрхрээ рүү. Оройг хөндийн малчин айлд өнгөрүүлнэ.'] },
        { en: ['Return to Ulaanbaatar', 'A long, scenic drive back across the steppe to the capital.'],
          mn: ['Улаанбаатар руу', 'Тал нутгийг гатлан нийслэл рүү буцна.'] }
      ] },
    { id: 'nomad', img: 't_nomad', days: 3, route: ['ub', 'family', 'ub'],
      name: { en: 'Three Days with a Herder Family', mn: 'Малчин айлд гурван хоног' },
      season: { en: 'Jun – Sep', mn: '6–9 сар' },
      style: { en: 'Culture · Easy', mn: 'Соёл · Хөнгөн' },
      lead: { en: 'Live the day of a nomad family: herding, milking, riding and evenings around the ger stove.',
              mn: 'Нүүдэлчин айлын өдөр тутмыг хамт өнгөрүүлнэ: мал хариулж, саалинд оролцож, морь унаж, гэрийн зуухны дэргэд орой суух.' },
      plan: [
        { en: ['Welcome to the ger', 'Drive out to the family’s summer camp. Milk tea, settling into your own ger, and helping bring the sheep and goats home.'],
          mn: ['Гэрт тавтай морил', 'Айлын зуслан руу хөдөлнө. Сүүтэй цай, өөрийн гэртээ тухлах, хонь ямаагаа хотондоо оруулахад туслах.'] },
        { en: ['A herder’s day', 'Morning milking, making dairy treats, a ride with the family’s horses and a long evening under the stars.'],
          mn: ['Малчны нэг өдөр', 'Өглөөний сааль, цагаан идээ хийх, айлын морьдоор аялах, оддын доорх урт орой.'] },
        { en: ['Farewell tea', 'A last bowl of tea with the family before the drive back to Ulaanbaatar.'],
          mn: ['Үдэлтийн цай', 'Айлтайгаа сүүлчийн аяга цай уугаад Улаанбаатар руу буцна.'] }
      ] },
    { id: 'autumn', img: 't_autumn', days: 4, route: ['ub', 'terelj', 'chinggis', 'ub'],
      name: { en: 'Golden Autumn in Terelj', mn: 'Тэрэлжийн алтан намар' },
      season: { en: 'Mid-Sep – early Oct', mn: '9 сарын дунд – 10 сарын эх' },
      style: { en: 'Nature · Moderate', mn: 'Байгаль · Дунд' },
      lead: { en: 'Larch and birch turn gold for a few short weeks. Ride and hike the Tuul valley at its most beautiful.',
              mn: 'Шинэс, хус хэдхэн долоо хоног алтлаг өнгөтэй болдог. Туулын хөндийг хамгийн үзэсгэлэнтэй үед нь морь унаж, алхаж аялна.' },
      plan: [
        { en: ['Into the gold', 'Drive into Terelj as the valleys turn yellow. Afternoon walk to Turtle Rock.'],
          mn: ['Алтан хөндий рүү', 'Хөндий шарлах үед Тэрэлж рүү явна. Үдээс хойш Мэлхий хад руу алхана.'] },
        { en: ['Along the Tuul', 'A full day on horseback along the Tuul river through autumn forest, night in a riverside ger camp.'],
          mn: ['Туул голын дагуу', 'Намрын ойгоор Туул голын дагуу бүтэн өдөр морь унаж, голын эргийн гэр баазад хонох.'] },
        { en: ['Aryabal and the high trails', 'Hike up to the Aryabal meditation temple for the view over the valley.'],
          mn: ['Арьяабал ба өндөр зам', 'Хөндийг харсан Арьяабал бясалгалын сүм рүү алхана.'] },
        { en: ['Return via Tsonjin Boldog', 'Back to Ulaanbaatar with a stop at the Chinggis Khaan Equestrian Statue.'],
          mn: ['Цонжин Болдогоор буцах', 'Чингис хааны морьт хөшөөнд саатаад Улаанбаатар руу буцна.'] }
      ] },
    { id: 'stars', img: 'x_stars', days: 2, route: ['ub', 'elsen', 'ub'],
      name: { en: 'Steppe Sunsets & Stars', mn: 'Талын нар жаргалт ба од' },
      season: { en: 'May – Sep', mn: '5–9 сар' },
      style: { en: 'Photography · Easy', mn: 'Гэрэл зураг · Хөнгөн' },
      lead: { en: 'Far from city lights, the sky over the Semi-Gobi fills with stars — the same stars that crown our logo.',
              mn: 'Хотын гэрлээс хол Сэми Говийн тэнгэр одоор дүүрнэ — манай логоны дээрх од шиг.' },
      plan: [
        { en: ['Sunset on the dunes', 'Drive to Elsen Tasarkhai, walk the dune ridges at golden hour, then a night of stargazing beside your ger.'],
          mn: ['Манхан дээрх нар жаргалт', 'Элсэн Тасархай руу явж, алтан цагт манхны оройгоор алхаад, гэрийнхээ дэргэд од ажиглана.'] },
        { en: ['Sunrise and camels', 'Sunrise over the sand, a short camel ride and the drive back to Ulaanbaatar.'],
          mn: ['Нар мандалт ба тэмээ', 'Элсэн дээрх нар мандалт, тэмээ унаад Улаанбаатар руу буцна.'] }
      ] }
  ],

  places: {
    ub: { en: 'Ulaanbaatar', mn: 'Улаанбаатар' },
    terelj: { en: 'Gorkhi-Terelj', mn: 'Горхи-Тэрэлж' },
    chinggis: { en: 'Chinggis Statue', mn: 'Чингисийн хөшөө' },
    khustai: { en: 'Khustai', mn: 'Хустай' },
    elsen: { en: 'Elsen Tasarkhai', mn: 'Элсэн Тасархай' },
    kharkhorin: { en: 'Kharkhorin', mn: 'Хархорин' },
    orkhon: { en: 'Orkhon Waterfall', mn: 'Орхоны хүрхрээ' },
    family: { en: 'Herder family', mn: 'Малчин айл' }
  },

  experiences: [
    { img: 'x_ger', t: { en: 'Sleep in a ger', mn: 'Гэрт хонох' },
      d: { en: 'A wooden lattice, roof poles meeting at the toono crown and thick felt walls: the ger has sheltered nomadic families for centuries and stays warm through Mongolia’s extreme climate.',
           mn: 'Модон хана, тооно руу нийлэх унь, зузаан эсгий бүрээс: гэр олон зууны турш нүүдэлчдийг хоргодуулж, эрс тэс уур амьсгалд ч дулаан байдаг.' } },
    { img: 'x_tea', t: { en: 'Milk tea and a welcome', mn: 'Сүүтэй цай, дулаан угтлага' },
      d: { en: 'Guests are welcomed with milk tea, dairy treats and genuine Mongolian hospitality. Every part of the ger has its custom — we’ll show you where to sit.',
           mn: 'Зочныг сүүтэй цай, цагаан идээгээр дайлна. Гэрийн бүх хэсэг өөрийн ёс заншилтай — хаана суухыг танд зааж өгнө.' } },
    { img: 'x_ride', t: { en: 'Ride with herders', mn: 'Малчидтай хамт морь унах' },
      d: { en: 'Cross rivers and open valleys on sure-footed Mongolian horses, at the pace that suits you.',
           mn: 'Монгол морьдоор гол гатлан, уудам хөндийгөөр өөрт тохирох хурдаар аялна.' } },
    { img: 't_semigobi', t: { en: 'Dunes in the steppe', mn: 'Тал дундах элсэн манхан' },
      d: { en: 'In the Semi-Gobi, golden sand rises out of green grassland. Walk the ridges barefoot or cross them by camel.',
           mn: 'Сэми Говьд ногоон тал дундаас алтан элс сүндэрлэнэ. Хөл нүцгэн алхах эсвэл тэмээ унаж гатлаарай.' } },
    { img: 'x_stars', t: { en: 'Night skies', mn: 'Оддын тэнгэр' },
      d: { en: 'With no city light for hundreds of kilometres, the Milky Way rises over the ger. Bring a warm layer and stay up late.',
           mn: 'Олон зуун километрт хотын гэрэлгүй тул гэрийн дээгүүр Тэнгэрийн заадас тодорно. Дулаан хувцас аваад оройтож суугаарай.' } }
  ],

  reels: ['reel-herds', 'reel-dunes', 'reel-sunset', 'reel-terelj', 'reel-autumn', 'reel-steppe'],

  faq: [
    { q: { en: 'When is the best time to travel?', mn: 'Хэзээ аялахад хамгийн тохиромжтой вэ?' },
      a: { en: 'June to September is the main season, with warm days and green steppe. Mid-September to early October brings golden larch forests. Winter trips are possible for travellers who like the cold.',
           mn: '6–9 сар бол гол улирал: дулаан өдөр, ногоон тал. 9 сарын дунд – 10 сарын эхээр шинэсэн ой алтлаг өнгөтэй болно. Хүйтэнд дуртай аялагчдад өвлийн аялал ч боломжтой.' } },
    { q: { en: 'What is it like to stay in a ger?', mn: 'Гэрт хонох ямар байдаг вэ?' },
      a: { en: 'Ger camps have proper beds and a wood stove, usually with shared bathrooms in a separate building. With a herder family it is simpler and closer to real nomadic life.',
           mn: 'Гэр баазад ор, түлээний зуух бий, ихэвчлэн тусдаа барилгад нийтийн ариун цэврийн өрөөтэй. Малчин айлд илүү энгийн бөгөөд жинхэнэ нүүдлийн амьдралд ойр.' } },
    { q: { en: 'Do I need a visa?', mn: 'Виз хэрэгтэй юу?' },
      a: { en: 'It depends on your passport. When you send a request we check the current rules for your nationality and tell you what to prepare.',
           mn: 'Таны паспортоос хамаарна. Хүсэлт илгээхэд бид таны иргэншлийн одоогийн журмыг шалгаж, юу бэлдэхийг хэлж өгнө.' } },
    { q: { en: 'Can you change a route or build a private trip?', mn: 'Маршрут өөрчлөх эсвэл хувийн аялал зохиож болох уу?' },
      a: { en: 'Yes. Every journey here is a starting point — we can change the number of days, the places and the comfort level for your group.',
           mn: 'Тийм. Энд байгаа аялал бүр эхлэл төдий — хоног, газар, тав тухын түвшинг танай бүлэгт тааруулж өөрчилнө.' } },
    { q: { en: 'How do I book?', mn: 'Яаж захиалах вэ?' },
      a: { en: 'Send a request with your dates and group size. We reply with a day-by-day plan and a price for your group.',
           mn: 'Огноо, хүний тоогоо бичээд хүсэлт илгээнэ үү. Бид өдөр бүрийн төлөвлөгөө, танай бүлгийн үнийг илгээнэ.' } }
  ],

  months: { en: ['Flexible', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            mn: ['Уян хатан', '1-р сар', '2-р сар', '3-р сар', '4-р сар', '5-р сар', '6-р сар', '7-р сар', '8-р сар', '9-р сар', '10-р сар', '11-р сар', '12-р сар'] },

  t: {
    en: {
      'nav.journeys': 'Journeys', 'nav.map': 'Map', 'nav.exp': 'Experiences', 'nav.road': 'Stories', 'nav.faq': 'FAQ', 'nav.cta': 'Plan a trip', 'menu': 'Menu',
      'hero.kicker': 'Private journeys in Mongolia', 'hero.h1': 'Create your|unforgettable memories',
      'hero.sub': 'Ger stays, herder families, dunes and wild horses — planned by a Mongolian team who travel these roads.',
      'hero.cta1': 'Explore journeys', 'hero.cta2': 'Plan a private trip', 'scroll': 'Scroll',
      'statement': 'Behind every ger door in Mongolia there is a welcome waiting: milk tea on the stove, a seat by the fire and a family that has moved with its herds for generations. Nomad Gate Tour opens that door for you.',
      'j.title': 'Signature journeys', 'j.lead': 'Five routes through the places we film and love. Every one can be changed to suit you.',
      'j.note': 'Sample routes for this demo — the final programme comes from Nomad Gate Tour.',
      'j.day': 'day', 'j.days': 'days', 'j.view': 'View the journey', 'j.drag': 'Scroll to travel',
      'd.overview': 'The journey', 'd.included': 'Included', 'd.inc': ['Private vehicle and driver', 'English-speaking guide', 'Ger camp or family stay', 'Meals on the road', 'Park entrance fees'],
      'd.notinc': 'Not included', 'd.exc': ['International flights', 'Travel insurance', 'Personal expenses'],
      'd.season': 'Season', 'd.style': 'Style', 'd.duration': 'Duration', 'd.route': 'Route',
      'b.title': 'Request this journey', 'b.date': 'Start date', 'b.who': 'Travellers', 'b.stay': 'Stay', 'b.stay1': 'Shared ger', 'b.stay2': 'Private ger',
      'b.send': 'Continue to request', 'b.note': 'No payment now. We reply with a plan and a price.', 'close': 'Close',
      'm.title': 'Where the gate leads', 'm.lead': 'Our routes fan out from Ulaanbaatar into the heart of Mongolia. Choose a journey to trace it.',
      'x.title': 'Experiences', 'x.lead': 'What a day on the road with us feels like.',
      'r.title': 'From the road', 'r.lead': 'Real clips filmed on our journeys and shared on Instagram.', 'r.follow': 'Follow on Instagram',
      'f.title': 'Before you go',
      'c.title': 'Open the gate to your journey', 'c.lead': 'Tell us when you want to travel and who is coming. We’ll shape the route around you.',
      'c.call': 'Call or WhatsApp', 'c.mail': 'Email', 'c.copy': 'Copy', 'c.copied': 'Copied',
      'p.name': 'Your name', 'p.contact': 'Email or WhatsApp', 'p.journey': 'Journey', 'p.any': 'Not sure yet', 'p.month': 'Month', 'p.who': 'Travellers', 'p.msg': 'Anything we should know?',
      'p.send': 'Send request', 'p.req': 'Please add your name and a way to reach you.',
      'p.done': 'Your request is ready and copied. Send it by email or WhatsApp using the buttons below.', 'p.mailbtn': 'Open email', 'p.wabtn': 'Open WhatsApp',
      'foot.rights': 'All rights reserved', 'foot.top': 'Back to top', 'person': 'traveller', 'people': 'travellers'
    },
    mn: {
      'nav.journeys': 'Аяллууд', 'nav.map': 'Газрын зураг', 'nav.exp': 'Туршлага', 'nav.road': 'Бичлэг', 'nav.faq': 'Асуулт', 'nav.cta': 'Аялал захиалах', 'menu': 'Цэс',
      'hero.kicker': 'Монголоор хийх хувийн аялал', 'hero.h1': 'Мартагдашгүй|дурсамжаа бүтээ',
      'hero.sub': 'Гэрт хонох, малчин айл, элсэн манхан, тахь — эдгээр замаар өөрсдөө явдаг монгол багийн төлөвлөсөн аялал.',
      'hero.cta1': 'Аяллуудыг үзэх', 'hero.cta2': 'Хувийн аялал төлөвлөх', 'scroll': 'Гүйлгэх',
      'statement': 'Монголын гэр бүрийн хаалганы цаана зочноо хүлээсэн дулаан угтлага бий: зууханд буцалсан сүүтэй цай, галын дэргэдэх суудал, олон үеэрээ малаа дагаж нүүсэн айл. Nomad Gate Tour тэр хаалгыг танд нээнэ.',
      'j.title': 'Онцлох аяллууд', 'j.lead': 'Бидний бичлэг хийдэг, хайртай газруудаар дайрах таван маршрут. Бүгдийг нь танд тааруулж өөрчилж болно.',
      'j.note': 'Demo-д зориулсан жишээ маршрут — эцсийн хөтөлбөрийг Nomad Gate Tour өгнө.',
      'j.day': 'өдөр', 'j.days': 'өдөр', 'j.view': 'Аяллыг үзэх', 'j.drag': 'Гүйлгээд аялаарай',
      'd.overview': 'Аяллын явц', 'd.included': 'Үнэд багтсан', 'd.inc': ['Хувийн унаа, жолооч', 'Англи хэлтэй хөтөч', 'Гэр бааз эсвэл айлд байрлах', 'Замын хоол', 'Цогцолборт газрын хураамж'],
      'd.notinc': 'Үнэд багтаагүй', 'd.exc': ['Олон улсын нислэг', 'Аяллын даатгал', 'Хувийн зардал'],
      'd.season': 'Улирал', 'd.style': 'Төрөл', 'd.duration': 'Хугацаа', 'd.route': 'Маршрут',
      'b.title': 'Энэ аяллыг захиалах', 'b.date': 'Эхлэх өдөр', 'b.who': 'Хүний тоо', 'b.stay': 'Байр', 'b.stay1': 'Хамтын гэр', 'b.stay2': 'Хувийн гэр',
      'b.send': 'Хүсэлт рүү үргэлжлүүлэх', 'b.note': 'Одоо төлбөр төлөхгүй. Бид төлөвлөгөө, үнийг илгээнэ.', 'close': 'Хаах',
      'm.title': 'Хаалганы цаана', 'm.lead': 'Бидний маршрутууд Улаанбаатараас Монголын зүрх рүү салаалдаг. Аялал сонгоод замыг нь хараарай.',
      'x.title': 'Туршлага', 'x.lead': 'Бидэнтэй замд гарсан нэг өдөр ямар байдаг вэ.',
      'r.title': 'Замаас', 'r.lead': 'Аяллын үеэр бичиж Instagram-д хуваалцсан жинхэнэ бичлэгүүд.', 'r.follow': 'Instagram-д дагах',
      'f.title': 'Аялахын өмнө',
      'c.title': 'Аяллынхаа хаалгыг нээ', 'c.lead': 'Хэзээ, хэдүүлээ аялахаа бичээрэй. Маршрутыг танд тааруулж зохионо.',
      'c.call': 'Утас эсвэл WhatsApp', 'c.mail': 'Имэйл', 'c.copy': 'Хуулах', 'c.copied': 'Хуулагдлаа',
      'p.name': 'Таны нэр', 'p.contact': 'Имэйл эсвэл WhatsApp', 'p.journey': 'Аялал', 'p.any': 'Шийдээгүй', 'p.month': 'Сар', 'p.who': 'Хүний тоо', 'p.msg': 'Өөр бидэнд хэлэх зүйл байна уу?',
      'p.send': 'Хүсэлт илгээх', 'p.req': 'Нэр болон холбогдох хаягаа бичнэ үү.',
      'p.done': 'Хүсэлт бэлэн боллоо, хуулагдсан. Доорх товчоор имэйл эсвэл WhatsApp-аар илгээгээрэй.', 'p.mailbtn': 'Имэйл нээх', 'p.wabtn': 'WhatsApp нээх',
      'foot.rights': 'Бүх эрх хуулиар хамгаалагдсан', 'foot.top': 'Дээш буцах', 'person': 'хүн', 'people': 'хүн'
    }
  }
};

/* ---------- Payments ----------
   api: Supabase Edge Functions base, e.g. 'https://<project>.supabase.co/functions/v1'.
        Empty = demo mode (the whole booking + test payment runs in the browser, nothing is charged).
   Prices are SAMPLE values, per person, and must match the `tours` table (supabase/migrations/001_bookings.sql).
   When api is set the site loads live prices from the server, so the server is always the source of truth. */
window.NGT.payments = { api: 'https://oiaagrrfkwfnnohstzqu.supabase.co/functions/v1/api', mode: 'request' }; // mode: 'request' (book now, pay later) | 'test'; the server's mode wins when api is set
window.NGT.prices = {
  terelj:  { usd: 120, mnt: 420000,  privUsd: 0,   privMnt: 0,      depositPct: 20 },
  central: { usd: 850, mnt: 2950000, privUsd: 120, privMnt: 420000, depositPct: 20 },
  nomad:   { usd: 480, mnt: 1650000, privUsd: 60,  privMnt: 210000, depositPct: 20 },
  autumn:  { usd: 690, mnt: 2400000, privUsd: 90,  privMnt: 310000, depositPct: 20 },
  stars:   { usd: 320, mnt: 1100000, privUsd: 30,  privMnt: 105000, depositPct: 20 }
};

/* ---------- Booking terms (used by terms.html) ----------
   SAMPLE values until Nomad Gate Tour confirms them. Change the numbers here and every language updates. */
window.NGT.terms = {
  draft: true,                         // shows a "draft" notice on the terms page; set false when confirmed
  updated: '2026-11-05',
  company: 'Nomad Gate Tour (Хөтөч БКЖ Глобал ХХК)', // brand + legal company name
  address: 'Ulaanbaatar, Mongolia',    // registered address
  depositPct: 20,                      // deposit at booking, %
  balanceDays: 45,                     // balance due this many days before the trip
  cancelFull: 60,                      // cancel this many days or more before: deposit refunded
  cancelHalf: 30,                      // between cancelHalf and cancelFull: half of the deposit refunded
  cancelLate: 14                       // fewer days than this: 100% of the trip price is charged
};
