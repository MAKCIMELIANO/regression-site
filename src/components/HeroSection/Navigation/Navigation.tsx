import { navLinks } from '../../../data/site';
import s from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={s.navigation} aria-label="Основна навігація">
      <ul className={s.list}>
        {navLinks.map(link => (
          <li key={link.href} className={s.item}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
