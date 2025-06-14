import s from './ContactButton.module.css';
function ContactButton() {
  return (
    <a href="tel:123456789" className={s.button}>
      Подзвони мені
    </a>
  );
}

export default ContactButton;
