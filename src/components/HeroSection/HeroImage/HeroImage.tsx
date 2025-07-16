import s from './HeroImage.module.css';
function HeroImage() {
  return (
    <img
      src="/images/yulia-kiriluk.webp"
      alt="Юлія Кирилюк"
      className={s.hero_image}
    />
  );
}

export default HeroImage;
