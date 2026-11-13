import { useState } from 'react';
import { site } from '../../data/site';
import s from './AboutUs.module.css';

const highlights = site.aboutHighlights.map(item => {
  const dash = item.indexOf(' — ');
  if (dash === -1) return { title: item, text: '' };

  return {
    title: item.slice(0, dash),
    text: item.slice(dash + 3),
  };
});

function AboutUs() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className={s.section} aria-labelledby="about-title">
      <div className={`inner ${s.grid}`}>
        <h2 id="about-title" className="sectionLabel">
          Про мене
        </h2>

        <ul className={s.cards}>
          {highlights.map(item => (
            <li key={item.title} className={s.card}>
              <p className={s.cardLabel}>{item.title}</p>
              {item.text ? <p>{item.text}</p> : null}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={s.toggle}
          aria-expanded={open}
          aria-controls="about-story"
          onClick={() => setOpen(value => !value)}
        >
          {open ? 'Згорнути' : 'Читати далі'}
          <span className={s.arrow} aria-hidden="true" />
        </button>

        <div id="about-story" className={s.story} hidden={!open}>
          <p>
            Я — {site.fullName}, {site.role}. Працюю з людьми, яким потрібна не
            лише розмова, а спокійний погляд на те, звідки беруться повторювані
            стани, страхи чи сценарії в житті.
          </p>
          <p>
            До регресії я десять років пропрацювала в нігтьовому сервісі.
            Левова частка цієї роботи — це глибоке спілкування з людьми, уважне
            слухання та аналіз їхніх станів. Саме цей багатий досвід взаємодії
            з клієнтами та довгі спостереження за роботою мого наставника
            врешті-решт і привели мене до вибору теперішньої професії. Сьогодні
            за моїми плечима майже два роки активної практики, понад 250
            проведених сеансів і особливий фокус на роботі з підлітками від 15
            років.
          </p>
          <p>
            Через регресивну терапію я допомагаю зустрітися з тим, що всередині
            — у стосунках, самооцінці, тривозі чи відчутті «застрягла».
          </p>
          <p>
            Чому я обрала цей метод і чому він працює? Тому що він не затягує
            процес на місяці розмов про наслідки, а дозволяє м’яко зазирнути в
            саму причину, розплутати внутрішній вузол і знайти справжню опору.
            Я роблю це тому, що бачу, як люди після сеансів видихають, скидають
            із себе зайвий вантаж і починають жити значно легше. Обіцянок
            вилікувати чи змінити ваше життя за вас я не даю — ми працюємо
            разом, дбайливо і у вашому власному темпі.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
