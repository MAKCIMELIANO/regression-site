import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { site } from '../../data/site';
import SocialLinks from '../SocialLinks/SocialLinks';
import s from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      <div className={`inner ${s.mainContent}`}>
        <div className={s.footerSection}>
          <h3 className={s.footerTitle}>Про мене</h3>
          <p className={s.footerText}>
            {site.fullName}, {site.role}. Допомагаю знайти внутрішню гармонію
            через регресійний гіпноз — онлайн, у вашому темпі.
          </p>
          <p className={s.footerText}>
            <a href="#privacy">Політика конфіденційності</a>
          </p>
        </div>
        <div className={s.footerSection}>
          <h3 className={s.footerTitle}>Соціальні мережі</h3>
          <SocialLinks className={s.socialLinks} />
        </div>
        <div className={s.footerSection}>
          <h3 className={s.footerTitle}>Контакти</h3>
          <ul className={s.contactList}>
            <li>
              <a href={`mailto:${site.email}`}>
                <FaEnvelope className={s.icon} aria-hidden />
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`}>
                <FaPhone className={s.icon} aria-hidden />
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={s.copyrightContainer}>
        <div className={`inner ${s.copyrightInner}`}>
          <p className={s.copyright}>
            © {year} {site.brand}. Розробив{' '}
            <a href={`mailto:${site.developerEmail}`}>
              {site.developerEmail}
            </a>
            {' · '}
            <a href="#privacy">Privacy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
