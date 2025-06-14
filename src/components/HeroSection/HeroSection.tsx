import s from './HeroSection.module.css';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import ContactButton from './ContactButton/ContactButton';
import HeroContent from './HeroContent/HeroContent';
import HeroImage from './HeroImage/HeroImage';

const HeroSection: React.FC = () => {
  return (
    <section className={s.hero}>
      <header className={s.header}>
        <Logo title="РегресЮля" />
        <Navigation />
        <ContactButton />
      </header>
      <div className={s.content}>
        <HeroContent />
        <HeroImage />
      </div>
    </section>
  );
};

export default HeroSection;
