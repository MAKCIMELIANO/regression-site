import { site } from '../../data/site';
import { trackLead } from '../../utils/metaPixel';
import SocialLinks from '../SocialLinks/SocialLinks';
import s from './ContactUs.module.css';

function ContactUs() {
  return (
    <section id="contact" className={s.section} aria-labelledby="contact-title">
      <div className={`inner ${s.grid}`}>
        <div className={s.textContent}>
          <p className="sectionLabel">Контакти</p>
          <h2 id="contact-title">Зв’яжіться зі мною</h2>
          <p className={s.lead}>Готові. Уважно. У своєму темпі.</p>
          <p className={s.body}>
            Напишіть коротко про запит — відповім і підкажу, чи підходить
            регресійна робота саме вам. Перша розмова допомагає познайомитися
            без зобов’язань.
          </p>
          <div className={s.actions}>
            <a
              className="btnPrimary"
              href={site.telegram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackLead()}
            >
              Написати в Telegram
            </a>
            <a className="btnSecondary" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
          <a className={s.phone} href={`tel:${site.phone}`}>
            {site.phoneDisplay}
          </a>
          <SocialLinks className={s.socials} />
        </div>
        <div className={s.imageContent}>
          <img
            src="/images/about-us.webp"
            alt={`${site.fullName} — запрошення до контакту`}
            width={640}
            height={720}
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
