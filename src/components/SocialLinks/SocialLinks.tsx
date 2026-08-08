import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaViber,
} from 'react-icons/fa';
import { socialLinks, type SocialLink } from '../../data/site';
import s from './SocialLinks.module.css';

const icons = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  telegram: FaTelegram,
  viber: FaViber,
} as const;

type SocialLinksProps = {
  className?: string;
  showLabels?: boolean;
};

function SocialLinks({ className, showLabels = true }: SocialLinksProps) {
  return (
    <ul className={`${s.list}${className ? ` ${className}` : ''}`}>
      {socialLinks.map((link: SocialLink) => {
        const Icon = icons[link.network];
        return (
          <li key={link.network} className={s.item}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <Icon className={s.icon} aria-hidden />
              {showLabels ? <span>{link.label}</span> : null}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default SocialLinks;
