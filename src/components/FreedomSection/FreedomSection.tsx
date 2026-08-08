import s from './FreedomSection.module.css';

function FreedomSection() {
  return (
    <section id="why" className={s.section} aria-labelledby="why-title">
      <div className={`inner ${s.grid}`}>
        <div className={s.textContent}>
          <p className="sectionLabel">Підхід</p>
          <h2 id="why-title">Чому онлайн-регресія зі мною</h2>
          <p className={s.lead}>
            Хочете подбати про себе, не витрачаючи години на дорогу? Шукаєте
            безпечний простір для глибокої роботи?
          </p>
          <p className={s.body}>
            Проводжу сеанси регресійного гіпнозу онлайн — з тією ж уважністю й
            якістю, що й офлайн. Достатньо тихого місця, навушників і бажання
            зустрітися з собою. Разом ми рухаємось у вашому темпі.
          </p>
          <a className="btnSecondary" href="#contact">
            Розпочати з короткої розмови
          </a>
        </div>
        <div className={s.imageContent}>
          <img
            src="/images/happy-girl.webp"
            alt="Спокійна атмосфера після сеансу"
            width={640}
            height={720}
          />
        </div>
      </div>
    </section>
  );
}

export default FreedomSection;
