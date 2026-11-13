import { site } from '../../data/site';
import s from './FreedomSection.module.css';

function FreedomSection() {
  return (
    <section id="why" className={s.section} aria-labelledby="why-title">
      <div className={`inner ${s.grid}`}>
        <div className={s.textContent}>
          <p className="sectionLabel">Підхід</p>
          <h2 id="why-title">Формат, у якому безпечно і комфортно</h2>
          <p className={s.lead}>
            Онлайн-формат крутий тим, що вам не потрібно нікуди їхати чи
            адаптуватися до незнайомого кабінету — ви залишаєтесь у своєму
            безпечному, звичному просторі, де простіше розслабитися.
          </p>
          <p className={s.body}>
            А робота з підсвідомістю дає змогу швидко дістатися справжніх
            причин життєвих труднощів, замість того щоб місяцями боротися лише
            з наслідками. Практикую роботу з підлітками з 15 років.
          </p>
          <a className="btnSecondary" href="#contact">
            Безкоштовна консультація 15 хв.
          </a>
        </div>
        <div className={s.imageContent}>
          <img
            src="/images/yulia-kiriluk.webp"
            alt={`${site.fullName}, ${site.role}`}
            width={640}
            height={720}
          />
        </div>
      </div>
    </section>
  );
}

export default FreedomSection;
