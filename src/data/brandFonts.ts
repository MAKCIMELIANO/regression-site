export const BRAND_FONT_IDS = ['fraunces', 'cormorant', 'literata', 'prata', 'manrope'] as const;

export type BrandFontId = (typeof BRAND_FONT_IDS)[number];

export type BrandFont = {
  id: BrandFontId;
  name: string;
  family: string;
  weight: number;
  note: string;
};

export const BRAND_FONTS: readonly BrandFont[] = [
  {
    id: 'fraunces',
    name: 'Журнал',
    family: "'Fraunces', Georgia, serif",
    weight: 700,
    note: 'М’яка антиква, як заголовки сайту. Напис і заголовок звучать в один голос.',
  },
  {
    id: 'cormorant',
    name: 'Візитка',
    family: "'Cormorant Garamond', Georgia, serif",
    weight: 600,
    note: 'Тонша урочиста антиква. Ім’я як на візитці, заголовок лишається окремо.',
  },
  {
    id: 'literata',
    name: 'Книга',
    family: "'Literata', Georgia, serif",
    weight: 600,
    note: 'Зараз на сайті. Спокійна книжкова антиква.',
  },
  {
    id: 'prata',
    name: 'Вивіска',
    family: "'Prata', Georgia, serif",
    weight: 400,
    note: 'Висока вивіска. Ім’я читається як знак, без жирного натиску.',
  },
  {
    id: 'manrope',
    name: 'Тихо',
    family: "'Manrope', 'Segoe UI', sans-serif",
    weight: 700,
    note: 'Той самий шрифт, що й текст сайту. Напис не перекрикує заголовок.',
  },
];

const PREVIEW_STYLESHEET =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Prata&display=swap';

export function isBrandFontId(value: string | null): value is BrandFontId {
  return BRAND_FONT_IDS.some((id) => id === value);
}

export function ensureBrandFontPreview() {
  if (document.querySelector('link[data-brand-fonts]')) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = PREVIEW_STYLESHEET;
  link.dataset.brandFonts = 'true';
  document.head.appendChild(link);
}

export function applyBrandFont(id: BrandFontId) {
  const font = BRAND_FONTS.find((item) => item.id === id) ?? BRAND_FONTS[0];
  const root = document.documentElement;
  root.style.setProperty('--brand-font', font.family);
  root.style.setProperty('--brand-weight', String(font.weight));
}
