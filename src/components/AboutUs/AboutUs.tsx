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
            Я {site.fullName}, {site.role}. Працюю з людьми, яким потрібна не
            лише розмова, а спокійний погляд на те, звідки беруться повторювані
            стани, страхи чи сценарії в житті.
          </p>
          <p>
            Через регресійний гіпноз допомагаю зустрітися з тим, що всередині —
            у стосунках, самооцінці, тривозі чи відчутті «застрягла». Далі
            шукаємо більше легкості й турботи про себе. Обіцянок вилікувати я
            не даю.
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
