import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaViber,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';
import s from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s.mainContent}>
        <div className={s.footerLeft}>
          <img
            src="/images/yulia-kiriluk.webp"
            alt="Юлія Кирилюк"
            className={s.footerPhoto}
          />
        </div>
        <ul className={s.footerRight}>
          <li className={s.footerSection}>
            <h4 className={s.footerTitle}>Про мене</h4>
            <p className={s.footerText}>
              Я, Юлія Кирилюк, регресолог з багаторічним досвідом. Допомагаю
              людям знайти гармонію та покращити своє самопочуття.
            </p>
          </li>
          <li className={s.footerSection}>
            <h4 className={s.footerTitle}>Соціальні мережі</h4>
            <ul className={s.socialLinksList}>
              <li className={s.socialLink}>
                <a href="https://facebook.com">
                  <FaFacebook className={s.icon} />
                  Facebook
                </a>
              </li>
              <li className={s.socialLink}>
                <a href="https://instagram.com">
                  <FaInstagram className={s.icon} />
                  Instagram
                </a>
              </li>
              <li className={s.socialLink}>
                <a href="https://telegram.org">
                  <FaTelegram className={s.icon} />
                  Telegram
                </a>
              </li>
              <li className={s.socialLink}>
                <a href="viber://chat?number=%2B1234567890">
                  <FaViber className={s.icon} />
                  Viber
                </a>
              </li>
            </ul>
          </li>
          <li className={s.footerSection}>
            <h4 className={s.footerTitle}>Контакти</h4>
            <ul className={s.contactLinksList}>
              <li className={s.socialLink}>
                <a href="mailto:example@example.com">
                  <FaEnvelope className={s.icon} />
                  example@example.com
                </a>
              </li>
              <li className={s.socialLink}>
                <a href="tel:+1234567890">
                  <FaPhone className={s.icon} />
                  +1234567890
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={s.copyrightContainer}>
        <p className={s.copyright}>
          &copy; 2025 Сайт регресолога. Розробив та редагував
          makcimeliano@gmail.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
