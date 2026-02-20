import CTA from '../reusable/CTA';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <main className="hero-container">
        <span className="hero-eyebrow">Estudio jurídico & contable</span>

        <h1>
          <em>Decisiones legales y contables</em>
          <br />
          con respaldo y seguridad
        </h1>

        <p>
          Evitá errores, riesgos y costos innecesarios. Nuestros profesionales
          te acompañan paso a paso, explicando todo con claridad y criterio.
        </p>

        <CTA />
      </main>

      <div className="hero-accent" />
    </section>
  );
}
