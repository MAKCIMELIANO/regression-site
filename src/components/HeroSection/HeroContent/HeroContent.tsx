import { site } from '../../../data/site';
import s from './HeroContent.module.css';

function HeroContent() {
  return (
    <div className={s.heroContent}>
      <p className={s.brandSignal}>{site.brand}</p>
      <h1 className={s.heroTitle}>
        Регресійний гіпноз для внутрішньої гармонії
      </h1>
      <p className={s.heroText}>
        Допомагаю м’яко дістатися до коренів станів, які заважають жити легко —
        і знайти опору в собі. Онлайн-сеанси з {site.fullName}.
      </p>
      <div className={s.heroButtons}>
        <a className="btnPrimary" href="#contact">
          Записатися на сеанс
        </a>
        <a className="btnSecondary" href="#help">
          З чим я працюю
        </a>
      </div>
    </div>
  );
}

export default HeroContent;
