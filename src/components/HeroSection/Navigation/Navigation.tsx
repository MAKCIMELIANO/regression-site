import s from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="#section1">Section 1</a>
        </li>
        <li className={s.item}>
          <a href="#section2">Section 2</a>
        </li>
        <li className={s.item}>
          <a href="#section3">Section 3</a>
        </li>
        <li className={s.item}>
          <a href="#section4">Section 4</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
