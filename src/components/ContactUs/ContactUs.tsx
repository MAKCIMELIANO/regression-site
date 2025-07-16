import s from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={s.container}>
      <div className={s.text_content}>
        <h2>CONTACT US</h2>
        <h3>Ready. Set. Smile</h3>
        <p>
          Take the free online assessment to see if you are a candidate and get
          started on your journey.
        </p>
        <a href="mailto:contact@example.com">Связаться с нами</a>
      </div>
      <div className={s.image_content}>
        <img src="/images/about-us.jpg" alt="freedom" />
      </div>
    </div>
  );
};

export default ContactUs;
