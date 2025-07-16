import s from './FreedomSection.module.css';

const FreedomSection = () => {
  return (
    <div id="services" className={s.container}>
      <div className={s.text_content}>
        <h2>Чому обрати мене?</h2>
        <p>
          Хочете покращити своє самопочуття не виходячи з дому? Вам важко знайти
          потрібного терапевта?
        </p>
        <span>
          Я, як професіональний регресолог, надаю ту саму якісну допомогу, яку
          ви отримали б в офісі, але з будь-якого місця, де ви можете отримати
          доступ до свого ноутбука або мобільного телефону. Станьте найкращою
          версією себе разом зі мною. Розпочніть терапію зараз з досвідченим
          регресологом!
        </span>
      </div>
      <div className={s.image_content}>
        <img src="/images/happy-girl.jpg" alt="freedom" />
      </div>
    </div>
  );
};

export default FreedomSection;
