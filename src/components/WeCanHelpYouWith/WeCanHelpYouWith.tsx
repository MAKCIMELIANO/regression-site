import { useEffect, useId, useRef, useState } from 'react';
import content from '../../assets/weCanHelp.json';
import type { HelpItem } from '../../types/helpItem';
import s from './WeCanHelpYouWith.module.css';

const helpItems = content as HelpItem[];

function WeCanHelpYouWith() {
  const [selectedItem, setSelectedItem] = useState<HelpItem | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const isOpen = selectedItem !== null;

  const openItem = (item: HelpItem) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.classList.add('modal-open');

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal();
    };

    const onPointerDown = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [isOpen]);

  return (
    <section id="help" className={s.section} aria-labelledby="help-title">
      <div className="inner">
        <header className={s.header}>
          <p className="sectionLabel">Практика</p>
          <h2 id="help-title">З чим я можу допомогти</h2>
          <p className={s.intro}>
            Оберіть тему — коротко розповім, як виглядає робота в цьому запиті.
          </p>
        </header>

        <ul className={s.grid}>
          {helpItems.map((item, index) => (
            <li key={item.title} className={s.itemWrap}>
              <button
                type="button"
                className={s.item}
                style={{
                  backgroundColor: item.backgroundColor,
                  animationDelay: `${index * 60}ms`,
                }}
                onClick={() => openItem(item)}
              >
                <span className={s.title}>{item.title}</span>
                <span className={s.hint}>Детальніше</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedItem ? (
        <div className={s.modal} role="presentation">
          <div
            className={s.modalContent}
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            style={{ backgroundColor: selectedItem.backgroundColor }}
          >
            <button
              ref={closeButtonRef}
              type="button"
              className={s.close}
              onClick={closeModal}
              aria-label="Закрити"
            >
              ×
            </button>
            <h3 id={titleId}>{selectedItem.title}</h3>
            <p id={descriptionId}>{selectedItem.paragraph}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default WeCanHelpYouWith;
