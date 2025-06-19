import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
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
            src="/images/yulia.png"
            alt="Your Photo"
            className={s.footerPhoto}
          />
        </div>
        <ul className={s.footerRight}>
          <li className={s.footerSection}>
            <h4 className={s.footerTitle}>Заголовок</h4>
            <p className={s.footerText}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula.
            </p>
          </li>
          <li className={s.footerSection}>
            <h4 className={s.footerTitle}>Социальные сети</h4>
            <ul className={s.socialLinksList}>
              <li className={s.socialLink}>
                <a href="https://facebook.com">
                  <FaFacebook className={s.icon} />
                  Facebook
                </a>
              </li>
              <li className={s.socialLink}>
                <a href="https://twitter.com">
                  <FaTwitter className={s.icon} />
                  Twitter
                </a>
              </li>
              <li className={s.socialLink}>
                <a href="https://instagram.com">
                  <FaInstagram className={s.icon} />
                  Instagram
                </a>
              </li>
            </ul>
          </li>
          <li className={s.footerSection}>
            <h4 className={s.footerTitle}>Контакты</h4>
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
          &copy; 2023 РегресЮля. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
