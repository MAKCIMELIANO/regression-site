import s from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={s.container}>
      <div className={s.text_content}>
        <h2>ЗВ'ЯЖІТЬСЯ ЗІ МНОЮ</h2>
        <h3>Готові. Увага. Посміхніться</h3>
        <p>
          Пройдіть безкоштовну онлайн-оцінку, щоб дізнатися, чи підходите ви для
          нашої терапії, і розпочніть свою подорож до покращення самопочуття.
        </p>
        <a href="mailto:contact@example.com">Зв'язатися зі мною</a>
      </div>
      <div className={s.image_content}>
        <img
          src="/images/about-us.webp"
          alt="Дівчина у регресівному гіпнозі посміхається"
        />
      </div>
    </div>
  );
};

export default ContactUs;
