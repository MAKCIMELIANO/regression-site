import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const outPath = path.resolve('Тексти_сайту_для_Юлі.docx');

const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const run = (text, props = '') =>
  `<w:r>${props}<w:t xml:space="preserve">${esc(text)}</w:t></w:r>`;

const para = (inner, extra = '') => `<w:p>${extra}${inner}</w:p>`;

const h1 = (text) =>
  para(
    run(text, '<w:rPr><w:b/><w:sz w:val="32"/><w:szCs w:val="32"/><w:color w:val="1E3A5F"/></w:rPr>'),
    '<w:pPr><w:spacing w:before="360" w:after="120"/></w:pPr>',
  );

const h2 = (text) =>
  para(
    run(text, '<w:rPr><w:b/><w:sz w:val="24"/><w:color w:val="2F6B8A"/></w:rPr>'),
    '<w:pPr><w:spacing w:before="240" w:after="80"/></w:pPr>',
  );

const body = (text) => para(run(text), '<w:pPr><w:spacing w:after="80"/></w:pPr>');

const hint = (text) =>
  para(
    run(text, '<w:rPr><w:i/><w:color w:val="5C6B73"/></w:rPr>'),
    '<w:pPr><w:spacing w:after="80"/></w:pPr>',
  );

const current = (text) =>
  para(
    run('Зараз на сайті: ', '<w:rPr><w:b/><w:color w:val="5C6B73"/></w:rPr>') +
      run(text, '<w:rPr><w:i/></w:rPr>'),
    '<w:pPr><w:spacing w:after="60"/></w:pPr>',
  );

const box = (preset = 'залишити') => `
<w:tbl>
  <w:tblPr>
    <w:tblW w:w="5000" w:type="pct"/>
    <w:tblBorders>
      <w:top w:val="single" w:sz="4" w:space="0" w:color="E2C56A"/>
      <w:left w:val="single" w:sz="4" w:space="0" w:color="E2C56A"/>
      <w:bottom w:val="single" w:sz="4" w:space="0" w:color="E2C56A"/>
      <w:right w:val="single" w:sz="4" w:space="0" w:color="E2C56A"/>
    </w:tblBorders>
  </w:tblPr>
  <w:tr>
    <w:tc>
      <w:tcPr>
        <w:shd w:val="clear" w:color="auto" w:fill="FFF4CC"/>
        <w:tcMar>
          <w:top w:w="80" w:type="dxa"/>
          <w:left w:w="120" w:type="dxa"/>
          <w:bottom w:w="80" w:type="dxa"/>
          <w:right w:w="120" w:type="dxa"/>
        </w:tcMar>
      </w:tcPr>
      <w:p><w:r><w:rPr><w:color w:val="6B5A2E"/></w:rPr><w:t xml:space="preserve">${esc(preset)}</w:t></w:r></w:p>
    </w:tc>
  </w:tr>
</w:tbl>`;

const field = (label, now, preset = 'залишити') =>
  [h2(label), now ? current(now) : '', box(preset)].join('');

const parts = [];

parts.push(h1('Тексти сайту РегресЮля'));
parts.push(body('Юліє, це анкета по сайту зверху вниз. Відкрийте сайт поруч і йдіть блок за блоком.'));
parts.push(body('У жовтому полі вже стоїть слово «залишити». Якщо речення вам підходить — нічого не чіпайте. Якщо хочете інакше — зітріть це слово і напишіть свій текст так, як говорите з людиною.'));
parts.push(body('Пишіть українською, на «ви». Не обіцяйте вилікувати тривогу, депресію чи інші стани. Відгуки — лише справжні і лише з дозволу людини.'));
parts.push(hint('Сірим курсивом показано те, що зараз написано на сайті.'));

