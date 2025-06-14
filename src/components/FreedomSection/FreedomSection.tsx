import s from './FreedomSection.module.css';

const FreedomSection = () => {
  return (
    <div className={s.container}>
      <div className={s.text_content}>
        <h2>Why Thrive?</h2>
        <p>
          Want to improve your well-being from the comfort of your own couch?
          Are you having trouble finding the right therapist?
        </p>
        <span>
          Here at ThriveTalk, our licensed therapists provide the same quality
          care you would get in office from anywhere you can access your laptop
          or mobile phone. Become your best self with ThriveTalk. Start therapy
          now with a licensed therapist! Here at ThriveTalk, our licensed
          therapists provide the same quality care you would get in office from
          anywhere you can access your laptop or mobile phone. Become your best
          self with ThriveTalk. Start therapy now with a licensed therapist!
        </span>
      </div>
      <div className={s.image_content}>
        <img src="/images/freedom.png" alt="freedom" />
      </div>
    </div>
  );
};

export default FreedomSection;
