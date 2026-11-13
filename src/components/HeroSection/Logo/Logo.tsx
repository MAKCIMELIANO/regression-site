import { GiLotus } from 'react-icons/gi';
import { site } from '../../../data/site';
import s from './Logo.module.css';

type LogoProps = {
  title: string;
};

function Logo({ title }: LogoProps) {
  return (
    <a href="#top" className={s.logo} aria-label={`${title} — на початок`}>
      <span className={s.iconWrap} aria-hidden>
        <GiLotus className={s.icon} />
      </span>
      <span className={s.brand}>{title}</span>
      <span className={s.tagline}>{site.role}</span>
    </a>
  );
}

export default Logo;