parts.push(h1('1. Контакти. Перевірте, що це ваші'));
parts.push(field('Телефон', '+38 (098) 793 16 06'));
parts.push(field('Пошта', 'yuliakyrylyuk15@gmail.com'));
parts.push(field('Telegram', 'https://t.me/RegresologYuliaKyrylyuk'));
parts.push(field('Instagram', 'https://www.instagram.com/yulia.kyrylyuk_regresolog'));
parts.push(field('Facebook', 'https://www.facebook.com/yulia.kyrylyuk'));
parts.push(field('Viber', 'чат на номер +38 (098) 793 16 06, ім’я в Viber: Yulia Kyrylyuk Regresolog'));

parts.push(h1('2. Перший екран'));
parts.push(hint('Це те, що людина бачить одразу: назва, великий заголовок, короткий абзац і рядок з умовами.'));
parts.push(field('Назва бренду над заголовком', 'РегресЮля'));
parts.push(field('Великий заголовок', 'Регресійний гіпноз для внутрішньої гармонії'));
parts.push(field(
  'Абзац під заголовком',
  'Допомагаю м’яко дійти до коренів станів, які заважають жити спокійно, і знайти опору в собі. Сеанси проводжу онлайн, у Telegram.',
));
parts.push(field('Тривалість сеансу', '60–90 хвилин'));
parts.push(field('Ціна', '2 000 грн'));
parts.push(field('Де проходить сеанс', 'Онлайн, у Telegram'));
parts.push(field('Напис на жовтій кнопці', 'Записатися на сеанс'));
parts.push(field('Напис на другій кнопці', 'З чим я працюю'));

parts.push(h1('3. Блок «Підхід»'));
parts.push(hint('Бірюзовий блок «Чому онлайн-регресія зі мною». Поруч ваше фото.'));
parts.push(field('Заголовок', 'Чому онлайн-регресія зі мною'));
parts.push(field(
  'Перший абзац',
  'Хочете приділити час собі і не витрачати години на дорогу? Шукаєте спокійний простір для глибокої роботи?',
));
parts.push(field(
  'Другий абзац',
  'Проводжу сеанси регресійного гіпнозу онлайн — з тією ж уважністю, що й наживо. Достатньо тихого місця, навушників і бажання зустрітися з собою. Йдемо у вашому темпі.',
));
parts.push(field('Напис на кнопці', 'Розпочати з короткої розмови'));

parts.push(h1('4. Блок «Про мене»'));
parts.push(field(
  'Перший абзац',
  'Я Юлія Кирилюк, регресолог. Працюю з людьми, яким потрібна не лише розмова, а спокійний погляд на те, звідки беруться повторювані стани, страхи чи сценарії в житті.',
));
parts.push(field(
  'Другий абзац',
  'Через регресійний гіпноз допомагаю зустрітися з тим, що всередині — у стосунках, самооцінці, тривозі чи відчутті «застрягла». Далі шукаємо більше легкості й турботи про себе. Обіцянок вилікувати я не даю.',
));
parts.push(field('Пункт 1', 'Індивідуальний підхід і робота в комфортному для вас темпі'));
parts.push(field('Пункт 2', 'Регресійний гіпноз онлайн українською мовою'));
parts.push(field('Пункт 3', 'Безпечний простір: конфіденційність і повага до ваших меж'));
parts.push(field(
  'Як ви прийшли в цю роботу. Зараз цього тексту немає',
  'Порожньо. Можна написати 3–5 речень своїми словами. Якщо не хочете — залиште «пропустити».',
  'пропустити',
));

parts.push(h1('5. Блок «Сеанс і умови»'));
parts.push(field(
  'Речення над картками',
  'Спочатку — коротка знайомча розмова в месенджері без зобов’язань',
));
parts.push(field('Картка «Формат»', 'Онлайн. Telegram'));
parts.push(field('Картка «Тривалість»', '60–90 хвилин. Індивідуальний сеанс'));
parts.push(field('Картка «Вартість»', '2 000 грн. Вартість одного індивідуального онлайн-сеансу'));
parts.push(field('Напис на кнопці', 'Узгодити зручний час'));

