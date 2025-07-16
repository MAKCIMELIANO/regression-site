import s from './HeroContent.module.css';

function HeroContent() {
  return (
    <div className={s.hero_content}>
      <h1 className={s.hero_title}>
        ДОПОМАГАЮ ВАМ ПРОЦВІТАТИ У ВСІХ СФЕРАХ ЖИТТЯ
      </h1>
      <p className={s.hero_text}>
        Я, як регресолог, допомагаю людям подолати стрес, депресію, тривогу та
        інші психологічні проблеми. Разом ми знайдемо шляхи до покращення вашого
        життя та досягнення гармонії.
      </p>
      <div className={s.hero_buttons}>
        <ul className={s.hero_list}>
          <li className={s.hero_item}>
            <a href="#about">Про мене</a>
          </li>
          <li className={s.hero_item}>
            <a href="#services">Що я роблю?</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroContent;
