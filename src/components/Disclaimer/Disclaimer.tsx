import s from './Disclaimer.module.css';

function Disclaimer() {
  return (
    <aside className={s.banner} aria-label="Важливе застереження">
      <div className={`inner ${s.inner}`}>
        <p>
          Я працюю з регресійним гіпнозом як із практикою самопізнання та
          емоційної підтримки. Це не заміна консультації лікаря, психотерапевта
          чи іншої медичної допомоги. Якщо у вас гострий стан — зверніться до
          профільного фахівця.
        </p>
      </div>
    </aside>
  );
}

export default Disclaimer;
