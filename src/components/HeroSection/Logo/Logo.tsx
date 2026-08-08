import { site } from '../../../data/site';
import s from './Logo.module.css';

type LogoProps = {
  title: string;
};

function Logo({ title }: LogoProps) {
  return (
    <a href="#top" className={s.logo} aria-label={`${title} — на початок`}>
      <img
        src="/images/logo.webp"
        alt=""
        className={s.logoImage}
        width={44}
        height={44}
      />
      <span className={s.brand}>{title}</span>
      <span className={s.tagline}>{site.role}</span>
    </a>
  );
}

export default Logo;
