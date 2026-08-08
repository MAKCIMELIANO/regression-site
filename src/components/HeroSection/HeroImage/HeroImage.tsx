import { site } from '../../../data/site';
import s from './HeroImage.module.css';

function HeroImage() {
  return (
    <div className={s.wrap}>
      <img
        src="/images/yulia-kiriluk.webp"
        alt={`${site.fullName}, ${site.role}`}
        className={s.heroImage}
        width={520}
        height={640}
      />
    </div>
  );
}

export default HeroImage;
