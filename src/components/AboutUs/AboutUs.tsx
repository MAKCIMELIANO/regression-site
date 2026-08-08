import { site } from '../../data/site';
import s from './AboutUs.module.css';

function AboutUs() {
  return (
    <section id="about" className={s.section} aria-labelledby="about-title">
      <div className={`inner ${s.grid}`}>
        <h2 id="about-title" className="sectionLabel">
          Про мене
        </h2>
        <div className={s.copy}>
          <p>
            Я, {site.fullName}, {site.role}. Працюю з людьми, яким потрібна не
            лише розмова, а глибший погляд на те, звідки беруться повторювані
            стани, страхи чи сценарії в житті.
          </p>
          <p>
            Через регресійний гіпноз допомагаю зустрітися з внутрішніми
            причинами — у стосунках, самооцінці, тривозі чи відчутті
            «застрягання» — і знайти шлях до більшої легкості й турботи про
            себе.
          </p>
          <ul className={s.highlights}>
            {site.aboutHighlights.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
