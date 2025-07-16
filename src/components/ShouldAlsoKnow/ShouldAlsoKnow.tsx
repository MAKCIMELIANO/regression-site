import s from './ShouldAlsoKnow.module.css';

const ShouldAlsoKnow = () => {
  return (
    <div className={s.shouldAlsoKnow}>
      <div className={s.imageContainer}>
        <img src="/images/session.webp" alt="Дівчина у регресівному гіпнозі" />
      </div>
      <div className={s.contentContainer}>
        <h2>ВАЖЛИВО ЗНАТИ</h2>
        <p>
          Велика депресія впливає на більш ніж 8 мільйонів дорослих в Україні,
          або приблизно 6.7% населення країни віком від 18 років і старше за
          рік. Я <span>РегресЮля</span> можу допомогти вам.
        </p>
        <a href="mailto:contact@example.com">Зв'язатися зі мною</a>
      </div>
    </div>
  );
};

export default ShouldAlsoKnow;
