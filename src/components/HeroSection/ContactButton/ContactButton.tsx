import { FaEnvelope, FaPhone } from 'react-icons/fa';
import s from './ContactButton.module.css';

function ContactButton() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <a href="mailto:example@example.com" className={s.contactLink}>
          <FaEnvelope className={s.icon} />
          example@example.com
        </a>
      </li>
      <li className={s.item}>
        <a href="tel:+1234567890" className={s.contactLink}>
          <FaPhone className={s.icon} />
          +1234567890
        </a>
      </li>
    </ul>
  );
}

export default ContactButton;
