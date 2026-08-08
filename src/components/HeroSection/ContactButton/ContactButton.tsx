import { site } from '../../../data/site';
import s from './ContactButton.module.css';

function ContactButton() {
  return (
    <div className={s.wrap}>
      <a className={`btnPrimary ${s.cta}`} href="#contact">
        Записатися
      </a>
      <a className={s.phone} href={`tel:${site.phone}`}>
        {site.phoneDisplay}
      </a>
    </div>
  );
}

export default ContactButton;
