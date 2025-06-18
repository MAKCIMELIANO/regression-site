import React, { useState, useEffect, useRef } from 'react';
import s from './WeCanHelpYouWith.module.css';
import content from '../../assets/weCanHalp.json';

const WeCanHelpYouWith: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    title: string;
    paragraph: string;
    backgroundColor: string;
  } | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleItemClick = (item: {
    title: string;
    paragraph: string;
    backgroundColor: string;
  }) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <ul className={s.container}>
      <h2 className={s.header}>я можу допомогти вам</h2>
      {content.map(item => (
        <li
          key={item.title}
          className={s.item}
          onClick={() => handleItemClick(item)}
          style={{ backgroundColor: item.backgroundColor }}
        >
          <h3 className={s.title}>{item.title}</h3>
        </li>
      ))}

      {showModal && selectedItem && (
        <div className={s.modal}>
          <div
            className={s.modalContent}
            ref={modalRef}
            style={{
              backgroundColor: selectedItem.backgroundColor,
              color: '#ffffff',
            }}
          >
            <span className={s.close} onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.paragraph}</p>
          </div>
        </div>
      )}
    </ul>
  );
};

export default WeCanHelpYouWith;
