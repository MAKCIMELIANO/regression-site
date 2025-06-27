import { FaFacebook, FaInstagram, FaTelegram, FaViber } from 'react-icons/fa';
import s from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="https://facebook.com">
            <FaFacebook className={s.icon} />
            Facebook
          </a>
        </li>
        <li className={s.item}>
          <a href="https://instagram.com">
            <FaInstagram className={s.icon} />
            Instagram
          </a>
        </li>
        <li className={s.item}>
          <a href="https://telegram.org">
            <FaTelegram className={s.icon} />
            Telegram
          </a>
        </li>
        <li className={s.item}>
          <a href="viber://chat?number=%2B1234567890">
            <FaViber className={s.icon} />
            Viber
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
