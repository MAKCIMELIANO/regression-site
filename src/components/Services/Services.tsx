import content from '../../assets/weCanHalp.json';
import s from './Services.module.css';

const Services = () => {
  return (
    <ul className={s.content}>
      {content.map(item => (
        <li key={item.title} className={s.item}>
          <h3 className={s.title}>{item.title}</h3>
          <p className={s.paragraph}>{item.paragraph}</p>
        </li>
      ))}
    </ul>
  );
};

export default Services;
