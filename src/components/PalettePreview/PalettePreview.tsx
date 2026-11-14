import { useEffect, useRef, useState } from 'react';
import {
  applyBrandFont,
  BRAND_FONTS,
  ensureBrandFontPreview,
  isBrandFontId,
  type BrandFontId,
} from '../../data/brandFonts';
import { applyPalette, isPaletteId, PALETTES, type PaletteId } from '../../data/palettes';
import s from './PalettePreview.module.css';

const STORAGE_KEY = 'regresyulia-palette';
const FONT_KEY = 'regresyulia-brand-font';

function readSavedPalette(): PaletteId {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isPaletteId(saved)) return saved;
  } catch {
    // localStorage може бути закритий
  }

  return 'apricot';
}

function readSavedFont(): BrandFontId {
  try {
    const saved = localStorage.getItem(FONT_KEY);
    if (isBrandFontId(saved)) return saved;
  } catch {
    // localStorage може бути закритий
  }

  return 'literata';
}

function PalettePreview() {
  const barRef = useRef<HTMLDivElement>(null);
  const [id, setId] = useState<PaletteId>(readSavedPalette);
  const [fontId, setFontId] = useState<BrandFontId>(readSavedFont);

  useEffect(() => {
    if (!import.meta.env.DEV) return;

    applyPalette(id);
    try {
      localStorage.setItem(STORAGE_KEY, id);
    } catch {
      // вибір лишається до перезавантаження
    }
  }, [id]);

  useEffect(() => {
    if (!import.meta.env.DEV) return;

    ensureBrandFontPreview();
    applyBrandFont(fontId);
    try {
      localStorage.setItem(FONT_KEY, fontId);
    } catch {
      // вибір лишається до перезавантаження
    }
  }, [fontId]);

  useEffect(() => {
    if (!import.meta.env.DEV) return;

    const query = window.matchMedia('(max-width: 767px)');
    const bar = barRef.current;

    const syncPadding = () => {
      if (!query.matches || !bar) {
        document.body.style.paddingBottom = '';
        return;
      }

      document.body.style.paddingBottom = `${bar.offsetHeight + 24}px`;
    };

    syncPadding();
    query.addEventListener('change', syncPadding);
    const observer = new ResizeObserver(syncPadding);
    if (bar) observer.observe(bar);

    return () => {
      query.removeEventListener('change', syncPadding);
      observer.disconnect();
      document.body.style.paddingBottom = '';
      document.documentElement.style.removeProperty('--brand-font');
      document.documentElement.style.removeProperty('--brand-weight');
    };
  }, []);

  if (!import.meta.env.DEV) return null;

  return (
    <div className={s.bar} ref={barRef}>
      <div className={s.group} role="radiogroup" aria-label="Палітра для перегляду">
        {PALETTES.map((palette) => {
          const selected = palette.id === id;

          return (
            <button
              key={palette.id}
              type="button"
              role="radio"
              aria-checked={selected}
              title={palette.note}
              className={selected ? s.active : s.option}
              onClick={() => setId(palette.id)}
            >
              <span className={s.dots} aria-hidden="true">
                {palette.swatch.map((color) => (
                  <span key={color} className={s.dot} style={{ backgroundColor: color }} />
                ))}
              </span>
              {palette.name}
            </button>
          );
        })}
      </div>
      <p className={s.groupLabel}>Напис</p>
      <div className={s.group} role="radiogroup" aria-label="Шрифт напису в герої">
        {BRAND_FONTS.map((font) => {
          const selected = font.id === fontId;

          return (
            <button
              key={font.id}
              type="button"
              role="radio"
              aria-checked={selected}
              title={font.note}
              className={selected ? s.active : s.option}
              onClick={() => setFontId(font.id)}
            >
              {font.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default PalettePreview;
