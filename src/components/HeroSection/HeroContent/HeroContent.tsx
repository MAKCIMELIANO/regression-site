import s from './HeroContent.module.css';
function HeroContent() {
  return (
    <div className={s.hero_content}>
      <h1 className={s.hero_title}>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
      <p className={s.hero_text}>
        Our highly talented therapists can help you with a range of issues
        including relationships, sex, PTSD, depression, social anxiety, or even
        just caring for yourself more.
      </p>
      <div className={s.hero_buttons}>
        <ul className={s.hero_list}>
          <li className={s.hero_item}>
            <a href="#">Про мене</a>
          </li>
          <li className={s.hero_item}>
            <a href="#">Що я роблю?</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeroContent;
