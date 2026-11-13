/**
 * Єдине місце для контактів, цін і налаштувань реклами.
 * Контакти й фото підставте свої — решту вже можна редагувати тут же.
 */
export const site = {
  brand: 'РегресЮля',
  fullName: 'Юлія Кирилюк',
  role: 'регресолог',
  email: 'yuliakyrylyuk15@gmail.com',
  phone: '+380987931606',
  phoneDisplay: '+38 (098) 793 16 06',
  telegram: 'https://t.me/RegresologYuliaKyrylyuk',
  instagram: 'https://www.instagram.com/yulia.kyrylyuk_regresolog',
  facebook: 'https://www.facebook.com/yulia.kyrylyuk',
  viber: 'viber://chat?number=%2B380987931606',
  developerEmail: 'makcimeliano@gmail.com',
  /** Вставте ID з Meta Events Manager — поки порожньо, піксель не завантажується */
  metaPixelId: '',
  heroKicker: 'Регресолог Юля Кирилюк',
  session: {
    format: 'Онлайн',
    platforms: 'Telegram',
    duration: '1,5–3 години',
    priceFrom: '3 000 грн',
    priceNote: 'Вартість одного індивідуального онлайн-сеансу',
    firstStep:
      'Можлива коротка ознайомча розмова в месенджері без зобов’язань. Безкоштовно.',
  },
  aboutHighlights: [
    'Зрозуміло і без зайвих термінів — спілкуємося простою мовою, без складних психологічних термінів, у яких легко заплутатися.',
    'Зручний формат із будь-якої точки світу — все проходить онлайн у Telegram, тож вам не потрібно нікуди їхати чи витрачати час на дорогу.',
    'Повна присутність і контроль — ви перебуваєте у стані м’якого розслаблення (як перед сном), повністю контролюєте процес, пам’ятаєте кожне слово і можете в будь-який момент відкрити очі.',
    'Простір без оцінок і ярликів — тут можна бути собою, не боятися здатися дивним чи неправильним і говорити про свої стани відкрито.',
  ],
} as const;

export const navLinks = [
  { href: '#about', label: 'Про мене' },
  { href: '#why', label: 'Підхід' },
  { href: '#session', label: 'Сеанс' },
  { href: '#help', label: 'З чим працюю' },
  { href: '#contact', label: 'Контакти' },
] as const;

export type SocialLink = {
  href: string;
  label: string;
  network: 'facebook' | 'instagram' | 'telegram' | 'viber';
};

export const socialLinks: SocialLink[] = [
  { href: site.facebook, label: 'Facebook', network: 'facebook' },
  { href: site.instagram, label: 'Instagram', network: 'instagram' },
  { href: site.telegram, label: 'Telegram', network: 'telegram' },
  { href: site.viber, label: 'Viber', network: 'viber' },
];
