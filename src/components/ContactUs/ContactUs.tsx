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
          <p className={s.lead}>
            Дбайливо. У вашому темпі. Без зайвого поспіху.
          </p>
          <p className={s.body}>
            Запишіться на безкоштовну консультацію. Я напишу вам у Telegram, ми
            обговоримо запит і оберемо час для сесії.
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
            src="/images/yulia-kiriluk.webp"
            alt={`${site.fullName}, ${site.role}`}
            width={640}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