parts.push(h1('6. Блок «З чим я можу допомогти»'));
parts.push(hint('Шість кольорових карток. Заголовок на картці, текст відкривається по кліку «Детальніше».'));
parts.push(field(
  'Речення під заголовком блоку',
  'Оберіть тему — коротко розповім, як виглядає робота в цьому запиті.',
));
parts.push(field(
  'Картка «Родові історії»',
  'Дивлюся з вами на родові сценарії та повторювані історії, які можуть відгукуватися сьогодні. Роблю це з повагою до родини і без тиску.',
));
parts.push(field(
  'Картка «Важкість і апатія»',
  'Коли бракує сил і сенсу, допомагаю м’яко подивитися, звідки це починається, і спертися на себе.',
));
parts.push(field(
  'Картка «Тривога і напруга»',
  'З тривогою працюю в спокійному розслабленні: помічаємо напругу в тілі і дивимось, що за нею стоїть. Обіцянки «прибрати тривогу» не даю.',
));
parts.push(field(
  'Картка «Травматичний досвід»',
  'Допомагаю обережно зустрітися з досвідом, який досі відгукується, і знайти свій спосіб жити з ним далі — без примусу й поспіху.',
));
parts.push(field(
  'Картка «Стосунки»',
  'Разом дивимось на повторювані конфлікти, дистанцію чи залежність і шукаємо, що всередині заважає близькості.',
));
parts.push(field(
  'Картка «Самопіклування»',
  'Допомагаю почути свої потреби і берегти межі — щоб турбота про себе стала звичною, а не винятком.',
));
parts.push(field(
  'Інша тема, якої немає в списку',
  'Можна додати свою. Напишіть назву і 2–3 речення. Якщо не треба — залиште «пропустити».',
  'пропустити',
));

parts.push(h1('7. Блок «Відгуки»'));
parts.push(body('Зараз на сайті стоять вигадані приклади: Олена, Марина, Ірина, Андрій. Їх не можна залишати, коли на сайт піде реклама.'));
parts.push(field(
  'Що зробити з блоком',
  'Варіанти: «прибрати блок» або «поставити мої відгуки нижче».',
  'прибрати блок',
));
parts.push(hint('Якщо є живі відгуки — по одному в жовте поле: ім’я або ініціали, тема, текст, і слово «дозвіл є». Без дозволу людини відгук не публікуємо.'));
parts.push(field('Відгук 1', 'Порожньо.', ''));
parts.push(field('Відгук 2', 'Порожньо.', ''));
parts.push(field('Відгук 3', 'Порожньо.', ''));
parts.push(field('Відгук 4', 'Порожньо.', ''));

parts.push(h1('8. Блок «Як проходить робота»'));
parts.push(field('Заголовок', 'Як проходить робота'));
parts.push(field(
  'Абзац',
  'Сеанс для мене — це спокійна розмова в глибокому розслабленні. Я не витягаю спогади силоміць: ідемо лише туди, куди готова ваша психіка. Конфіденційність і ваш темп — основа моєї роботи.',
));
parts.push(field('Короткий рядок під абзацом', 'Я поруч, коли ви готові зробити крок.'));
parts.push(field('Напис на кнопці', 'Зв’язатися зі мною'));

parts.push(h1('9. Сірий рядок-застереження'));
parts.push(hint('Він одразу під попереднім блоком. Це важливе речення для реклами: практика не замінює лікаря.'));
parts.push(field(
  'Текст застереження',
  'Я працюю з регресійним гіпнозом як із практикою самопізнання та емоційної підтримки. Це не заміна консультації лікаря, психотерапевта чи іншої медичної допомоги. Якщо у вас гострий стан — зверніться до профільного фахівця.',
));

