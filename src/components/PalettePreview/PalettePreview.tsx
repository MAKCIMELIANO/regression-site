import { useEffect, useState } from 'react';
import { applyPalette, isPaletteId, PALETTES, type PaletteId } from '../../data/palettes';
import s from './PalettePreview.module.css';

const STORAGE_KEY = 'regresyulia-palette';

function readSavedPalette(): PaletteId {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isPaletteId(saved)) return saved;
  } catch {
    // localStorage може бути закритий
  }

  return 'apricot';
}

function PalettePreview() {
  const [id, setId] = useState<PaletteId>(readSavedPalette);

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

    const query = window.matchMedia('(max-width: 767px)');

    const syncPadding = () => {
      document.body.style.paddingBottom = query.matches ? '6.5rem' : '';
    };

    syncPadding();
    query.addEventListener('change', syncPadding);
    return () => {
      query.removeEventListener('change', syncPadding);
      document.body.style.paddingBottom = '';
    };
  }, []);

  if (!import.meta.env.DEV) return null;

  return (
    <div className={s.bar} role="radiogroup" aria-label="Палітра для перегляду">
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
  );
}

export default PalettePreview;
