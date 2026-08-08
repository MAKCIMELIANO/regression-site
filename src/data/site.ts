/**
 * Єдине місце для контактів, цін і налаштувань реклами.
 * Контакти й фото підставте свої — решту вже можна редагувати тут же.
 */
export const site = {
  brand: 'РегресЮля',
  fullName: 'Юлія Кирилюк',
  role: 'регресолог',
  email: 'regres.yulia@gmail.com',
  phone: '+380000000000',
  phoneDisplay: '+38 (000) 000 00 00',
  telegram: 'https://t.me/regresyulia',
  instagram: 'https://www.instagram.com/regresyulia',
  facebook: 'https://www.facebook.com/regresyulia',
  viber: 'viber://chat?number=%2B380000000000',
  developerEmail: 'makcimeliano@gmail.com',
  /** Вставте ID з Meta Events Manager — поки порожньо, піксель не завантажується */
  metaPixelId: '',
  session: {
    format: 'Онлайн',
    platforms: 'Telegram',
    duration: '60–90 хвилин',
    priceFrom: '2 000 грн',
    priceNote: 'Вартість одного індивідуального онлайн-сеансу',
    firstStep: 'Спочатку — коротка знайомча розмова в месенджері без зобов’язань',
  },
  aboutHighlights: [
    'Індивідуальний підхід і робота в комфортному для вас темпі',
    'Регресійний гіпноз онлайн українською мовою',
    'Безпечний простір: конфіденційність і повага до ваших меж',
  ],
} as const;

export const navLinks = [
  { href: '#about', label: 'Про мене' },
  { href: '#why', label: 'Підхід' },
  { href: '#session', label: 'Сеанс' },
  { href: '#help', label: 'З чим працюю' },
  { href: '#reviews', label: 'Відгуки' },
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