parts.push(h1('10. Блок «Зв’яжіться зі мною»'));
parts.push(field('Заголовок', 'Зв’яжіться зі мною'));
parts.push(field('Короткий рядок', 'Готові. Уважно. У своєму темпі.'));
parts.push(field(
  'Абзац',
  'Напишіть коротко, з чим хочете попрацювати. Відповім і чесно скажу, чи підходить вам регресійний гіпноз. Перша розмова — знайомство, без зобов’язань.',
));
parts.push(field('Напис на жовтій кнопці', 'Написати в Telegram'));

parts.push(h1('11. Короткий текст унизу сторінки'));
parts.push(field(
  'Абзац у футері',
  'Я, Юлія Кирилюк, регресолог. Допомагаю знайти внутрішню опору через регресійний гіпноз — онлайн, у вашому темпі.',
));

parts.push(h1('12. Фото'));
parts.push(body('Текст можна віддати і без фото. Для запуску потрібні два знімки, окремими файлами, не вставлені в цей документ.'));
parts.push(field(
  'Фото 1. Портрет',
  'Потрібне живе фото вас: спокійне світло, обличчя добре видно. Воно буде на першому екрані і в контактах.',
  'надішлю окремим файлом',
));
parts.push(field(
  'Фото 2. Місце сеансу',
  'Тихе місце: крісло, світло, без чужих облич. Замінить картинку в блоці «Як проходить робота».',
  'надішлю окремим файлом',
));

parts.push(h1('13. Якщо хочете сказати ще щось'));
parts.push(field('Вільні нотатки', 'Сюди можна написати все, що не влізло у блоки вище.', ''));

const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    ${parts.join('\n')}
    <w:sectPr>
      <w:pgSz w:w="11906" w:h="16838"/>
      <w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134"/>
    </w:sectPr>
  </w:body>
</w:document>`;

const contentTypes = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
</Types>`;

const rels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>`;

const wordRels = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"/>`;

function crc32(buffer) {
  return zlib.crc32(buffer) >>> 0;
}

function zipStore(files) {
  const locals = [];
  const centrals = [];
  let offset = 0;

  for (const file of files) {
    const name = Buffer.from(file.name, 'utf8');
    const data = Buffer.from(file.data, 'utf8');
    const crc = crc32(data);
    const local = Buffer.alloc(30 + name.length);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);
    local.writeUInt16LE(0, 6);
    local.writeUInt16LE(0, 8);
    local.writeUInt16LE(0, 10);
    local.writeUInt16LE(0, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    name.copy(local, 30);

    const central = Buffer.alloc(46 + name.length);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);
    central.writeUInt16LE(20, 6);
    central.writeUInt16LE(0, 8);
    central.writeUInt16LE(0, 10);
    central.writeUInt16LE(0, 12);
    central.writeUInt16LE(0, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(data.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(name.length, 28);
    central.writeUInt16LE(0, 30);
    central.writeUInt16LE(0, 32);
    central.writeUInt16LE(0, 34);
    central.writeUInt16LE(0, 36);
    central.writeUInt32LE(0, 38);
    central.writeUInt32LE(offset, 42);
    name.copy(central, 46);

    locals.push(local, data);
    centrals.push(central);
    offset += local.length + data.length;
  }

  const centralBuf = Buffer.concat(centrals);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(files.length, 8);
  eocd.writeUInt16LE(files.length, 10);
  eocd.writeUInt32LE(centralBuf.length, 12);
  eocd.writeUInt32LE(offset, 16);
  eocd.writeUInt16LE(0, 20);
  return Buffer.concat([...locals, centralBuf, eocd]);
}

const docx = zipStore([
  { name: '[Content_Types].xml', data: contentTypes },
  { name: '_rels/.rels', data: rels },
  { name: 'word/document.xml', data: documentXml },
  { name: 'word/_rels/document.xml.rels', data: wordRels },
]);

fs.writeFileSync(outPath, docx);
console.log(outPath, docx.length, docx.subarray(0, 2).toString());
