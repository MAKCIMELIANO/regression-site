import ContactButton from './ContactButton/ContactButton';
import HeroContent from './HeroContent/HeroContent';
import HeroImage from './HeroImage/HeroImage';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import { site } from '../../data/site';
import s from './HeroSection.module.css';

function HeroSection() {
  return (
    <section id="top" className={s.hero} aria-label="Головний екран">
      <div className={`inner ${s.headerWrap}`}>
        <header className={s.header}>
          <Logo title={site.brand} />
          <Navigation />
          <ContactButton />
        </header>
      </div>
      <div className={`inner ${s.content}`}>
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
}

export default HeroSection;
