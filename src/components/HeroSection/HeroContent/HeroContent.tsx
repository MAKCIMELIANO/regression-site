import { site } from '../../../data/site';
import s from './HeroContent.module.css';

function HeroContent() {
  return (
    <div className={s.heroContent}>
      <p className={s.brandSignal}>{site.heroKicker}</p>
      <h1 className={s.heroTitle}>
        Регресійна терапія для внутрішньої гармонії
      </h1>
      <p className={s.heroText}>
        Часом здається, що все під контролем, але зсередини випалює тривога,
        старі сценарії повторюються знову і знову, а на звичні кроки просто не
        вистачає сил. Я допомагаю розібратися з тим, що ховається за цим
        напруженням — спокійно, без пафосу, без складних термінів і нав’язаних
        діагнозів. Сеанси проводжу онлайн у Telegram.
      </p>
      <p className={s.meta}>
        Онлайн у Telegram · {site.session.duration} · {site.session.priceFrom}
      </p>
      <div className={s.heroButtons}>
        <a className="btnPrimary" href="#contact">
          Записатися на сеанс
        </a>
        <a className="btnSecondary" href="#help">
          Можливі запити
        </a>
      </div>
    </div>
  );
}

export default HeroContent;
