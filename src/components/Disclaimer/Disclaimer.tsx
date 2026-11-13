import s from './Disclaimer.module.css';

function Disclaimer() {
  return (
    <aside className={s.banner} aria-label="Важливе застереження">
      <div className={`inner ${s.inner}`}>
        <p>
          Регресивна терапія не є медичною послугою і не замінює діагностику та
          лікування у лікаря або психотерапевта. Перед сесією ознайомтеся з{' '}
          <a href="#contraindications">протипоказаннями</a>. Якщо ви в
          кризовому стані — зверніться на Lifeline Ukraine 7333 або 112.
        </p>
      </div>
    </aside>
  );
}

export default Disclaimer;
