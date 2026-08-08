import { site } from '../../data/site';
import s from './SessionDetails.module.css';

function SessionDetails() {
  const { session } = site;

  const cards = [
    { label: 'Формат', value: session.format, note: session.platforms },
    { label: 'Тривалість', value: session.duration, note: 'Індивідуальний сеанс' },
    { label: 'Вартість', value: session.priceFrom, note: session.priceNote },
  ];

  return (
    <section id="session" className={s.section} aria-labelledby="session-title">
      <div className="inner">
        <header className={s.header}>
          <p className="sectionLabel">Як це виглядає</p>
          <h2 id="session-title">Сеанс і умови</h2>
          <p className={s.intro}>{session.firstStep}</p>
        </header>

        <ul className={s.cards}>
          {cards.map(card => (
            <li key={card.label} className={s.card}>
              <p className={s.cardLabel}>{card.label}</p>
              <p className={s.cardValue}>{card.value}</p>
              <p className={s.cardNote}>{card.note}</p>
            </li>
          ))}
        </ul>

        <a className={`btnPrimary ${s.cta}`} href="#contact">
          Узгодити зручний час
        </a>
      </div>
    </section>
  );
}

export default SessionDetails;
