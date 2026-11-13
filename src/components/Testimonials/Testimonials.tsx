import { testimonials } from '../../data/testimonials';
import s from './Testimonials.module.css';

function Testimonials() {
  return (
    <section id="reviews" className={s.section} aria-labelledby="reviews-title">
      <div className="inner">
        <header className={s.header}>
          <h2 id="reviews-title">Відгуки</h2>
          <p className={s.intro}>
            Нижче — приклади того, як люди описують сеанс. Свої відгуки додам
            сюди, коли буде письмова згода. Кожен запит усе одно свій.
          </p>
        </header>

        <ul className={s.grid}>
          {testimonials.map((item, index) => (
            <li
              key={item.name}
              className={s.card}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className={s.topic}>{item.topic}</p>
              <blockquote className={s.text}>«{item.text}»</blockquote>
              <p className={s.name}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Testimonials;
