import s from './ShouldAlsoKnow.module.css';

const ShouldAlsoKnow = () => {
  return (
    <div className={s.shouldAlsoKnow}>
      <div className={s.imageContainer}>
        <img src="/images/session.jpg" alt="Description" />
      </div>
      <div className={s.contentContainer}>
        <h2>YOU SHOULD ALSO KNOW</h2>
        <p>
          MDD affects more than 16.1 million American adults, or about 6.7%of
          the U.S. population age 18 and older in a given year. We at{' '}
          <span>РегресЮля</span> can help you.
        </p>
        <a href="mailto:contact@example.com">Связаться с нами</a>
      </div>
    </div>
  );
};

export default ShouldAlsoKnow;
