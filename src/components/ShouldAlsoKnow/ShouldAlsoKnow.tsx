import { site } from '../../data/site';
import s from './ShouldAlsoKnow.module.css';

function ShouldAlsoKnow() {
  return (
    <section className={s.section} aria-labelledby="know-title">
      <div className={`inner ${s.grid}`}>
        <div className={s.imageContainer}>
          <img
            src="/images/session.webp"
            alt="Спокійне місце для онлайн-сеансу"
            width={640}
            height={720}
          />
        </div>
        <div className={s.contentContainer}>
          <p className="sectionLabel">Важливо знати</p>
          <h2 id="know-title">Як проходить робота</h2>
          <p>
            Сеанс — це безпечний діалог у стані глибокого розслаблення. Ми не
            «витягуємо» спогади силоміць: рухаємось лише туди, куди готова ваша
            психіка. Конфіденційність і ваш темп — основа процесу.
          </p>
          <p className={s.brandLine}>
            <span>{site.brand}</span> поруч, коли готові зробити крок.
          </p>
          <a className="btnPrimary" href="#contact">
            Зв’язатися зі мною
          </a>
        </div>
      </div>
    </section>
  );
}

export default ShouldAlsoKnow;
