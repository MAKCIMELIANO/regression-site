import s from './Logo.module.css';

interface LogoProps {
  title: string;
}

const Logo: React.FC<LogoProps> = ({ title }) => {
  return (
    <div className={s.logo}>
      <img
        src="/images/logo.webp"
        alt="Юлія Кирилюк"
        className={s.logo_image}
      />
      <span>{title}</span>
    </div>
  );
};

export default Logo;
