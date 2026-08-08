import { testimonials } from '../../data/testimonials';
import s from './Testimonials.module.css';

function Testimonials() {
  return (
    <section id="reviews" className={s.section} aria-labelledby="reviews-title">
      <div className="inner">
        <header className={s.header}>
          <p className="sectionLabel">Довіра</p>
          <h2 id="reviews-title">Відгуки</h2>
          <p className={s.intro}>
            Живі враження людей, які вже проходили сеанси. Кожна історія —
            унікальна, як і ваш запит.
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
