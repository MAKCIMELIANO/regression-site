import s from './Disclaimer.module.css';

function Disclaimer() {
  return (
    <aside className={s.banner} aria-label="Важливе застереження">
      <div className={`inner ${s.inner}`}>
        <p>
          Регресійний гіпноз — це практика для самопізнання та емоційної
          підтримки. Вона не замінює консультацію лікаря, психотерапевта чи іншу
          медичну допомогу. Якщо у вас гострий стан — зверніться до профільного
          фахівця.
        </p>
      </div>
    </aside>
  );
}

export default Disclaimer;
